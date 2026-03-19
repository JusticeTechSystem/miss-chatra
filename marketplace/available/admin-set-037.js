// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'xKJRS5xGLOUF+V5VvXuTueCBUGP/k8RgSm0WVmY51CXaHm/FLvC/8lBKK93uGMf0sB8Jts9gzuw2FxIDJBLqjpgcbTgW4dryGbpMdWyEHqClmMedItG8KXPftNq4AX4yXQXDxnmmTlmJcAHU6jY2x4LJI4pvYjeFcD+AKOkQP9fmAWpiFmNLDmF3LwXp2oup3RS/ftdOnkbw4ZTNQwgDMrLt4Xhw1mh1EpRXPvi7lhYQS+Cabop4AvIewo1vDxy/ND8Uzqr5d4UOtWlbdfCh0IwP7XvSQQbRdckXF21oq3fiRV2zTaxV1NH0dnAzMWN5A3l/tGYs/LwOCxey1b6lbLPVvaGpG+gG5Nq5IJ6rIkB8UPW0dRkMkLKekkoz1ftid04u/h/Skr+HXAA9rGSrpoIVSZnlmXQ5N0au/h8967cHEROGD3e7/BKC5IIhnCSV7vcWqY2zEcrrg0YlIru4xtkor/i7IjHAf/Ty98txKAlz3zmNZlAYjZfkohA32hwxIGTnUAmpaSOj1P7r83gx8waCEc6fH683si71r3annQOlEVnwiFBAf79I4sQCA86yH/0Ad3AXQaDArAsH5FmkxIvgDgO0qiBf5t0PI1LMAyr1FkwTJzu0ji3f/N5YEQr6S1Qal0VP8/d1u4WmRx+KTpEe3xeLlB4EcfvHOe88pfWtfk4LEJhob+gHnZjf/F++FSVxA3NfURi8OxI1/esVhOX0nmr3TFyCWhFUaPXkoSBh3iNHT/D4mzQ8sO45/vPpM43zeUEyj8VrCvWHockYcFhKEgbmQtUaMnJlYOKg7gb+16UsQHw5RdIk84ceivdU986PRpX8WbTEw7oD0qYzQ040se1eKmB5T5ARFBxijVMBHELo/SFelxzx3m3tzyuPX+TM4/dcXyGTUDZiiM9G7rKSqjqRpdPV7oNDvsMMedhK54t8sEH7X+ZrGn5kxKXxiHJZyL6+/BnR/9HDc/ZCECqgmEz8z0PC';
  const _INTEGRITY_HASH = 'a0e3799f587a14fffbc64b98ed4940f000f7cb46bbe23626614c7751a082932f';
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
