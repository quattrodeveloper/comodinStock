/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);
document.addEventListener('deviceready', escanearqr, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}



function onDone(err, status){
  if (err) {
   // here we can handle errors and clean up any loose ends.
   console.error(err);
  }
  if (status.authorized) {
    // W00t, you have camera access and the scanner is initialized.
    // QRscanner.show() should feel very fast.
  } else if (status.denied) {
   // The video preview will remain black, and scanning is disabled. We can
   // try to ask the user to change their mind, but we'll have to send them
   // to their device settings with `QRScanner.openSettings()`.
  } else {
    // we didn't get permission, but we didn't get permanently denied. (On
    // Android, a denial isn't permanent unless the user checks the "Don't
    // ask again" box.) We can ask again at the next relevant opportunity.
  }
}

$(document).ready(function() {
  QRScanner.show();
});

function prepare(){
    QRScanner.prepare();  
  }
  function scan(){
    QRScanner.scan(
    function(err, result){
      if(err) {
        console.log('scan error:', result);
      } else {
        window.alert('result: ' + result['result']);
        console.log(result['result']);


      }
    });
  }

  function cancelScan(){
    QRScanner.cancelScan();
  }
  function frontCamera(){
    QRScanner.useFrontCamera();
  }
  function backCamera(){
    QRScanner.useBackCamera();
  }
  function show(){
    QRScanner.show();
  }
  function hide(){
    QRScanner.hide();
  }
  function pausePreview(){
    QRScanner.pausePreview();
  }
  function resumePreview(){
    QRScanner.resumePreview();
  }
  function destroy(){
    QRScanner.destroy();
  }
  function getStatus(){
    QRScanner.getStatus(console.log);
  }
  function testAll(){
    console.log('Destroying QRScanner to test everything...');
    QRScanner.destroy();
    console.log('Preparing QRScanner...');
    QRScanner.prepare(function(err, status){
      if(err){
        console.error(err._message);
      } else {
        console.log('QRScanner is initialized. Status:');
        console.log(status);
        console.log('Showing QRScanner...');
        QRScanner.show(function(){
          console.log('Starting scan...');
          QRScanner.scan(function(err, result){
            if(err){
              console.log(err);
              console.log('Scan canceled successfully.');
              console.log('Destroying QRScanner...');
              QRScanner.destroy(function(status){
                console.log('QRScanner destroyed. Status:');
                console.log(status);
              });
            }
          });
          window.setTimeout(function(){
            console.log('Pausing preview...');
            QRScanner.pausePreview(function(){
              window.setTimeout(function(){
                console.log('Resuming preview...');
                QRScanner.resumePreview(function(){
                  // shouldn't work if less than 2 cameras, but shouldn't break everything
                  console.log('Switching cameras if available...');
                  QRScanner.useFrontCamera(function(err, status){
                    console.log('Status:');
                    console.log(status);
                    QRScanner.useBackCamera(function(err, status){
                      // shouldn't work, but shouldn't break everything
                      console.log('Making sure the lighting functions don\'t break things...');
                      QRScanner.enableLight();
                      QRScanner.disableLight();
                      console.log('Get status:');
                      QRScanner.getStatus(function(status){
                        console.log(status);
                        console.log('Canceling scan...');
                        QRScanner.cancelScan(function(status){
                          console.log('Final status:');
                          console.log(status);
                        });
                      });

                    });
                  });
                });
              }, 1000);
            });
          }, 3000);
        });
      }
    });
  }


  // This file is generated by `npm run build`.

/*global exports:false*/
/*jshint unused:false */
// remap parameter names from cordova.define
// see `externals` in webpack.cordova.config.js
var cordovaRequire = require;
var cordovaExports = exports;
var cordovaModule = module;
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports) {

module.exports = cordovaModule;

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var globalCordova = __webpack_require__(4);
var cordovaModule = __webpack_require__(1);

var createQRScannerAdapter = __webpack_require__(3);

// pass in global cordova object to expose cordova.exec
var QRScannerAdapter = createQRScannerAdapter(globalCordova);
cordovaModule.exports = QRScannerAdapter;


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = function createQRScanner(cordova){
// The native implementations should return their status as ['string':'string']
// dictionaries. Boolean values are encoded to '0' and '1', respectively.
function stringToBool(string) {
  switch (string) {
    case '1':
      return true;
    case '0':
      return false;
    default:
    throw new Error('QRScanner plugin returned an invalid boolean number-string: ' + string);
  }
}

// Converts the returned ['string':'string'] dictionary to a status object.
function convertStatus(statusDictionary) {
  return {
    authorized: stringToBool(statusDictionary.authorized),
    denied: stringToBool(statusDictionary.denied),
    restricted: stringToBool(statusDictionary.restricted),
    prepared: stringToBool(statusDictionary.prepared),
    scanning: stringToBool(statusDictionary.scanning),
    previewing: stringToBool(statusDictionary.previewing),
    showing: stringToBool(statusDictionary.showing),
    lightEnabled: stringToBool(statusDictionary.lightEnabled),
    canOpenSettings: stringToBool(statusDictionary.canOpenSettings),
    canEnableLight: stringToBool(statusDictionary.canEnableLight),
    canChangeCamera: stringToBool(statusDictionary.canChangeCamera),
    currentCamera: parseInt(statusDictionary.currentCamera)
  };
}

// Simple utility method to ensure the background is transparent. Used by the
// plugin to force re-rendering immediately after the native webview background
// is made transparent.
function clearBackground() {
  var body = document.body;
  if (body.style) {
    body.style.backgroundColor = 'rgba(0,0,0,0.01)';
    body.style.backgroundImage = '';
    setTimeout(function() {
      body.style.backgroundColor = 'transparent';
    }, 1);
    if (body.parentNode && body.parentNode.style) {
      body.parentNode.style.backgroundColor = 'transparent';
      body.parentNode.style.backgroundImage = '';
    }
  }
}

function errorCallback(callback) {
  if (!callback) {
    return null;
  }
  return function(error) {
    var errorCode = parseInt(error);
    var QRScannerError = {};
    switch (errorCode) {
      case 0:
        QRScannerError = {
          name: 'UNEXPECTED_ERROR',
          code: 0,
          _message: 'QRScanner experienced an unexpected error.'
        };
        break;
      case 1:
        QRScannerError = {
          name: 'CAMERA_ACCESS_DENIED',
          code: 1,
          _message: 'The user denied camera access.'
        };
        break;
      case 2:
        QRScannerError = {
          name: 'CAMERA_ACCESS_RESTRICTED',
          code: 2,
          _message: 'Camera access is restricted.'
        };
        break;
      case 3:
        QRScannerError = {
          name: 'BACK_CAMERA_UNAVAILABLE',
          code: 3,
          _message: 'The back camera is unavailable.'
        };
        break;
      case 4:
        QRScannerError = {
          name: 'FRONT_CAMERA_UNAVAILABLE',
          code: 4,
          _message: 'The front camera is unavailable.'
        };
        break;
      case 5:
        QRScannerError = {
          name: 'CAMERA_UNAVAILABLE',
          code: 5,
          _message: 'The camera is unavailable.'
        };
        break;
      case 6:
        QRScannerError = {
          name: 'SCAN_CANCELED',
          code: 6,
          _message: 'Scan was canceled.'
        };
        break;
      case 7:
        QRScannerError = {
          name: 'LIGHT_UNAVAILABLE',
          code: 7,
          _message: 'The device light is unavailable.'
        };
        break;
      case 8:
        // Open settings is only available on iOS 8.0+.
        QRScannerError = {
          name: 'OPEN_SETTINGS_UNAVAILABLE',
          code: 8,
          _message: 'The device is unable to open settings.'
        };
        break;
      default:
        QRScannerError = {
          name: 'UNEXPECTED_ERROR',
          code: 0,
          _message: 'QRScanner returned an invalid error code.'
        };
        break;
    }
    callback(QRScannerError);
  };
}

function successCallback(callback) {
  if (!callback) {
    return null;
  }
  return function(statusDict) {
    callback(null, convertStatus(statusDict));
  };
}

function doneCallback(callback, clear) {
  if (!callback) {
    return null;
  }
  return function(statusDict) {
    if (clear) {
      clearBackground();
    }
    callback(convertStatus(statusDict));
  };
}

return {
  prepare: function(callback) {
    cordova.exec(successCallback(callback), errorCallback(callback), 'QRScanner', 'prepare', []);
  },
  destroy: function(callback) {
    cordova.exec(doneCallback(callback, true), null, 'QRScanner', 'destroy', []);
  },
  scan: function(callback) {
    if (!callback) {
      throw new Error('No callback provided to scan method.');
    }
    var success = function(result) {
      callback(null, result);
    };
    cordova.exec(success, errorCallback(callback), 'QRScanner', 'scan', []);
  },
  cancelScan: function(callback) {
    cordova.exec(doneCallback(callback), null, 'QRScanner', 'cancelScan', []);
  },
  show: function(callback) {
    cordova.exec(doneCallback(callback, true), null, 'QRScanner', 'show', []);
  },
  hide: function(callback) {
    cordova.exec(doneCallback(callback, true), null, 'QRScanner', 'hide', []);
  },
  pausePreview: function(callback) {
    cordova.exec(doneCallback(callback), null, 'QRScanner', 'pausePreview', []);
  },
  resumePreview: function(callback) {
    cordova.exec(doneCallback(callback), null, 'QRScanner', 'resumePreview', []);
  },
  enableLight: function(callback) {
    cordova.exec(successCallback(callback), errorCallback(callback), 'QRScanner', 'enableLight', []);
  },
  disableLight: function(callback) {
    cordova.exec(successCallback(callback), errorCallback(callback), 'QRScanner', 'disableLight', []);
  },
  useCamera: function(index, callback) {
    cordova.exec(successCallback(callback), errorCallback(callback), 'QRScanner', 'useCamera', [index]);
  },
  useFrontCamera: function(callback) {
    var frontCamera = 1;
    if (callback) {
      this.useCamera(frontCamera, callback);
    } else {
      cordova.exec(null, null, 'QRScanner', 'useCamera', [frontCamera]);
    }
  },
  useBackCamera: function(callback) {
    var backCamera = 0;
    if (callback) {
      this.useCamera(backCamera, callback);
    } else {
      cordova.exec(null, null, 'QRScanner', 'useCamera', [backCamera]);
    }
  },
  openSettings: function(callback) {
    if (callback) {
      cordova.exec(successCallback(callback), errorCallback(callback), 'QRScanner', 'openSettings', []);
    } else {
      cordova.exec(null, null, 'QRScanner', 'openSettings', []);
    }
  },
  getStatus: function(callback) {
    if (!callback) {
      throw new Error('No callback provided to getStatus method.');
    }
    cordova.exec(doneCallback(callback), null, 'QRScanner', 'getStatus', []);
  }
};
};


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = cordova;

/***/ })

/******/ });