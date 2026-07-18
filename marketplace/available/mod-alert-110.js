// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSRokZzrcUviyeHxs019OA4BdPvPIyBYdb+0u1fUBMoAsr9OHzzDLyiJxz/ncUg/O0WdEtPWmEdw3zNGdy18AgIC58Dyu3TaYg7bRtQoMEkz/8CteT6fGBbKQ6noNBxyB1ySgYZ3znxYmJlyTrIMk8W5OJvAALd2SUWgNVYlU2ipf3v8jvSk4Yxi5r46w2Uipbxb9o11BSfxCrxxj9X5S6l1BszTilsZNsCRsBVRu7L0y+NIz001DZp8OtOVdEAbM3E5ORGB0VK9OfG66coC0JRQLHJCzc++Au0etb1iqkGDhZEvDvAcJymwa1oOTLVfSHEn/NeQVoJyIlqlrAb+n0QLdZHtMtlcIMr+MQg6OMIRZTaalhtL/JdFcCW3D6EFx0brX11uVjtkCOw/ILYYwmbo8s0aupndtlhE4VC+quHjCPF3Q1UY0sNodJD/ALRPCoktWD2ZRH9mG60/EJBrgPqoJZyG4EeRwjUsqLcyYLLMhvC04QgtJQYHydUCiNUqSBS9O4Ems/zBAS3ijcEdUwy4oKuDnQ8AZStGugEqK9l9iAKHZSikoVhMz2jzR+cakBpLpk836z3GlYWicQL1ZV2UljPeyTKcx4df/wVhhffaqt8+e1FD5Y0OT7wZlKUj7b13TZlkedIuYjnE2y81zuknJi+Lk23/KYfC0JusWHxiripo1p1pDL3jRNoY7gOfcTi/xnsWNcQ/PMMNnsr+QT+jaFpmZUoVfCdrtzGVU/dOpbHSzd1X/AAPGZm6eP2hn6ve4BKQHb3r49SMTxS7vbJMuq4CkEuSDgcVtLgcn+U6C/jEzD5YGuetr5LTXD3OE0YgON69dekjWM3ksnLwHTcFwtzMI9n671mGezOhCcItTEeEIJbBTFKisMRdaSX7fRDVvCDyBLuXlXqvukF/eUE2IQWk6KPeYuRn1tN79Dz8zDXec3LPrq8C0Y+op9KGfgtDhmJLeBpIY2Vg73WbcINmkI2/Iepip9i9NsJwuBmA594+UvHqEjLpw0yo3fNtQF/CH+ADbjaevOEH5PxFsmpeGMvQ15ZSx6pWaLzGNDPFm/vFv68n/9UNfsC1jZRsS3YTA3V0ft25yBXBRgVqyLwQryv5uDORi1O04IM8G/3sEV/O6Fo95VQKci0MmBXEdRrNjz2HIAphJbvS4go0JEWzCd/Soxmk6DbmRPCr6EheUFo5xwaz7JspYNg1Aqb1sVXADUYH0b4RE8NarMlUYK9FkeL6fgSk33oxpgsdbKJOBdv/1IJ2KMVqYJ+mSO/qrmaL/qfyUZwfMn1j5VoezpC58jCFzHEwpY4QIUAPwbWBkYtqCOACgRLUwv6zwCnkFoZMbfDbH52bm5V5QISLs6gci0DPaYFXpjHvuXiJ7M=';const _IH='f774b9399a5a555efa918ffae0414f593eba06c9385a14244519b2332b920eef';let _src;

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
