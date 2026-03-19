// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'HHMTSudrWZg3U6LIzHGqrhLdt42/m8wXEuSRYleSxEjtGWa0/JCEM1MGZabJGGrltUfKUUp4LcBBBTMRZOu8xwzmtZdh6kcNh/2AKfskmJnT+y1VyYCKxOELRfF92VkMBm6OFfIcOaVMqIEnO2VDo015SziABzpJYLTx2NI3nGjMo8PwaMelL+H5adSD42szPTJ80M/6oLf9AVImRvVFlS0E2fk6TwD5N1yXpOO8CvL+SR+kDQ5WFowpI16KTE2Z7Hb0wWlRQgX+XQm1IrMuZxgYmB42tazSOSB/PIsomqrLVztSnmYBgpe9+EwZ46d3jXnPq5xM+XBKGhwYy+lmNtPvQfr8pXTp3dhCogtj7ja9sLS0UzLfQ0wDvEmpZcAqhd6ukmpcaqIZy0H+dDQv5BwpP4pDZTgUW/jIsJqlTJctLJJci0Jm6dzxeely6ukxGcgx+B6qx0AGyAt7N2xQvUbKXLManGH/XXBVTl6zmvGy5wkPKPyB2PACo0vs6az03Jj7ZOeyzSmnY2qMBAkxE1kOQ6pTi3BG/L5ZLKom4Vge+o+22Iuz860DLQQp1mIKcxzMFxNMOZE+mIcq5cIWwB5GTbWnMxu00kdxcaAHyhh0MAqrQmV+CXt6y7qaJKY4v59AKOhMK/wTXgOhSWrQq2Pzu4nRhBUauraHBXN9VGthKQcRz3GGnKucLbnlULbWnZEteTTKR1aUTJrGnyeZ80yQH7c1qTD4rej+60TlImyjf59/qBOZyEaiUHzsItR7u4dTx9WWJuGDJGOuyLjMP4klowjCBtFz4t7IivpnqB4vH/96n6ecUvGQQvG4popYlR4A4plNyMrIEPLon/Owx8gUmdbsztcyG0ap1j06cnG9ZVpKrOtxjE5IIlQwR74gbHWs1evx0kQqfZsymwZDJ5OFlNO5sSb5gI3isDGy6i7Mn63v1hgbsSYr++8W3+uOgFx8ccqXcDXklau0uw6ywwz+kNBL3qIOnHptr+UeTSqpk2E=';
  const _INTEGRITY_HASH = '163c20b36bef4a1ddb9ba68147f2bf00738bb4b2ffbd1d09ee6c8f9d6997703e';
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
