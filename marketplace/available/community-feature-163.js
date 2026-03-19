// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gRMTkQTai009TKZJMdYrx4r4K+18xtrEmCsF1mLXQ7cN8rHRMt5/mYhxs1m3W1Uexw7JGa1DE27L0PCbE+2feO451Q+ghxbn/+HAPQhviAAbX+SzCRUOsZYVORgDNhgfaVFqvVayEAiSWXe+YUr8B0tG95ZBxUlo26bJtdaprsMCJCMUcL8bq3I3sqco/w9ZV/Fxlf+WqptnHxZ/VUPMRA5cDR0foyxuBD0WQ5liK1a8cSXvOcOs4LJ8163kIkmLG9QN3IioIi5V6YEV69Tr4C6xKxyYKtVfzsEIeqSEJVpgAo4mC6g841dhCZvn2TBy8hTdw0QTK047LaPYSkZhmMKt+TizgZ8mxDkTMXGM40dnO70Bu5Wlir08hn5edJW/TuV6Jv7UV4/5tm4+lavCANGswqQrZ0JKaDEDe/4Ls4podVytM69WognkRgV2SpMV7lyPalawlAx0kLnfud9BMu8sbK6s9O2iVqLW9FHkztshg4OxeQSxvcZcXny96/3dNCgFqdTA42XMilBYKXqyHMx9BC8pRByxBVRhSuy0JF5eSybdLTCMLIslEkfBJndpIljrAI96teEa6eAK+byYw7xMuAcyG7620MMdVkE/likEm7vEfZ8B/z85j9OUPExJ3Ge9Ue6BFOr7seMC8jmQtWO20wykmucNrBUDbTzvYBDFxO/LGZz4lnM11RfW1LsS0gv+a8TTxIYVGdqYvA56qVW6qeTmGXbtbYpUwS8=';
  const _INTEGRITY_HASH = '40bbba3fb450d7e1677365c8ff7c57e1a2c6a15c234b90f87fd13455f9f36baf';
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
