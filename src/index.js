module.exports = function check(str, bracketsConfig) {
  let strConfig = bracketsConfig.map(item => item.join(''));
  
  console.log(str);
  
  for (let i = 0; i < strConfig.length; i++) {
    if (str.includes(strConfig[i])) {
      str = str.replace(strConfig[i], '');
      i = -1;
    }

  }
  
  return str.length === 0 ? true : false;
}
