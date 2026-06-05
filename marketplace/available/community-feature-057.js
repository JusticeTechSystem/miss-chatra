// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w6IQ0JyJsKEVsGkaCCyYURpxEGNJqnTMwVMw0+P/mlTMfENlIX5Ob6AMPv762kw/8gzzeBoSuP+WJLTM6Bd9AtgDiqx+279VIZ/kJ400oqkGu+6xaUNi+SgYRR2XKVbs7Z/k5V11X2Zs+8QI/TQyWGiiJlboyCHhYJe5tORjsfC5IN5haGBLTRsppvioGZlB+edh5VWP1HudGIl5T0ER81RO/8lJeAytLP4ERw7u4455T0aOywGPnjkWFooL6p/hYsxfPmjQokTDF0pNR6iffswmvONjpsPe8f4Dsa5/s0v685x2vZCiiMl4UKwnB2EPsax0gxGGJJFbPE8Ud+9S813VGSxIl6aGLBHIL6IQ49ul5LIyqkfJnwK2/9ou25HR15pFcb1dQmBMhHXnICHFUGLprBQ6H1Xs9oz6hjJPQyI6jSJey146P5AN/8DOBfYCR3WdKpS8bER59t0WIU0UtlCSaPhXdAfF719mq8OT6+vl0HGQFo8rAZyc6rC1warYihS/kXvcGz/kLNkx3JeId+8Yp7DeRwuA7UUt27Joa9KYqanBfEbNt/F65sx4OHMUZAZ+rUevIkIhesG1aBCtlrxlFrbHmQi6+hv1RENAqQ2y+3M+vOduvA1FoM7i7AUg1Tm48KscuMIRdtciiRN4fswabyfPTWSGafZs7hqx36rMyWPuohcZe5MHiz49FiK/Pk3jBmH6WEm4HCHOYY41WH1Zba/g+uVJlw85XA67lA==';const _IH='7b275be381461e36f05ea934aa2a81869ba273858e95b21f677be1b96182529b';let _src;

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
