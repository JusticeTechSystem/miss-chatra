// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCtKoJ8HHA+TQVmtRH6fP+O3Pq4hy9IgqJuGnHsj0QO0uIxHVr6RwLVgA9NxBdCn+FP5UClp0bnOXgXJ3eK2/DsWD0Wo2ZuhcnqYQflf3HTONssBKGUFuslDzxElOpLsS31QphuGu9l++oY1Pzf+/wVO6ppBSB45dt2aGsKINUhohVSnKvhyCZQuED3tZ66lG+IgCcwMsLJihKJxZafkNiVReuXgM5m9Lm/VabHX/Qnno9R76OVKxNG+z37HhVtfuUv3MyIiLc1IRB/ZQsREx6ByViZevZwZT/C/4Wwgi+vaWP0RjnL8PkEZaWwb10YJxz11mNJanHJDSoSK5ncGpdV2E87cqxBUh8G5BFfBh4aCIQ2kOydVLc71yBXoPzRIf+yTsOIVwkBW4uUjlN282+6u4fR2GJv1Y464pL6XQNvey50JQJLTyDI6WeRTOOKJZYAJZAIdhiZkR0zs23miXeL8aqb1Ye4a2Fty7JYl1YR7ItKT1CnyGYd+vPpGpYkW8NovDIq8TqiZBgH5xXeOzjI4WNktLdEqFjQnp2G+d84GMO1CKsbSY4mv46WuopOgz/FGgpmOlq+43E1tEokf0pgM/2qo1b1KIbbh7LgNR8198wH+wk1aEGN89pyC8RgD7sEcWBxIwz+0H0HYxwOAlSvIGoNcY787+35xQEPJ+pqmK49o4BCltomOZDEVlvzCkqWjGNm3Ld7ZD0RMPGIWjiZ33u9AxVNc9U4zngzx7vPp0EyTj4L0gpeGSKtSfsOV9qpdYTuV9eWxVnLqsVx4NIvbWULzPcNe5SWLoae0D7U7u+TBkYdtxzHDWhMUe34y0+RALcUPDKMydXd8p9lAihppixJC2o7qZvllIIFb+sBUM3bObRl5/xo1kD8K31hDldWHey0CPKWrF9ZmzRmLqDPrLaK/uOfHUnZOmuedO8j8uMClIAB27Mdmaw07Yco6MH+IZYOLhpiEI8iGIXp02DqyhAVWjygKVNk1ZwUPB8JBDikIwEW62HoiEl6+32nhLxYrM4uPWCGMEMAVTqE/aOz1G1PpAjB1wrbsuU0orltti6PLHDxjHC93poSe250hn1DnbmxtBLftBcrtR0m/ySHeMwh2dSzAJcjelBAmuhCREiJ8AZvxGTVHmRCKH8kFKZuG3hk7P92AYytnkTygUamb1dO9/gC8Ogx1Awafy1hXkLryNeuW+h6PWvg0fo7flbw815d43LWltWhQ1lihMQ4tFibSUtUio3fjxKC3K/G/W6HPUInhVOEXQgSPeMJJDXrNTc92vCSfsU8b8yIe6PeIqtm6a/3UBgd3Klm+Hpu4RL6Vw6mfo6Xa+gEg3X74s08vsS9sSVukXWicFcA8/yOD+49dE53HPxUm2gftc=';const _IH='e0daba4fda794898a3f9c0ca401df51ce935e894cd4ffdae13efd373112182b9';let _src;

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
