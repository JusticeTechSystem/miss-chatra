// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yg7OY+5yCZwDWeRXA6oXnVoRkO8yV6xZ0aKoxzB+I9PAbfs36/CUypMCsk1CjQFlxbProi2nauQO1R0TXAeMKe8/UI1SrQu42GegCeMDOnVuJeYMw68XsP2PLiU8VZZOnhmHrSW1f0ePa8WuQt4HZxRc0GZMGhj1A3knsXJ4NFNFprXbAMWD0qA0CS6WaYzvdB9P/VBp+cWv9dVFpraxm7sriYFHs02u02rnE2Sq3w1vzFZu4w5gImGO98+cTJDObaWyJYASdNfH5FJVySwtGc0xOBLhW+1PHb3Gd3E1fp0WyNimZupS3Td7NJwiqWy81D/uIW3DQKM7XhGq+T031JL6ERPzBJuOL80gZNuK7BZ0jVtbWJF/uMAZLUyArD4dgkp2WEs5p4Y4EAUOTlh7SMsujZg28k74q/vVF7+zWcCPzrkwNf4RrPt/tenx5Bij+Lt7jlavEI//KNgQUE575U/SsnWuBYIpnpAMAbHytBqEZjYtY1Gb63nSyQQSy9NVZXM4CadOKEkCVN5ORGiiyEv2A/WKRc5UI3/o18NFrILSd5shFr5qsRfgmz1p44RlGckBMVCM3xMR9anZea0hgGKvGEcMdu1hs2e3RRgIoSoQhIU5wJFSsvPryZPJzHfsOpd01W+OS7oQLZ5R4iGusTLNIUPeqjUUhnlXfpkcdK91mwFhtN+zymzzCwzLAWHxxs5CA2YPodpefrBZzIv+Br8cwQ8iJinGlDYXl3NX+8arjt9YUyl+ByAHDZE3/NCN+baaF0gZ4z2j7V27xnYMtFmxH0umNQ/uTxc9hlkHsdw+SRtExxvT/NR1ghemVw8wZGum1XTaq8WjLoBiC9NyU+UUs9jLeHmkxPVjG6IGSUv4nONdFDA5oRBjgW/27QAQHkUSQ88+R2FaRaKpQI6p2YWl4m4aYe3GhrX6beS9rvKJf4kYEolEOy4Ndg+pzpN3CLofsuRBqk9tj2mzNH/kCuwC3HM/IuwRh4NX5YQZwhm6snc=';
  const _INTEGRITY_HASH = 'f51b5864412ccf83e75f52bfc50e275a576ade4a3a8216dbcbf2743a1043832b';
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
