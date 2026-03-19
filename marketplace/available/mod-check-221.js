// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'c61C6WU7vDkD63aklsZfMgIYCXqquU/CI9b02apjNBPq76HVMWee1SYTJjyWnNHQvRZHie/vWEsqqScSw8URqwg91bb2n0fsor6xFN/QNvNRbewujFBUNRrxBiVZJseCT2eTxw7JR/49zQnAwpeGvZdwNSNfSENJalmybzvWB6LWwi8V5vQtPGg7cdjKQ2zqitpu9BByXGiAixir/FX82zGXYBtDRwALoFmLWFGJdo9LAj7P0MbUirOCkyUAiT+ULpugW41EPUC3J9Ey+zzzrUZHWZSYzw0eTo6T6c0AdaP3QJxQADxQr+H0SOmNg22mmUILEwQBKKZ6Ve7s+lNPc0oVI0/3eyKSJcn4rfcXVpaiJ59MAY7y1KX0+BeV/BZR3atjAV7Vj0u96jYXEebgCGJ93d0F9XBCv2htpK36/n9lYovpReyyo24lBlYs4pCHGzfJjNdjsEm1y+AyySCbBg1/SF1m3S/lPmIB6gQNQnJp/lFXaZA5vL+lcz5De/tGObF14MXJWGVV3PJ20kDiVE+wV3tja1H8VHhAj+mzSzYfqXYidqPPJCbSivnR0+4TTva73bhf88ziz51AjKhbxyiLuabrnzr716EJmIA70vvFw5CGVWEwQ556i9e7PqZKmts4ydWBXYl5jZQvg5FwrDZbmw/xfZOne25RzBL1PiYJKsmn8XkMSPWFQ9izIa2mihXbKsvGP6ISZdQqdGyamW1gtGG4ZzLGgBdO+G5Bav3nD6JQw7TTLpvUPgB2dngYIPB/5cLgRsJVDN4JdreoJmsIof8ZnLC03aT7BcYkZnmImlZ2JO6Gco6KcZxBD73hMNSpcd6n8ya9Zmr/pL5W7c11joi4e84FvC6naVduP+ij5RhedEKxLNbdN/KANnzqbi6rICf9nDh/T4BWKkZ3to5QFg4DbNprLQ6axyaDNls3Ltq35l56o1KDF/9Dt+AfA+fxWp8ugCZsTcU/gRIhf9ynrI+/hx4MRZRSTCUnvkPmoXuYpyQJat78LMtNy579NZnQmFpiC7U/rSpp8U2/fhYQ3pyCSU0yMBsGsVLRYg9M98/fg8jUn0YCxkiuAOWYtzeEKifIdDs/9YrQRv1HTiCZn5iK/797t1U8QXK8JcC+fUq9pcHdESgmiGzojxZI+wfMdHVELRG+/ORnF5eVrAlSunEzQOgsR2qwQzku7xkzdGTvt0B9wtUrvCeHrPBfCvaf8XJVNc/tNiU2m7mIQbjeBqI3n04sidSB73T758bqVd7M804KF6o3JaX4f2HFkG0u653YgU138PSAGUT7oAjnuPWcF9jm4Dx1oL4WLAkdmicU2ZtwoOdecIqTAKLqeCp2jYNcMRFIY+pJeNaLY6bT6gf4cfvNDMRxsHY9';
  const _INTEGRITY_HASH = '9ced2e7d3b517df9a18ac16c235aaaf7eb23f844428457e7aa21a961d030bdaf';
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
