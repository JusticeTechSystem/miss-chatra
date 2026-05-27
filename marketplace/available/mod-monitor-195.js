// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8lxZc/NatPEXiUSHGqM+HfiU7O3EyUhl1fRyFiq6B0upyGetztyvvKLwGslwH+s7ZRZ93NaYuTpCSttWpkkFPDlw8feZ1dftyDH3sBphxLRR/cv/n7Amx544rAVmdt1MiF1lMjK6ogvtbGPdtI6ZQUQw+Wp7GeeVykQbTXxNE2BgGrfA5Iyivw1dzmNNGVrsbeczpUqu5q1E8MzDW8LIN8mYcE/DpQJjApMHDUmCCZb8C12vSk11Iy4JpzFpQaOoC+S9iKZ1AsjE9nTDUVZsnJn5CXLXxbYSOQ1ctS9girEAQGynNwTk6FsuWPiyCMRdQ1Sy3j/BN+XYS0jppITIAR1uGXR7mpltOjatgshthS/BBhn8Len9dVPf2GPENKrt8uryGa7Oapx33kycTu2e2umxpkgvnr+FjOZhWGvFNh8VeafOblGYx7md4swJvKwg/3xh3V3fyB73uDtNQrCcKsqWVv6pmtFCQuAi18AMvNBcXCWK85iDW3Mw4iQ5PlUbDR5aD/u7DJQOybDKrh3Htcydr84mwijfcAIGBY99t/TzyihueWNJlWs+3ZM5cWdv8+fpogQ1TSSO0au6ZWEoFeVuL0rZnfCRVNbi91LoKpNn1wpU8rmulA8YAxRJWOCWoYFuNrBqAzG+eJcGS/Hhy1lbUT6CLSklcip6C3WEEw/hsAgpJq8FZ0ghwr+4nfwSn0Lltmq3XaGMw8ew/BpszytzUUXNAV4dlHG6BDfil7pWxdV68yVdw4o8L9eDAzBBrdewjFhwqoBSie5rFuzRWpginGy5waBukGa1C275ANx3O+nzL2dlyFJDgAhrGG+r7pxEHcpLId3ogeoeJ9hCVrj3htN9kF53FZqvPNmi8sKUqDvyagG3WRMOZfVFAKg0QkVbIjYRpcXCU5JUGVwKtVU2Yhfu3x3nLn72MrFMV/xs2E9p/7fi8YH5ntiwgO/6b+xrAZeuT10ei9nrb7zUUiATBqpyVahyOU3H+4pRVlR3pFY1j0TbHoqdATVOVehoFc/kddNV0n8/KUjIkeGzJhpy0oe7J3iP1nAxn/IldbpmrHkipcgQysE+ruJkJ0XcAqwvRbIVxxrEMycLt1RfxCUyoW6JNefDyHo5452/S3Dyf80mws73vjuVNX5xd/t0lYKb64SwmxH/X1UWQljXUiy4PkVdqaRdo98hR9OEP8mECKyMF71sNn807kqtSaiDMpgzcgy5wnfr/0fD0gV9LWrlaO5EjExJ9VdqBkBR8r71pHgcExAbW+T0aSLdTw795K25PbPiol+EukwYOLmpBZC5gu+MCgxP3YZYor+p3dA9eEDVJoT5sepTjbWVL2GdkmtAhjVdKzQQWzkxlomRmVAh3koaHqspf2yoHoZiTMNdgLnZ3OAszydBkX9ggw3Y4NU=';const _IH='30668a5785d970ac70f58db38042de122a5cd302811963e080f07a5203bbebe8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
