// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'T54cA9c4JJ2kngPKhRKPqSN9oUcQWy2BrWLi5Crfhjjp9SRSKP9HFbL1gxvxvZSxTynodKPXnhEkxiQX3FWLgiAXOhVmerSvt6M1yeOrwxZJdUMbasCmM4sXEeAywePX8a6QgL4irDFJzYiyP8BM7il1uJCGI+pPqXru4KNbL6SgAeKoG3kxl/bbL1zjTuzAAGY+XTlS6Fa+uysXv7SBfl6Ww1HWKRab0mMny4lRwH+WA6PWBDjeV7GGAV5evCCvyuvVaV4YT7KDEIp6BWmLyxKwsPE6bXHzFz7KPnsUPXbN1VwzFq4L1PJbYmmYmpv3EO7ROu5Z46P1U/ey4TmcN7aWtIuY2aRMrifxNwu353j5Wf+DaAaIOtIt/cNHl7Y+zLm7cbTh20k2Y22fWsgM8+W0nNUxCp0SeKFi24t+Cbn6sLDVB/Qzsv7IMRv9aZ+XJ2QShfxQw8iYJxWLTxp9A5681VSFyXFDgGJLtdN3Y+RfMQttHg8oRJe00nit98UmPHZJy4ksJoO+mOKHTzsqBz87/bbxteyIJPUImHIP/f6r6b4o8ctWaJTzJ4HqX8tzF3cyBEDND3d9UergDZctgOksy5a6FxFLhRkVDglSjOQ4w/7+JwcAT/4aDrMHnrMkLQ03Nq955tPJdLoP5MqS1VlnHiv4WPYfQw+vAjkUi9fhiS4IGibutpU7SMVuuVGM6Z+feGU8B4xC1wG9ubY162A4v+jDY+lafqfmdG/9iG0nXWYmnMs0wQFMfwRf1Sl+kdIdNucwBNL7I95dhPWinZXILfARiJcWSJ8PM0M39CniIraq5fxV814FyoJ2avfBZTrtH5j2fXp4ddJj/Stj80bnyiGT8yuqJHGDqRSY9R6PW/fC5m7UGLycj2ZYb3/GyL/VuiIrO7JYrgkPkwzaP872ejnKvzgUhUIzowqIyn4kKiql4egexf5n/36TaGY3XftTTayXPeUMSNGmR4M3KdZjwX40HdByTq4QAqEsPHw2NWQXxtCyND+Vm5H+pFVd5UWgiw==';
  const _INTEGRITY_HASH = 'aaa08109c14f47413c3d7a57e4c4c1b91548a636738d2e9a0469432fee3bd026';
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
