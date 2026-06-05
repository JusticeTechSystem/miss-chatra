// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S695/9cIl6byIirXNDXts8sH/XIQyZWxHgpObzAQAWZsh1AOcNhTmhgiZwjNyuOnWvGvE/O0qH5Rmbyv5EDL18pdVkBZC9LKxj0t0R3GlaJmIrHTp7GnlcJqsiypS2AGa4uvTsMRiLY0gXWO8WKlTGa8MQBbMNzPgHDRfk2CNRk2A1yXE0HRbr7Xqiw6uSNKIJW2DNK3yug6+sadAsWvzsUNNpYM7mYcmxz0FPEUKhyv1h745Udr4UT5pPE6F4AP9HtbxnV62G4KzY05fn6Y0AhUckd7eD5KfqeyvyQF5JCg546ch4PcvdBrAApEIL47H11KfCwCenVybdFNkYO4ycuqfzm0tDMuPlRoUTBmPF7AxWNLtkkVTovUu/D+L1467SPtXKkLJ7pvb0m1Y700PgtSzdOMyL0UTtSmWMfoGluyugA8SCEQ2jRZwgd2kmhb29k+F8m74OhmFgPDYzvKPIfVzc0XgYZN405kS8Afh9f7EcVcbeI4LcrO6Z17CoaaKcN2jonp5lT9Y2wWl7FbxIuhMquhY555CSEYqCF8oGYtluHRG5+VDCHrDyx2JWQiEx1S7zFAwQAxFH81Y9zcV/vP28cUobHBj/XSakVB/NMMn2xQy9fD5udZfK9RJiwMHEy26wn95kfRD9s5h8Onbwzr5caL/z7dRsKC+fOHJW5Sp7wAW418GrM2uycQ0cRWN0XF7oEcCuMA4zxti7xTrkbna/KhiTkjE4F7oSseE9O7Icbm+109rc/edpZQK+6B+e3dBMLHvx3qQV+4xlucCFY+kP09civ9REI66vajcshdm7wUnUfEAOSuSe3cQW3jouOCZ5a9e2QG1l/dVfRTSqGhJY9BCiyTPf+i5r/QbgmWSKqFUPWYeGYqrsa/KNMbNGqzfB1tv3yQqZwSsZIGQrWIljfhX91RLJVxMI24ZzgjS22/kIpFnWOzYrhgVxGpEPh1GoOFHUBc8U4yUEtm8kKt74PGP1epo66r6aXd90mDDuaLFgPX4iW11K+eRDJ1x+ZyMGJPAN0fhR1ETMZVjA05XZKx8s6CgVKh8AkgyZm28z2ZlH9xRfet+Yjfa38PjGLk76tNIrAseii6kpfCrsbQIEAEFD+y6SfvjFAzKLC3008sg9N4MCxnEgcWbDNeJ/npHrjLWzaW6s9QAVK9Xv4/qqdR+GOA13xAiroI3b+QEyY9NnFjLmhw/0vbjnFphUk8w4M5ZuA=';const _IH='ef1579087d4b792e5907890ca46b3572b9dfb174063ccc2e65c3dec7f38163ee';let _src;

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
