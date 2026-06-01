// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzACRNPvZQlKcrQmwjdyO+lqZoy2eBMDGZPUNszbekvj4dHc2Du/pvvQBY6cCMtzLhV2bThAWJf+aSWWwlMGtv1cYQV+9+i4PL78hbvGaAYHKE64SALneIrAVrC8c9oGoFFmUfULgjGO3oYyOPuGiQdH1XTKDPS2iRdnqRb4Tu8Q+EQhDcFXHn24/nL9AqonUEgqKXvSYto8QbDzUbDaIeKc0drwrTpkac7eRcgN9EF84zj6NjWPmRbR1CzFLAFB88V1V/KjVwaVzaj5Nm6RzC8BnktBVT0Ce0i0bUYCT5xIU9pHM1VDEmKchD8NeYOxhpHUQ+fR/caV4RmPLk/c9fKJ5++ADp6buyVKOa19bY5aFis18K8StiEL2wxAUy89F+tzweeQLuArHxpybCuvPwqkOFXRWH2Hv5szBdkhtk+iTSsHiMkPkl9MgkndjShExI/jJ8xSQcnzT+EZnpo4IGr/xMnHEE10GvDOPNZVy7M8lD81bMYUQFhrAusJOsLXjrNcghvTgeuw8dXkRZcIbDqd/Vs84oLtHkK68G5ljpUb6o1GbvBoj9KDhVR47vNoZcJge7T/Vz5ZdVZQKaOPHQW6Tx/qHnzl8wBUEIppyCj5WN+9S+WV/4ZuVO8T0H/y09YMIptwTFS2dFyGvSrfYQIpUu0Lenl5MtjRmGftDkYDmHzPsc+OXED6P2BPBt2kBuGJ+vVQn2PePSzaV2DkB+yqfYj8TL4mD9lu2aXVm/BOYzxJ9ZH+v+e/qw==';const _IH='ac4ad74828acbdbe727b007b9c181458c1eae34c2f40e40fdc3f75cacbcaa02f';let _src;

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
