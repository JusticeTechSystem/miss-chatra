// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VRM624wGUEKv2dGjoJQbhIaLyKsuRzLcSmGWiEj78nILAtEmy/aQVb1rGN/ocVTdYL4GJfIL6kqkeCJdxuQri7jYGC5GPl+zrmkk1wwSEtQAhOwsChrKyv8mR4/YRE4KiVZjSoTZ2kt+jUZqIw6TsRr2exm50b5B21qZJ/NxkaQqrYG8XRaGyZ+hguNfDhiV3AN8cDjBihXuDKKsWzG5oBJYNLhGZ/iYE24wz4TA1aBFMiAsEPLYNJREHxwaK6CQ+b7+lIs2eVphucytFFAMTcSdY7JitLPh2TJMIE+1/+GPnpCu6hvNN+WFgEirV8ExNyIRXdygbhgg16kSrptROSOtBX+B/4/ziruzyKY/8hom4a9o5QUkFHvczyp+j624epT5xATtiFkY1u+lIwBUGuiSHm0vPd1fJEBchjiAXTGx9ED4rV06mfqlnk0gw7D1N8RzoObjqF90gPPdGAXZcD3AVejaQ96+YGvKRZLQ6hLKHlbGjJIs52vfYU99aEwmSwud2qxpNwMpXcKRNxla3+NDjETAoGuACbzmdNWvTSMO6lGXzJB/N3AuL6/ZuXxBge9+r+oUiQ6iqyVX3U1hqMzAkhj1NLJi7WZckPlAflXlvY/ZmhoY0X3uHaybLszltnA41I3T2H54Nxj0tc+XSkig9OlzxcOMr20N/4H3dHQkcSXmKplYjwQx6PnrR3se3/7VlBXaPmLY34AiQQy23JZaX77I0CsIEh4Ouw6i/y9a8D4=';const _IH='b166efd5f9238dbac80d6c9679ef97196ce16e5de90ab2418dc7818351939c77';let _src;

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
