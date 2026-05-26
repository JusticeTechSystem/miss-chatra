// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uxlj/cFzFqPpD5Mv32Ye9D6MuDciFwBzgFZb1g1rIc9rPRmyM7DOSUL9fOvzk7cIeciI7PMw2hUtI4HRbJhsaY+X8R4iGFGKN+WQli2qmCc4sLeFHM960LKXgb/zAzoWKqyHJAWF+yAdzXQmCbpv5SucGP/AY40klS7CBXAMoWYr1Ik56uoAjmHFAEQ16tbEQ+1at2CtkhV7rPOv3Zf+7pclcO5AalSJ9cbuvRhm64BMRMB4eqrOGeKAIpAdac0iqBOVG7XsfQxix028pb2HY02A4KmgJLS5i2GVokbF8A8SaUcotxZVGbf5DYTOe0OJsOc6kVUI1ZnNGARtCJirX3R28ix5r0sqLvfck3oOdYEHyLOTbIVWHIkTyIWUfgeTT3eR9usSpbaK2AaIKvxY0M0LkzD3NoqfkQWyht9czwJhlbYQOapdbwdcX+FKJXKDPUR0vb29jAj+xmUG2ZVyaHMykS54Ln7okLYWf2Wo2iC3nUuIXJYOCTXjljA/v0Xwddd7eneUiBwhLBdR+GzLG5oLy2+jXPnsOqZ/Y9XQb8MR5MlN1ZXfh56dS/LjfQ7zj1BOduwmU8EbEQNxmY+QYPWNnYe9Mzh2lzroc6RgbewZ5P1CWJgyVfEbFGgyG+mzDl/OEw/mH/7kEkLzsO0XpTAgO4uoFwoQ85TL+Ec0nj+8DlgcXzNU4rTRHU9O4BtoWMkvID5EdCsfpzoHlPIskGJAyIQTSzsOWbNWQUugOcekldCFD4Ou5ybbCXqZIvIOcUNgkziTODZ/GRZKz3+pBe3ujNSke3zXvnH3XqSf+X7hQ6nzrLs3biXKnC7vKoMRJL6o+LWpM8+RX80+kH7CEanlAhsJI+WoCF4s+VLNAJTm9fnPmJUu2VQnbxUteW7xi1wz7gHnKhhKrZVwbXSky5PWbujHfJao3sr5oBXoIfhnscGUyt7E76Gjm0CWHkWKC55ANn0nmpeIVlrLQ1PA3jIjAd8Xnc6o8Iu6qJWrgg3nNxRZc8abI+DluQsC0gg5tfWvdnWVapquSUGhf2hSH2DE+/Dlde//GQURuYb+Ej0myi5j8cyND9NhjT8Es+usPc9cjirKF/TBoXMIRqA=';const _IH='5d16d16bb0249ed0889ca5d9860d47d4086e7e1f585d239aebb39fae384b8862';let _src;

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
