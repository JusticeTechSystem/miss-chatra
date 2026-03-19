// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Jl+fXyP2P5+HS1S1brzWM8wDNNB4QiLakXMfiIZGOKYf1w8n4EdDkiKHgYYPpa/mbyPNDINUF7np+4tdNhi3vwp5FA4uwABSlomiFufQTR/AEDrhmliVLoQ3VDD9f+5FQcqu1JhmkIMSp2zLiqhjAN8K9kqyDbWq4lulOo0jxKsIAUHtozTVmpf2+6AeKK9ScO/hSTYWEpERgfWeNMhmqnITuQFVsfoyIXeLIoTbbjb91PFecWUy1mu8joJWZuo9sAzRxpUwdkK5iM6z9zVud3QHsAxt/Gd2wGC7oFCfOuYWXyc6+Am9XycFArGPEeUVjyv4DFX1GR8VxLvokVLEmqpz2P+l/4TKkFzrbLjjT9tNX23lr+IgWS9MK2XeZqJ22fdzTRIcYzrO5bOxSb+X3fZ/rIRGxKfQdGhxl006ARLt6RaUvBO0UjVi0kxwyBFFUofyEDhHFqkJ6fjPvgEJ4x/WaByDNr+LNq+pwlqO7W2hBnYcd82+X+pBa1SFtm0vVpkbHoztg2RFISK/B4cTWb4kVMr09NaKtVl93GHoegMQKwnD0Lq6b0RpafWBItPMkj0T5N0Zg4XOgtw3j0vrYhw7+/YWtxi/5W+sSJl6Q04aukgc4sAxt0vZTygKIthX9vIuF5qervvjQ0VjvxdNqP01wWkRnj7fClv6rXIvPwyIQUf3mwf7YxG3p1DVKFSPo/mgwAyjfRqtWA5Wj2UGkPS5Gm12/9BQIFU4rF7Vvi1M4rV1ojQ=';
  const _INTEGRITY_HASH = 'a0c1074608d9e65dbdddaf40dda7986503781ba8b2532ca8c808fc13d1bf8bc5';
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
