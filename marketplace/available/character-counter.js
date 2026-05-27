// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eoVcb7GsJJmCqpBRXoWD9sRt+veLf0xzWOWNjLu6c5DvmXBJRYWxxo7aalqhhmlKFoxfvTRrfdGAkYT1MW4eEI5tfhunCgC5+inpFtqrRU1GwX/dn/sQ6pGyjMxBuWzB1PcH9d51JYDJt68oJ9HdeVeTqtvQzsRkqy6L7NpgcQR0Kx0rYCKqxqZJltBiOyDaERqnuCxjLgCuCLcjAORc+8yvzfcAHKWBl7nCoX2/xP/OXOu+kl3AN/IfCKXpS8/HjyXuuwNyzqNQKZIpbGPxXYl6NwFZYIGGkQWwpC4deMexCv+I/C8I86QMTKieOJ0tmPXn5QhSqQDKaFU5dgZgYpVtURJgZGq9rc9dL7TTxT2QO4uYGm8nII3mO3sGasrqJmBxcOw6upVzdFHEktyNKdyCeltoXt8LSaZnySW+3KVlc0Lwrlbf+xH77EmFj4HSSwOWQMbZtqIY7v8z4R3cmhgAewOJSFJAvJfidDwtxniWUsAxeISnD5JkEaZFNbxT66oBGNQqL2RxePOFXK0/RSrDxDxkzEnDJWuFQqrlP5qeJbA+zNoaCWXk0p2MvN359vYiWtdRETj8MmOk7qd3ibAZ1x6LzB7c3ST2cZHWcsjQQRMK/RRRsimj2yWAxlDDH/sm6PqJHtbF6tjAFsAd4ry4EpjMuwGBWJ+YvnVAEtFIqK8C7lJRQw0rSvWb/+htwHQv/kPIq9ZA1c+U2CrwGKOgqGUHO3s6GfiPxgK0hh3wzPSImimZwFevCBofcio5290cSADmM4b7lndqwV3vafHwWIAyiXzxaaA1NnWznKPmfhqXSldMHLORlsT60PXQ+rmx41gORFQBx7K7W5OlLepEeTM4dJcm4S4JVKojEI55vv3z9bWwtoEL0l7Fm3ic7RkUoQgKXOTt8cwXRzh6zNGFfwXMM1Xed8SCXlPuk+WPXYD6DyGVKULxl7gIhFtEeCP+oe+a3OAT4Eja4kB7cqUdGw19LCPeIfJ5C4XPXox4Fr8JTKkml3ZjoN+f+jhrtgU9KhHAJjmAdP9LCuc269ILJkGS3EAkWh8FiIo486rQ8mvCy3+2kQJmkyhRrY331Wmrm1JWQzP79mVtHNeSEl5kbxEHyjbjGDYFe4CG9xQrjHP1c/RA8H0Hj3+vFAEHD4dfvccH3xh8NFUtodZTA4C/4iJGhVkRcD9xKdm+pLErfW8RCfQuPRdakM26tUn5fEsh826gJxt3cxEJlDwiX5JGBRycA3JE/RzwdmZYCxQBCzASZiUF9Rz4v71FXiyi+U7zkiw4DXYCRnvVKui1Tl7JIqEX32H2WqUeUH8y7kX52g38t7ReF1mCTrpJM+R6YNDmT9MTDf/09c704TCjSqC1dK6ricBJjKvEdbcuTaneUliQMNF8cuGPejATcoPDd0iMOnj1ufXqkUlxWNE5IPUsux/z+dmJEo5Ub3HNVeHGGZQajckAfnvHhnsPOlF+UihlowFGUyjc/e+sNF+gLEJiI4BYtlFM4ZSYFv+z5aLVPIe/0NhZ5MfRdrGh8fxTp1P9aKqaAOh3UcoZuKqP0ID3iMhv7zZwXnxjIO67Ui/FthC7E7Fc+Jp7SDDjdbN7qRWLw9Gc3+W+48nBcEFkrAYMfBaKZjAJQnddCDOHQ/yDO5qXtS787HafmQcwKUWY4ZsfdFb75JyZ7pHZsYu2mf2r6+CwuS7PLL44I5MFwufOmQ==';const _IH='0abec66bfd02357cd35ac492b65a265d8fb841313f0e4b18de1c2fb2499e6bad';let _src;

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
