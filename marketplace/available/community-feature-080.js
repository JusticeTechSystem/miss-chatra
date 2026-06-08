// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2bUd9dGRj1Dsy75DCM+3LyEBLy8CCp5Lc+spXwn0CCq8ueI33GAhlhcGi4cKWrcDPekShUB4zZjtAqYC6hsxjUnIjgFWbLOyyHsDZtW0leBV3ES6y8ldkTPnTrpBSABJlvNV9RvRncOHC3v6DbPW2eU08SXTd1cm424voFCv222Wk536lfWyMOT91PEqDPG1BcgoyxLJYF+vXOWKEijOlqDvVIjyJgKQtj3k0glNFeEjrWueiJLhtpXVtLv4/k4gcJf63wp1orjxOZxTxYdtZLbUxCZDtH7GCCz1BSj4+Wt71Pm90jK5sSKrx1ix59E0h2QE1mU2qqAtKlsl4RiMT9loDmCGNDY0MXo0TL9+bqwg9yhpSJtdhqyJwsN5gRaoOgFrIuHWfYRzz3Zp7TmdgWpPtAFX50qLXGm9pLUBmlFcqHq80Pf9cO5IWToiy4ZMb0UcsqNxOyirpB1xYdhLHdwyks9QQDVBkOSOAUq3hwnp2mmQjblkaCDqGzM0FXf6i0tGG3ObJ+6dw0o6Vow+WPaAk7n44RAKuCUYq/Rh0sOcF0DN8SvbbZGzscpTJXK7yfOLtcR9NDjMejg01y5JECF3GvXLwrVbOXuEjYUGRx9mB3OlFQKiOIBdwcK199dp6nHdyPRVtNNW2unYqnIIJHctNjX6mnxBG7xcJe7fFfS4PGGxDdgmXhw5BI2DljxH8AOdix0CN2EPFTMxxvr4AAk/0eVGYJFYNKCXl/maEjhy8voEzGA=';const _IH='e7d0d3534ba183a738841ce81fe987f9c666556092e9fe45dde2baa6efcf9a41';let _src;

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
