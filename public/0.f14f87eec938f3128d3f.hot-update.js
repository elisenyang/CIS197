webpackHotUpdate(0,{

/***/ 8:
/*!*****************************************!*\
  !*** ./frontend/components/Analysis.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Analysis = function (_React$Component) {\n  _inherits(Analysis, _React$Component);\n\n  function Analysis(props) {\n    _classCallCheck(this, Analysis);\n\n    return _possibleConstructorReturn(this, (Analysis.__proto__ || Object.getPrototypeOf(Analysis)).call(this, props));\n  }\n\n  _createClass(Analysis, [{\n    key: 'renderInfo',\n    value: function renderInfo() {\n      var _this2 = this;\n\n      if (this.props.type === \"playlist\") {\n        return _react2.default.createElement(\n          'div',\n          { style: styles.top },\n          _react2.default.createElement('img', { style: styles.image, src: this.props.data.image }),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'h3',\n              { style: styles.name },\n              this.props.data.name\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.description\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              'Number of Tracks: ' + this.props.data.length\n            ),\n            _react2.default.createElement(\n              'button',\n              { style: styles.button, onClick: function onClick() {\n                  return _this2.follow();\n                } },\n              'Follow'\n            )\n          )\n        );\n      }\n\n      if (this.props.type === \"track\") {\n        return _react2.default.createElement(\n          'div',\n          { style: styles.top },\n          _react2.default.createElement('img', { style: styles.image, src: this.props.data.image }),\n          _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n              'h3',\n              { style: styles.name },\n              this.props.data.name\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.artists.join(', ')\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.description },\n              this.props.data.album\n            ),\n            _react2.default.createElement(\n              'button',\n              { style: styles.button, onClick: function onClick() {\n                  return _this2.follow();\n                } },\n              'Add to Library'\n            )\n          )\n        );\n      }\n    }\n  }, {\n    key: 'follow',\n    value: function follow() {\n      if (this.props.login) {\n        fetch('/follow/' + this.props.token + '/' + this.props.user + '/' + this.props.playlistID, {\n          method: 'GET'\n        }).then(function (response) {\n          return response.json();\n        }).then(function (responseJSON) {\n          if (responseJSON.status === 200) {\n            window.alert(\"Playlist has been followed\");\n          } else {\n            window.alert(\"There was an error followng this playlist. Please try again\");\n          }\n        }).catch(function (err) {\n          console.log(err.message);\n        });\n      } else {\n        alert(\"Please login with Spotify to follow this playlist\");\n      }\n    }\n  }, {\n    key: 'addToLibrary',\n    value: function addToLibrary() {\n      if (this.props.login) {\n        fetch('/addToLibrary/' + this.props.trackID, {\n          method: 'GET'\n        }).then(function (response) {\n          return response.json();\n        }).then(function (responseJSON) {\n          if (responseJSON.status === 200) {\n            window.alert(\"Track has been added to your library\");\n          } else {\n            window.alert(\"There was an error. Please try again.\");\n          }\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { style: styles.container2 },\n        this.renderInfo(),\n        _react2.default.createElement(\n          'div',\n          { style: styles.container3 },\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Danceability: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.danceability).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.danceability * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Loudness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.loudness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typical range between -60 and 0 db.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '-60', max: '0', value: String(this.props.data.stats.loudness), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Energy: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.energy).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.energy * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Instrumentalness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                null,\n                String(this.props.data.stats.instrumentalness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Predicts whether a track contains no vocals. \"Ooh\" and \"aah\" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \"vocal\". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.instrumentalness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Acousticness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.acousticness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.acousticness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Liveness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.liveness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.liveness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Speechiness: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.speechiness).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.'\n            ),\n            _react2.default.createElement('input', { type: 'range', min: '0', max: '100', value: String(this.props.data.stats.speechiness * 100), style: styles.slider })\n          ),\n          _react2.default.createElement(\n            'div',\n            { style: styles.item },\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Key: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.key).substring(0, 5)\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C\\u266F/D\\u266D, 2 = D, and so on.'\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.paragraph },\n              _react2.default.createElement(\n                'span',\n                { style: styles.props },\n                'Tempo: '\n              ),\n              _react2.default.createElement(\n                'span',\n                { style: styles.vals },\n                String(this.props.data.stats.tempo).substring(0, 5) + ' BPM'\n              )\n            ),\n            _react2.default.createElement(\n              'p',\n              { style: styles.definition },\n              'The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.'\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return Analysis;\n}(_react2.default.Component);\n\nvar styles = {\n  name: {\n    marginTop: '0px',\n    marginBottom: '2px'\n  },\n  description: {\n    margin: '3px',\n    fontSize: '18px',\n    width: '200px'\n  },\n  image: {\n    height: '200px',\n    width: '200px'\n  },\n  top: {\n    width: '700px',\n    marginTop: '20px',\n    display: 'flex',\n    paddingLeft: '125px',\n    paddingRight: '125px',\n    justifyContent: 'space-between',\n    paddingBottom: '20px',\n    borderBottom: '1px black solid'\n  },\n  container2: {\n    width: '700px',\n    display: 'flex',\n    flexDirection: 'row',\n    flexWrap: 'wrap',\n    marginBottom: '30px'\n  },\n  slider: {\n    width: '300px'\n  },\n  props: {\n    fontFamily: 'Raleway, bold, sans-serif',\n    fontSize: '20px',\n    fontWeight: '600',\n    margin: '0px'\n  },\n  vals: {\n    fontSize: '20px',\n    margin: '0px'\n  },\n  definition: {\n    fontSize: '14px',\n    marginTop: '2px',\n    marginBottom: '2px'\n  },\n  paragraph: {\n    margin: '2px'\n  },\n  item: {\n    width: '300px',\n    paddingLeft: '25px',\n    paddingRight: '25px',\n    paddingTop: '10px',\n    paddingBottom: '10px'\n  },\n  container3: {\n    display: 'flex',\n    flexWrap: 'wrap'\n  },\n  button: {\n    fontFamily: 'Raleway, sans-serif',\n    color: 'black',\n    height: '40px',\n    width: '150px',\n    backgroundColor: 'rgba(255,255,255,0.4)',\n    fontSize: '16px',\n    margin: '8px',\n    border: '0px',\n    borderRadius: '20px',\n    boxShadow: '2px 3px rgba(0,0,0,0.4)'\n  }\n};\n\nexports.default = Analysis;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9mcm9udGVuZC9jb21wb25lbnRzL0FuYWx5c2lzLmpzPzBkZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEFuYWx5c2lzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgfVxuXG4gIHJlbmRlckluZm8oKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJwbGF5bGlzdFwiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG9wfT5cbiAgICAgICAgICA8aW1nIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfS8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMyBzdHlsZT17c3R5bGVzLm5hbWV9Pnt0aGlzLnByb3BzLmRhdGEubmFtZX08L2gzPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e3RoaXMucHJvcHMuZGF0YS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57J051bWJlciBvZiBUcmFja3M6ICcrdGhpcy5wcm9wcy5kYXRhLmxlbmd0aH08L3A+XG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB0aGlzLmZvbGxvdygpfT5Gb2xsb3c8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMudHlwZSA9PT0gXCJ0cmFja1wiKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMudG9wfT5cbiAgICAgICAgICA8aW1nIHN0eWxlPXtzdHlsZXMuaW1hZ2V9IHNyYz17dGhpcy5wcm9wcy5kYXRhLmltYWdlfS8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDMgc3R5bGU9e3N0eWxlcy5uYW1lfT57dGhpcy5wcm9wcy5kYXRhLm5hbWV9PC9oMz5cbiAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57dGhpcy5wcm9wcy5kYXRhLmFydGlzdHMuam9pbignLCAnKX08L3A+XG4gICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e3RoaXMucHJvcHMuZGF0YS5hbGJ1bX08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gdGhpcy5mb2xsb3coKX0+QWRkIHRvIExpYnJhcnk8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZm9sbG93KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmxvZ2luKSB7XG4gICAgICAgIGZldGNoKCcvZm9sbG93LycrdGhpcy5wcm9wcy50b2tlbisnLycrdGhpcy5wcm9wcy51c2VyKycvJyt0aGlzLnByb3BzLnBsYXlsaXN0SUQsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2VKU09OID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZUpTT04uc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJQbGF5bGlzdCBoYXMgYmVlbiBmb2xsb3dlZFwiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZm9sbG93bmcgdGhpcyBwbGF5bGlzdC4gUGxlYXNlIHRyeSBhZ2FpblwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIGxvZ2luIHdpdGggU3BvdGlmeSB0byBmb2xsb3cgdGhpcyBwbGF5bGlzdFwiKVxuICAgIH0gXG4gIH1cblxuICBhZGRUb0xpYnJhcnkoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubG9naW4pIHtcbiAgICAgIGZldGNoKCcvYWRkVG9MaWJyYXJ5LycrdGhpcy5wcm9wcy50cmFja0lELCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICB9KS50aGVuKHJlc3BvbnNlSlNPTiA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZUpTT04uc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUcmFjayBoYXMgYmVlbiBhZGRlZCB0byB5b3VyIGxpYnJhcnlcIilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGVyZSB3YXMgYW4gZXJyb3IuIFBsZWFzZSB0cnkgYWdhaW4uXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuY29udGFpbmVyMn0+XG4gICAgICAgIHt0aGlzLnJlbmRlckluZm8oKX1cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcjN9PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pdGVtfT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5wcm9wc30+RGFuY2VhYmlsaXR5OiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuZGFuY2VhYmlsaXR5KS5zdWJzdHJpbmcoMCw1KX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlZmluaXRpb259PlxuICAgICAgICAgICAgICBEYW5jZWFiaWxpdHkgZGVzY3JpYmVzIGhvdyBzdWl0YWJsZSBhIHRyYWNrIGlzIGZvciBkYW5jaW5nIGJhc2VkIG9uIGEgY29tYmluYXRpb24gb2YgbXVzaWNhbCBlbGVtZW50cyBpbmNsdWRpbmcgdGVtcG8sIHJoeXRobSBzdGFiaWxpdHksIGJlYXQgc3RyZW5ndGgsIGFuZCBvdmVyYWxsIHJlZ3VsYXJpdHkuIEEgdmFsdWUgb2YgMC4wIGlzIGxlYXN0IGRhbmNlYWJsZSBhbmQgMS4wIGlzIG1vc3QgZGFuY2VhYmxlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5kYW5jZWFiaWxpdHkqMTAwKX0gc3R5bGU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaXRlbX0+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PkxvdWRuZXNzOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMubG91ZG5lc3MpLnN1YnN0cmluZygwLDUpfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICAgIFRoZSBvdmVyYWxsIGxvdWRuZXNzIG9mIGEgdHJhY2sgaW4gZGVjaWJlbHMgKGRCKS4gTG91ZG5lc3MgdmFsdWVzIGFyZSBhdmVyYWdlZCBhY3Jvc3MgdGhlIGVudGlyZSB0cmFjayBhbmQgYXJlIHVzZWZ1bCBmb3IgY29tcGFyaW5nIHJlbGF0aXZlIGxvdWRuZXNzIG9mIHRyYWNrcy4gTG91ZG5lc3MgaXMgdGhlIHF1YWxpdHkgb2YgYSBzb3VuZCB0aGF0IGlzIHRoZSBwcmltYXJ5IHBzeWNob2xvZ2ljYWwgY29ycmVsYXRlIG9mIHBoeXNpY2FsIHN0cmVuZ3RoIChhbXBsaXR1ZGUpLiBWYWx1ZXMgdHlwaWNhbCByYW5nZSBiZXR3ZWVuIC02MCBhbmQgMCBkYi5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCItNjBcIiBtYXg9XCIwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMubG91ZG5lc3MpfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pdGVtfT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5wcm9wc30+RW5lcmd5OiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuZW5lcmd5KS5zdWJzdHJpbmcoMCw1KX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlZmluaXRpb259PlxuICAgICAgICAgICAgICBFbmVyZ3kgaXMgYSBtZWFzdXJlIGZyb20gMC4wIHRvIDEuMCBhbmQgcmVwcmVzZW50cyBhIHBlcmNlcHR1YWwgbWVhc3VyZSBvZiBpbnRlbnNpdHkgYW5kIGFjdGl2aXR5LiBUeXBpY2FsbHksIGVuZXJnZXRpYyB0cmFja3MgZmVlbCBmYXN0LCBsb3VkLCBhbmQgbm9pc3kuIEZvciBleGFtcGxlLCBkZWF0aCBtZXRhbCBoYXMgaGlnaCBlbmVyZ3ksIHdoaWxlIGEgQmFjaCBwcmVsdWRlIHNjb3JlcyBsb3cgb24gdGhlIHNjYWxlLiBQZXJjZXB0dWFsIGZlYXR1cmVzIGNvbnRyaWJ1dGluZyB0byB0aGlzIGF0dHJpYnV0ZSBpbmNsdWRlIGR5bmFtaWMgcmFuZ2UsIHBlcmNlaXZlZCBsb3VkbmVzcywgdGltYnJlLCBvbnNldCByYXRlLCBhbmQgZ2VuZXJhbCBlbnRyb3B5LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT17U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5lbmVyZ3kqMTAwKX0gc3R5bGU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaXRlbX0+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9Pkluc3RydW1lbnRhbG5lc3M6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuaW5zdHJ1bWVudGFsbmVzcykuc3Vic3RyaW5nKDAsNSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZWZpbml0aW9ufT5cbiAgICAgICAgICAgICAgUHJlZGljdHMgd2hldGhlciBhIHRyYWNrIGNvbnRhaW5zIG5vIHZvY2Fscy4gXCJPb2hcIiBhbmQgXCJhYWhcIiBzb3VuZHMgYXJlIHRyZWF0ZWQgYXMgaW5zdHJ1bWVudGFsIGluIHRoaXMgY29udGV4dC4gUmFwIG9yIHNwb2tlbiB3b3JkIHRyYWNrcyBhcmUgY2xlYXJseSBcInZvY2FsXCIuIFRoZSBjbG9zZXIgdGhlIGluc3RydW1lbnRhbG5lc3MgdmFsdWUgaXMgdG8gMS4wLCB0aGUgZ3JlYXRlciBsaWtlbGlob29kIHRoZSB0cmFjayBjb250YWlucyBubyB2b2NhbCBjb250ZW50LiBWYWx1ZXMgYWJvdmUgMC41IGFyZSBpbnRlbmRlZCB0byByZXByZXNlbnQgaW5zdHJ1bWVudGFsIHRyYWNrcywgYnV0IGNvbmZpZGVuY2UgaXMgaGlnaGVyIGFzIHRoZSB2YWx1ZSBhcHByb2FjaGVzIDEuMC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuaW5zdHJ1bWVudGFsbmVzcyoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pdGVtfT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5wcm9wc30+QWNvdXN0aWNuZXNzOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudmFsc30+e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuYWNvdXN0aWNuZXNzKS5zdWJzdHJpbmcoMCw1KX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlZmluaXRpb259PlxuICAgICAgICAgICAgICBBIGNvbmZpZGVuY2UgbWVhc3VyZSBmcm9tIDAuMCB0byAxLjAgb2Ygd2hldGhlciB0aGUgdHJhY2sgaXMgYWNvdXN0aWMuIDEuMCByZXByZXNlbnRzIGhpZ2ggY29uZmlkZW5jZSB0aGUgdHJhY2sgaXMgYWNvdXN0aWMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPXtTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmFjb3VzdGljbmVzcyoxMDApfSBzdHlsZT17c3R5bGVzLnNsaWRlcn0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5pdGVtfT5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMucGFyYWdyYXBofT5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy5wcm9wc30+TGl2ZW5lc3M6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3N0eWxlcy52YWxzfT57U3RyaW5nKHRoaXMucHJvcHMuZGF0YS5zdGF0cy5saXZlbmVzcykuc3Vic3RyaW5nKDAsNSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZWZpbml0aW9ufT5cbiAgICAgICAgICAgIERldGVjdHMgdGhlIHByZXNlbmNlIG9mIGFuIGF1ZGllbmNlIGluIHRoZSByZWNvcmRpbmcuIEhpZ2hlciBsaXZlbmVzcyB2YWx1ZXMgcmVwcmVzZW50IGFuIGluY3JlYXNlZCBwcm9iYWJpbGl0eSB0aGF0IHRoZSB0cmFjayB3YXMgcGVyZm9ybWVkIGxpdmUuIEEgdmFsdWUgYWJvdmUgMC44IHByb3ZpZGVzIHN0cm9uZyBsaWtlbGlob29kIHRoYXQgdGhlIHRyYWNrIGlzIGxpdmUuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPXtTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmxpdmVuZXNzKjEwMCl9IHN0eWxlPXtzdHlsZXMuc2xpZGVyfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLml0ZW19PlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnByb3BzfT5TcGVlY2hpbmVzczogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnZhbHN9PntTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLnNwZWVjaGluZXNzKS5zdWJzdHJpbmcoMCw1KX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmRlZmluaXRpb259PlxuICAgICAgICAgICAgICBTcGVlY2hpbmVzcyBkZXRlY3RzIHRoZSBwcmVzZW5jZSBvZiBzcG9rZW4gd29yZHMgaW4gYSB0cmFjay4gVGhlIG1vcmUgZXhjbHVzaXZlbHkgc3BlZWNoLWxpa2UgdGhlIHJlY29yZGluZyAoZS5nLiB0YWxrIHNob3csIGF1ZGlvIGJvb2ssIHBvZXRyeSksIHRoZSBjbG9zZXIgdG8gMS4wIHRoZSBhdHRyaWJ1dGUgdmFsdWUuIFZhbHVlcyBhYm92ZSAwLjY2IGRlc2NyaWJlIHRyYWNrcyB0aGF0IGFyZSBwcm9iYWJseSBtYWRlIGVudGlyZWx5IG9mIHNwb2tlbiB3b3Jkcy4gVmFsdWVzIGJldHdlZW4gMC4zMyBhbmQgMC42NiBkZXNjcmliZSB0cmFja3MgdGhhdCBtYXkgY29udGFpbiBib3RoIG11c2ljIGFuZCBzcGVlY2gsIGVpdGhlciBpbiBzZWN0aW9ucyBvciBsYXllcmVkLCBpbmNsdWRpbmcgc3VjaCBjYXNlcyBhcyByYXAgbXVzaWMuIFZhbHVlcyBiZWxvdyAwLjMzIG1vc3QgbGlrZWx5IHJlcHJlc2VudCBtdXNpYyBhbmQgb3RoZXIgbm9uLXNwZWVjaC1saWtlIHRyYWNrcy5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9e1N0cmluZyh0aGlzLnByb3BzLmRhdGEuc3RhdHMuc3BlZWNoaW5lc3MqMTAwKX0gc3R5bGU9e3N0eWxlcy5zbGlkZXJ9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuaXRlbX0+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLnBhcmFncmFwaH0+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMucHJvcHN9PktleTogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnZhbHN9PntTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLmtleSkuc3Vic3RyaW5nKDAsNSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5kZWZpbml0aW9ufT5cbiAgICAgICAgICAgICAgVGhlIGtleSB0aGUgdHJhY2sgaXMgaW4uIEludGVnZXJzIG1hcCB0byBwaXRjaGVzIHVzaW5nIHN0YW5kYXJkIFBpdGNoIENsYXNzIG5vdGF0aW9uLiBFLmcuIDAgPSBDLCAxID0gQ+KZry9E4pmtLCAyID0gRCwgYW5kIHNvIG9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy5wYXJhZ3JhcGh9PlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnByb3BzfT5UZW1wbzogPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnZhbHN9PntTdHJpbmcodGhpcy5wcm9wcy5kYXRhLnN0YXRzLnRlbXBvKS5zdWJzdHJpbmcoMCw1KSsgJyBCUE0nfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuZGVmaW5pdGlvbn0+XG4gICAgICAgICAgICAgIFRoZSBvdmVyYWxsIGVzdGltYXRlZCB0ZW1wbyBvZiBhIHRyYWNrIGluIGJlYXRzIHBlciBtaW51dGUgKEJQTSkuIEluIG11c2ljYWwgdGVybWlub2xvZ3ksIHRlbXBvIGlzIHRoZSBzcGVlZCBvciBwYWNlIG9mIGEgZ2l2ZW4gcGllY2UgYW5kIGRlcml2ZXMgZGlyZWN0bHkgZnJvbSB0aGUgYXZlcmFnZSBiZWF0IGR1cmF0aW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIG5hbWU6IHtcbiAgICBtYXJnaW5Ub3A6ICcwcHgnLFxuICAgIG1hcmdpbkJvdHRvbTogJzJweCdcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBtYXJnaW46ICczcHgnLFxuICAgIGZvbnRTaXplOiAnMThweCcsXG4gICAgd2lkdGg6ICcyMDBweCdcbiAgfSxcbiAgaW1hZ2U6IHtcbiAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgd2lkdGg6ICcyMDBweCdcbiAgfSxcbiAgdG9wOiB7XG4gICAgd2lkdGg6ICc3MDBweCcsXG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmdMZWZ0OiAnMTI1cHgnLFxuICAgIHBhZGRpbmdSaWdodDogJzEyNXB4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIHBhZGRpbmdCb3R0b206ICcyMHB4JyxcbiAgICBib3JkZXJCb3R0b206ICcxcHggYmxhY2sgc29saWQnXG4gIH0sXG4gIGNvbnRhaW5lcjI6IHtcbiAgICB3aWR0aDogJzcwMHB4JyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgZmxleFdyYXA6J3dyYXAnLFxuICAgIG1hcmdpbkJvdHRvbTogJzMwcHgnXG4gIH0sXG4gIHNsaWRlcjoge1xuICAgIHdpZHRoOiAnMzAwcHgnXG4gIH0sXG4gIHByb3BzOiB7XG4gICAgZm9udEZhbWlseTogJ1JhbGV3YXksIGJvbGQsIHNhbnMtc2VyaWYnLFxuICAgIGZvbnRTaXplOiAnMjBweCcsXG4gICAgZm9udFdlaWdodDogJzYwMCcsXG4gICAgbWFyZ2luOiAnMHB4J1xuICB9LFxuICB2YWxzOiB7XG4gICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICBtYXJnaW46ICcwcHgnXG4gIH0sXG4gIGRlZmluaXRpb246IHtcbiAgICBmb250U2l6ZTogJzE0cHgnLFxuICAgIG1hcmdpblRvcDogJzJweCcsXG4gICAgbWFyZ2luQm90dG9tOiAnMnB4J1xuICB9LFxuICBwYXJhZ3JhcGg6IHtcbiAgICBtYXJnaW46ICcycHgnXG4gIH0sXG4gIGl0ZW06IHtcbiAgICB3aWR0aDogJzMwMHB4JyxcbiAgICBwYWRkaW5nTGVmdDogJzI1cHgnLFxuICAgIHBhZGRpbmdSaWdodDogJzI1cHgnLFxuICAgIHBhZGRpbmdUb3A6ICcxMHB4JyxcbiAgICBwYWRkaW5nQm90dG9tOiAnMTBweCdcbiAgfSxcbiAgY29udGFpbmVyMzoge1xuICAgIGRpc3BsYXk6J2ZsZXgnLFxuICAgIGZsZXhXcmFwOiAnd3JhcCdcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgZm9udEZhbWlseTogJ1JhbGV3YXksIHNhbnMtc2VyaWYnLFxuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIGhlaWdodDogJzQwcHgnLFxuICAgIHdpZHRoOiAnMTUwcHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC40KScsXG4gICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICBtYXJnaW46ICc4cHgnLFxuICAgIGJvcmRlcjogJzBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXG4gICAgYm94U2hhZG93OiAnMnB4IDNweCByZ2JhKDAsMCwwLDAuNCknXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5hbHlzaXM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9c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\n//# sourceURL=webpack-internal:///8\n");

/***/ })

})