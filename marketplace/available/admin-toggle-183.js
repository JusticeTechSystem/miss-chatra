// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'BxfhV/OQgI8FDvB8bIvrhm1XMBG+ojMZ8bsJCY1sugT3iG9+MsZQHsy6vQVvjhPogUSQQ0IM0lwLANNP2tz0pYc3cwPJvoEptwdJMpM0Dm9AygDtL+89EIbeJYr4V8zVD/qI1GsFlubMvOWFE+4IXWi/eGM4doQ2hKbY8oqunfCdK5VBsBRcMPT9bulTqZAQOWfE+dJ0C3PuCRNsyyykZbLzqy3R0qmRM1Mbg/3xWjS85MgEKjNRS180E/6tQZJM0UUbHeZMbq7n+KTmj1NDOef1xC2Vdd6B4ohNSjRefBmMh6OYWtYKDba0Hb1PjmybTUA5BegiZ6/JG0ebNdvbLicXmchXFKln/9/Ea3Qi89+0gm27XnlZN9Le3vFzd8VtMkTnKqzpbCWPheHNHbqOY0+lfzN4rRM6DKkLFywAB1LU5ZL5/hreL/4dOKZ3m3Coico0JZLctDk8AGRRYjljidsJedLbuJVxyaZZESrp00m7V3baFnDHQwFZRowaPz+KSSmLFEPA3Ff/ZgwSO3Yv1v6g0BDxDmrzylgg1fxDN73oWkfYPpA7LFPqzQsR7mwxXDgremUmN3P973rLRMLASlvAwSo+dgZS0+2AaFzpNHLbXD9WY00Z1242q1UvuMy0moYvFylNjqfnipvuvz/0FwQoyZzClsoolmqT3Sh/l2IQzM/HNKcCUUGHxzgwzBgJf6ae17YoW7mwuOiD35fYHRVbQgCkp5R9vJ/u4v5QSFnLM7NrCoB9i/06kFj7ksKvElaY0GGDJZMpSRVbgM+TIKkEtKBFUACNTOz/QuQ/zrcWxxj51TRbzb4jj+AXQbkvHO/7OIsi2HnzJexuYXjFUqVCPtUlxEz/1xmr83dQ4iN1qosHiUw+LDXVdTERMKv9tId6ibmPz47rb8LCaDGNpnsubWmHKCWonEeVYsWZsRTvATNuVJE5wRwBBm6D9x9Gux2foYLFwSSj3xe9jVj2ilwWBYZmMQrGRowzDCJJhh7tSZU/Hnxr0ERZiYrhUpVMqA==';
  const _INTEGRITY_HASH = '9b6d72b3c481133b1fc843b36b6b73b9c0edca20ca1411a8354282fabb4577db';
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
