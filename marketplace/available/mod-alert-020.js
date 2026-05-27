// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jDNlw2wX+VX4FPfEjbhAaVpK5SA6BUb+7YHbmOz7F4lk9Pzt4dzbyKfdVYDn4zyTlBhtjmyixz/7eaoLJEQ8eMninFT4SoODbgrcUpxJV1Yv7WfFWt100+osY8CrhXbosW2kBO2EzTc7VMRGELq73L4skgiUCzXa8ZFSpkEsBoqO34DzQl+rvNocpgC1Niv8umePBZhgGgcydUeIBheRV3VfW6GYaMFJjRnkxt1lAf64OUBeec/ZgzPSIK+MV4XAcSsoGakSUmfNB1FczwBzkPyvDE1qFU6aR6YWaQnEu9bOgdP8ZY2kWzV+VVvNVubHDBEqpCrDdZkkSSXwHuU+pbu08eL55oY8j4whjDOOTdZUgdiNTGBk68XAWA9+BKTnTfckP6Gro6qJluux/Hq4RqjNXtO9MN+F0+BGlBsGzSwObPeUcg/NYBsBHnmsGt+WN9tHCzyvmRpjm+Hm0YiMWirZZNf3h4eWcVIe/L9XUXSyrIgh+EToBSF93i5AehGC7+8t5pQjSx3pOwoz3tVYR8NWN868Y0JvD+2CrKtyNdRBQZ+a5S38Ri5H/OsVMR7KYyZPlss9lZ7s9nlxjs86N1xr0+odDEOkFlWLPlrptzE5Q+Oygv4XDIsdjUxj+pF0tKH4kEvooW1vFZ6ovFCLYgPE3R+irxSSYz+LulmfCo7mT3dPhg75k7yfm2fImRy5xia2jsysy9u8xlPtmu7JMbkjsWgUq0PJofXiPlnYImqe6F82lpZWFbiK7QQ2FPhbt8ryUbampcw3o1yt9i0RNA4bL9oeyyTa0Yvi9dij7v3oGuIlDwN7R3Ya77enNhaNA/NPMI7kDyU/S18UaOKBG2vlITR4f36eemDCnse796g4DwY5fzPfA8PqSxIyzylcjH4yTqbZfwbgxHfaLgVz8wJhrt4TVvS1DVfkE3SJwyrQZL46YPKldjG0wbHlZRR2+RtUbgV6byLFNPObFkqza/gc6dX8u3zGSLBpaxqmBrdGD+kaa4Tsh6Xm7sLulfZncN769VXgGsYBHQyveMU6x0VT1J0fZFAh1oO3MosbpMULR9Mc2JzIFOQwlhASjIF5DldBQi/bZGguqvccG7+xctRKCl49gNggacaYKdev7AdY6UOFfDmHiIxSeqS1Dxzfx79lg9bn+yEvI+8KtYM5oJXffEZuVS65F5lzujCMzpwgCPvlotvuOVhjL/H+foBrz1CWWTS9ueak/zrzkTDz8WDwUaLCwYRekbNZcsTHtJJRBvr0pREM9SdRPmu6i2nSMCXcoLy2S79xS0OvGxTiQEU3QQ2yYZ3rY7DJXsIXThp4wp6YkNJVrrjoa2si4/iW33gl92wO8L6Gfd2NIJDeelUKICBCL6NwEg==';const _IH='b3bf2a21d66bb9c0d4c9f3d8d95ed286ff4b5abceda128faa775e17ee59ab279';let _src;

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
