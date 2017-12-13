webpackHotUpdate(0,{

/***/ 8:
/*!*****************************************!*\
  !*** ./frontend/components/Analysis.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Analysis = function (_React$Component) {\n  _inherits(Analysis, _React$Component);\n\n  function Analysis(props) {\n    _classCallCheck(this, Analysis);\n\n    return _possibleConstructorReturn(this, (Analysis.__proto__ || Object.getPrototypeOf(Analysis)).call(this, props));\n  }\n\n  _createClass(Analysis, [{\n    key: 'renderInfo',\n    value: function renderInfo() {\n      if (this.props.type === \"playlist\") {\n        return _react2.default.createElement(\n          'div',\n          { style: styles.top },\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'h3',\n              { style: styles.name },\n              this.props.data.name\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.description\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              'Number of Tracks: ' + this.props.data.length\n            )\n          ),\n          _react2.default.createElement('img', { style: styles.image, src: this.props.data.image })\n        );\n      }\n\n      if (this.props.type === \"track\") {\n        return _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            null,\n            this.props.data.name\n          ),\n          _react2.default.createElement(\n            'h5',\n            null,\n            this.props.data.artists.join(', ')\n          ),\n          _react2.default.createElement(\n            'p',\n            null,\n            'From: ' + this.props.data.album\n          ),\n          _react2.default.createElement('img', { src: this.props.data.image })\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { style: styles.container2 },\n        this.renderInfo(),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Acousticness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.acousticness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.acousticness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Danceability: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.danceability).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.danceability * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Energy: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.energy).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.energy * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Instrumentalness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                String(this.props.data.stats.instrumentalness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Predicts whether a track contains no vocals. \"Ooh\" and \"aah\" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \"vocal\". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.instrumentalness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Liveness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.liveness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.liveness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Speechiness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.speechiness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.speechiness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Loudness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.loudness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '-60', max: '0', value: String(this.props.data.stats.loudness), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Key: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.key).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C\\u266F/D\\u266D, 2 = D, and so on.'\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Tempo: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.tempo).substring(0, 5) + ' BPM'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Analysis;\n}(_react2.default.Component);\n\nvar styles = {\n  name: {\n    marginTop: '0px',\n    marginBottom: '2px'\n  },\n  description: {\n    margin: '3px',\n    fontSize: '18px',\n    width: '200px'\n  },\n  image: {\n    height: '150px',\n    width: '150px'\n  },\n  top: {\n    width: '700px',\n    marginTop: '20px',\n    display: 'flex',\n    paddingLeft: '100px',\n    paddingRight: '100px',\n    justifyContent: 'space-between'\n  },\n  container2: {\n    width: '700px',\n    display: 'flex',\n    flexDirection: 'row',\n    flexWrap: 'wrap',\n    marginBottom: '30px'\n  },\n  slider: {\n    width: '300px'\n  },\n  props: {\n    fontFamily: 'Raleway, bold, sans-serif',\n    fontSize: '20px',\n    fontWeight: '600',\n    margin: '0px'\n  },\n  vals: {\n    fontSize: '20px',\n    margin: '0px'\n  },\n  definition: {\n    fontSize: '14px',\n    marginTop: '2px',\n    marginBottom: '2px'\n  },\n  paragraph: {\n    margin: '2px'\n  }\n};\n\nexports.default = Analysis;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9jb21wb25lbnRzL0FuYWx5c2lzLmpzPzBkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFuYWx5c2lzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlckluZm8oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJwbGF5bGlzdFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG9wfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMubmFtZX0+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57dGhpcy5wcm9wcy5kYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259PnsnTnVtYmVyIG9mIFRyYWNrczogJyt0aGlzLnByb3BzLmRhdGEubGVuZ3RofTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwidHJhY2tcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGg0Pnt0aGlzLnByb3BzLmRhdGEubmFtZX08L2g0PlxuICAgICAgICA8aDU+e3RoaXMucHJvcHMuZGF0YS5hcnRpc3RzLmpvaW4oJywgJyl9PC9oNT5cbiAgICAgICAgPHA+eydGcm9tOiAnK3RoaXMucHJvcHMuZGF0YS5hbGJ1bX08L3A+XG4gICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmRhdGEuaW1hZ2V9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyMn0+XG4gICAgICAgIHt0aGlzLnJlbmRlckluZm8oKX1cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnByb3BzfT5BY291c3RpY25lc3M6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy52YWxzfT57U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5hY291c3RpY25lc3MpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICAgIEEgY29uZmlkZW5jZSBtZWFzdXJlIGZyb20gMC4wIHRvIDEuMCBvZiB3aGV0aGVyIHRoZSB0cmFjayBpcyBhY291c3RpYy4gMS4wIHJlcHJlc2VudHMgaGlnaCBjb25maWRlbmNlIHRoZSB0cmFjayBpcyBhY291c3RpYy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuYWNvdXN0aWNuZXNzKjEwMCl9IHN0eWxlPXtzdHlsZXMuc2xpZGVyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5wcm9wc30+RGFuY2VhYmlsaXR5OiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuZGFuY2VhYmlsaXR5KS5zdWJzdHJpbmcoMCw1KX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlZmluaXRpb259PlxuICAgICAgICAgICAgICBEYW5jZWFiaWxpdHkgZGVzY3JpYmVzIGhvdyBzdWl0YWJsZSBhIHRyYWNrIGlzIGZvciBkYW5jaW5nIGJhc2VkIG9uIGEgY29tYmluYXRpb24gb2YgbXVzaWNhbCBlbGVtZW50cyBpbmNsdWRpbmcgdGVtcG8sIHJoeXRobSBzdGFiaWxpdHksIGJlYXQgc3RyZW5ndGgsIGFuZCBvdmVyYWxsIHJlZ3VsYXJpdHkuIEEgdmFsdWUgb2YgMC4wIGlzIGxlYXN0IGRhbmNlYWJsZSBhbmQgMS4wIGlzIG1vc3QgZGFuY2VhYmxlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5kYW5jZWFiaWxpdHkqMTAwKX0gc3R5bGU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnByb3BzfT5FbmVyZ3k6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy52YWxzfT57U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5lbmVyZ3kpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICAgIEVuZXJneSBpcyBhIG1lYXN1cmUgZnJvbSAwLjAgdG8gMS4wIGFuZCByZXByZXNlbnRzIGEgcGVyY2VwdHVhbCBtZWFzdXJlIG9mIGludGVuc2l0eSBhbmQgYWN0aXZpdHkuIFR5cGljYWxseSwgZW5lcmdldGljIHRyYWNrcyBmZWVsIGZhc3QsIGxvdWQsIGFuZCBub2lzeS4gRm9yIGV4YW1wbGUsIGRlYXRoIG1ldGFsIGhhcyBoaWdoIGVuZXJneSwgd2hpbGUgYSBCYWNoIHByZWx1ZGUgc2NvcmVzIGxvdyBvbiB0aGUgc2NhbGUuIFBlcmNlcHR1YWwgZmVhdHVyZXMgY29udHJpYnV0aW5nIHRvIHRoaXMgYXR0cmlidXRlIGluY2x1ZGUgZHluYW1pYyByYW5nZSwgcGVyY2VpdmVkIGxvdWRuZXNzLCB0aW1icmUsIG9uc2V0IHJhdGUsIGFuZCBnZW5lcmFsIGVudHJvcHkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPXtTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmVuZXJneSoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9Pkluc3RydW1lbnRhbG5lc3M6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuaW5zdHJ1bWVudGFsbmVzcykuc3Vic3RyaW5nKDAsNSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZWZpbml0aW9ufT5cbiAgICAgICAgICAgICAgUHJlZGljdHMgd2hldGhlciBhIHRyYWNrIGNvbnRhaW5zIG5vIHZvY2Fscy4gXCJPb2hcIiBhbmQgXCJhYWhcIiBzb3VuZHMgYXJlIHRyZWF0ZWQgYXMgaW5zdHJ1bWVudGFsIGluIHRoaXMgY29udGV4dC4gUmFwIG9yIHNwb2tlbiB3b3JkIHRyYWNrcyBhcmUgY2xlYXJseSBcInZvY2FsXCIuIFRoZSBjbG9zZXIgdGhlIGluc3RydW1lbnRhbG5lc3MgdmFsdWUgaXMgdG8gMS4wLCB0aGUgZ3JlYXRlciBsaWtlbGlob29kIHRoZSB0cmFjayBjb250YWlucyBubyB2b2NhbCBjb250ZW50LiBWYWx1ZXMgYWJvdmUgMC41IGFyZSBpbnRlbmRlZCB0byByZXByZXNlbnQgaW5zdHJ1bWVudGFsIHRyYWNrcywgYnV0IGNvbmZpZGVuY2UgaXMgaGlnaGVyIGFzIHRoZSB2YWx1ZSBhcHByb2FjaGVzIDEuMC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuaW5zdHJ1bWVudGFsbmVzcyoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PkxpdmVuZXNzOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMubGl2ZW5lc3MpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICBEZXRlY3RzIHRoZSBwcmVzZW5jZSBvZiBhbiBhdWRpZW5jZSBpbiB0aGUgcmVjb3JkaW5nLiBIaWdoZXIgbGl2ZW5lc3MgdmFsdWVzIHJlcHJlc2VudCBhbiBpbmNyZWFzZWQgcHJvYmFiaWxpdHkgdGhhdCB0aGUgdHJhY2sgd2FzIHBlcmZvcm1lZCBsaXZlLiBBIHZhbHVlIGFib3ZlIDAuOCBwcm92aWRlcyBzdHJvbmcgbGlrZWxpaG9vZCB0aGF0IHRoZSB0cmFjayBpcyBsaXZlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5saXZlbmVzcyoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PlNwZWVjaGluZXNzOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuc3BlZWNoaW5lc3MpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICAgIFNwZWVjaGluZXNzIGRldGVjdHMgdGhlIHByZXNlbmNlIG9mIHNwb2tlbiB3b3JkcyBpbiBhIHRyYWNrLiBUaGUgbW9yZSBleGNsdXNpdmVseSBzcGVlY2gtbGlrZSB0aGUgcmVjb3JkaW5nIChlLmcuIHRhbGsgc2hvdywgYXVkaW8gYm9vaywgcG9ldHJ5KSwgdGhlIGNsb3NlciB0byAxLjAgdGhlIGF0dHJpYnV0ZSB2YWx1ZS4gVmFsdWVzIGFib3ZlIDAuNjYgZGVzY3JpYmUgdHJhY2tzIHRoYXQgYXJlIHByb2JhYmx5IG1hZGUgZW50aXJlbHkgb2Ygc3Bva2VuIHdvcmRzLiBWYWx1ZXMgYmV0d2VlbiAwLjMzIGFuZCAwLjY2IGRlc2NyaWJlIHRyYWNrcyB0aGF0IG1heSBjb250YWluIGJvdGggbXVzaWMgYW5kIHNwZWVjaCwgZWl0aGVyIGluIHNlY3Rpb25zIG9yIGxheWVyZWQsIGluY2x1ZGluZyBzdWNoIGNhc2VzIGFzIHJhcCBtdXNpYy4gVmFsdWVzIGJlbG93IDAuMzMgbW9zdCBsaWtlbHkgcmVwcmVzZW50IG11c2ljIGFuZCBvdGhlciBub24tc3BlZWNoLWxpa2UgdHJhY2tzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5zcGVlY2hpbmVzcyoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PkxvdWRuZXNzOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMubG91ZG5lc3MpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICAgIFRoZSBvdmVyYWxsIGxvdWRuZXNzIG9mIGEgdHJhY2sgaW4gZGVjaWJlbHMgKGRCKS4gTG91ZG5lc3MgdmFsdWVzIGFyZSBhdmVyYWdlZCBhY3Jvc3MgdGhlIGVudGlyZSB0cmFjayBhbmQgYXJlIHVzZWZ1bCBmb3IgY29tcGFyaW5nIHJlbGF0aXZlIGxvdWRuZXNzIG9mIHRyYWNrcy4gTG91ZG5lc3MgaXMgdGhlIHF1YWxpdHkgb2YgYSBzb3VuZCB0aGF0IGlzIHRoZSBwcmltYXJ5IHBzeWNob2xvZ2ljYWwgY29ycmVsYXRlIG9mIHBoeXNpY2FsIHN0cmVuZ3RoIChhbXBsaXR1ZGUpLiBWYWx1ZXMgdHlwaWNhbCByYW5nZSBiZXR3ZWVuIC02MCBhbmQgMCBkYi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCItNjBcIiBtYXg9XCIwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMubG91ZG5lc3MpfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PktleTogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnZhbHN9PntTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmtleSkuc3Vic3RyaW5nKDAsNSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZWZpbml0aW9ufT5cbiAgICAgICAgICAgICAgVGhlIGtleSB0aGUgdHJhY2sgaXMgaW4uIEludGVnZXJzIG1hcCB0byBwaXRjaGVzIHVzaW5nIHN0YW5kYXJkIFBpdGNoIENsYXNzIG5vdGF0aW9uLiBFLmcuIDAgPSBDLCAxID0gQ+KZry9E4pmtLCAyID0gRCwgYW5kIHNvIG9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PlRlbXBvOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMudGVtcG8pLnN1YnN0cmluZygwLDUpKyAnIEJQTSd9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZWZpbml0aW9ufT5cbiAgICAgICAgICAgICAgVGhlIG92ZXJhbGwgZXN0aW1hdGVkIHRlbXBvIG9mIGEgdHJhY2sgaW4gYmVhdHMgcGVyIG1pbnV0ZSAoQlBNKS4gSW4gbXVzaWNhbCB0ZXJtaW5vbG9neSwgdGVtcG8gaXMgdGhlIHNwZWVkIG9yIHBhY2Ugb2YgYSBnaXZlbiBwaWVjZSBhbmQgZGVyaXZlcyBkaXJlY3RseSBmcm9tIHRoZSBhdmVyYWdlIGJlYXQgZHVyYXRpb24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgbmFtZToge1xuICAgIG1hcmdpblRvcDogJzBweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMnB4J1xuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIG1hcmdpbjogJzNweCcsXG4gICAgZm9udFNpemU6ICcxOHB4JyxcbiAgICB3aWR0aDogJzIwMHB4J1xuICB9LFxuICBpbWFnZToge1xuICAgIGhlaWdodDogJzE1MHB4JyxcbiAgICB3aWR0aDogJzE1MHB4J1xuICB9LFxuICB0b3A6IHtcbiAgICB3aWR0aDogJzcwMHB4JyxcbiAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgcGFkZGluZ0xlZnQ6ICcxMDBweCcsXG4gICAgcGFkZGluZ1JpZ2h0OiAnMTAwcHgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgfSxcbiAgY29udGFpbmVyMjoge1xuICAgIHdpZHRoOiAnNzAwcHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgICBmbGV4V3JhcDond3JhcCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMzBweCdcbiAgfSxcbiAgc2xpZGVyOiB7XG4gICAgd2lkdGg6ICczMDBweCdcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBmb250RmFtaWx5OiAnUmFsZXdheSwgYm9sZCwgc2Fucy1zZXJpZicsXG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICBmb250V2VpZ2h0OiAnNjAwJyxcbiAgICBtYXJnaW46ICcwcHgnXG4gIH0sXG4gIHZhbHM6IHtcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIG1hcmdpbjogJzBweCdcbiAgfSxcbiAgZGVmaW5pdGlvbjoge1xuICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgbWFyZ2luVG9wOiAnMnB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcycHgnXG4gIH0sXG4gIHBhcmFncmFwaDoge1xuICAgIG1hcmdpbjogJzJweCdcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmFseXNpcztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9BbmFseXNpcy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQU5BO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBUkE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQWhGQTtBQUZBO0FBOEZBOzs7O0FBL0hBO0FBQ0E7QUFpSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQS9DQTtBQUNBO0FBbURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ })

})