// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JSByuPAV8TkTarxTlcqvFCruXI8zDE+PdFaYKlr0EPnVv7iZoFcYGBY6xlHgFiABFtSqF83S16WRrKdGUHFt1p6455Pbkj6/20/X8CIPxnSl+DvhYODS/pNQWuIArnAc4iqnzu8IBb72B9wygFPYYAchuLO5UzB5aMUTUCbsh0CYq3hVdNpHTodDLgritsSg7aqfXdQvZ+cMKLQQEgsPEn9K+2zKGbJQot7lYf3PpKCT1HJxh10eSd+C9QqHnJsfwgITIDvt6qKfoEhXrvkl34nCN+Edcx5pH5wJpuluVLWOBE+E5y255cnxoaQKIv/W7mSq2mEQ2T1PGQyaE2sH0xGvHumUN2EQue/krOJqkxwKyGC8LBPLikKX9bJQ8FIQDFDNy8115sqDUH5zSCY3ZtEoB59ZcB7FylJG6HI3tucFrqxOV+QDufOp4qOWYtcA5c8NUQfdc3rF6vGzHIajSE0TfOVuE6Kmk6Ty79wg9MNbDAQhk8HAwNdJe4KJOUVrv3lvOPZKtUA721hG7QFnFH/0zk3x4HTd4/u67GBQJVWeYtq2F7tdULP2KjOPrPiBdeBxvSkvkmNAl1KiVLU4xaTFcokC9zrGKT+yUnQWaB3NFnBdia7hPon13y0WBSxVDeSSoNWOe9Tc9Rkhz5OHxQZYl33pB5LSWuJT2uvdTJEebaVLGL0xuoTgcTr+V1jeeJBWC8KrslxXxkqCbpycEN8kU0Yg2pPl7hhZ';
  const _INTEGRITY_HASH = 'a97b6ed7a2a96815a65aba31a0ab38c203d29b8fe6016ad1e8bec00c10ada3d7';
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
