webpackHotUpdate(0,{

/***/ 8:
/*!*****************************************!*\
  !*** ./frontend/components/Analysis.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Analysis = function (_React$Component) {\n  _inherits(Analysis, _React$Component);\n\n  function Analysis(props) {\n    _classCallCheck(this, Analysis);\n\n    return _possibleConstructorReturn(this, (Analysis.__proto__ || Object.getPrototypeOf(Analysis)).call(this, props));\n  }\n\n  _createClass(Analysis, [{\n    key: 'renderInfo',\n    value: function renderInfo() {\n      if (this.props.type === \"playlist\") {\n        return _react2.default.createElement(\n          'div',\n          { style: styles.top },\n          _react2.default.createElement('img', { style: styles.image, src: this.props.data.image }),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'h3',\n              { style: styles.name },\n              this.props.data.name\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.description\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              'Number of Tracks: ' + this.props.data.length\n            )\n          )\n        );\n      }\n\n      if (this.props.type === \"track\") {\n        return _react2.default.createElement(\n          'div',\n          { style: styles.top },\n          _react2.default.createElement('img', { src: this.props.data.image }),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'h3',\n              { style: styles.name },\n              this.props.data.name\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.artists.join(', ')\n            ),\n            _react2.default.createElement(\n              'p',\n              null,\n              'style=',\n              styles.description,\n              'From: ' + this.props.data.album\n            )\n          )\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { style: styles.container2 },\n        this.renderInfo(),\n        _react2.default.createElement(\n          'div',\n          { style: styles.container3 },\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Acousticness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.acousticness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.acousticness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Danceability: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.danceability).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.danceability * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Energy: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.energy).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.energy * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Instrumentalness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                String(this.props.data.stats.instrumentalness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Predicts whether a track contains no vocals. \"Ooh\" and \"aah\" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \"vocal\". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.instrumentalness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Liveness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.liveness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.liveness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Speechiness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.speechiness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.speechiness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Loudness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.loudness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '-60', max: '0', value: String(this.props.data.stats.loudness), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Key: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.key).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C\\u266F/D\\u266D, 2 = D, and so on.'\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Tempo: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.tempo).substring(0, 5) + ' BPM'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Analysis;\n}(_react2.default.Component);\n\nvar styles = {\n  name: {\n    marginTop: '0px',\n    marginBottom: '2px'\n  },\n  description: {\n    margin: '3px',\n    fontSize: '18px',\n    width: '200px'\n  },\n  image: {\n    height: '150px',\n    width: '150px'\n  },\n  top: {\n    width: '700px',\n    marginTop: '20px',\n    display: 'flex',\n    paddingLeft: '150px',\n    paddingRight: '150px',\n    justifyContent: 'space-between',\n    paddingBottom: '20px',\n    borderBottom: '1px black solid'\n  },\n  container2: {\n    width: '700px',\n    display: 'flex',\n    flexDirection: 'row',\n    flexWrap: 'wrap',\n    marginBottom: '30px'\n  },\n  slider: {\n    width: '300px'\n  },\n  props: {\n    fontFamily: 'Raleway, bold, sans-serif',\n    fontSize: '20px',\n    fontWeight: '600',\n    margin: '0px'\n  },\n  vals: {\n    fontSize: '20px',\n    margin: '0px'\n  },\n  definition: {\n    fontSize: '14px',\n    marginTop: '2px',\n    marginBottom: '2px'\n  },\n  paragraph: {\n    margin: '2px'\n  },\n  item: {\n    width: '300px',\n    paddingLeft: '25px',\n    paddingRight: '25px',\n    paddingTop: '10px',\n    paddingBottom: '10px'\n  },\n  container3: {\n    display: 'flex',\n    flexWrap: 'wrap'\n  }\n};\n\nexports.default = Analysis;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9jb21wb25lbnRzL0FuYWx5c2lzLmpzPzBkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFuYWx5c2lzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlckluZm8oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJwbGF5bGlzdFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG9wfT5cbiAgICAgICAgICA8aW1nIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfS8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLm5hbWV9Pnt0aGlzLnByb3BzLmRhdGEubmFtZX08L2gzPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e3RoaXMucHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57J051bWJlciBvZiBUcmFja3M6ICcrdGhpcy5wcm9wcy5kYXRhLmxlbmd0aH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnR5cGUgPT09IFwidHJhY2tcIikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnRvcH0+XG4gICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZGF0YS5pbWFnZX0vPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgzIHN0eWxlPXtzdHlsZXMubmFtZX0+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvaDM+XG4gICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e3RoaXMucHJvcHMuZGF0YS5hcnRpc3RzLmpvaW4oJywgJyl9PC9wPlxuICAgICAgICAgIDxwPnN0eWxlPXtzdHlsZXMuZGVzY3JpcHRpb259eydGcm9tOiAnK3RoaXMucHJvcHMuZGF0YS5hbGJ1bX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcjJ9PlxuICAgICAgICB7dGhpcy5yZW5kZXJJbmZvKCl9XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jb250YWluZXIzfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaXRlbX0+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PkFjb3VzdGljbmVzczogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnZhbHN9PntTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmFjb3VzdGljbmVzcykuc3Vic3RyaW5nKDAsNSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZWZpbml0aW9ufT5cbiAgICAgICAgICAgICAgQSBjb25maWRlbmNlIG1lYXN1cmUgZnJvbSAwLjAgdG8gMS4wIG9mIHdoZXRoZXIgdGhlIHRyYWNrIGlzIGFjb3VzdGljLiAxLjAgcmVwcmVzZW50cyBoaWdoIGNvbmZpZGVuY2UgdGhlIHRyYWNrIGlzIGFjb3VzdGljLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5hY291c3RpY25lc3MqMTAwKX0gc3R5bGU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaXRlbX0+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PkRhbmNlYWJpbGl0eTogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnZhbHN9PntTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmRhbmNlYWJpbGl0eSkuc3Vic3RyaW5nKDAsNSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZWZpbml0aW9ufT5cbiAgICAgICAgICAgICAgRGFuY2VhYmlsaXR5IGRlc2NyaWJlcyBob3cgc3VpdGFibGUgYSB0cmFjayBpcyBmb3IgZGFuY2luZyBiYXNlZCBvbiBhIGNvbWJpbmF0aW9uIG9mIG11c2ljYWwgZWxlbWVudHMgaW5jbHVkaW5nIHRlbXBvLCByaHl0aG0gc3RhYmlsaXR5LCBiZWF0IHN0cmVuZ3RoLCBhbmQgb3ZlcmFsbCByZWd1bGFyaXR5LiBBIHZhbHVlIG9mIDAuMCBpcyBsZWFzdCBkYW5jZWFibGUgYW5kIDEuMCBpcyBtb3N0IGRhbmNlYWJsZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuZGFuY2VhYmlsaXR5KjEwMCl9IHN0eWxlPXtzdHlsZXMuc2xpZGVyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLml0ZW19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnByb3BzfT5FbmVyZ3k6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy52YWxzfT57U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5lbmVyZ3kpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICAgIEVuZXJneSBpcyBhIG1lYXN1cmUgZnJvbSAwLjAgdG8gMS4wIGFuZCByZXByZXNlbnRzIGEgcGVyY2VwdHVhbCBtZWFzdXJlIG9mIGludGVuc2l0eSBhbmQgYWN0aXZpdHkuIFR5cGljYWxseSwgZW5lcmdldGljIHRyYWNrcyBmZWVsIGZhc3QsIGxvdWQsIGFuZCBub2lzeS4gRm9yIGV4YW1wbGUsIGRlYXRoIG1ldGFsIGhhcyBoaWdoIGVuZXJneSwgd2hpbGUgYSBCYWNoIHByZWx1ZGUgc2NvcmVzIGxvdyBvbiB0aGUgc2NhbGUuIFBlcmNlcHR1YWwgZmVhdHVyZXMgY29udHJpYnV0aW5nIHRvIHRoaXMgYXR0cmlidXRlIGluY2x1ZGUgZHluYW1pYyByYW5nZSwgcGVyY2VpdmVkIGxvdWRuZXNzLCB0aW1icmUsIG9uc2V0IHJhdGUsIGFuZCBnZW5lcmFsIGVudHJvcHkuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPXtTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmVuZXJneSoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pdGVtfT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5wcm9wc30+SW5zdHJ1bWVudGFsbmVzczogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj57U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5pbnN0cnVtZW50YWxuZXNzKS5zdWJzdHJpbmcoMCw1KX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlZmluaXRpb259PlxuICAgICAgICAgICAgICBQcmVkaWN0cyB3aGV0aGVyIGEgdHJhY2sgY29udGFpbnMgbm8gdm9jYWxzLiBcIk9vaFwiIGFuZCBcImFhaFwiIHNvdW5kcyBhcmUgdHJlYXRlZCBhcyBpbnN0cnVtZW50YWwgaW4gdGhpcyBjb250ZXh0LiBSYXAgb3Igc3Bva2VuIHdvcmQgdHJhY2tzIGFyZSBjbGVhcmx5IFwidm9jYWxcIi4gVGhlIGNsb3NlciB0aGUgaW5zdHJ1bWVudGFsbmVzcyB2YWx1ZSBpcyB0byAxLjAsIHRoZSBncmVhdGVyIGxpa2VsaWhvb2QgdGhlIHRyYWNrIGNvbnRhaW5zIG5vIHZvY2FsIGNvbnRlbnQuIFZhbHVlcyBhYm92ZSAwLjUgYXJlIGludGVuZGVkIHRvIHJlcHJlc2VudCBpbnN0cnVtZW50YWwgdHJhY2tzLCBidXQgY29uZmlkZW5jZSBpcyBoaWdoZXIgYXMgdGhlIHZhbHVlIGFwcHJvYWNoZXMgMS4wLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5pbnN0cnVtZW50YWxuZXNzKjEwMCl9IHN0eWxlPXtzdHlsZXMuc2xpZGVyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLml0ZW19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnByb3BzfT5MaXZlbmVzczogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnZhbHN9PntTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmxpdmVuZXNzKS5zdWJzdHJpbmcoMCw1KX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlZmluaXRpb259PlxuICAgICAgICAgICAgRGV0ZWN0cyB0aGUgcHJlc2VuY2Ugb2YgYW4gYXVkaWVuY2UgaW4gdGhlIHJlY29yZGluZy4gSGlnaGVyIGxpdmVuZXNzIHZhbHVlcyByZXByZXNlbnQgYW4gaW5jcmVhc2VkIHByb2JhYmlsaXR5IHRoYXQgdGhlIHRyYWNrIHdhcyBwZXJmb3JtZWQgbGl2ZS4gQSB2YWx1ZSBhYm92ZSAwLjggcHJvdmlkZXMgc3Ryb25nIGxpa2VsaWhvb2QgdGhhdCB0aGUgdHJhY2sgaXMgbGl2ZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMubGl2ZW5lc3MqMTAwKX0gc3R5bGU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaXRlbX0+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PlNwZWVjaGluZXNzOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuc3BlZWNoaW5lc3MpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICAgIFNwZWVjaGluZXNzIGRldGVjdHMgdGhlIHByZXNlbmNlIG9mIHNwb2tlbiB3b3JkcyBpbiBhIHRyYWNrLiBUaGUgbW9yZSBleGNsdXNpdmVseSBzcGVlY2gtbGlrZSB0aGUgcmVjb3JkaW5nIChlLmcuIHRhbGsgc2hvdywgYXVkaW8gYm9vaywgcG9ldHJ5KSwgdGhlIGNsb3NlciB0byAxLjAgdGhlIGF0dHJpYnV0ZSB2YWx1ZS4gVmFsdWVzIGFib3ZlIDAuNjYgZGVzY3JpYmUgdHJhY2tzIHRoYXQgYXJlIHByb2JhYmx5IG1hZGUgZW50aXJlbHkgb2Ygc3Bva2VuIHdvcmRzLiBWYWx1ZXMgYmV0d2VlbiAwLjMzIGFuZCAwLjY2IGRlc2NyaWJlIHRyYWNrcyB0aGF0IG1heSBjb250YWluIGJvdGggbXVzaWMgYW5kIHNwZWVjaCwgZWl0aGVyIGluIHNlY3Rpb25zIG9yIGxheWVyZWQsIGluY2x1ZGluZyBzdWNoIGNhc2VzIGFzIHJhcCBtdXNpYy4gVmFsdWVzIGJlbG93IDAuMzMgbW9zdCBsaWtlbHkgcmVwcmVzZW50IG11c2ljIGFuZCBvdGhlciBub24tc3BlZWNoLWxpa2UgdHJhY2tzLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5zcGVlY2hpbmVzcyoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pdGVtfT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5wcm9wc30+TG91ZG5lc3M6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy52YWxzfT57U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5sb3VkbmVzcykuc3Vic3RyaW5nKDAsNSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZWZpbml0aW9ufT5cbiAgICAgICAgICAgICAgVGhlIG92ZXJhbGwgbG91ZG5lc3Mgb2YgYSB0cmFjayBpbiBkZWNpYmVscyAoZEIpLiBMb3VkbmVzcyB2YWx1ZXMgYXJlIGF2ZXJhZ2VkIGFjcm9zcyB0aGUgZW50aXJlIHRyYWNrIGFuZCBhcmUgdXNlZnVsIGZvciBjb21wYXJpbmcgcmVsYXRpdmUgbG91ZG5lc3Mgb2YgdHJhY2tzLiBMb3VkbmVzcyBpcyB0aGUgcXVhbGl0eSBvZiBhIHNvdW5kIHRoYXQgaXMgdGhlIHByaW1hcnkgcHN5Y2hvbG9naWNhbCBjb3JyZWxhdGUgb2YgcGh5c2ljYWwgc3RyZW5ndGggKGFtcGxpdHVkZSkuIFZhbHVlcyB0eXBpY2FsIHJhbmdlIGJldHdlZW4gLTYwIGFuZCAwIGRiLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIi02MFwiIG1heD1cIjBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5sb3VkbmVzcyl9IHN0eWxlPXtzdHlsZXMuc2xpZGVyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLml0ZW19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnByb3BzfT5LZXk6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy52YWxzfT57U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5rZXkpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICAgIFRoZSBrZXkgdGhlIHRyYWNrIGlzIGluLiBJbnRlZ2VycyBtYXAgdG8gcGl0Y2hlcyB1c2luZyBzdGFuZGFyZCBQaXRjaCBDbGFzcyBub3RhdGlvbi4gRS5nLiAwID0gQywgMSA9IEPima8vROKZrSwgMiA9IEQsIGFuZCBzbyBvbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5wcm9wc30+VGVtcG86IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy52YWxzfT57U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy50ZW1wbykuc3Vic3RyaW5nKDAsNSkrICcgQlBNJ308L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlZmluaXRpb259PlxuICAgICAgICAgICAgICBUaGUgb3ZlcmFsbCBlc3RpbWF0ZWQgdGVtcG8gb2YgYSB0cmFjayBpbiBiZWF0cyBwZXIgbWludXRlIChCUE0pLiBJbiBtdXNpY2FsIHRlcm1pbm9sb2d5LCB0ZW1wbyBpcyB0aGUgc3BlZWQgb3IgcGFjZSBvZiBhIGdpdmVuIHBpZWNlIGFuZCBkZXJpdmVzIGRpcmVjdGx5IGZyb20gdGhlIGF2ZXJhZ2UgYmVhdCBkdXJhdGlvbi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBuYW1lOiB7XG4gICAgbWFyZ2luVG9wOiAnMHB4JyxcbiAgICBtYXJnaW5Cb3R0b206ICcycHgnXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgbWFyZ2luOiAnM3B4JyxcbiAgICBmb250U2l6ZTogJzE4cHgnLFxuICAgIHdpZHRoOiAnMjAwcHgnXG4gIH0sXG4gIGltYWdlOiB7XG4gICAgaGVpZ2h0OiAnMTUwcHgnLFxuICAgIHdpZHRoOiAnMTUwcHgnXG4gIH0sXG4gIHRvcDoge1xuICAgIHdpZHRoOiAnNzAwcHgnLFxuICAgIG1hcmdpblRvcDogJzIwcHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBwYWRkaW5nTGVmdDogJzE1MHB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6ICcxNTBweCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMjBweCcsXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IGJsYWNrIHNvbGlkJ1xuICB9LFxuICBjb250YWluZXIyOiB7XG4gICAgd2lkdGg6ICc3MDBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGZsZXhXcmFwOid3cmFwJyxcbiAgICBtYXJnaW5Cb3R0b206ICczMHB4J1xuICB9LFxuICBzbGlkZXI6IHtcbiAgICB3aWR0aDogJzMwMHB4J1xuICB9LFxuICBwcm9wczoge1xuICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5LCBib2xkLCBzYW5zLXNlcmlmJyxcbiAgICBmb250U2l6ZTogJzIwcHgnLFxuICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxuICAgIG1hcmdpbjogJzBweCdcbiAgfSxcbiAgdmFsczoge1xuICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgbWFyZ2luOiAnMHB4J1xuICB9LFxuICBkZWZpbml0aW9uOiB7XG4gICAgZm9udFNpemU6ICcxNHB4JyxcbiAgICBtYXJnaW5Ub3A6ICcycHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzJweCdcbiAgfSxcbiAgcGFyYWdyYXBoOiB7XG4gICAgbWFyZ2luOiAnMnB4J1xuICB9LFxuICBpdGVtOiB7XG4gICAgd2lkdGg6ICczMDBweCcsXG4gICAgcGFkZGluZ0xlZnQ6ICcyNXB4JyxcbiAgICBwYWRkaW5nUmlnaHQ6ICcyNXB4JyxcbiAgICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnXG4gIH0sXG4gIGNvbnRhaW5lcjM6IHtcbiAgICBkaXNwbGF5OidmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5hbHlzaXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvQW5hbHlzaXMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFGQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBRkE7QUFTQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpBO0FBdkVBO0FBRkE7QUE0RkE7Ozs7QUEvSEE7QUFDQTtBQWlJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBRkE7QUEzREE7QUFDQTtBQWdFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ })

})