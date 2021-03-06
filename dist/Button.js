(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.Button = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var Button = function Button(props) {

        var btnClass = "btn btn-" + props.btnClassName;
        return _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
                "button",
                { className: btnClass, disabled: props.disabled },
                props.btnName
            )
        );
    };

    exports.default = Button;
});