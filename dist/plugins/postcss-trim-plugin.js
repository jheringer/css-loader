"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var postcss = _interopRequireWildcard(require("postcss"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var _default = postcss.plugin('postcss-trim-plugin', () => css => {
  css.walk(({
    type,
    raws
  }) => {
    if (type === 'rule' || type === 'atrule') {
      if (raws.before) raws.before = '\n';
      if (raws.after) raws.after = '\n';
    }
  });
});

exports.default = _default;