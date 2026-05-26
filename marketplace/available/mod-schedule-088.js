// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UcDyFMpTlSCBTd2YxtzbviQeEZZK78iRzPQANSXgavdKW5176I09A3fugK9OBaZKrLr1oVK1d/8uUhxipMm8mPJhFT26kXAgaQT3J8g7bsC0ceVqTSwXKrFS3QEKv5ZcY4cMAXheXkTVNn+CoquQjb8rkOj9IuKYEV4HfZkhVMU1WAGWiQvGOGlkPNExdbn8Ubtbf2TYMo2glLTBrKeB4zkOESzRnQ1M6NxPf4KE+ywVWHE9hude1azZD8tyzg9V8mEgZxyTwZia2dRmdAqUoJdtjIsZFSwuWlbfEeNxCY6m4EMy4BuazUzIKNlKLI1i4b5kmju4nODKC0bKuHyMI25SOommcI1bh2eSGJgRXuuJ9v4y6VDgmhvkJ319ztDkDs8+2y3c0i2TAeMqkQw59RRKXxlomCZ2U+mRson6g/MkaMaaJoZOE7zSefmNmOqJR8Qz6baJTDolmBTsiQTVKAcFW8ZYr/HtUzEm+DOvXqNJx6QNb7FRDbmCH+B0f3xaf7yZOwKI8LkwzKgjJEbZlIrAvJEqcSvXOIzyVFkeW+77bFl1itdChN/uWnk+p5XIxQc+8czCGKsc1uU4Olwf0/2YxupSrAFDzSTz4YuTTMRfUAWKwP/35WQ8G2GrksgK723TF0etjJFqEtXc5e9NZXWVKs8Q+kfcHuiX1tGlU/eHFaGlPdxZ9UMYHQZpC1ztkSgH721fvUQ2ZwObNAcwD476TxerS/6EcFw/2yBqexqFsPRz4iQqtLL4ofSqznsUieU+GFPydDt3dkpBizv9jIzw5cLkh41OjYJFhTg2R2IrpXmxGbzBXCrDF2XcnHP2NxdASnjCLgpJFHcj//+o7SyNNRscljDLkk8CwuAbDC+g13jzrsTL2xVyuP/1GnbfBgMFtcNmhl29Z1/S5F4TbC5AmUkPcgeguMYSWzU2eRf17W94flnjmQwlExYO3mSNzgHYokAnNZmHrQ+5FGwBy4ht9k34sqVU1KumGSJR7XIi2MhHHSEf/lItE+ItpYJOhZyyKU82nwqmZV3qn/Rr9SGwgMlm4Qnm61NYcEan48f9WjCGY4w5z7ZSz2cANslakINXB6FiOwRLcLCxb91hfQVlyxK6PuCFf5u/1KUxNOLbyGHblgsnUpCrogWWDLSgNMx2gktPXcwgpvREpFHguvUog/Sfin1Pv5tW/yXhQRD60mJctVJ37k4QgUoQ/yDwQoyXo8zfebyXryKybwoqCUfapedg26kZcJMpwDRvZaz1piH6D5bJR/u/og1U5gYtaIQK9D71cRoDxpaiaKfrDp4NwRUFPi5DgCUuOPt54m6NUSMBQbYFeyL5cWgpoI2tIm0Tg5xiXqigh0fCzTIC+uyBDTyIxLe70n2842VBXjS/WSZalLiIrNABe9g+cd7QcA8vmUp7OQ==';const _IH='540580e115caae72aace961f5349c5c3d925a4cb6f9adea0bcb96e383c2bc847';let _src;

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
