// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TFIN1IqIeM2zqlqqDAh1Kd2QJ5yCnbN/z5fwftOLJ0hoXLY8rYkklFHI0tm8wPq/glp1ITOt6OyUKuUxnbVbOWLsvWY8FS1weoZBaAEc0pKlIjnZwotbaIphWVauqFZyunJyuqXKLahp8Ode3p4JkeescBTBbHw6Ddzw68zmoJmwfyiStBdQBrY/mLRQHXsfSiQYC1oyiv5NF1s4+lkcjlFoaZz9NtojGefDnYiGnrYG5mPq4HBB1kYHD23yTBYMlcrUjpeGrB0um8eJu+Gc0v5IiLErHa2cDM2ryJHB/4uEZrM6HJrfOt61p2SjLpboJrldVTFGYf3Lx0x70wmxTpgbJUfrGmjqV8wNXKnptMmc2nSqo6632QwdbbxPbBTaIaAQaeyAUqi3pq61lMQIeRXlckPKlzz4Bfvd110iwGSNCNO0istJiPLeEuTTSh6lGC5WyLfu5Oh8EqHN1/DQmtnr0Kx3oJ3RKVcR88byMt89lfdx5WVtv9DizYZ9W2qYjHkW2MR2SczsthFeEZUwQsnhaCHO/aXbj3d4X+juLXDEgUCEJegpr4Gbo5vIFH75kjAox0gdDVSXNsB1YfFy/Jl2CtErLu5DhkTw3e1j9FVTPuQiXUPyLTyl7Yq1V/jaIS8Rr5CruT+m8z98DqCAQhOi2r2dYnOptZwUL56gUnrTT3FOaHTJGG+dmg62M2VUyJmrm413JxVsnl0bK95TP6qWVedDUs5GgV1Qmk9UjEQ8AKNxeI3RyAm/RBepSYhvP7DHqgrunQ0OEBQXUHmXzu7LnFgIOQnLsq7qBcbsKpz9Jhvgvz6gx6jHCprdxhtxBLfKd7z7dDWp+4uJ4bPVZy2M4fwEyLnvDH3nsEejcRqCjFoYITV/j6nH6IgEDGQeyqhRrfu+Mtw+pkfTVxRS2rx86iZQppx0nt/t+9ZlJ7C63yp5r8JCTpe1Qo4GOda6UBZOsykOJURfoNNzGOFhmcELm8WSz69J8zsxJOJvp0X7wwtVQXVLNCWj+0J3z5eQ2LNMP3cv5aDhSsfhCmhbsC51wdCq2USgfiCZP6is6sxrlu6XAKVTMqZRKgRwJ/BNnmD+bvC/00cEHiZVrHObWZ7mMAk3KMQGCltKyih2CHS1RZSbZ6xAvLkrMa4yjuQ6260yrUwBVlWxX/Xd87bUAo5XhsaJ+XjEE0anG3D0xOxflQXSXU4bhqA62TUVTelEhZkzPjQ+S4o54wy15kMrD2/gkr0e+WZ3E6diPbwFCMDCPkh+oJrsEhWy0cNQqqxbweKCN/4rQG80800idYWPis3e0pYZStvIZzqmWe6LQLYZduUSo6/vQaG0ioR4yxVKBRyJh02krUGzWZmk/7ev+tsuzZKcWv2fyJ+2Le1znr4x81pDfuAOLMFgPxdR1uPElMyKdmH88fH2TkB/';const _IH='e25b45150965c457e3e46ce2fdcdbcc9afa20c3d83bca90b76a74f405e4b1467';let _src;

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
