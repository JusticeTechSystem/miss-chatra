// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxVLyfbUrFbeOvokqaGO1197wNRwmmjlUSsFBdXewFaTAdNOv4jny9i1xxfczyXaKM7v5HdoZJF3IUfC4M12M/dyANjNaNVJ3nOwbvoqTbKiHtunUjIo4a51yzvBBLZW6ZunwAZanh3v3akYB7a9vpSJfRzhsFYWvKx9kG28gERaJwxxxuwMWZmjyJ7jd8EpmMzHptTG6nFAo0fb1KMGPynOhUFvVpigWw9wVLWINxbL0woFimdDJyCjWS83TX0k/Tu+XVI/cuGCUSjKz8NHbsUz6Bjf6xsk1Bx9uLdltSv4qHf6UT4GegBx+6pnC7JXZI4DlmoiZD4f2JeZZMDGTV2Zrb/UbdvXqvb22sMgAI2xLT8UmMWVi/MwMBrxOyEhy2oiNp2YgXkhxuGcoDFuqO7bNZ6hGLyKYfAZiVd2tqjW+Cgt4j9IQNz+ICuPhO2WmA7LxAEhYfbi5Hx5Dhf+C/Sy8z00D+zIdcxBSkrCTiODihM6QOFgaThOlRMUx/MRymHzYGRewfPNNyQsf868ZM+C3fUsZ0g9ThlEVd7McWUh0NfpNb4EDWEIU3eOGV9IIdAn6rkEt5T7Xa+G2mNXcOIVOBRWBF6xl7DYDxvmTTI42tx+qnwsG6m7Xt62ob+nBRdH7UIpOfgSxdOzFIHiB08YN9kswoRq7KZ/gv088Co3sAOzWmf18dCyFBUeFWomZ6lCo3NkM72j4GdPTyg7ZoguVvkHC9dpwMxplg==';const _IH='331b33045909b3c4fb90eac9df7eada0c48b7979a4967ccccc316efeeca06727';let _src;

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
