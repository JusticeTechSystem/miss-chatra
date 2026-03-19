// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8YyHjUieYoCJB6WfYnheDMsjpiK2jilhPA7DoqzshL3lzhWBsWsoO+3blYCLVYQRxCwi90JRn9vCYrCo7tZ6CfLkVrgf4Wricw69sx1vLpjgS9lS2WCB1NosnWy4t4xncyXhzd0dFM30W6MO+zfaJ1FfxH32yFBO5Ga8J5xH1mRMFJZU5cDVm1396ZRuONfzQUpMRwCTlK+ITYvjItcSPkqIMmQMf/wB0oA0VTKNbikkyG2mEPj1cu6ihFk2LoulD0k17xchtJENEvepe4boGPWSKOp1H/wfzbPeInQcuXNx/7d+1LljmuU8teD8UvC1kfwVlkiS6J619CrmomTleL64sV/cJb5yx+UguvST9/D6GekT+o4F805pNWlOK/XV/DdgnX1lm//W+ri5YsUXFM3TtqLHN/LFPkHezBxn3YdhAhjX35EKEw+YVJyYpOEMymp8hJv81MrR1lx+BEFGHbPLOge6KieLbTpt6I68quXUVMbmydPZN3kZbcK0eWYx/c31rrZSyDlfhPTtGm+uoGnB1muJz7BcK0CeXBpdTfY14HuYYLzyIsTDVOwj1Ks4n1yZ4q4eWmp/ENavusgMr03DnJJdmOIsW56s995wQOXuEkDyVdgVfJs5oolcrncFtu9aTAuzc9gZAuNB54cBz8Sm3KWJad1bXvMyIDwa2/4lTA4mNHceZibZC21ALvtrYw1H6LJ+9tN1Na39WG9kFDkjivbl9dzA3I/F/d/KyAaJPcIhWOVLsmdmWRZdi9famv5eUlfyGy+KfkHputGkstMgD/v2/fPHg9sa6bsowtC7HSfHkWxGOhw8kn9e5EnYbiwLG9ax2xt1yMPARMCpdUu5yITCIQEJP9JLV5oX9wyGpn0Nd6pb3nDeLonRNoEA9NztStycS1eXxUVlUT4rwwax9Eal5/cADCj0QhSYUY36dTn7A9Q2P39mH9aDBTUM+7jOUc+IUww/A2Hfx4kSPlduAGxJVBIl8neFfsyGQdyeg6I+WbnLoyPg';
  const _INTEGRITY_HASH = 'fb60dc580905eaa0e4b2f2ea30fe2ea6bd4eb2ff4b4c7dbf45a984c855a7263f';
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
