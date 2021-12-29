class Util {
    static change_elements_visibility(ids_to_visibility_map) {
        for (const element_id in ids_to_visibility_map) {
            const element = document.getElementById(element_id);
            const visibility = ids_to_visibility_map[element_id] ? 'initial' : 'none';
            element.style.display = visibility;
        }
    }
    static add_paragraph(text, parent_element_id, paragraph_id = '') {
        const parent_element = document.getElementById(parent_element_id);
        const paragraph = document.createElement('p');
        if (paragraph_id !== '') {
            paragraph.id = paragraph_id;
        }
        paragraph.innerHTML = text;
        parent_element.appendChild(paragraph);
    }
    static set_elements_html(element_ids_to_html_map) {
        for (const element_id in element_ids_to_html_map) {
            document.getElementById(element_id).innerHTML = element_ids_to_html_map[element_id];
        }
    }
}
