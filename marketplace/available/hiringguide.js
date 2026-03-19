// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'GeRV8ZXaRjic+kKKkHaV8aregwxkaI17Nk5zySAzP8wv7v2miGx6sMP+rIvOE5IbQ3/o2fLjUvMPYgQoN/KcAMNQmoOMu3YSjzSne0R6Fa6PaqDLyFi0XjX9RGJhAkXQaqkUDOAgpkowtZJkL/7FJ2h73FZrgWRhBYMVvAbbugYP/K21tj6VMyXU7lf81+sBj7YUdN7UK9GHF9f6vw+VY04MFk1w5lzOwW4g0AjQHR/wbUiTNJmEq4wFOq+I0ZLUcWAXkzubR6QRLx6gI9amIwRid1A0guENXhqNY4sQ8pmCgGfhMu5Kwhg4ymuUUk0uSe4lDPm65iYRPncsKEziEP189P/f9T9+uotjTz25fQDDCeeB5NlYzKFEG8FdY7VPPIU95Fyjt6/q1b5jzletWO+ownUELCgwCbElQwHO82fVrCE+oT3cKxP5KGJx5jvdrqU/CU5SBgVxOqyMuoCq2VCcgU1JW9Rc8adaN6COS2okdkTj+OyEWJ2JxbDxpTpiqxjXZe1lylrVJPjIxWpCotcwqcMUrtYKHgY3scblohCFgOvdWXifSHwm80a/t82qSMwdyYgeGI12fXTfPNbZo1riPM/Jv3Qz76VG0X7Z0HW1PR+7VuC0FEYZZpapglNCbJQ6qXeUr0IY/PI3nxEgRwIIDNfRoMqZfZuQdTETrasknKlIjsqQpB8v3M/LmguQUQy7f2eC34ATZZYwDkeXqWOpmnXAz5e86L56NSYQFnmnRJZElXOhT5eUGwNf+odLoT3vHAhzhGYNQcYVnehgVfU9pG0psyX0jEX03jpaMEUFunL2DDrpg9Mwco7e80l1Y4jziyWwBvYzlojrBErAOaO3av1Sery/pGd6PC8MztvfgKigogk3BN/6QdcK5+NGBS2QYQ/PuIqEZsiPNIzEPjI725jsECyGXBVZAHChjNmchTbxnAofrvJqy1VMh7hPnIMxCb60kQcB2SE79Hp+TeGxGp53i/w0CdisVNd1IHlaUWxnyOenGc2w0YD/T2Hjb3NBzycCS6Cm9y+3WUbfL5i1cqoetD22CTsUX5/ypXRq7B1uo8uF/GgksCGHGHE+agVgdAatwjc1VIHUBgjH+g+Z030oIrsXrr++/ZRP3dm0BQHg5Pqx2NQslrCpxQbZz9c8lGW2JNX1jD2h4fwSNEhw/1Sg84APrW9CY7Tpdsn8lXXrYyiVqjxrDVLp6BeWLg==';
  const _INTEGRITY_HASH = 'f883f5633fd59877c32a36074eff3fbd8910c241c1d34cf8630429bf6f34d48a';
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
