//your global state manager! add functions, variables and access in every page.
var cache = {}
function contentGen(db){
    let content = ''
    let number = 1
    for(let j=0;j<db.description.length;j++){
        let el = db.description[j]
        switch (el.component) {
            case "paragraph":
                content = content + el.text + '<br><br>'
                break;
            case "bulleted_list_item":
                content = content +'&#149; ' + el.text + '<br>'
                break;
            case "numbered_list_item":
                content = content + '' + `${number}. ` + el.text + '<br>'
                number +=1
                break;
            case "code":
                code_text = el.text .replace(/\\/g, '""') // Replace \ with ""
                                    .replace(/\n/g, '<br>') // Replace \n with <br>
                                    .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'); // Replace \t with HTML tab space
                content = content+ '<div class="code_block">' + code_text +'</div>'+ '<br>'
                break;
        
            default:
                break;
        }
    }
    return content
}