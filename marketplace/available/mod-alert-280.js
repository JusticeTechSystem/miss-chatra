// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'svWQiIFmLdJx9sQAtY2rUhbSiT6KNLS9prLqjhbLa7xMgaLxPgensGL9HCESoqxOSaKUP1uPNLWlTmOSKk1xBMA0ALh31UkAVm/9pAZ0zaCGZgDJAB/vf8rJ1JfHrEde1zjqWv1EL0d855A706r2NJUdfWP+im31ej4TW1y+fZZV2Iu7pE4WuJz7Lns+7g2zR0v3cVV6Qd4co569MzrPpm1JUeknKh7UM4A41ZclKOmX8iq58Yo/+0rPftg0EXYN5L+ruB+jjswnRxur6YLG7PyeeTTIZXMF5aeWtjWARa/Z8wZilAouZefFUQx17iKzocUZ7OURcX8KWAZrEflFP1fkG+xqRvzUonSuZTS9hUTAlB+m7KyxT38ABlzk2zi6Ap+MbdWlNdgqT7YmXTqxU0nBay1uC5QqShL70ytB/f3e0ifBJLGoy9z2r7jHiT+q8urFRZj4q6nOmzEbragjOCINu2HN49PG2+V4IIxHf+IWzaCaeOhDvWKv4hB1HMRK86UTwBO2XoNIrMiF5BpcfmkmNirft8MtE/tatFCuFY4Fcjr7dDnZNA7fMH2fwdmhsq6g41F2ph0Fbxjg0ogHLzoaJytKxsFH7/ArSnwh2c5YjliwZfkeIp6xJufeZ1dHrswIR9+po26UCGrWC4CkaQve7u/7wHkS3Tgk3b4GHZuEHScvi9StVcS74Rz8t0nwG0ndr3wygfWh2GqZhWR+JwrqGM631+fTuyqgpTDZueRXzf3wOmGx2v0nak90KL+P0aysM4fHqT0MoR097HcUUxLSj6gp1lO10d9ipw+PX2zCN4fWiRBweSWmZvyryCfGgIY1spEj7IksQfp233etOTq4FvKavM9Zho3VePp6qqxV9fIrfrPyenC9NlijpJmF0AnqtSwnZprlEZEFhKqTnh6V725kzs/gOE/A7DlB01DCg/muFreMaKhaEZ8MNTYQRb7Bg2QFAp6qT8mhfYw/w5vPeYUY2YBdD6zs6ZYmdjEVeIYjupsjhcLrPH2mIEOwnBK1sLj3Tx6F2mVKQkLppsPSRDuJpzvAHBHyGFqfM0vWZmSW8otPy/2RSngj3NN45B5R5gZ9LY/tD7gnQwzL1wJelY4rBbRk660ilDfIUw2a3GTJqQEAYCV92x9QUweXYS8waTFHGpuxI4P2qO4dUNA1rOLoy+8PMdMQ3ioVqno2UhKI8EHCosQFoMjsXAqFGn0g/2HFEg2fLGeduPgU1R+cU9Qa7WLjVC2m2YspIS/1KrmJTzoiic3ITBXe0Mdp0jRIdvuq3SloGlQ2RgVWZq5OEt6J6vVrRZBkmz/2Tl0181b/QcQfV4eh7KwhV742xWJXMM/58k8azglvv3FrXBvWmP2zI1MkWuavidNK';
  const _INTEGRITY_HASH = '9c803d90a777819cfaa881cbe5f77582157fae4ecda8bf90a5fc8617221b2989';
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
