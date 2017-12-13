webpackHotUpdate(0,{

/***/ 8:
/*!*****************************************!*\
  !*** ./frontend/components/Analysis.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Analysis = function (_React$Component) {\n  _inherits(Analysis, _React$Component);\n\n  function Analysis(props) {\n    _classCallCheck(this, Analysis);\n\n    return _possibleConstructorReturn(this, (Analysis.__proto__ || Object.getPrototypeOf(Analysis)).call(this, props));\n  }\n\n  _createClass(Analysis, [{\n    key: 'renderInfo',\n    value: function renderInfo() {\n      if (this.props.type === \"playlist\") {\n        return _react2.default.createElement(\n          'div',\n          { style: styles.top },\n          _react2.default.createElement(\n            'div',\n            { style: { height: '500px' } },\n            _react2.default.createElement(\n              'h3',\n              { style: styles.name },\n              this.props.data.name\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.description\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              'Number of Tracks: ' + this.props.data.length\n            )\n          ),\n          _react2.default.createElement('img', { style: styles.image, src: this.props.data.image })\n        );\n      }\n\n      if (this.props.type === \"track\") {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            null,\n            this.props.data.name\n          ),\n          _react2.default.createElement(\n            'h5',\n            null,\n            this.props.data.artists.join(', ')\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'From: ' + this.props.data.album\n          ),\n          _react2.default.createElement('img', { src: this.props.data.image })\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { style: styles.container2 },\n        this.renderInfo(),\n        _react2.default.createElement(\n          'div',\n          { style: styles.stats },\n          _react2.default.createElement(\n            'p',\n            null,\n            'Acousticness: ' + this.props.data.stats.acousticness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Danceability: ' + this.props.data.stats.danceability\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Energy: ' + this.props.data.stats.energy\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Instrumentalness: ' + this.props.data.stats.instrumentalness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Key: ' + this.props.data.stats.key\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Liveness: ' + this.props.data.stats.liveness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Loudness: ' + this.props.data.stats.loudness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Speechiness: ' + this.props.data.stats.speechiness\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Tempo: ' + this.props.data.stats.tempo\n          )\n        )\n      );\n    }\n  }]);\n\n  return Analysis;\n}(_react2.default.Component);\n\nvar styles = {\n  name: {\n    marginTop: '15px',\n    marginBottom: '2px'\n  },\n  description: {\n    margin: '3px',\n    fontSize: '16px'\n  },\n  image: {\n    height: '150px',\n    width: '150px'\n  },\n  top: {\n    width: '400px',\n    height: '500px',\n    marginTop: '15px',\n    display: 'flex',\n    alignItems: 'center'\n  },\n  container2: {\n    width: '400px',\n    display: 'flex',\n    flexDirection: 'column',\n    justifyContent: 'space-between'\n  }\n  // stats: {\n  //   position: \n  // }\n};\n\nexports.default = Analysis;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9jb21wb25lbnRzL0FuYWx5c2lzLmpzPzBkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFuYWx5c2lzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlckluZm8oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJwbGF5bGlzdFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG9wfT5cbiAgICAgICAgPGRpdiBzdHlsZT17e2hlaWdodDogJzUwMHB4J319PlxuICAgICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLm5hbWV9Pnt0aGlzLnByb3BzLmRhdGEubmFtZX08L2gzPlxuICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259Pnt0aGlzLnByb3BzLmRhdGEuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PnsnTnVtYmVyIG9mIFRyYWNrczogJyt0aGlzLnByb3BzLmRhdGEubGVuZ3RofTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3R5bGU9e3N0eWxlcy5pbWFnZX0gc3JjPXt0aGlzLnByb3BzLmRhdGEuaW1hZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJ0cmFja1wiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDQ+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvaDQ+XG4gICAgICAgIDxoNT57dGhpcy5wcm9wcy5kYXRhLmFydGlzdHMuam9pbignLCAnKX08L2g1PlxuICAgICAgICA8cD57J0Zyb206ICcrdGhpcy5wcm9wcy5kYXRhLmFsYnVtfTwvcD5cbiAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZGF0YS5pbWFnZX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXIyfT5cbiAgICAgICAge3RoaXMucmVuZGVySW5mbygpfVxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuc3RhdHN9PlxuICAgICAgICAgIDxwPnsnQWNvdXN0aWNuZXNzOiAnK3RoaXMucHJvcHMuZGF0YS5zdGF0cy5hY291c3RpY25lc3N9PC9wPlxuICAgICAgICAgIDxwPnsnRGFuY2VhYmlsaXR5OiAnK3RoaXMucHJvcHMuZGF0YS5zdGF0cy5kYW5jZWFiaWxpdHl9PC9wPlxuICAgICAgICAgIDxwPnsnRW5lcmd5OiAnK3RoaXMucHJvcHMuZGF0YS5zdGF0cy5lbmVyZ3l9PC9wPlxuICAgICAgICAgIDxwPnsnSW5zdHJ1bWVudGFsbmVzczogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMuaW5zdHJ1bWVudGFsbmVzc308L3A+XG4gICAgICAgICAgPHA+eydLZXk6ICcrdGhpcy5wcm9wcy5kYXRhLnN0YXRzLmtleX08L3A+XG4gICAgICAgICAgPHA+eydMaXZlbmVzczogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMubGl2ZW5lc3N9PC9wPlxuICAgICAgICAgIDxwPnsnTG91ZG5lc3M6ICcrdGhpcy5wcm9wcy5kYXRhLnN0YXRzLmxvdWRuZXNzfTwvcD5cbiAgICAgICAgICA8cD57J1NwZWVjaGluZXNzOiAnK3RoaXMucHJvcHMuZGF0YS5zdGF0cy5zcGVlY2hpbmVzc308L3A+XG4gICAgICAgICAgPHA+eydUZW1wbzogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMudGVtcG99PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIG5hbWU6IHtcbiAgICBtYXJnaW5Ub3A6ICcxNXB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcycHgnXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgbWFyZ2luOiAnM3B4JyxcbiAgICBmb250U2l6ZTogJzE2cHgnXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgaGVpZ2h0OiAnMTUwcHgnLFxuICAgIHdpZHRoOiAnMTUwcHgnXG4gIH0sXG4gIHRvcDoge1xuICAgIHdpZHRoOiAnNDAwcHgnLFxuICAgIGhlaWdodDogJzUwMHB4JyxcbiAgICBtYXJnaW5Ub3A6ICcxNXB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcbiAgY29udGFpbmVyMjoge1xuICAgIHdpZHRoOiAnNDAwcHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nXG4gIH0sXG4gIC8vIHN0YXRzOiB7XG4gIC8vICAgcG9zaXRpb246IFxuICAvLyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuYWx5c2lzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0FuYWx5c2lzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBRkE7QUFlQTs7OztBQWhEQTtBQUNBO0FBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUE1QkE7QUFDQTtBQThCQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ })

})