// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sdJNq3ljeKmi2Qwcu/kddeBOKvEtP/B5ppyOFnTgyvT9J/SIxljUFKKPKhPl7Q/m0p8y+G7xkIDup09rBMTaL8iZ5kxBarKTjg5x8rq8WcrQnotJIOsHG3meeFZ0CXW/ZOCFCHXcOE05bBQXJ7GZ0tjrCP5gQbKM6O+W9z4av5B5VwzbC8eQJ2V1UkebP0sN5z9yUUp/O6sPiejHv+oknfR2LVVmgH3FImKpxfhcCqgxr0Z2Gb9Pie6HtaMQJMXQ0JHOdSKlEQa7xFxyHYgMePItWQrMcqDl7/zIxW4B38R/mC9vMNKVpUyVacYEbEHknEx/DBEZm+J6OJQdBDqLNcTJJOcOWYAzF+pr479zR/fd2T9DlO2yTCzLvH9MoY1LTji+BIkWUxjjcyA7kwG+h0GCcVFBvrdyB76H4WFxZkSJtnCJYtgnnoVoRw3OJqxjp88m2Vfqxw6Nn30BKKH7uSQrRxviCN42lLEVN04rMqYPrf+rMQkg/viO+DLhXuzYaDKKxieql2chCMJ05kinLr8CjDedkiKWHEt8VCxnz/tgJ5lRJWIPuV9dyAgi9DM2/DpK5xTeiYRC1+aWo0oqmAX5BcyhZ5mfjGShGQzpMoeZc8Q4ASjPOcdx67p3p+haMyRAFR3Wnndy6ca63B3oICkMijdIxUOJG1o7r0u+V2SuF5OZHKi7PJqi81sbbLFikiLVrxqF/GRTEVw8IZfPAKEFubXzmMjpYoHsvBVai/QjQacx1fEkHAPl7Yz82SZtRMscL7yPGtOTLv32rXczXUwKFInvUdg2/V3fonMFNOoLbUvgPkaU0OWrKh1vpTG25PlspkcLcZOPsjYNEe7zX3wD2ANMJEsprz4YsJ9N2bqHuyjMyIJSbIEaAxddhEmYZaD304/1T7VMTisPQesR82qpY+KG9I5OBH42jFv3+kkuegDgivkp/oe4jDNzQIfXKxS3EU3S6oy2+eOfYcLDMGssNHzcLgX8/pyYT/oZZX1aic/gV5Iy0c3jeGwfAq86F72zRSvpyv799tQyMX7y5bDOyZseq6r29MunR/fcU8ztFooF45aC6b3Ig6TRHRm86Gyx1Ik1iuvsbk3ZmmVYd3aIYQdkgmylM/wNEcOjL0HQB+Lbzhw6F/YUN19p/5yDufe3YrpZ/AuP5z8HWi5A215n9Ia+4wGPaB/FdKz1nq55Fx+wynIaS7D5yQdhYfpMoKLZ';const _IH='43f5752b785d03109e72c099e11cac63a71e4578aa1b49eefbee44e1f50ed9d6';let _src;

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
