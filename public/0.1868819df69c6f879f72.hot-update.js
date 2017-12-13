webpackHotUpdate(0,{

/***/ 8:
/*!*****************************************!*\
  !*** ./frontend/components/Analysis.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Analysis = function (_React$Component) {\n  _inherits(Analysis, _React$Component);\n\n  function Analysis(props) {\n    _classCallCheck(this, Analysis);\n\n    return _possibleConstructorReturn(this, (Analysis.__proto__ || Object.getPrototypeOf(Analysis)).call(this, props));\n  }\n\n  _createClass(Analysis, [{\n    key: 'renderInfo',\n    value: function renderInfo() {\n      if (this.props.type === \"playlist\") {\n        return _react2.default.createElement(\n          'div',\n          { style: styles.top },\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'h3',\n              { style: styles.name },\n              this.props.data.name\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.description\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              'Number of Tracks: ' + this.props.data.length\n            )\n          ),\n          _react2.default.createElement('img', { style: styles.image, src: this.props.data.image })\n        );\n      }\n\n      if (this.props.type === \"track\") {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            null,\n            this.props.data.name\n          ),\n          _react2.default.createElement(\n            'h5',\n            null,\n            this.props.data.artists.join(', ')\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'From: ' + this.props.data.album\n          ),\n          _react2.default.createElement('img', { src: this.props.data.image })\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { style: styles.container2 },\n        this.renderInfo(),\n        _react2.default.createElement(\n          'div',\n          { style: styles.stats },\n          _react2.default.createElement(\n            'p',\n            null,\n            'Acousticness: ' + this.props.data.stats.acousticness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Danceability: ' + this.props.data.stats.danceability\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Energy: ' + this.props.data.stats.energy\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Instrumentalness: ' + this.props.data.stats.instrumentalness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Key: ' + this.props.data.stats.key\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Liveness: ' + this.props.data.stats.liveness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Loudness: ' + this.props.data.stats.loudness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Speechiness: ' + this.props.data.stats.speechiness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Tempo: ' + this.props.data.stats.tempo\n          )\n        )\n      );\n    }\n  }]);\n\n  return Analysis;\n}(_react2.default.Component);\n\nvar styles = {\n  name: {\n    marginTop: '15px',\n    marginBottom: '2px'\n  },\n  description: {\n    margin: '3px',\n    fontSize: '18px'\n  },\n  image: {\n    height: '150px',\n    width: '150px'\n  },\n  top: {\n    width: '400px',\n    marginTop: '15px',\n    display: 'flex'\n  },\n  container2: {\n    width: '400px',\n    display: 'flex',\n    flexDirection: 'row',\n    flexWrap: 'wrap'\n  }\n  // stats: {\n  //   position: \n  // }\n};\n\nexports.default = Analysis;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9jb21wb25lbnRzL0FuYWx5c2lzLmpzPzBkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFuYWx5c2lzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlckluZm8oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJwbGF5bGlzdFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG9wfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMubmFtZX0+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57dGhpcy5wcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PnsnTnVtYmVyIG9mIFRyYWNrczogJyt0aGlzLnByb3BzLmRhdGEubGVuZ3RofTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwidHJhY2tcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGg0Pnt0aGlzLnByb3BzLmRhdGEubmFtZX08L2g0PlxuICAgICAgICA8aDU+e3RoaXMucHJvcHMuZGF0YS5hcnRpc3RzLmpvaW4oJywgJyl9PC9oNT5cbiAgICAgICAgPHA+eydGcm9tOiAnK3RoaXMucHJvcHMuZGF0YS5hbGJ1bX08L3A+XG4gICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmRhdGEuaW1hZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyMn0+XG4gICAgICAgIHt0aGlzLnJlbmRlckluZm8oKX1cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnN0YXRzfT5cbiAgICAgICAgICA8cD57J0Fjb3VzdGljbmVzczogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMuYWNvdXN0aWNuZXNzfTwvcD5cbiAgICAgICAgICA8cD57J0RhbmNlYWJpbGl0eTogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMuZGFuY2VhYmlsaXR5fTwvcD5cbiAgICAgICAgICA8cD57J0VuZXJneTogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMuZW5lcmd5fTwvcD5cbiAgICAgICAgICA8cD57J0luc3RydW1lbnRhbG5lc3M6ICcrdGhpcy5wcm9wcy5kYXRhLnN0YXRzLmluc3RydW1lbnRhbG5lc3N9PC9wPlxuICAgICAgICAgIDxwPnsnS2V5OiAnK3RoaXMucHJvcHMuZGF0YS5zdGF0cy5rZXl9PC9wPlxuICAgICAgICAgIDxwPnsnTGl2ZW5lc3M6ICcrdGhpcy5wcm9wcy5kYXRhLnN0YXRzLmxpdmVuZXNzfTwvcD5cbiAgICAgICAgICA8cD57J0xvdWRuZXNzOiAnK3RoaXMucHJvcHMuZGF0YS5zdGF0cy5sb3VkbmVzc308L3A+XG4gICAgICAgICAgPHA+eydTcGVlY2hpbmVzczogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMuc3BlZWNoaW5lc3N9PC9wPlxuICAgICAgICAgIDxwPnsnVGVtcG86ICcrdGhpcy5wcm9wcy5kYXRhLnN0YXRzLnRlbXBvfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBuYW1lOiB7XG4gICAgbWFyZ2luVG9wOiAnMTVweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMnB4J1xuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIG1hcmdpbjogJzNweCcsXG4gICAgZm9udFNpemU6ICcxOHB4J1xuICB9LFxuICBpbWFnZToge1xuICAgIGhlaWdodDogJzE1MHB4JyxcbiAgICB3aWR0aDogJzE1MHB4J1xuICB9LFxuICB0b3A6IHtcbiAgICB3aWR0aDogJzQwMHB4JyxcbiAgICBtYXJnaW5Ub3A6ICcxNXB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgY29udGFpbmVyMjoge1xuICAgIHdpZHRoOiAnNDAwcHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBmbGV4V3JhcDond3JhcCdcbiAgfSxcbiAgLy8gc3RhdHM6IHtcbiAgLy8gICBwb3NpdGlvbjogXG4gIC8vIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5hbHlzaXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvQW5hbHlzaXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFGQTtBQWVBOzs7O0FBaERBO0FBQ0E7QUFrREE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBMUJBO0FBQ0E7QUE0QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ })

})