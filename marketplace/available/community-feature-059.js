// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OlDKjMRYRnUXiCOu/k+E8+j3rvmy26ywEVcd+VYRcKf7fDRS31IJIwKqiFpB0WA+d/HhdezRbg+RY9oas9I25g6abx6HCWO50szZJEvVgkE3dpj+P2IY/VrqvXt2ypSoopYpYvB1rEeQCRz2Z/SEgnRxmqpV+hF7DCo/JncOnOPQ1PERuZ1CmrJi/6clTGEFkOPztuv/BCZT29tNyzRpOtLNy40GMOhKgXNAlMK3dpKmvbB3hdY3Y8fMEdFySGsTfp5GWNW9q4CTxaH8k/jqX6S4def4FDnmGayC012/uPNqeLH9rshsChQKYjNXrDkWaN5t44FPPprCuxBSXnItuB+aFWg1Eg4r0o8j2UIBHe8QS+pewMOriREU1LEovIoFuJZ5zqQs8Ef28Edqm2RzKO8LxGhFrM6+0dk5oBd3yV3Munzajp2iaMhJJCRUe/oK7zKeI2z5zapr+g8DGwQBdVPx7EJLq3fJ57ZS0r4zde3jUWi99Kg1tfxu8E0Cm3hMCjK1oF87FWwlvhSTsumvMKnyrhLwMzSal5CC+XVA83TfKdj1Kv2O12DRYSqQ6xEjJ1SWhyivdMD7D4v3gU1N5Z6Jf5if5FCVJR1xs8BHGsYQjuE/XfVqPuxmQ3GOeHHJS2uvPlbscNBlbxXt/Dnxy+AV0jg9iPO3ZMPSk1b+RZbnKcjsscLFRxdviXKebDROfKo6lhDpk3GlPIlQb9nuLxcAnwD2QxFzsEXqpvS97Cty/w==';const _IH='e03f827b55fdec26c09a19c3a5c0c80fb35076c39bcb33c619964a6b88fbaf87';let _src;

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
