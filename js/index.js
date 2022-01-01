(function () {
    const line_plane_area = new LinePlaneAreas('line-input', 'plane-input');
    const plotter = new Plotter('plotly-canvas');
    document
        .getElementById('plane-add-button')
        .addEventListener('click', () => line_plane_area.add_plane());
    document
        .getElementById('plane-remove-button')
        .addEventListener('click', () => line_plane_area.remove_plane());
    document.getElementById('clear-button').addEventListener('click', () => {
        line_plane_area.clear();
        plotter.clear();
    });
    document.getElementById('draw-button').addEventListener('click', () => {
        const planes = line_plane_area.planes.filter((x) => MathUtil.validate_plane(x));
        console.log(planes);
        try {
            plotter.plot(line_plane_area.lines, planes);
        } catch (e) {
            if (e.cause === 'empty_line_or_plane') {
                alert(`Invalid planes`);
            } else {
                alert('An error has occurred while drawing');
                console.log(e);
            }
        }
    });
})();
