(function () {
    const vector_plane_area = new VectorPlaneAreas('vector-input', 'plane-input');
    const plotter = new Plotter('plotly-canvas');
    document
        .getElementById('vector-add-button')
        .addEventListener('click', () => vector_plane_area.add_vector());
    document
        .getElementById('plane-add-button')
        .addEventListener('click', () => vector_plane_area.add_plane());
    document
        .getElementById('vector-remove-button')
        .addEventListener('click', () => vector_plane_area.remove_vector());
    document
        .getElementById('plane-remove-button')
        .addEventListener('click', () => vector_plane_area.remove_plane());
    document
        .getElementById('clear-button')
        .addEventListener('click', () => vector_plane_area.clear());
    document.getElementById('draw-button').addEventListener('click', () => {
        try {
            plotter.plot(vector_plane_area.vectors, vector_plane_area.planes);
        } catch (e) {
            if (e.cause === 'empty_vector_or_plane') {
                alert(`Invalid vectors/planes`);
            }
        }
    });
})();
