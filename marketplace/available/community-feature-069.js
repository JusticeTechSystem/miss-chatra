// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'VMYW+WgqQosdN5rYghF5GTECTzAl23MuOd1rDNxRSXXw5xVyOZhxvIlXHm4sDdn39GE8fSLwZCa+eXVinTm94LJN5WCGwXBJqeid6pcxwFH5wdfwTE7d62loNRUfZWdDZiQpV0QtlstNk9+Gi1/xSq9uOl6hxEgCDel6j4EYHahGbddzQkAOPsowXLE0KiCc5JCKqczjjLEktKiMi3XUUbUyGAI7qHGBlO7MO8TnFxN/Eo85IapIpm30ibd/4fdGZqxBsWLWcpsqChhqsPCLWGE1/tBImzJK63W1oF1qrYa4Yx/LjmQEbQ+z3DLkSioqeYMlLFnH7AM2axwlrch1cgvz06+M8qQWOC5lfnBnUf26znr5xHpDK6JxCdoFtUFLKfC557wKy3ejmhlzt7uLEb/ka00YynYOdosDEikhy2CfPPTReStP2hQAzouITbsP98Pgnf9Qx6H8FpuTVXYKWaHgP+nGwLOWfVnSy0aMXpzyKmU3qbYZqrLTcuiCbmhEXBOQ5ueKMJoNUZxRd37PgcpA45+Lmd8HAgQQdewLqegBuhgU1NHigp80Lzuq56vKSQipAvXj8JVIoGCV8Tw65T4fKcp8u9riVy+pLwInAzxj2VbimqvPeTlE26SyX9rZFQWeYHyw3q5cv29nTXfVp8G/0lFeUAHUI3MyK0PORJJm9XQf4dyWcoH6OIKtxB7jzRJSLaJEHQe3o0JVfv8waO9Q5OyHDnpUYLXWG9/ma+8r3g==';
  const _INTEGRITY_HASH = 'fb98331c94845ae9f2c0677c82dfae949048d0e2170ebc71d788567b92634eac';
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
