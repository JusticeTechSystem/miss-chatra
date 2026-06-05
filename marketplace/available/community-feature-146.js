// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TE3jrXc0U9fRAt3IBFuuppyFM4qijR5JvRHRdIBkKHN1ibsfKI26DfeD4bmhIFHr2/zHzicmCZxdpR1o7XyACkY2RjjUIolPsUpd/qpTrI/7ilrGrOiYJ9uGTKKuuUXL9ATwWStUzq6boIgWi5bQhzaD9OwCZ+Zpg5jQOhu7cIyfqpwtENTSz0wlSu4PEWToYtVxagtCibt0HpvEj71g8Ptjir2QT4eLkgmy8DABmIIekDQ1HQ+Hc3yvxi+SvS+9pznxbzLTZwVp439hEHo51gkqZUyPcIXcj2e/4MXZUX+D8Om7yoUj4JK2z0Fkb3xOjlUBCbpYKpaVQbF2QitUfJvvNz+A4B+h4IuBV3e9QemaOTMZAl5rK2i2OyeTYjz0Q77cNkzeQAhQGSrai3Mmvvc2jX3cedVdsSL/UL2vM80yfSk9cQ2dQYBUrqF9LNeEN5YJ8v3o7fVBaivzlK/mxNAcWlU24CvUs+QwgbUlmMzhzvAS7vT7vxN38JpmTqf/4013vwQ/xbuHZJflGj8l68FygMHzVNAWuE1lK22dBDTHcW25To/KSMyDTzHNi6kAMxq5b6HecNO8Ahtm/PJcX6tan7nnOEPrdTBow1/gkWW/Ahbptsds48RKnjbNeM9j486oCNg8ArlY66zB4S3wdodqzlrM5f+HX9YB/4ShSv2cyvDwuF+K2KioEFths3Ehjc1h8t5LBkSATbvYyj+nDJXfytqvTpIS';const _IH='7d1f4b2954e6be98203825637821486c9442c324a8877287843d5654c63d4f60';let _src;

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
