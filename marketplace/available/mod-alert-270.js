// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q3JTZGPTR4tdsg4IG522JtVcafXMbH7divazSvKoKb0mflbv3zuDkbRnrtvqLAUxaj2UNkx6REr361Lo85MSAkvKy4bvG6kcrMdRVCIHIbwKW+F0cFdDdTVCvTTRrEP/9ooqweQ81B5bXBYOYSyqYYpYszAROE4YUnM9pjxdChmtRvWXTSsEJPbpS7gnzEJAMkxi7dXzNm0C5ghj6fXCctV3RAQKbkO/xIlEraSVhEkiw+KEUiQ82RLev+hBHHlH26WMaOBLEOZZj8oY2Ks/0x1I6WBT/RH9IzdlQsOm+M2LcMqr1XxoXDFOCweLd2dDuvrpg3O7b57BegrNhHabU/CMX0ACng6eDSt6vkygqpuKNPTBMYnUMwD0r+cEmeVDndRc2VwoBBgJ2CDKnxIYtPROtT+bSyLc4RtCfM4DnSYDtaDPKoTTQctpc8XHeOTDZHO/ad9Bw7+ltd7TZ0PE2HMy4hmXAh/xUYCTiUTIOTHOJTZiSmQdPbJ2sUmjIHptg1rvBLdWz2nPHcJYv+gGzZuT8cG2cFPkvJgpO0luREbT+iTmGd1x+uersW2R80Mj7isVJX6fJ5HRtUZCwUzn1ZsAqUcMyGjNT5wifV7QKzQxPfnfvLTq5wIWJEk7cTeUIxlQQO9w1Hs8USuiLxd5KE0dMtd2zi3dnSxW4U5tqS4AHSU4+DKeUYbK2X5CtbpjkHlkc3nOhtJBeAn2cDoBr2W9YfmXqd4G6kgBwjr9xNhuaYbeRsmBP+Y9xNVLmfmNPdKNWrOm1m6hUsNBm1oy6J/NYNenD6ImVoxyawAPvTWXeAzhoOh5sT1yeNzYG+vFYcL1A1JXTtOG/HZ5O+DLBd7feMFElgDgHwMHBTegrxxVOgSQZcIJ6e1i88/9zZ1KQ0BSa6mfL+nFkoPO3zwAMJSTwNkTjms7kBecfQphjOR3x5AZRYwRxsFfKbrdknsvlF+gG2HNKAnftHa+rlNbJ+SwYUl/NNH6aYNrxgtsC2BY9U3WycnTOTuLT+9iWpniI/psBWlhFwGr2AaJQFzBU/RpO1Fxja56w/tTidmvI3A/bs8SVaOH8ewJMewZa9wXQwSMMfxNIkLIbBa/mn3zhse1Zl4RcFEPSqEjSpijq+lAxjhMD6TM/TyTMt/jdeaphOKhwBAECkwqtW89r5jhMef+YufO1/LSEiaglvL/SXcHP1GupA8L9SPN7D3KevE4nCoaVwRFPuPZlmjOnJZnZKRy4dyUZrj0ma4RhGJrJ/P6R92mU0zX8CdDP1rx7S0vyGisQuy/bIcRE0WM2cEEgLx3plxk3modq6f/p/pZ2g/b/t0XEmNhDBqbpCSSmuw8KV6XigKlcPBUHEdG2BabO6HUuK9apth/EZj64eCg';const _IH='b3bf2be90d407b0a8a299a266f5a066f5caa1b752254528081ab383e092d11ba';let _src;

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
