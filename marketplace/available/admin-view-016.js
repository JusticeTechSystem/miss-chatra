// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'e+aVfF0JfV/QKXW1D8LbFwnlNbL5utnZPK1V0xuQWWfQBKutmQYdkufyUhd/tl/JE5SijPpjeQ6nxr2k5H9KopYlvjmPl0kdMltM/oj/KKLJmqJyATZcxVwcuRqvnmrTzlqMfPMQ7Gy8Geor+CQXPzcd3X0D6QzP2A7Vqal7WGDIUZDtvpaSLGA+al6ZFzpWs/6IO8TiMJPIpHiaEuCB8Wh5Bgn13OCFGqrLP/2GvVEO43zF/MVuSTH1eK8V5gehJFhX1AU7JSs7tfR9mXUe0hhPGR4M/ESJQLsSb12I/Yo7zceOFIM+wKO3REoOFy2udJRZ3gf2Ap3Z9e8Jdj8Tg2q/KB3vHkJCwOd6aI89GCNPOY+HeaCzzidk7reGzFRKuha9eYtHUUArE5qNx9WfCHz0513GvTcpFp8jymoilL/68tF5RaJRl5mufX/GsaxUPPbU+4FvJKE6hGimJEWfO0/QqWpLQze58hHkfDVrww56t7DuO0QhxoP4B9QfimFWJKtlmU9FSgmw6pP+RkgZYwUy8X0V2fc9j2YPmUPgQNfnzb0bBqIDXKU9RSaCq1UouKzREoWeoKjaChnq+ZCthrmTx7HncLxkZBdFC31Zi/8QlZTR/2m47surO3imXBzeogsUSgUYtUaCo9tzntKlo97K5wR7qpIHfHcPd34mahLCkhNo/wssJsEiFkWeD7ANM1CHB+vYnAl+jWB7zQFbsuk/hDB6K+cnGo976juxax26DKTJDF1bivxx40MwUN8lu0967/pVOUIhSuH674gLuthEoSNIAyCL0T9HQoctg3lyFRHt6a4ImYtI0T+RWuh94BOpxMCdKpOhRaWzRVZSQZik+ty2zEVFVteSz11PuKxM0ruukKN5DYM6vsUkyyZNafyCCIU6dQkth4c/JLWBWUQrQdzj9ayi4rVoiybRHjCvrhIKv7hnXzt/n6cXg53BcZTeZQzT95Y5V+Hw+XupUB5cjcASginRclc/xTCKAg==';
  const _INTEGRITY_HASH = 'a5d13c1956074d409c0142064a7ad32dd1989207817f0e374fe6fb0efad01614';
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
