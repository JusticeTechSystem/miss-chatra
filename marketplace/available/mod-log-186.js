// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gscn8+Ey3eqeMtXdwc4m4ThM9psnUEHi863C5YWLDDWQzm4rt0rT01A5mm5Qrv6LOoCzq3TteZyOg7odeuJAKh1eteO91ODSNKJSznTw5xBKHR56iFlBdv8AopJ2AWx5AxAan3X1bBgjeRmdTCMc6nzndLE48ZYHG4dy+6C9alkvhzvmeshsFZZDmz891iad0anwEAW4vfpVIKsqxm7L4lWEIukfKCMRrRpBg7qMv/Da/C4/tpjM5vaz6kdIgqfndpWdzMz5kPp1Z5ZdQxMEUP7SSTDgXdbY0SM/GZ6zZ0KeLq4oP8dix04ru1wSuBR8XbiVKkl2APB6+KufrGF+Pddl8WkveOuzlakekUBqrDTiG4dTH88oFWp/BsEnULMyRkNxGXXwFMkDEaIjx8iorpJo2l3GyzmqNEhO0dEstW/o/WCUooNP8jKEHLG3r/cIWXTFt66iHEgl12GBnC8VGALW0MvJB1Yut+soYlLUYTsVBdPnVdgczhvbmAtc2Nw7o1YJHFYMmqtLlzfrV5/bscm6Uf1edePQI6Fkyxw3G3rjvp4g2uEfovgJXG+ZYC1+dyIp4HlO5CVac9mS08Vj9Khy2GOhzYANYp4czdsDyzcxq1xfaZCMGPJi5VBj3iPEEI99JJVXTy9UJ3ky1SLbVeB/ev0xbbHy75Q4ZABd9tGl6y4tqJh4+li29Q+jLOHRVQzeu8rxG7xjQxYGUQYlYRAiPe/NzRBV0lNOhgWj4g12OPYVH4n6R+bwVKHCATq2H0bEUuT9Lfid842oeggv+8xSR81OOxcViTJVNe5z25/VIxbXoMIpRTB9dMvlyXWJPJLWRjMrUGw5/X/iDhgT/EoHCicCZriXR0+3OXq3aMKCd9hfHbU4PTZruxDV4BMCAzoVyaC62sbVHBf9+hjIaxy+fkrDqzOiEKKgSHlIwxBx+eWu8arQfNYpanunBPlm2D79loG4MWZonx8JcIT+27J4nes0PWbqiH7x9sYMJVzxNrGICseKrFvrUPJzM6d454c9ygIgTqoddQ3fjCABrKv854E+kFaNsvzr/SzMr2jzui9H9T01nt5w1MF/QdqWfefXJU/1KcdmACWq8JxQELXK1cRno1BbvxW6wc6KFw/rb/M3bbkRpBnpTV9vLL2qdyNp9exz1Q0kdPA9Xon0v9UNDjNI6hByyoN20A9Aq+Og6AyfgyXPANATpxshaG2feZOvWoY2ScgFrnsS2zJ3Go4eZLS6EyAZvKu20L/56Kv1ls00cEp5n5Ee2QLoKzbu+A8gRzjU80YRzfHPtAx+Eo3tZKmpOcOhVJyr6K0TR6Om324w2cpnw0C0wTUI5iAHGqaPVKRZau34Zg==';const _IH='7e01e559967017ea01cc3ca313fc21e4feb2143918ea6474c7fcf2c8b2fa1d68';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
