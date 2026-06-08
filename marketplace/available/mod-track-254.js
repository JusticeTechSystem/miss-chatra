// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N/THR/SqBdDTapPwuWCgYelHrcoELFTMBxUuAdZXG0Ol7zg2Qzis3lMh+YobmR7J/Vnjtdjiini3C38NdCWymQ5CaZAEIoYUhXEz73wrqdREtPFpPzng5kj8RW0aIC/LR2bSDC3kdSeXoYpL8/atkMTZh1hbM2s+3UromkF7/EjBSaoAW/KOCKc18Z8Za3DuhQiWDQtOE72NjYkvwRaUrx5ztS9Cul0fyT7mcWJWP3fcHvqZSm7dTpyTZWVMgfA3a84Zihuvi4zV3Q20p6+AZ+9f+olAfGMEchPxwE9ic5l8EB9cD/RL37ZBEHgphAqc4W+2+P2RgDzQspSzLC02h/5a6Aa8MFzgd/11Q6iN/IX+UFYtTZP7VZKeENzF0z54N9Ehhh8UPHABV37+4PRv5wGJEeMeQM0LQmxAhIJTZhYfB/ARhYpyywuDTmyqUVvXejQRmIJssg9/7KGTC7CA+Oyq4RWaNV7QPeafB6GQ0PxQm9cXJ/DS7jqHEfS8tchww80MVxpMCjl4ei+cLZCHa4a0yr3vCQVcH9CN38jqQxqXxlGghZ+nH/4z6IWsP3sC24cNeX40kib2DCsdkfjKqoqHAujunGj3LfZSUiQSzx74XYijJbXy3djKCg3sd0X6t9IhH4qYiewSX1uqo/b/cDC+Eizfr8JayrUHyPEqvAz9vMNIpdBKMzIfA3f19hid3iprpE8u4nnCFGmiMqdwxula+ngYiNe6NrX70N2eilxDLm/Prgw64HKR735YTCxrooCSz+dKih9mJImXX+UADLSuJPbtSflj6nDamXWCWByBuMsUHxGFJvSXX03Yi3yoRdHcsnCKcCaqM+5Iw8F+NuH+U45PckjM2znokOI/ExpyR0lXBNHEfdQV/Ad0WhhywkCJek/6gBJV1nLqZ14bulm51wNPHb+OUi0QArXvXCXUIQFcH8SUXDnC6gqzhPEjeV+bUVNeZtmiRHpuZoUc0JfhARGrzT32Y5hAP33TDCx3HDOEMSAoVcPWSO6O7qo6Fu5ZGy5b4YQfnHLjAAbG5CrQlkzaXGTB5Pq17bSXfRBc06xzc0YuNn2+DJD+TaYDbUOX8Wi6oiKmJOn32aiKAs1jOv9NOb0phu3PsGf8ssz43zCnFgpWXQfAvCoqGC+rHOcfuxZ3ZsJHOWA10V/AkR85+M+ki5w8JTZV/uQgOviOBB8ENccZSQXLHQybDd6J/els8QacekQbY8Ci+DwITjlqPdC/4AhupLgbfUdsOwhPQgqYMpwaIdLeHZQ3VuoYWINjuWBv6XpByIESt9QvxTSPbb5tgw4kf7VDiELOzWZg9c0xGO0y1fr5o55OGrNe6ddqRT9XE85qVvCCLImPyjDY+8un5hbmlOyn5O/u';const _IH='ebafdf99ad0a1c15cf5eed7734978aeac1755dfaa19f63174e9f29a40a7e179a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
