// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7NdM/QAKLEshqrYh/DubqGP28dON7QbEy9n6Cc/dKa3u57cHuUXiGmTF/cOU0irKeMwonCHOxZiqhuyn1/VA9G2qrSDYbs310gXYSyYxhae1Voi/o8WgBZNXErfXoQcTByDpsu24owaOuiyYzEhFMl+EsiubMP0oe/faIEHI8fHBxdvdxIDchWJrswN4vMxs4pUzuH0KBaLD4WB9Ym3fY2VLUQrGN2lA9VBNpgXkVQRkSoofeYu5m+xAMZFiXhLNchFtaLdRwhP4tyqEdL+dn5TeIY1gcFhjJUpo7vaPO1TEND+PuyMcjAobdqzW8nhrYBZagRQEAKOobPoOp67/1Vn3NJDQSQIAAwvqck/OVOtRVI5yIRizzszoctu3p/CTI+rpDpZl5ZfBXPNk5woCTJmkS+dL39/kiFmJDiJu7HrHx3FdkrW1z9D5lrCDb1mpLSZm5BLqG/o4/wo1FGUieEJYSGyzqhNp6o5UJSNu355olYJI0C3qLiy/4oqG4QJx9zGkYh+Utm3Ebt2+4IJFB1fR45yJv3Nsc3cvKT6mgYMf1fqZl9PUffwqkNlbnbMjmosxTrKUxMoioIAv1VlH9ei7RNZ9gG3YMngWi8zskPHSV5ZtkaMAxjeRWkmQNYlP/bKMyvFpbtc+384+h9NopYoE3k8OEjXDUnPoN4bTIlz9cMNyxcyi6ZKElFINhXVp/SprnWTkY/O4P1XXq8XCHa7nwySe46gHV2C1+x7fCL2tkxsuCVfX8pKni7wth80MZBr2Cixy7EW66Go4fTP0z5yRYyg6s1ZppaoFivZImwCR0UXzk7KiqWEMzfYw6oSIelWJ2u4tkL4a0w4GYZnhYGjSZSBDuNpuveQkBDo3OD49rsGR21WZvzPHHlKvYmlupaSn8PtC0BMOoZKq+J8pelUzHxtgzorWvVRJQyCUz5ljVplSZsqTpUmjBwfVwCj2oJ4UAbjCUmgJUp+CPPpFUn6JQkhVYjWCWXyB2WCDNXfoP/zpWuiCqQq533Qnc39F+1en91Quil9odCr2uPvKB7WieI6Hy0SEnKsQJm1lSurZr//e0Mglnh9fMWhrTZpYOuUjUTYn03XAOfTDyoisbrACu+LWqgeRwqKLEVlII9/XAxD4d2uocBCBh1RZiMxWFYGL5FaUUrrUWq4C8A4TpuFiorOqyTfrQ24Zz4UGWNrnhY3F9bVylA4WL8bJBOg20Urq2ndoKiLVh9HpU3PUniHdw==';const _IH='d6acf9b62e4602049cb2b7e377f5684c7525457ff33048bb8b649e630fff12bc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
