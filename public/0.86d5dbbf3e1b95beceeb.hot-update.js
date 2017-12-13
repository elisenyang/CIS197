webpackHotUpdate(0,{

/***/ 8:
/*!*****************************************!*\
  !*** ./frontend/components/Analysis.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Analysis = function (_React$Component) {\n  _inherits(Analysis, _React$Component);\n\n  function Analysis(props) {\n    _classCallCheck(this, Analysis);\n\n    return _possibleConstructorReturn(this, (Analysis.__proto__ || Object.getPrototypeOf(Analysis)).call(this, props));\n  }\n\n  _createClass(Analysis, [{\n    key: 'renderInfo',\n    value: function renderInfo() {\n      if (this.props.type === \"playlist\") {\n        return _react2.default.createElement(\n          'div',\n          { style: styles.top },\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'h3',\n              { style: styles.name },\n              this.props.data.name\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.description\n            )\n          ),\n          _react2.default.createElement('img', { style: styles.image, src: this.props.data.image }),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Number of Tracks: ' + this.props.data.length\n          )\n        );\n      }\n\n      if (this.props.type === \"track\") {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            null,\n            this.props.data.name\n          ),\n          _react2.default.createElement(\n            'h5',\n            null,\n            this.props.data.artists.join(', ')\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'From: ' + this.props.data.album\n          ),\n          _react2.default.createElement('img', { src: this.props.data.image })\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        this.renderInfo(),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Acousticness: ' + this.props.data.stats.acousticness\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Danceability: ' + this.props.data.stats.danceability\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Energy: ' + this.props.data.stats.energy\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Instrumentalness: ' + this.props.data.stats.instrumentalness\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Key: ' + this.props.data.stats.key\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Liveness: ' + this.props.data.stats.liveness\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Loudness: ' + this.props.data.stats.loudness\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Speechiness: ' + this.props.data.stats.speechiness\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          'Tempo: ' + this.props.data.stats.tempo\n        )\n      );\n    }\n  }]);\n\n  return Analysis;\n}(_react2.default.Component);\n\nvar styles = {\n  name: {\n    marginTop: '15px',\n    marginBottom: '2px'\n  },\n  description: {\n    margin: '0px',\n    fontSize: '16px'\n  },\n  image: {\n    height: '200px',\n    width: '200px'\n  },\n  top: {\n    width: '500px',\n    display: 'flex',\n    flexDirection: 'row'\n  }\n};\n\nexports.default = Analysis;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9jb21wb25lbnRzL0FuYWx5c2lzLmpzPzBkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFuYWx5c2lzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlckluZm8oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJwbGF5bGlzdFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG9wfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5uYW1lfT57dGhpcy5wcm9wcy5kYXRhLm5hbWV9PC9oMz5cbiAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57dGhpcy5wcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgc3R5bGU9e3N0eWxlcy5pbWFnZX0gc3JjPXt0aGlzLnByb3BzLmRhdGEuaW1hZ2V9Lz5cbiAgICAgICAgPHA+eydOdW1iZXIgb2YgVHJhY2tzOiAnK3RoaXMucHJvcHMuZGF0YS5sZW5ndGh9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy50eXBlID09PSBcInRyYWNrXCIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoND57dGhpcy5wcm9wcy5kYXRhLm5hbWV9PC9oND5cbiAgICAgICAgPGg1Pnt0aGlzLnByb3BzLmRhdGEuYXJ0aXN0cy5qb2luKCcsICcpfTwvaDU+XG4gICAgICAgIDxwPnsnRnJvbTogJyt0aGlzLnByb3BzLmRhdGEuYWxidW19PC9wPlxuICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMucmVuZGVySW5mbygpfVxuICAgICAgICA8cD57J0Fjb3VzdGljbmVzczogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMuYWNvdXN0aWNuZXNzfTwvcD5cbiAgICAgICAgPHA+eydEYW5jZWFiaWxpdHk6ICcrdGhpcy5wcm9wcy5kYXRhLnN0YXRzLmRhbmNlYWJpbGl0eX08L3A+XG4gICAgICAgIDxwPnsnRW5lcmd5OiAnK3RoaXMucHJvcHMuZGF0YS5zdGF0cy5lbmVyZ3l9PC9wPlxuICAgICAgICA8cD57J0luc3RydW1lbnRhbG5lc3M6ICcrdGhpcy5wcm9wcy5kYXRhLnN0YXRzLmluc3RydW1lbnRhbG5lc3N9PC9wPlxuICAgICAgICA8cD57J0tleTogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMua2V5fTwvcD5cbiAgICAgICAgPHA+eydMaXZlbmVzczogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMubGl2ZW5lc3N9PC9wPlxuICAgICAgICA8cD57J0xvdWRuZXNzOiAnK3RoaXMucHJvcHMuZGF0YS5zdGF0cy5sb3VkbmVzc308L3A+XG4gICAgICAgIDxwPnsnU3BlZWNoaW5lc3M6ICcrdGhpcy5wcm9wcy5kYXRhLnN0YXRzLnNwZWVjaGluZXNzfTwvcD5cbiAgICAgICAgPHA+eydUZW1wbzogJyt0aGlzLnByb3BzLmRhdGEuc3RhdHMudGVtcG99PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbmFtZToge1xuICAgIG1hcmdpblRvcDogJzE1cHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzJweCdcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBtYXJnaW46ICcwcHgnLFxuICAgIGZvbnRTaXplOiAnMTZweCdcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgd2lkdGg6ICcyMDBweCdcbiAgfSxcbiAgdG9wOiB7XG4gICAgd2lkdGg6ICc1MDBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5hbHlzaXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvQW5hbHlzaXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFPQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFhQTs7OztBQTlDQTtBQUNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWJBO0FBQ0E7QUFtQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ })

})