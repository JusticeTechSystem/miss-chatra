// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'V99FOXax51NLjpFlAYVhsQDi2LJiBrgeB0njTAXcbFiDW95MWs2b7XOz7IGIUU6hMq91zNR+e0k14b1j9YsCygwSuYzdQHrf0sI8FVP+K2z6/FhuxL6/J/gJd4EcNTONs0jqV7B9nfDoaSFk7KLmE65otzcvi3H7ruBJI73olixQ4j8ieQFQEfA+77SqmHpnf3iDkqQhqKEa1CK12VzozflfLeginN2U8hB4abLxed48lJCErn5CQMdwo0YTc09QZTgFwMWvEPT1kCO8ZF7P1eC3eP/cxkLxoFweMTDo1pYl1YqyHqRjGDE5eW+EdLm4FzxDpPDZiVqUTxb81zgX3bTsfaYMM3tFrW3oFYhtzdB19jbIXM3NaEIJOhq1/opc0oC+Sp7JRLs07GhgmLktmbJdx6xRZmgf82GK4uDPDAzLjFK96A/kQBtvnDlyTbUf3Fz6LDlVn3CpWRfJ0Uqzgoec1sWkzy377mfO6+8UwXzi8AZe5bAwECowGxtX5JVnSuiWB8nYngKcsvmbrwXpIcNO06HYWV+HRsfOzJURohsouPJ14OWSKK00UoGt4Hs+bVUHpED9RbJeCi+T+lJJ4WrJJ/P9csIAdxAHtMqUaIuzz5RmbawzGfnFMuIZ8UNzjKT/AUDJ0M5jymFxgusLmiQ61mPchM5sl+A7VGXkKVAfARwQYOvOW8N2rVS2zH9Mu77gzAkpok4kWF11gUE2ZHiYw1EMg0rhwUbBXGEAB/3ga8w0D3LhhhLhjdpgQuu7RGw0voOQfQKTGLDivvG405t7qW0Uwh3UluJYzXHPjZ7OkvwiG5aM8kDLfr8BqTEHEqct96faa7FcXtk4DmywcoLdrz4pIahg5wKNFO39kQvaNxvAEYkBW7lxPCRyPeIvgJmNtq2tc+fq3ssMPRmfaF6PdxwsuAF8xtJ8tsj1sxBGUEr4uKxhQ0KhmQJI4c2Hn8kO8vnI61d9efSwyXbLKzKt/xdK1QHY96IBaPjBu0MyTIIxWcAGTgpiMAznzeNE7H3oQ7Brd1LVldxVbsHTMw7vXNLPWibfarTYVW/AjSDazwVmzZoBSKlfAu/ZJ+h4x4IHkyqCcFMG/S85G7pVdPWzJ9hyHhOz5sJfRUT5cAW7hPeDw6HmLe398CTwC14T6PURJpSNeFVropWuoQE1heXcT6M7+t/BQCskpSqU+syqNDSQ84aFoIImqdj/wd/BfQLLwA6kfaWzFjYpkTpEWBSOXG78sENg0SW03Q==';
  const _INTEGRITY_HASH = '9f2c49717a88b3b2e2cbb647f1fd0173ce0fbca8f9cc4d6ef9e2df892fc784e9';
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
