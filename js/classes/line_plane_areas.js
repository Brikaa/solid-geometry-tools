class LinePlaneAreas {
    // States
    #next_plane;
    #next_line;
    #line_inputs;
    #plane_inputs;

    constructor(line_div_id, plane_div_id) {
        this.line_div = document.getElementById(line_div_id);
        this.plane_div = document.getElementById(plane_div_id);
        this.#next_plane = 0;
        this.#next_line = 0;
        this.#line_inputs = [];
        this.#plane_inputs = [];
    }

    add_line() {
        const paragraph = Util.add_paragraph(
            `V<sub>${this.#next_line + 1}</sub> =
            (<input name="x-line" id="x-line${
                this.#next_line
            }" class="number-input" type="number">,
            <input name="y-line" id="y-line${
                this.#next_line
            }" class="number-input" type="number">,
            <input name="z-line" id="z-line${
                this.#next_line
            }" class="number-input" type="number">)`,
            this.line_div,
            `line${this.#next_line}`
        );
        this.#line_inputs.push(paragraph.getElementsByTagName('input'));
        ++this.#next_line;
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
    remove_line() {
        if (this.#next_line === 0) {
            return;
        }
        document.getElementById(`line${this.#next_line - 1}`).remove();
        this.#line_inputs.pop();
        --this.#next_line;
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
        this.line_div.innerHTML = '';
        this.plane_div.innerHTML = '';
        this.#next_plane = 0;
        this.#next_line = 0;
        this.#line_inputs = [];
        this.#plane_inputs = [];
    }

    get lines() {
        return Util.values_from_2d_inputs_array(this.#line_inputs, true);
    }
    get planes() {
        return Util.values_from_2d_inputs_array(this.#plane_inputs, true);
    }
}
