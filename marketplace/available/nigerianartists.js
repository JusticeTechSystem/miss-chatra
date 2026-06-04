// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BT89gZ/dlf+psQoW5q2tASZEfhxguCnR4SPTSXFYVEmCaWyeHQYr5tMpaFZd+V2p7MbW0X9Q4eVYn+euoYo+fE2Ts1Ivm9sCKtCnAJr7PLdSkfjxhkAbWd96JXj4AwUdpPIuKFspdY6uoZadY5bR33aMHff0526KjCJ4VREcKeTqBPxV/xc4KYApSRbIUOq5yVYAK1pCq0bCdU6rAPHiMJhcsuiNm3KF/ioRFxil7R7RNXNrK8Vyuv7csIjbPp55kCZKYaKXwKbQHjmLa4vFGmWlFmlKcX/MViVCz9InM4rEnnNW0F579qjMNxxuLocXj22B2tNW6HW51/V9NHnBXILFMEfKxhvWzUZmRWpeXx6hfRmrm47xZ4rmSpLQ+K9eUdjplAuCOx/b3Np45YM0IHYGXlWzM2BSYaA7PKSpuuDYfWMhAe1cW6kHq+9kTIVqiUllc934VAJmVq0zvHWyDYSqd60TBABVVH/cOw3EiBesgaM5Np0YORTR45ESLO1YzKr2Q6Xc80xEOmyoUflj4KgYTqHhUb4anNiKgPOAHTlP0VoWHgvRRsNhAfTseC3/XQemUd3GHKfXGAKAakH602JGvJz6XhWuk1R9OWjjlcgUZAMI3JExrDuM+hdh3LQGx7HME36O+bMG5enLg/qyUtdhD85QcVEkZ0N7SbRUajb3uh0vuE9uu0HjBMxCEF5w8smUn5Rt5uq0nlBqlkb+llRaRIpsmzrY2NVGNBkQdBRAg5Zxkqh9+Nk2pKCgb8WW9HMwUJhDcM+fCBTeweWYAOQf6T/Pr2krrJXNu98XECeA+R+iit4QuwfTBxkOle9PjCxawtdQCRJBiWMw/1uMeBszMfyf1pprfczTNm1Ian5FjX88eh/lBgIqK4amH2MHA7zgtT24w/gw8nqQKmoIIFlhbBvu56tOxmN6jcs+D0iW19GIRDbD45dH444L90VhzHyKRGEgmM4C8fOWNEx99Cizr7XhA+flkX1F+nr5QsGtvrZnh0njA7bH3dOXfj72I/+QkWPb7NMOPs/mfidNleX9myZ199dQDbWZKH7pjrnQU5R6GkE7AjWyxrl3A44vEUG9jnKWAlzksBgd1+g2davsiwSDtKEMQEMY75iiekIUEiAyiHtMTOA8eRMmdBfUooLqpVzF2upBEAsNy4mf0uJCxcOSLK+Ew+hyzjjmeLTWsiLZ0rMOIzDzdsyb7pV9q3MJTqpG610NVnfieI04W7uE';const _IH='a1a9990555c2a9b0261f869ad28e1b176e184c8ee23a8d81fc50d7879e010943';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
