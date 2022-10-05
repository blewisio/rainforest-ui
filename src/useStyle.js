import { useLayoutEffect } from 'react';
import decamelize from 'decamelize';

const styles = new Map();

const toCss = (id, style) => {
  const rules = [];

  const declarations = Object.entries(style).map(([prop, val]) => {
    // pseudoselectors
    if (prop.includes('&:')) {
      const result = toCss(prop.replace('&', id), val);
      rules.push(result);
      return '';
    }

    // ex. fontSize -> font-size
    const key = decamelize(prop, { separator: '-' });
    return `${key}:${val}`;
  }).filter(x => !!x).join(';');

  let css = `.${id} { ${declarations}; }`;
  css += rules.join(' ');

  return css;
};

const useStyle = (id, rules) => {
  useLayoutEffect(() => {
    if (styles.get(id)) return;

    const style = document.createElement('style');
    style.innerHTML = toCss(id, rules);
    style.setAttribute('id', `${id}-style`);
    styles.set(id, style);
    document.head.appendChild(style);

    return () => {
      if (style && document.head.contains(style)) {
        document.head.removeChild(style);
        styles.delete(id);
      }
    };
  }, [id, rules]);
}

export { useStyle };
