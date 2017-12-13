webpackHotUpdate(0,{

/***/ 17:
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nvar _Analysis = __webpack_require__(/*! ./components/Analysis */ 8);\n\nvar _Analysis2 = _interopRequireDefault(_Analysis);\n\nvar _Playlist = __webpack_require__(/*! ./components/Playlist */ 29);\n\nvar _Playlist2 = _interopRequireDefault(_Playlist);\n\nvar _Track = __webpack_require__(/*! ./components/Track */ 30);\n\nvar _Track2 = _interopRequireDefault(_Track);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.state = {\n            token: '',\n            playlistURI: '',\n            data: {},\n            analyzed: false,\n            playlist: false,\n            track: false\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            //get authorization token needed to access all spotify data\n            //save client-side\n            fetch('/getToken', {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                console.log('HI', responseJSON);\n                _this2.setState({\n                    token: responseJSON.token\n                });\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'handlePlaylistClick',\n        value: function handlePlaylistClick() {\n            this.setState({\n                playlist: true,\n                track: false\n            });\n        }\n    }, {\n        key: 'renderPlaylist',\n        value: function renderPlaylist() {\n            if (this.state.playlist) {\n                return _react2.default.createElement(_Playlist2.default, { token: this.state.token });\n            }\n        }\n    }, {\n        key: 'handleTrackClick',\n        value: function handleTrackClick() {\n            this.setState({\n                track: true,\n                playlist: false\n            });\n        }\n    }, {\n        key: 'renderTrack',\n        value: function renderTrack() {\n            if (this.state.track) {\n                return _react2.default.createElement(_Track2.default, { token: this.state.token });\n            }\n        }\n    }, {\n        key: 'login',\n        value: function login() {\n            fetch('https://accounts.spotify.com/authorize/?client_id=96de3a2f3f9942559f761dd24db75f9f&response_type=code&redirect_uri=https%3A%2F%2Flocalhost%3A3000%2F&scope=user-read-private%20user-read-email&state=34fFs29kd09', {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                console.log('HI', responseJSON);\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'appContainer', style: styles.appContainer },\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this3.login();\n                        } },\n                    'Login'\n                ),\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'SPOTIFY AUDIO FEATURE ANALYZER'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'nav', styles: styles.nav },\n                    _react2.default.createElement(\n                        'button',\n                        { style: styles.button, onClick: function onClick() {\n                                return _this3.handlePlaylistClick();\n                            } },\n                        'Playlist'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { style: styles.button, onClick: function onClick() {\n                                return _this3.handleTrackClick();\n                            } },\n                        'Track'\n                    )\n                ),\n                this.renderPlaylist(),\n                this.renderTrack()\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\nvar styles = {\n    appContainer: {\n        fontFamily: 'Raleway, bold, sans-serif',\n        fontSize: '24px',\n        height: '100vh',\n        width: '100vw',\n        position: 'absolute',\n        top: '0px',\n        left: '0px',\n        margin: '0',\n        background: '-webkit-linear-gradient(#ffbfd2, #fff7cc)',\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        overflow: 'scroll'\n    },\n    nav: {\n        position: 'relative',\n        height: '100px',\n        display: 'flex',\n        justifyContent: 'space-around'\n    },\n    button: {\n        fontFamily: 'Raleway, sans-serif',\n        color: 'black',\n        height: '40px',\n        width: '150px',\n        backgroundColor: 'rgba(255,255,255,0.4)',\n        fontSize: '16px',\n        margin: '8px',\n        border: '0px',\n        borderRadius: '20px',\n        boxShadow: '2px 3px rgba(0,0,0,0.4)'\n    }\n};\n\n(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvaW5kZXguanM/ODA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBbmFseXNpcyBmcm9tICcuL2NvbXBvbmVudHMvQW5hbHlzaXMnXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9jb21wb25lbnRzL1BsYXlsaXN0J1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy9UcmFjaydcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRva2VuOiAnJyxcbiAgICAgICAgICAgIHBsYXlsaXN0VVJJOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgYW5hbHl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGxheWxpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgdHJhY2s6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvL2dldCBhdXRob3JpemF0aW9uIHRva2VuIG5lZWRlZCB0byBhY2Nlc3MgYWxsIHNwb3RpZnkgZGF0YVxuICAgIC8vc2F2ZSBjbGllbnQtc2lkZVxuICAgICAgICBmZXRjaCgnL2dldFRva2VuJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSkudGhlbihyZXNwb25zZUpTT04gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hJJywgcmVzcG9uc2VKU09OKVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9rZW46IHJlc3BvbnNlSlNPTi50b2tlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVBsYXlsaXN0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcGxheWxpc3Q6IHRydWUsXG4gICAgICAgICAgICB0cmFjazogZmFsc2VcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJQbGF5bGlzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGxheWxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybig8UGxheWxpc3QgdG9rZW49e3RoaXMuc3RhdGUudG9rZW59Lz4pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUcmFja0NsaWNrKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRyYWNrOiB0cnVlLFxuICAgICAgICAgICAgcGxheWxpc3Q6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyVHJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXRlLnRyYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4oPFRyYWNrIHRva2VuPXt0aGlzLnN0YXRlLnRva2VufS8+KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW4oKSB7XG4gICAgICAgIGZldGNoKCdodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2F1dGhvcml6ZS8/Y2xpZW50X2lkPTk2ZGUzYTJmM2Y5OTQyNTU5Zjc2MWRkMjRkYjc1ZjlmJnJlc3BvbnNlX3R5cGU9Y29kZSZyZWRpcmVjdF91cmk9aHR0cHMlM0ElMkYlMkZsb2NhbGhvc3QlM0EzMDAwJTJGJnNjb3BlPXVzZXItcmVhZC1wcml2YXRlJTIwdXNlci1yZWFkLWVtYWlsJnN0YXRlPTM0ZkZzMjlrZDA5Jywge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcbiAgICAgICAgfSkudGhlbihyZXNwb25zZUpTT04gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hJJywgcmVzcG9uc2VKU09OKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pIFxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcENvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXMuYXBwQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmxvZ2luKCl9PkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5TUE9USUZZIEFVRElPIEZFQVRVUkUgQU5BTFlaRVI8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiIHN0eWxlcz17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHN0eWxlPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZVBsYXlsaXN0Q2xpY2soKX0+UGxheWxpc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlVHJhY2tDbGljaygpfT5UcmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQbGF5bGlzdCgpfVxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclRyYWNrKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGFwcENvbnRhaW5lcjoge1xuICAgICAgICBmb250RmFtaWx5OiAnUmFsZXdheSwgYm9sZCwgc2Fucy1zZXJpZicsXG4gICAgICAgIGZvbnRTaXplOiAnMjRweCcsXG4gICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6ICcwcHgnLFxuICAgICAgICBsZWZ0OiAnMHB4JyxcbiAgICAgICAgbWFyZ2luOiAnMCcsXG4gICAgICAgIGJhY2tncm91bmQ6ICctd2Via2l0LWxpbmVhci1ncmFkaWVudCgjZmZiZmQyLCAjZmZmN2NjKScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBvdmVyZmxvdzogJ3Njcm9sbCdcbiAgICB9LFxuICAgIG5hdjoge1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ1xuICAgIH0sXG4gICAgYnV0dG9uOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5LCBzYW5zLXNlcmlmJyxcbiAgICAgICAgY29sb3I6ICdibGFjaycsXG4gICAgICAgIGhlaWdodDogJzQwcHgnLFxuICAgICAgICB3aWR0aDogJzE1MHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQpJyxcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICAgICAgbWFyZ2luOiAnOHB4JyxcbiAgICAgICAgYm9yZGVyOiAnMHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsXG4gICAgICAgIGJveFNoYWRvdzogJzJweCAzcHggcmdiYSgwLDAsMCwwLjQpJ1xuICAgIH1cbn1cblxuXG5yZW5kZXIoXG4gICAgPEFwcCAvPixkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUVBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUhBO0FBV0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQVJBO0FBV0E7Ozs7QUFuRkE7QUFDQTtBQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQXRCQTtBQUNBO0FBb0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ })

})