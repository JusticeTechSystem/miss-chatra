// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+dWI8W/TyrqjXHfxMPmFVluRpOfeiLiA8JCMwVbFtVHTWHnjuHHTLLKKd+zp4IlKQjBwGqV6ySjNzpNI5aAiywZ5meJNQkeItnzfFGTu4BdEpMnXKi+6lMMlVTspEns6bhA73vm8CxZ2AF19cQifOQQRIgczNiUjUvnJjagwo8c6jiIAzbyzje7oFwZP876jK2o7aryIxsHp8JAw5dVYB+Hks1UFYkOgj+K5oCBIELztVrQ0Fn9Ygh+sH0mCxujBPJmRygt3OxJUYNDaDzK4RFHByPo8mPZa4w6Bw91TrBoeiUOI5h8lzAs0pqC5nX1e+PYF7AJUqV90mnGsFn6+nFrqd8Zj4C9X87152IrA4+KDWUUj5iLW/PzoY8D9VOS6USjDStFALICMhkN8D6mva4uRGNi54aqXtbpGondkrj716dE39h32pmxF/SQ3Omv3ukDZAeRFSW2F8ZDiSNa8c2ctBRtfbPLu+uAn8idZwx+AVDCODMBpcs6TglQcjUPnRrrjBthnGRk6rgVXRJbRFnXXX0YiToKUVrKMYSk8a7la1s/N9pVt1R4H94nTTalnXxdzZdrGFVhHZZXfXhd+k7gL8JBZbCwkE8pexseOMAGfGwc37IrIYqoOm25qRUaXaFOxja/JGensX8SDUhvFVboCeG9zxuL9p4ZgdSLW2eBoP2xzx5RNUJV7oTO5tMIqO6DTDe+KEm3YiyulphkrYh3u/JA=';
  const _INTEGRITY_HASH = '77d382378fd60ba28a333a621da4f1b65d32919b547e875bcf44ed2094762013';
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
