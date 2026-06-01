// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2ZX757WLSH9RQeZpRKjze+RbUAvM0Gr1mdUrwAKAtiNGTrjrMgaaun4YNiKAqStdKrS9Q1GJbiZ5WCyt4adS290n/qXcwnC5G7t8x9RldRZcDjsmFiqbk5ELSgr8u9h7hGW+VVUxwDlPIk6D7o1pM0MRqzoKm9OefDRxQ5i+M5+JZSJn9JTgvQ2cUTyB2VjJrq8QTjlt5bDCok7CzOQtdjHGz0p66jyqoGxjOeqaK4HrXl9BkM6MOsHqDnDqyeQXONbG5dl72O4AWRqYmtfOlkNAUUUJCFv+V/OFawS7wdoiBdtFdvJ8JE7j7DDIjqlMF83InSjRh+scYGY1Ig4yHHv3CydIPiOp4stsam8/nBSXNuj/1Ya0kjzWux8M29aQF6Uqrqyb5kUq5bEP6P1v2pah3gRbCOBmqPHoQ/Zg7YKP2/WH3V9qgs3J6pKa3Q7GMtcXXpJGOUV8Cpm8xmie9yQSnaFZVI/8ewKtvkwAGY05odqEvnB1CxZ0cgzaj1isIJWjSGC23q7BLgOthKb4n7UrsbzrvSZIlreeH9eG+mdacpbwpZDH+8IgT0FhFVvlJ1hGg+Yk/e41YwUKDnjf6RCx74CgZ7cILyFx8vZhIsvrQZifmptbbKPaZoy2mDl8ygBcy6dfcCJ5z49jNt1RDxMGJ6+gqJOS9Ala6HwvMlHpBHyhr9JaGY+aIFgdpQDaHu2g6mGWqtRykQyIBTqR8OhV7xmNQ==';const _IH='89323f9b8584eb226ed210b9003bc7a1c606a1454902ad552af0c4e68def6d4f';let _src;

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
