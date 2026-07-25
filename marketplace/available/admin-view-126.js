// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRnFeQ6Fh6HPCqdDtxueAyzFhFPqyoYYJGjAvBZNRYgAKmu1WjMyEGkZE4EzrYVTKabmdZJyVzo7iuI/iXXssPQ7M/2NZNx6yL+6FmF2crNVdKRe0HJOkloVwOhVSaRgrwC/02WDRDB/Nh1KkEe/hpbK8AxNHnvfQNFjo0EWM4ARUGlYbbl10mp1Jsj8baVE5qhwUSeeaBE4xVtRUNh8l8qIj5cKnqoiZDzx4swwkapFg/fs3suMaAAoAduZPiWmV+bqVklAbkvn1pJ2NfzU9ai084o8jDPN6eGJouO2CRZDskqBmdRx0J7K3eVRs+e2Ad3P4MUOjxIz4RPhcEUwb32WDAkyrVLLCPdu9dKH2yMYFqXp3hi7hXO4IOdXpB8zzHI4am+Bi3ibhENFUZZ4yPhm3oFWfa83bBeP29UgYRVUfErswesQq9Zg+f2uMTKsT6tTmxK31JGC8L1WCMxpv6JQA+0zlOmlqpK8Y4His8Jg8DvraVI9GdDtvHWjXYbNCdY8PUZBsG2ie2nbRbCo/UKz/fxAIIqEn1HhYTSeHU5qLnV+I4/ihxVnWEW8WbCkKQ/mIafZx/7ibF3urYDPXSmBm3Ix4BJ7KdRUB0hmmKTUtZQWM2V8NPZ/pxOhneNxEGw4oWTEsFL71qyB0Tcq287lhhYYFuywTK48dcZtpdk5RDBKl88bGpaXcWq2BvX+O0TQ9al+a+uBBO/Ru2pal71rRAY1TGBf4Em5n3/W297DeCAGQ5rm1pi4C0QLuzZJ4+13yeq0uinW0BL4DHd8EhTcSn0owC28vyBLgLiZgAMultXxpLy6YLYFhBPoPEtzl7mWE+qZwyF7FPRqcjMpXyMLWuZz/XVgNV5Nn1Ap5Ou17fX348c404ab/A+PpdteOQ8I60Xh+OOPvmBmZ0yxopjnjG3LCpUL4rMfv8bfwioMPJFCkH9wiAAasTTAdijAjk/O693ihx4Iq1GMR407DFypXa4hPydMfDymqTGTfHeU4XeQ==';const _IH='c1a5422309c598c5df8bd6e0a44772f8654c586ce5bbc5645882e42f177e8091';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
