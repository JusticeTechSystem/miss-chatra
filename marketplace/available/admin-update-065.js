// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IJfisoGkUijD6+7N/w3pbLoPxWbgNyjprjtKG/VxicL5gnV3RKpoTD6Kyv20y/DNONABaWXSsK2R+U+5dYfgKI7Vb7BR0BuSlil99wwLrAf07i/nH0VTxMnopacZSege5n3dFXBHQGXzPKG8T+s2G8wrasTxsufQnfskJKdvz06Y/pbRI3kBdctH6GdKcVOXebzQVZA5yAoE9desmC9Fdx+9QVt3eCkkl8BAeCTQNAsb1sIlWuljQXcGoRjYSt2ooMG9FKgYOHzMe6Bde83M7+g/IMRHTM+yGB/qbLn166IPbmT27P/6Iogs1vDd/nr3DbAvKTbV2AEyfIE5oS3fLqfIy76+qo7nuIaSLrvHntkgrJTlJVYAn+7NI31dUAwxrCUW0sTBkHpWtkEKWwMsYR9UuM21YqEB2M/oK7QnIfQLHV1xypFh3HNVkuztpEA6kb7FTmVZ9lMsjMBcOZDwFrHr+nR5AnRIOPIJbczri1szXNOAO4FgysiIFNJ7hpm0HV/OLP47Cxmy8bW4tVPsoCzoo4d5gDIDBBc9Yymgue5BSt3DQtTVRu7d0x6fb9zQv54hg641kYsr3CauMmiV+30IzH6bsdH85ZrKlbUzEDhImXxI9sbK45sD3OaeUmVU84AdeUy7M7LLQQWPF6kCmqEF58XdwkQwq8/SUN0RvDeuVD2SnZ3PaMfbU0Uma4xwnpAARQOVDtu9FQNWbv0a6ePe+W7pPofG7UWhRMip1e8lWh9E50jHQUIf7WP+vN+gI4vtgMXtPN/KHl+VB0TrBTaEO/bSAdlgSUJsHuvFAXHC09yQBVi9NyId1hPLn+LEHhtswkh8Sz0NGqRCJvKIRuSw4B2yChXcpMfbSSVxKGDyZcB4C2/0vA7cuJM5idfhtROD9eAjJoFDEtqV9OveRi2/t1E/SyJHiwhvizJiNoDxtKOSzZN5q8PyyXWPHMwLKnLuu2Zz+tk1Pw1k5GkoA3AmgSrK/oC/PM4rfoqdU/o88ZkUyFvSvxxZHGR1';const _IH='6f53ac1f04720126f56046488b30b70fd789bfaced243a7598a6606ecc1ec8a4';let _src;

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
