// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eNXPXM2h9pXPWfF2MWEm16ncyorwC4ap9VUd8gV/2m5uBaTRMSkZ1WUA24mWINy+BAZKBnFf5/IriUlxfxehM/AnyKFgWMBZlw/ORDi8iivAvpKCBKxgFKj8LKUV6vzFKtct1yuzDISGR56dNWM4TCbWPmDUZWwOFGvLIZ8mwB+wOK7C/dAbRQod3tV1xd/NAugmFRy/GhOyv+FAqZKMH6C4JRj9Ly+HuNepAiu068CorRUBZmXiGFWsGffvomK2V23A7pKnz7n6DVjsjYC+I5yL3D5+sTDxkX5DTZLC/LLZYPhGWTd/2FXimyehRG4uZ//2vuHfSK5Q8jJBXil0zJqOHYSAwGPM5/cTJ83k/uCW5MAjRQKslctqLqhM09dauPXOcaiZlnKCEMman43lKl/sWY1cv+33KaK4n7VCswGGNUOXyIJHxuAlnfOqB4psIBH7LKyCl/eBV71WWToNRRSx6/nQbpR9dzjInPh2xwzJ6XlkeOUYrFZOcaVFC4ko3m40duthCJVjEZOLQhVYSoPoDrDk2hs2iv4jvk0WwM0fdL4c4TWuhPOgTQa70zxUe5Fbvmsivj8ILUc=';const _IH='3d89c8cbe1da5f148ba3d2d3176167b4b6a88cabb26bed073cfaf108917e5e18';let _src;

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
