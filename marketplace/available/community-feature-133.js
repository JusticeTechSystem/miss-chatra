// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Bw0TGsJhJPYqn4qjjsoj5E9D7jCZpO3TyeWlzkGMRhhZpxgmxtmpCqeCeYFuoz2e6EwqCwrUsh+nUmRp8dkAEmzZTP73u9/Bn+w6Nyw+oD+PGVt6TgIISwZXahDA4hphZt5N/ha4vulRvBsnJtzL0LYzEngmVrxDtultGjeiwoG8LdKAm9YT/UfJM3PUVCzmqlJH6eh4Jvl8DXIJ6hpA+k45MxQLF32uWm5Hqg+4osGU5WthW0tmw2ApC4ggxX0FPVQTuLoIVY3Mc7xyJxjiWw7rO9e6zqvEwltK2YuNukfWKbzBE5Wf7KVibOPCdoHunV5U4POPl5iGdvMQ3PCBW1i066IW04EZuxhTkICzPq9Nx4U/vXFux5bzP0eCpL/g35fqy2PEpZVvgkipyKkHbiER7FevnSR6+z1G6QUyE7nygrjJfmYWaz+chft1GsNtiZXoDgWP1FnzGPebAgbnAGaaqdKDjtNVrsPbQeMCO5bf+jpGBfmTIXQLS6ggZbsKP1N7ja/qxoo5jvKMETBMLsV8DR61WdJCQ35XPpA/txAbb6Fn2o02ZcjBcUsUM6yqnWqz3+P0KoEtSzBpuh1biw603tbP2DIZnxD89cOnztdLEuriec+6+mrExp368VjUEXX1NHimmID71ltk26FEwkNFYAYnhM1NTqvmVvyHaBClcLTAfRWbwvNhCJxLdgDqR1aCcCyKojt09rDT51gHqEdNSdABAis8dVDx0gs=';
  const _INTEGRITY_HASH = 'b8bbdb4eb35ce638cf2a10efb1ab400463c61f3f87eb68d2b970f43457e64f33';
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
