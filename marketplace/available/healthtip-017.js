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
  const _b64='lSWn2HB+opn8QzTlmyKZZTUtEKVjLtvgSZQjOCRW/v8qaHzxF6gGpBClQ6eEu76SMhmzn0IzwOL0GkLejl8F754vI5smKPa5uhNeg8wIXr5ijcNFGVPmerYhU135UhY+whhjN1v5Jze3t9Zvh996jlouLl1VqvcFGlRl+0CTHSECDJJW9yInLVhML/V1ED6ChdKMxf2U1ZUA+0HyVDZlWzalDHdO1jGNQQApqOxVM9HLKanVNY/iUeD4r+BReubg+3G5GOcIfRcj+7u4aKe5AmUsvJrRnOi4ogagYqIYL4r9WxCWfr5CcDSvb36LUwyvikQ7jX2lZk4j5LPgnr+hZEfl6GavC0jx07UC1ahkBxoFv0gliJ+y5WSYAesf6WNLnFfARoJxUhEboDvWvNN2hiSwURfVikty7Pm67rfczSKHWbUzhfDSbjw4ixT+VzJNTQ7gta8TDaJNAXQLME7qhvmycQLJhTB69KEm+kwo8GaqdTD4M+pO81cCYQlhUqCKFFMYY9vGdRzFl9HkFtmMAkW4II3u/cvALySCP0aiPdOGSsYrGcSXS5d1xssTE4VOkzoyqBVFNLekgYUWZLNXtQl4QKzWnPNS4ePSZTx1Ug8wk5UvzfrlEUSe9jWoiDSPxr6Jr70i8410zl9pa7HcFvDrza7xxRUahH7HHjLTFlYPp4RLntu2zoJt13T/j4F0xehsY753MK0ISu578J1Ht5NQj0SflrF5wqXR0pBV5nNzWtwDx30aWZcuXyH2mtfpx38r+yYfiJ4SEGmu2w2rhXGDYOPf77+xuyydg6IeY709fGNF7Op10ewPbkbkX5bqA0Hley6320GM/mXRDkfXXTbH3W7g6dWhh6YFVqBPSdWqYozRDZFmRVKt40Ys4lJ42xXrlqvEAhm0JVDJ5HN3vWLnB4Pmwz1yL2U5lPOaeO75kAdqLtHYHICZdfM=';const _IH='82a437213c9ee8ee360d459c123d8e2bc11aff308daaec5127b01bd499259aef';let _src;

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
