// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hmrzX4DP2QQW+5nCmT/mwBSb4foLCLzl2sdXzFSeE6j+vbpwzX/HVxMvPNuuWZk4vtErs2JfSA9PI1RhH5OdIrUMeP2pNn3PKXFSthPPRuK1J++4pNpD8/dzSs6bs7QkM0DIchTBMtKsFw46BwNgSbWaazKAaZSn79tag6GBD4FCLvUaanslWwM3FanuKXOR+6FtxLYJenX/raY1J0Ftp+dmSiYkygQoxB4n7fXxEkHD6KFdxbplEyv5F+7pZUqMn3Kq3JIB9QeYX7K/2wdVUdoAJ2Mx1h0EG6dRAydfE9cnZ1LTc2eg9nYNy7FTpOhPBwdva+9wsR+GZAWNBKYvGwuWiL4GjuPPsQ5w8ztj/qw/8kWwzaqpp8ijryzH4WoycZiV7jrLiEgFxlT3gd/pVjcarksu5ta5KuwRI0fCW5tLP9aeVwYde83WZx0qVXR6Tu+OzhNC70sdKFeEiNedn59TcF6mBZv9Mf6oV6ng7MwtkDnwgXmewhXglV6KnCtPb6u2NpilceuFZdB9LwFDiyeJ424HOlMk1IbECXId7ea3KQak0ckjuCj07zTeTg2D//4b3OknJ5hHwFXACl5kZ+Z9i7pAezK7cWzRxGyWTjrRggFcy4JRFd1IQkcrHjkcsc6af09nOEOLwNyfm32DdU+zxSY8+TSYy/DmvGiHtvp6ZKVs5RswKNtCZnxImDnG/nbJC2HB7fIoewF9rgR9QG3Esw92KomQ4OeeQnM7YrjFbfkfVmMM9JcDuP6wGU924KwCiFzDc/pVPJAvU2jNaxA4pu5TReWq2IBs0w12wUZ5kKONKW14qut7H4Lj2O71qQEvbqQqccMesRtS+dcy+y9kOi2rs4eZacMO5OGcHkcnpMnhOMDqNjt/8RYP+ptTYprRO89LztIbTdW6M57AK9IwpC43X2MiEI/4knmsg3psp6RZqgCqon14s4Deq4+bAL+IRHtVWpMBG+Q2Da8Jf4YRo6GyDDtBdkOnBMtqImOkSkWdf+Wp6u+oQLVE';const _IH='860dea9e3c0d84d2d068ba29ba5d9c40b139dd2f79eae8e0841a966523d79494';let _src;

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
