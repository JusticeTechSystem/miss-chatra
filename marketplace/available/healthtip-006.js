// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WFwAqHkQpWRhkvlQxyKwFQ0Ngdz17QD0p7lP6BghuRCZy/9EahIYTFfLRH+8s2z+HIwfnV5IpZ1JG60rvERAh+WbhSP3CDKcEswQYY19ypsEL2RmkL/A6akyZTT1/gF+AR0UIPN+YlrIidk6vFBXlmxA4gAsQv9m+RjD1LUVy0s5aCp0JHb8DPSTHvDSw0UYRu09dr8IzPmXvATzVmokPB5jGEtBkzDo1asd8a9054XcN8oid8Vqnlb1XIx6TFYd25Wdp5QoJ4Rz91KlpcfxV7hhyXNd3eHMd9DBuyO7H4vmePN1TY5BEY+nQsE9VuT8qy52fY50HgP5wNZST7W3fYeBX8+HUGaqYinineX+Plu96zWaO9DHGQRnh3BrV3jY+brDfXg7c0ecPvr5RYPoQxj8Egh50MZEOdyh00NYlBdzb9R4aGl77ijVysUUtvcEjCkxwOjn1p5J6w2LBRqMqbHCPL3rmGDQpS37e7oyqfwx2R5GFs5XtPngoO1187/3vEJq5n6LGfHmPUDcbbNZVg+/CHyPaWsBcqybrTrhyizu+dU/3L8/voq/0WAk8GRTtt1hWqgCmuSn2ZyUv1TVVHSqvvn50NfKn3ZWYjvDwmPdYYh2+qYA8tuERsFaGg1T4MydWPKBWfpy+B6HoWVgoxMB2zlUPmTWdUd+pAi8rUHNTrJDSNR2s4Zi5l3djrHBNFwA6Z8Onyte5HpzK0d9SlsC8lQ7GrKGG+gcU/bXBcWOh2N8bFgUd4ZeHQptMmG10HGE6H9VHcsf82oa3sMadmekVAvvHyTdL2H0s6Pw3nPhzvWCGMxVZh31dPKkDgQSthQyBWaCsqBucNzNhHHZa1wZrCIHMi59Pdu+WNXhAyBiW+S/HAg4U3fo6o5iRGLg3rO3GTb9DFBR8qdyhSt9i1oQT08D71oh6PLqfpjUjhH4L52EuJyXig==';
  const _INTEGRITY_HASH = '5309d830f42a4d16a6c069b2475ff1db934eb3db3779ad44a69b6f97adbebb69';
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
