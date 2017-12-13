webpackHotUpdate(0,{

/***/ 17:
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 7);\n\nvar _Analysis = __webpack_require__(/*! ./components/Analysis */ 15);\n\nvar _Analysis2 = _interopRequireDefault(_Analysis);\n\nvar _Playlist = __webpack_require__(/*! ./components/Playlist */ 29);\n\nvar _Playlist2 = _interopRequireDefault(_Playlist);\n\nvar _Track = __webpack_require__(/*! ./components/Track */ 30);\n\nvar _Track2 = _interopRequireDefault(_Track);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.state = {\n            token: '',\n            playlistURI: '',\n            data: {},\n            analyzed: false,\n            playlist: false,\n            track: false\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            //get authorization token needed to access all spotify data\n            //save client-side\n            fetch('/getToken', {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                console.log('HI', responseJSON);\n                _this2.setState({\n                    token: responseJSON.token\n                });\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'handlePlaylistClick',\n        value: function handlePlaylistClick() {\n            this.setState({\n                playlist: true,\n                track: false\n            });\n        }\n    }, {\n        key: 'renderPlaylist',\n        value: function renderPlaylist() {\n            if (this.state.playlist) {\n                return _react2.default.createElement(_Playlist2.default, { token: this.state.token });\n            }\n        }\n    }, {\n        key: 'handleTrackClick',\n        value: function handleTrackClick() {\n            this.setState({\n                track: true,\n                playlist: false\n            });\n        }\n    }, {\n        key: 'renderTrack',\n        value: function renderTrack() {\n            if (this.state.track) {\n                return _react2.default.createElement(_Track2.default, { token: this.state.token });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'appContainer', style: styles.appContainer },\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'Spotify Audio Feature Analyzer'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'nav', styles: styles.nav },\n                    _react2.default.createElement(\n                        'button',\n                        { style: styles.button, onClick: function onClick() {\n                                return _this3.handlePlaylistClick();\n                            } },\n                        'Playlist'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { style: styles.button, onClick: function onClick() {\n                                return _this3.handleTrackClick();\n                            } },\n                        'Track'\n                    )\n                ),\n                this.renderPlaylist(),\n                this.renderTrack()\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\nvar styles = {\n    appContainer: {\n        height: '100vh',\n        width: '100vw',\n        position: 'absolute',\n        top: '0px',\n        left: '0px',\n        margin: '0',\n        background: '-webkit-linear-gradient(#ffbfd2, #fff7cc)',\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center'\n    },\n    nav: {\n        position: 'relative',\n        height: '100px',\n        display: 'flex',\n        justifyContent: 'space-around'\n    },\n    button: {\n        color: 'black',\n        height: '40px',\n        backgroundColor: 'rgba(255,255,255,0.4)',\n        fontSize: '20px',\n        margin: '8px',\n        border: '0px'\n    }\n};\n\n(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvaW5kZXguanM/ODA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBbmFseXNpcyBmcm9tICcuL2NvbXBvbmVudHMvQW5hbHlzaXMnXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9jb21wb25lbnRzL1BsYXlsaXN0J1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy9UcmFjaydcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRva2VuOiAnJyxcbiAgICAgICAgICAgIHBsYXlsaXN0VVJJOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgYW5hbHl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGxheWxpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgdHJhY2s6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL2dldCBhdXRob3JpemF0aW9uIHRva2VuIG5lZWRlZCB0byBhY2Nlc3MgYWxsIHNwb3RpZnkgZGF0YVxuICAgIC8vc2F2ZSBjbGllbnQtc2lkZVxuICAgICAgICBmZXRjaCgnL2dldFRva2VuJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSkudGhlbihyZXNwb25zZUpTT04gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hJJywgcmVzcG9uc2VKU09OKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9rZW46IHJlc3BvbnNlSlNPTi50b2tlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVBsYXlsaXN0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGxheWxpc3Q6IHRydWUsXG4gICAgICAgICAgICB0cmFjazogZmFsc2VcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJQbGF5bGlzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGxheWxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybig8UGxheWxpc3QgdG9rZW49e3RoaXMuc3RhdGUudG9rZW59Lz4pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUcmFja0NsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRyYWNrOiB0cnVlLFxuICAgICAgICAgICAgcGxheWxpc3Q6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyVHJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRyYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4oPFRyYWNrIHRva2VuPXt0aGlzLnN0YXRlLnRva2VufS8+KVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwQ29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5hcHBDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8aDI+U3BvdGlmeSBBdWRpbyBGZWF0dXJlIEFuYWx5emVyPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIiBzdHlsZXM9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVQbGF5bGlzdENsaWNrKCl9PlBsYXlsaXN0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVRyYWNrQ2xpY2soKX0+VHJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyUGxheWxpc3QoKX1cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJUcmFjaygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBhcHBDb250YWluZXI6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzBweCcsXG4gICAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgICBtYXJnaW46ICcwJyxcbiAgICAgICAgYmFja2dyb3VuZDogJy13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmZmJmZDIsICNmZmY3Y2MpJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIG5hdjoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxuICAgICAgICBoZWlnaHQ6ICc0MHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcbiAgICAgICAgbWFyZ2luOiAnOHB4JyxcbiAgICAgICAgYm9yZGVyOiAnMHB4J1xuICAgIH1cbn1cblxuXG5yZW5kZXIoXG4gICAgPEFwcCAvPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBV0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFQQTtBQVVBOzs7O0FBdEVBO0FBQ0E7QUF3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBbkJBO0FBQ0E7QUE2QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ })

})