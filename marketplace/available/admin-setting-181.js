// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZtgLYbeiBpJduy32wHSyOVDCSL6NLer7syGp34O5BRflJMWKTW0+xoISQr60lyxDKGhrvFELtk2oEGu0FtR0eBCXHyG7n3scm/p56SnQ605x6266Gtadds3Z5XDmqWq3zRroownRI351zV/UncijtE06L/mtWxNkrRjUgDUzictAis4r/vj9ItelMS+nsGDiOssaiJBE1Feg7OU9+MJwWwiYQxaVJdFCXDl7Jsag86Ic2pt9iLB6GHnXS+rOmwTbU0Jp8cfvKgvyJCNTNzJ7u6QcLXdD4o1f816Lpc1Vkn01OCZC754TtuMvtSivJkNLRd19g0c75VauoVHmPJINo7F/i3OHGD3GLgWIqOzyR0LPtUBOTNRqhGzhyddG12zL3MCC17fKMu0DLjwkm+vaqyNzz/NEVWXJn23sK5HpjIV+McG+ih/cGRIYhaaPNOMxivT/CaPAckJnQCVGGXv9jevKwMe/DWs9u8WwIl0lGenneWajf1Tkps7KHh4e5KkQMc2s7moJ3IDlhI3cYhzNdPBcx7xUe1Hv0pz3pRCJRsbUG2Ngsy0mA99yRU2uwUV+pZJuaI9b52qoGNBOSO4PkYlz4y5ecdLA9LGLpHDS9aEe0akBBMW7euioZVG6pbTxp30rY/ZdkBzoOMKaQ9pO/A4vVcduDZUeKonuCcGS28l723O3kquEK3MCshweAQjkGut8q90iFteP21KOS6sKU+Zs+3tuBkfYd1ZPVACpmBj7uGrQFWFo8v4q3EZfUgjqsbjzUyazFn3riZauTsKDvPjqtvw9n3tiJOfpxkziaZqPa6Lstz4NE6PuSsHO+lFL7t6tiXFe8OCjnBWeb4tTR18U4ldizFi4mLuN5DAxYMy+38cF+aE4aC0sUNo9301Q8VkxmSSm5qCI7l4kcm4HEWwtPVvcgLs/9oR7sn2kleB8ctN9cQxXypmcnhgd3IAPgQO+xj/PW+K882y+84ouL3mxR6zGg+6w1mH5AGdbKRHwr6dfSUEn0kM8RfNnHM9zFpuHf1OPYg4=';const _IH='e11b319a24a623a695e7787b933ed06a6a79054da2f845db9bd79c0db1cd27fd';let _src;

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
