<h1 align="center">fleet-grid-layout</h1>

<p align="center">
<a href="https://www.npmjs.com/package/vue-grid-layout"><img src="https://img.shields.io/npm/v/vue-grid-layout.svg"/> <img src="https://img.shields.io/npm/dm/vue-grid-layout.svg"/></a> <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/vue-2.2.x-brightgreen.svg"/></a>
</p>

vue-grid-layout is a grid layout system, like [Gridster](http://dsmorse.github.io/gridster.js/), for Vue.js. **Heavily inspired by [React-Grid-Layout](https://github.com/STRML/react-grid-layout)**
fleet-grid-layout is fork from vue-grid-layout but support vue3, and publish by npm.

### **Current version:** 1.0.0 (Supports Vue 3+)

<br/>

[**[Demo](https://jbaysolutions.github.io/vue-grid-layout/examples/01-basic.html) | [Changelog](/CHANGELOG.md)**]

English | [简体中文](./README-zh_CN.md) 

<!--
## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Installation](#installation)
    - [npm](#npm)
    - [browser](#browser)
  - [Usage](#usage)
  - [Documentation](#documentation)
    - [Properties](#properties)
      - [GridLayout](#gridlayout)
      - [GridItem](#griditem)
    - [Events](#events)
- [Contribute](#contribute)
- [TODO List](#todo-list)

## Demos


TODO UPDATE DOCS

Used guide for vue cli build: https://medium.com/justfrontendthings/how-to-create-and-publish-your-own-vuejs-component-library-on-npm-using-vue-cli-28e60943eed3
Also check https://cli.vuejs.org/guide/build-targets.html#library

-->

#### Projects using vue-grid-layout

- [Draxed](https://www.draxed.com/?utm_source=github&utm_medium=web&utm_campaign=vue-grid-layout)
- [cryptotiles](https://www.cryptotiles.io/?utm_source=github&utm_medium=web&utm_campaign=vue-grid-layout)
- [Data Providers](https://www.dataproviders.io/?utm_source=github&utm_medium=web&utm_campaign=vue-grid-layout)
- [Cataholic](https://cataholic.glitch.me/)

*Know of others? Create a PR to let me know!*

## Features

* Draggable widgets
* Resizable widgets
* Static widgets
* Bounds checking for dragging and resizing
* Widgets may be added or removed without rebuilding grid
* Layout can be serialized and restored
* Automatic RTL support (resizing not working with RTL on 2.2.0)
* Responsive


## Getting Started

### Installation

#### npm

    # install with npm    
	npm install fleet-grid-layout --save
    
    # install with yarn    
    yarn add fleet-grid-layout


Import the library

```javascript
    import VueGridLayout from 'vue-grid-layout';
```

Add to other Vue components 

 ```javascript
    export default {
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem
        },
    // ... data, methods, mounted (), etc.
    }
    
```    

#### browser

Include the browser-ready bundle (download from [releases](https://github.com/jbaysolutions/vue-grid-layout/releases)) in your page. The components will be automatically available.

```html
    <script src="vue-grid-layout.umd.min.js"></script>
```

### Usage

```javascript
	var testLayout = [
	    {"x":0,"y":0,"w":2,"h":2,"i":"0"},
	    {"x":2,"y":0,"w":2,"h":4,"i":"1"},
	    {"x":4,"y":0,"w":2,"h":5,"i":"2"},
	    {"x":6,"y":0,"w":2,"h":3,"i":"3"},
	    {"x":8,"y":0,"w":2,"h":3,"i":"4"},
	    {"x":10,"y":0,"w":2,"h":3,"i":"5"},
	    {"x":0,"y":5,"w":2,"h":5,"i":"6"},
	    {"x":2,"y":5,"w":2,"h":5,"i":"7"},
	    {"x":4,"y":5,"w":2,"h":5,"i":"8"},
	    {"x":6,"y":3,"w":2,"h":4,"i":"9"},
	    {"x":8,"y":4,"w":2,"h":4,"i":"10"},
	    {"x":10,"y":4,"w":2,"h":4,"i":"11"},
	    {"x":0,"y":10,"w":2,"h":5,"i":"12"},
	    {"x":2,"y":10,"w":2,"h":5,"i":"13"},
	    {"x":4,"y":8,"w":2,"h":4,"i":"14"},
	    {"x":6,"y":8,"w":2,"h":4,"i":"15"},
	    {"x":8,"y":10,"w":2,"h":5,"i":"16"},
	    {"x":10,"y":4,"w":2,"h":2,"i":"17"},
	    {"x":0,"y":9,"w":2,"h":3,"i":"18"},
	    {"x":2,"y":6,"w":2,"h":2,"i":"19"}
	];
	
	new Vue({
	    el: '#app',
	    data: {
	        layout: testLayout,
	    },
	});
``` 


```html

    <grid-layout
            :layout.sync="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
            {{item.i}}
        </grid-item>
    </grid-layout>
```


### Documentation

#### Properties

##### GridLayout

* **layout**
    
    * type: `Array`
    * required: `true`

    This is the initial layout of the grid.

    The value must be an `Array` of `Object` items. Each item must have `i`, `x`, `y`, `w` and `h` properties. Please refer to the documentation for `GridItem` below for more information.

* **responsiveLayouts**

    * type: `Object`
    * required: `false`
    * default : `{}`

    This is the initial layouts of the grid per breakpoint if `responsive` is set to `true`.
    The keys of the `Object` are breakpoint names and each value is an `Array` of `Object` items as defined by `layout` prop. eg:{ lg:[layout items], md:[layout items] }.
    Setting the prop after the creation of the GridLayout has no effect.

* **colNum**
    
    * type: `Number`
    * required: `false`
    * default: `12`

    Says how many columns the grid has.

    The value should be a _natural number_. 

* **rowHeight**
    
    * type: `Number`
    * required: `false`
    * default: `150`

    Says what is a height of a single row in pixels.

* **maxRows**
    
    * type: `Number`
    * required: `false`
    * default: `Infinity`

    Says what is a maximal number of rows in the grid.

* **margin**
    
    * type: `Array`
    * required: `false`
    * default: `[10, 10]`

    Says what are the margins of elements inside the grid.

    The value must be a two-element `Array` of `Number`. Each value is expressed in pixels. The first element is a margin horizontally, the second element is a vertical margin.

* **isDraggable**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the grids items are draggable.

* **isResizable**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the grids items are resizable.

* **isMirrored**
    
    * type: `Boolean`
    * required: `false`
    * default: `false`

    Says if the RTL/LTR should be reversed.

* **autoSize**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the container height should swells and contracts to fit contents.

* **verticalCompact**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the layout should be compact vertically.

* **preventCollision**
    
    * type: `Boolean`
    * required: `false`
    * default: `false`

    Says if grid items will move when being dragged over.

* **useCssTransforms**
    
    * type: `Boolean`
    * required: `false`
    * default: `true`

    Says if the CSS `transition-property: transform;` should be used.

* **responsive**
    
    * type: `Boolean`
    * required: `false`
    * default: `false`

    Says if the layout should be responsive to window width

* **breakpoints**

    * type: `Object`
    * required: `false`
    * default: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }

    Breakpoints defined for responsive layout. Sets widths on wich column number changes

* **cols**

    * type: `Object`
    * required: `false`
    * default: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }

    Defines number of columns for each breakpoint


##### GridItem

* **i**
    
    * type: `String`
    * required: `true`

    This is the unique identifier of the item.

* **x**
    
    * type: `Number`
    * required: `true`

    Says what is a initial horizontal position of the item (in which column it should be placed).

    The value must be a _whole number_. 

* **y**
    
    * type: `Number`
    * required: `true`

    Says what is a initial vertical position of the item (in which row it should be placed).

    The value must be a _whole number_. 

* **w**
    
    * type: `Number`
    * required: `true`

    Says what is a initial width of the item.

    The value is a number that is multiplied by `colWidth`.

* **h**
    
    * type: `Number`
    * required: `true`

    Says what is a initial height of the item.

    The value is a number that is multiplied by `rowHeight`.

* **minW**
    
    * type: `Number`
    * required: `false`
    * default: `1`

    Says what is a minimal width of the item. If `w` will be smaller then `minW` then `w` will be set to `minW`.

    The value is a number that is multiplied by `colWidth`.

* **minH**
    
    * type: `Number`
    * required: `false`
    * default: `1`

    Says what is a minimal hieght of the item. If `h` will be smaller then `minH` then `h` will be set to `minH`.

    The value is a number that is multiplied by `rowHeight`.

* **maxW**
    
    * type: `Number`
    * required: `false`
    * default: `Infinity`

    Says what is a maximal width of the item. If `w` will be bigger then `maxW` then `w` will be set to `maxW`.

    The value is a number that is multiplied by `colWidth`.

* **maxH**
    
    * type: `Number`
    * required: `false`
    * default: `Infinity`

    Says what is a maximal height of the item. If `h` will be bigger then `maxH` then `h` will be set to `maxH`.

    The value is a number that is multiplied by `rowHeight`

* **isDraggable**
    
    * type: `Boolean`
    * required: `false`
    * default: `null`

    Says if item is draggable.

    If default value is `null` then it's inherited from parent.

* **isResizable**
    
    * type: `Boolean`
    * required: `false`
    * default: `null`

    Says if item is resizable.

    If default value is `null` then it's inherited from parent.

* **static**
    
    * type: `Boolean`
    * required: `false`
    * default: `false`

    Says if item is static (won't be draggable, resizable or moved by other items).


* **dragIgnoreFrom**
    
    * type: `String`
    * required: `false`
    * default: `'a, button'`

    Says which elements of the item shouldn't trigger drag event of the item.

    The value is `css-like` selector string.

    For more info please refer to `ignoreFrom` in [interact.js docs](http://interactjs.io/docs/#ignorable-selectors).

* **dragAllowFrom**
    
    * type: `String`
    * required: `false`
    * default: `null`

    Says which elements of the item should trigger drag event of the item.

    The value is `css-like` selector string.
    
    If `null` then one can drag by any (excluding `dragIgnoreFrom`) element of the item.

    For more info please refer to `allowFrom` in [interact.js docs](http://interactjs.io/docs/#ignorable-selectors).

* **resizeIgnoreFrom**
    
    * type: `String`
    * required: `false`
    * default: `'a, button'`

    Says which elements of the item shouldn't trigger resize event of the item.

    The value is `css-like` selector string.

    For more info please refer to `ignoreFrom` in [interact.js docs](http://interactjs.io/docs/#ignorable-selectors).



#### Events

Move and resize event listeners can be added to each grid-item, so that the parent Vue can be notified when a grid element is being moved or resized.
Moved and resized event listeners can be added, if the only notification needed is when an item is finished moving or resizing.

Working example [here](https://jbaysolutions.github.io/vue-grid-layout/examples/02-events.html)   

````html

    <grid-layout
            :layout="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :vertical-compact="true"
            :margin="[10, 10]"
            :use-css-transforms="true"
            @layout-created="layoutCreatedEvent"
            @layout-before-mount="layoutBeforeMountEvent"
            @layout-mounted="layoutMountedEvent"
            @layout-ready="layoutReadyEvent"
            @layout-updated="layoutUpdatedEvent"
            @breakpoint-changed="breakpointChangedEvent"
    >

        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i"
                   @resize="resizeEvent"
                   @move="moveEvent"
                   @resized="resizedEvent"
                   @container-resized="containerResizedEvent"
                   @moved="movedEvent">
            {{item.i}}
        </grid-item>
    </grid-layout>
```` 

* **layoutCreatedEvent**

    Layout created event

    Emited on the component created lifecycle hook

```javascript
    layoutCreatedEvent: function(newLayout){
      console.log("Created layout: ", newLayout)
    }
```

* **layoutBeforeMountEvent**

    Layout beforeMount event

    Emited on the component beforeMount lifecycle hook

```javascript
    layoutBeforeMountEvent: function(newLayout){
      console.log("beforeMount layout: ", newLayout)
    }
```

* **layoutMountedEvent**

    Layout mounted event

    Emited on the component mounted lifecycle hook

```javascript
    layoutMountedEvent: function(newLayout){
      console.log("Mounted layout: ", newLayout)
    }
```

* **layoutReadyEvent**

    Layout ready event

    Emited when all the operations on the mount hook finish

```javascript
    layoutReadyEvent: function(newLayout){
      console.log("Ready layout: ", newLayout)
    }
```

* **layoutUpdatedEvent**

    Layout updated event

    Every time the layout has finished updating and positions of all grid-items are recalculated

```javascript
    layoutUpdatedEvent: function(newLayout){
      console.log("Updated layout: ", newLayout)
    }
```

* **moveEvent**

    Move event

    Every time an item is being moved and changes position

```javascript
    moveEvent: function(i, newX, newY){
        console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

* **resizeEvent**

    Resize event

    Every time an item is being resized and changes size
 
```javascript
    resizeEvent: function(i, newH, newW, newHPx, newWPx){
        console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
``` 

* **movedEvent**

    Moved event

    Every time an item is finished being moved and changes position

```javascript
    movedEvent: function(i, newX, newY){
        console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
    },
```

* **resizedEvent**

    Resized event

    Every time an item is finished being resized and changes size
 
```javascript
    /**
     * 
     * @param i the item id/index
     * @param newH new height in grid rows 
     * @param newW new width in grid columns
     * @param newHPx new height in pixels
     * @param newWPx new width in pixels
     * 
     */
    resizedEvent: function(i, newH, newW, newHPx, newWPx){
        console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
``` 

* **containerResizedEvent**

    Container Resized event

    Every time the grid item/layout container changes size (browser window or other)
 
```javascript
    /**
     * 
     * @param i the item id/index
     * @param newH new height in grid rows 
     * @param newW new width in grid columns
     * @param newHPx new height in pixels
     * @param newWPx new width in pixels
     * 
     */
    containerResizedEvent: function(i, newH, newW, newHPx, newWPx){
        console.log("CONTAINER RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
    },
``` 

* **breakpointChangedEvent**

    Breakpoint Changed event

    Every time the breakpoint value changes due to window resize
 
```javascript
    /**
     * 
     * @param newBreakpoint the breakpoint name
     * @param newLayout the chosen layout for the breakpoint
     * 
     */
    breakpointChangedEvent: function(newBreakpoint, newLayout){
        console.log("BREAKPOINT CHANGED breakpoint=", newBreakpoint, ", layout: ", newLayout );
    },
``` 


## Contribute

If you have a feature request, please add it as an issue or make a pull request.


## TODO List

- [x] Basic grid layout
- [x] Responsive
- [x] Draggable grid items
- [x] Resizable grid items
- [x] Static elements
- [x] Min/max w/h per item
