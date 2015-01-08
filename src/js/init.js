/**
 * The init.js file is guaranteed to execute prior to the files under lib/, so any code that should execute initially should
 * be put into this file.
 */
/* jshint -W097 */
"use strict";

/**
 * If there is no console, then we create one.
 *
 * Note: The console object might not be available on every browser (especially mobiles).
 */
if (!window.console) {
    /*jshint -W079 */
    var console = {
        log: function () {},
        error: function () {}
    };
}

/**
 * This is the namespace for the core classes contained in workbench.
 *
 * @namespace {workbench}
 */

/*jshint -W079 */
var workbench = workbench || {};
