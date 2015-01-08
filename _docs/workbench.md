---
layout: docs
title: workbench.js
prev_section: StandaloneApp
next_section: collections
permalink: /docs/workbench/
---

# workbench

This is the namespace for the core classes contained in workbench.

* * *

## Class: Application
Workbench Application Class.

### workbench.Application.initializer() 

initializer is executed before the constructor for workbench.Application class.


### workbench.Application.constructor() 

constructor for workbench.Application class.


### workbench.Application.destructor() 

destructor for workbench.Application class.


### workbench.Application.initialize() 

initialize workbench.Application class.


### workbench.Application.render() 

render workbench.Application.



## Class: Model
Workbench Model Class.

### workbench.Model.initializer() 

initializer is executed before the constructor for workbench.Model class.


### workbench.Model.constructor(settings, settings.basePath, settings.baseFile) 

constructor for workbench.Model class.

**Parameters**

**settings**: `Object`, an object that contains:

**settings.basePath**: `String`, the root path to the data, and

**settings.baseFile**: `String`, the json filename.


### workbench.Model.destructor() 

destructor for workbench.Model class.


### workbench.Model.initialize() 

fetch for workbench.Model class.

   Load the model json file.


### workbench.Model.getHash() 

getHash for workbench.Model class.

**Returns**: `String`, the url of model file to be used as part of a unique id.

### workbench.Model.geturl() 

geturl for workbench.Model class.

**Returns**: `String`, the url of model file.

### workbench.Model.getValue(key) 

getValue for workbench.Model class.

**Parameters**

**key**: `String`, the id of the requested value.

**Returns**: `Object`, the value associated with the key.

### workbench.Model.initialize() 

initialize workbench.Model class.


### workbench.Model.initialize() 

loaded for workbench.Model class.

**Returns**: `bool`, true if the model has been loaded, otherwise false.



* * *










