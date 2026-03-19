// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'bsmm2ofQy+b0gvU/z4AlHGLKAivxatl0II20ow8gM6gAoJf/xV1gKkJm8Z2HzqSkkKH5Eq5XgYhl2IamAZXKdZucUk/W6/ovGj8ulKx3LjMb1z1mSOQ+FrCMe8YfeK0Q+8aY+vNNVhMY1FXmnjPLxo9qe5V0jaZKgQncdRkiZbrz27CtQT1otl5dWoeAjRXzBQyHmJ2FU3xp9f5raZ6QwWpMewI/3nDjCdZt9Z5DJavGEtTtFPqN33ezie154AmxjTlClfWwFLzUtvhCwqB8bt+34LzClN44LxUh4iNOF7lta6h5Fq4H26ojGo0idfKZzZl/pUmlUfr/pUaIL0PVstSZq61PW6sYJaO8emCa9gvfyK5N/JVGlAzbrZWf01c3O3ZDXHbMx3dMFsPxMenhm/Q81bxuJXhGJ8hW0bIRMn1dkJ+cjSGN5Q3ad8EeoxYSn0YwbjHbHhWmqm824mivgkYPYxV8sjjbqgumzW38rtTsJ1d4XoGocpq5K5VMQJiTZtKfLv89fUvMB2gJm3QDZsMSW2xIsy2kqKoUxXk8OSVVsQa9l09tNxydeb3T6WZrvrdTM0FqL6kd4eLIs5NRfq48kBDq55QMiSD8MGUZv/tpoE2bD/3iTgon5vzbE/kmTN9qv/PMGucY/yZQ5l47KGE5UKzJztfVVzCzpMvaDXEkGFB++EI4b+Ab8gVvl0yy8OGDokcJzv/HpOMBZ3pUWVeKyFLaO6Zu4RvXqBsxC2PC5QqiIxnCGe118PwysmGe4iZMAIzYJVpc9PzUL8QBrvgphjtFd8uinqJqSPvEfG9sObFivl6l2gPe+wHKEpCn0smEunWT6Fn21DGSQdr97qsm/ov4bfnNylBcLVOgblImQfHuMG/uX8nimVCFv/96VeMnazxZ4pu6RA9anFLCt17AUXCJgTGOU9mlUnZ0nuFhn153ZFbAFXQGDWngdNrG6JRxGBihdiJR1Fu/YC5Fri3u6ZhW4gUPDz+sk+gbbYnOi1ChpkNMSGe1';
  const _INTEGRITY_HASH = '1e67b0f67f24d75a7ef3d1010e6f3bf1fa7edd258ec5417c03cfddef53f584ff';
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
