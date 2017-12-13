webpackHotUpdate(0,{

/***/ 30:
/*!**************************************!*\
  !*** ./frontend/components/Track.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nvar _Analysis = __webpack_require__(/*! ./Analysis */ 8);\n\nvar _Analysis2 = _interopRequireDefault(_Analysis);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Track = function (_React$Component) {\n    _inherits(Track, _React$Component);\n\n    function Track(props) {\n        _classCallCheck(this, Track);\n\n        var _this = _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this, props));\n\n        _this.state = {\n            token: _this.props.token,\n            trackURI: '',\n            data: {},\n            analyzed: false\n        };\n        return _this;\n    }\n\n    _createClass(Track, [{\n        key: 'handleAnalyze',\n        value: function handleAnalyze() {\n            var _this2 = this;\n\n            var trackArr = this.state.trackURI.split(':');\n            var trackID = trackArr[trackArr.length - 1];\n            fetch('/track/' + this.state.token + '/' + trackID, {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                _this2.setState({ data: responseJSON.data, analyzed: true });\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'renderAnalysis',\n        value: function renderAnalysis() {\n            var trackArr = this.state.trackURI.split(':');\n            var trackID = trackArr[trackArr.length - 1];\n            if (this.state.analyzed) {\n                return _react2.default.createElement(_Analysis2.default, { data: this.state.data, type: \"track\", login: this.props.login, trackID: trackID });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { style: styles.container, className: 'container' },\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement('input', { type: 'text', style: styles.inputBar, className: 'trackURIInput', placeholder: 'Input Track URI..', onChange: function onChange(e) {\n                            _this3.setState({ trackURI: e.target.value });\n                        } }),\n                    _react2.default.createElement(\n                        'button',\n                        { style: styles.button, onClick: function onClick() {\n                                return _this3.handleAnalyze();\n                            } },\n                        'Go'\n                    )\n                ),\n                this.renderAnalysis()\n            );\n        }\n    }]);\n\n    return Track;\n}(_react2.default.Component);\n\nvar styles = {\n    inputBar: {\n        position: 'relative',\n        fontFamily: 'Raleway, sans-serif',\n        width: '240px',\n        backgroundColor: 'rgba(255,255,255,0.5)',\n        height: '35px',\n        border: '0px',\n        borderRadius: '20px',\n        marginTop: '10px',\n        paddingLeft: '8px',\n        fontSize: '14px'\n    },\n    button: {\n        position: 'relative',\n        fontFamily: 'Raleway, sans-serif',\n        borderRadius: '50%',\n        border: '0px',\n        backgroundColor: 'rgba(255,255,255,0.4)',\n        height: '35px',\n        width: '35px',\n        marginLeft: '2px',\n        boxShadow: '2px 3px rgba(0,0,0,0.4)'\n    },\n    container: {\n        width: '100vw',\n        position: 'relative',\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center'\n    }\n};\n\nexports.default = Track;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvY29tcG9uZW50cy9UcmFjay5qcz8xZDZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFuYWx5c2lzIGZyb20gJy4vQW5hbHlzaXMnXG5cblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b2tlbjogdGhpcy5wcm9wcy50b2tlbixcbiAgICAgICAgICAgIHRyYWNrVVJJOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgYW5hbHl6ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBbmFseXplKCkge1xuICAgICAgICBsZXQgdHJhY2tBcnIgPSB0aGlzLnN0YXRlLnRyYWNrVVJJLnNwbGl0KCc6JylcbiAgICAgICAgbGV0IHRyYWNrSUQgPSB0cmFja0Fyclt0cmFja0Fyci5sZW5ndGggLTFdXG4gICAgICAgIGZldGNoKCcvdHJhY2svJyt0aGlzLnN0YXRlLnRva2VuKycvJyt0cmFja0lELCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlSlNPTiA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiByZXNwb25zZUpTT04uZGF0YSwgYW5hbHl6ZWQ6IHRydWV9KVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyQW5hbHlzaXMoKSB7XG4gICAgICAgIGxldCB0cmFja0FyciA9IHRoaXMuc3RhdGUudHJhY2tVUkkuc3BsaXQoJzonKVxuICAgICAgICBsZXQgdHJhY2tJRCA9IHRyYWNrQXJyW3RyYWNrQXJyLmxlbmd0aCAtMV1cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuYW5hbHl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoPEFuYWx5c2lzIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gdHlwZT17XCJ0cmFja1wifSBsb2dpbj17dGhpcy5wcm9wcy5sb2dpbn0gdHJhY2tJRD17dHJhY2tJRH0vPilcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyfSBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17c3R5bGVzLmlucHV0QmFyfSBjbGFzc05hbWU9XCJ0cmFja1VSSUlucHV0XCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBUcmFjayBVUkkuLlwiIG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMuc2V0U3RhdGUoe3RyYWNrVVJJOiBlLnRhcmdldC52YWx1ZX0pfX0vPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUFuYWx5emUoKX0+R288L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJBbmFseXNpcygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaW5wdXRCYXI6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250RmFtaWx5OiAnUmFsZXdheSwgc2Fucy1zZXJpZicsXG4gICAgd2lkdGg6ICcyNDBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICBoZWlnaHQ6ICczNXB4JyxcbiAgICBib3JkZXI6ICcwcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxuICAgIG1hcmdpblRvcDogJzEwcHgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnOHB4JyxcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICB9LFxuICBidXR0b246IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBmb250RmFtaWx5OiAnUmFsZXdheSwgc2Fucy1zZXJpZicsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBib3JkZXI6ICcwcHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KScsXG4gICAgaGVpZ2h0OiAnMzVweCcsXG4gICAgd2lkdGg6ICczNXB4JyxcbiAgICBtYXJnaW5MZWZ0OiAnMnB4JyxcbiAgICBib3hTaGFkb3c6ICcycHggM3B4IHJnYmEoMCwwLDAsMC40KSdcbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2s7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvVHJhY2suanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUxBO0FBUUE7Ozs7QUE3Q0E7QUFDQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQXhCQTtBQUNBO0FBZ0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ })

})