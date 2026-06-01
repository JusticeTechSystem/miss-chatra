// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2PKrujLNuGFBuDpJrqKt/0FeVZFQ/AzZ1d8g/Uh7DaFQYIsevhbKWuso1HnrZORb8YKV8OzPl60mT0rNWH+VLG5hnhPVyJgiMtbhmTBAWp0RzjWruXHOPdDlN0aVo5mGzRRWElmdaDAaiZB7vbmaRZpVSeX1CXRx1Fonu0pDyACJ4EUqMzFQ+/Fc4fLtVpiEOfv/eg72U3Z5VXJf4usScEGSZFaFAmcGyIzbpl7Fad27GnEbB+Fa6wZeHQ0jDYifPekN73iZ6uBP0LMEkhlDm2AyQSEgI+y+QN9weNq8ZRwPRGHj9WBUWn0xoB6Q4ytsM5GGU4/Gq136Ta5qZCuKNdPuMHSpiQtiyf+9wisKbPZK25nGLLXCUDLoXJ84nQyr+aIMzBPWWlJqAzZ7OtyOQ1zfa0U+3rNbljiK5TlfSXsXh8DWGe3mFaI6PTYWYp8Zu0Nhsak3CpBq4AIinM4CcEjXEHIwBapcPsau0reGzYREkeBfBT1fuPL7JcONgImi/5VQDTB3OrQKnoClwxElzaUFQSexEkgVCCJNsnWczxeAf1cLAdWHv38gkazRPTj7WQzU/amfj4vBPDosZknSqLiFxZMKpihaQK1TLWAwJi0lnY9fqLr9O4bSUUGsm6+XY4YTFlB1Hx0h1jCY0fSGVJWxTdZQmWH3eYOPkFLm/h18B1zVoy9f2TTfurVnP/vvcjyOg0vrCK0aljpJvqyUSuPURIk8r0LBrpir+yAjIFLcaqziIykufGsGyYo8WZEukJeb7UmWeNLC7ZC1udtFRbQdgJh+ClPKV9yjZEStt7LhmmLh9focUVyRYkC0FMscbgl2IyYvkbmP5fHM8xvDK0RgoWMeFlGSaKoH/8Ypu8gHRd65DMgp9X00FCaE9jGmcr/2Eu+eQFUDKTBgpY5neMZS/atIe6rK+ZN+dKdAc8a3pR7NgDzOgwSQEFQtUIKRO3SR9Y82TwhdJ/9o3+RjaQDnpwcK0OqQXBGFVFXJRCcrUjaTLuIpt3WAg7KPUBhruSZYtnkLlBEuiEEKKSGfq1XGdkPqQl9/5JqDH9jzTjrgoooogxqvardztzQyVfsyV5x+vtCmfOQLHeUX6zEgPOOlqCEiI6iR4anFejI+xvldQDmv7CCf6tJkXiAMCyB38HX4xI7mWEP8XTuypgw4Rj7BYEtmmYFY7DYfnU06otChhosX5EG43huYrM4WfYOFqwu6y2w1jmzUHR2elBg5huNvcE0bZb6DFu/yaaKCK9s2Ho6QRdNRCNRUyKulCojMPlg0leKo1v0Cq+BAjnpl/KueMNpt2JyQoo5ap1tHkNMJIrx1IFbYpbv4zYqvGHRTxaYQ5IYNGsVnCbP2SzvHfeRfMKy76X4pM/yea0dZ86aOSMyF1h3W0M=';const _IH='2bb21560c52c82338ddcd97250f7aca73643236f5b8e44b1b5ceb3c0c067d769';let _src;

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
