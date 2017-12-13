webpackHotUpdate(0,{

/***/ 8:
/*!*****************************************!*\
  !*** ./frontend/components/Analysis.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Analysis = function (_React$Component) {\n  _inherits(Analysis, _React$Component);\n\n  function Analysis(props) {\n    _classCallCheck(this, Analysis);\n\n    return _possibleConstructorReturn(this, (Analysis.__proto__ || Object.getPrototypeOf(Analysis)).call(this, props));\n  }\n\n  _createClass(Analysis, [{\n    key: 'renderInfo',\n    value: function renderInfo() {\n      if (this.props.type === \"playlist\") {\n        return _react2.default.createElement(\n          'div',\n          { style: styles.top },\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'h3',\n              { style: styles.name },\n              this.props.data.name\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.description\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              'Number of Tracks: ' + this.props.data.length\n            )\n          ),\n          _react2.default.createElement('img', { style: styles.image, src: this.props.data.image })\n        );\n      }\n\n      if (this.props.type === \"track\") {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            null,\n            this.props.data.name\n          ),\n          _react2.default.createElement(\n            'h5',\n            null,\n            this.props.data.artists.join(', ')\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'From: ' + this.props.data.album\n          ),\n          _react2.default.createElement('img', { src: this.props.data.image })\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { style: styles.container2 },\n        this.renderInfo(),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              null,\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Acousticness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                String(this.props.data.stats.acousticness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.acousticness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              null,\n              'Danceability: ' + String(this.props.data.stats.danceability).substring(0, 5)\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.danceability * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              null,\n              'Energy: ' + String(this.props.data.stats.energy).substring(0, 5)\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.energy * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              null,\n              'Instrumentalness: ' + String(this.props.data.stats.instrumentalness).substring(0, 5)\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.instrumentalness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              null,\n              'Liveness: ' + String(this.props.data.stats.liveness).substring(0, 5)\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.liveness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              null,\n              'Speechiness: ' + String(this.props.data.stats.speechiness).substring(0, 5)\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.speechiness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              null,\n              'Loudness: ' + String(this.props.data.stats.loudness).substring(0, 5)\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '-60', max: '0', value: String(this.props.data.stats.loudness), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              null,\n              'Key: ' + String(this.props.data.stats.key).substring(0, 5)\n            )\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'Tempo: ' + String(this.props.data.stats.tempo).substring(0, 5) + ' BPM'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Analysis;\n}(_react2.default.Component);\n\nvar styles = {\n  name: {\n    marginTop: '0px',\n    marginBottom: '2px'\n  },\n  description: {\n    margin: '3px',\n    fontSize: '18px',\n    width: '200px'\n  },\n  image: {\n    height: '150px',\n    width: '150px'\n  },\n  top: {\n    width: '400px',\n    marginTop: '20px',\n    display: 'flex',\n    justifyContent: 'space-between'\n  },\n  container2: {\n    width: '400px',\n    display: 'flex',\n    flexDirection: 'row',\n    flexWrap: 'wrap'\n  },\n  slider: {\n    width: '300px'\n  },\n  props: {\n    fontFamily: 'Raleway, bold, sans-serif',\n    fontSize: '18px',\n    weight: 'bold'\n  }\n};\n\nexports.default = Analysis;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9jb21wb25lbnRzL0FuYWx5c2lzLmpzPzBkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFuYWx5c2lzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlckluZm8oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJwbGF5bGlzdFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG9wfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMubmFtZX0+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57dGhpcy5wcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PnsnTnVtYmVyIG9mIFRyYWNrczogJyt0aGlzLnByb3BzLmRhdGEubGVuZ3RofTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwidHJhY2tcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGg0Pnt0aGlzLnByb3BzLmRhdGEubmFtZX08L2g0PlxuICAgICAgICA8aDU+e3RoaXMucHJvcHMuZGF0YS5hcnRpc3RzLmpvaW4oJywgJyl9PC9oNT5cbiAgICAgICAgPHA+eydGcm9tOiAnK3RoaXMucHJvcHMuZGF0YS5hbGJ1bX08L3A+XG4gICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmRhdGEuaW1hZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyMn0+XG4gICAgICAgIHt0aGlzLnJlbmRlckluZm8oKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PkFjb3VzdGljbmVzczogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj57U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5hY291c3RpY25lc3MpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuYWNvdXN0aWNuZXNzKjEwMCl9IHN0eWxlPXtzdHlsZXMuc2xpZGVyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPnsnRGFuY2VhYmlsaXR5OiAnK1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuZGFuY2VhYmlsaXR5KS5zdWJzdHJpbmcoMCw1KX08L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPXtTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmRhbmNlYWJpbGl0eSoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD57J0VuZXJneTogJytTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmVuZXJneSkuc3Vic3RyaW5nKDAsNSl9PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5lbmVyZ3kqMTAwKX0gc3R5bGU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+eydJbnN0cnVtZW50YWxuZXNzOiAnK1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuaW5zdHJ1bWVudGFsbmVzcykuc3Vic3RyaW5nKDAsNSl9PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5pbnN0cnVtZW50YWxuZXNzKjEwMCl9IHN0eWxlPXtzdHlsZXMuc2xpZGVyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPnsnTGl2ZW5lc3M6ICcrU3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5saXZlbmVzcykuc3Vic3RyaW5nKDAsNSl9PC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5saXZlbmVzcyoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD57J1NwZWVjaGluZXNzOiAnK1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuc3BlZWNoaW5lc3MpLnN1YnN0cmluZygwLDUpfTwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuc3BlZWNoaW5lc3MqMTAwKX0gc3R5bGU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+eydMb3VkbmVzczogJytTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmxvdWRuZXNzKS5zdWJzdHJpbmcoMCw1KX08L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiLTYwXCIgbWF4PVwiMFwiIHZhbHVlPXtTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmxvdWRuZXNzKX0gc3R5bGU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+eydLZXk6ICcrU3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5rZXkpLnN1YnN0cmluZygwLDUpfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cD57J1RlbXBvOiAnK1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMudGVtcG8pLnN1YnN0cmluZygwLDUpKyAnIEJQTSd9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIG5hbWU6IHtcbiAgICBtYXJnaW5Ub3A6ICcwcHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzJweCdcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBtYXJnaW46ICczcHgnLFxuICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgd2lkdGg6ICcyMDBweCdcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBoZWlnaHQ6ICcxNTBweCcsXG4gICAgd2lkdGg6ICcxNTBweCdcbiAgfSxcbiAgdG9wOiB7XG4gICAgd2lkdGg6ICc0MDBweCcsXG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgfSxcbiAgY29udGFpbmVyMjoge1xuICAgIHdpZHRoOiAnNDAwcHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBmbGV4V3JhcDond3JhcCdcbiAgfSxcbiAgc2xpZGVyOiB7XG4gICAgd2lkdGg6ICczMDBweCdcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBmb250RmFtaWx5OiAnUmFsZXdheSwgYm9sZCwgc2Fucy1zZXJpZicsXG4gICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICB3ZWlnaHQ6ICdib2xkJ1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuYWx5c2lzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0FuYWx5c2lzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBT0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUxBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQW5DQTtBQUZBO0FBeUNBOzs7O0FBMUVBO0FBQ0E7QUE0RUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUE3QkE7QUFDQTtBQW1DQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ })

})