// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBzypg5YHeo2chUjgsgya1YCNssalFQl6U7shDHGtaS0FRo1rRO9t0tqpt4yGI52iy8ygVL7OOrN78bCVD1+5WWT99+K1T6jNDGTMmKMyYcb4TkK6N9v9vrRRRNcYpcd2ynHdHvF0fYZrd8AzuB/cT7fDhCATp3gf0/3Vkmf2GbgwqYYuBb7BEpCcTZdekyEYxy7S/AYjSifXHvxvLS12W+HIYs6NVIeEFAYG/uyuz1VeksLSxp18NE9RWYEt3YG1jK0RR47M3xRZih6o7BFR2QcETdsne/Hr10ffOie2uQaTrcnS5Ygu/OzNgXRt4ogZsQ2eFPQB55SI4p5Uy0e0AvsiklbOZXtb1MSvFuSHLRO0xl6/jQB9wbFxTbtIkpGGg2F0dzIp6L6X5f5nV5NfFiCdFq0L0Cndn/hkHDNjC8tewN6SEagKZIDxa4/4sEtzL94fPeidWA44mn4/ioY8mknFbI/hcJl4EV84iXBnk9kisLFYIPLaaHN621jMmH7zAxKaqtCM5VY04o1K2ZDPTV/+pQRZvrWYvEMb+GnrNURsYkpJXin5eI5I3CoIH+pqWa73urWlbogit4O27UEjwCw8bsPFTZ4Gtx1i2GeGmgIljWwP42/qEfS3h1hz9bIV7vFYTg3/55W6p3R1cD464/T9TbPKqVZT4m/IcAxQB6Nc1XZJlTT5BS6IvGYEaZYKJSkJbJtgTC+kH5r/gT7SQurDwfrB8y7J8ikk0x3TJh2rwlr43f6awrHdGdALh5+BHF2jenmvgkWfHSzroRc/pNHoL2cZbWzDmp5XCNxajILuJFE7k7njBJb/oCFx/R4dUJaRZy8hLyeaXzEZUXohov3dV3lY7UnZDb5oejd0YOYV5MRXhFmEboyj+knF65NxRe1lSgvhh1zI8LVQi7kQTtiVQmQG4iLEwkeKksXuJaFXjOHg+u3H0eClQOvGnRB+tUWDY5t3L5tohi0JQQ90M9nv+tniGzcnAOsY8ZwabuzoD+HcBQNzI6bcdZQhtpw5E9n7u/g1RB5XGwr+nbAKjs8gINOXak/er/RJ9BANFIL4xECl+eCdetM8fu7hkJNJW96VwjtzXPGnNcDpAGR83UIcoqtFX00/s89iP0iKJ7WIgpFFS7TfVZJ/H0WBbASrBVSoRUA618kn+d0X0J0u4DJ1dEaQIhtOEscA1azz2fdqw3IB1X0Iew6nDIaCGjJZVgC+aejK44DFeaJi+tPoCa2Z1bD2m5sG0FPItR9PWgAd2epJO8u12noyykU56k4Ovjvx6dZPZjNaX2YVVgWHuIacwe8dZACOBtgCbEMG2nwwL+QohFDTZjR8Oy8Rg4xJMT13/JDhGLOI=';const _IH='dffdeb8ffa170f3f72d199a87e222b494b412794697f41e59e41152b3d1926be';let _src;

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
