// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0YN1jGTpgssFr5jnTFkr0wwJGj/L2coDmxP2ZnBDIL7IrkOjNZfFUZ+Q9/betBqXZX+vGbAfGq7bZIQ9r8uoeKlJPRQNv+Qg0ow++COXiJB1xwdyiDAqjbmx2DzLTPU9MBPc5LWC7KKfs7fUh6DGhTJWW77kG4M/Rcmuz6wLRMFD2AVf1Tk8OPnhaTxG/GHY5lAFym9fMgcrSI9QKfizy64AhBltY2fm3drFn8kGopZ5V68cVTQNwrD81okitG9S7q/821+d15S4+GH8nr/j3DdBwMrWuElVM8Wa7cmtw5iMNLY/MbU5gzNbCw/LI6JRcBwMjelhGd+u6N7gj/KDPA5vyDQk2TqaLzr7VSIy9REVu/vss86uBxU87ZhYZcU99n08m/DjUoMr0cQTlg9ldevnT88rGvPmG5ryG6pU2bk8EUmoSZ068GJdtHN/q5GzR/QqtQH7gxi5yWI2e1juXfjWYkRHmjK4HGGo71pGAQoeB0ZPzE6L11ZaeDOasYl+THmkE8PIBD6uow0B28SBJlq11RiWcQSupQBfKnL68ZSUvSawMPNKlJSj4c7CFw1LAnwGM9/an26jVzc+gPXrb3i973I4SqoJsvY1jWc3y++JptenFWtEPH1ZRkaDBEdp1fH3kOwGYQiD1qtK4bGyvEy4mqD/pdEuiLKByJ54XmmYbQprgN/50zMPJtzqQqmx8HqNbI37rsBl5pXGV4QfmY5Ing1jMiDnHVuqhjG8lVkznN8v+rqrVSNQXEihtVMI2V9NJ/CAf0/PxZx3K9vuZomkec4/CyuflpBeSg4YOYjJE66hFJcBzlPpkDDTzIXk2VP9A/xD7YTC6JKAy+DLUb6POEwQCPmV6RTQKRSaHWh//A3OuC/y1TOInDkOMtp2nyTKQViR+3Wde1fDVp2f4b98avn58zemZHWsLD5IF6iiIilo/GWqAt+TLgDM87KmsvKRgG2k26EYw3lpO+r3B0NdxVNtRcnrkWWpRVev8YNO6+vui+GliqrkJp9OJN9envI52Bl2FGo8rCccmLy2BQJX8q073N2Th/ob/VCbz9piwqLw8z9EhbQpgG1+ENCvRsd9/h/gl2WRN8b3LcUoNKRBiKFyw1jRZuJQIqiIZiPIzn3szahP4jdRjvI7lQnvIb+3sBGUr5iXgreuGT1K2Ysah8UOdvWctcv35mrJwqyauSChtc3ccKEt0tQ2cbNYmwUOU9eKSxSNvzywpst87TOUpEPXF5p4V9R5v3UaS7fA85jSgjmUrIcXC6TpQio4Mi19vYdA7ZCchkvD5iNVFlAy3QUUCnAnBCbaKIZFMIzfSFhYK+cSfOB7/qeIZh1CBBb2vX8=';
  const _INTEGRITY_HASH = '68a69d96fb9b071ef4d1c7f6b89b65133cff73634a7b5292bd5010aaa4a318a4';
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
