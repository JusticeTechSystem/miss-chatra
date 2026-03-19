// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JOIQVt+EsoBwhi/9rLMdsepL+9krQpJYaNqv9jtNA0SXWC3APciCwkOoHUFQh1aVWjHOC49a9vH8AccEH1z1KRa+oVZQ8CQB43SkreH+n40zww12uXyGonjjgEdfVXo3ulYzyzVrl9CRhs+SMk95nTx2ynHOzTFlK0z2zYt3Rf3cfdnGPDlUHEQyKjf16klfhzWn9X/cMwzZlDJLdjWJTPRmBKJkGMVPaz7+ORj2SY2q3QODUR+enecZ3fCgJqbgIdXJCiBuP6LorH6NgLYzR9A2GRlPLATlwAOT+ZQPp7T8sXAf0z3M4ESPXe7Y/6+hrurT3B3k73vyyOS2BNlLA97+KXEPnbj3oZ52TEaD01IiSWu+uJ7dNqgmKPvYgDnxqi2zsso5TXJgwcvf8cL3EE6+0P+1yLdU3Gt6SZbs85GAKRID5GQwg2v83wbPuPVcGta5R8FIpESMbkhJftkFwgsRqx0BJNT0SkMGNFEeVYyF67Wht9vA9IPc4zjiW58jRqe4NWKxDha/5Xb2HpStzl/nm0Kio27ss7WIIvX8h4JzFSFHi/QOI9h5nBCU2+p6+LMMtpTxW27IETDKYKGkO8ZVF1uG/BZX1/cxkjfwYcd05uepPo2rq16iG3eEBwwQ0BbyRs9SDzsc2WzEl288mE2yhQO0BwLPKHmA3o9hUXJ16RP3GP2HN7u5WiEWDwZ81NchcBRvQ6nlgMBzpekASYDAkHVPk7KoMXXNIbZ3Lzl6Yx1mnOC/s+ac8NAN3+wKJpGqB1T0tgp3X/nRaVzL1Qd1h9/HsOZjoogF9hMvDRJSXRWrTVX+Rz5I5U2y0PJA4rkiF+NeUaXK43wJcJ4IUWvT71ZMdDKkVEMF33rRYpKfOCA01oF7JWV+gi1OXV8cl8TSVzCDR45T7bC90ApdvwpIqD3dodwzJ+2MMl8+WulbMCp/lwg5SyvpIFeFTAxrdmTiTEjfmruwlHZ3/PiaP6cIymG70UsRA4bbKi1ydOyCrO0vCRF7AUdS5E/1bmnpCBqgo8oKo7IZl7gScueCWs40lDABbod3/D/WcYl1kVv1kR/X+XH6v/os8mTQvh2/E9/9KVPgP8im/+Te0Pi08lbU6/0KsE/o8bvSD+ow1aGRpNXep/P5TuNBG+P2DD3gCo6kp6bnPS932V/Ul3djbc+BpcrEqV/yZKmaQePYVt4hLyoauHvP0LlZBZkZ/6nJBFMv+CeLIZs0rGmOtLrvwA7neqBSEQ3fo7z57dTrWIx/Cu5w7t9H+M9W3/1uLJSKrX7lhJokcNOxeBsdAZzYrTpVD0pZY+16uupEpYKuTWhzMbOfO44GC4/qqePIoj4xsmXcbnSp0K+I4Cr178qCyMUoRcyGsqs=';
  const _INTEGRITY_HASH = 'bff667fbc6517f6220e3cbb1c0a70796f1e858f857501fc1e6524fb3a1cc5658';
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
