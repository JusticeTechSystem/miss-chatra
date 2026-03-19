// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yKTEPJMz68kEKXRx80Ysm5fSumklpNhii6nyitB8YKlJyLBvUWmW3MrwqZndG+00MIYHyHqjxYhu9/ndMWd2aPMtS6WQCaIoloq3V+6J66jTInmfeVpYQUaVYps8ODSW40y3JO+tJp65TtzYVZ2K1Zl1m5g9l9u/4Oc7JqxBBUV9WYgQz0sUdM1AQ8JtWfEJzVYT0pcQqUcX2WzsDs8x9yRU7aQcnJjoPiXH3+zLZerQxpD7Bx5PfoTQR+ytCgW3EZ3xOLmGW7+bvgmMmXdYEhhzEXk2cCfr8bt4aL40idnme482/w8vdZ3I7yUVQ9ujM0KFiAXNTtFltEhuzveNqMQgi+cWOazvqhmGaTAskdrI8LZ641Wz+mHH7lHPQzNpcLrcBlGeyDwBxC4D8jskzUxRHnwk9BOg41gXmoFDMqRqWcxeAKtKeaPS5BVtrUxSPoZQ+R51Ag7L134bXs0ObU+u8wcO/ym01S4py61vF7+ftSNLn5WYX/ytEZMcm6e0EYZGW5nHSHEuC8cpFfXi3fedXsUpBSAtD3rTw5gUWhfygGqbk+LETjPE5VykL86ALwIHLmGJjbdGhNCNLV9xyZc7ziP6XZZDSeFmg+Tl9Gx/9lpcBD1KokB+1/kZKPsPNDOdrJNSkUL/WYW93GffTwp41yGYlh7+yEtXkgO6GlaI5jfJVnWWEw+9yXN8iPWN/xojof0XJS5f0VvWFRj13P90ly0=';
  const _INTEGRITY_HASH = 'b780c6209e9709348abc06ddca240e98853ce26214c69ba4e0b90f47b65ef448';
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
