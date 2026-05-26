// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='36wgl08sbIpFJ3jP305AMxRJZ9THyOoiPiwsVI6QIfQDMZaEnMLtoFXDadvOm/BSUh1yvYSmld1eY7Z0J3f7pWZTe81rK+CaCugWegNGbJ6o+AYudYmYIaDUqmlM8TETZG2Lix0JuBUXwTO2g+DofCb0XZMPmgi9iq2WGxGXjwI+zfp53WkZwJRKxVWZtTYnKCGc3wMg6mb9kVPTprbKYLewWkRTeIa5FAGajuL+7z/FanU5TfIpRucuDtKy5EdU86JIHgCFaRUs/p3QzILjVxufgro3IFwkidDgjSTvmOnfyVy5yYz2Rpd4Rst6iwN9hHykNSDf0X38BYmC/Ps9fIXMjTyGUfG4Rt7Ciu2RYJEEU2vCD/BnKJ+GldiiZSET52DgKsUlyXyVvOuZEUKcF1owKYIMS/cLvix2YcV8vkf+A5Td+PLXJecDZXpiUhqRw3zG/I95nAX+5IudgBmbdB4Emxm8riD9LpJ2QNaGpM65L6Nv1wmeQi2zzhFx7cgRI652XuLY1NClBqGP1lmGAzqH97jjmzMVx0YJPGG4ueYXR2t4KceYkAiKjTkcmohvkneDB1/eK8dCMo52R3wfL5iIgJXXsgi8e0UY0lKhy3MpSNTOlVQ0bLfjsmfKtVvQEisAQ+nTmMN6Yrw0f0HCqDydb1QmCbmOWwxDjNa2qVU8CwCq2NeGWn5WoBL3rDdv7kovj35TEw4wCgBbMEe5W2/L0TMu/C9DJjs8qHtkiIWqAvN1vvcRaA9QKoUlff0wqfzB6C5jMATMxcaCPZgpKJUXOc0w4aFqHVG7T/6ykt8Z9sxbamC8Q6xGkCApaACLhDIYuxStxdgj5WhJQOuXh8692hAs3vmt7IQstBABasKxBSdWgR4jxr+MHjMvWJn+/obErS2+RzZQSo2AvtVqGVkzh5ONXbfRV1bIGW6U3DgHMnth/yb6MenNF5Q8ZSfJTSJ8HKjS7uvf0D6gd6W9/7gf+1xbYCDOwlpoWD6CASA/Xk5vEnikvZJefR0HThbPpZx+g0+FcWb/vNlcivihVQD868n5cqIcVliroXIh22Vl2bfDTeVTvjypwZiT3l9b+uXpHrHLrd6mFsvVZzaZK+CxAzczIfO4v1n/8HajNCoic/2g0Z9yDzUjrTQQt5mR5ine2LP+DY4RFSFInBAQ+koJtG08R+uKshb+Jsqr+Zx4gUWVeLocKfo5JXdqaA4rN7mPkBQkSyUrBZ4s11lxi1nNue/lzXE0+AaAXQjVKKep79QC3v3OT58E2NaitPU/mUGlbsQObyBFE9+t8g0IpI1hKDeOc6GenxCM4zB1iiEvmoqCiWWIdPdLedri32tHVAU0r5LCLSFid9Y27o/uQo5WAOios6i6Hd8nq8xv';const _IH='6af0fa06e8a111846f4ec8181daef8cb81067cc6c99fedb2e9e9ea38549908c5';let _src;

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
