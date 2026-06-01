// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/ry/N+Df8gGp3pksKWVRP/yUa6KUVyu4MiqDEhAe66jy7e88RcxezirYyc9jUNg62bv2PUtmTncGQmaoIHM1Y2yBKXmgm7Q/LypSEFec168923w2IqtSnrMONFYMmNAY/Pq8NQ0DSOcJ93vxACG9Vi6+CNfPUoizhMVvwkXU78hESbqI19kQuyeA3NcFTwoWRyNqBXTWAHzyHSJ4O0gOEjEcZjO7t1tsMODFU6bJyARtGEKQv9OfVT8cRa2bDjvFfpIz72Bqfl4J8K8gdbv8bCXsev5OwP6VBH2uMoiAag44BxSoWZYMs1aU6vKMsdxVGebwpiGvM3n7RFGCAbcjHQdeFHUVutlEzgTpcXd/AuJ7Sn7hTuDnI+39wGrOY60Fwzn7c1WZMmUH3fQgB8SGEHEXrYVfgfbbxdpmUgvEFBzou8ubpDlkfhsJusra3ndYSfxLFfPOscB+gwqpurwVm8S63LlUyzlJIigwaQbTSd6m3lX5bBjUVSJaV9XonysNaS5LAhIW0S4GD0ynZj6z1dtoKs2Q4u5sWzid5+icqwbSBrvfX++Yxya51vLSAUwRWuVjfWSdHTq8okG6WMV5t5VEyIZxIGtwTNdpdNWddXjxU39/BOUGSVNyx1nVgUlJrHPWCUt69qZyYT4SFwEqX0zQqxkmbfQy0B1tCX7sySus0vs+BcD2auNbm3KlCHhAkHWlowD9jTsGhsTHQCAJ+Q/gSbK05OsxNZhPbuPHdZLa1n2';const _IH='8a22b3f71608dd4322149e7d0709f044e059c08c7512508f0ee17bb3f60b8e13';let _src;

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
