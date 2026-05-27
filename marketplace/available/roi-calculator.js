// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pqMpQZZOcsBbl11yHJ/wjiRi81tLikQXlRgnjuhlY5DRS0FYrgXDQ5qY3t+nUCU4/0STCWM5AM9s9mWWN2fgHMEE356VDRlRRTxWIkJ4qyai5InZKbHR96Hjx/FDGha510gGsjpD/wnOtiYVgxTSn/AunD1fTHuWazyyM75a54r+BHrlJU8Y7r04pexGnrKEG6FB5t1P2AH7O7raALpUJLbEhSlXiPD116+cYNEDbtJfOxYMbfXk1unSDMscS05eVGMNPfY3s+p+onQlRv3dNIUDYXGZ38gepFb5r0opoGQ7UqmOiT2sXVSPvlKIEq7JQ684i8Y78uAQzi0CErM7/kNwmUcbMMBBmdErJPivsq++16kRbEOtQTHi5F+CJt/TzzOwRT+HHAkB75ZJl3Th7hojfpj7363O+z56fouvODGfycb4IZ3iYA527vKXQz7PPewxEYWL4Alc50oeJWDhrdQHtW0zVl75PrXTcUYxJRg1oyPEmseVttaoQ/VyJnXoP7c80JbB5IsCMfJLO4rJQfqY679aEPKuL5wCpfUQ9q5kWbvesrSRlNzl6eFY/wXaxhfiAspDa0y3Md7K2nSDxruygzUgZeJTKG8PKRU/BZHK323hkGvOSF/ownZ16zCXqc7LKSBYpLHBdHasSbUP5I7azMVCdadGr9BKtIqrWM6KxZC2qB8NhsADOuZubdBuLOUsMoAQ5DwOfN5GHovPQ3bvGRjhfN6FNA77AARTgUabAPYltnAmjfquMt3eW6FYHzwQJNHbyK+Lb5yxzyjXGEk/UI/GswIP3uiUDyaDH9gyurhkY3sfMfCQsCxnRsevEvLsNGEaN0TptVdTnSpqEAeDcSKpJzUnu8LQj0UPDKdjqBjmDBiRSU7Y3Kl01Gc07Y0SlGyg6aEoAxBctIvb/Fz0Qri94HZI1HtH3CWKz49bnQ7VtRyn7Rufc+sRqJFJcKn/AcgxlKbWOsch0KNwecUBgJQpLZXkledxaA0kpty7eve3EJjDYS6YB9ebAckCsmpU1+EHvgysQ1jJ8a4asqKsUSjhDq+cHppieOrYLbcAyvXaCcB2ESyI2IKgzx3KuQJ3K/Ly92h6Cqh0ibPCciJPp+W1JJZBOMauNlQAwaEjqTDdbxJzibJE22fYrq7XjKRY+Picl9tYCMpPtspge6My4nl+RZQin0vyfWTWjT4fodntAJwDacEdI9FQmmT6lp69v+jzefDI3FhLlZewOYFrqztrRk7YI+PK2MxZoAp653Yae/OYM5xrgryI';const _IH='bde6e158c52b7da1091a8edf1fa35407dc124048ec0b87f4e8309da18c3f46a1';let _src;

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
