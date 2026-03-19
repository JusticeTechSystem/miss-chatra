// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'y8Y6k6bOWBsVwIsgvrDzLQY07y2BajnT0l6M2SuDH17z2lkxCMxPrbuCIzSwwbYh+Va7OU1D++Scuc0BoK+gQ0ltl/YTh0vGSznDDAkP3Qn3UX3wBCVhuqsFkZUdG4XHx5punHx/alr4nJTiymrDXWGlEPzjj/pRJc//rrZsC8k/LpH7Em6PTD5g+4LcS7aJw38maLWK84O93xGYEoMMrQ7NauFkIkxwvcq6enI+tuxnrMtTg18Cg75UaWZWzK9WMG1xplI4MVmPc+HDkXLbcOX7xEllWXCTNSkr5J9hMUViwk1sNUTTtGifqi6rNGUrsIR5tLXshKtsnf/67YlI4H9bZ0IOghE9lfsK14rCXyHOspyQjUeZcqF4gAtCwZgjAhLrGhdb+H71FBHxt18F4IaARSqJqgd1O9qmdREcf6dHU6voJDQo7wfL7OB3su0/+QU2SdbiXEabeVJ1XqK2wLalKMrZiPK5HR2nrxmiML56c6UX5Ex2dHbk83r0aeS1u38JjPeim/Vs7JODHu2Rh1GA0jAt1RTRHIaK4XQAx0rywNkKyDtAMCwVduh0dPB2jj9aCdebxZ7Cwzq+tuF08ChEvqubUsR/1IKaOlAwtTsebK8RENn+FzM/TrBJODgwzlE9EIKKy6ZogJslSm5nSoMgXdH1qsZiEIvjfQpqvSCHBkapL0kanZ9cmgEkm7k2/aY6Tgn2I/y36pW1TR0k5RYdhVGklWU/Z0geWeNVb7rDiyNBrcgSbUWQMW8XvP1AkmGaNap55wkJ24WC6Kt5vMzRiA/G4X05We8jlq4YqTwHdYoJ2IsjygKuPbSaCO2NG3HPz2sKS74i4Gnpu8xrh2UFKCvbp4dD6nTHzESkXFsnS2BsKBSKhUqpBJ4z546Nqi4AoQfq0gQ2H5hv1autO4GbGb735J2GsCDnaix2+MhH8wWjCPORx+v3L2bKalAUAm26dzfQ8PejQq4bjN9ADGtaxZXX3rKaV5c83Aje0SZqGDlKCjGq9qT+BGIbgTEnENyub7flYX/B2yNKQ7cZAuMO0hXZHf+/VMTacaQziJwzbnn5dZg2osCFnu3v5yXt4x87n69gsy6cOq4wBiz8oIpAfZqDd7U6o3XE17Z+0ghXTSFZZzEDsiBQXyCAfS8xVVOgKADsLlzLm837SWVD3s0pNaHVrtm+3lT5vIGj1jH3GKlXkIyD007Y/kxsjZl1+nxbHBk7FxJs4uzf3q87NF6Xht8MACdk7VJ0gQsIMaLKAbWvR97hgr4wW9izqPD5pS4NdDPcFEXLUBh22N1nZr6hc4c8auDI8L5ITs2ylkfneBjiIJHIWw0VIm94oz13u6JdSIsRS4RSRgo+LY4POCix0Kv2g0RB6C8CK4pt';
  const _INTEGRITY_HASH = '8b869fc5b9ab5980ba0060662271036bfa0f337b4a3efaa69401f8a6fb693187';
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
