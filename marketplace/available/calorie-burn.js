// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IVx9liuUPVWNNtR5GF0IyXB9mrb+6gEOqK6UmsGwaiDpAaAtYwSpvv4yaJji5pX7XBzWxP2UQ6Ya9+S+txaf6IC69/Uy7L4vTj+42/+qeRe78gcfozSkNzZ3v+3NX5ngQECE/C78NTm78bwqcgD1ydKN/RwfnFRneuaGuuHY9/q4iiJooiizOs/MY1mvtUSGZ+atdZrgxA90/oMqiUc/qRNlq55cEEc9DhRy7m9uwce0KE1J2+frUNOiQXo4npzPWtUTii2SOB/thprOxU3E8pxiK6B9lVemuOLKgSAy3Ls+YcMZccvoOI028dE1ILuZ+ZVaIuNDxAd71RrWSEfOB+YzEcYyVzM8JDcYq7UstbDgIsk8FNuozzu+8WuwNtjsBuT0EIuW/Iy34s7wJ+ozIO+Y1vQLjIa8yVq0504vGwtCcfpb1A27V2XwEsVi8vAP1p2m6V+6PI8eCy+/5xgalHLvbTWnPjVXzIEN6prv4bt51BBzI9u6nEldI6p41reGG4jPzMGJDpY7QGy2UCQukNEYslXLAkcyqRp8EWuyXFf/pMZhJQFHUoz+UWMh54wLyh3FmPAApltOVVVWxM7U2yepIbRnRXPbm9CPg/q+GRLb5dI0REZXSM5CQFWCmVUgZiNWLL7fqbHHeF3mcoq0N/kG9RdsF28vjMrmmDNPOzOPIrz9yuvs5ydfnbC3kGxahJSpSDmg8USXjWGrWMIAtc1bVOL+oSlfslmKsMDl38NMZox8jvohyUfQOu1uZ2EWRv7KMr9lBP0L/EhNx7Uimf5Ayonq2+pcooQ5/GkwF+qKH3Hj7TmSUr8nFD0GMA/rh4AgDYNuvoMuXWHKky/pj82Y3lvbceWUz6tD4cAtOcH/jg0jHFRIdlwYgVFKfr7hvuorSegY9+NRNk6wqBG1Fy4P+DvoPBoUZaA6W0A5DVw/QsH5/IB/c/aq+zAim0IBrjJWCgmQZR8k91Mwi/UlE0xrYTknXuVI4yKDIaig4VYXO9ceDhVnfjt5UgTnLB8yDmfqimLGWjXFxtjvVpDIQR5URiSWw2fyANoZaJjsc+fnHuf1Jze+Q5eGxcrPfGQA+ebTR/3ZcQxCLi2gNxTXLVvB+tIni0OvkHiJmOT3b2tfgjxhch4YqYqId5ygnaMrQYD4HFbK6AvDL43loMc4nw3n7b/8UFC9Kw8iUnjD6x/dRGOjRnYG3c5Djyh6jU3xI0MhttpW8ouzgGlgAg8zU7GaYoS7sEcLPFctgSSzdgugeL2cIYJo1u76Tsr7+Cjy95i8d1DlcVAMG4pJw5yseZkJ9gc8xApaEX8e4eeVwe0MbtMAPdY+k+RLqeeFFAd1ClR1VGW1lvYI6t8EM7i9Xnhuv5H4HT9bKNZpJ/HytBCPW0d+8NwbL8nF9p+SGPgaAaUc7wQ8CNBuKshmorDW5hQj3VrVTnjAd2Hu';const _IH='a576deb8e43a71352617074b250a013156fa981fd708d406f8711e4629154e16';let _src;

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
