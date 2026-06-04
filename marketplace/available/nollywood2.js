// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='34FFU0M43ZJQzq0i21t7I0Y9lHudjsORpICW3/tqeJljyx04ZHnereFIZG7E5hA6Vwzc6UPv9CTQyPcocG5VMO87rdd5GUBYdK1zUIbxp4xNwBXH0hoVb8SzWIWPlO7xbx1VeeVfNuOKJBt2BaM4AePzMAD4sAKkF/H/YFU/g/IHyvq0iZlr7Mf/HVYjU4g14Mcg+kN3DhyFk15rhIwTAA07p8N0BwZjB2Ym0PSFCbRNNchDWH9emCBkuPgripLGSjv8/Y7etBntIVPPx92wYgVx9idJjVwTPiZgBTFeoHe06AcHg6BMSzu+izvP5XkXkYBV8AAkJpnILm821zap7owiU94qOCrVoG/+zXfq4MV9WXXVaY+g/XSj9qzO23Va9XVgQkhldiNDoppk5JKG7iNT7WNCcYxyFHcM21ntsPkIa5Xfz52H5FapcXJKo5q7sh95YU7LpCkZ5xpPggvrA4J4jy3uLLMpw6xamuQYkqjCM7GXT/ZGYjb+v8/WbXFmb/6GctYCMYv+S+ESsqDOrQM/8pGxSXqijQZNtNaA+5KYHT3h8jufjfwCZzLuhoH3SZ/K9sMNCDPg52llKF+Km1Kads4y7/MT8Bya71TbQMFUj6opkG6u5AeVcTX+ouDVrUZKWhkZaKjaoalnxwe8PmqIAwAlR9nI+mCthmxAxDokGVUQcDHHrjSMDG3xWNgrfkZQAuORxSOI8yF5m5qjP4CgvSFVSfDeI6R5SQQ4DsfzlrDwBuzDXPWYm/k4bLNbZ+1WDW3W5bw7liPngWqjrfMbG60SrfQ2N02eS0OVhM0Ke1exhU7icGkXLSqzMyXPAae32z/qs9fUXzSSt7/O/aF/2rNT0Dw1Rk3/EJpz6+KtJkYLIUMy8bC1hOpaclcWB7Xm9lz1bouCh4nfsphTIm/BLit2g4AeLTYJxCHBXwLC7Kj6N2hDuWqXlZcULQcZvHAVrxLICf32YgVkGLC1iViiN0hxNQ4n5LxNLYHv4kEDVh1UrUIQ0/sFFQJwG5glmcFtPizwDcgRy+ZZh/kuwlghgEYEDct69nEyySRhlV8WS//m1yckLLgzQx0GsPXjiIh+euOboVhBzCyq2oSY9aa49xG4yjh+sH0LSnUFObjG+E62FjrIVT0lynwpgU6BxtKXmNzruVwMRjHRPyycYipR4d+rQjn5aaFXeru182O96RXyYrm97DGhFeuVdxNjn7Pd8AjmksNcFmdl65w=';const _IH='89fb1f9c127b11d717b6162ccada84b98f988faddf26d820814f701be836de68';let _src;

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
