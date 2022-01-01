class VectorPlaneAreas {
    // States
    #next_plane;
    #next_vector;
    #vector_inputs;
    #plane_inputs;

    constructor(vector_div_id, plane_div_id) {
        this.vector_div = document.getElementById(vector_div_id);
        this.plane_div = document.getElementById(plane_div_id);
        this.#next_plane = 0;
        this.#next_vector = 0;
        this.#vector_inputs = [];
        this.#plane_inputs = [];
    }

    add_vector() {
        const paragraph = Util.add_paragraph(
            `V<sub>${this.#next_vector + 1}</sub> =
            (<input name="x-vector" id="x-vector${
                this.#next_vector
            }" class="number-input" type="number">,
            <input name="y-vector" id="y-vector${
                this.#next_vector
            }" class="number-input" type="number">,
            <input name="z-vector" id="z-vector${
                this.#next_vector
            }" class="number-input" type="number">)`,
            this.vector_div,
            `vector${this.#next_vector}`
        );
        this.#vector_inputs.push(paragraph.getElementsByTagName('input'));
        ++this.#next_vector;
    }
    add_plane() {
        const paragraph = Util.add_paragraph(
            `P<sub>${this.#next_plane + 1}</sub>: <input type="number" name="x-plane" id="x-plane${
                this.#next_plane
            }" class="number-input"> x +
            <input type="number" name="y-plane" id="y-plane${
                this.#next_plane
            }" class="number-input"> y +
            <input type="number" name="z-plane" id="z-plane${
                this.#next_plane
            }" class="number-input"> z +
            <input type="number" name="d-plane" id="d-plane${
                this.#next_plane
            }" class="number-input"> = 0`,
            this.plane_div,
            `plane${this.#next_plane}`
        );
        this.#plane_inputs.push(paragraph.getElementsByTagName('input'));
        ++this.#next_plane;
    }
    remove_vector() {
        if (this.#next_vector === 0) {
            return;
        }
        document.getElementById(`vector${this.#next_vector - 1}`).remove();
        this.#vector_inputs.pop();
        --this.#next_vector;
    }
    remove_plane() {
        if (this.#next_plane === 0) {
            return;
        }
        document.getElementById(`plane${this.#next_plane - 1}`).remove();
        this.#plane_inputs.pop();
        --this.#next_plane;
    }
    clear() {
        this.vector_div.innerHTML = '';
        this.plane_div.innerHTML = '';
        this.#next_plane = 0;
        this.#next_vector = 0;
        this.#vector_inputs = [];
        this.#plane_inputs = [];
    }

    get vectors() {
        return Util.values_from_2d_inputs_array(this.#vector_inputs, true);
    }
    get planes() {
        return Util.values_from_2d_inputs_array(this.#plane_inputs, true);
    }
}
