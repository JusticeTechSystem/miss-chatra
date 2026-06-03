// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z5qcGVKEVKJ5TJdNf0tKkdRtQI8jLU+6uo17ifg1J0myq5G1DRZFwjD378OUHGXdzfbANrZzdAdF4ho0/lKYKTyG4+7p0vD9nty7y7TiqLIVXLY9z9YWy6xufsgdHpXoB9PWtvVdJts2mX4IYDe3X1Uw9VYvNEQ+S57s0dZBDJKnh0p+/ER4SAdVymJefogHP+r97prK22fEQ3GmN+qSjzqlsjoHp6fMzY0rp+54sBRpPNngkbq7xpHVdXuHHbWRv5a3/WjkVQKnPUHVdHiEPe+7gybnJZwz33s9qqH4nMv8AgXmnV1CrumDTPP/GA7IMkv8aKoB3/bu5UsP4M3zGRdlJF9s5WVbsNIcNLyw+SF8UhjJre9nHX2dtK1xI6p0nZSM/gKX415yrE5pnAXHlP+vUlhWZAfwUo3VDkAIQl1p6LDKu8i2Suo1spiW0oWye3WqJ0cDG4SXJIC9X0bfSr2SXX9FV/V6ASDjbj1kSGmwy0HpusK3sn+0+0ydnGZDEdLer9h1NLhk+q/WJwPbPpIvBApZ178dXn+trVr0xRYiyWC/yT3/LG9EyWr8CkG1TRaKGQ8nIwihiDEc0iHIdG3i8KkpOSbgEcC0SavIVZrd+ngbAh06Zewb2baTHg/ShFg6PsDkAKBCOnlRDc4KGEK+Zq/HK0/Fcu1r5R/l3nq447FqGvS+hkUgYQx9qIx8a4MsyfhA9ITC9PDB7CYtveet3E9Y3rV5bSsECcszpX7PVVRpKdmuaqEKL+IApl77uZbMlonNla5ocDxCW37IwHnR9zOeHRvXoLoIK7dpza1bWt2x8+yBf8shJQoJbBYx6s1gxVMYx8mhzFefHDKL3ggSP5kI0dDnMuTrWrVGdjFHvZDtWHVucBxsDkXTCQa0meYv5KczFOVsplMSTwTnFhFsJV/0Q+VqngsO8dB1J6eTUCH1WhIpGFx43ksunrsRJYSTKDMKakN5Da68Yhjeby7DpTyJ4YI/qqlWd6LHO4Rby0qOH7jiOtdYW6CVi561rQ==';const _IH='9aa0fe9efc6ef4db003d8e3f12ca966f92878b80b5ccff919ba28165291fc989';let _src;

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
