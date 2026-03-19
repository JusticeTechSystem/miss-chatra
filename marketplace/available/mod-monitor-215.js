// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'h3TF/rK4YLp+ch08xNplBgG7zEybNIHDKIuO9xqA5vrqia3ejZlRHEVFZkV7ajAUmzUO6kOedF6kUuI0/xSrRzVHYitD3xMG/TNS59D1rP2XbPBjTVbLR3oSRxjz5MifqH6sdQx6LNetGj/5lZnOCFKBkQaMyuklqozeEMvTOlOTxvZZb7ZrUAkAbET0BsnCVBaP4lZq2Fv6Z2MawzUaLkG8kPK62fX9rbVzfAX2gN0XSzeeD3nAUnubhIJCQTEf7kHwPheby0BHGR5T3+i706RFZcI1AVPP+3HJnnCRWdz1NixT+b31u/StGseT/aMM3L5qob22yKIOYZa6lzOui9DMR/Qz7IEVpKGuttXaUt3z7KSobJq4QCw39KDy86X7ajChx3TeLmR880C5c0/GS6VtzOKG4/FEAoooN+jFalX7sB/pO9kHr/IaN9iIdwzXnT9P+GgYA5nOlgyUIl8DxRePjnVKkSV4fPC4MSBjStxgu62v4T3JJA7YeXp5yWW9+CeFgqEj5mbiqenkne4UnTM+IGpG3hDG7Dz/VAo2UHtCePk9+wn0ApSTOhK8zWOeITpTlHiX7Daf0XIoQ3c7NyFGi2Tv7sb1secSgW5mni3YlsOKcwPQSyrmeVaK7kz8Uyrr8GzvZCFp/Im8ntS4tz3GiXlAZIVMk3PGBqLV+3iJimS2qLV+gjVhTCvk2nLmxUzoWLN5ihS3z/6qMgdoXkYfwGYKzYh/0GkErjIpi8dZNtFRJS7GSXFGTxiQslKfWofXHHF8DCwbSp2Ti4aD0v/qo5XVgPa9J8p4iGOQWLWpqOu6DCPWqznZetjdNvzj/nhYJo30bRvo8cPyXeTCzmhwK9VUlsby8JCdptryIYKm0DTSbxODt4/gfAklcJcI3YzrWTTG7ByfdaiDIAcKQJcdhXWcBw3S84Bncjy9cNEIWXEoSTpPSs7VEWD3F/qAWxTWGBIYR7gPZXOVaWfCRvBEb7boeg7bFufs3ani/rjLBefgg4dBEmFYM5pnBqS+PM50yklkJh8jE8chgaaF1Yn9nZZLTWtZza2RoJmU37OJW0BfLzWiKcfc/lItBM5or3sbX6DKgMAR8BOCYt2g5mvNqnuzDVfoOrSLmv8kZ4eFeRrfwAn3qXLXSpWiYdn9XEW+wG76+s09EbRt0qsJZIMdfnckI8r0qhXIgnMTwhC3gMmFqxd+00tS1b3qMGFSGQLjRtib1Tp+LPOxnq29w9+4THc1xY9swMFWrt8LTBmMp1xI8p0rjZeASEt/zX6alSBnB3slKcDTc+NEaA1qU92rNd8O/eTzXM3CCY9br9PGhQTKrkWIT8DkLbxe0hMUDAw85RDbVFN2ZA/tRXKA+iTuyn1gF9LMSfhLvUyzecSXK3NFnO2QzYx10NLG273i88U=';
  const _INTEGRITY_HASH = 'b83a707c4528f421799f0e15b2f480cd755607f329efc072349a2e9e69266d04';
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
