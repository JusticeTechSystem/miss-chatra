// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I/hsAcOLPsjcX1exFQ1Ro41LnrYJRmU3nwb6zrUH351mknDUo00uOzn7/+lCTTEngPuRnMa8XQbvFtghh4GwjGaOX/B3tzdNTS7KR5KfDAyVLJ9klOwSh2LmMjtIC+yaI+sdpV2RLkl5EXSKUa1B2tigrpvduKZ7t0R5LWyDjrPQCs+7UlYmnpkmHwfInuMxNw64Po9xPRWV8LJqe09e9NgAm/5sUNnE0ggfV7aZWm12/q2buTr19YVhLr8s9nzyUIQVQf87a8uu7hZGViZolSr7BRqP8aDoy1EO80ff273Xby5LQBP1VAQHs8Wp68nukvSgvflFNdSJDk6ij1VtpFANMDcAIQzpM+qNpN38rzsPhKy4xIdqH7Pqpo37rmTRmfPkkpZc2ObEu4Vrv9PNTDcN2TVOExtvolnfnaACBaUbhX+U9MHxZif6viX/FIsXI8c4sOOrWUsgvafGrsBFVj521YokWvhtowFMaXIHxxXnMclADw4kpKaMW7W6v8iHX3G2fKMwBxUTF+hLux4eIcjdL5BH+MVapyMlJKPbmDpGKGrkhAyNPDpIrxkwIes5x4USouTdk4HhcltWBybPElDWXQTj3+ShInvDBB7P2f3ejzs4Mct5m9CHSfI3DlUOoIAKY1jFmJTWKznx3D3tWf48fiyQFDUogHwmDFSJQzHWdJYmXvRTmEwytm39TopjgKCaoBAUXuZIki+Hp2LPSY6yFXTHLG9rs5LICdf0Mct24wFWhOrMxWPaGWM9xYLZ/RKtml106sNzwTSA9DApIHvdw1cP9PV8jqz/V/Gaun/pM7+67Ai6sOJgzIQcNgU2elj8dDohR5MOc3DovuY/q5E4Kk96x+Cnpp8xf8ZwnkqSY4iri2lhC4ZgJ/0P81Fc5zkVWt2Efl5pCsZmkWHLk96iyZU+d+uTeqnMDK4wZPqymj9zvI3RV2gQH07pgucWIgHu0oyrjSEK9D2tCPx1HM7J/AOEW7FBVzOI0he4taIn43E3RLgEKkLugHvKk4Gw';const _IH='d34a5b546fd399d4cf199194172672ca1640d5bc0aaa1034efb394f51ce2b208';let _src;

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
