// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/WrPCQhoNF9v5iWyzP8OAoubE2wRgklYRuxc20VTiGvYnI5mn2TntifKJ/naj2dFURzumnbVWp7dXcO63d0A/qzuAd0Yo9PppQX7mrnHIjMJxIJNRgfk8R73+/PJ5UsbA/KUu0ztGE6AcUwpTB4IrNcXNU7XR5/BPhaPB8VdrJeQO1g/zM8AvhzoJGBlgEQ8JJ6SVWdZQYQC48gH6FJfKcxeo5UfqittKi/eqdWlQpr9/riQzFvAMKtRKAm1moZeJZgYE9yXya761rzGZtsrpxWQUKf/+5Ip0PZUkP50e/W2fvfZV0GvxIt2hsgMnCuvXNmNbWAPj2M3yyZScblAWNO17qYFYsx29qNoZmyr3SMRiNqe0GkTUqFD1VvaFSY4SoCxVTbNT6EMjcfpLr9nc8pH8WEK5TZ0NjO48YfoLQKWjxOuiE3+6KHMpqUaeSx0R5JoY82+2b07U5OoGTisj7wFAIV4Ca1/v2pHEvc4sHCxAulCCtiEQdp2tka9b0iubmp2nkQJ+S9GDTvaJIUVkMdyvWBTzrMZtItRuYPFrcp7rSYs1ICFf46q7pc9D5Hr/PItfB4yOggcGcJSsGl0h298X4sXiH2mRYC12GtY7qbFDqohXsxN671dPvwKANnQ3yp9gtmfCQS0gY64qNfv3DjHsEydGG4cPGLgaO4TaHJYbO7Q2hY1I8MRd+VFU2ekhP7Smyot4GBIdZQoVzfZfal/RMHkWTBejB8C7dA=';
  const _INTEGRITY_HASH = 'da873820774e0dc70752fe94e244053deffe88227e8862def343707d79cfb42d';
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
