module.exports = function check(str, bracketsConfig) {
  let diff;
  
  while (str.length != 0) {
      for (brackets of bracketsConfig) {
          let inter = brackets.join('');
          str = str.replace(inter, '');
      }
      if (str === diff) {
          break;
      }
      diff = str;
  }
  return str.length === 0;
}
