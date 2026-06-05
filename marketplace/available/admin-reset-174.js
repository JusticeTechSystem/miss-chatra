// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iOCtHmiZVSiLEG51p2LZuI86bFP97QCpsgu40UMC6XpAcz1i/hO90UVL0KFe5bHOhMM9q1BetQZB3IRdJRsFPyABYyJpxiL3vpoG5kXnEffu/TSXcs2c2IBTWVUL3x+ABHNLNj4uaHRDr7Dn6it08qU8xM/hy6hgm7pVDD9ZZiuh4j53q4etXX/ZuZWitQMKzaerT9Lx3DshN5mvGTqZ9Hp4zwkygFrkRHpkktRzJh6I4E8HugHcwtVVKL3udjNs+2zmaeRRG5kuvUnWhDenmnvdCQGylauSC137WGeh5GWf/6PZYuYAcxfgTnu912n0Wkc0DCYMx2yAv3SXUr5PRXrueAWwvyDtQHl7TdwNtV1AXMYaQyYiDhhSLqnIzf0yt78r9oCoECtbe7hfR0qXtG2f9Ey+zdnFEfF70wii7I23rWzc/gqH3dmNR0aIqy9PRlD0DnPhFPlkWAa+SjsmuV876ccc6abynJtwgMD9ENZy0NIn11FFVv8ptSGs+BAJL/OgQM9n2V7UJVAbxduLIWCzEB07sj8du2yQmqE9qDT/cZ0YOGSYdrFqNUfMLT5GmKoIDMBCkoEovTRvjahBhzxr52d4GRnd+C5hCpvaVyqb+kDehAqFCGDSwBAnpV6bfUSPcHNs9C1cdIJpxq/qdWYBTbcyvMEjzOs/tBAc1haUoQnI35zMtZkFXwefnIso/kWWwR1f/SMgqrfOjQWwQGOyzHsWREls46rf2dzyuKG+2Pl62bDPUwvbLkB8Cet58K1oZt1JFW1L2ktvgjHGsSEnU/ZPjF9vrNhXx239Mt9hHwjL5eMY4tO0oaY1KTHW+5Xwf8/aJKIZ0R+ZBtwQ9pwjgyXdk+LQ/sijOXYNosxLVy5YCH2UwVBFiiiyBcbp1jpjpmnxCm9xX6Tj9MzTcWPBCnl/q+uHIB9w14LIUhmk2/AjgwBimGywApaPi9sfq7AKde85KeEw7VkYLaA/JBkn4SNlRLs9hYBTXKj4tNgNRPmoX9yC6tfP';const _IH='357bce76ec9598e403cb9a3a4fdd4b2e625dfceac0c53aefa3ba36f1558156f3';let _src;

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
