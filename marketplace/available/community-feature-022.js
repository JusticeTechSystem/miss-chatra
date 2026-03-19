// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eEFVjzmBNyOVSdgggdSFZax3UXH5BxY50moktIzhKkI98kd65vTPmcKZQOu4yV0erSJxB6hzYP/rSrC4gbm3QrzRW/0QJ61Q8P9ICCks7k+YXiFT+F7cIJzMLxXQbIzza8icWUUpWr73Jt60dT2tLgs2yyVG3YbZenoN1S4/Y704xeXKYLUpUwi1GXAWtJVQqKPp7fgmGh7GkFWcylNAzxmF1S90XE+sT6dGUitson9fbhENm2jpXJP2j1pq1k3TlGJA1WapJcJQBQUpdrueuW6VH5nrWmoRdNfXIoDSylTAnIZ+zgU1FcoivMsNINKsA2YC1GBb73jZJHLQQ8GWhGokNPHTPgYUHclaO0i6OQ3exstBQ/bRMmJifug9uRAFDm9gC//z1lslB1BbSKkjyVON/Sw9kcK7OXuDe4HYwCucMqsodzR3Z9uQEcoN783Ol4ib8O49Tq2btos6sWcPNmp15YVV4T7ueHyvsYe1dKf4J9zxVA1Z06GozpJx5QO9N3W2umTa4SrsOKTwRLxXtF0AgaWj7Z1cDPxA0yOPwwExuPQzem0nZq0/W9nfaInF2R8V+xHTCb1/HfcMrCjgE7dFQm4Ku1hdkpVTR1ng2Wsus9FZJw0rh5DrQvKus2WjSN7EJog4VtVNClMfMOlWMHK8GIToxLV3G2NQUnmv9FVK24YB4oHUQhT3GG4OQX3Kd4IosTTXjFjmrowyxdBCzl9YtQH86qPB3DVfv2PSPQ==';
  const _INTEGRITY_HASH = '3c8fd6a13497b3142bdb277122880a7b32a17b9c6e3c9690b7c06aed242bb3cc';
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
