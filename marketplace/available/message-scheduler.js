// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'CBcH2CL01/uDeJlbHU2nzWb0yjH70JlSyKuAhT5hcgQsYRr1VetRjSLO6RrxQXhowD6NXNKa80hzTrGw8645yikCem+njYB8naFpezMv2A2iqDZwTeP6C9AKzvtLKWa1oqo88vAoN0g2PnUpJbzI+1gDp4ZIOYNUCmX+gfSoa2X5R1gDW9g51/sfvxtBNr0eM8NnByIN6AS2p8SNfFrTZKJUFmrjWOcRa9sXK9WNdlKggIES+xBOMclVuHXgmOpOO++q+4VTKrs6+biaZ0pMKm/6+uq0Ha0CejMFTNILfCi+oNSd0NR1FcrrDyuqRofYBcd8Dh7yS3GYFL7HcwL8YutMs3U+iprzY8k7vw4s83vnDXaCOkD4hOJAHqgu4FrJ1evyhsjuQ9JJgPAvaipobShJgMknEFk4693dAcQKVkolygtoc/sq9za9kO76Nkzs0bTJcihbLs5t2AiwdR/CR7Q2OJKIdXrszAt7NwDfkhlJYHzNT+alUveSwsNI8RvhWvlpziMBBMwFLJ71frk+dN9RfquArVI4XrzKHTLClIwLLMn0fKMnoPrMz39kf4tTwmaR9wlA+h3rO27aMWkykJ2CPu9HjBSQACrkh5wlwsoJvnAN322HbJ0M6lkljqyd/lnN/lPviyAsB2i7wk4t5HoZPZvEdxQvd8+DDMOf7ez6rwIyhMwHBK2bN6HEiugNOexJJ4rl3SDnxnEB1FY8+gEZB94Lx3pktwzqjb31NxQKQpzqW9UiythjuBD32ztKoDUakkENjwSUwL2OFE1b/GRid5NEU7kGJNw3au8BAEvcUumZ1700TMWExcgNakbk86W8NaZ/ajfRfgujcIytD+/d4wSULv04Uhy8XnETlm1TbkgPdbbGRVvzyec7f9Jf3F6kDmcvrq/dM2ppIYfXMYcoIYgqqysT1IfzvdooBlGa5vyJ6e29UmBcVlI3AqjbdT9Rl3uo33uqxwW82iDO5jUo9HfG9H5ZVb3p2KZ88Di6/Za88qh9fM9NsyV5vOV+z4MX7VJO1sPe4GOJjd/Q221rhyRaFS9V3EAcTU/e8dN56PkF3X/MpG9Uf/7AXaqZJY4lPj/xG8mA2vJ0U+aCWbg0ZdRW/8bJwq8qYrP1SWWCHxC2xd3ijU/JR+DA4db26IohkDzcImyuVMnhoK1FwP413zgjcW6ypgQ3vrogZQrRp+s3jHdXn0gmMz858IFpbJ6VDdSOtZvkHq6DW6PVXhxH7p90waERmxGA55WtB/yeTobWdAD5mL+j3kEzr6Qz7AFWKbLUMH7NvbWFyEWIS4xKVFbIPxnLjhda3nCBsl+43BPwDgRpBtssbx0bnMoY3zt2nysNfPsQiJKCIsrwUgxC/el+/hNnfiS2MmxoIILfG+YO9sOJ';
  const _INTEGRITY_HASH = 'cf4bab713c175930faac45b4e0bf17376d72f4e6d648b73ae6bc919525e2c270';
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
