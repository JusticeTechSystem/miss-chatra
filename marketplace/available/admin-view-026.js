// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyF6bKSw+MVTYH4dYN/zNIRfi3kHraIlE/JYJjvvZ+2s5mmYspYKixXDkD7W5UrdKtIvOgBb3vuDK2XjKwkfmU3nPI5IWNCkiWHeH2OyBExEjSz7UJPbIGsd/ktPeo0UdY13Vip9BtSVsrdUF9pWTv469JGfDyhPUf3WmOJCNYJCRL0eIl7lQexu26xJFU0UZSkCg/zYxSBGOqHUpcBNv2AcnKm2QDnokJKC2ZO4+GBYvZ+SbyEP1S4nnZH68fCoSO7OSS9eo/kSanQaGOIlWhlBAaHGu9YSfd1+9WfqovT7ITmAtgrV+6pRr7KNgOFaMUxxGR3t+f8JKlli1F3vGEYqgrSwH/pOCdd6ZveZHpWCBihCor21y3OaeZQgHI5qJdR07kPwlJwsE3TdGibwE7P/SaoXzA7U6fYwuV5iKyGYxxQBSreYK2TP3qzH1SS1f4pNJoAOvTtFuF0vR1yUfaoDggZ08l0pV4Se2kORJJHBLkCtwPxVEWbwh9HqqmkxAVuHxDcD5h1MSgMwcza75ZZ7r7LhUpzleFT1oLa2xCtLyeuQo2f2UrSzcfxUGYzJ88oyzHJqzmDmpHtJAhstrwgJ7+y5SZ0yBgQo6vpayEJZn9FnLEcwKPgf6FK0pXiZa/B+jGh9lSw0kBk/zMXohJ0NWJNI7y1ftqV3HG4kS7PRn8JP/+9f/oZPeZMbQ8ANd9PIKVrhyfyt5YqHJmGPW+9sKTHiJQ2roGM2Qkl3x7/jj4bkmPG5jiLnC+Hx1s7TAZnKcYymoC/dlf4IQ2IrS4+nwOA+AawQkJIIAFFOd3uEM3xunW9u6qGfSpA4Ai2+h1gu1KuQuY1+8SSHqAUKapOKnYZNsWNNRpqBTAVE6dBLE70mrCK37EGuXvwHqiEExcmxicwEYh34x/cjf67i7pCI+7ArKmMeBQ97lzL/AumFcVLqEaJolBc6CFnfRlBBwaBy9BYM0sNsgMOrQlauJuH7yd8BWnh0Inktst028wE=';const _IH='86f7afeeca412fa83d97773ca72f68ed0ae0bb750603715775826f666a3392bb';let _src;

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
