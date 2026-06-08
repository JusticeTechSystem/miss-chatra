// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZjlYD+e2b17oRZp1srrSae6Ss3NLOtE7/sbFE7gRhLJLqHFqcMOOnSrukxJBuEa9248X1vg7Jo8MXCs0qHFslO1wRSO8qenSUTapD5Gw72ck4FY6fM3KgHFCenxEyumsaTkMcE1i1CSOLk9bE47PwyTd0eAjKVSxwvrEFkT8zVWYkKgCFCSZ44+ZTHn2EarDDSTV4P54BNtEWm2kOebzibTtvxmTbVnvA57NOxKhUXyyoijrqZ+cGIYYRrQR97Q57QQiOjodq+8rmfFJAWyR5mx18At4uN0TIHND1Tx0mgs17gVySKco25rElGphJgNGUeru/34Fg3ObWKLCQ2OVgsYwMxVUMx2EcpzhTVf4Gb5K/pDl/itUd1W1AOjqnIFGNcC4M3itySCPZdZcHuMj3uBOT37w5t30uQFj36NjnPdeJ2K0C3s7LCUUrir4ww0E774CbGUmeE8nmpOXAxJW8akZ2ykl5esNmwscOOaqq4J09MCFFC2Rx6JJVXJM58ZXoC1Iq9qiyyDcJRSIpCvdo0QJm7QPD11pMOtgGC1pDzFuqh0Du4QNiJC2Sy1HKGwkCOIxhyNyF5maHeALmamOzOlP2IymLTkdDmPJvz53JCleUXU5gTr2cfX4V9byw7gWw/c5KiW4B4XjONVJww2d5p2JJVF5gF1MDVTB5TeR5hs2JYWC7kyEsEv4heikM2JUQLBbNcwGK6SmdYOtSkpLI1AzE69i9cDpuPqIi1r8CN5zfDi1+ss=';const _IH='b12bb71a47b5c4b537f665c69d051d96e87a35994fee0f63df8c8cf4c1d84577';let _src;

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
