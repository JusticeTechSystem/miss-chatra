// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'WRylfcKDLJJL1IgTrtr6mREVNPq3Rur6Yy2WwJAHR8gNKwJTd0IB1LmRjx3bF6rYAWAz0jA3YE24t6PZzikPHgmCdk6L9n+riFb0fyejDat4j3hmkIAevmcXvGTO7n/UJBrlcqb8pzpPGNp4xmpWsjB5S9XBcD9gdxhjbVjdnV78pbYGKY+gd2e6apFqvUXsr2ukHWfL2DB45QHQ438NGCA4I3+558XGnCIWYOInyjDnvXA9ACFTiRD2fHR8B3uT8czTGOMil272XNiQWK0l6un5ypkQZWzYd/8EZY9fUes1aIFDoDAJYUR3Hqj15yTe9CQEXx7zGpA83LSfjTG4IeSDpGkTDhlY1OjeuXRHbaYHrHE0qNbTXtB8C5D3rMqoZVJ5NyOCy/hvTCeiqzFglIUGAkd/b3y7W6aUhO2xaLOGP5aBKO+btza2NSYwtGCd0nfveowoghEvsKdX0gp0+9xaqGoMHutlB/8i7rwS38pz+1/jGp5HqsB7HGBveQPTWWA5tLEwgJH5rHgdgJYoyGc+Q6EA+FlTr74BFq64re7V0oQS/2Q/wU9ghy1aCzBpqhaltoIZhwrkPluycm9coISU+O2UEyCTp919zuCOiFoDW/PSY3JprHRD+YluZAsn6wB67fKb/JQ+ysszpME+3Rvanueh/buphq//pqrypTZ4hst7lBgdwQmkP34x6tAXmuqwHae5eWvMpV4LnKb8QbIz/weOA0HTGA==';
  const _INTEGRITY_HASH = '786756313502d7504c90d1b05a76b280088aa7bac7f132bdb1c4051228d195a3';
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
