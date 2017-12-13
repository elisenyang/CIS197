webpackHotUpdate(0,{

/***/ 16:
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 8);\n\nvar _Analysis = __webpack_require__(/*! ./components/Analysis */ 28);\n\nvar _Analysis2 = _interopRequireDefault(_Analysis);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.state = {\n            token: '',\n            playlistId: '',\n            data: {},\n            analyzed: false\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            //get authorization token needed to access all spotify data\n            //save client-side\n            fetch('/getToken', {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                conosole.log('HI', responseJSON);\n                _this2.setState({\n                    token: responseJSON.token\n                });\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'handleAnalyze',\n        value: function handleAnalyze() {\n            var _this3 = this;\n\n            fetch('/playlist/' + this.state.token + '/' + this.state.playlistId, {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                console.log(responseJSON.data);\n                _this3.setState({ data: responseJSON.data, analyzed: true });\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'renderAnalysis',\n        value: function renderAnalysis() {\n            if (this.state.analyzed) {\n                return _react2.default.createElement(_Analysis2.default, { data: this.state.data });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this4 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement(\n                        'h3',\n                        null,\n                        'Input Playlist ID'\n                    ),\n                    _react2.default.createElement('input', { type: 'text', className: 'playlistIdInput', placeholder: 'Playlist ID..', onChange: function onChange(e) {\n                            _this4.setState({ playlistId: e.target.value });\n                        } }),\n                    _react2.default.createElement(\n                        'button',\n                        { onClick: function onClick() {\n                                return _this4.handleAnalyze();\n                            } },\n                        'Analyze Your Playlist'\n                    )\n                ),\n                this.renderAnalysis()\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\n(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvaW5kZXguanM/ODA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBbmFseXNpcyBmcm9tICcuL2NvbXBvbmVudHMvQW5hbHlzaXMnXG5cblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b2tlbjogJycsXG4gICAgICAgICAgICBwbGF5bGlzdElkOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgYW5hbHl6ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL2dldCBhdXRob3JpemF0aW9uIHRva2VuIG5lZWRlZCB0byBhY2Nlc3MgYWxsIHNwb3RpZnkgZGF0YVxuICAgIC8vc2F2ZSBjbGllbnQtc2lkZVxuICAgICAgICBmZXRjaCgnL2dldFRva2VuJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSkudGhlbihyZXNwb25zZUpTT04gPT4ge1xuICAgICAgICAgICAgY29ub3NvbGUubG9nKCdISScsIHJlc3BvbnNlSlNPTilcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHRva2VuOiByZXNwb25zZUpTT04udG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBoYW5kbGVBbmFseXplKCkge1xuICAgICAgICBmZXRjaCgnL3BsYXlsaXN0LycrdGhpcy5zdGF0ZS50b2tlbisnLycrdGhpcy5zdGF0ZS5wbGF5bGlzdElkLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlSlNPTiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUpTT04uZGF0YSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHJlc3BvbnNlSlNPTi5kYXRhLCBhbmFseXplZDogdHJ1ZX0pXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJBbmFseXNpcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYW5hbHl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoPEFuYWx5c2lzIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0vPilcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5JbnB1dCBQbGF5bGlzdCBJRDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cInBsYXlsaXN0SWRJbnB1dFwiIHBsYWNlaG9sZGVyPVwiUGxheWxpc3QgSUQuLlwiIG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMuc2V0U3RhdGUoe3BsYXlsaXN0SWQ6IGUudGFyZ2V0LnZhbHVlfSl9fS8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVBbmFseXplKCl9PkFuYWx5emUgWW91ciBQbGF5bGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckFuYWx5c2lzKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxucmVuZGVyKFxuICAgIDxBcHAgLz4sZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFTQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFOQTtBQVNBOzs7O0FBNURBO0FBQ0E7QUE4REEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ })

})