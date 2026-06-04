// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ledcuSeSFbq//ZGJMwrq1vc6yeBuVwJGCBc8OpUn8Dd4qTm4qKQ3autWFp1qfJNhV+E2yl/TFbSKyexjYXvrPheLn/J9KKCoexgnFaWXs+bD/tFNqTBACe9+dggqP92mVoQx6lyPV3j/E/duXsD6h/aU9Jdi6mmv7SxqcZ5oZV0UevUYS3/grg6h+owEr0tUB0N002MowSGbvEMPvKQnxACmKSkgpidoO/s8eWVsivtyJkBwS67+VG/y7PERD6AAy9GK4Gpl2a9AdBeID02RWU+mxNl8qS9rCwndpt78KNRWcWcp/qoS3gswpUeonN/WBPvcb8LcqU6GsuypSJk+d9tji7yD2vPUD6T4OLCyKMzwBt702PY//oejmvqhb5BZ4ZLeBU7IPuluDtQCufpak+ryZQlVrww32RodriIxNSjGmntuI83pWwaLCQSZldYRVzXNMExjLVvXwd9/XSMSuyMnM0PmdMz6h5oLnl1s30T2IlKT4pN72WRKgyhIzh8oKplyliG86eerzqunolPSkuWXtMHCXhAJqIS4n/qEZ0cnijtZxuZvZyqli6rNlrVxnZepy2GL2oM2nr7LcGMGsM3tqljONqPJuZ90FJNhFm+q+B4wJvR/i+W4GtIYOK5dyynyv+38rK4GLdZl8jL0fkjK/rjK8MZ9Wm1Q1Tia5ZL/K0xdivxw7j5YsbP1h1hdoEjM+GU6P1fBPFwmzcg49u6JGsyqOFW5Qg==';const _IH='1f951161286c147d96c3b21bd11e6d24865e8af9686d59c42a79505c67e1e5fd';let _src;

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
