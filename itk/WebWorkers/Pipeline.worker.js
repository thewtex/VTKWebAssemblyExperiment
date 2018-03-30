(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function RegisterPromise(e){var t=_defineProperty({},DEFAULT_HANDLER,e),r=self.postMessage.bind(self),n=new(function(e){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return _inherits(n,e),_createClass(n,[{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return r({eventName:e,args:n}),this}},{key:"emitLocally",value:function(e){for(var t,r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];(t=_get(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"emit",this)).call.apply(t,[this,e].concat(o))}},{key:"operation",value:function(e,r){return t[e]=r,this}}]),n}(TinyEmitter)),o=function(e,t,r){var n=function(t){t&&t instanceof TransferableResponse?a(e,RESULT_SUCCESS,t.payload,t.transferable):a(e,RESULT_SUCCESS,t)},o=function(t){a(e,RESULT_ERROR,{message:t.message,stack:t.stack})};try{var s=i(e,t,r);isPromise(s)?s.then(n).catch(o):n(s)}catch(e){o(e)}},i=function(e,r,n){var o=t[n||DEFAULT_HANDLER];if(!o)throw new Error("Not found handler for this request");return o(r,s.bind(null,e))},a=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];r([MESSAGE_RESULT,e,t,n],o)},s=function(e,t,n){if(!t)throw new Error("eventName is required");if("string"!=typeof t)throw new Error("eventName should be string");r([MESSAGE_EVENT,e,t,n])};return self.addEventListener("message",function(e){var t=e.data;Array.isArray(t)?o.apply(void 0,_toConsumableArray(t)):t&&t.eventName&&n.emitLocally.apply(n,[t.eventName].concat(_toConsumableArray(t.args)))}),n}var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_get=function e(t,r,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,r);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,n)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(n)},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},TinyEmitter=require("./tiny-emitter"),MESSAGE_RESULT=0,MESSAGE_EVENT=1,RESULT_ERROR=0,RESULT_SUCCESS=1,DEFAULT_HANDLER="main",isPromise=function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&"function"==typeof e.then&&"function"==typeof e.catch},TransferableResponse=function e(t,r){_classCallCheck(this,e),this.payload=t,this.transferable=r};module.exports=RegisterPromise,module.exports.TransferableResponse=TransferableResponse;
},{"./tiny-emitter":2}],2:[function(require,module,exports){
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),TinyEmitter=function(){function e(){_classCallCheck(this,e),Object.defineProperty(this,"__listeners",{value:{},enumerable:!1,writable:!1})}return _createClass(e,[{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=!0,s=!1,a=void 0;try{for(var l,o=this.__listeners[e][Symbol.iterator]();!(i=(l=o.next()).done);i=!0){l.value.apply(void 0,n)}}catch(e){s=!0,a=e}finally{try{!i&&o.return&&o.return()}finally{if(s)throw a}}return this}},{key:"once",value:function(e,t){var n=this,r=function r(){n.off(e,r),t.apply(void 0,arguments)};return this.on(e,r)}},{key:"on",value:function(e,t){return this.__listeners[e]||(this.__listeners[e]=[]),this.__listeners[e].push(t),this}},{key:"off",value:function(e,t){return this.__listeners[e]=t?this.__listeners[e].filter(function(e){return e!==t}):[],this}}]),e}();module.exports=TinyEmitter;
},{}],3:[function(require,module,exports){
"use strict";var Text="Text",Binary="Binary",Image="Image",Mesh="Mesh";module.exports={Text:Text,Binary:Binary,Image:Image,Mesh:Mesh};

},{}],4:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _register=require("webworker-promise/lib/register"),_register2=_interopRequireDefault(_register),_loadEmscriptenModuleBrowser=require("../loadEmscriptenModuleBrowser"),_loadEmscriptenModuleBrowser2=_interopRequireDefault(_loadEmscriptenModuleBrowser),_runPipelineEmscripten=require("../runPipelineEmscripten"),_runPipelineEmscripten2=_interopRequireDefault(_runPipelineEmscripten),_IOTypes=require("../IOTypes"),_IOTypes2=_interopRequireDefault(_IOTypes),pipelinePathToModule={},runPipeline=function(e,r,t,i,n){var u=null;e in pipelinePathToModule?u=pipelinePathToModule[e]:(pipelinePathToModule[e]=(0,_loadEmscriptenModuleBrowser2.default)(n.itkModulesPath,"Pipelines",e),u=pipelinePathToModule[e]);var a=(0,_runPipelineEmscripten2.default)(u,r,t,i),p=[];return a.outputs&&a.outputs.forEach(function(e){e.type===_IOTypes2.default.Binary&&(e.data.buffer?p.push(e.data.buffer):e.data.byteLength&&p.push(e.data)),e.type===_IOTypes2.default.Image&&(e.data.data.buffer?p.push(e.data.data.buffer):e.data.data.byteLength&&p.push(e.data.data))}),new _register2.default.TransferableResponse(a,p)};(0,_register2.default)(function(e){return"runPipeline"===e.operation?Promise.resolve(runPipeline(e.pipelinePath,e.args,e.outputs,e.inputs,e.config)):Promise.resolve(new Error("Unknown worker operation"))});

},{"../IOTypes":3,"../loadEmscriptenModuleBrowser":5,"../runPipelineEmscripten":6,"webworker-promise/lib/register":1}],5:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},loadEmscriptenModule=function(e,o,t){var r=e;"/"!==e[0]&&(r="..");var n=r+"/"+o+"/"+t+".js";return"object"===("undefined"==typeof WebAssembly?"undefined":_typeof(WebAssembly))&&"function"==typeof WebAssembly.Memory&&(n=r+"/"+o+"/"+t+"Wasm.js"),importScripts(n),Module};exports.default=loadEmscriptenModule;

},{}],6:[function(require,module,exports){
"use strict";var IOTypes=require("./IOTypes.js"),runPipelineEmscripten=function(e,a,t,r){r&&r.forEach(function(a){switch(a.type){case IOTypes.Text:case IOTypes.Binary:e.writeFile(a.path,a.data);break;case IOTypes.Image:var t={};for(var r in a.data)a.data.hasOwnProperty(r)&&"data"!==r&&(t[r]=a.data[r]);t.data=a.path+".data",e.writeFile(a.path,JSON.stringify(t)),e.writeFile(t.data,a.data.data);break;default:throw Error("Unsupported input IOType")}}),e.resetModuleStdout(),e.resetModuleStderr(),e.callMain(a);var d=e.getModuleStdout(),i=e.getModuleStderr(),s=[];return t&&t.forEach(function(a){var t={};switch(Object.assign(t,a),a.type){case IOTypes.Text:t.data=e.readFile(a.path,{encoding:"utf8"});break;case IOTypes.Binary:t.data=e.readFile(a.path,{encoding:"binary"});break;case IOTypes.Image:var r=e.readFile(a.path,{encoding:"utf8"}),d=JSON.parse(r),i=e.readFile(d.data,{encoding:"binary"});d.data=i.buffer,t.data=d;break;default:throw Error("Unsupported output IOType")}s.push(t)}),{stdout:d,stderr:i,outputs:s}};module.exports=runPipelineEmscripten;

},{"./IOTypes.js":3}]},{},[4]);
