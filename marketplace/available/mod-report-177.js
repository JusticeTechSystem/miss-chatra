// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Nxd+XJNoizS/v1NptqK/zTfDN7HN4bwfHLaU+MWbrXHsEOkZ0WHQbN23JNyv16MtfIsBoGe36Yuu5vPDpipti8cNnmVj8L8r0CBCtAfaZqJnFaSi7ucQjdMBaCmWcJ6w0uR/P1PHYW7KFpC3MEqoWKtwjXBOILcPtTrUgnO8/sb631kItKN5N9AxxK9bU2w6q4qoaTLUqVealZyvs2Wb5T9Q5awLIOpq8ydy8KdqMhxFtNGxI9uLxLDCvQSoLvQ3Ke3wn7TPw7u4TDixTHuHEQVZUYbGWM8+KB6jv5kxqmKsH4TYb8+ebLtfWMOMO2B8CqlqRvxcLi+gbEE944a+CBll597TJuoP3Uqkja2lK4qpnpEOl2jUrPcLcNC4aCtFgBF/8JaDspHLUCUWTkEQHdvEkL/G9gAqne+yDeO15KfKPblgwXZ6GXgoYwRf9LnD91k9b2GX2xu1VyHLYzmQ+tMU8L8deBMbCreRDcOVtTbd/3Whx0+pURW5TUoHdSmytNKcSXrEkycVSGFxBX8Ko6frCy5uLcD/ncfoBkAqPyIju0WPMd+nnAsXc+V7oBPFpoMlXsW12OH4lCXvyqnU7slVxYSRARONqS//OS/UEoY3KlF6T+uZIQjekUHb75gf2FW3C77Jft3HO0WA/6xPDbVlqIVDS2h3/4lC0nUE0zFNnajged2PVwgxf3Rrl3gXr7G8hK7JULe1/8g/8LprxYdEh/ZqKU47ZQl20JFWMaCCabxFQrJCHBlo2KTVNxEpX/hraKkX67z3XWBup9j9CoDWfhvwj+viFfIh0k9qpLKwMzeTJgb6MLDzC3cfc2twb2yoHWhBXMY2YMTJTJYqiubHbWY7//JhgX/qSyUU56NGuHpkTF87Dbl1RWykw3YfthtLskmtEZ/OwNGElZuiViB+YcnE0vxNYcSgcKus+31GLJ67mNNf1hpAFmMyY5GybS4O5NJ3IUsmfB3+XhQDBXGpiFJO+GrFeYfehWnALg2VnFWLOL0U1hz2i8h3L/6pUimrkyK2OwR+VT7vF1in8I6lp/mHjwORiwMjg0JPsCWwpnrLKfa6S+9e6QvWnapissSyA7xrjMyNe3HsLLp5FiUv++5PpS4dDfxjjqdzKef7kbwcqRVTZdmTmrV+jhbOOFC5YDWxiNVmPzjEOM19rL7dMajIQEBIXkoNNPH0IQULN8AzcKgBrBCJhzsO3GJsxxLkO9zt/cu5YlMUHZKQG13MxTH+dTzPHKY69lAjtgAHyZOFwwjPtnW20XqYMXtjBNC9fa8+a9C09+B0FtMr8lZ5Xwn3bUsotD/TqHjKmqzbHhe7BHg/sLRx6xQ9RlmaCv7VXD7KzYHQ67N9wbYAb1zA8B3tSuWeiBl8JHLkS02aQPzJz4H+2g==';
  const _INTEGRITY_HASH = 'e51870a8a504d1b5770268b5e8a5d20475c5575034838ecb27e8e0fe5e650dd0';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
