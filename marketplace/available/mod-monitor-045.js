// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJexE45DQbAIDXOzWPMItI0qtTq2ieaUHHT1UzlSdHX+tqkOqTP4KFmxFBD+DC35SpuLq2UYXtvPouhq3W+ZsJMlm2KhVvqXrgkS0gy9JhvKSfkU6ZASmLhlzNtD1Yo6jLiBBiZBMZttDbiJmBhZWQ/SZh/Mz39OACvhsV7+C2U18QdSBs1Ou+IvjoT7QEoHVPeOILxs2x7TOqgyuCL/l3jt7Nd973hNSjUAq3y4aYaIc74+aeghfTEc1X38clNRSb94mi9WJcg2WLTRJUME+HvFP7aGHVxJB4mxQUQEs2Jg3bLEzh3jC02zb2WJy7sMvttockvMRfdaS3FCh+MykStBGpxqtrqwkJD1vwSLsWhSb9i1KZ4fPe8PMEGlabKreqInYgVVoP/fdF0Wr4Ha/9ZaDJBwKghbU0/cRhi/F9nY2vcgHUKtXDAzebBq2ug51doARyH+6IRWAR9hBcfkGIHCG76m0wUF+wwX7qZQQzUap3fJB1xSMX4Rp9eJcjlG/P+yvOtjedzWJQ0Mekvemz2uAP//KnQByAKUzusCrVQRVknHuAV91dBzUeaSf/Utwm/x3IHhbKES/GcHR6JiPYs1BjeN2Dtfo/7W7F1pI7wtRDBa+NEo1EGSQ8tf7oqgZXYSwmFkKMzZM0vKc38XT38yOg0FxtlH0hI29mKBaOMQfXogO0evIrwcCHjfOW2orFgoWETJXEeTsLoQBBj41RNGCJFt9uS0AhEE5OchvXZNp/gF6EzG0+MV+irYEedcE/1CqwUhpeKjqzT05q5jegtQE6DeSMK/qhfwKjRaSlV/aL7s2KlBF0rK3arZgJcIoa1hu+gNsgYUyHScnOlMSRUkh421X10+Srz0mL3oOgIFdOT/ELV73Yzfn597J+qPg+94QSpANJ/KPuSCPndxc5V2Ypkn8AHIDGBM/XQzE6ZQkkZc1+mqjxF10k5/dI+u1+I4iWHat0qnMh284NOyUDZdRYppdNKQ3WV6gjM5ZmbmPyJSD0cnxJ3VJX4Gg6v0iGdm3quVSz55IOdutYXN/Pa+gSzcFEPKlEJdbabuhQd1mpALpZwIpbD3VuHOm5IgDyOTDVVgcn9UXh+nDvHnrs7tbXoZ2e9SwfJMjg229G5aamonvHQc9hm0PBz7beGKMeGBScWe4vbc/o8LadtM3GLPUqrf6R5KtcZw1lFTCSIIItVySyWRdlpHm4XVLB1eVtcN3sNuPj42uFWcEFWSvpIXRnYSTcdoaVbDCBwocfd/P6uuiqH+yVli86jl9/JNk8DOpvJ2+rz5+fmEvPax70xOHi0+8fIdvM7x/ckYkehGFbbUGNEUh8sd4UlSTn6mWGrwf33lf/wbinNTE6OdhPjrdr3d6JO9JX+xXD8Gd7e7bGi5gtWR0vn0o=';const _IH='077929c57cc4e0a4672062608af2c02ab9c739da34168bb9438da2d196905c1d';let _src;

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
