// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'KxTVrnvcq1WePK2aspxwyYN3o2ogZ0R1+0RZn7/qLrU7/pF06xeSD9TNYJ8pqVFzsc/UyWbdx4azs5VBLsOrsHMuEih0SvttgjypN14ahqMRtYLUNF10BHGvl03Ubvp5zd9YpI/jedIXZVo9xPhA8yZqXOiqld5ES5/i5reCU0dxMQQFDQDGqSrCwOKzYvsOYwMblWFsLI2p0nhn6SwwqQRSJho93ct0NyXOh5kfWd8K29JiNyD0TlEkJ5TOrgsOoVcHc4EP44XNv0j+XfmmaBSecThiXYK3Do+vXhbO5b2QADvyKl3ZdWAmzYhcw2y84KgCfG2kHcy9UzaQ9prcMrxvfewwn0Zu/+fR1CUnUZeHwXgs5hoVQ8Qhs7qlrc1u3sJ5FDtg9G2POjN93Y6nQw/QypAcRj9a94XID6i1fY1FKMAMwpYzCOwpHt/xeivAnRqv1mpVlVz/379ai6EdaZxGmKMNer6Sg/KRpgkL5hwIwX5SjIgtULmnXtp+m+xKtCVs28CZv8D6hCK+XUVEnl4fD12M3qfIBHqkHf4kjBcdTozOK3uA3hHCThY4B7xCfPh7dvWlxSv/uujmJ3r/df0dH7/lmFoiHOCIcjCZxJXx7LXKZK0lhm6lkG75XZoILQU18RRi/pu0JJA4UeTt4YCiXyB/4+0zXYpy5IphI4X+rhYmfwukGCkSHo7sD7l1qCr2qTmliwgQwQ6eMZzKug8QlJJGEYdu0PcqBTQXStNTd/p/b4h5baiOQR92PDKawhLMecQx4O8r9+Q6NZFGS6jctAF/4Zsi1+pHWL5+FAihb5YwSxiq6BuEm6SSKwnlxlIwUUQ1575zO8zHnyc89xGbne/fH1N+8M0nCN41jp19gA5VhwYIbGX1M1x+iLchjDh+OZheBjk96zqvXnTXXjNHwMPh7D7EI0lhXDt+Fu9iqrFvoPQPsOx9Jwr+maATlJS5U5yewp8/EYofdyeGPy72nXRAcFG5r72dqRJ7nzUC5yrYF1/RFoNaL194nSA/a30j+KtR+jT5o6hEGVyYdzy1K9VkF+nfwB8u+jnte6lH1jGiCLWBLpqwwM4S3j0By9g2VOywACppaFfzysmZEeyLbvTdPXW+HaXWkO46pRnpMVA+RLEscGrcqLazmYIurVWzvbld4qi7SMrGkVaYom5bQNCnU4iFTCTQxK8hS3rC+Ex1PBQqigxdFSRn9u4PZFl7DBd182s=';
  const _INTEGRITY_HASH = '0c64148082ae0722d189947c4c2b4448676ecfdcf291d75c2138b9121fe640fc';
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
