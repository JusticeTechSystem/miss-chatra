// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+NkrvqzqSR1Jqzqudf8COEKApJV+4aQG9MjG2gSkZ+b5xwXQyq+fAmL5PQ5ZLzWS4l7VmJ6nPCj7Cmef5gWOfdqakhJzAFdGv7g27QGRTHbjPPnXQ43e08RU7YzHB2cjBo/TWejWo40K9TSgx29SGTuKX85NyvKTHlFf+DBTsvDQkKVTRr+PNVGMwhri/HGIVkW43FdxGbnrgKtk255QqtIU/H9Qbh4zNrCop5nQ8Cco+xDF4NEvTPBLEwlZMV7fBfWhLbDdPDUdlnf2OHoqz+0lcgahvEcgdu/wSVbT222VzxP2DPWxDb7XCfcVdUf99KUZqcRj3gYblXaGCO/oC4awSaQ7KZ9xxN8WjPwvClclnYaW+attw4nuXYzzgNCO0RkLgNn5+7Sy18nCn9Xwt3CuC0E4E26DZsdh0c08pjcUloBOGdzU8uCBPSDa/Oy9RMavWvpmm0o/owX+T516sOLI0d0Gn13DbaRUTWMf5pd5e65YED/kq6G/sJeQqUnotfBeUvZ72B4f8X/MSw9xoGUE0FcQNkshBX5SyYtKaxOY3peaSarlOXNy/AAWAejORjoomTLFx7wYikDQBl3ZifwjIu77Zs70EEzlEvfdv6Jyo/alZgI9eNyYrl7leXKO9gGkaHUo0Vl0bA1mmrSc0gvcMyAcuu3w41gX5jpJSXJVzJx4RJbeoO9E8xZ1m2xoKRWfDzdGiT6RHGr2eVl0S9mjyWeW6EUhwQ=';const _IH='34ef3fddcf42ada5d44976b6dfac131bebc138ca1faf09654ce0e1a7222e6352';let _src;

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
