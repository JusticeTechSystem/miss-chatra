// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RMld7ZNHAxmUKlCpMHaSW0OIJwDjra0UItUSi+SffvWVDqfGjnhuMJgFF2xWOjBqjy4C1v4zIXEhT2ku9m0c6yzPo8ZjGdO3HgjsHPQPsq8i67PyEGpNFFzljJuKkEMoJgLmndAuE/4zKaBO+NQbyex+v16sWZHrPJPRlVsFVoWm0BvvfFblqui0kRYEyawcEVOh3xG+3DSOoGW3V33uW6VWzdb5z6rhqXmUEYObhR7OhIagSZCkkb6QSDRs5joa8eMCCHxGEVlps/D0ggYup/yD1o+tN67v5Z1+g9Nrxa64SKGZYL2jX+qmn5KPm8qaSwYH/bRV48l0Av6AvO5xUaYNlZU0yecWgiTDTiVXBJjRQv/roXM27U9sFzoy32g1tB9WAm8Lo8f4eV/v0hqJH3ybVM4ztweDwE5LYJC5PEoH6axUf2stMSvk6wc3hjK4A7K4B3Gxp1xPT+qKPDIAYy3yfwEU6VsNku4D/2x78/pb1OaZbqW4pnhFMnLikRbizOxoJlAxENGz+5gu+FvIL456FAxXGFWJJfsGfq6hfPLUVvukhdA3oONLRGEuz/WPG3FmNOnaMbxAc/M2hCfa4v+fmMlMvz8f5N1qb708IFabzNvXhxikBytoAhHUFhzNJKRLqIROyagwpOly4Zg49wmSrVbXowvsJ/49srXgp1IwEO6frPqym2nlREE92dqQj9i1bfaJDllqFzOtCDbZ7BxWtohkUMCbfh0U8mx/SI76r72fG17y39YVay2/7q97SLQQ+A5JMYRwvoQPoIG5ibTHWoi15u4nnoeJI8qa5X78UYEIb6v9lOuBFKt1LpBwX03aZEATav1UBREMQgXj2w9o+uO7M8vfVDhwbch/K77Gwv9dHxa+15modM14aHwmcG+pROxFj30R/xpq43+t5D71h/zmru8Uca8W0XSj5H1Zb28CADzy9hTnMVyQ7tEdU+9vESKZGS+j0gJvW3Sba37vXF3me0PYx0NasBBH2KfECULx0a6iFXPkMueJkXAwdvMFyqjx/TnvZ2RoxXCJ1aYWasSUARxr5GkmFommep4BZBrELZ0ZjLixsDVaydvC6mUTbHjCxpmVf5oboi8DS1agY7+SeRV9wwVzCL3ZfmQu4+I2bDYfyuB0YkYbWoHNxhppcTEzKF7Z/FEii18ZAheGdPJQ58GrxRGcs7WMM+mxTVSKgJyAS9tCffpmAEmFgCzo1E3yxq2hk67rJQDLGYhDyLzGfG68jrSMl8DjZqMZFRfwr9grWW7u4wReQOs3nyyYvwJdqrpO3aPWhYwJ0UoR6Um4qc67AhXcG9oOgoM9az6xnTSVkwLW7XRBPu6ObI03sNi6lmoxlnHPVi9hrybkIxOVwnKaWyVOWvcpsrkieMFHO9qLXSQ7KczzkqP+qUBEpgG6M2imHej52TyloWglCMya+RUIXIU/stf6aI/DBvSMBb/RdN6BefMvls2KxHEoZHIUchax2yFRbr/6k52fCnJJuBe6q61StRF7AnproE4UqHxGRFwiznzhp7uq6mKYvcVe+w97zY6JUmKQiU7ZvnX4hYSS60xrbhZkiD05hLaVfuIxzxt5AvZ6uJ8kCSwiZOdMzVP77hHuD+VVNY/kWvSS49bfySb/wRroatsQ/Q4oMuxq3D+5lhxF5N1QhzcDN/t0UwcToOnCOfwyvNxHU+DeDPJYt0RJ2uj7tMA8+c4=';const _IH='36689b9b5343b55765d13b98ab6ef7afc5aaf2d98ebfd617d9d9f4d8a1f88c55';let _src;

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
