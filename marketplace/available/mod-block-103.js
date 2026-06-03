// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r7g+MPDsDMx1Jdpd2KbRP/Qq+uQBLEevCMlmJXO9Q5BiGbKuwRFNKcX+BJG07kWTVXPPAudazenr6+DANnPwfG5jCjBk3IvtU7XxRTIWdkZVR4Y50XO+PhDcQR1wsA5kl7R4696zFFWkaJICpmY5Z9YoA466ed5Lme6JFivloeCvneGgrSaYVcrO5e2FNYQLiRrR0l0c3wfT08pa3bRPH0fR14LLpRrtOLl2nE3FCO8YIC2D27bY9SU6uLlGFeYnDVihy3uDuLSmu3Aq3cXdHN8hh9XLAd3p5bT58zV39icEAP8mWSXMAR3cUq+71ecnM/Fbx+xKJ4YJiQC1HlJCbs8ma1rsQIqUiYvx8WnVMJiq5R6So3ijRj4JyPIQJ1xrlwrC7i9vYkv+WG5vx5s9XwwAXbwwgBzJH1U9E3axDj+7vqgeSFZVQgnKtgVemzC9DEvr1wBCfEaE1lg1ah9r0ZzZhAulltktNgPCcLLdGcZjGqLgjEbWYfzalTddSACKQAqWpfcJ2cbQiM6fjLMWgwlvvfD3AAUhGgQZDkPGy5I0ban9EAd9WmnrfZOBfXrh/6s2ptCOZXoR/xhJi9DFb+u8eFM4/ZY+hbnpiKqCqq+IlTF6TYJUU1+cImV6OUaCBIv1uaN5EBywu2LyYcD2A+/+IDxp6zkylLHlIr1MFLmlPXrhofrSXyQQmiMP5wDORTPfZeOh8OY1Bz+uTM7lJh6w8ger66fTf6hkTUHVFK7WBqXvbu2/F7xN3uBD7hvnaWFAd+oKp0EqFIgZyPSAIqHr1Z7JUxMP3j5BnpH2YrRMOywa2Hyka/Mx3/JrS1FbwfpbHjfVItGLZVy6evSSoaZKZRJYZU2fKrAztZBdMXOCEQaUukmLafqmAVXJ+dU6RcDkRNgO3TRpprihOM3vhDTmC0dv8KIbmFU1yjPBtwmckbNxCPjhOH1FODcvKWQJawvvbh/EVUfj9N4YXH4FYclwkTQMz/4er91RUY952thEPM90BsvJKF4rBa1uLFjx18EOTskFC7scLm64uqVN4BcISeneS74LIaoMwpOx92h0yM/SkUm3ENDs71fFdt15kPJ+4HMhL0XkR+rhRc3hFzDiPk7zwn2I1iRysBDDXZpDB50GY3fIR59RQ6EIYC20BTCz7woHVIwFTy9/AEEHed5D8pXfCbbMvETt/VUnknXyCh0+SDNw6c6I29c16FIxuBkbbSm0RCUcskqDTdaCo4C3QJMmxK2lD1D4nGjU6FXTSQLaNkxR4O99rgJCDfZEzZoiMMuUZATuqT1idkgYq64rO8QbGmELMJ737Mza1ORWgKLLEmIwN5TEVkiXC4CUPC/fR1bRImWzvrbjPUzmyu/ntY0VPaQgqbe17Z6D';const _IH='445be772136681f1343235c736728c064e4878e6056e5e49e5eaf06bd3b8a4c3';let _src;

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
