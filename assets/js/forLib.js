(function () {
    let items = document.querySelectorAll('[loop]');
    for (let item of items) {
        let html = item.innerHTML;
        let time = Number(item.getAttribute('loop'))
        for (let i = 0; i < time - 1; i++) {
            item.innerHTML += html;
        }
    }
})();