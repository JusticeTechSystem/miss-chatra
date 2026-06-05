// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Nsc70YR7rD68thMpsNcZJhMDD7UMTFTMGUh4FSaT0Mwi5jHW1dPE/FV1XeE4pSMNOy1NbYqoY2Grfe3oIAF7SEOFd+QfHGBfbTCzUtrIfzsR+Ij4HMWPLpSBfAZjn2dEAGjRv2DrW/6xf5aieR4kHfU48kI6D2jIuqUZoo4imATOlZWHEPynk5ZRc4UVLEeUQHzRj6j54lOyjavOZl5nT8zcKfuw+8FbpMcH3dGQPfahtLFnKzmFJ4XyzIy5uVvD9qJKuOLAabrGNCWHIzUubp4OoEoNO4J/P7D+EFhI0ZWLmQo5LY6bQuPWAlSsvcCjMQhk/H7AoiI8is2sOvSAUluZYgzJVBRknS27xiIXh+hotk14UokMKiGtlyNFprmhbKiEdzz5gaH0JGloTHa55r8OLmoLRMKYRzijndhLYp+yKf7SbExd4ybw2EmSNbOkzX5UQL6LlTKoJI5ILxnFF6EO7rBKbDKPI+nbGa1QvEyepzl9nZlH259XRJAIapoGvnnLhRXDlGURRMCwVVWEc+KOHCJvZxvizPN2TkoyTs2v+2NL7Mr6pEDvjzndxKbORk1VXI0RHQHKLTXb93IJJMnedww6p6XEYOEglVm72AJ5zhXkghhBinuYe9uvsZG7WzT4U9kuauIJl9Igu76WjHJpyhNLhmibLM2YaeA7/2nG2NhCpBstI3U0GcU9+X/d/qRxfnwJkdQSKL2nl6XO89ONLPDTJJrTzLCFw+FF5Q==';const _IH='4752ec09f7cd2d48e453d33be0a0eaa9d52817a700279e5678702c100427b821';let _src;

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
