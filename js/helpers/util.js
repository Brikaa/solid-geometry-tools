class Util {
    static change_elements_visibility(element_ids, visibilities) {
        if (typeof element_ids == 'string' && typeof visibilities == "string") {
            document.getElementById(element_ids).style.display = visibilities;
            return;
        }
        if (element_ids.length !== visibilities.length) {
            throw new Error('The length of element ids must match the length of the visibilities.');
        }
        for (let i = 0; i < element_ids.length; ++i) {
            document.getElementById(element_ids[i]).style.display = visibilities[i];
        }
    }
}
