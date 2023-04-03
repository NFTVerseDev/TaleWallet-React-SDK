"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useAll2 = _interopRequireDefault(require("./useAll"));
var _mail = _interopRequireDefault(require("./images/mail.svg"));
var _talewallet = _interopRequireDefault(require("./images/talewallet.png"));
require("./talewallet.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var LoginUi = function LoginUi() {
  var _useAll = (0, _useAll2["default"])(),
    sendOTP = _useAll.sendOTP;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-10 w-60 mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "imgcontainer"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _talewallet["default"],
    alt: "Avatar",
    className: "avatar"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-bold text-2xl text-tale"
  }, "Welcome to ", process.env.REACT_APP_WALLET_NAME), /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-semibold text-lg"
  }, "Veirfy your email address")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-20 items-start",
    id: "email_address_input"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex shadow-1 w-full  email-input-container"
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("img", {
    src: _mail["default"],
    className: ""
  })), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    className: "border-none outline-none",
    placeholder: "Enter your email",
    name: "uname",
    id: "otp_email_address",
    required: true
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    id: "sb_rb_error"
  }), /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn primary-btn",
    type: "submit",
    id: "sbt_email_otp_btn",
    onClick: function onClick() {
      return sendOTP(document.getElementById("otp_email_address").value);
    }
  }, "Continue")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center w-full"
  }, "You will get an OTP on this email")));
};
var _default = LoginUi;
exports["default"] = _default;