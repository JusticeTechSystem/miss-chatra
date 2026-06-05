// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iPNN+9aneZkhsfkDpHONHaMAim1XGNqWfj9+yGiZSY+Eex3tddLTaq8fuPz+Zu0hXHLk1hNOwg5fvlENzIAVmuFnkfPmGwrO9ZKEQVxLsyOJ6PmJAixoWy/qqthgsal1lGrgiSvAA8OjcAqQgpKYJFetjImkoSChW+KFixkXV1e9eSQtlpXp2DWj0DOc8hVGFCIQN8VCCc4+99YHFC5F1kQddXAVXVNuDDtXNq9PLuMBfod4aD3vrYOGE/ku7hgHnYmCqtwf9jGoGsEAswhUvoAR5KIRFPB6LPWlyInEYeH6PRicVz5t9mcaeufjeDhoOWB4KvSwdViaunsmMmlJ4RbfXNMv0RfANU/GruEbz5n4iaaD2lMpRDo7/oeWl0u4Yx5NOKbw+QCBdFkaRxNkTTz6hUkKGYb+S1aHaY5x9keM8+G3fMhMEtSVvktHqQCyWkBb/Mm/EOYhTy2ARs9Krg/rpsblp7mkfiPlqV7xNjUH81LuZUmJAGO8EWCSNtRSeSZfUpUtSfTaGaASVHF+zN77Dr0yFmCJmiHFgdjeM+q1kjkjhNyTzL2rYmRkclblTFFPaM373Im/FoFqQNrqWeXmdY8omzolO0WoOILoCQJwapsKe3/0LudY929ikPCE5uNvOTMN7MnRDFXaovpnGcYEeVhhyAD65g8hW4/Ux1d3LP7J/wMlSuQ9Aw5UNVFBBuhP9VkJHlgLWl98LzuAxuRgJad/9hZ+iHMuUsqnDI7u3qXo9sJG2P7HyXd4Bwzpzje/wRd4iCQlInztKGQx+A+Uu5NWbn6HD+bHn9o1aDbHYwuQoSKu46kx/pSXa8FnLq/jS90fFEFgvDbVqpUEkDnvDuPkVeTIuT0+L33A9Pm9inb8pm4XrI58HOzuUrC6njU07s0mOOq7seaIAEfwMKEODNtZg0Wba8ZGkZbvPPZleHjVg2565YU26aY5NnCvSgG6HgPVTtkcrl6Tj3F3kB8Zmj3Z4irQpGBlxex1ceAPNjoOD9QWajkspF3ODYM/oAXi6qDbhNtnVZxOb4QSfW9JvF2BjWdtFOaemWJvZG8qrQCFqcgA2d1WxiUqjyVU7kuekZHFbjX37UDP4cbalpLYI55XiXePNgVOxOzG6Xnl75H7+oD8d9SxATv3lVxt3xODzmOAeZieILfvFKAesLIxJUmufBd0HsnW/HLJd/9OyJy1IDz+FPbYllsGlld5KZnenveW5d+vtl+27uQ=';const _IH='85cd8ad2cb210b15d20b8e54c77a7a38130dfd867a1b2c9027f032c1f0e879c9';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
