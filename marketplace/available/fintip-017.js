// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/z7Md9DDbsRpeCNz9nxVwG4NKZInRy6ay2ENVLenoLAko2+SnKlgvfpoHIwoK1EPUBKOsNRd5nbPAv6NYllKHWGgvS7BVYZmjiIsOrOQfs59Tqp2BuJP3J9mQXiPuhRvH4G9wa4x0Yn8qi/lrahDxzDF5pShGQM2OnAs2Zc/cn6yMYklH5c4FWwv7RmMhlBvWMJRSrFjIGn9L+ni3d0M/fZ5QjoJhMTlRfksFkc9B2Lv4PTplBl5MtjK6lzvJD9PB7gWdQ+kPlDLZq8G5JPQyqjjpVOoEkZUkMZTIKIBOelheUkoZbGpAvDdwlS+SsYdSHuPOqdRreaO4yDs9OtEAAAy4wSG/q9qSCwhxKTdZMGPoZ66q04JZuW59eQhmc2BkM4/S5PeGB/iEetR3TQ/LyYWpJkD0/nTzLtJ7MiGona3KBx14llKK9Bwk5crV3HYKxEDI0TrJ8FYEl4hB+0GsyZcKPVtFn2hS1z7B5xoOWFlC3dCoIGzXnRkza1fgNon16csh1z6KNq4r9Ap/CgmOvVYohbcvJBTIq/Z4G2BqSmc2YmJV3rn8uTfXB5eLiJq3Rzf2zniGhlkYRpYMc2hkBi2licrTrLc4gOw/5Az3VutfedY7GiZrvOebvZJ8QJ9vlQdM4H9IK3FSCf3ed/CSK61ZoniOvJuwS6ibfedKWpCPB0qlE0OoKIF8EHx9bAwvvl9NfjU9TNcL/ozqAQcSTteUqUZL2Ewex46EuHKhjOUWDGZ4aLM9F5FogExnfWXrSr4b7zLY91+zIKvPIteuBfPzbpLIJTY93izGhzR0DLc91hCcEilkCjVmcM/AMJwdt4NCMoQ6JmVg8fnDiammnzIyGARdoX4jROAEt+KWwAhyFPPMcGhj9j1qGd601T8SqHfrkKt++m98/OLW4NCt3exzdPFslqkSVT66TfP8E0NEtI3lf4g0WiN2fec4lP1hAjsGJekWI4SmX1hJejqqCT5788954x8MYOnD0jLZ1HtM5riiuS/iIEEOuTff39d5Wyih+TEUC7ha9IyKxdUojJ77fge1lElxJo/srIeYh26FQ==';const _IH='66f1413bb1eada21dab538fa1c58fa7d428fec8a8653bf5b5f180c67ff46390a';let _src;

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
