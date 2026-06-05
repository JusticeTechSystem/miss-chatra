// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ynEH2FgZO3jD5zbvAku5yH+WcgyT8TqnNveDEonJRkDUjQrftW7kxai6+ZdWIv0pSIoo3gsWcbge/05L8hgjyjNNCbRiG4Xze+nsmXhChXBJBNM2MVsOuat07TvhnA4BMJgFGHnQNkIsbf0PjuKVLzY4hDTxxl/R6KqUZrOtHPg4aKkMVkgFUhDyHd8GWA5oHM6uAZyZDYLBNoAwFXwW/OiihrgZwaUWiGj6udhh1oU9DHcXhf/TiKOxmN9WVCt2M+KcaxFv3O+MEdwDwVuWbgkTpSJFR1h3+qeN5+pCutg+64DtHGWCrg/5zvN43ab1ebJMZsRtqN0+ta2NkpVWnrgdxJIhcDR+9opwr+hzO2GrRf5gmWZhLbkSvo5ZP0KUA/qPydiU8+22nFByZZBRcdt0h4yF1EZw8nSxfB5zSV9Y8zsV2/0rns8JCmJ1jvQVWmQ1u9+GozeAUqQsVJ7upEzrfH5KEtSs2clRwnqskdb8K6L+Jb9i9nCLdbpQwoUs2uH/9bHHyb2idRWJOqLQYJof+2iC3+tiuKJB/HchkzZNVaTRmiI5tx7rNF4CNNcJDQ+MWKnbf06acvIg2R0lgH6nLMyWZ2v1KfD2LKfBD9jOXjw8ry3b8cghol4+x2OpdmG7kpVU8UaHjbhSUCwMAHMdETNUq+ShnDP/t/3T9S+aw4ctAZZvTzYToNH+OlQOnKtf3QSyBC2aZuTrHzxBOUALA/YKAFMkIrlMx9hc52UdKRemYzNJouSMrYiNASZS2ioSinpV/WUequXDdPUyJHPlpIdMK4D5vFVWeUsStfQCg3qgevomWqrpdmQe9BCW2b8Elx/tSVdy65W6UY/xyqkbMBn236jCHJNvb26WTYqVPrhLOalXwQSznGtKGh3VZJCzTWcsUx64t0kD9sUt0x0rlrJILgF2iUHdb/5arGK43OzSB+v9DNTFpGjvdBZoaJ6H878zQFTKejuxKSJrzYaLdseyXDoopYFQSUebIhwi0MV4RtyHiDDhZ2oD6p5BGMbpybDeCXhiIsf3Fc4RQVjw4ojPq29YWzk3X1iw/GtNR+RwBCezwu/xPRV+vOcdgdD9q9GBOs9I3WP22vtn28ts6AOgOzI3ykgz3eFOJXdSawal0g6v/DyhkyKWyplP/kRHJwo8EySZJF4RT0WjGeCSzejjlFp7006w9qC+2c2NgM1Sd6RsujLul2fNefN/iNwQxT1WbPwN3NsSj+UtgFFma9+BK5eIj9eien1sEwgAraoeaM/jvqi/hBvCmhYdbIbaBB1vNGa8BeUQGpNPFOOTpF5G17ohub2czdVe+bU9fyCUBIuDcPE14Ra0aQ1buXhZcacoa3HeBUM23n7E+XzQgmw0dAD76KMsB1RxJJgV1c=';const _IH='3f9091ca6d8e6ca1204b8f195e8c897bf43e328440523910bedac0747509b36d';let _src;

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
