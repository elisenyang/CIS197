webpackHotUpdate(0,{

/***/ 29:
/*!*****************************************!*\
  !*** ./frontend/components/Playlist.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 7);\n\nvar _Analysis = __webpack_require__(/*! ./Analysis */ 15);\n\nvar _Analysis2 = _interopRequireDefault(_Analysis);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Playlist = function (_React$Component) {\n    _inherits(Playlist, _React$Component);\n\n    function Playlist(props) {\n        _classCallCheck(this, Playlist);\n\n        var _this = _possibleConstructorReturn(this, (Playlist.__proto__ || Object.getPrototypeOf(Playlist)).call(this, props));\n\n        _this.state = {\n            token: _this.props.token,\n            playlistURI: '',\n            data: {},\n            analyzed: false\n        };\n        return _this;\n    }\n\n    _createClass(Playlist, [{\n        key: 'handleAnalyze',\n        value: function handleAnalyze() {\n            var _this2 = this;\n\n            var playlistArr = this.state.playlistURI.split(':');\n            var playlistID = playlistArr[playlistArr.length - 1];\n            var user = playlistArr[2];\n            console.log(user);\n            fetch('/playlist/' + this.state.token + '/' + user + '/' + playlistID, {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                console.log(responseJSON.data);\n                _this2.setState({ data: responseJSON.data, analyzed: true });\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'renderAnalysis',\n        value: function renderAnalysis() {\n            if (this.state.analyzed) {\n                return _react2.default.createElement(_Analysis2.default, { data: this.state.data, type: \"playlist\" });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    null,\n                    _react2.default.createElement('input', { type: 'text', style: styles.inputBar, className: 'playlistURIInput', placeholder: 'Input Playlist URI..', onChange: function onChange(e) {\n                            _this3.setState({ playlistURI: e.target.value });\n                        } }),\n                    _react2.default.createElement(\n                        'button',\n                        { onClick: function onClick() {\n                                return _this3.handleAnalyze();\n                            } },\n                        'Analyze Playlist'\n                    )\n                ),\n                this.renderAnalysis()\n            );\n        }\n    }]);\n\n    return Playlist;\n}(_react2.default.Component);\n\nvar styles = {\n    inputBar: {\n        width: '200px',\n        backgroundColor: 'rgba(255,255,255,0.5)',\n        height: '30px',\n        border: '0px',\n        borderRadius: '20px',\n        marginTop: '10px',\n        padding: '8px',\n        fontSize: '14px'\n\n    }\n};\n\nexports.default = Playlist;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvY29tcG9uZW50cy9QbGF5bGlzdC5qcz8zMmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFuYWx5c2lzIGZyb20gJy4vQW5hbHlzaXMnXG5cblxuY2xhc3MgUGxheWxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b2tlbjogdGhpcy5wcm9wcy50b2tlbixcbiAgICAgICAgICAgIHBsYXlsaXN0VVJJOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgYW5hbHl6ZWQ6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVBbmFseXplKCkge1xuICAgICAgICBsZXQgcGxheWxpc3RBcnIgPSB0aGlzLnN0YXRlLnBsYXlsaXN0VVJJLnNwbGl0KCc6JylcbiAgICAgICAgbGV0IHBsYXlsaXN0SUQgPSBwbGF5bGlzdEFycltwbGF5bGlzdEFyci5sZW5ndGggLTFdXG4gICAgICAgIGxldCB1c2VyID0gcGxheWxpc3RBcnJbMl1cbiAgICAgICAgY29uc29sZS5sb2codXNlcilcbiAgICAgICAgZmV0Y2goJy9wbGF5bGlzdC8nK3RoaXMuc3RhdGUudG9rZW4rJy8nK3VzZXIrJy8nK3BsYXlsaXN0SUQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2VKU09OID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlSlNPTi5kYXRhKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzcG9uc2VKU09OLmRhdGEsIGFuYWx5emVkOiB0cnVlfSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlckFuYWx5c2lzKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5hbmFseXplZCkge1xuICAgICAgICAgICAgcmV0dXJuICg8QW5hbHlzaXMgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0eXBlPXtcInBsYXlsaXN0XCJ9Lz4pXG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17c3R5bGVzLmlucHV0QmFyfSBjbGFzc05hbWU9XCJwbGF5bGlzdFVSSUlucHV0XCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBQbGF5bGlzdCBVUkkuLlwiIG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMuc2V0U3RhdGUoe3BsYXlsaXN0VVJJOiBlLnRhcmdldC52YWx1ZX0pfX0vPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5hbHl6ZSgpfT5BbmFseXplIFBsYXlsaXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQW5hbHlzaXMoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGlucHV0QmFyOiB7XG4gICAgd2lkdGg6ICcyMDBweCcsXG4gICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjUpJyxcbiAgICBoZWlnaHQ6ICczMHB4JyxcbiAgICBib3JkZXI6ICcwcHgnLFxuICAgIGJvcmRlclJhZGl1czogJzIwcHgnLFxuICAgIG1hcmdpblRvcDogJzEwcHgnLFxuICAgIHBhZGRpbmc6ICc4cHgnLFxuICAgIGZvbnRTaXplOiAnMTRweCdcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXlsaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL1BsYXlsaXN0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBSEE7QUFTQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUxBO0FBUUE7Ozs7QUE5Q0E7QUFDQTtBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFEQTtBQUNBO0FBYUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ })

})