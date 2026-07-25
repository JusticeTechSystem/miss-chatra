// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREkB9yptGN7RK5LKGRIl0NOYbKEa/TdyLaIEf3cp1OxCsdZTemQcQBwz3cOn0iwZjmn7N53pJJEoNpYWiIzzHgYaOOEPpr1RDO+PxBG2lyoUBmBbnsaY4wExZhPLQb8UrmCGMErHS5lEkspfx/Mek4uYClQoVwk/C1qEtw8JZKm+UdY9HyaUMDvIvc6+OmovSxi4Fkkg/fThb3RODz+KJEE/MDmdtrY9Bq18WZ4i13mrRl9g13Bqk0X/6CLJbdUmyK5ww0N6oEttJ1aMB9jpAIGIPxgV2hP6r8YZowSP9EqNBToLWQSEMygWAAcPSe1428J4GZW02fxZJURFrKjD3g61OTVqBuraypK+3C/ZI+0zASB7qi3hpHQQEQu2ay5uuHH7V+xKjuDy3LxNlwRJwu18FktUtzAqduYeQDy3H31LjC/Qqo05eaF1AVyQ0w9pg2gww5wG32PuYrpq8o1qmtGRQHFV3pew224UWG18MAcWhjyMX2XhspDORGdLmSDiU40LmZZhdZTVcsblNkZLSbIozSpc1r7AxbNIAzrJGGMKCGXbGilg4N+gnI4m5OF4vTk65kxydcuXLO5P3InNS/CglNAnxEOM4wDXcQx3QCW1crFf9DtNbmZJ5nSJlo3bYKyv0ce9uEPx08bIm1sfIlEiZM0JW+TYcc9+PmX0IREB+J3NSrBr+ruboRRrm2c2ww3p5WCS4UPwapUR5+rn+0xhPsMrMp465pEd4mWWDegZRSHwLaXccH8Bey7ge1fxLQbDiQnrqUUZmgn+DUqDzffoXNLltI92Ap7ly1yA5Fg9ZmPh6/Twrli24HYz5CmDm8Jn7LaER+Fa21adhPM5TZ1ogwO0JXyQKtLu2Erp1UT9+JGpCV0ESc9M/pVkeh4P36uEcP14b4KOujjHdg5sSYwyxeurXR71whmwtuBJhYCgLpBvRB09WMNY3wH6jlbfvH9Zfk/kwpCpsoau1rFuiq2BYEOExDWc5vlbytNXw+hEA5YOGjNrs+52QThPS+//jEUrY8Nb3v+tDiW/qkEkleE7RTx5382So0lttYECwqhwSBulhoH2hEXMAFrcwOJ1/LkFihMYC2EiHKY2r4NcHhDocVRn51G5bEvkhW39Kb+rTEqXJX9LOPJQkgX7m60CTfNbg1HXRX15G1g6Gk+2nPRNYFm0IVnvs1mMP5+bBiixrjEBYMkUWpX9lSLxydSXWXu4P/AWQe+T+reeQmAtaRBupI3eSDCHMjX1yhqA1uXnQxxmq5RiKSxsXTisAGNdfcKah+MnaEi0feWELk+STKru6mO+IGACLaCXbbCer9cuSRvnshuVJEnXkFsTQlQRVo9P9wVs5dis3ImC9PiR3IyRNpwIpjxpFxqvtiVs+Lg81iLtLgW1HE';const _IH='053b74d7be42116eebf98e0b0384eb19f33d359860da707265fce44374ddd618';let _src;

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
