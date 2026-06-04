// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='puH5T3czH9xdWiMbjQJvk/Dd3wRmpUpsGeWncmwSp/yj71Z4QOxw6M9g4l34MGl7Dg1rnf74ITm7x4adsd1OxOxe2eAjGUUGWkh9eV/HBvFUNM0zmUZ204CnE0SYSXXGAlQmwvpzi9P/PtW+jrjMkOXS/P3hk7fOFRCdeXVXBF6cgWuVBnDhp8JmVkfUYIT6KUk4A5ftQ4+TJjiKPiJNAg3iW0gKGqfM/E4FMmIr5DxYCN2/1BUy3SEM7k2TV0Qfjis6H6aCUjxWCJ5fs+vOIEPu2Y9RwfOMorpBfOqfDwaUwpTS/MJ7bPXaFpcBpVsMPrNjdWhZsXBBpTvysgQrw6ry9OOo5WBpLiN8/oCl1+vUqcfTjAACi0KMROVQL5rUKEfwsy9SZFrXdenzVDKg5BAlkLY/8ZHxxF0X9QTYg38v88fBlFkqEe6guUWbUdd5bPJHEyYq8jUk0u3cpvcxu70xeQrpzTqUbGn20a6bYBd5qeCLV+SwHLYOah++uD+cDnUhAI8JCJaDbdCTvc/Do0O1lbKYrlHLoMjfaR2SylvWC2+b9TsBWhFG5uudXISxiNM9AAMDy5cRJ/AiuPZJ9v+/dYypWD8vGPhHA/TVYhjNzByhH81DF890kJn6+seqd5y2CWVun0TyKl1JI1oTu0wfcSc05biLxpnm68mCaVY5zMKIYjrwqBvWz7kaVpIA8FdQHqKRML9anebUR4QqlkQW8pn72JLI';const _IH='3c95c9267d704c34d566ac3d31488147130c683b5249a7d5913ba6a139c45b07';let _src;

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
