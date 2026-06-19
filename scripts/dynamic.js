//your global state manager! add functions, variables and access in every page.
var cache = {}
function contentGen(db) {
    let content = '';
    let inBullets = false;
    let inNumbers = false;

    const escapeHtml = (text = '') => {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };

    const closeLists = () => {
        if (inBullets) { content += '</ul>'; inBullets = false; }
        if (inNumbers) { content += '</ol>'; inNumbers = false; }
    };

    const renderChildren = (children) => {
        let html = '';
        let childBullets = false;
        let childNumbers = false;

        children.forEach((child) => {
            switch (child.component) {
                case 'bulleted_list_item':
                    if (childNumbers) { html += '</ol>'; childNumbers = false; }
                    if (!childBullets) { html += '<ul>'; childBullets = true; }
                    html += `<li>${escapeHtml(child.text)}</li>`;
                    break;
                case 'numbered_list_item':
                    if (childBullets) { html += '</ul>'; childBullets = false; }
                    if (!childNumbers) { html += '<ol>'; childNumbers = true; }
                    html += `<li>${escapeHtml(child.text)}</li>`;
                    break;
                case 'code':
                    if (childBullets) { html += '</ul>'; childBullets = false; }
                    if (childNumbers) { html += '</ol>'; childNumbers = false; }
                    let childCode = escapeHtml(child.text)
                        .replace(/\n/g, '<br>')
                        .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
                    html += `<div class="code_block"><pre>${childCode}</pre></div>`;
                    break;
                case 'paragraph':
                default:
                    if (childBullets) { html += '</ul>'; childBullets = false; }
                    if (childNumbers) { html += '</ol>'; childNumbers = false; }
                    html += `<p class="paragraph">${escapeHtml(child.text)}</p>`;
                    break;
            }
        });

        if (childBullets) html += '</ul>';
        if (childNumbers) html += '</ol>';
        return html;
    };

    const renderHeading = (level, text) => {
        const safeLevel = Math.min(Math.max(parseInt(level, 10) || 2, 1), 6);
        return `<h${safeLevel}>${escapeHtml(text)}</h${safeLevel}>`;
    };

    for (let j = 0; j < db.description.length; j++) {
        let el = db.description[j];

        switch (el.component) {
            case 'paragraph':
                closeLists();
                content += `<p class="paragraph">${escapeHtml(el.text)}</p>`;
                break;

            case 'bulleted_list_item':
                if (inNumbers) { content += '</ol>'; inNumbers = false; }
                if (!inBullets) { content += '<ul>'; inBullets = true; }
                content += `<li>${escapeHtml(el.text)}`;
                if (Array.isArray(el.children) && el.children.length) {
                    content += renderChildren(el.children);
                }
                content += '</li>';
                break;

            case 'numbered_list_item':
                if (inBullets) { content += '</ul>'; inBullets = false; }
                if (!inNumbers) { content += '<ol>'; inNumbers = true; }
                content += `<li>${escapeHtml(el.text)}`;
                if (Array.isArray(el.children) && el.children.length) {
                    content += renderChildren(el.children);
                }
                content += '</li>';
                break;

            case 'code':
                closeLists();
                let codeText = escapeHtml(el.text)
                    .replace(/\n/g, '<br>')
                    .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
                content += `<div class="code_block"><pre>${codeText}</pre></div>`;
                break;

            case 'equation':
                closeLists();
                const equationRaw = el.expression || el.text || '';
                if (window.katex && typeof window.katex.renderToString === 'function') {
                    const renderedEquation = window.katex.renderToString(equationRaw, {
                        throwOnError: false,
                        displayMode: true
                    });
                    content += `<div class="equation">${renderedEquation}</div>`;
                } else {
                    content += `<div class="equation">${escapeHtml(equationRaw)}</div>`;
                }
                break;

            case 'heading_2':
            case 'heading_3':
            case 'heading_1':
            case 'heading_4':
            case 'heading_5':
            case 'heading_6':
                closeLists();
                const level = el.component.split('_')[1];
                content += renderHeading(level, el.text);
                break;

            case 'divider':
                closeLists();
                content += '<hr />';
                break;

            default:
                closeLists();
                if (el.text) {
                    content += `<p class="paragraph">${escapeHtml(el.text)}</p>`;
                }
                break;
        }
    }

    closeLists();
    return content;
}

function renderMath(rootElement = document.body) {
    if (window.renderMathInElement) {
        window.renderMathInElement(rootElement, {
            delimiters: [
                {left: '\\[', right: '\\]', display: true},
                {left: '\\(', right: '\\)', display: false}
            ],
            throwOnError: false
        });
    }
}

// Stack to store navigation history
const navigationStack = [];

// Function to handle hash changes
function handleHashChange() {
    const hash = window.location.hash;

    // Handle root address with no hash
    if (!hash) {
        if (navigationStack.length === 0 || navigationStack[navigationStack.length - 1] !== 'Home') {
            navigationStack.push('Home');
        }
        if (typeof window['Home'] === 'function') {
            window['Home']();
        }
        return;
    }

    // Extract the relevant part of the hash
    const hashParts = hash.split('?')[0]; // Remove query parameters if any
    let page = hashParts.replace('#', '');

    // Special case: Store 'Blog' for 'DetailedBlog'
    if (page === 'DetailedBlog') {
        page = 'Blog';
    }

    // Push the new page to the stack if it's not the same as the current top
    if (navigationStack.length === 0 || navigationStack[navigationStack.length - 1] !== page) {
        navigationStack.push(page);
    }

    // Call the corresponding function dynamically
    if (typeof window[page] === 'function') {
        window[page]();
    }
}

// Function to handle back button navigation
function handleBackNavigation() {
    if (navigationStack.length > 1) {
        // Remove the current top of the stack
        navigationStack.pop();

        // Get the new top of the stack
        const previousPage = navigationStack[navigationStack.length - 1];

        // Update the hash without triggering another hashchange event
        window.removeEventListener('hashchange', handleHashChange);
        window.location.hash = `#${previousPage}`;
        window.addEventListener('hashchange', handleHashChange);

        // Call the corresponding function dynamically
        if (typeof window[previousPage] === 'function') {
            window[previousPage]();
        }
    }
}

// Attach the hashchange event listener
window.addEventListener('hashchange', handleHashChange);

// Attach the back button handler to a custom event or button
// Example: document.getElementById('backButton').addEventListener('click', handleBackNavigation);


