/**
 * The app-main.js file is imported last.
 */

/**
 * Waits for the DOM content to be loaded, and then creates and initializes the standalone application.
 *
 * @event DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', function () {
    var app = new StandaloneApp({
        el: 'body',
        dataRoot: qwery('#w-data-root')[0].innerHTML,
        staticRoot: qwery('#w-static-root')[0].innerHTML
    });
    app.initialize();
}, false);
