import React from 'react';

const Button = ({
  children,
  ...others
}) => {
  return /*#__PURE__*/React.createElement("button", others, children);
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

const TextField = ({ ...others
}) => {
  return /*#__PURE__*/React.createElement("input", _extends({
    type: "text"
  }, others));
};

export { Button, TextField };
