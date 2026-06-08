// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C4Yv0OHKgd2x5NWIZ2oNn96NtZNg9Iww1MtXHHTQQyMqageG4OCKyIXZK4nEPUtrOanxxQujsszsolguoYa34WxFcULv4ugxHsE8+krpEAnf6aJRPDuXO3/rAgrJVXSx3/JvHwbW9aVhGABQBnhy9dX4345REFNVce461b03+Z1+9ga92PiIJoF7soKdibakq+7h2PkOTQYa/xBoT6jVzngx6RDZGQc+5KeAY09IFsj0VaydRJEDBP7t9sqo6WG739qe8x/uW8zGM54RUuYVZtxgzOYwLsrqX1OBLcwjLR6hf2+yQ7WtI6cfgrmndI0OrBZ7dtgwXNk8wqxPdf7Hb4TPGu2Tk8MtqZ3OK/3y6fWXMqqokPVOXHy2qXzVBfNXFoIRhY6yuzoshkf0Epeyc1DIu8TXxzDKvRKREUKuAgPzo5qt4J2eMKSUuwchUjhnbw8Bwj3TBTftnzeqi5P8Io9VbQefpoAy22IQsKzrwcv72BRZJG4H6KE8GXKNzhExi+Rqcbg5FPgLlpt4rkpwAU6qhoCDOVy9mEFJDdNvs0H7E0r53ahcZJYBGf6NUC43PxIynbT897gaw8rsu4FebHAyTklsrCI/FZhGG8pqMH2GOFyUMDCG8NK2wVdUw/9oYR4d7H8kK6JIFnvj/GgVXZ16W83hspkAopR9sYIn9OOwSbr3YrtlYTln6hfwBJqM6O9Y8LejvZOncvszlPtN3S/DsbPLMxob/9D/kQYu+lHvNGY=';const _IH='485568a535010e6068b40cf82b452d748133ba35e4c98945b9345e75f2a31834';let _src;

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
