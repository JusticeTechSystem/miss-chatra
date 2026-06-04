// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0X7bBCLYF0l7Ff6x9d7eHw/2cfhJxu3N02v2UEhlRBooii9wYcmrdQd+MDPxbirS2cIuvdP/QtvMxE3IRvID4xIt4UcgXyT8sngNtscLbleNK2B+buxuM4wWao8rMare8Zlepc43WccY4VXl6wDKQCOtjUipmgrQeO/CGaCqNN5/A7cJ9SDvPuu3q0VHcsr9aelytcG3XbWVXGOoyMFGcE2P5q+Dqh5F/F75+o4XOypUH8mRfDLA1G7bMC89qlOKcbQuviz7jN/2TNWlsr+W9Fl78jTlidQxN6AT7zCbqLWNBp5TN02XYeRj8Vb8vtNt8vEGPoHZVv5Ejqb2flE+EBGYlAoOmuzD20MIF4R+LAFdcWD61YTYqZEYaD3TF5mDqXmawTub78RuQJTvKW8p5ge+H+ABiyNXSAac75eU7ZSuNtcBuMV0yV9cgkPTK1Becq1MMil7ATu23+pZFOPOCeMNXPebKCOZy1+NQRKUEgHyURs+c0nPmVD3KlGBkL+sDY97yUe/3xCZ/WMR5kOgBQsg59nouwoqbpxpoLtuch1MfmKyJv57BspOPIH5OyoGjuoTClNBEYTqY5Fd14XuxbWahXOpE1FF93HJKLz9ZRHDUHN/aNhtkQSbGU28DDrK7/hTzGU=';const _IH='4ba86c6d48d719a416be7f46a45598861b616147dcc00d5fb6b93f8f567f0f86';let _src;

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
