// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7eb2w7D4PnleNg9LdjswnQtyt5feAYp2kOW2hOiGLiPlXAPACyGOH5T6ZquU7K7o6pyoG9NUBXV/groyHhrE9sx5UYT/d0HxDFzMSgVqfJBuJcR8VzA2YL4+ILm8MNAV8HqNsyiGF3NllKRQxiocE1dnh56STt9YAC99g0ADLK2ChJYTiHLD6v8wSZIk+Tt593jkP8HaNFuQ1/ZinkqytLWlMdcq04h27iTYT9aZyCOsQYHKjELIzVdEaT9mobOv21W3is8xCL76g6qGvlhGAlLmU+mzjcrygagJTqlKHFPMlLhmLu0MF9rZWljv9D/sdu5VnGtqq2TyF+1k0SgnD7WcFwDsvFeIE9GPYaK8lynXeEjNuUMbOAaDFEmRih5Ehq5xIkrLUXgxC9PmvzqVBkEhtUmhLgS1FjToK30b17BVe88+tY18upOomVNsH5RYVibh7nqfNVZUP/lFjlaks7oB8bGhZDpwB/ghBccQl3Zht4Hs8r1RZKW17IshTm6QoTjUcCntq84nP5sgamneE/JNTNukKt6fGmziM4eJ3SP4gzj7Tq/kHvR5ukSHcVdA7RorXgPl81QUW8eQn/9xLhlKcGcpbJ/ARM4koG264xkTb7XODurtnVLKoVhJ87/5IhpsbBqb74j8SMrRVGW16kxcpWoj4ERAg==';const _IH='f3631d8bcf6da5337c1a1c598b98fe2d3327db5be1e1b0630db5e7757627871d';let _src;

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
