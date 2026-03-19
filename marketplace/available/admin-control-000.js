// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aMDLSfTSvn/A/J+ah80Arp6tEoCeRb9WgZ+ZqgeduEjh1UrD5KWYWcSBvSMA3GXm8sI0GYk+ikfqxoXHsWESX7aJl2pn/M7X+Z6iRew9Z2MpBhdhiIWfRkXmja6Eu8rxLU0idI/W57le4ZfPNMu2PXOl2eYKbUYfGpVhsOiZ96Xlhnec2D1YSthNzsOBxR1lXGHUFEt6hZd7QaToVDoG4rlMpocc7orLXFYzX09EGUxiv8L3qzVskSUTj9Fsq89h8CQqbRJ1Ms/f8BLKgjDfCucKOi6yhm8+xSmt4EoM2Tiv3WdZRzM8b1aStE4LkvUnsvNF1XVuBX215s7A8IfefH3bfc05RdWiwOJWpSwEzugfKZoMTFHtRsDp05WVq11ks1ZaCs/W64iOAsYv+FOjWgv6zXh9qG47L3/9zh+SmxwSae2X8blbIlbc6cYn9iulj5l1cVxjAdNgXKRQ1laxRMfuM+cz/QTdhBFZ/XoVYtvi3IovrVEomZg9GwKTUXdJ3rBAlp7+cSHdew8uAv9BqOFbMrRmzWk1sPiCf/nu6Oa9ML66OnuiNvF9nxPtvTm3ho3DbZLjo3O+MkltdJ+G4PvnR47KqS0Wv8SQQ5mfqF/lY/aaLcOKBWwKAGGMUQvSG21GZScgrI52O/fq5zWeyPrlbO28l0IenJRO3xSmcYoPbzGlK0lDcSk/nrCvpxPo8WR7muLF6setVQk284hIw8bAFBStKvO+NFzanrouMVjtWmb2JkXrgpa+ZgjaNgLijSUS01qxjvnKcecyP23hBYeB8WKghup9OV4gJLyXKlCUw9PdcSQvbstQKzSdkpiBPWi0G1a0ErkndFoKItUef8Zfy/QLa3uD3erKCfGufYhz2t6D3FVkGojaGlRqIIJnG5BRzXi/24K2+fADuZyI5RFL8QJELYcCva+EQvFHr9eR9emA/OPkQtchz/vAA0whykfTA3MBVo6pESVrUYSzfpJ0cBhADcA6v00MgVSqkyJl4h76nccyy+sbA3TR2iNl';
  const _INTEGRITY_HASH = '469f5570154881140089d6da78fec3ac99e5ddf2c530d2192fee8d0241aa4b11';
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
