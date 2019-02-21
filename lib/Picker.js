"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _native = _interopRequireDefault(require("styled-components/native"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 32;\n  text-align: center;\n  width: 44;\n  height: 44;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18;\n  height: 24;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 24;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 5;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 300;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  opacity: ", ";\n  padding: 10px;\n  flex: 1;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/* list of emoji's sourced from http://getemoji.com */
var PEOPLE_EMOJIS = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '😇', '☺️', '😊', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😢', '😥', '😭', '😓', '😪', '😴', '🙄', '🤔', '😬', '🤐', '😷', '🤒', '🤕', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👐', '🙌', '👏', '🙏', '👍', '👎', '👊', '✊', '✌️', '🤘', '👌', '👈', '👉', '👆', '👇', '☝️', '✋', '🖐', '🖖', '👋', '💪', '🖕', '✍️', '💅', '🖖', '💄', '💋', '👄', '👅', '👂', '👃', '👣', '👁', '👀', '👗', '👠', '👞', '👟', '👒', '🎩', '🎓', '👑', '⛑', '🎒', '👝', '👛', '👜', '💼', '👓', '🕶', '☂️'];
var ANIMALS_NATURE_EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙊', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🐌', '🐚', '🐞', '🐜', '🕷', '🕸', '🐢', '🐍', '🦂', '🦀', '🐙', '🐠', '🐟', '🐡', '🐬', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐄', '🐫', '🐘', '🐎', '🐖', '🐐', '🐏', '🐑', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇', '🐁', '🐀', '🐿', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🌾', '💐', '🌷', '🌹', '🥀', '🌻', '🌼', '🌸', '🌺', '🌎', '🌍', '🌏', '🌕', '🌖', '🌔', '🌚', '🌝', '🌞', '🌛', '🌜', '🌙', '💫', '⭐️', '🌟', '✨', '⚡️', '🔥', '💥', '☄️', '☀️', '🌤', '⛅️', '🌥', '🌦', '🌈', '☁️', '🌧', '⛈', '🌩', '🌨', '☃️', '⛄️', '❄️', '🌬', '💨', '🌪', '🌫', '🌊', '💧', '💦', '☔️'];
var FOOD_SPORTS_EMOJIS = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🍅', '🍆', '🌽', '🌶', '🍠', '🌰', '🍯', '🍞', '🧀', '🍳', '🍤', '🍗', '🍖', '🍕', '🌭', '🍔', '🍟', '🌮', '🌯', '🍝', '🍜', '🍲', '🍥', '🍣', '🍱', '🍛', '🍚', '🍙', '🍘', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🍼', '☕️', '🍵', '🍶', '🍺', '🍻', '🍷', '🍸', '🍹', '🍾', '🍴', '🍽', '⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🏒', '🏑', '🏏', '⛳️', '🏹', '🎣', '⛸', '🎿', '⛷', '🏂', '🏋', '⛹️', '🏌', '🏄', '🏊', '🚣', '🏇', '🚴', '🚵', '🎬', '🎤', '🎧', '🎼', '🎹', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎳', '🎮', '🏁', '🏆'];
var TRAVEL_PLACES_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🚲', '🏍', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '🚁', '🛩', '✈️', '🛫', '🛬', '🚀', '🛰', '💺', '⛵️', '🛥', '🚤', '🛳', '⛴', '🚢', '⚓️', '🚧', '⛽️', '🚏', '🚦', '🚥', '🗺', '🗿', '🗽', '⛲️', '🗼', '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛱', '🏖', '🏝', '⛰', '🏔', '🗻', '🌋', '🏜', '🏕', '⛺️', '🛤', '🛣', '🏗', '🏭', '🏠', '🏡', '🏘', '🏚', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪️', '🕌', '🕍', '🕋', '⛩', '🗾', '🎑', '🏞', '🌅', '🌄', '🌠', '🎇', '🎆', '🌇', '🌆', '🏙', '🌃', '🌌', '🌉', '🌁', '🎨'];
var OBJECTS_EMOJIS = ['🆓', '📗', '📕', '⌚️', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '🕹', '🗜', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽', '🎞', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙', '🎚', '🎛', '⏱', '⏲', '⏰', '🕰', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯', '🗑', '🛢', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🔧', '🔨', '⚒', '⛏', '⚙️', '💣', '🔪', '🗡', '⚔️', '🛡', '⚰️', '⚱️', '🏺', '🔮', '📿', '💈', '⚗️', '🔭', '🔬', '🕳', '💊', '💉', '🌡', '🚽', '🚰', '🚿', '🛁', '🛀', '🛎', '🔑', '🗝', '🚪', '🛋', '🛏', '🖼', '🛍', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮', '🎐', '✉️', '📪', '📮', '📯', '📜', '📃', '📄', '📑', '📊', '📈', '📉', '🗒', '🗓', '📆', '📅', '📇', '🗃', '🗳', '🗄', '📋', '🗞', '📰', '📘', '📚', '📖', '🔖', '🔗', '📎', '📐', '📏', '📌', '🖊', '🖌', '🖍', '📝', '✏️', '🔍', '🔓'];
var SYMBOLS_FLAGS_EMOJIS = ['❤️', '💛', '💚', '💙', '💜', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '❌', '⭕️', '⛔️', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❕', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🚺', '🚼', '🎵', '🎶', '➕', '➖', '➗', '✖️', '💲', '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙', '🔛', '🔝', '✔️', '☑️', '🔈', '🔇', '🔉', '🔊', '🔔', '🔕', '📣', '📢', '🗨', '💬', '💭', '🗯', '♠️', '♣️', '♥️', '♦️', '🃏', '🎴'];

var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      emojis: PEOPLE_EMOJIS,
      emojiCategory: 'PEOPLE_EMOJIS'
    };
    return _this;
  }

  _createClass(_default, [{
    key: "toggleEmojis",
    value: function toggleEmojis(emoji) {
      switch (emoji) {
        case 'PEOPLE_EMOJIS':
          this.setState({
            emojis: PEOPLE_EMOJIS,
            emojiCategory: 'PEOPLE_EMOJIS'
          });
          break;

        case 'ANIMALS_NATURE_EMOJIS':
          this.setState({
            emojis: ANIMALS_NATURE_EMOJIS,
            emojiCategory: 'ANIMALS_NATURE_EMOJIS'
          });
          break;

        case 'FOOD_SPORTS_EMOJIS':
          this.setState({
            emojis: FOOD_SPORTS_EMOJIS,
            emojiCategory: 'FOOD_SPORTS_EMOJIS'
          });
          break;

        case 'TRAVEL_PLACES_EMOJIS':
          this.setState({
            emojis: TRAVEL_PLACES_EMOJIS,
            emojiCategory: 'TRAVEL_PLACES_EMOJIS'
          });
          break;

        case 'OBJECTS_EMOJIS':
          this.setState({
            emojis: OBJECTS_EMOJIS,
            emojiCategory: 'OBJECTS_EMOJIS'
          });
          break;

        case 'SYMBOLS_FLAGS_EMOJIS':
          this.setState({
            emojis: SYMBOLS_FLAGS_EMOJIS,
            emojiCategory: 'SYMBOLS_FLAGS_EMOJIS'
          });
          break;

        default:
          this.setState({
            emojis: PEOPLE_EMOJIS,
            emojiCategory: 'PEOPLE_EMOJIS'
          });
      }
    }
  }, {
    key: "onEmojiSelect",
    value: function onEmojiSelect(emoji) {
      this.props.onEmojiSelected(emoji);
    }
  }, {
    key: "renderTabs",
    value: function renderTabs() {
      var _this2 = this;

      var emojiCategory = this.state.emojiCategory;
      return _react.default.createElement(TabWrapper, null, _react.default.createElement(_reactNative.TouchableOpacity, {
        selected: emojiCategory === 'PEOPLE_EMOJIS',
        onPress: function onPress() {
          _this2.toggleEmojis('PEOPLE_EMOJIS');
        }
      }, _react.default.createElement(EmojiTitle, null, "\uD83D\uDE00")), _react.default.createElement(_reactNative.TouchableOpacity, {
        selected: emojiCategory === 'ANIMALS_NATURE_EMOJIS',
        onPress: function onPress() {
          _this2.toggleEmojis('ANIMALS_NATURE_EMOJIS');
        }
      }, _react.default.createElement(EmojiTitle, null, "\uD83D\uDC3C")), _react.default.createElement(_reactNative.TouchableOpacity, {
        selected: emojiCategory === 'FOOD_SPORTS_EMOJIS',
        onPress: function onPress() {
          _this2.toggleEmojis('FOOD_SPORTS_EMOJIS');
        }
      }, _react.default.createElement(EmojiTitle, null, "\uD83C\uDF4F")), _react.default.createElement(_reactNative.TouchableOpacity, {
        selected: emojiCategory === 'TRAVEL_PLACES_EMOJIS',
        onPress: function onPress() {
          _this2.toggleEmojis('TRAVEL_PLACES_EMOJIS');
        }
      }, _react.default.createElement(EmojiTitle, null, "\uD83D\uDE98")), _react.default.createElement(_reactNative.TouchableOpacity, {
        selected: emojiCategory === 'OBJECTS_EMOJIS',
        onPress: function onPress() {
          _this2.toggleEmojis('OBJECTS_EMOJIS');
        }
      }, _react.default.createElement(EmojiTitle, null, "\uD83D\uDC8E")), _react.default.createElement(_reactNative.TouchableOpacity, {
        selected: emojiCategory === 'SYMBOLS_FLAGS_EMOJIS',
        onPress: function onPress() {
          _this2.toggleEmojis('SYMBOLS_FLAGS_EMOJIS');
        }
      }, _react.default.createElement(EmojiTitle, null, "\u2764\uFE0F")));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var emojis = this.state.emojis;
      var visible = this.props.visible;
      return _react.default.createElement(_reactNative.View, {
        style: {
          opacity: visible ? 1 : 0,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          padding: '10px'
        }
      }, this.renderTabs(), _react.default.createElement(EmojiWrapper, null, emojis.map(function (emoji, index) {
        return _react.default.createElement(EmojiHighlight, {
          key: index,
          onPress: function onPress() {
            _this3.onEmojiSelect(emoji);
          }
        }, _react.default.createElement(Emoji, {
          key: index
        }, emoji));
      })));
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        onEmojiSelected: _propTypes.default.func.isRequired,
        visible: _propTypes.default.bool
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        visible: true
      };
    }
  }]);

  return _default;
}(_react.default.Component);

exports.default = _default;

var Wrapper = _native.default.View(_templateObject(), function (props) {
  return props.visible ? 1 : 0;
});

var EmojiWrapper = _native.default.View(_templateObject2());

var EmojiHighlight = _native.default.TouchableOpacity(_templateObject3());

var Emoji = _native.default.Text(_templateObject4());

var TabWrapper = _native.default.View(_templateObject5());

var EmojiTitle = _native.default.Text(_templateObject6());