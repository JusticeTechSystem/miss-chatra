// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P4BpdES1jxsLEm2Rnw+J7/1dkt1UiyNK/KcDrfEm+6DUff6yb5tbfWkcANlVT+vZzxMyFkjxGGPJN+mSGtKnRSnq21iCaXQ0yquSmIMlmyEBvnZw+JnKFfIXQdBmhjnQxGDmGboAbLxPihJW4xKLcaGiZaMQjq3bCQ6Xi93il+OFkDeQHSeqvtXCpmLLrRwcoXlTz/24qsmu6s0wc0dyabd/nOQZOfN1CLD4rEt8D1GJFFBDjMyoyDPyAI4VepIIEs5pgbbgbwnnDJP4QHU9hI8UeCAcZJ8RD5VfRpa3tPSIx3hN5jvdxxX2XBGInjSTPqc6ki65uW8UwQhJr4InZn8RbCJyEFJlBj3PrbcwqL3K6Gtm0briqyBdCH1tb/qNpqZSafA173oxaUgNZjhdf5aj+WcxyAK5sNSCLRC8KY1uN07Df7yyvSVJASSitw2QficGc5/N0ZMtodzgcfnGSO5ahhhwKsQKqIJ+9Rzl3y1lOZj5D+xd8qsIbanJ2YXWNOK5oRPA3v02ZXPqgurNsx9RBmWLt5/FvDNkZIspIDahRVzEPaQOnsPQOvwRsF27lBp4uBUw9mTrbQYvg7NWNsIYtu+nTm1HrEFaZFBedbPp5JABzgBIAicafjqe1HB+b8rTj+CpgWc6lE0xvbzi+z9z0b8i/9lE4PLcEANlg7ZJJ3WaKBHZXlTDVUOdX6VfXvXTDniv1fg8k9RGZXHJnUkvLq3FPD6pH5hjDSwPNVnXAsmwhCjGEoOISUJ47XA8ctgcWpHQdTBP1TzaVdlzVMmhIi8RAPL+KwNrHbY1NQXBLyV6YyTvgn3sC2Hlzo1u6tKSVdMVU+uiEWFy1xUfpInxCDAio0hcDDz7EzL7gaqGNwNAvN+NLuMZfe0GoLVspGBqX3zMYm6kYi8ec5X4Zjp8YDJ5Vsgb1fDSefcgXHETZAzgOcWQX13oJqA8x6/ZF/FqCMdK+A46Gkx6B7YMkEIGmh56hpVfoXZk4B+nXSOQRnqPakd0A6qSe0WBprGf4qjki/gT4ZNrNdCsuPjn9sBK/fBc3CE2GocsRlz6uSCL2NFiLaFaDl1Lpk1nVZcnxDWckm6Mfm8wvbHUmmsCFlEuy/yXVg2OsGF80RMY6p5Xj4Fep/euhDdS51uReUvWm9wlzx7j0vtEAbgKLlTOH/ZGXuHdxKV2JNmtPiz/A4b6nlodurTzfmW1/1Q=';const _IH='2361409a0eadd167d6625ec9cbeaefe3ff47b941ff0123deabc16d12d3f6ab8a';let _src;

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
