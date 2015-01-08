/**
 * DivApp Workbench Application Class.
 *
 * @class workbench.Application.DivApp
 * @extends {workbench.Application} from workbench
 */
/*jshint -W079 */
var DivApp = workbench.Application.extend(function () {

    /**
     * Overloaded constructor for workbench.Application.DivApp class.
     *
     * @method constructor
     * @param {Object} settings an object that contains:
     * @param {Element} settings.el the document element that will hold the DivApp,
     * @param {String} settings.dataRoot the root path to the data, and
     * @param {String} settings.staticRoot the root path to the Workbench distribution.
     */
    this.constructor = function(settings) {
        this.super();
        this.el = qwery(settings.el)[0];
        this.dataRoot = settings.dataRoot;
        this.staticRoot = settings.staticRoot;
    };

    /**
     * Overloaded destructor for workbench.Application.DivApp class.
     *
     * @method destructor
     */
    this.destructor = function() {
        this.super();
        this.el = null;
        this.dataRoot = null;
        this.staticRoot = null;
    };

    /**
     * Overloaded initialize for workbench.Application.DivApp class.
     *
     *    Create the data model,
     *    add a listener for when the data model is ready to be used, and
     *    fetch the model.
     *
     * @method initialize
     */
    this.initialize = function() {
        this.super();
        this.model = new workbench.Model.DataModel({
            basePath: this.dataRoot,
            infoFile: 'info.json'
        });

        bean.on(document, 'w:model-ready', this.modelReady);

        this.model.fetch();
    };

    /**
     * Overloaded render for workbench.Application.DivApp class.
     *
     *    If the model is loaded,
     *    load the layout for the DivApp.
     *
     * @method render
     */
    this.render = function () {
        this.super();

        if (this.model.isLoaded()) {

            this.el.innerHTML = workbench.app.templates.divLayout({});
        }
    };

    /**
     * modelReady an event handler for notification of when the data model is available.
     *
     *    When the model is loaded, remove the listener, and render the DivApp.
     *
     * @method render
     * @param {CustomEvent} e the event triggered from loading the data model
     */
    this.modelReady = function (e) {
        bean.off(document, 'w:model-ready', this.modelReady);
        this.render();
    };
});
