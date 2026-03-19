// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Zwmpfl3j/zYisqhzO1z2/1SB0f3c1DdY+xD5q2QnHC6h+ET+IQS8eMsIkr96J9abIJtGz2Bn/1qP43FKOnB+q6rNBrfZUfNcereuDchvpJChvLFMU/gddjTLESOiAtjoU1ljsPP/9zTgAqdLocm68FYkd+JEGvcoowNOl43QHbjVpiE4xCfvMXBWcM1n9+8XHBTrLXA6JZ5e23GhK4c8f+SPtceRH+x0ek2maz0VZjgcWnBeIJrtBjE2N1fNNy6SAB8Mbr6clPdEQgt23mWc3joB6ul+FxNIF7uOp88Qv1AwiLU03oLNyuKjZDv7QIBT7FQZJU62R7xETVPK0HIubARxaBuMGDMZUtMuuUyiwKpyomsV/m5JhfipdQ6VAuApaGkyT9ewOVLqXqsqfR2IdWJm1sMNO23zgWhwCgZBrSggtB8tV1ZmoFASHixq1xCMN44jHTWL2y7Y7gCOY7bciS6RrfySun6TbBpRNvF73CqQfN75yxboGOOdIzk2/7IzGgMdBhgH9LTqKgyvV3u8hoYmapA6fyWntCQI2k2UtDts6tvQxqU4m1wqbqhVcyP17ZxM/NZL2a9DeK5dXdEblN7txiapyCNvm3RhpBFLVDGdlfuBLDDNVHWD4N84nrar1mas0OCUAIiGBkHWzQKfpyB4aBl6z6rZNC8Ayjn6CVgUijnDfC7eeyIL+pSC7KqEK3OWgvDETHxm4ykwG3PnX7kTTni648Fq5V0jMhIh0A==';
  const _INTEGRITY_HASH = '8ba2eba580f5c3887acb25e37cd5c71ab0f717159620ad9f53c991eb65043e03';
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
