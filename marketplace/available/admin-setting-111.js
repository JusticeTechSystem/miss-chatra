// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'OlLLc4MgA3BbmCZ8vUpC/O51/YPEq0clXl42vZjAQOdZVEvQWAQqKzTp/YHNMW6buScA7hX+5uqMhZZWv2pgTK9IPZe69fDjxOtEeC7VLsKBW8DLF7rCbXiGrv3J7yvDWWiROialNyyZOadgB32gk/+rx05vyvDnv7zai0b8qmEpi7NAGyrSDUSgQUddVoYYQyCzM7GF5Gd3q8RfaH/E+PRpTKxl+o8gL+XlrqXjpRh9SfGI1iiLEH24s8WSnUvD4DMfcTjFZJ1S8Elpy6LQQsh3ZPTX+2cNG9f/fdc8BdqLS5HCNKs5HetB1z2Nf9CRQOI30yGolQVrxh/bIxNBdrL0u88svKDICXroZgO0RJuD1oUN8vrxSRqM3d+p2gAybEHkLrtqVKq5NpTDbKPHORJ471WarbH4xP9XK4/hVxXOSEPsP5XJxDX0ttevozz2zmGIuzhLLrFGrHcLfzswyxzHPUS3cjHk4ukuUzMjCW6/OHQI5X5hYi0qbG/yDznzNKb+vxXDlCZmYY926I7mihNBUS7uKUro8oEd0zGaiubMo5/ujdFtDMyVExXyvl/0LsNm1X9Oy/Lrk8ANwcqSnvLOXVU7YBN6KdcAx7yZ7dBwVR2xtr6u2SkWHtGrpGubOQ/wBUvVGVfPdkQIwfJjK6EBFqZiFyN+FnsJdayMPZWWRAy4pzOLsiabwGE+7h9fz9HjsU1dyK1rQFdsa+/uOyFurYGPW7ML5j94AbZn+GHL460mhKe3syVvDen6R/GpfkhYWxCfQ9chML4e1mG23yr/T9ps12UtjBucWDXxmr7TPEVN8r+WJA4yRPMB3c278T6QFfQGcfdmuVJLkUsRJViZtmI0EG8L+rjZDPURx4GcMTAgn2BACw1ivGiuR0qMNE29UzPPwuj44Qpp/qQgbaDcT4f9lMDoP3usl2JlKwSOxT0eoEjk+ZlnHos+ROz271+HsjeyQuxVUfkuFz2MBAWsD7nLUHnlTV0lA0OYiwZY3hrq2EZ1wP+kDCtLXtAAfyZbvzXxmZM=';
  const _INTEGRITY_HASH = '43f5a75428a50f3b9e87cf9cc93885d086ef6254aba93ba865beddbf1386f20e';
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
