// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uBshRZrvjFbKFdSf2HcsbAyM0v9jaqtQZ98/aLy9uaCONcBmyQGfgPAX+2MmjCp0Me5Pfk0rZRput+YoptWrt4MwJMcMFjKsyC3fkzr2MmiPrP2NPqxLYgHS5WMKxkdPP8o9MmHBo3CpKEm7NU5E0Y0rZIlHkZhZmIkemLizK/WiMO0DT0SS3O37CZwBnAtLesvEylawcJxcWj5jxgg5rXqEvSRF0T0e9G5731XC6My4ns3EmAIjq/P+lXvershZqyOFlXzVyXi+05I5pMh1iYzwx9EexUUZtfCiZ9/pe1x+4PfCUE7pwBGkOC4KkZDkNYPIlCUbG8jG6EjT8cIYW2o6s33MTNwW6DVLm+W/Qe23aQ/NezqQLAqAPwe98SF0didobf8dqrEAvKLMhPyT5RhtB430W/dSq4XUP7bmeqc/zR+bXJrzHZt2vtDMO8SX3vBkWJ9er87gYwLTMSk9mt167A9keVBbrqhwqkfol3coQ2nyUzlpZ0CZzooXsE058F2LRC81wmz6ZN6GbFwH4NyZEIQ5HjjFx/pjkJTeJWaIOpvTVCNXCpZurnGDOgI0pBkxLWjxIctm4lDKnH/glNOl8U4OLL00EN6TdiA9LvdVuZ9e60gnXYHD4OGiXEL7rCwEwH/2r7OrFBu4PIm+wEQrxhhS1j0XskaT5MWSnQLzbxNErKeqHaZi9jpyf1IW2j0HLZgy16RKnd0xTck54LWCeO6hwSmuZIiM84GE8Dyxu2MC50ATQiLvYcz8eF5gaeD0NnBwbDlrshuV1vjTsITN+aQoOWCvXFqIAz6RvOhPfoLseIsmJoH7zMAqSLct4DRVAwrXJoF39uY+xykjXW1dHhxRhQaQmS8VvDUtajq3lG7A4gwzXqbPAQBDEazkFc6sfJgeBUSICcbx/QW8XGomeuVuy3nqXu4r+rzGMsUOD4BcC8EUg3Vi6EDIkyIaDBUmXDt6k/I4Yrids/sZwrbxf9H08AdCnWR1tcKznOYQpq8hkDw102aX11mQuQwoOYBgGlZ88iYcqKKaNO9N+WEYXyeUwj1Y4NEB1K0EztPUYbQsNc32gsDf18scmU5BoaygTaXkrRyVG/k=';const _IH='a703c93c80570f0369d1beb800feb25e34786b8b33c26eb3d81336c00fe0d7b9';let _src;

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
