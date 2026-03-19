// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/m3DHuDWDQ/RaEPohI+Xd7zdxW05JTXL7F34ATZkYs5UqSasE/lHS3bgwTXlJi8f430dY+xh2HRr+Aa3W16O5CPr/wM9nPnt5lokZNFMSKVkDjbpS/yj6yWG7BqOusZrbNbZRYDmiqoV2iTbwhvQYIMagHgHqPgPLDiNo7KQV1GJ0pvim313S95qNYwWYByZyiUOpTan+PFVPlYlJ4MsOIP9CyVsyWp4itr4ZMblaxhaL0QmB4YG6C+TvGlHVcvaBwXWEqHrf2DAnLMS7C7yYeMPoDPaJa1ZXrH5l8QUEGzPEsWxXjPRG4rlAs/DgWvOhQgy3Pd6CtATaONtfEwWxo9siHFMjW7q4G1lsJUZ8L4HqGqREs6T8GbU0rQ1O+K+2svTVkve85OP/ihvRSxoxC5N13zOXI18fLnBYA62VX/qWMauDr6Zdg528XZ5Kl+LNeaeAH9VYn7XPOpSovy7gLPt9VNzlN4Z7vM6QlBwchxRSyaBS+XQ7cnWTIPlS4kkWUaji2xQoB+QibOZcJ917bfxzamMRvbroEgMyCFfNa8/cPfJ/JXgeEm7941hm9QNnr0eFri0D/CiNfMkW25tpRzyfA70hu5IyT9WM4cJakQHJIK6SbD1Dde5S906CYntrmJiwQl5HhLcIvQKSwRR9BruwhumuqPp';
  const _INTEGRITY_HASH = '0d86fa964566316230af932bbc8e5b0fa9094203116e77a495e0a093bff7a18d';
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
