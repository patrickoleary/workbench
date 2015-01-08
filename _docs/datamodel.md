---
layout: docs
title: datamodel.js
prev_section: app-main
next_section: init
permalink: /docs/datamodel/
---

# Global





* * *

## Class: DataModel
DataModel Workbench Model Class.

### DataModel.constructor(settings, settings.basePath, settings.infoFile) 

Overloaded constructor for workbench.Model.DataModel class.

**Parameters**

**settings**: `Object`, an object that contains:

**settings.basePath**: `String`, the root path to the data, and

**settings.infoFile**: `String`, the json filename.


### DataModel.initialize() 

Overloaded initialize for workbench.Application.StandaloneApp class.


### DataModel.getDataType() 

getDataType for workbench.Model.DataModel class.

**Returns**: `String`, the type of data.

### DataModel.getFilePattern(keySetList, ignoreList) 

getFilePattern for workbench.Model.DataModel class.

**Parameters**

**keySetList**: `Object`, a list of key value pairs

**ignoreList**: `Array`, an array keys to ignore

**Returns**: `String`, the file path based on the updated keySetList.



* * *










