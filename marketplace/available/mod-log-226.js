// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '46u+OpJbEhwBu1ixuiCDfGMY27eWt4y5UbcFiuYgV1MC+gHdDxSO7i4ooUi6yTCMwj4KGFRpwLfwg4+mXTlhom6U28TR2j/FEbaU95L0sruoICABpV6AI9kPcBx0IVjtz5LPmEQpxR4vh/eTr5xJohBxpM052haxtOwUpy45TwLyXcP61HRkNkShGJ/XuzXKwpoiB1UUcC+CEbq7lPPeuHZw9VtBmp7KJvzLBdBkPGoGWhAsmReLwBvZY9QkRLNyr3xSEEBa1svZzOkybZ9F9Jc+NiWB1gDUd73FRk9SC4pL+cgQSUCIOFTG3z/+AbwOwqhLdNgGSqYthzl1ASsI0cgRJYxefoes3844RJaH5TjbKEvyveZT6Tvu20vj+oz6YR13+r9XbxS++lxAe+kNA4gT8+pB4wuQAGgJ58VCLtanQ5fQS1x9YZ8xQhgzkkq/b8FMuVKhxCU8SagP44mHQdy6baYs6C6ZCuZPHeJGXmXcj6C69Annjkqko4T2652YMg9sNy6rY3Ex1eZXRvnaEjX1gp4sc4mLnVXAdmy6tl7E5NJOaR2VlzHcWYGkFeK6RrsJirM8yhMn/f603vxFMmkS29TiyFp0Mk/PaqK18wyxUZ9W7AXp+UCmIiYcCoJ0Ci1mKs9prwgwabgj7w3OTPgr7OmDgIAY8dJph/FunFDe1k1x5UowKyVoW3zP1ADddUVT7ELvqXsqvWvaoVRf/O1eHC2Y3Cz0okYIfn7yliXpSresz7/70Z70YwKybik2kJYa2PiOmFj3ybeWEfmN7D+5EkTmGBBOlPKCi9nKyGhg4+U19S1z1n0fWeyhQtkT/ZBn2KyLtZcEv6TPlrBR/jsY37IJwgQSPSl+I6+NdwMHuxpYhWWkq7QjxSgtqsEXXvtlKQqzRFr+Odc+bP623x3t2yFW9KjKobjyIeLuKHfCR9DDLgYJ8ox5F09mL9mIk9b/aQy5Xr5ipRnhjezcyoUvP0eVjOHlyEIlM5NDC5SqWDl0wyITyctvb3UEpNrlSLseym0aC2+rFvAnCYci+rAa9+R4VeJXSeqd3WtoOaaCgPUQFHlojeHAqSK39RFcfZXCMGY346Llfxi2nIHlt0x4W7dPfmxzsPMlzr2wsSffqFw2fhxdL6UPv6veSZG16V9pEuKJcIj3AI+bGyVh0KyishRV0oRSItU0xwwa0ROD8N9ws7x3pYtNK09Axd7Qm5Mq0RDNc61q04d7F6DZxzsMMqJ23nKjG2fcSS5+12skzSHJKQdfFAxs+m30z/qY7RYx48dCa/ezuv5NeiLwU/1ITOSJtEQx8RRBrYoJl9BLRaJWORKTR12zXZMTUNDI8e+TAXFSAAA9Og==';
  const _INTEGRITY_HASH = 'afcf4fc9c635391bf025f3f33e52f95f00bad13e6ce26975eca75ce90bad21a0';
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
