class Util {
    static add_paragraph(text, parent_element, paragraph_id = '') {
        const paragraph = document.createElement('p');
        if (paragraph_id !== '') {
            paragraph.id = paragraph_id;
        }
        paragraph.innerHTML = text;
        parent_element.appendChild(paragraph);
        return paragraph;
    }
    static values_from_2d_inputs_array(inputs, only_numerical = false) {
        const final = [];
        for (const input of inputs) {
            let valid = true;
            const sub_component = [];
            for (const i of input) {
                const value = i.value;
                if (!only_numerical) {
                    sub_component.push(i.value);
                    continue;
                }
                valid = value !== '' && !isNaN(value);
                if (!valid) {
                    break;
                }
                sub_component.push(parseFloat(i.value));
            }
            if (!valid) {
                continue;
            }
            final.push(sub_component);
        }
        return final;
    }
}
