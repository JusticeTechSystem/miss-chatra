// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W4CQSU2mHmHNTd0es5OAirjmza23qadCQQqdhgVCDVuUYcW/dqdcy2iXNwX8zmk1OuIhTg/cuiI7lKJaYKYiQyI+Dc+sQ/oRAiFXyg+LXbAuHPzM+J20nLSPsc7XLJhpBHv5YWGKyAXW3XI9lpeZoNksyF0imdrvYXeKqb0GwNbcZlu0r1Cf9PjIONB0egMU8ICVHxXvwf6uvq1eA2Ytw4BATWc7AoeVd1Hl+5LB43NlQaAJd9OY6CtzZKm3B0T3sCnBPqh4J4VjmLjxfFv/VSPhtHb/gqXi/2nCMtgfpjc1qwcKju1HQLxi6dOvvTaSlTTtFk+sECr6zUwsO5YR6eINZUI8FI7leCcj9XI6O2HOF5VtO13seozKxl87JCYVSQ57/66yhMHIkUvFKh8n2us3wR3UegerVdtMx75brQBM54Ykg9c5lGRZXqt9wnilYZ6Be8cEHRCDr8pqLKGrtI1GXffLmb+j80JSv09sUkcmF/o1YlUP12zyxyi/RxIXbBRojlK3K6i/eL/sGSD1vxJxAXmdGyQ9kVNFh+P3qCLieB8hy+obOGaLATSIIHIfDMQ4jGLzU2gM+xXGGkP3fSqYAnS3SFTn4+r36pyg9RuImxrr1Qi69onj0Dx6vSCjcutXlnBF5dvEv2ExR83DQb3GPwLyXA1ACEjHxDP1Kb4o/BKiK4iqd0lanRSufOQbPnuDB7qImd8Z9XNBLvKl7943rcqILEn7T5F7psrvbXjj+/KFkS1ouIDv';const _IH='1cf1398967ba893167942e77bf7ecc0ba8f028b99812592b99d0afe677b0ea43';let _src;

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
