// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='POVwZGUKikVceZVzmndOH5JJrirz2jtVb50RjdGEg9IC2obOKKXDFLy3ukW6t6mxqkhynqGTNeiKiHRbP4xVhnBxYdBqtpYHWGgDkphwa60iEJWvRe3fvhZ1uf4nUwuypZYfOrgJ8UKtir/NiXdwN6oAB/TOrO4xmq2mRSk4p5FsPtxMSmplDObMU/51zCWDrYCetUbfnniX4xUE3zIHFMCC8bIkaqFtnXd19N9BXX8LcjQilfmPH7WSUvzdbsNt7OSk103JNGl32CuN9YjBUnejTjPgfP3vdeo8gF46ePWAcuCyZ/JJgn71/xSjH6Kgnw/3y/9Zg3HuL92rXK6jEUyTuV4pUvxmV8B2NNP7vOLccUQp2oz2ZIk/eJOp0AKLxYrBi3IYATyrgq6FwSm59R0CXfIDaek8UodTJD8xWg5TwFa2NmUEVcDfC3GJ7EZ2W32ZBNDUQLXSNf5DkLFjBxbnU3eyHaLoUlTY8V8mXa/O6i4L8ZRU9UWO43xyhMbaaudOrdUhmSMgKu9veBZ1AcRp1zBNgbne3Nt2JJEhQsyd0DM1wditZpGbpekzw6LgD476ILR9IfukSFFZSeJqbV1XUQ96nVCWtdgPoUK4De8Ivza64ACPR6XqYvHlrRh52zfdnBieCiUWfBFxrWgDeyVv+HomqM/Cs26f+8dZmUqMgOTwwiCgEqRsLIfaY0Hi4MRt750zdd4tou4MS1nkIRNvH7xNcOxF2hSzji8aCTPvnsxxKCFrZsv6jIpBU39Cdk0cVsmoFR4iLk5o294Nxm+/+9C21EmEoa83GmU402C0hXx49D9JRJgq2esNHGcaxCZnq4EHc2LufR0kp4Z7CZDKHbwMgRuKK1DhqEJiXT6FqrxN6GuoKErAd3d7fr5gptt4icO8WJaaargTMwTSbEdu+Ce8iUkp/F8SY1uGp2qY14M8Tgj+6LAyQuh4XSgB0pIu7USIyGaNGLdFb5uUIOsSoOSlMYWxfzK1sPXPp0h6tLweyKm49eSdLcXBryAI27IS/Mh5/yk47OXJUzado5YkRhydpGjIRGsYogg3ihcURdT5Qq/h5qrGuFSjovbCseI62Jg2cF6uJv6V6nkSkBCF2neEazenExbXZ7eiibHylLCmjCyO54LhmgzDrIdH6TKEXSQdwGI2BEwyGJH11FkToRFZAb6x691v433pvyu6wIk3/veo4zKCUlHYT06SmbFS';const _IH='c770e9b6d1cbe8bda87434c07f5f629913e0bde2183de84a49f6ac9f321e7c03';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
