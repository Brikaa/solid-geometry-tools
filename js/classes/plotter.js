class Plotter {
    #div;
    constructor(canvas_id) {
        this.#div = document.getElementById(canvas_id);
    }
    static #calculate_plane_points(plane) {
        console.log(plane);
    }

    plot(vectors, planes) {
        if (vectors.length == 0 && planes.length == 0) {
            throw new Error('vectors and planes are empty', { cause: 'empty_vector_or_plane' });
        }
        for (const plane of planes) {
            const points = Plotter.#calculate_plane_points(plane);
            // Plotly.newPlot(this.#div, [points]);
        }
    }
}
