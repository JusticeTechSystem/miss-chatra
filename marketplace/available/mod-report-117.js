// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0SC/P9N55F7K0CsqiO9//F0OOqHCts7qmbqMDizi9aGVtcClH6rceKm1Ozb2Sw0vuGruU+dBNb1I246doCsVYX5C04q8djDjCx2VLHQdXz4ZzubktTdY8vKdzlsNHgFA85hQpFi1+hm3blnBxg7aXoU1VNnV9mnb2y4ic2s15EP/p6SKnynzPdj4LTn1OwP/BO1qjw6KFulQR0SJuw9rDVLYWaJkUXvyS+46YtGuVpVRrWQ+R0LMEYsKq2mmMTLix5cfFadmcbSN7b3fAR+x8X0K14xZ1mdxlSjtkYuTZTgiy1pL3dB98WSUVsTkhswxlMWhQmqUPiukNgxQDHT4A6SF2zS4glzCy2q/qgCzCe5JGvt5e7HQ+nrKn317OHHktTtGqyH6/P1M4q30/HBc2N5DBJWJM0dugtz23Lb8zvsLpf1fHvii5VRbTzLp2/JzSJlRBu30vUQI/dCKhdYOuTRv5DatiWytpEV47sj1S28P6EKjmxNV3VYF1Tg8e2Board7MmXCS/qlc0tO3k4TmZ9AOBrPMhXzljWhmNhqcfr0LwQ+esAWFcguCz6zjHQYZs22xUVbG4oHAsGLdKlL02+h+1TDvcPD4cJUgPDGoGSKoJ32g+PEHCvHHHSpOAbGKBYcIeCBg4cR5gHa0zO7GfaboUPEUrA/WYE2XTGiQ2ieDPimqToMPCN5pWY+JbDmGlUZ9OnWVDR+pZ8/O8jDi9V2QmE7/hex7Nik7HjbC96MTGpd06CQGQS1zPt/klL7EBtQD5mm0aJWrdI6UYvfxYvasq1YmJWQ8a6n7HcIqI6VVv7wH78DYPPhY+fPRw60dJwUJI7rG5WXmg4fO8OCCr6BB0kvl2gJiAjVEBHBV7NbEkxVGa1M/Z9kg+fMiEoJzep3pvaFOoXyJI7VQGQb5NVbrdMw4gu9zbyEelKQ1l3ixKjijAG6xS8JYTn5ujXruTj0tYRN39zsz+4U0Xthmw/tK4FLYcV52Y17CSyUUdoLlBCiHu/MoFWRaWlLkYUJvXXa6xwNyhlZyjywOIYtMwCJpfyhIOoa03VSNJCu4Laflifd6TGpV+XW/KlC1zgvMHh9+tMB8Q6aZqn3gAYAWvidbLfEBuLmvWTRhNM64sVyx0Kgg3j7Wb3RbW78ilvwzl4E6pcR6grfiFfCojFGhEwoUqF7qZzB/lIVsMINLvzvytnUtnKlursv+vjjDVS9oz7jMxW1itm5BJZzNJ2Q/H7oTbnQiEm8sW3Ev11Y4uN5Z6s760tlNBP3AmvFMwy8LnGZLoie33b3467fxAFt2wWa1i4WgJwNOfocaKo5ZCkM/jQhuZC08MCbhczaWG8l4cW0hcKJlnvqIxMe7d7pKZkOaHUwkfgFjggPbCz79xIO7a5W9LIpVc=';const _IH='2352294e2961978ea2ceb65a0ee5593b1f38db01c84127c71e1ac743992d2ceb';let _src;

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
