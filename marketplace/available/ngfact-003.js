// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oXbavjBVGZir5HHeF1oUSJtQF3+wylTibGltxzWStuJqUSUJU1DB/hltOIRbxbxvX/tRFalzExGlQ70WkWvG4HcmzE3oKacYphKigntpQx5JSg+g1TNpl3CJGAGJMYLcsLAQ9yFnyZb7k3BMiM+V0kKv4C1unnhx7LKFJn92BgF12ObsLs+/A4yRnhANQp5k+tmM/ijdL0JgKWnltBRHsmeGFlenoCoK6ThRnXCEvBaIEGKxYjW/1jkrgHlSky38Ws1aIlMSmLgZJzo4gTOjAuuKyLAz/s7/72YBRPApM4AiKRpxbmuGLfJwBxtlBCvY7I3s0x2RSvQQVSbXqefYgyWhhNGA5igKxbnCF8bqBPfTIzZsa79uj3jx0JG9/9iEqZLqQakrG6JTajM/E1hZ8PmIrw+guGEPVlWyMgTsnZKcIVD708MNsc8g2jbjFdKg7tCAWA8QyK3CR/wZUiQsNC5VNmgxt45cxw4iaw0AXmQcCmVD2kOKe9/akyMN9e6o4rHciXYIQ34Oh75GCohEGaYU3o3CjHeJ6OhK3NA9LWIxnZtG3JF3YGv+bDvFxN+6aKUZPS2s3n+Ob4X/X+HDtt/TP8947yypSwSUgcB9WdWVlgrhlG5985FseAQF4H7b3f9HbCCULGNT5xDrzHZDw4Js8pTXFr/GGZ1+JxruM41Bz9KLkVDbp1HbWxwIpxpYtB5G3Jox4Tsp/+92+Lc+wCnvgYm3CGjMdsi5sXwdIIk=';const _IH='da98166c00e20b3d33a1014f8e368a0b514d44812a560f4065a12b403661d025';let _src;

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
