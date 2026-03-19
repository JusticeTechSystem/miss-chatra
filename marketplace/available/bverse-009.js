// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UyQcvYYmElXDGV13vc3bOPwbcUVhQgO/Mk4TC84DODhBfQ/Dfg3mIN/bB5BIq0Sok4oYnu7BLjCSyEUj1b1GMqzlV2CT94frehRuD3ql0k8M9fE8IsWRxD6ut2v7UIb84yd/lCSgFNH/lRAj+bQGqEKz4D4T0560mv4ZoBeaYF8hl53XPt7JwDR2b/hNiM/bEjfGSSqOQH3KpDusDFAPH9pCDMtuhiNIiS2lydPtrOSBBSB+95vZqbCNKDLXylGrLQCKE/3mrbTAcVALt+6HqTl7t7boWHaVH8/U0gpFD0ZPnVj63CUdSm6Hi4DzuoPvapqGWRX0ZSPRjXW0KnGKmD6b5hW3Q+bUbIh/s3N/ohL2ZuPYlNskgfGJfB2KFT24YAbYngM6FT4YBBNDGEXEsHJQ0RwOQzSTYWLcBU7xtZ2mFrQiIZT6f4iFgP1XCWF470yM6hJ6NFlOqx8GmUi+7myLQN6Et3auEksZ+nfRqECItAQKdnvQg8aEAFzo3ZEDKN1tx3p15HgNpar0cJOPCiYcEGN0o5FghKBYA8Nx5VEDWwDDbZMzRXd5BPWsWcwuRJW7wiMbnlmeUz+K9ewjt0TrvTo7rpNZQo7QKk618h53FkNJ+vmd0OeR/I3WrOPZeQbmXlyWKrFMBZ5IxtqWwG50jVVyyiEDY+mUJHAMPP0TSt0MZD01juypqqrtXnkLSUr6A/FZxNTBdX3A/gQv';
  const _INTEGRITY_HASH = '22508adac4de38aecfee1e4c72f6956d4920339477aba29b318ef705027f8b4d';
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
