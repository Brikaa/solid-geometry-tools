(function () {
    document
        .getElementById('vector-button')
        .addEventListener('click', () =>
            Util.change_elements_visibility(['vector-input', 'plane-input'], ['initial', 'none'])
        );
    document
        .getElementById('plane-button')
        .addEventListener('click', () =>
            Util.change_elements_visibility(['plane-input', 'vector-input'], ['initial', 'none'])
        );
})();
