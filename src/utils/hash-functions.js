export function hash(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let hex = str.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }
  return result;
}

export function dehash(hexStr) {
  let result = "";
  for (let i = 0; i < hexStr.length; i += 4) {
    result += String.fromCharCode(parseInt(hexStr.substr(i, 4), 16));
  }
  return result;
}
