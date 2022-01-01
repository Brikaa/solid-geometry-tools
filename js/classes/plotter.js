class Plotter {
    #div;
    constructor(canvas_id) {
        this.#div = document.getElementById(canvas_id);
    }

    static #calculate_plane_points(plane) {
        // [a, b, c, d]
        // ax + by + cz + d = 0
        const plane_copy = JSON.parse(JSON.stringify(plane));
        const points = {};
        const remaining_components = ['x', 'y', 'z'];

        const unknown_index = plane_copy.indexOf(plane_copy.find((x) => x !== 0));
        const unknown_component = remaining_components.splice(unknown_index, 1)[0];
        const unknown_component_coefficient = plane_copy.splice(unknown_index, 1)[0];

        points[remaining_components[0]] = [0, 0, 10, 10, 0];
        points[remaining_components[1]] = [0, 10, 10, 0, 0];
        points[unknown_component] = [];

        const no_points = points[remaining_components[0]].length;
        const [k, u, d] = plane_copy;
        for (let i = 0; i < no_points; ++i) {
            points[unknown_component].push(
                (-d -
                    points[remaining_components[0]][i] * k -
                    points[remaining_components[1]][i] * u) /
                    unknown_component_coefficient
            );
        }
        return points;
    }

    clear() {
        Plotly.purge(this.#div);
    }

    plot(lines, planes) {
        if (lines.length === 0 && planes.length === 0) {
            throw new Error('lines and planes are empty', { cause: 'empty_line_or_plane' });
        }
        const planes_corners = [];
        for (let i = 0; i < planes.length; ++i) {
            const plane = planes[i];
            const plane_points = Plotter.#calculate_plane_points(plane);
            plane_points.type = 'mesh3d';
            plane_points.name = `P${i + 1}`;
            plane_points.i = [0, 1, 2];
            plane_points.j = [1, 2, 3];
            plane_points.k = [2, 3, 0];
            planes_corners.push(plane_points);
        }
        console.log(planes_corners);
        Plotly.newPlot(this.#div, planes_corners);
    }
}
