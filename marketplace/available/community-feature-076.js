// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QYtwJ/5y7iYttV/6H6BKCyXH+nKq7ZT8q6gW/x3KzRw2b9S9DM+LL2fqyxLZYinFTI2oiUO73FurfxeR7d6eCbYjDLm5lhXdbgSxv7EKAnsEsoRRzgiHn1CRkOyOAyjrcNAOtOX540ke7QIGULcpR55gR3mMD3hqzSN3hAd/ilj3XqD/bzi+At19OeCK2TgO2HAkWGtxQKhSGYTa2OZwRX+TUc1E5XGuwR0FsoT+ndey+Lwl6uTL6wR0ZXWBZopEwJdenr2aXlfM2p3m4Mu+JYSlMAGPNNtGbUp70YfnmQ0l95KXMAVY9SjQefRXaaJKqm6F0h2uAgOc/uJMo44zyy98f4MtGd0TGvSaiXM2opQqCwz8GMCosObMCAPizqCfZFhGu1lgtG2jcFzXqX8VhIrmKzuR1xCrfGfIsMoWPJxyoneKu4pmGCqjMScflbKp2Zc5CymXAauNbEsoeDq9E+n0PQcPk4eHknsfK3SXBDt9Hz3XVpwgZkLv+Ve2BYpXL7sGb7+4eKNG3QXIZ/v851o6ttRfcryrij85DrY0hY/n/q0Xgso7S58IL/KUt0uyfKTPRUteOs/8BbXtw1388+GQeCHhz7VmWmYIv7Ni2kWGNBb/X7pn1XHVMbU7thfi6ojD8PfiBVfcq0DVWoz/zRypG0gfU1YHQj88ZPw0TTzjldf86uWr3vjfU/JVvbO9iPDjmjxLPHCT1QiiVGP/GPDFcYw=';const _IH='73739273f8c1fee5ba70289962c19c6d862ebd789409f450ca67b29602b64770';let _src;

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
