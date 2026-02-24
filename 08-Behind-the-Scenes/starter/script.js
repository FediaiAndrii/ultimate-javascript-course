'use strict';
const encode = function (plaintext) {
  let result = '';
  for (let i = 0; i < plaintext.length; i++) {
    let code = plaintext[i].toLowerCase().charCodeAt(0);
    if (code >= 97 && code <= 122) {
      let index = code - 97;
      if (index % 2 !== 1) {
        result += 0;
      } else {
        result += 1;
      }
    } else {
      result += plaintext[i];
    }
  }
  return result;
};
