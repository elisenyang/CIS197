webpackHotUpdate(0,{

/***/ 29:
/*!*****************************************!*\
  !*** ./frontend/components/Playlist.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nvar _Analysis = __webpack_require__(/*! ./Analysis */ 8);\n\nvar _Analysis2 = _interopRequireDefault(_Analysis);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Playlist = function (_React$Component) {\n  _inherits(Playlist, _React$Component);\n\n  function Playlist(props) {\n    _classCallCheck(this, Playlist);\n\n    var _this = _possibleConstructorReturn(this, (Playlist.__proto__ || Object.getPrototypeOf(Playlist)).call(this, props));\n\n    _this.state = {\n      token: _this.props.token,\n      playlistURI: '',\n      data: {},\n      analyzed: false\n    };\n    return _this;\n  }\n\n  _createClass(Playlist, [{\n    key: 'handleAnalyze',\n    value: function handleAnalyze() {\n      var _this2 = this;\n\n      // extract user and id from uri\n      var playlistArr = this.state.playlistURI.split(':');\n      var playlistID = playlistArr[playlistArr.length - 1];\n      var user = playlistArr[2];\n      fetch('/playlist/' + this.state.token + '/' + user + '/' + playlistID, {\n        method: 'GET'\n      }).then(function (response) {\n        return response.json();\n      }).then(function (responseJSON) {\n        _this2.setState({ data: responseJSON.data, analyzed: true });\n      }).catch(function (err) {\n        console.log(err.message);\n      });\n    }\n  }, {\n    key: 'renderAnalysis',\n    value: function renderAnalysis() {\n      var playlistArr = this.state.playlistURI.split(':');\n      var playlistID = playlistArr[playlistArr.length - 1];\n      var user = playlistArr[2];\n      if (this.state.analyzed) {\n        return _react2.default.createElement(_Analysis2.default, { login: this.props.login, data: this.state.data, type: 'playlist', user: user, playlistID: playlistID, token: this.props.token });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      return _react2.default.createElement(\n        'div',\n        { style: styles.container, className: 'container' },\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'p',\n            { style: styles.instruction },\n            'To get URI: Right click on playlist/track -> Share -> Copy Spotify URI'\n          ),\n          _react2.default.createElement('input', { type: 'text', style: styles.inputBar, className: 'playlistURIInput', placeholder: 'Input Playlist URI..', onChange: function onChange(e) {\n              _this3.setState({ playlistURI: e.target.value });\n            } }),\n          _react2.default.createElement(\n            'button',\n            { style: styles.button, onClick: function onClick() {\n                return _this3.handleAnalyze();\n              } },\n            'Go'\n          )\n        ),\n        this.renderAnalysis()\n      );\n    }\n  }]);\n\n  return Playlist;\n}(_react2.default.Component);\n\nvar styles = {\n  inputBar: {\n    fontFamily: 'Raleway, sans-serif',\n    width: '240px',\n    backgroundColor: 'rgba(255,255,255,0.5)',\n    height: '35px',\n    border: '0px',\n    borderRadius: '20px',\n    marginTop: '10px',\n    paddingLeft: '8px',\n    fontSize: '14px'\n  },\n  button: {\n    fontFamily: 'Raleway, sans-serif',\n    borderRadius: '50%',\n    border: '0px',\n    backgroundColor: 'rgba(255,255,255,0.4)',\n    height: '35px',\n    width: '35px',\n    marginLeft: '2px',\n    boxShadow: '2px 3px rgba(0,0,0,0.4)'\n  },\n  container: {\n    width: '100vw',\n    position: 'relative',\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'center'\n  },\n  instruction: {\n    fontSize: '10px'\n  }\n};\n\nexports.default = Playlist;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvY29tcG9uZW50cy9QbGF5bGlzdC5qcz8zMmIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFuYWx5c2lzIGZyb20gJy4vQW5hbHlzaXMnXG5cblxuY2xhc3MgUGxheWxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRva2VuOiB0aGlzLnByb3BzLnRva2VuLFxuICAgICAgcGxheWxpc3RVUkk6ICcnLFxuICAgICAgZGF0YToge30sXG4gICAgICBhbmFseXplZDogZmFsc2VcbiAgICB9XG4gIH1cblxuICBoYW5kbGVBbmFseXplKCkge1xuICAgIC8vIGV4dHJhY3QgdXNlciBhbmQgaWQgZnJvbSB1cmlcbiAgICBsZXQgcGxheWxpc3RBcnIgPSB0aGlzLnN0YXRlLnBsYXlsaXN0VVJJLnNwbGl0KCc6JylcbiAgICBsZXQgcGxheWxpc3RJRCA9IHBsYXlsaXN0QXJyW3BsYXlsaXN0QXJyLmxlbmd0aCAtIDFdXG4gICAgbGV0IHVzZXIgPSBwbGF5bGlzdEFyclsyXVxuICAgIGZldGNoKCcvcGxheWxpc3QvJyArIHRoaXMuc3RhdGUudG9rZW4gKyAnLycgKyB1c2VyICsgJy8nICsgcGxheWxpc3RJRCwge1xuICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgIH0pLnRoZW4ocmVzcG9uc2VKU09OID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IHJlc3BvbnNlSlNPTi5kYXRhLCBhbmFseXplZDogdHJ1ZX0pXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXJBbmFseXNpcygpIHtcbiAgICBsZXQgcGxheWxpc3RBcnIgPSB0aGlzLnN0YXRlLnBsYXlsaXN0VVJJLnNwbGl0KCc6JylcbiAgICBsZXQgcGxheWxpc3RJRCA9IHBsYXlsaXN0QXJyW3BsYXlsaXN0QXJyLmxlbmd0aCAtIDFdXG4gICAgbGV0IHVzZXIgPSBwbGF5bGlzdEFyclsyXVxuICAgIGlmICh0aGlzLnN0YXRlLmFuYWx5emVkKSB7XG4gICAgICByZXR1cm4gKDxBbmFseXNpcyBsb2dpbj17dGhpcy5wcm9wcy5sb2dpbn0gZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSB0eXBlPXsncGxheWxpc3QnfSB1c2VyPXt1c2VyfSBwbGF5bGlzdElEPXtwbGF5bGlzdElEfSB0b2tlbj17dGhpcy5wcm9wcy50b2tlbn0vPilcbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5pbnN0cnVjdGlvbn0+VG8gZ2V0IFVSSTogUmlnaHQgY2xpY2sgb24gcGxheWxpc3QvdHJhY2sgLT4gU2hhcmUgLT4gQ29weSBTcG90aWZ5IFVSSTwvcD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBzdHlsZT17c3R5bGVzLmlucHV0QmFyfSBjbGFzc05hbWU9XCJwbGF5bGlzdFVSSUlucHV0XCIgcGxhY2Vob2xkZXI9XCJJbnB1dCBQbGF5bGlzdCBVUkkuLlwiIG9uQ2hhbmdlPXsoZSkgPT4ge3RoaXMuc2V0U3RhdGUoe3BsYXlsaXN0VVJJOiBlLnRhcmdldC52YWx1ZX0pfX0vPlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQW5hbHl6ZSgpfT5HbzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMucmVuZGVyQW5hbHlzaXMoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGlucHV0QmFyOiB7XG4gICAgZm9udEZhbWlseTogJ1JhbGV3YXksIHNhbnMtc2VyaWYnLFxuICAgIHdpZHRoOiAnMjQwcHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgaGVpZ2h0OiAnMzVweCcsXG4gICAgYm9yZGVyOiAnMHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcbiAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgICBwYWRkaW5nTGVmdDogJzhweCcsXG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgZm9udEZhbWlseTogJ1JhbGV3YXksIHNhbnMtc2VyaWYnLFxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgYm9yZGVyOiAnMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNCknLFxuICAgIGhlaWdodDogJzM1cHgnLFxuICAgIHdpZHRoOiAnMzVweCcsXG4gICAgbWFyZ2luTGVmdDogJzJweCcsXG4gICAgYm94U2hhZG93OiAnMnB4IDNweCByZ2JhKDAsMCwwLDAuNCknXG4gIH0sXG4gIGNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiAnMTAwdncnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xuICB9LFxuICBpbnN0cnVjdGlvbjoge1xuICAgIGZvbnRTaXplOiAnMTBweCdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5bGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9QbGF5bGlzdC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBU0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQU5BO0FBU0E7Ozs7QUFqREE7QUFDQTtBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQURBO0FBN0JBO0FBQ0E7QUFpQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ })

})