// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CZdBqbvvYdmDnK/yOyQgPC7wFmrSVhk1GWzOGiJ3qQd5AXloD532qKwvUzOnO329nggj8TSa2J8gLuXgG/cpjG15keT4fLx6vhVl8NXz5g6y8QrOX6uukmyTVb68ld8LoCf2FxjPQDH/lg1aJW9TfhlGu+IcPZS6utHzc4Qjfz55VKKAhH6jmjYQ802JgrDcwcFaibaarS4wfK52Q7rigqbCLI11YvXMwv8eWTgTswc9OjF7OtOK+kKs0wADsQRV/YnXwOCUAcnMNse5jWvixWndOIL4/MDLUXBy0R9i/PqiD1RN9iDJKlefYDE688R+9H174dab4dR3XlJKhEks2ML28DSgRIzuCMe1gc/jZ4xxBp+f3Y+c9ThnE78Zjn/GIRhAJReL+K4CsQxUTqNyWee7lWpTTUSWMXBylsItnrZ+KkVpjldDYbaWIAGtrjyASV+LPlwTKpslOhnvFN2hm4s5wr8y1pyRzADDZR59QAF84MRjAxJ0Uugghffz/wYKu6m/77SZg//Dn4pxUHIQs6Knhu9Am7zTVvWcVFAS1FEanHPDvAeMAPFy5Ekiu4z9hNzyOo+6bHdYMQvZrgfHfJzQ1o7cm+Hq6SO+o3FWHno5+mdrjQMFif9Z+v5QxCxrWlAYLmIuLvilh+8q4SJdOjROIfDLYQ/7Vv9KQLaZAK9IUcV0So9EFDqQbmjEbqA6VY2URWF8UjQM4LEYkfYI5oRUuGyRPfsibe9Sk/nMF/KBrdSrr+0=';
  const _INTEGRITY_HASH = '1b8a3ba4e91b8dd1c1a1199a7851c2a583da25d341e45cda10f72e6855d1124c';
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
