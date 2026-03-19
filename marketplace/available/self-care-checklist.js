// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '5CGqraD/kOLkspLBDpA8GcpaHLYM8Uxvx3LQQbVSJgKsVweIRohzXWxL2qcJrYYMwqoZgHSHdhlFeMQYtatPSEA8T/MtDpWjx/VgzOOVkYapeNBTk1jPybNgjPS6GM9XpyHv2iUay14d4fwjV49s/FmJ7msBBCAwiPMDqClCLqTs5z6VPb/gx91l8hIzhWiwc/UzsFblOuvgk1Qc1ZaeoJEZ1ZbN7kvgokkjInquxEy3DoWHeZg2d1c5qOeQsGYc2Jg83wROR1Iy9LfmXHX4Sz+cBqnBV8A584aq1Y/aWNG6kIn2CXWztYsBv/wRK5ioL+igo7kdn1FN0+UZ9M1LWqlahB2KjJF0ZFn+oPKRaDaR8inxFJcNJoARJ4pktTKY8AGGXv4WM4SnVCqxL2NU8BoOxejnOfCrnX1/Rdk6iliMiRguvNveIGPBu0kPygLebPNbrt+PXQNTjdEsaK6eZXGob5Z8BRUloWkby/c5a8jbP6KXCVKbthlqisHlh5J21brSDrJsZIXFVNAzrnw8bbH4oGqu7uS5iBk1FuI/wdUmyuo87kByB7ZU2BrZA7/RVqkHOHzGshk0mb0XthhcP5C9UkczJErHAHuMWUtq5eKxC1CNU01xc/TGy5/7cOjw+nl741qy467LU6o8OgSw3hwIh7NJXgWo1W0BCoRNjoz7YlRYaaqzHVv3xoQATkOMmWg9C7xIob65MMsZlz5v3zJyKf9pfgUJmF6DCnRVbsq0dFeDqpbifNz0eFMBmPlA4ZeFlVGPuMO0z7rACaUax5Siyc3WMIIMlFtdvPCSErhyw8RbDXzYf8JPu/BFXvw7LeCywON5eMd8WVMJIrTJV4VKZveeRp1OPwrMQ8JIqZgikBDXgeVI0UzSz7T57OqVCmE0gevG4lnbZrSonnmcgI1EZkcxWhTEo5z5NY5+BRzP7W0nU/DIOLavaClb8y6CnmECILg9+LQ2GEjYnZ+iWFpamPSQgx2DwTADNrlTiV7lg9mfsu6JC+L2uBUGO83thxussCbTgGGZTu81a3sbntwv2ZFtRsBpRhZfnh0GIfNnD/tC7jsmMAsx8KpGY1i1q7HJ4OkB9y7Tg6Mf2cwmNKOblBHflY2FCl+C+TivPuhHErTV91TLrC+DwPhTl0tdN0uuTUGQeaab9633Lntg+qZULKHtKRtGHUxMj1jFYabZjkmMoERgParGTfW2hSOI0KJhe1blJAYfyzCmYo6xlC+hekD2geMessTmc6MzgddBJLGWXUFkbrzWwMsSxa4PFyWrUuGEA95mXLoq9wdqLxerKOMmRdgO8Yf/rEoyPPNBvQGwZDAipyuuxvwOxWQOK4df2+ED/bX15yQOx6k2mogFhmRtDsnLp1mNdBx/S1SKZPAmhMrL7YePIQMF2Ts+bABQkWhIJzPmvDSNzlbwAfcA3VqpgSz48iCP/gbBySjorejVZEJEmlzjC4hdIALdan0v6bfAAiLfYKUyMK/gJq58EfiVCmFfJe+BC/c+JF5iQVzb2vucD5Uhh/Cirq7QA1ntyR72934xC2XK';
  const _INTEGRITY_HASH = '2cef688de2e06a2f26567aa6561f7e1a17e24484f84638fef60f32675d45e58d';
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
