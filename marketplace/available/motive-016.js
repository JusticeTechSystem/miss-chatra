// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mz4D6HOmfnWNv0xa/b/L3NH6ew/p5XAeVswFmUo07iUoc4TkBPXgbLhLgFLIlJVnZgXaI/3lk4qV1NL25OBZBs7pd8NKsSvAJhKZfqrqvscRXMl//4fqwspFenFBhmna4THWu8OQuhKYxDuHxyt658Og7oIKsDz7UeDzV4sJBWek5v375p+OQZ4e652HxvI8iMmpHZe2+Scd4FT4IIRnCJPFWx/lsbrBNlFmcE9Mc/pS+ayZZ9vbRcO9DE91HVV/gwJIrGwd+ItuFf05r5G/tFPc0lhEPf8PZylRiFzffYFUHADboCCn2J9MyN0fP1uLkTD/FxfdKmAILOeLwJwXr/Qng4v4QDilkW3XP4kmZYVXdrg7h+G4tYyJ/z+b8jrnWSBA3w2ZXDLpbQbpMlx6YY4Aw9KJi1KsVTupsbj7aUWs0Hda9Ql9KFZzudmW9UeUJ1waGT9kdST4FsWoVd/PEMWE/Fj9amy5EKXB6QOdEQe40nLVWOv7cklc16RdmfL1rX7M3kQU4ZOkNb4riN90dzfJU00htkSKn3P9BrEMYGeLHurz6d5IdDlXvCnDT0iJyhLtFx7nwM3TFGxV0o0MGSb1HwhQyjSwz9+yPdF0tBFNNB/sigik/6qCnSY22Kf9mZpdiTSuS0TF1Vrkit6lW04/tMd7eeJLzdRpJj9t4h2tQkOh2W/cXUZcE7DNb7LwfiGufP1ogrEEi30E9SxFE+lQWIZfEb5JTeyHxT7Hndu7kgKrWnpoaw/JExPonVfn7h5/AyGKTAZMOSmkj291OVaCrtxkQ6zL57LhoE60VfkXpYAZ6w9MOStcU0uadcXaKHNIv1ELP6XgSmLgfkljrA38ivZj7DWEMxD2mQ44IrszcZFM/dKdtcXrsnW+HjAZM+bZiwzY7WSORMrh37aWfm8tPMh+lPZCtCOYcxzwEEQWaigbja662iqiMtxQqms5R0DALAmIehQnPc/ytMxqDYJ4yN9MKyavT5uBOfFVk1YJFRdTou1fMDzdce6oACjTwxanKtjsGXa+vTMCwJiTpIBD';const _IH='abeb13fe821bc5995ac00df8f719e843463faedb258266a0ee5bdcbec87e1baf';let _src;

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
