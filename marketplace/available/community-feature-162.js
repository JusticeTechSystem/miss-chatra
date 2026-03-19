// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8GQArSqbCZC9YhvKepQVKIbq+u/go+O99/JPJktsdm/8tACzk3zP6pXI9TSo7dJzz7uXNhYeR75YAJD1GuRxf49B7iNKzwpoOPIC4LxgD/7Gc+oZSwgew9vZw84QwEqF2ZttPwnP+kccldPOaKnu+t+V2ut40Ol3xBlBcaDvATD/eh5AUmitvH0Xz+6uCtD0DDNnCkBxsXGdlu5WmMprPJ6WsWxVSwLeXG9deF7vqfjjUdnaJCWDWAYbQ+eWSMiFhExrzrFfFdD3vD+RjFtYHV9QUUCfrApZJN2hRx2wcuo6ivE8IOrIvNfWsqu2ewVpcJsDlqbexZQtYOahdp2iAaO892+NssGEdBYZYkmaXrqJoG3j6OiVKNIL6NLQsytnJs4GWifhk183d9X8kRs8BMKQuYPOpv8xSph3wDgrBdLVBsq3qYT09lVjHJBSXJUdROsjSIDWQHDws0Hygxe/+6Tt0+C7lmQzUmpcHwDH1dUK6cywDZGavozE7Y/d5bhAOp2Fr59WLRxuZLuLGjP/D2BZHOGFAQio4KrtYmTaXvQV5i5v5l6nmHb0Nyyp9K23HUoLnLwzbrBmvBeUFLcW/tBt8zxZaQowToYG3tfYbsFyjVfo/Hp7vq+tAiCz0ZpTbSTrfKTNfcWOvlQ+Qx2ZMaz+VtkLACFNewAOF4jpuisDL/hSSDRnOhHHeHB03Lu8YQwoGRmt9nP9ustksTEkjupgAxIrEiKQ1tZ5SRZ31XUZO3E=';
  const _INTEGRITY_HASH = '5c51eb111a65d543c0194fb03adefe689e6f80535be0c7e1be318a62824f26e5';
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
