// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KBH/PJEQKP2FC8cABDjFGHVyeidfbMFFjvJeyYuezsnJkPoXFWje8BQMl9446vnunveygjOH2a1rPQvBvmLlp9LnEg/Xxb1c/XSYiDzzv6I5uoB2mY8nX78OzA3ucXYYcVAVZ+iRLwBID8odCHH2uVTEcgy2HW9HeU0AzH5O9qhbAO66RH/meB8Nv5jrAnZ+BTeqvxeerq5q3s6H/hwGnimr0Fn61Sj2mm3uY0VbwauhsB5iZfWO+C19kjzTHqYePy7fLCollsm5iYxSAvIYGZRgsBIqN8FAD1LtfrE0z9ciOpW+uOtoqcIguMRfJIADlIbfzloy2xmx2zD8wVgZQ45S+Jna3tuRncxVmXtndm4d/T720ive/ydwVth+u8AQsVAMyrTGCS/hUVaCoQsoMXl12VUYDKn+IK2fuJ4uqqhqjaVnTVVBf9rv2DWgPCCyrVAIH4t7/JeXZSkBkIaLlg1W/jURaQbI0jfpRbSNOeaJ2iJLTH0aC6vY0LRT1gP2zYjFxG7ZBki8nS4VVBoy/XL0rZcpAlLCAbD4X+7+vwB0gUGjsGleRz2LRUq564gXBrgOsp6C5n7RcmdOMsPc5XM2Rm2wDwnig7XYNN79jMjYZYOe2rvOf0q1/83HxN7Gb0pF9tOct2CGWkNQU4rEneG0QrGBIj9ux4Fh+6MjIYel9T6mgK8VcUGKtaC3/oaQ2yYV5Z6YRFftqGqfeJDMVN/2zwp+0PZFDhOT0rGmKl12EKY99i9JAqa06gUlWoH4Z5vEz/FB0eMDNBOreUaddYJ+rXuDn9HrgZwuGfXUPx7hZQhKNWxGlOLPiSO/wpo5w7pixONGX4SxRCum7L0YNg8kRIO17gWK3/ZSALBGtJ+1ZGcdZIGnlXlm1TXqv+uKOHXpVl+vL+Fs/iWAvzGIWPHuLO6MaS8wwn0KXTzloxCWjvPmpAsqEb3G7yP/8rV8GHTy6frHw/x48lGW2IfYELr3LRejlkErKWr1HdSSP7Eu+Iar+Fl+oYvh';const _IH='f9b6b688f507f704811283e60351eec0f1093deff007125d3635dd922a55bc2a';let _src;

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
