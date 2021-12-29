class Util {
    static change_elements_visibility(ids_to_visibility_map) {
        for (const element_id in ids_to_visibility_map) {
            const element = document.getElementById(element_id);
            const visibility = ids_to_visibility_map[element_id] ? 'initial' : 'none';
            element.style.display = visibility;
        }
    }
    static add_paragraph(text, parent_element_id) {
        const parent_element = document.getElementById(parent_element_id);
        const paragraph = document.createElement('p');
        paragraph.innerHTML = text;
        parent_element.appendChild(paragraph);
    }
}
