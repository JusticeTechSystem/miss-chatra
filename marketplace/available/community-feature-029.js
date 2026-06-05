// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5kRTnkdSex5PwWzl9IYrcEJBrX4cn0L1HC7AtF3Wpx+LNLYINjcOC9jlmO2hcQSRAIr3naxDE7NHF9/YCN0JMP5DrJFc67liSiT+S7umeBd8cg0upDuxgrJ2QfN9nrJX1YI7mhE4jDjKtIA+w8i9FR63hWa/8ZwMpssWMxHKNtP6+hba9zoPKbIX3VsyjMk7zNU+nSmg6D038R+zDEluf9ONTFGuaFOLByPG8zWuJiYSz2r4tWORAjLoZIH3U8Gqu2Lxl9jR5al6N+DJhBKNWmkw3dKzRZ17jtZ9OgOrAfJbgGhRP1gIxvC/Mwqzdzy1ypIJUJ/rWCX2V4vRZ4sKvDV+2VDMO3J64EQcgnAivbpf5mnuDiPgM2uvqCuI2RJD0eLdaewFCEG6J3K0KKo8donpife33fY2KZiHOmsiyRGl0C942Wct9mn3IbOf1ZiUT4lRegMF9c/hAMdXD/KCxDfK9CcVIzIcni65kM11Bnq1BhnLawaKh3RAPrs8oyAw5e7BbNMOfqRozIETmZmKECk/ai+tXFUnjOZqGc54oXsnTNzACvP3v04xBlhmdlRjFW/v8pPq0V6v6K4RXU0RlOb33Ewi7GWv4AT7ZDItoFPP8NcB9W8OkZ2Wm4ucgmgZgBclpgZ3sXhFNnGWCHK3G7alHWQgfzalOqPV34lA9OX6WjLgr3Q/mIR46dapbuvB+M6s77y0v+KQmU/dVjISTqP1mHkVIj4oNwEHMlv/bxR9Og==';const _IH='b82f847dbd2a9e009f689e57f0b1b6a84cc5cd7cddd549725cc57a421ee0ab8a';let _src;

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
