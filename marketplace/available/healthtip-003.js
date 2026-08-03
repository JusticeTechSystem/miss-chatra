// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8ivquVmxZeI0ya4bcpUS1DMBl79V9Fta5oolbUmegOIlC7PmGthnKx1X7p0tp2K3Kzct52zzF6zQyeh/WWn0Tzysl3UiGvwPBmOpSKqwWgcl2t5YQAAx7mbZbB5vyqK2CbrjKjk2Vg61O2ZG87c3VHH1/wlBoBz6yji4eNz9/ujVbJAheI8SgGO/fQBhLJ95JWjWIwD1zMEpGg/FSI0F+G4zwyjpy/LXcHNCSQbQ+VIHRRcnPzpprU/cmhqUcyq352ovULWCoziRYPGpiWW/4cSbTxwv4wu3PYjkELU3NezuyIgM3NJEKWHJksindXgyY4MRnMEJ6Q2Bal/Td3+thJVQcg8KRujX8erGxZT6XsrwviIvXkhOHaeQQuLBOgfIXzANY7CG1wAoUWlh2Sz1R9hSVGhTufucN9hqZClTXa/3gQj1fgho98LPpp8QNddgWEk72ztb2YSS0ddC+ybi9LFD/fEZTfUaji+uF18lBp+e4ejWp3GwD5aKNR7JbOR3C1elnmj9Rcu7z611Ee5OWmDwBr7V4bo9vfJal2+2/msYHCeN0FCiGDdJz7ZJ76MNTOOBbPzPrCHMlBrXjW/074Wck8fX6BTAvGKNUSmCqU7btAwdukSX3/glCuE/SpF9UmlhUZkLWqgph7HAVEkkHd/rBhllE6YJjq6To85u7UXyQcGQjnq4YsYUfL/5LWxAU0zCWu42JZ/GVPavIjJYCd14H+kd+Ip9MSvCXLS5k5YwUXFxDDu65weJTltPNgTLqbtIPsmv3fWfmvHSyHYl3DCwRE4eMaO0A0z42SDqPuU4BSGqRTVs8Yas4Sj/k56NaCN8sDo6HbI64AVQEtv+0uXRDOt94vqJjqIsS8NFaGtMa+ya7zlbQufbeG0tokiwhVXN6ywdpx4KJjMIYWwdzlplNGNyMawNpvRHHuKT26Sdf/lqg8w==';const _IH='95887fcf9dc153707b3a04a8feeb09e613bbc22b63375147a7f1bde81d97199c';let _src;

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
