// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jc8G6QaxoHwTPtSGzpa1QH9TBQB/py4LiXZnrd55Gy+FLkDOXVcqJXravr51njMGLQTqDPbZyeEQ4ZVBOq9s4FbAQmnWaykW7h9lj1FbKgvlg8uGrbNreY5Aq1wuG5oRJNZa5WZakKfARmYwllGXdfHB+21PMTc2eykq+KxU7sFnYfIGoJjVsqDZxrfwkgyeIe/SumJ8SHc+PJAwNfxAFyh9WRNPiCnWIBQylrTFJws3A9o2P1N1nY89ksj4rCvkOyO/FmVB4LSa16b0j3dYExQ4U9xoLjCwr1820+eBZpmkkv70tS2Fcv+TL7OUAZaFmy6f0g68f8JkjqpWQOAoeJ38RaSiaP3FUEi74kdV9woVc7JCSwO0gzelRMlkVYzQRoApbeUbmWiH0nSEqx4CcTJWe+8GKohEfG+bTHpo1lp/IyruFN9gasa/i7ekai3w7Fl/Zlb8h7BfGGWv1PJku1rhqdRwpW3JOjVRGGCxmK3M3MNmfbUrFXkkkZo7Mq8oRu+OUmrjwHAdBME9trpP4UJN9jvgmcfuTRzC8SKTsafNDUbrM9I0CJ7JNd21YhqzffjOfM6vygQPWqDctQNVXZC6Uxxh5hIPdAQu46fr8qZABeaSTm/d4vjT4bhAy3+wTcaezEsgSbpa37hdkNw2mHGtua2UO/Tszz42fg/TAy5/O5pEX0thbSxW+UCqOw1G6KV8EwFBB3ezb3ELHXPASg0e6tdsZBGTxqWmqyEYNDSTYTqhFKSDdGwINLW9ngQEL+GYa0zBq/ufyVSndJBAp9NJrRGj33TWXUMfrWwm4LYdAmqJ8xpHpW5sMdtYsuFPss8RR1uV7vsdPQkbj4XR+h/Ej4TjIbspNpvYxvq0EmF7PtsCb9eMhvMPClEsRKfxoHF8FQtm0UYYkMzM0y3rbVRww4i6cTQenTeFHOlmSN3/SkY5/BmtLzenAJqO5N/3nMkT90icwN5EXq7s0JYMw8DziBhVcWJsvyGRTo0bu27z2x7r7SaS09kaN/Qda5yMt30TiLGsX3/U2zGSXuQvNhG4aFF/53uPbZqHkKBi8WEqKYcsvKqe1EAB7HnYNMC/agNEKG2tQDQroMElqhiCJajxINiLSuOnm/DX24bO8SAViZdJEQqa4eLmm9HhAdBoTituSDgPInMkWHj7/H+QmiXCLn1sn6tRE2tiaByvdkLX+l0RCZc80F01lukL6hPmwQ4sy9xammr1Ftu6FbRLGtZRiL3vlbhyUd27iKayVEXLh7rSzG8Ki3Q7wztAsqq+W9Ud54R8AtfCV4Ufm4+mdn9mzHohIuiMkMKfycpwRDvhReljJQhW1IIyrHgMfMJ6YxgBjCoE9w4iuPV0MixL7Fe7hYRha2XS3nvNKO3Y';const _IH='d4c3ab3c8348cb2a043bfb46544d1e4555d6881a5b108068c9e0eb8e02eb8090';let _src;

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
