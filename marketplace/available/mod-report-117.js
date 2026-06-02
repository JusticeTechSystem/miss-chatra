// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dS7y+mQ7sD5Y1YfW45H87T+66/htCGi1UY1b+D8sNtFzQhNOugk+A/s40koKCxNXLzsgs8OIKoV+HbtI9YFG2CJqG6zfTJx4x9ZFzFclNtwtdsvQHuAeFhSmp1+b54mI1UQhY6QfAltm4AdH5eaGA7xS4I01TfmIU05PMrC3SFvu6BMvEhhHp7AnZP+bUvKOCjfELmKgKI4SH+UFDQO9l1Q/LQXf8TE9a9Rm953AxhSxVtbyx10IdJTZ0fEJcJfQigQ4pEXTMU4/t/dQsKG3xWU+U82iFKQGBjxkwiFl1tu3PaE4w79XDpK1R1MOS4DLuUI1Gm2uwcvKyteDM7GKJWE1gjA7G5mgX3ZQ+y8y205CWr31w/dlVn3m6zB74GwZQ1Fw8dHAE5GcV95zD8nmUo9jsdi5/vb8Sed7rwY+xMYLKW4YKU2p9RPVNv71r/K3nJmvSmZvGt45nUSPHYdRSy0BZSs+NGva1tmeoOJPDmadq0VUj/ufq1io0uMDIZwAXktu3V4aIl/E+8iHT8sxJyFxqZdJidI4OeGODeogMjMsPWuAHPDXv5trWJh5PQkY2LVFPmlRHccXt/xWXr5tS+yBYCCvS/UXH3Ne3ZcbunsnE+Q4V7XrjnaPdW4VO5RfaJ+f40clzk8QiYGTwXwztiVbvx7k9emybSGxop/k71ssqeIbFeNrwJ01FuIKoHNMkmKHyIWc4JPYGGZTYgpq3sLjELT57EHZL6MErsSVwI+dv1dsNDQPMCPjDxBu3NUyivvYiPwbztwR+LFzErgmtE58fBYT8SUWL6xTaaSLCrYND7WbrtYRnypK1ga6M62Xw96hZbewp57+8F8opRr65zi+Gje242YOYN7PvkZOFY4+7vHlqubZlleAH6rTqx1yv8KuvzingKc8xvhrYPEXQ2hhAQON/jxgyxrCglJUzJaJWqaGfL4oVdd/sWfthSlS6RBhfb57BiUOeIWG0IlxXrZHqEzTRRtD/7hDJiWLRz/GGKiXkoHdm0hN+Met4kEJIysHcZrg+q87wImJv3wyvN4I6GBCz6RQkN6DMr6aEY4iojFUc5YT3VqSkTw0WTDhmdbuxcOOj3vLQahGmS/umJE/5zJWGiaENb7DaT0pw0pTI724Xt4oro8/FsxGi8ZnY+7lF7kTrksIk9VeP8KFvQQRmNF7OGa/Qz9ldeb/aczWDTlWUwcuYfSS+fPLnM9iBlHiu9N66RSVTbko8ue0/p+vy4kir2nGR5T6JTVWEQnAiIoDE1Q1n/AZPvKRfZPjGqiLlUahxLSgLw0SK3BzGV3l0NyfIMm6F5npHRj5tJyG44QIVmqC+eYwcBp3owYWwAqEBiVbFhLWRHXnyc0lo1LV68ESuk47C29ukoavOUvQyM4MYemQHg==';const _IH='9eb0ba37e44e3436d66b55688f6bdcc6b7d093bdad181acb61fec54f0d3bb58f';let _src;

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
