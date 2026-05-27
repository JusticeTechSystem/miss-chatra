// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p8K/XtJV1PXGzBjNMpIO+KEPAuGx0Nn8X0kqUOJeObjFENKFqsa6x/N2SLZdsRECAut9O+HcmXckEp19GlCwKHSf8NzwT5+x+0syfw4y70n/Q0tAy9mu8rDfhTddPOoL3lTCxi9RP0PTGbMKu1ciU2l5u9wBLXwtsL3RIjBaRBely/LCzdpA8AsziVgneRM98BDLiDURaGqvyF9UM51QsXfmTLHWW7WCwERDf8J4gko4M9OcuqApujL2aGZthccfOxDtSCxtcy8vOaNMgayigrHphEHjb+uO9qyIMOK65su6yd7T8wpBxEUaZXeLJ1iC8+5PX36bnc1G91fA6g9SsIcU97O+a7J71XP+UyPbjOhW5ZdOlzXdv0fkboHPGFsAbnjwWcjuErb0X9T5TPCZ3AOA3jEdp2izgA8VFEZxwoT0eFwcv7oIRa7OGwz5mgLk1aYiQXEmA4Jra1eeFpzHk+CU/tfLWpEHGfQBwp2P5c80Fr3e7BWZ1XygG/V7kGeYmVWOtJ79OCgeqxpPAoo4tq0SrpiOBiEqPkj8OchBjvf1YlxA371TIQITfQkb3CMmlPYQ1GExrispx3R94cUX/N7AyIxh+Iv32htjZpU46bbdCUmJrqfWsKed9/PqcI9O4dEMFkIuoU+QLK3ACmWmgXzCNgQuY9o+gM4H4hMyyJ8PuWB+1vyXPiux5AMhvg9N7Vz0Ab7EG7c4jvU+fk0PL4Kh6Ejg7dbUQPUTHAq0l/GPqjXtZcVsGV32wHflEgYjTzz5yTnierHlF0RsjaKet+tkiUOjwElbo0LIZwWcRo7xwnnWv78uPWi3sHLJjmrGZ8JHQd7Kzl114hYoNfSsQeRlcSUc81UEdEcL/2XDUYzkey6C8euI5/Xh7+f1cQY/raZ/GdH09wnUUWfHf0a4gTBJ+C2zOU1XVElK6BRfpUMq7tZK6sBDkPvfuvVBHKmDF6WSaCGOKJ/JoBxJYdS/xbubN1Q24xsxS2yadAwa6Ie1PevgjWRpcweYo02W0ihiNj37PWOFbLPXKev5cbCQAH2qCUJ6C/K5K59De6UX3Gq/0bMJDr9JSsxF6eYZuzyPEzQHEsUbVSNHj5oUYzVE7dcxXLkRcNKCL6qiYFC1fiVIoTMCHbrsqLqiFUJ/e6k1YC/cKowYmNoC3osN21OcQI6jDnWXqWTOeh/on0IRmUuzd7U7cP0xo2JlIcnR5npRZNUqM5NboeZSCYDyWA0cS2aTmxH+4QmkwokzH6JeCmjic2gbBy+mQeE2U40/8VE2pPdAw5LeKwJgbjKVN+ylRsjhsvzLmc8N+7XEZJ9ApwoU3XetGGBIzPayUGLPuWc+Ep+Z2xsz1Gs8hozRVkLK3PTKEqo1c6dSjdJAl6TlFDD+ESf/16KXdA==';const _IH='128522a8db7c7eada999fc9a72b996492ed37f487ff95c841f4bb10eb7633bc8';let _src;

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
