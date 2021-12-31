class Plotter {
    #div;
    constructor(canvas_id) {
        this.#div = document.getElementById(canvas_id);
    }
    static #calculate_plane_points(plane) {
        // ax + by + cz + d = 0
        // TODO: improve algorithm for when any of the coefficients is zero
        const [a, b, c, d] = plane;
        const points = {
            x: [0, 0, 10, 10],
            y: [0, 10, 0, 10],
            z: [],
            type: 'mesh3d'
        };
        for (let i = 0; i < 4; ++i) {
            points.z.push((-d - b * points.y[i] - a * points.x[i]) / c);
        }
        console.log(points);
        return points;
    }

    plot(vectors, planes) {
        if (vectors.length == 0 && planes.length == 0) {
            throw new Error('vectors and planes are empty', { cause: 'empty_vector_or_plane' });
        }
        for (const plane of planes) {
            const points = Plotter.#calculate_plane_points(plane);
            Plotly.newPlot(this.#div, [points], Plotter.layout);
        }
    }
}
