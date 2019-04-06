"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.define-property");

require("core-js/modules/es6.object.create");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.function.bind");

var _react = _interopRequireWildcard(require("react"));

var _components = require("@storybook/components");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var iframeId = 'storybook-preview-iframe';

var ViewportTool =
/*#__PURE__*/
function (_Component) {
  _inherits(ViewportTool, _Component);

  function ViewportTool(props) {
    var _this;

    _classCallCheck(this, ViewportTool);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ViewportTool).call(this, props));
    _this.debug_el = null;
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }
  /*
  componentDidMount() {
    const iframe = window.document.getElementById(iframeId)
    const iframeDoc = iframe.contentDocument;
    const root = iframeDoc.getElementById('root')
    root.style.padding = "3rem";
    root.style.display = "flex";
  }
  */


  _createClass(ViewportTool, [{
    key: "toggle",
    value: function toggle() {
      var iframe = window.document.getElementById(iframeId);
      var iframeDoc = iframe.contentDocument;

      if (this.debug_el) {
        iframeDoc.body.removeChild(this.debug_el);
        this.debug_el = null;
        return;
      }

      this.debug_el = iframeDoc.createElement("style");
      var text_node = window.document.createTextNode("#root *:not(path):not(g):not(.debug-exlude) { color: hsla(210, 100%, 100%, 0.9) !important; background: hsla(210, 100%,  50%, 0.5) !important; outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important; box-shadow: none !important; filter: none !important; }");
      this.debug_el.append(text_node);
      iframeDoc.body.appendChild(this.debug_el);
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_components.IconButton, {
        key: "cssdebug",
        title: "Change the size of the preview",
        onClick: this.toggle
      }, _react["default"].createElement(_components.Icons, {
        icon: "wrench"
      })));
    }
  }]);

  return ViewportTool;
}(_react.Component);

exports["default"] = ViewportTool;