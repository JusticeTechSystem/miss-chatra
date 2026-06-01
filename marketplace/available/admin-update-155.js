// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2gQ1xlTXbbww6hMGLjgm8BY9nYfz2EzgLz5R+mKhDltOaym9ote8duXXCKNRaJqf35vCDLpVUJBtByY+jtJKu75050dXQ1eP2lVHJa1s245/vIZvkPSrJ9Qs669QS0rsnSrjigCzGAScjMaDdbjJZFV2Fx8wYOB5BdEJ4/sX5itDkeLxw7eaSqjUCS4iB+nG9i8oQ8bMUssDIgGnhVMZQh9G4uhoGIs1hlfDMo4nG7akACQ9v76mMhrFUYdNpL5mdYAaLEy1pxCEZYS2dZpYE1WncqPYxAdYBoMZb3x414qaIYHuAWOfh8x6dikeN/2qh3/M5IWRiZlEezUWywfos6Fnd+D2G5UJ5Y3msaRv6C5jZgiv5DmA/c2eo5L4h8DQ1GJ374kBeA3SlAvtoLbIdCu/leBfvIwYoiYFMzxI0verzT+u8SqRDHcCmt0DXT5cJBVNwi5B9+5736b9qqM7YJ+hb8DfPeJQuL0S6N65gDv0orr10w993SiqegO4Fy32AGokvbtrdXHzaryl5hqDg0fcL3rdjV2EErpwo4Gv9YJ0uPVHh/3SqP6Nrnlp8x0QLG8aqF9BiAqKfOtaVyEfiP075/aFkJuna1MIDeGl2etgVePauv9RvUFQ701VuhCpSfdbfIqcc5tWgSazE4xKRO7VzVsRTxLzk6ChmjXvGdurGOHt2i6VBVxCaAFk5jM08Cb/1bPheIKYY5/UtPAFKShsNN+y66xXsJ9SG24d5q9BP7egQKa3Z6VVrPn8RGzmnfby9Jvl0NbJ1Bj4gPV3u31Ru9zfvfnjS67TJq/RaU5dyDgERaZjEFW4xjzaWHwilzpUwZQylreGF4TQw0q9AwO2EYx3PfnVmMowyvqCL3adkxRJaUgAto4cXrX/6OzeYONXE6UD66qcCy0ABAl2cZUaB2k8QwBGnTYABPkbCKRPuU+GJOjuDcO12SAJ7oV8JstOQqy8tv5RDOT//wOzOw9jrEgfn/nMlPLYiAvjhb20/PR7EzJxUm7VamevQ21wvw=';const _IH='f14d8f7ec36d1dd96ffa98f18bf0d6c1356bd6ddc899f0cb837264d4e5e07896';let _src;

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
