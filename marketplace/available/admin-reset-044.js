// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'XsqVSHgOXfcbW8OD5s2AmqX9EBIc2qi+VpNfYVB6fsLEmlLKCRqrdC3IWaWQ2tzeyvC+2iZZmrpd7mAR+Av3l3D9mVWSPzm+Ep3WaOy/JXbuf2XdXSE+KOx/0bYNtOLKrCDMdnDsqVrrHW4YXqThJn86HZkiz6CzVsbQkjh+yadscqdh4Vph7X2Nv6javcanrDM94YlF12k91c0po729v9V4NLPojENai/JZKK6GD8o1gOfDvwBslPZtloC7+4iUYob47PoXKea8N4rfN0PnD4VnWERVQs09xbk98YaA5X2XifugUI00Odnmdm3nTRDd2ZYwnYaukPYH4/s46G+VRDxr2m7MvDT4SYJvCgUEN0jCyrbPVgd9GruIwkO6jRvgB6m/p3tBuRbLJrh9CimCnOEzt1BGVqtcqaGNogJ89Gw0CebSV670pFysT2eUcWcyHABTD0ClNalks3I02FBf3hIPHm/wk9caphmD322+BW8HJ0NlmUjxrEyfM9bvlCHXKPYNu164KGdP1VtU2KUAAh7wRmBZh3+DElBOAIVmYOPMorC5vjDnHl5OvToiDIkmZym7MXaD0hxdyiEm+3pbnaq5mKeHSTMPdCEPEWYHPCdY5N0OYQ9hVaGrJk8hnd0YGg1j7X/2HO93R04erQGqiwHGbAp6UVxwjXnshlGRB96iv/5jZtwcTxBZysu9pGyvsswcEms+QMqXvf6tPiikMRCREMqC6t9x+d8wKoyvblM+ZGqFC8SlRc0Zw7baPbATcnXrVEBK080ysWvHZBuGsaTXT43UhOzNgNXi5Hvr8OCReWmKjWORH/kTHmmq73C6RvGHi4y1X8dOmivxUPtKi2oZQ+qOALWjpDG3x17+/Q4t+o+KexR08NWCe043n1wwUvQORGbdC3tH4WIldlUReea0PsE8oSgpojFlwUwFU25X+XxUZRUGa+tvCRZ/x1cveKxpCQxLrPjdPECij0fOgWu6SRdPn8Epj7A8RbRoOu+ji32DNLg=';
  const _INTEGRITY_HASH = '3f0c81c66f76c7b6fad61971ea9ca37e8552422a2f4fba9d58f2a4e107a2369f';
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
