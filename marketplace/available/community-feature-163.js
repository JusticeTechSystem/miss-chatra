// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iHR8B+NSVvFwIm/pF2Lr+NZxjduZPbV021rmHrsM8W9zrrxm7RYVVZRkePf0qGc8cJy+eSfMr5hetGaFRFdGDVosBlkelFBdcnwhUEpepngRHKOGNvQv+L1IicceQGmW1UKrQo/ESoUJpxAOzQXjMKAbWLI1Gb2/aw/9CKCzs7m+1D5SZ81fjAtH1btISULjAi/5AzvsufpoJ0Lcsk7Mi68nD8YFsjmyM1Twyjp2ha8SfjSEZE5mzdsR9FFhGcr1Nn6NQ0xxbpz3QJQMLecGGzLMAizjowqDjonmVpjmpHM9gkK06bVFPM3rLpYicQHPzSrFARjsrOBO9ktGPpCpQKTxhV47lsNEVuSgc8cY9zDr4VaszoLZmkPdhUR5yqN5nlBOqigDquQsbjfnqwOA5AKFYsycXJxgvl9VITqgsXOysN5gKUV4e6nXd5+9KgibHeth1XX2BHJ74t6mq2xuA99wbNvJkvw+xm+++zGLsNBNrutIH0Hq4/fAwslw9nSOZYGOcLC4s0YlHCW5egRPf70XK7kww+VSKGU2VP73PvYyOPDev+OcZu4IkMMofR4u3E+Rmc+p5VxDZC7lDU/kJ81f1DDdMxnaxg8/oG5Jnw+dTdY4a5tQ20VXna7NP4g6Z+BUZ+yYY31tNkBqiGjRgsq6GNB5A7kQ3QPVd/vph+BV/QhFms5EBUz0aT3q12LSJbTXvwF51kILiA8Bl3GR9+bXbl+ZiTq1JUiUX70=';const _IH='7d069d9aa744a8f1eb331a20bf7f2fcf56c7a283bd87e942ffd4a89b627a13a2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
