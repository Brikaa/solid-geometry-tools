(function () {
    const vectors = [];
    const planes = [];
    document
        .getElementById('vector-button')
        .addEventListener('click', () =>
            Util.change_elements_visibility({ 'vector-input': true, 'plane-input': false })
        );
    document
        .getElementById('plane-button')
        .addEventListener('click', () =>
            Util.change_elements_visibility({ 'plane-input': true, 'vector-input': false })
        );
})();
