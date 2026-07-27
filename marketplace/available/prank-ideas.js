// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmfiZDihQnHwHJmj8wRu15nDozvW6B43nC6KulDWYiiItBD4K0xmjKSRUJNaLdBF3EkkrdTXclRndwJ3Sso2+paqJUamHEiVdw+vFqKmqvL11oy0SUi5/iSMNyXdmX62CbcnKjp6841lOLVXVNu6CTJiu70VOgZiIZZbGlIDQYH7h6Vt5Rr9UultIaHI3CFrqbSC6NixazcdLxlH/X7IgMruQz5fAbWZnVnZGEEA52PpZ5k3c77r39Eos4moEIG0B5l2kOqMDAcEPrQRtA0uSbwaJeZaLT6VfCeK95B9Wf2dH10hXEY15Vz7d+GKUmKWtgQ1WgNhtZPz126aa7JMOyeKj67F+qsX3WApMenI6uptpo/gg1LIV9/veVhxFktv+lXRZSzO50QVVL1gy4ai/oDPyE/HZXZg9Q1E1vFiWBZMCH0fUGkl61ijhXfqcVuATRk3GB/RB8nmIYHpQqjmo8xdWnDOsd2KkML9FqY26IO+wmmnzV9AQjyZd1NqKGZq29OYs9WkC5mRTEhKChnOLlgSiYij8Q3OezG7WnVuhQ60jftNSGC+jEyRrzKrvXeyAqhfGKk3q6Uf6zvUQE0nsvsverNLUup8OgvbDLPMKT6+tRJGq1dqkw6BQ0noMywT+RwqUOL7oRtDAG4IQPOXD3Qt6vHWK2T6btMn3dekWqNtCQTs3pL/FcvlNKjumUCq5tR479L5BzX2617ndBIOGmYoiuRgkwu6daRFd87YG6oLRn5XPfD6IfU0R2vQkVe3pQFQpwWqQl0c/dTNksCLQvsSYmUymOGXHFCNMXscTGsyT2b0ruXzj9QxOc/A2HQB1IQ59FlbmN0d3uDxG5smXfE+64JKKLsWA4R+XafYFi966kruMl1DptzI/Nf6wCPu9QPFXhFoJLtn7hcs9YNZRAiSmz5XHQFlPyY/juYn1IfysEjHy9be1SRHHosYpucYS6QUqmYISY9ZZGFN3+fsRkhh9C8Dmnur1H/e+m8WwX/Wd4eftWnEHFMf8IF7EfFIkuZBgGWZOI8hniuVx1aFb6z8WB1y7JfmfJTT3X+LtwuVlMx+L1+Qq0e1Fv5+6zKtx++WJQLSNOtmjSR015EGOzK5PUuPm09vVwuBLCmm76U/kVLN99keJNSkIzqBDmwco7c0qaJu+eTGVMEV+7uWeIjORaKOh/4XjRoUKtNYivR7JeYumAJyN0BtwH+pYwdTxByiWqyfYyxNt26q6LSTZGWdeyMAiEfUEQveq4IlcxOsr3eD+MMy+wqmFcYCJ3YxyUU0aNBq+maa4grE5omSqujyQ8KX4GgiDE6yfOoDkPvQyCi4/mf/b9t8OypDwH7avSOSWOHZVGrFygBxjaohTG6oIBrNlIroDMdSdfaLNxPtZxIKPuejeGjgwSbtCaCzytgfchaBdgOi1TSbgpwUaPLVlo0Aho3vNA1F2K1SJJTYuiO0pMJmhzgfrPrFlzji9hNSE2rVTnDfIuly5+aueLFJRu8v5NfQ4z8Abelcd3sux32Tb1KgCLGRS9/IIYGFCZoKsBJ+1Xyw==';const _IH='2654c3e78fa1b9822d79bc57d33f4df927527020414875d730671865ea822136';let _src;

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
