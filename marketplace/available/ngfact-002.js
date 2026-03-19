// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'cneKNe+SEtDXzTSH70wP5rCQQbM8VZmBf2cdmVTk+g52kPQVPQ5nFYrZf/16ADYPmH7PSiWMNtBgQqDZqdBIgBUpJK74KWgoYtUcR+uG5+0Uon4ePzt7cNuo5EO3SIVE5Gs18OewpcMKakNH2XorSYpDAGnmwCN02Z97oN9dSxAx4vX3wSkTUMykx12zQ2IRyUZ/99h1Vylqyfkyx5bdJBF+659opDggr7ZIORefshUop1yCTmhnK4/bMqmSKg1zYW4qOJNWJOGVjXlF47ucUx3Baz0TBz5Y54ImU1BeU0g8csUut+ZibCSR9CjjOtSeh9ibkCjTxVA9UaoxeyvZnmcqACyMQ3KKC+N3lsPhZlXSBLORxbIwDt/7f03JdIDNngCZ7rCUXLrQ4wF9gyzP2RRM/fn5ix4kxIlE+vdDRmY3qsnyLV1OdVW4zyXbS32+2GASOCtshDjsVJDpl2Ou1QNFYqI26pbpm2+v+ls1QXIDxHGav8AxFLLyYO92Yzr8p3jqiDFYYd4a+Jo7zBhQrFv6cVBcJQ4zuA7h/DnGy62SuVFhnqxXJXEMRW4mPkUvDkKp0pCdeeQnLkvKPTeAUqudIKp1h5u9ZT/xJQ3l+gSvfk4kGKg99xjYAN6kDzlwUYhQy+n/i7TSBAUF3eNHmFANaDUovRulaIYCn63pYgCYQAbASuaduute+v1yL1jz35/W';
  const _INTEGRITY_HASH = '3ea3954aee949e7e302e64d0421d88a37a102dbc36e7001d8e3334c57b9bfb0a';
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
