// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B9uOEJXraxjbCaA/2sd+ArN6+u+8yiHkjIN8WM6Jxgw3QgsbndzLFFqvu8/CRyUNYINtN4Yrylm/J0hQUFHfEB7kgoTvT45t84x16c6FTVA14zbsNfleEPIrRMP8Qn0P17i+fWTqvbQRNvEunpXl0V0d50pghjYp1OGXD2pa+vyRJX1M29LjkCKc8+YldbmTNza0WgsPQGBSZfQIN7FLyGyCVrnQxYaqA+gFNZ16fRnQhjC20qZoXd1VnkOEodhdC5015Wfh1SJfJsqEHyCDMWmKx12IZvS6soW/1Cl520ghl2GnTb33aEQxaiE24dwN29H+6xFCQX9cg4V+AD1AgZfdBdmBj2B7c8bmCzt1zetTaz+jemSOqTNvgUZJiWI0OewHdN53a6JF3AUqfezE7xwTKXyHeEDoPb4PsnMN6QhhImoRf4T82XpTRT6pY+/JZVYkC5MR30oUSVjkRKGuPF0NEZgJsQsrDnxk/YicJv1rTLg0bDvL6BYcwkIRiN1n9KwtyplmLeUFvQPJNc3rg1UbQIOun9pBDPcTx6C1nrr7oPvjHuR4GvJd564TTzyF2xr+asAV/ocbhTCk0adDy5vq4ju68komZT/QLzULuA16yqYHNyyDkdXKStW5JW6v3Odzc3zYXhEzkfQCQQvDVr1B2T4jM8dTSgz9cEz4nsFAhKXqlXaHxDLTkf+86spJmSk4GWaj3g5q/nirakmgkwfCaf3hym8PDpGOg5+ILg==';const _IH='f8bc043f6da5d4e19ad2af10fb0f13af76a4809e55feff4f8b66006f24ef6638';let _src;

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
