// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0OInn2C65Qurrp9q5WecAsuDbRceKe/KVZi+3Mwgo7zI0moH6en6oBhixhgFNcNSYqZ0T2fNBZXUkKsn7JgarFgBJIPNVo6Kf3Z9zf4fr/Ez2IhOXglmrjZUIERiMX3sKtYnd9LBnAEHctAM20378SqwnZxQ9sYUMjg7QxChIdsxcDVu0yCNpYo6fr9gbLscy6pbLKu6I5PaZzvZQuBHBIpwIi1PT9I5UeLQRW7cVnL3LOZopuyPTQjvc4FZ6Mtle+nK6r/j0t1tvYfbfDE/W30kW4EJ+MCyokpahvqNu47Bioke++/F3+VXYtdpExQJrnbt7g5PnS5jzPdP76IAADqE+VwwAwb/xKEC2bRoNUL4IMgUQjOkrVvUadkJJ5MwbkytVwVK/HUVObdtidoVx9h2bld2RsqBvtQEIzogWiOKXKPTa0nXY22X33AbY9eIxsN5gAhxkuc2EoWhnzeZB7EVP+Sz2HiwmPtBCyCm4QxM0Ugm5gso/Ucv8CmeUdwCzMvbGu3IBkvAhEeHuzBe4LvLnrb0VUUlOUDeKYDvFvjeTjJqP8FhOaVLENdLnlUrqSXacoIGKeBig==';const _IH='0ce23d89d5a067be8e06f83f9145331850b66cb2ebbc02386fdb315acfed9b8f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
