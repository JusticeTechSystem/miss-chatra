// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sm9AMYfpFRHUgepQNeIPwqqbbvdGdwElnDDHDyGsDpmrcUBtZpbWuxIewoxmJJcHg23uW+W5rLr6Dpk+aFJmqdL9hHz8ZbKzifpWz3nCo0RPubX7JoLbBsngS52/WQTE2GeO9CUi3HoAnNHljnXk4ZvMUrF2R/BAXAoSlBQWCPSwwZP1jZ53/JsVJp6JopZYaUkQIOslSXKSv3XU3pKmlUv/nVldbo6OOv0v5vFFvwqGVtS9K7r4nT2Z+9zmJ5KA6xaJRX3/fXdVBpq1aKMFY73NxevVyUuFQuq0T6CZ1elLmiwoWJRYIxgdZ+ulILnbZ5gVudcdWIJxzwJ2j2B34qH1E3k0XTrwsXNuVYCGRsBouzmD5WI2CKY73tCKx8J5LeD2E0TjQeXb1pTjBz11UfU/iCDmLdnT4vGb7W0oaAP90gKIQffhiUX9JcL00HtLdVR2u723bPwttdDq0JRoAoqIyZXzZiu61nk3kDqy4ZLr4X1kI/W1jF2StsQkZwPnUb0f1o6WhzfzmUl6kP3nj/8YChnOAIe5oY3IbOuiBYpXjgxRYqnT71/ZGp4JCCbeUjyoC6cTS5OtTUQp4l8E9RKr0FUPLLBwY403X6ftv2EUQZc6A6gtP3E4MofJWtcm8mL0LMOjlGxCH5DF7zg4xxbBpKLoN5ZPSriBIR/NMcjEceXgRD2CLz0/8F2tsT7l5u2dl75dlRcE+gVyQU1oFc6uyd6AcTEIK23cv+f118DVbxQRuPMgk6k2xZwgYkA8O8jVc8YEEBA36bFefd5vIGZ/F07XqE+BgSclMKywcgHbZqNFAoyiTal1oGtv8VqxHBsGpJ9HfjjxUTm4/3RxllZrBnf5YNUF1/ulG+zACOMlXOrs22kZTCY6FMaNeaJc0W7D5ZpxDPtTX6y+Ivi48jDGSW3lxn+V40uALmD0esXC8EkfqI450pOA2q3dTbsS/TdvCpTRghDfsF9G1D+rXmwRxjyDzb+lywokDFNtzmIY/8Xke8Re4kxb';const _IH='4956a220e1b0856acd9e828a01adf72a0b203bdf065a8c82cdb9661e06df3c97';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
