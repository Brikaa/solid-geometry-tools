(function () {
    const vectors = [];
    const planes = [];
    let no_vectors = 0;
    let no_planes = 0;
    function clear_elements() {
        Util.set_elements_html({ 'vector-input': '', 'plane-input': '' });
        no_vectors = 0;
        no_planes = 0;
    }
    document.getElementById('vector-add-button').addEventListener('click', () => {
        Util.add_paragraph(
            `V${no_vectors + 1} =
            (<input name="x-vector" id="x-vector${
                no_vectors + 1
            }" class="number-input" type="number">,
            <input name="y-vector" id="y-vector${
                no_vectors + 1
            }" class="number-input" type="number">,
            <input name="z-vector" id="z-vector${
                no_vectors + 1
            }" class="number-input" type="number">)`,
            'vector-input',
            `vector${no_vectors + 1}`
        );
        ++no_vectors;
    });
    document.getElementById('plane-add-button').addEventListener('click', () => {
        Util.add_paragraph(
            `P${no_planes + 1}: <input type="number" name="x-plane" id="x-plane${
                no_planes + 1
            }" class="number-input"> x +
            <input type="number" name="y-plane" id="x-plane${
                no_planes + 1
            }" class="number-input"> y +
            <input type="number" name="z-plane" id="y-plane${
                no_planes + 1
            }" class="number-input"> z +
            <input type="number" name="z-plane" id="z-plane${
                no_planes + 1
            }" class="number-input"> = 0`,
            'plane-input',
            `plane${no_planes + 1}`
        );
        ++no_planes;
    });
    document.getElementById('vector-remove-button').addEventListener('click', () => {
        if (no_vectors == 0) {
            return;
        }
        document.getElementById(`vector${no_vectors}`).remove();
        --no_vectors;
    });
    document.getElementById('plane-remove-button').addEventListener('click', () => {
        if (no_planes == 0) {
            return;
        }
        document.getElementById(`plane${no_planes}`).remove();
        --no_planes;
    });
    document.getElementById('clear-button').addEventListener('click', clear_elements);
})();
