// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z3NagU7cylHZ4JkCXuHf3CpIXSDId2CUH2IxVAw6UiqqcIKdMbJ701W6DCRdCxxLnYoD+SpnF+whG1NyYxFOtOq+hzW8h7DoGX4xnKqipKNPX06f1n5+NzTkVJ/kN5rKJ31nv79R72FwxLNyS9z2hEU+gFis5yQ41YA+rkwRDyEsOLJYwdTTZ5zMJwWC1QiqJIHPre4p6RPjzJwfbaddkCJHmKn4d4dZoj0hqTqlTlANdclz65PpSk/2VWghCqE+0Treks+P7TH+l7FyYjtr7/iHErAvebmh9y9jKEpmAKgMioArl6MlQ7CjKoiUTAjNyINc8fMV/Gq+Xk+djxoZuqR9A3PuDrkUMpaop5CXWQajKiiVq7FzbJ4yfllwVfRep8sxY/1srYHDSN+mbkuMoA7FPnLVLDH75jgDGb40ciJa++g+x+c1lUzKrewvlIy+REa66L/Q1vcYk4VnnT9z+xuBvPLM32M3jQM8O6yU4HJO9SK5hr00x4uBiB3PkUYxA+ivK0DntbqVnik9epNI1Xc9GwsYT5S3PNIXK9/txeA8cuaXPnthuJ1al/3eyo4v8tgL/pZebOce9YbChS3fSSUHLw72uaPGx80HSyMxPiZfF5MkvrbSDFiEC9Wg9Vec5aU15s9dXnljIS2k+fosbe5QT1HRLwYLWvX6SSo1R9YXjErPQsbLFsOZPiu/WqMVaZ1ZZUB4DZYEOh6AMh2W/DKEheM=';const _IH='e0a4d8913ba9581f01e2427f63fce8f27c53c63d6c031bd167d6a9b2225abfb0';let _src;

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
