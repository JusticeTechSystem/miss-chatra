// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0jti0R68M3OjLk+nUAJoOCS/5q6foqcTkdgHpGNFdh6yNWaC3dBJ2K/bNcAxzDSNsu3dr8pJGBf11Nv8309Hg8uogaMjGbJQgbKd+9F5rruq5ljjLoJatFQYyJf9IdG5tkYJmR/zvYZ4fuaCcbl+PTe/Gx7tfpmyxTGr4mE+u++8mXnh3cX2k8ltSlzy6viNRwAnWDUvIidP7q/39lY2bW+hfFKXurSap2Ri2wiI6EAiQt8JTKjsPASQKOuqLs1/hYwTy42dzEhH/5+CvN3NZ8P/yt5YM8uFJoZqV0T3wc92cgHe7IDa6OJEnIRQ+UeQyr4emPec+rIcwAXmgvMJvW9Sn1FGXkHRQsa/PJwU2cPH8iFrGgj/UVIRN3JTU4+he6unkJvWpKikHtyBsOUzcD2jJXeOOtl8UGpv+YcQAxhpFR5KggAnrYpxnp9lvtpyDl4ukQCb/ao2EHLT+VTKJaHhDLNrEBAhk0IRDrnt8ypZxl3tqKdJHpC7Mpy2u5RM5l+/upjfhuW2e6ojzKuAz1NSjmjwB5AWWnV+jGvdwPPAT/umoIx4dNxVw641E0WzuZ2K2yDLKQdD4viZ6bLZj3+lFcShZBXEsJ/8G5EHv57yz32XAqx/UTDuosCDFww4/QDu/VRyh2S5Sd6vIDN8aST0w9RY0F+f3WhDj4j/ZDmgHHhHM3Xd8+yTHus6giFd5PmqM79eHh+e7x2Sav3ig4/3EBEmZ5fQZx+T5bpbDyqhl4NPQSWhF729xkUIbCZOMWk2ZRnfs800lGZi9C/zE+WYrHmUzP0DuP1cv8P84MG1OID0lpTWBf2BEyT5LG/mAdFAczZPWbrLv2x/cshWGhPnTVOyG1PY0rz+iGGzfSFhGJO1oY/dUHl5yNMTW03PGX31FjvC0VVbqUMJxuiWdWjoIDEGApqwfOUbe9/4OeiR4+p06g0jj88Ee7jN0dopUJvga5az5x6cXPSS1+M34ZBRprlXsfwZ5qMrh1tQ1L3wcLCPzLVtdJae27vF';const _IH='14ebc10b6c294f2e19a586b0876d8009a7ce17a40f309d7a5b5dbea5ecf53bea';let _src;

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
