class VectorPlaneAreas {
    #no_planes;
    #no_vectors;
    constructor(vector_div_id, plane_div_id) {
        this.vector_div = document.getElementById(vector_div_id);
        this.plane_div = document.getElementById(plane_div_id)
        this.#no_planes = 0;
        this.#no_vectors = 0;
    }
    add_vector() {
        Util.add_paragraph(
            `V${this.#no_vectors + 1} =
            (<input name="x-vector" id="x-vector${
                this.#no_vectors + 1
            }" class="number-input" type="number">,
            <input name="y-vector" id="y-vector${
                this.#no_vectors + 1
            }" class="number-input" type="number">,
            <input name="z-vector" id="z-vector${
                this.#no_vectors + 1
            }" class="number-input" type="number">)`,
            this.vector_div,
            `vector${this.#no_vectors + 1}`
        );
        ++this.#no_vectors;
    }
    add_plane() {
        Util.add_paragraph(
            `P${this.#no_planes + 1}: <input type="number" name="x-plane" id="x-plane${
                this.#no_planes + 1
            }" class="number-input"> x +
            <input type="number" name="y-plane" id="x-plane${
                this.#no_planes + 1
            }" class="number-input"> y +
            <input type="number" name="z-plane" id="y-plane${
                this.#no_planes + 1
            }" class="number-input"> z +
            <input type="number" name="z-plane" id="z-plane${
                this.#no_planes + 1
            }" class="number-input"> = 0`,
            this.plane_div,
            `plane${this.#no_planes + 1}`
        );
        ++this.#no_planes;
    }
    remove_vector() {
        if (this.#no_vectors == 0) {
            return;
        }
        document.getElementById(`vector${this.#no_vectors}`).remove();
        --this.#no_vectors;
    }
    remove_plane() {
        if (this.#no_planes == 0) {
            return;
        }
        document.getElementById(`plane${this.#no_planes}`).remove();
        --this.#no_planes;
    }
    clear() {
        this.vector_div.innerHTML = '';
        this.plane_div.innerHTML = '';
        this.#no_planes = 0;
        this.#no_vectors = 0;
    }
}
