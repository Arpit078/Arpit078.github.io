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


var targetQuestions = 15
var targetDate = "2024-12-31"
