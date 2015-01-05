/**
 * StandaloneApp Workbench Application Class.
 *
 * @class workbench.Application.StandaloneApp
 * @extends {workbench.Application} from workbench
 */
/*jshint -W079 */
var StandaloneApp = workbench.Application.extend(function () {

    /**
     * Overloaded constructor for workbench.Application.StandaloneApp class.
     *
     * @method constructor
     * @param {Object} settings an object that contains:
     * @param {Element} settings.el the document element that will hold the StandaloneApp,
     * @param {String} settings.dataRoot the root path to the data, and
     * @param {String} settings.staticRoot the root path to the Workbench distribution.
     */
    this.constructor = function(settings) {
        this.super();
        this.el = qwery(settings.el)[0];
        this.dataRoot = settings.dataRoot;
        this.staticRoot = settings.staticRoot;
        this.title = "Workbench";
    };

    /**
     * Overloaded destructor for workbench.Application.StandaloneApp class.
     *
     * @method destructor
     */
    this.destructor = function() {
        this.super();
        this.el = null;
        this.dataRoot = null;
        this.staticRoot = null;
        this.title = null;
    };

    /**
     * Overloaded initialize for workbench.Application.StandaloneApp class.
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
     * Overloaded render for workbench.Application.StandaloneApp class.
     *
     *    If the model is loaded,
     *    load the layout for the StandaloneApp, and
     *    add the header templates.
     *
     * @method render
     */
    this.render = function () {
        this.super();

        if (this.model.isLoaded()) {

            this.el.innerHTML = workbench.app.templates.layout({});

            qwery('.header-left')[0].innerHTML = workbench.templates.headerleft({
                icon: 'fa fa-trello',
                title: this.title
            });
        }
    };

    /**
     * modelReady an event handler for notification of when the data model is available.
     *
     *    When the model is loaded, remove the listener, and render the StandaloneApp.
     *
     * @method render
     * @param {CustomEvent} e the event triggered from loading the data model
     */
    this.modelReady = function (e) {
        bean.off(document, 'w:model-ready', this.modelReady);
        this.render();
    };
});
