import * as postcss from 'postcss';

export default postcss.plugin('postcss-trim-plugin', () => (css) => {
  css.walk(({ type, raws }) => {
    if (type === 'rule' || type === 'atrule') {
      if (raws.before) raws.before = '\n';
      if (raws.after) raws.after = '\n';
    }
  });
});
