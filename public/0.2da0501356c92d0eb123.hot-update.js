webpackHotUpdate(0,{

/***/ 37:
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 15);\n\nvar _Analysis = __webpack_require__(/*! ./components/Analysis */ 35);\n\nvar _Analysis2 = _interopRequireDefault(_Analysis);\n\nvar _Playlist = __webpack_require__(/*! ./components/Playlist */ 77);\n\nvar _Playlist2 = _interopRequireDefault(_Playlist);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.state = {\n            token: '',\n            playlistURI: '',\n            data: {},\n            analyzed: false,\n            playlist: false,\n            track: false\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            //get authorization token needed to access all spotify data\n            //save client-side\n            fetch('/getToken', {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                console.log('HI', responseJSON);\n                _this2.setState({\n                    token: responseJSON.token\n                });\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'handleAnalyze',\n        value: function handleAnalyze() {\n            var _this3 = this;\n\n            var playlistArr = this.state.playlistURI.split(':');\n            var playlistID = playlistArr[playlistArr.length - 1];\n            console.log(playlistID);\n            fetch('/playlist/' + this.state.token + '/' + playlistID, {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                console.log(responseJSON.data);\n                _this3.setState({ data: responseJSON.data, analyzed: true });\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'renderAnalysis',\n        value: function renderAnalysis() {\n            if (this.state.analyzed) {\n                return _react2.default.createElement(_Analysis2.default, { data: this.state.data });\n            }\n        }\n    }, {\n        key: 'handlePlaylistClick',\n        value: function handlePlaylistClick() {\n            this.setState({\n                playlist: true,\n                track: false\n            }, this.renderPlaylist());\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this4 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this4.handlePlaylistClick();\n                        } },\n                    'Playlist'\n                )\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvaW5kZXguanM/ODA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBbmFseXNpcyBmcm9tICcuL2NvbXBvbmVudHMvQW5hbHlzaXMnXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9jb21wb25lbnRzL1BsYXlsaXN0J1xuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdG9rZW46ICcnLFxuICAgICAgICAgICAgcGxheWxpc3RVUkk6ICcnLFxuICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgICBhbmFseXplZDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5bGlzdDogZmFsc2UsXG4gICAgICAgICAgICB0cmFjazogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vZ2V0IGF1dGhvcml6YXRpb24gdG9rZW4gbmVlZGVkIHRvIGFjY2VzcyBhbGwgc3BvdGlmeSBkYXRhXG4gICAgLy9zYXZlIGNsaWVudC1zaWRlXG4gICAgICAgIGZldGNoKCcvZ2V0VG9rZW4nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlSlNPTiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSEknLCByZXNwb25zZUpTT04pXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICB0b2tlbjogcmVzcG9uc2VKU09OLnRva2VuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQW5hbHl6ZSgpIHtcbiAgICAgICAgbGV0IHBsYXlsaXN0QXJyID0gdGhpcy5zdGF0ZS5wbGF5bGlzdFVSSS5zcGxpdCgnOicpXG4gICAgICAgIGxldCBwbGF5bGlzdElEID0gcGxheWxpc3RBcnJbcGxheWxpc3RBcnIubGVuZ3RoIC0xXVxuICAgICAgICBjb25zb2xlLmxvZyhwbGF5bGlzdElEKVxuICAgICAgICBmZXRjaCgnL3BsYXlsaXN0LycrdGhpcy5zdGF0ZS50b2tlbisnLycrcGxheWxpc3RJRCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSkudGhlbihyZXNwb25zZUpTT04gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VKU09OLmRhdGEpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiByZXNwb25zZUpTT04uZGF0YSwgYW5hbHl6ZWQ6IHRydWV9KVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyQW5hbHlzaXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmFuYWx5emVkKSB7XG4gICAgICAgICAgICByZXR1cm4gKDxBbmFseXNpcyBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9Lz4pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVQbGF5bGlzdENsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBsYXlsaXN0OiB0cnVlLFxuICAgICAgICAgICAgdHJhY2s6IGZhbHNlXG4gICAgICAgIH0sIHRoaXMucmVuZGVyUGxheWxpc3QoKSlcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGxheWxpc3RDbGljaygpfT5QbGF5bGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbnJlbmRlcihcbiAgICA8QXBwIC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFIQTtBQVdBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7Ozs7QUFuRUE7QUFDQTtBQXFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///37\n");

/***/ })

})