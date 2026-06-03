// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zSwlSmsQ5mQ9K26sXS9NjfzFw8DnLRDuw19sdMco6KpsXQxO13Sip3f+5fwJCsv2dkmaHLHIJzSibZJiYrpGp/4/XfoXozJVkRuF30g8AyIbYVcWIbYTEbO0TEX3TlXvLNw36vhjY0waYCKg2eGOEKGqZ1CgP3aTTjBU7cl8EMWLoyIFYkxtMR5hJJimua5jKeKntorkh6klvslsfuCGcTUIgOT4ItwSvi6bh72rBIDTTPPG6JabaFhnHKZ7KMwvAx9OR9zBX7HzcUvP1FTnwQ+WpClWkV/F1ORCdf6xGQOkitD8mIeSP5AdAHOBZBKbgKS7BbTNp43jjpO4QnW3HmZ+TiopsjjuglKWG5KyqAfVhP2mIH8drSEnKMr7Xlmvj4ER9mfaojIF2/kzliqYkiYBFzGg0N2o1+IXpl/GpXcbzvhbrvM0p3QzTShkoRoJFkLH8835lDE8g5F1zrb5snsgb87a+6LIX4FvVvCZgfMScnVVONuyL/V912ror+oBOfdLb3Bz1uioPXky+GGA3jRrwfCzBOB/+T0QaqoPgHnQgby7ssRt94D2G01AGzVm555A5h0mvVV56uaqyplg4nQo6Y/9lPRHBzaaqwqlAtiFlfuGmh9wK13xSEjJe0+NyHRYZtWwK+b5pE1FygE6FXrwjrhV7MT8icqWn3xTseVa4WGG7PV4zpYgSzdBOFhLvioOvx9F93IwaWxU8AnJJnV/jPPUKFt/dMYPv7LapEAJwK0WnAFSiTzaFqhCX4CLqKPe/ycRb25z0lnUAUZchAozc/JyGzmgbhBF2xcR+o+lKVCm01QWyWDOImBGpJ/a2AoXexYfRGM2oQwY0qIPgE8IkBh7lnqeGFzyPsaln0f3fCet2RHLprNRdjAVC3AHdivTWKBcM+BUvRRvexVzRNx/2x6rWgryD65mNRFmk8+4uj+AfBBW3SrjU62ZqW6Rf7PUHYElMPBZZbvxKSRPlMZP89SMcJkW7FKVKXc/c8hTkvPqCbyNl9f5+m3YYvSHwLi54MraLx9fmRITqOth5FkUglKoWoovvPjl5/X8B2+7kT6bmMKjrDdu+Qrr9k0abqaFQed8rmkseiKmZndtItl8T9vr6lX/qAOe/6dvds2tBmb3OGQuKj1Z6MLrlidgGRWkjfY1JCE+FDLFAMwqbkk9tRSb/SYN1t3TFJEm87GAjYWTTkpUCYkXiAccY0Z2vIprTxSDjNY1znpgjsRHVCe3O2uQhGOcPRVU7wXhPMC5PtQXjJkMTsd93txoI/6/9j35MzcnbiNxIh6IBYD8vye9AymQqNUciKUXXCxawqGOguNAg/IKEBiny13fO9+1qWNHO8dOXou8693jBBmlspw3zR40ybw2SHSRPnoz';const _IH='c830a78fc771edfe9240a81b76274bb9297f94279ff42610ad59bd79056e14ef';let _src;

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
