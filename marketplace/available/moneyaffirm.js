// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw30LWLesqXibINEWspUEmOhgOsJ6cM1wpfE7NW0b+sG/N0KxPdwaMRD5pmBD8ym1in7OXmjJlvDMxGfz/WQIAIGNBP+RDN3N4O4+4+ng9B1uty62uZNKWzg8IoFqdiI9rO58tdPXmeuYRiCKvKEcNQWawXnt1JNUR3548brDVdMtRTXIyCQJBKgYE4hr5NBuMzVfZ/XUzp6Cq0YrEkNk/VBXo+Z/mkddAdudsoOaFvx4G6ndJX2CQt7EZmXtqSiOhRpnlQ4xVob7kvlPKW4kWE7GfEYKq1pDYBG4tJa0Kbxt6Me7SoD+6E0gRVg6DOp2zC/c4VPwq6b3fafHewOo4FCIIIgSsXXCrgYIQ1xc+E3WmbMWdDLA7lX7meIzRJaN/DOkJBgdw4zgF0aQnvCZlBt4IYVXB+iUCkUsM7rwgoT0+sh8iUZAKTtW3xywNutdMpXsjqtFIMhILvGmAhKOvtCjutV9O9qUMxp0jm7KL43AP6iaSeFzGgvkdIffdIp+O3Movj1SFpZvJghIEimhhu8gsm2waorLYF2HKaCUbnqrz8pFwQFWmBpIbS9nQuA0UNZZKcv+tk5mZQlveyb7vKiS9WIszoMtTCpvSNsd59I3yygOVRJ91NEpHgjDEvbLzQd/YdI9d1MqaHfmBf9HmU6pQIw7Za0GnbQ5UoaS5mrrwBvNyPlcW17sdic1Xyfr0qmfgCZl0vEagjR1UA+wH5qIr18BlIt70oOApK6/jrmBG77cBJP+q9M4kr5SziuwFmEPipQC3fE2v8Z4eEIt98Yqvom2B1/0wFLuzLWjkWYfbYipzbH+3//bh3iIO7638HHN1fuC/uZArio8s4q1a2MempKl5xUpARMCstfx+WLD2oxihYGcypM1GzAnA8VfQDuxye3yvyzC31q681aEh9VXR3vvrjugXpgfovA2zcFBhFi62Nb/7KqZq6mzPLJ4hK6qcgVL74ULNPXeWjzRRi7g+aCdwvfRax4eNba0U7AR4i1E+oQkZLbL3gx59NeHrTsua2NDe32jnW2sHoMlcExXi4rUWOrR1oGkRGKPD8ecEVXLkVL7DrzQThD8GyKFLYe0TL+l/XcuC+HokGkLYXf4awaNFVN4K9Q6Qk5cv0zsV6HUlRfXCobEiN/EDU7rKzdz3wi4evOIGJlrGOtx6j6Yhg7qSrk1Lam0brlbAPb3RLdPUSfAbm0b8h1H/EDA28uFFmnZcB1g2c0LHE=';const _IH='954085437b8c1c49f9087081ffc1af807703c746ade3c5474a9516255862cf92';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
