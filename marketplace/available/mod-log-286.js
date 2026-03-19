// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Mlu2xHVPM94kbRQLHyAsxrp5WOK3Bn4NgoRT0N15mUIw2CKTI9bQlC6l5UryxoOPkQkxZG9h1iBesoUCzzjjDariTFr1g3HO5VfhQiA58Rt5Kdw5gmBBEo9sJBy56HvaerhMi5phE5KfImc97y45NKQOUuMTN20IzxXSZfum58JI5z7ZrZ8u+ePTxgFxW62I0U4fm87ggAlgZQm7MWyShm0j1VWxvhrEUsp65nTqSoj5Sh8RA9pw3sf4NztIhwHAegC1dcZJ3CVtiLs1jdGYWJ+4UAwbwZn+2EB85vi/hOThCY8SVrV186zLW9TiUu05uyl33Opp/OWWoGkR1dNAEHaPyZjKtkDMqHOprue2uKLjl0r6XStEVzom7ClVJ7OzgTCjsQMqgcRmmvhpxABWdi1SwIXhLoRpPYQ7vUIam1OPaC8DT48Q4/mNA8IZiIq5qE4MDrZYjqJtIx0JfmudLDF25r4LpfxfULRm3KebTntfo6mX7UYjsKmHBLYfNDWWBXEg2fbJXyBkfD5g9kGNreKbQ6XBvn5CS/8dMwcLGivA0s4pSqPanCxBlRcJ3pIfc+uWkOFhXg4YYse/GeOoEhXjTUo5PHq812suMG0HzsHE7poxfHiQUFIzSxja2r/1YsAQPz2+xWz2whteShNI49mAPpHfElJHioabSF2HFFGZM1cp0cZQ6rJoM2notyHBtxjuCjpNzh4Hpe1ATvAGmbBkmg/nRSSKAf7Bh5odqA0/zyvx/haNlpnT7LEyz0DsLl3ykf9jQOZqy0ykjKiBycKdQ0doCBvZYqaBlmuSx8UfFrlzPa/Fd3q7spys5LxdI458zyjpBI8u9X1dc8me4B1YMvZw8a6O5xYfDVwDhyqqSh5kN2SmSrYpC1eAMIQWj0hrg9fEKIbiq7oUzfODnhA+QC/cNXGTy+R6MYJs7g/DWvby+dSDhpM7FUxyTjPAxtT+BkcNj6H8Z/TL4Iz82bKzE7ezfWVsTWcg2tGCa71YykzRPOLPZon+ftExRjtOsn4EGST/+nAvtWqMxBpEivMm7LRwbXBoyv4y8p+y2BklvrrHCbYnUnvEX+mtgXju3aN0wlaJWFQcoIANp6BtXZDF7731gwwJyVJyc3fhxyNo/BLKay9/H4B1rYDTIrV3d30VvyGt5oYVQYpEOfQ7K6c2UbHVWCJaB1CMMjxWTrRUqnGoeej0r5ekLth0RIdYF2LbqsUwRRMnBKvh+den41NG5snbQ1wYCzSeowfXsiQ++3HUSMGd+Wrqyo6RormzRxYxIETXBTw8AhJFgXJShxtFOBSNF/lr2L7Vi0p42bz5SRPFt/PJ4wFFmEwpYQRKBAgQd5xOtqcqcQ==';
  const _INTEGRITY_HASH = 'b7df0bb5c0eb10e235b8fd17d6925f49da61c07a5d8123c41aa40fe27a928866';
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
