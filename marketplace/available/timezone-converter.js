// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VnnH9SnJpAFNGMBqzG7HHnm/M72dk0u+4uBKVeW6Oke7MRWplMDYXK3fx/6OVH36r4t/jnPwwZdTSz8WFC9l2SvsD/UG5N1spx4/1+aGDzMlRBWnWm1cr2RyJhZ6N0SA5fTQ0KBIksK/616IW7kErvBsadNJW/ldDdtUGIwbQBoOpkAev4YBBBleezOfXJvWYbNtmZZoWZ0YkcRVg4Y10WHJfZVwm+st6OS9xyv2umsU2nHRC4a0BKMHIB2LGeB2zKwaf+2z37DwhzzK2oHqetocUlfQGaVKzGK5WRaDEG4ZhXI4e4XPgC+WtZHr36cVuJhvkBVpBgWRMfAs9fEE/xskC/AlJWyAa0LBJdaxNBag6QVhrzii47hI61n3CMgHUkcMGnmKy6xtElAeGDhIOEazmkEP+dbAobUmDHZgeqSyBvTrNEaNYundUufaLwEJsMwSKxlV7rR1zelLlXUChWjSw87j6r7pPtmzT0W9Dy0nWTm9clmkvJ7xyG6AMhJZx5Rk1QOaVmySZdECNxmDxm7oimYTSmZTESuZxSsO3JDsbvPtZ5mcAyMp50jeQ9+V5iw7i+Ju9xiwYVdwovflVvUJahc0HfzJ/iiG';const _IH='41f543f90225e642a94f4e76375e3b964d7cc3571b5f20effd7c752561493f8e';let _src;

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
