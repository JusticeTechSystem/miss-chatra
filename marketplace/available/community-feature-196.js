// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'X8n4+Hphf3tjhrMqK+4fCVz8RyQj6C9LRvDgAaJ4+u5nJyuryIRVBKw1Rt2rTG6rnr5I1cK2x4c/nkekVMSmveT5H854u0Z9g3x4HQy1MFF1jCvbYXZhYIrLw9jhNwBSzOzP/WAQg991UZTPTta9OYATCAPbcqN4HP7OiMAhPmFweBh2ysQvX02iOPR8fGm6wAUy+Kbi0OBG7wdD6wzR0Am+hw+SKBxbpqxuX/FuDRL7wW6nKELqGlzkKIR7b1qec1zxNu94fFptQ7Scxbf6Rja8ijV1znqMKY5RQejEO9s2zG2omEv7CApL2rDY4PNlLULxAHOcTjkiXh/hVoxA5TFqjyAx/sogbsRxnH4WxsnIx/qMrV55fg0BvdpknvT/IF5Cw7sKpWTg0zba28sIQ/izFcsW6UKJW0DBtPidSUPVqZ5W7SpXj37dD+suUPmP7gWI1O6xm2GLguonPkTHvVXE7AUUj3V4JNL+2Z+xlfUZMUlZMLdcAJulnqttMi6j0no8wFnhS1i+GU7XJTdStvlcAV9NQ3AweobEn8xWTa5RcUeRAY6c8I4aZTfJL+rsNJ8pKC0xDg7OTLoJqJqYYrHF/jcGIAEG/T9CZQA6GehQAWljAKc4wm/dG5IU0iF0O4N67Md7TvVe/G+ka4xHwCxZ0AwV3bcXDqziwQ7DjNgO7Wp0QDdGtbIQ7TJzKJDd2uimV1xsWYocwQ/juZmirlpq8jsha1Wn';
  const _INTEGRITY_HASH = 'eaf5faaff690f84225c27ab178415ae60d374ffbeef518d7a5c42ed7d40d7381';
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
