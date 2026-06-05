// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ohsMMDaKSNZPB6/F2qDXOJMmA2bZUMHJOx7vxhe2hYR3uCPt6QTUAFugcCwYa0QtO3hJ2FY5Xbq67FsrRs/lX5Y//dHXk2OTqdcrzZP4LjYhfoazDnzOFgIUoxyrkqlQWhzV6IGrrYAC1UCa4IS1yRGjOrgRIiywcEkKh6UI5fjVjf0YbmZYzYdBu2eNanz7VpJTrlyZcQXH1zA62pRXjT/HeGtdKweanOA2h7BDODuWgvYoHZdAugDGv0HXuvZTMlr4cFN+1E9z+QD3AU8zeQbtC838PvR5aXywLqHetHcrEU/uKAfT7Sz/1ZbhttGpDZdN73QpYshLdabyQALVPosMdTOb7xOibQZmSeC35k0vAKat1pHP9Lk+ksjPPE2rhJQgnAi3ISDgv/RH9MPKMZBzyn1JTI1q82p5F7P6wufYLxqvB36V/5KIOnCkRXfYAqE0nafABe4/Bjua3EIIk+Qx6MdbJBM/1y5M4XoBQvhN4LrsiZsJM9GhAfs2pQcQOtH2Mbjbym0C15wCrR+c6HtNCWIyqXuDVBQLD+t4V48cE8umPKnG6tSSFJ93fEjuXWYttYOO2mXQaukDv+rdCcNmp0N/Nvoe34GfOWQBpoXS0BIhUR6d/nWdKqsOHICJKEFMBorA9zgvy4QKyW80qNuOQ6doTUFSpWqu9BRSxgNoiXp1k6RwggtMtgNuc0xMMkBwMp7Hg8t2pYrr0tp4tkVc0u08h7NZZ/4rtQ6nBwtuC+3VMoXgS3c+VJngSGamJMoZXNjaRaiJbN9GRVf9hi4/MZkYTVY1I/IFyf+xFF/nlikbM+6//VsmTSVOlFlEabRhG1lg38QHuesgm7v1Y+pbMNDLivRzao/cFJbaQ0RPMHaOLLRnKDI8rVpXasI3KWAkUOM1LACuq7SP/6vnW9Ex7jimHW+4y1dlc/OT1wNfr9Iz5yScBNHn3qjwfLRirbPDzGNUeB4lH0XddTbbTuGEFH/Ttd+nwlcVKCgrjrqsPz/6cZaT0HhwxuXJq/CeYwmeWI7COQ8lCbMLNIegIu164casY0VIOL3tJU5vjtjnXmAydZvTrqKDjczjwZou5gG0l49u29/O+2C+GoEtz3BwatMiByeeWXlrtnzam1kOXEo5O9LmUMmEm3mQQ9qn20xN01dW56qa3m0lXnnGn8xbYakBAl4W61jrFHKr7YDFuKEgrK/4dIswWu/bSQigGPuEsXoH/EwRjHx7oqdRyZpCvKo0UIxdAZRaaHuB7cAKf8o56nfzplu5C1vF27VEmNSCpUgIfFpUlQNcH6B1ajZkD2AquUZM8UAXBLSZS83TeLqgt+VEzh+jd7ypxZuRUU0NMXHE9RW/G5Fh5iRjAb5uevxtCDKx8kDXmXUz';const _IH='f63da31711a8dae73316c923519d1bf0d29ea87b1988aa6c5ef6c91fa3276c7e';let _src;

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
