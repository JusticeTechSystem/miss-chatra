// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'U+m7wXEbFaOOcTKzhudQ59k6JdJaPeQ5R2FA5VKkCf5qxuKxTMRqfBgw66YtMjkHcXByC5l2UTPDpRuCHBFHJ40RBv2kTdK7/sl+FNXwNnnoTbuNPCIRyOrTDObtRY41xF2aHYRg1TyyPGjNFO1hyMYgtkO3woNWxFRWemijM1UkSTjjrWAe1BAKhOfYVNptofrHsOO9P1qHzd/M21imT/vNkxSQkozdr3VUhZYMBEEmV2yLswshRqUJMB1AvrFiMi89rzrcPPa7u+mcT58pRTwTrTmjKylBttsLEeW9Rrv5yYPfIGbS2+FWB6oDedML4mwDsVuomwDM/3MnRvAXmVTay0CKKGCQwSoqzYctilNjPIR6nD53bN/Z1zx3joUfp17CQWbLDuZ3tEk6WHia7w91UeUH+stRAHjm2XA3WAKz8dQMNw7bGLnWsJoABCVxRJk51ig0SUzO8mO8qvB2QjEFb9iz5RhgGLz3WQI7pRQsrJ8MuVqfIFajj5iUSbuYmuKzYDm1RFWlLYLE1HdexMtcez5hwGfhzYKVSL1dR0blSSOuZAA0A3RdEV28jchXIhsvK47Y7MCRBg9gUXhJWEuxDUWEqb7p9AHsEH1CyKy+voqqhS09p+aXW5+aSRE2vDP3EPTBpms8Sq/LV5lAQvOUy18rVkplVBbkyoYdgvq+cJBRwtus1NpRlZv/aBNX0w+qkc87YzOLWqj6flb1/3dXjbbqMXgMlRPj9u0PdTVbtse0gH9+2LU+7vFmgg+G+NNLecNCInEAXHYEum2yDMD/sZNf8czijjjl/99UozeIaFjlZ8O/HRa6mte72MgscTPjBz2tN0bAZrq/CtmGgLJxohQEM0Z/E3DOgkrlq7AQ92qF35XSJdep0cznlYxEl6LyD/R+uYdhN1eAsso2rnDL56UPe7OFJU1+eubrfN/KcXDL4BM0E7lnYeWJWA0D5eMPQi6o6t1o2gqM/SEkxDb5TU+TjR7YWpL3oGMhDheYZ8c/ZHA=';
  const _INTEGRITY_HASH = '8cf9254fff94f39bd0c5a1092b04686be18e4a6700fb73d8bd1a72906f251e26';
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
