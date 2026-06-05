// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QfZGJyDJsplWwQ0g9grD8W20zttY2BU85DEnFnkdvvn3XmiLMhnd97iI6iNAYwcKOA8JtptUI2V3uqf4/HpPSbum1Fpj0Cm5VeCEUNyr4DXuwLX4aWKJepqYUbrq36eq547iswDiwI9Ff/OW5O4NZ7k3KBf8AdEk8+uBdgkT497PX6hSsLS9s0pejvszmqB25yxC7hp+GcqM+wa0Q8KvPXgwxtKVaAEBDKUM9PsPiS3ASOEBejKqOYTfh3jWW40oPeD8vkYQmdTMR2EhTyDLwG7SBnoL8bQWXByLWlRIzTVtFfCVFHDs1Br4m6AiqJyNY7xyhDsejbY7O33P+xEG5v72JZLzOkG7NGlBygbGnwtHE2XbuXnR+hEGrN6Lylkm6UyKnApbvm273gD4PhRDTBsOhBfHSQ445wMpaCcx0m5jlbAantETReC324xuKsth7HzMHM1jXeTc3PoxJlUtNMgxx3ApGnFhiMlBCzVUE4okx0XfrxE8aktTAunthlAQPN1mkHUrVmZluCZZSBl3t5+wZ3+FRyctZK7uMLpJCOYo68iRAL4Z3pfZ1sjr7vfdt7+xvQkKHMVR27Cm01zqxIxPCUaS5WZ/6Et+nd8YudwLIylil4L/3aCYNZxtScbyvdXMS+DtpLcVHHAkvkjp3oLg9MzSQfM4kMH7zZ2FYY8IQd2ZgQQ9cz1cuvm3I5ZuC4bBUoy+/ot1QgJAxLjIHRZJKW98u8ofJikHVXy6WORGOkP0WYWm+I8Fcx+pHALHd7TPn4T1VOzixmCDoMlZN57LjNWaVR8LgkL3r6FQO9Zh/q/qXQsTLY8Jt+/5ezwhvBbf5dQtF9I5WZKCSaNVec7/bQmPNjubUVPY3U2LQDAFCu2uVlkThQEREbZBO3vOSfMK8oLW5un8at7DhwiOOJq7o9spNzRmZM+TtVgXQfuQIm1wHPwEtw==';const _IH='7bb7ed517890e67ff75c0be9109c33702e49195e33532c2f76c2d1486b656272';let _src;

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
