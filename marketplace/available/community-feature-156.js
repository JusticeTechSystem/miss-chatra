// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p5szHRwrmjd8f8PDfxBJ1opOXcUVbQmuCOms5eAl2aDoDK5LKzJU6jCmPNMY8Q2T4HdFHpRM7yx+zmEJa2r7eDe+8TGyztb9vCpS6zk22t3vlOENrAKRRfDMNWiLX88jaN9U2xL0QM8dvP4WOeKqy88oKPZFPd1gqmlsXVTM6RsOvREu2F4fNTl5yPVZT9IRj41fRXnhgJGsjChs5Z6tddElNnsCDh64GHqjID6hW9a06Es/mddSVzpVHabDSGDZmvIyKMXVEekTj37qwk1rtEfFpspX6V+d3IyjhpGO8UNtLNdilhDs1UrVFchAmShFAqZ0fXiQsweBjaQ7YmdXzknkWCAKgoOZYZ/2snJDGHp+Zt2eFVVqys0+yF6J2KR0oeJYnFkOKw9+NkbsSnGBjU265cLFodsIYw3OIeNBnF0Qb1Xgaum1nwpnsXO6XxFzIOAW4kPM/knSrk5/EpNCGABwmUbcsoEgWXcuOvMEzxC0TwK3yM2lXgdoCJwk9JI16YFDU4YzdDypnHam0976UZ84oNYjvCpMWo3Gf/vSw+5VVrJrp2Wbtiz1LUKXbxXls6ku3xcBy//kRnAV8l1LuI4lNKXBHFzzqY3XQflqRZCRRJldJOI5S2nRWUakKcYQF6bwDj98npQYlO9WaCwVcEj9vrr07ZxHtWG0DfQ/e/xIBYLGtK/KV0/R6A08ecZCkq+ATSwnlSThDBzFgMKfs36onPZEwwjZ';const _IH='de35da72764648e623d3bbd08a7860d488b150901ff68252c39743a68aa5478a';let _src;

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
