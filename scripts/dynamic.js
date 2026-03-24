//your global state manager! add functions, variables and access in every page.
var cache = {}
function contentGen(db) {
    let content = '';
    let inBullets = false;
    let inNumbers = false;

    for (let j = 0; j < db.description.length; j++) {
        let el = db.description[j];

        switch (el.component) {
            case "paragraph":
                if (inBullets) { content += '</ul>'; inBullets = false; }
                if (inNumbers) { content += '</ol>'; inNumbers = false; }

                content += `<p class="paragraph">${el.text}</p>`;
                break;

            case "bulleted_list_item":
                if (!inBullets) { content += '<ul>'; inBullets = true; }
                content += `<li>${el.text}</li>`;
                break;

            case "numbered_list_item":
                if (!inNumbers) { content += '<ol>'; inNumbers = true; }
                content += `<li>${el.text}</li>`;
                break;

            case "code":
                if (inBullets) { content += '</ul>'; inBullets = false; }
                if (inNumbers) { content += '</ol>'; inNumbers = false; }

                let code_text = el.text.replace(/\\/g, '""')
                                       .replace(/\n/g, '<br>')
                                       .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;');
                content += `<div class="code_block">${code_text}</div>`;
                break;

            case "heading_3":
                if (inBullets) { content += '</ul>'; inBullets = false; }
                if (inNumbers) { content += '</ol>'; inNumbers = false; }

                content += `<h3>${el.text}</h3>`;
                break;

            default:
                break;
        }
    }

    if (inBullets) content += '</ul>';
    if (inNumbers) content += '</ol>';

    return content;
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


