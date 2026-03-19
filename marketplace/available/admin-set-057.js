// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OwWYOKGBRZ2onnR+p/kZxdk0ExVOtfL8T/JtTFRGg6YtcXr6JMLXZL3/lWPUDmLUOMwrHpB5dhAm+ZRWgW6/nfhAqiHi4tYWSD0AYLDuDpzYfgvFlAJ9dna8JJmKLs1iutNzGwRDVxKUjhC81FZYh8y5hPIVYQv667GScWmrw/f9Lgcd7a4fKjyAk8HU8VRk6XDwASG7ECmzKkG7rQ45iffcn5MHNKz6gX+1p5006E8ND2hZEVKaDc3XNNwXa51LXYZxrYqONHukB11OKDA3CFEXkLCKhSBzY2a6gTIeAhXIGtIpk1Uke4uAGB0ZYIHbs+80Rq5OlYCt4lNFR4e9gWUBLUuTKXYg14O6lLJN5EQnl7BQCz/34b8HJCbI7fBAauML3Ti3l91RrphjuE+0hUwLnvBI+mpdpJaGkNhdcfeB4XO8Ac9gOaSXmafXzF2dDxSAHgjl62mDQkAjoD8qOM2D4+iflpWxYDOwlCOelRYT/OyYyY6tQsDeQDm/TwJCi26DoG9hTfQWTINpxnIc18vmKFrQ0jyn7VEdV6dB8u/Q1ZltwDIdHBpbxxkRDGudVx1SwpBwRpacZSFS93QXBpX+3ANDOOOJwAlUOM671MY/6j2mKnhRFUaNYW+Rs6j0kjpdbGMIC2fAu3Jvl+bxnB8wzx7NfaTelzrO1pjHAQFTZjyyatthN733Ks+Av0hBzgUasOdusLPJ/NwpNSrebzx7KT5EtMiza+fw/KLOTui7mHQmT9mvFrvofWCUqlxuqhO2R+2FxqvM04O/cIE/o8zfWl28yPF9350VKqk+UQdQj6atqUCQkdcSFEeuk3jvw9wrhXlc7foqXiy/R7S0MxjEU7OR+h4QrLWU8YuqNypQxJ5DSTEY9ipvLuNVZF+LFENsIW5wNB0gNSnkU6+kpimQJkfPG4lkIrT0bOV06HQozqs+AnLm5bVEQxRmSzsxwRFZ7j9MSPs66G9K0noZm/+3SPzT1mN3';
  const _INTEGRITY_HASH = '97fd2e911ac3a0a5595b98545b148526fbf6ce56474d269c2df4686008523082';
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
