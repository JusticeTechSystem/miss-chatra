// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wsJdF0E3pF/C4+2Je5nVuzzyANHRNB0F83xOLhTgVzzk1+tY+3QKyeHP3girtSpgUr7WnCUV0NJp/XEhKtXTSBBfXBj5ngBrbDbPEY0oY1e0k5//ZlLKvk+lyS2wTUXBJLIJ5CwI4uGCoUgowE1utJz2EH0tAaPX7zTHJA/ZZl9Nk+jkF3uWhGK5OaaGq9zwigJqCkDbtb5l+jVWUSlsXi7VO12KGTA8S9tCsoOVc/kKxX/bvOHq1eovKVI0hAR0swkoMPj28YTHrlWtR4nfplIIhbmmINdb+C2avpKHMaTTeub32CyxW2xZ1YnOSAuxaeNyvJy8AAat6rLse1rWrVc1sNdHlXJbjZXAgGMZ4pnx4zjUEtydlQixyJvI8W7pIB9pZTP6FEbJWMF6v4c9xgAMmnmvO/E3tV6DYMZNr/Vcw7BMYQR+DBkDygrTbzZzy8wzDrPMiv+qSN5Tp9uL2OsB1/L6jHCpyWItC9DjzfOVAY7lW4/fJGy+LnspIu5V60k6JdEYdeuhGERr+hnVwkanbKAnpVSzp42y4BH5geYL036AdLs5y4T3GGhRQy1ZHuCUP294c+k4y/7z6k+MbxVWiWI5RmrLLi/W2nra5N53/kE5h/ZEBfK+LRKsEkcW5yFHPxI1KyTIA7QDt6pX4b9EWdEMQEOtztg8Ykxcgr7oonlAWTy6QHQ8tBkqJfMi/jjHvzYHEAaeu9ogtXZ4kqyPxn5j2WcO+IHsS5sxEoLnHgl6fuIS+TD2z4xscGFTu7043/ww/sJkhViRGlfTZiCAPMYwFbYzA53dGDuCKHflA1OPbvcxlAahWnT0fO9lzGHuilTSc4IbVOyWtaLbCveuSrdHwjWcuQ2oI0Q4D/7KPFcQsY1xiO0+o6LKwv8IRGZMFx1h0kGM39AHOv22XUmnUqKmMyY28Vpj6BSffScB2sfIRboGhAdEXwuyCfF61pUQCz+E8ZjIDBSa+y1r3CVVmZz/HlGkYQFCMMiABHt6ZAHuW5H7lZHbDvjWisW/4g==';const _IH='8089d2d0670fa51689e8fdc954264b8c2c52f23fee28f84a0bb3b84b78554a66';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
