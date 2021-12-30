class Util {
    static add_paragraph(text, parent_element, paragraph_id = '') {
        const paragraph = document.createElement('p');
        if (paragraph_id !== '') {
            paragraph.id = paragraph_id;
        }
        paragraph.innerHTML = text;
        parent_element.appendChild(paragraph);
    }
}
