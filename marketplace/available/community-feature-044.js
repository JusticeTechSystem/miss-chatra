// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XXIb643OYksIGp/EhCKyevtbRoZkVa14fh0V9zRMb0kVjyaJKhGWpui24tXsnwM7Hd7vaXSklHb2viinZdxJaNP8FBuQ4wA0oMfaBwGJlcRp9voK29iQLrQGDdMz91DXaxVLTupL3Iw7Yxt7B9IN4maJ6La7MFg0DJ7KlDGbmlyXXwSg4lHY+QUXazOzlnQr2Xd5v5ci8YuBrl1P9zMsAH8O2B0iJ8aQ6sNTQqkA23BfaJhYr5iGeVw4fxU2MuFh4ICjqvvsoOUTt3Pb9UjIUddwDng6Byed3+HTTBy3qA35JAaS62x5I8aAc+ccq/J3fjCYlXU0c7ZLHlvAfoQq7Dhhnb571SbGqer2Hzl+etEkTvvLAfDvcXbzW3dd16s/zMqDy2Re0WvIEJek/CJmqOwIK00Z5zfZ2e/4l42F1jlmBFMAg4uZL4g6mH/BB8gMN/PiCoi1oHfpzg7P46CvB0iSEMCXs2C3oM6aLd/zNZbtGjCKlkEASweEkSxDX/irZpyhLp2ZfeRsUyqLy1L+vZRGJtcDy4gV3BmVmnu9OJesIfr0XVi17wy7rXyHWbol0xAJBvccqVGpiZ+HdW968VTAPLAWZSQ3fenUiFetUjnqnzhjzMShx/ydnZxKFN2B8J8gpHsPVbHmsAylkr0aLO4UWkfIjI7wkO55jEmiRlJacgfX81Yu0qdHKQbhJ52CK9gkGuit7H6qLX49SygTLsqZc03M2fR5ne+u5ES/R5QiPg==';const _IH='1079a7e68e2ce59d2aa00d2a797a18c8ff30a1b80e3c643eff7df07c6a7f928b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
