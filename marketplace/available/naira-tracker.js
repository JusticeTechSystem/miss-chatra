// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zgjn2pGjOkzNQGX/EUp8a2F2VxGyu27V5JVrleDLeA72PIWnFTtWqfJs99quunuEWlm5FzPArXgjvxoulU+EGO33MuDXt5dwxH480y/PyKWOzhbgmkng0oB/+wLWDxwKlMe7jbOP91cxSRvjfD+zgZsQwkBvA26VufamdcCgvMwbzZTnPtrswMNyO5gDIIJNyS83LNQDB8rr2fZ7OgEetWKVUQvBly3lrUtCSS2Tu9h5BSaW263muJ04QyUjQQHUBuLbCUdQrFAhs8nkEWGeZkRv23+VYLsEZmNFbxO/xwJGRpJbkmow6FH/AVgWuO9fOR+YL+sBBg6kUmxJp07I9JAW6dzbKIxCcxFaZPlRA7h7rAb65+itFnEEipRjDCGYOaaEbjM/n6kfVvIoHzFycr7l74y2vjzCLbjZNvKW4nFyPMJKHaV8Q5uqL0EoKqEu+XId1tnhnuPSaDxzZpE64zJBYmqjIig3dqoHeIj5LYDQdKXvMQ/yXnz8HD7MJho7S8xbLwdO3koQuSRvFwg/eLGmVNiN+rCVTFLWOsuHgfj/hoVI6PGut1h3oIxoNIbyIRJ7ezyZjDaI4g==';const _IH='456b68154575e5286b5222dee6f842ef0b6aafc27b573e834ca6c21b18f07749';let _src;

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
