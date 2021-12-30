(function () {
    const vector_plane_area = new VectorPlaneAreas('vector-input', 'plane-input');
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
})();
