// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'D/R9nZWH/5ubV0xL4bSxUEK/kAGM1Fa8LmwqTZ1m0L7RgBuoQYE203KWsma5JgcQqNp7ObpAvj3eZuvanmMV1bRuizSp9YnDZeWZYpTxRSAXADv4aYZ7Q7/Vj8IEdFXnN8brTzv55d3wgY8WGTC/mSR0Sz6Cgp26h4/S68mkpF3Dus2dPL2LT36iMk6/NbevRjbkEm6ms3U8RUoxA7Py3RbYMBA+9XkRDtQIX/QXQxvA0eEl4NoHR2TkO2rnengveSqM7TPm3gH0j0w7S0KgPRzZoGVu826oajWGaxLd/MOo/W1mkQfEWRZVS+LgmffjE11cQ1Z9qUUHT7AbWiL/gt+qP9zuUXpMjjXGk2iGT33yBDRLyK4g0ubkskoK3Yw8xpfBlzZ3gObk3Olfaai12PGzrbFkHm6zOtdRxJurwym57YXRfpsl24pnLlZUsw7bgZsoDiilrxnwZ9woWa3ne3rbFbfJ5RqbrOs/6aKBuMLJAXyrE+RgOe8HTUwFvBsQblSXFqLDmskxRMIuSrKLgkNsjMuFniJbf52Zq/+EQiKiN2YN33/kOerhEbYcNNXoIG84d+E/mQWnOAzzemzEkn2Ds3+U+8f0OuN/58Ln2CLR9HlQNKK66c0WIW5ejNRXaw4tqAM429QqncGuY+NbiooFsgGGG6zyJqv8KwiV5j4vZCKTR3NjzcdIpn+/FhQ9xaU5gMLXkdkEtkgY/t1/ZG7ya0I=';
  const _INTEGRITY_HASH = '41dba0176e9c8b665fd620457b8e4c8db25fa74dfe82be80a0f0bb64a025298f';
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
