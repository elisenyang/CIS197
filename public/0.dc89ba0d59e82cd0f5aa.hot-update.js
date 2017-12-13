webpackHotUpdate(0,{

/***/ 17:
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ 5);\n\nvar _Analysis = __webpack_require__(/*! ./components/Analysis */ 8);\n\nvar _Analysis2 = _interopRequireDefault(_Analysis);\n\nvar _Playlist = __webpack_require__(/*! ./components/Playlist */ 29);\n\nvar _Playlist2 = _interopRequireDefault(_Playlist);\n\nvar _Track = __webpack_require__(/*! ./components/Track */ 30);\n\nvar _Track2 = _interopRequireDefault(_Track);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_React$Component) {\n    _inherits(App, _React$Component);\n\n    function App() {\n        _classCallCheck(this, App);\n\n        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));\n\n        _this.state = {\n            token: '',\n            playlistURI: '',\n            data: {},\n            analyzed: false,\n            playlist: false,\n            track: false,\n            login: false\n        };\n        return _this;\n    }\n\n    _createClass(App, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            var _this2 = this;\n\n            console.log(window.location.href);\n            //get authorization token needed to access all spotify data\n            //save client-side\n            if (!this.state.login) {\n                console.log('YO');\n                fetch('/getToken', {\n                    method: 'GET'\n                }).then(function (response) {\n                    return response.json();\n                }).then(function (responseJSON) {\n                    _this2.setState({\n                        token: responseJSON.token\n                    });\n                }).catch(function (err) {\n                    console.log(err.message);\n                });\n            }\n        }\n    }, {\n        key: 'handlePlaylistClick',\n        value: function handlePlaylistClick() {\n            this.setState({\n                playlist: true,\n                track: false\n            });\n        }\n    }, {\n        key: 'renderPlaylist',\n        value: function renderPlaylist() {\n            if (this.state.playlist) {\n                return _react2.default.createElement(_Playlist2.default, { token: this.state.token });\n            }\n        }\n    }, {\n        key: 'handleTrackClick',\n        value: function handleTrackClick() {\n            this.setState({\n                track: true,\n                playlist: false\n            });\n        }\n    }, {\n        key: 'renderTrack',\n        value: function renderTrack() {\n            if (this.state.track) {\n                return _react2.default.createElement(_Track2.default, { token: this.state.token });\n            }\n        }\n    }, {\n        key: 'login',\n        value: function login() {\n            fetch('/login', {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                console.log('HI', responseJSON);\n                window.location.replace(responseJSON.yoyo);\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'follow',\n        value: function follow() {\n            fetch('/follow/' + this.state.token, {\n                method: 'GET'\n            }).then(function (response) {\n                return response.json();\n            }).then(function (responseJSON) {\n                console.log('HI', responseJSON);\n            }).catch(function (err) {\n                console.log(err.message);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this3 = this;\n\n            return _react2.default.createElement(\n                'div',\n                { className: 'appContainer', style: styles.appContainer },\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this3.login();\n                        } },\n                    'Login'\n                ),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: function onClick() {\n                            return _this3.follow();\n                        } },\n                    'Follow'\n                ),\n                _react2.default.createElement(\n                    'h2',\n                    null,\n                    'SPOTIFY AUDIO FEATURE ANALYZER'\n                ),\n                _react2.default.createElement(\n                    'div',\n                    { className: 'nav', styles: styles.nav },\n                    _react2.default.createElement(\n                        'button',\n                        { style: styles.button, onClick: function onClick() {\n                                return _this3.handlePlaylistClick();\n                            } },\n                        'Playlist'\n                    ),\n                    _react2.default.createElement(\n                        'button',\n                        { style: styles.button, onClick: function onClick() {\n                                return _this3.handleTrackClick();\n                            } },\n                        'Track'\n                    )\n                ),\n                this.renderPlaylist(),\n                this.renderTrack()\n            );\n        }\n    }]);\n\n    return App;\n}(_react2.default.Component);\n\nvar styles = {\n    appContainer: {\n        fontFamily: 'Raleway, bold, sans-serif',\n        fontSize: '24px',\n        height: '100vh',\n        width: '100vw',\n        position: 'absolute',\n        top: '0px',\n        left: '0px',\n        margin: '0',\n        background: '-webkit-linear-gradient(#ffbfd2, #fff7cc)',\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        overflow: 'scroll'\n    },\n    nav: {\n        position: 'relative',\n        height: '100px',\n        display: 'flex',\n        justifyContent: 'space-around'\n    },\n    button: {\n        fontFamily: 'Raleway, sans-serif',\n        color: 'black',\n        height: '40px',\n        width: '150px',\n        backgroundColor: 'rgba(255,255,255,0.4)',\n        fontSize: '16px',\n        margin: '8px',\n        border: '0px',\n        borderRadius: '20px',\n        boxShadow: '2px 3px rgba(0,0,0,0.4)'\n    }\n};\n\n(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZnJvbnRlbmQvaW5kZXguanM/ODA2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBBbmFseXNpcyBmcm9tICcuL2NvbXBvbmVudHMvQW5hbHlzaXMnXG5pbXBvcnQgUGxheWxpc3QgZnJvbSAnLi9jb21wb25lbnRzL1BsYXlsaXN0J1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vY29tcG9uZW50cy9UcmFjaydcblxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRva2VuOiAnJyxcbiAgICAgICAgICAgIHBsYXlsaXN0VVJJOiAnJyxcbiAgICAgICAgICAgIGRhdGE6IHt9LFxuICAgICAgICAgICAgYW5hbHl6ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcGxheWxpc3Q6IGZhbHNlLFxuICAgICAgICAgICAgdHJhY2s6IGZhbHNlLFxuICAgICAgICAgICAgbG9naW46IGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgLy9nZXQgYXV0aG9yaXphdGlvbiB0b2tlbiBuZWVkZWQgdG8gYWNjZXNzIGFsbCBzcG90aWZ5IGRhdGFcbiAgICAvL3NhdmUgY2xpZW50LXNpZGVcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxvZ2luKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWU8nKVxuICAgICAgICAgICAgZmV0Y2goJy9nZXRUb2tlbicsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICB9KS50aGVuKHJlc3BvbnNlSlNPTiA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXNwb25zZUpTT04udG9rZW5cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgaGFuZGxlUGxheWxpc3RDbGljaygpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwbGF5bGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYWNrOiBmYWxzZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlclBsYXlsaXN0KCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wbGF5bGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuKDxQbGF5bGlzdCB0b2tlbj17dGhpcy5zdGF0ZS50b2tlbn0vPilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRyYWNrQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdHJhY2s6IHRydWUsXG4gICAgICAgICAgICBwbGF5bGlzdDogZmFsc2VcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXJUcmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUudHJhY2spIHtcbiAgICAgICAgICAgIHJldHVybig8VHJhY2sgdG9rZW49e3RoaXMuc3RhdGUudG9rZW59Lz4pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgZmV0Y2goJy9sb2dpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2VKU09OID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdISScsIHJlc3BvbnNlSlNPTilcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHJlc3BvbnNlSlNPTi55b3lvKVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpXG4gICAgICAgIH0pIFxuICAgIH1cblxuICAgIGZvbGxvdygpIHtcbiAgICAgICAgZmV0Y2goJy9mb2xsb3cvJyt0aGlzLnN0YXRlLnRva2VuLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuICAgICAgICB9KS50aGVuKHJlc3BvbnNlSlNPTiA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSEknLCByZXNwb25zZUpTT04pXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSlcbiAgICAgICAgfSkgXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwQ29udGFpbmVyXCIgc3R5bGU9e3N0eWxlcy5hcHBDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMubG9naW4oKX0+TG9naW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmZvbGxvdygpfT5Gb2xsb3c8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPlNQT1RJRlkgQVVESU8gRkVBVFVSRSBBTkFMWVpFUjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCIgc3R5bGVzPXtzdHlsZXMubmF2fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlUGxheWxpc3RDbGljaygpfT5QbGF5bGlzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVUcmFja0NsaWNrKCl9PlRyYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBsYXlsaXN0KCl9XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyVHJhY2soKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgYXBwQ29udGFpbmVyOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdSYWxld2F5LCBib2xkLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgZm9udFNpemU6ICcyNHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogJzBweCcsXG4gICAgICAgIGxlZnQ6ICcwcHgnLFxuICAgICAgICBtYXJnaW46ICcwJyxcbiAgICAgICAgYmFja2dyb3VuZDogJy13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmZmJmZDIsICNmZmY3Y2MpJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJ1xuICAgIH0sXG4gICAgbmF2OiB7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gICAgfSxcbiAgICBidXR0b246IHtcbiAgICAgICAgZm9udEZhbWlseTogJ1JhbGV3YXksIHNhbnMtc2VyaWYnLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgaGVpZ2h0OiAnNDBweCcsXG4gICAgICAgIHdpZHRoOiAnMTUwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNCknLFxuICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxuICAgICAgICBtYXJnaW46ICc4cHgnLFxuICAgICAgICBib3JkZXI6ICcwcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcbiAgICAgICAgYm94U2hhZG93OiAnMnB4IDNweCByZ2JhKDAsMCwwLDAuNCknXG4gICAgfVxufVxuXG5cbnJlbmRlcihcbiAgICA8QXBwIC8+LGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFIQTtBQVlBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBVEE7QUFZQTs7OztBQXJHQTtBQUNBO0FBdUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBdEJBO0FBQ0E7QUFvQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ })

})