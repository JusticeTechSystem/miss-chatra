// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zf7zQHCe9A9/Ub57erRG/DTROHUMjayDtoDO9gj6C+myUDB2z0ISw06EdchdcQ61QdQR5SGK0CtU8+RAKqfVIdDfFQcPZse6/ignIXSw5TFPRKf2HhaPpzhmcEwvWDKRQ+Vxy/mB8Sn2yGaqbm/qgBR7HND2rzwnVQi+y9mcSh5X28z4coqgeJI8vJ8QjYMdmfOBIfsnIyGmN3GNiNDEMNxl0Fb9smgvnApheo4NKFCV0QDpWkH3+8dhMHV+3ATzqLAbFTqrfQ9NQNGMToyoSnl9iD1ridD0YpQeTOambaNri2Vsrl1DLCfu0qNCpEzNjyvkkp0aNo+bnOjkWZ3MgK3iT9tXwZPL9mxw9pc7XFNhoVAygNiKP/TqgGMQIvxmwxnOSbBlpiT4Y/ZWmsummdjo9YIKdAi09w6LuHlwp1VssXolF5d6CQP//WT/FzzGPw8L3N0hAzDx1XDEgsv9tNa+nTOmVXiOwhUkgYn69XmeseFuGVQYGb+yE1EUjbUkaV0C43AngYrsGsKinTBIRfhC9sSl0+7NkAFvEOTQPb1CkA+SGKoJxcKxH3G0ANJc+aFLoyCoSaSRinLRfSiELqRAAZUa7yv4vbd/Gggqjsjlazuxjiso0opJTUhOOEM56MdNUf+YV3PKhlGYvjzmgvkgGw49SrGSgCJBXLb1kJGxhWB7lTn3wSb8p6aodemRHYLVlFsYysxiTnKXWi+M0FrYsmcoz5CmZAcvyslsDQ==';const _IH='e71c5696f93c0b4feb7bb19c889523bef4f34be50360deaf5bce743cde9c06a7';let _src;

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
