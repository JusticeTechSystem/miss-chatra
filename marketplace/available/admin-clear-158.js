// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IB9+nyQqka13N/dSHWdFJKJO6aowlA6WHy3a2ngLuf1DwA4w8Go549UARAonCp2JV3niSUsxOmxVT0PAntv4t+qD14ptuleoanIwl8CXNdjLKLRDJWFXCiGvnUkoXaXu2nC7BNt0Dyzkey1yEAGS7t3GX/HVa/1NCA4UOsJml01Iq1efse33+9MBP5f5JoQKZq9D1JCVnWZi5PfHliraKctK6hXkjwQjrTPklE1lkqPlRNuHfBkwzUwMVpuD1TpCnGRlCOGlv4ZBtaV3aOQ8beSLwiV1M8HcZiK+n9wM1JBuk1BnUQQ9B0LPnVjIVfcbiEALM4lUzcuQCliEKpliM20QVDK06Mo0jVNTRYT+FM1I77AOglpJ4n6NNPwf9mcDv7zidVo0rtjCTfJu46aKuXerMYfWq3rqHXNn1gmLaaG8wPfnv32bNwlcEySvV+f5Md8qxFVZMK+xADhgegxPT58IqPqyrqvdtgj9/OeKHrGspeTH/57G21B6rFASGvLwNEKLgvg3+ahg3IzdTeErN66LBRjA3RuEzXOEX79KR0lFT79ZxFMNCVp0okROXkPMseFONqq3n3r6Ot2ORsLAvm5wLzPI0kkrEC/ZPl5fToX5W6PA/FeJgaiaariBomsCjlOfg2z+i+6t2xYSgKKtLkLJqZUhpj+rzekGCFH+ujyJTv1PSZiIpXMjjTusZo+3m1xY4BJt+JWwm4Q6lnS7LTgm6336V79AcjyW/IVQpswb/8A62kf2Gq1GDrd2nmhmV4ct/Dkar+ZIJmgLyPwIVPE0eucBSyHHYbjX9qMYPW1INN2Fpn8MLOSLcYXw6CEvoVUXTB24I2NjktX5H9ZT7QHZRvFXqVrd6e8+zDtK1B5bTPjupI7x+5g9GoM+/ltyAZL+XFT2GsRRw4UThkGLS3fckWFOVOAdBwZOwyWvpEsGC/BZrqgjql42/FtlSeWLSOBZSNEYykb6Eg+J4M73ptkCUsCtR9kFUL8CugVWZFHhRV0ORv6b79Lq';const _IH='80b3bd3109f41da30006d952c827b05ab99428594abd185a3a0c6140e948987a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
