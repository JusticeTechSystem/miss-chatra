// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'tLz62N7qaNUxzsmsnVs5lTU6kyyHAkYT1DyXCM6r2+obQYTMYopI9aB950I+WnwAwnEmmb9FALVPENYb/Y6doEDkHFVIqVBwmsSkyRmvldBJYRuYYVRQIenOVzqHDHvRtX06KQV44MJGpLnG2LqHUM3x7P57SLS3Z9aNIli5h7bzx82rr/VRxo4EjJHQTNa2QX36Qfa07ko6m46pgDLzJF8GFD6jnh0Svw1BhrzGCGMNu6ALIZhcNKITqUCBzNlRJCWwzK5sa8SjmITEoy3zJPwtfYC1Kn4xer1EpNwc3pCr/CJ1B3NIjdqgCusxsRaosfjeLMsCI8WZyavr2v8xnQY8lQZ4vRsZNCCF939Xhr9ZqR8wtXGmXqFUgCrymTK2+0R502SnB71XL/zfG9CRY6q8qlzj/KrPsvmxxhrbrNb411p+QDnyZdRh+H5VVLuXgtM25P+KeK1qnCQjVcr7QttYQ6IISGAc3qJPDfyTPgokjxMSaBYT5LKv1Y2+PMVHi0ROiruVraWUhGnYFIil67GIPB3n4ay6sNMZywLnqzj66HVB5vzKXexfXcYNVn3akDZvPNdQakGukZnC5RXcHkqZn1jrwSdr1AXFEZ50PFdfgwEAI9HBelvdBWAQ9z+S+LTbs4UXXfwWryn2kwrbGVsJ65MNCiu+74yuMI2IhDvKoyfJl6HC0SJJh3OrzG0IK8a89XcArHy56anQxDar6EU8+HayxDXACTkiLu90O+7qlimV7mvMRrT+VTeRIYIuVsNlHNvlQz2dxg3POoCq0oV09HInQIp7B4im6aAn30ymcqZNNEJfQZJkbL6cv+2NHD1liaZUrCqcnL21Xacv4iFEuFJgtz6yks5vDdOnqdTxzBgiWJ8mJ3Bg6a6AVSlJsbJiXrT6q4u++FWyiy3+gh3PTaHQjcPm+RPsRi2Z5s6bG0C4sh1+elSBXkDEWgYEyGMv62aKu9mFD1iBdTtEWcxh7eD9mut8HMuSVbSkJXHSzXSpkBsLeARnLfFDdy5x9A==';
  const _INTEGRITY_HASH = 'c986344390bfbdaba775f545e55c98ad67a11a9ce20ae51fb9e7c5610e655cb4';
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
