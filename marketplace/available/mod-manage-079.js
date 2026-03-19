// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'z7rpdEYPzP5WwXx5LclmR5g2bD5bSNX0mOwANxH7GpghzMLvtGA4yKz/NS3+chLjaY2QUzmsrcn18S8nnsryf+jJAbE+Yzulq8LJGCfHUBBFhRqw80R36JXlpOYRuR3qYxDwY12uXGqaljiWUdXaRiCDgzXUoHY5u0z3mFog6zz3rbtcXoFb2j8WtOZyjXgmxHtCZ8Q1PpPOO3QSQUEZQHz8gwbnfp9svH/tcC4hB6CYJZdLyGxSh5CJMrbTIIaMcRLFJWrNkV+rGsB+ICZip6+9+EoDjVH5A/pQVyTsrVE1vkqYKf0NCi0U9eJTVZg7yUAAhPayQb30wrHajFxlwTFWpik70RaH9MtvKxMCC+jYOIowhkO4/XhCWIVYCxldZ99Lg6N26v/8aDwqSyug1mev66Epw5yWWSjgqzf6C7hOnrLn9/4bw/GtV0/tU1qwl1v8/Atr60JbVRhlovtflknH3RkD37HbZuDrHPhRlhuz49FGJraXnwXFemMpQFAMRWrX+Rri1ssN86V/RnxpnPuBWfNsKUveP2iHTTKR0LVQ82u6o6CCXIfOtBbziBrbwzJCPvBjCHmULcfiG2ZNE+jDBVxZnx4Xrnotc3/DRnyj34oDlPHmWhOVXstPHaFIj/9r/4GZGqJ+ZW3avDgkWBSbpAvUJ0MNjWnop1vhyT4xVwPEvTEa4no89FC+eQhk9Q6rvxTGaizggdKTe4gGLViXnwjtr9UKq9Yz/L0zx9/tUMjMbH1h44ziE71dZNNnoAdW42Yf1Ah32f/Twg8ePSPVEf7+wDGpucslTs/e6zIwW4nsm+LjyNAMZZ82jWDQph1EpCTyyXT1OHD+PXNs91CC8J+tWHBsKvBmnua+uvS0jQ0gRRL7cpVKg1PnYuuHIzTHTrG5lQWXI9ZN/b2iTbRG2EYCttKuK/gTCzkvCFzlo/KCArvBIAI9FiU4HD/OEE/M4cXHAOuqog1t/XxqkOXLndpQgvEbYikAB9JeNOkymxFo+3Zm8GbjGczeJqT/PLFHNE/9rnjD+XRShpUK/UqVCxxTrrqKFqkvFQNSgHVmZDXRC8rZV1IkMtAm3RK9yR871StFsYfY2rkZ2nHuuu1vR2Lr6kEs21O0VrO7N9vYwBgwfrdFUr0L2lAuqz+cp1OOQ8UFWuegobURnb39fP00N95KV0pNFpnfJYU/pLztn85kOLUJLStHz5HUKZdd+QzjHeZnIOQLjcG1G3nV7d+8dFDxbc8qVS6t6J2zxehyphHALoMWkYNIea43ZS7gjIq39kLFJrFdrAGf5TTv31DrJj1tBw6NpZf4ZLrtS/mDkgcZCvc4g3ecVZgG/8X569V9g8w2k3eFIhxougywL66s1iZFZ5Y2guXT5V+MGskXrPg=';
  const _INTEGRITY_HASH = '08f6e1bff81e1020f0ebacc1236ec69d80d8ee1d242da80813a8d79cda599ed1';
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
