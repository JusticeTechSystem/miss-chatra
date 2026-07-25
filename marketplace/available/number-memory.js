// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQiVc0APX6kF1TklRu0bRe/TpqY0BSd2a9SBXiHsHnSQYenDw50ugEZ2UCghZtgDe6cCUKQtQX+p1ln+Cv2ZBFGIZdQY8twLjjjuEcgTTuKzvxnzUvIGcmb6ttesEehDGaXyZ/SGdfYcm6D6ElVmVhIOYwMZEz5shVxYwrnn44pvFlUgBNL4Y7ryDPVVd6w1vBQkUWMK0EXB3EgNET8hF9+Oe4dS2O2ckaY9TpzllMdhttElPKqJ9jZ3bvO0afeMroVlQ6IP8zJErYEjNgUpzB/AOpm/TJRDInIbE7vVy1BcOc6dzRZN3tvF60T+He5xmkpeyQJIQUwR2S6ReKz4qDEOtmF76imcIoaBxrHCUEyle7hPIX/1ZElGXL+X7zC0rN6SxJQWXFl72oNVqCIzOPW+NtM3Oac/c/Mh+n5hXsnNMbyUXPZWzWvLl+rk7C4s0p8fyPg5iOwFiWEJzy0bxmAcr4oQDSOkPu/FPubqY2njWz0XoylTAo4UYDR0+6rhr+/GyJaluw07mLgz3yzRIIqOM18Asy0SzLnYIiwTI2VS4tYwQ9eyYA+bkpJvff4LHWflLp7Kf+MNLJli2Re4Nw6IhVlW+PVZ2+MnzuMU3nWxvrweheKF7Ytm1YR7K/0jssgiAIhSWvh4I9FlWZHRrroLZmh/HSnzphWIg3d0IRUJxFdC2wZi/5YFo4OGUH4ELF+22pTUqnEG+btNGWt7eTsrwp/Ijvxj7yvUP8hYjePEs6fnUe1WJ4ATms4R6a2eWNVRQSpmqa3q+UAgrbk9OYzWNDMDuO/HW1t1v72HBB0w+xW44Ey3MkmNOLKctxQ86OYLy2tea7XNFfgjWrMvC/J+D5ODzYrexQNLQTvRVIUvAuz3XkUsVcgcSV8e7CFsNBlv/A1L4xV48jdzpTed4AGS0928754rgqpFEqChC4KSHU/C8FoYvWCOlOOluPPRuLMzeLdZ+o02oLclCR+r/cA67SM+TlAWgPSh/J5ploD8ylXpGAyt/gfhZ9K70yRNZg6ALQpuLArvdDm9j0h7GWcwquPIjFKR9xrbn4BwIG5Us4O5RJC078Edc6R4DOx+fFv9d4C7rXn3fcnvIpmdLgzoBrQq08geMuIzleUuCalcsdKkJzamuVIbERKzCFe8G4sqpMY6EozRtMJE5GMm3MO/M0rB0wRWJtiZXIEIQzsuWYFbhii5ZicI7zjTmf2h3JQGxAf3T4JqIJ8FHq3sPpXjdSgXy84o+KN6HlLzrmwA8fpzU9ac4R6Y4aRAu94PPTtYlrF94cSTwaO9dJ4SHjheCpA4pX6ioHUTDgb1ja0wHPpxj1HJyD2i8e7He0Tu68wmWn2EhFpNvtZGGg8ibjAPaFlbCNLt5MGybIh19+QJu67WAXECSxGgf6lrGjxHggxH85Z65VL2Mc8bbmbR4Y0jpipq4R0X6Uc7micrk21EOqEr4XZOPdqXT7L/wU10SBZSk4IxJwuc5WRNmF85a7sWf/788cP9rM=';const _IH='3460c47ba7adae63ad95a27512e532dbcea8d4223c425c340b05256052bbcbf1';let _src;

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
