// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zhieMqR7zFFHd5b5oQ26GWHcXiogVf0GPM0Rk2bPgp44zHOrQhtRyVrTioiskJahfSR4poHx5b4oOvJX87im3S0uSbsBmpQk5W1tGuZ+Dy5tB0A4fz65EYVti7iDmgkz6A5LoxCpbbeS2MQQg+PjPKgp+LoUNR8NxYw67LV6fDxgdIz079gRV1fCqRbjZwYPLOUW3mfWr9//ozLL1x2gXjTPuqom8efHTQgJelcVx2Jpia8s04HnxNoTn6h4lelqASPaCfoBv/NuZPjqZ/5sjzerofgf4uKgWR2EaHpWlkBRF3MB7mXUxenwg8210hiIqcpr8JqxwNK0s+hhkeC2wapEn/4o+Q9kgBCQbeKW3hMJ75OATqwoxw6puh9n8dWjFBJwFxJyVYYi8+4bJgr0KRScO2X5/4rIp7Y+ZNr56/AMNHeNxAeBYfcsGh+WtN5ga80Up6olCM/c9qjdnVnoK4kO0sxB/4OOvbZ7NMeb9kRHoSIEdGoh+LhsfVf2YivVAK6Ph9M8/KNNPRzlYfwDB2WcDewFLnemSPKw9o8bxCzFh4dLsBXbiqnGB4zNtm+CfUPlOaAX/4qDrzglbsOhh/IpzqTzsVkdCasdbxJ5PQkbiskLimWvIdj7uTw3iFCdIjaFX1blV3yU+8NCmrrE99N+dxnpMUKcTfD058PR1vNVOX7dBT3Rc+6AYqYaRyjTLEFaITsnpzGnZ47dwQztLlxX6wLG/nCUbnSH+LMvI32NVKv0dLy6NRCjgQSHK02stb7Fexx1ZBzJn12KINfzP4qRzJH4d2VN1mLfUsgrJoaotaWBNDjeO2Tp5fgXWuyofIoZAMHYVYGuxFe0o/FiMD/CPqkq6UOHBhFyt566lDDnN6CTMYLqjZbDaFZBfHdN5zwwN5xHa09Qg7TL6+AEIYZipPAmYj1kI0bmwwy0IVaxBgtvC3Hryu2LOzyc0MKvFtt24Q4ud5O3M7Xde6uTJDa5b0YDc98ftYpztYjvKiyjOlcDHMcH68cDASESjXhu+F/h3l3ZWbxVQ9RY4q4WYjiIBSctUqWBwKII5bT6rS7CNwRDoUztG//Z5ByH7QF7U6jEqDerJYjFm0H+JzvPvdoZfOx80XUfDUf2GHiBzSA2C0Sxtcf+aukdnrz8VLLrSjnVvqZXeJTDhXBO5OjUUtt1Vzc5sXK8NMwsywfg1zDOSDj3v/tLd2SQtzCG4KVRpWkoRyf5exBMXHMoQ3Y6LDLm+urXBCqNoQXth5bFJzipYNbHa5P5tDKPMtxv/LrmuiJkxooM6tqaYy74zChg40bHiCRzdv6fkcNBtD95rUAGaX4S9YCYrFUB9C52JHbyDtU6RoLWWvsjG7hd5L3Bb5CU3KD0ugkkOWG3U+SH';const _IH='045d8c3d26c9e5efa9bc48b9ce3d903d934a505db6d1241ff13342ee39dc74f2';let _src;

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
