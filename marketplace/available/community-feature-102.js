// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qHEjO/t/93BiaAtlH62fcUYLw0LiqFf8+Ogz+s2lRDbR5qUbxRqZdFz5Kg75A4gCZdVmxLOYuq/D2u/Qn1c/yfYeyJGejqD6AS5tieU0GToQ7dWqdNsb5FT0rbaNhnDJsYXJaW6IjZMweMTFDiVva8zq/fLHF2Mrkz+NG5xOn/etlI3xoC+mNaPeyGC5j8xuXiIKaj2xTlR3J7LtP5ZkTUdg1CORbbsxR9MI21JB0Nm6/U6cA+I7fnOo1nJELYRCNroG/uG+3Iq9lO/9pJ+BI9xoSsaJeHf0iUnAGNdGa177JLOfmLg09ppYRCneAzXq80G/Z9nVukvxW47RfxVObP1bQfWlN9F4ONfreGdjTlhwMeh7N9eY2g/oo8mrr75BV3nJleXo73AAEDL933CfrKKnf2s99Hvj33D9PBM1kZbGauMC6OqIqeYDb1jTeV+3Szb99B+/0GnIIYtkMDuha4pjK70zqZwChq1FL+RSOITZynwTIatNu15iC1Cv15mTjLIXkdIbnsp3Lfa6bGIKa0BuWGRrfi7fvcLb1elf4uHPXVC/s4vOH/tHu5tk+uQMacmYH6yrlJvGssij89ELjRY2Coen7l1yCfSkXLyE1+xqwxijbDv8SohrFc7o92Z5wVWg3dSj6J8f+UWhYYyM9w2jT2sN8lNoer4JScU4cRlqJHYIfuGGhYeofF1BQFanWAC7xAkzmSGm8/LsrsONpg1UNEtPqgIkWLOqdO9T7+9xkTQ=';const _IH='041592990dbb84ebfff212c7b05f4d7eb3881509d5000d4b255b2d7adf84e1fc';let _src;

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
