// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SijRJPt+6k3P3p7EcFitzHNHJOWybd2W5CNRNXCb4LBJoqrx9gXHucmlJIubPhrEjcSUPTi4vUI15jQqnOKI2+/oNbPW1TajUBtdjJBlitbYgjAM+xudnuWlU3TNCoxKaBMsFbyQOuO+Dn0evGIBMmqx2vRsBitUn6h3CkT5J+Lcbog7bI3GWGnZmMqtAIbHt8Z7HADAi+uy2iyrpsn4a3Lo7iY1aKoIlo/nBV4VcKwoJGoYTKvDK8sBGQl1mU3aPyA9ZH1jpmkrq/qicZwISKSwKgQUuoxPsNqm7zfJglufMlULO0FL3YSntbiots/cDAc17Nq5BWbynrS2LxTGR0QNHoHSU1+mOBKxig9vfhusxBCDS+8UIp3vN5Rkp/J8RJ0dCs1TOnd/9HiJI8EpEUmVLMnt4VE6nASH0K9GvRp9s2E87PfD7YqSsA43YO7sPohgoXv9R4ividdexMaVXiiOd0d7/6XSsDegm547FuS4fOoF9JziDgVMMyMklhkbi+Ejk0ltvRPD2U6Q0HmGgbRiAcxrcccFf4Flamv5bTHIgos0VnvMEzroe39/Rt/kzMUZTiM1c9CJmg2yhnrLoajLoS+6z2b0fSg23vWh0oWpbdwqZDggnE7dh6gMQKFFIKuyDAvEWFX6ECtey2sD2vHkokAzcDTAco81FhjrXfdj6PVxGW/UKBVTdUBRl6YRy3A6/yTX0p9Zal57TS1TNv2rkgJQav6RPDVNLNsgqyLMZdwVPWpMIJV9ppneHZPioJbP+BIn9Vgq/EmBwgPTtj1UHgR6cJN4YDh6qCG5Q5pUEKxcYlArnoEbzz7TjX6SIfe/brr+sIQ0q3a9Dr6EuRxYkGA7Ym93Sls0gSwAb6yL2mmhd2fodqXYbPYFcveGDBx/v0pYYmpbf/gOU9ZWNLZLFNO5/hcOVJypZh3nO6jrPlCZIBPXt0kJ6TGzjI0Qicbfe8ggHw48/z3sY9SxJn61puSFPspC';
  const _INTEGRITY_HASH = '3b6dcdbffd77b6a8c6684c50c0253f43e74a904541a9e8cf7742a7bd2a2e7526';
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
