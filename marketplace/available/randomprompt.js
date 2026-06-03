// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m0YDJRgfKJ09hlObpPjoFLrTh1fVOPtAkL8Mw5XqNc5jzIGNBubjV1Dik1yQIvp4WmqwKVcK/CIY97TysbbjdZnSHk/jxPT3+qKz8sxFhdT8qmyI/AViQjPmDU2Qn4aXMwbNurze3sZk9+L62UWXGrhqdC0LC0cq5EGjhU41UmptDKO7lun2nX121uXaG9BKVHO8jctabxNhRM+dhPYd8psestxQmuOoSk3RgCl+5Wdchv5psFPjtzHIeC1orVPEkPHMn/U/DmQsfMAsLJZaa++5eQTmoRZJRl3JcBs+Cqn2g2nfzKlFx/UItf3N+bIGZHLRjdc/pWqGNQ8H/M3MaWZxVKqz8CCKu++dl247wLrjNg4Jqo+IlcVZ+MiJsFktFJ1NZBstVqiZlnIdoiRBrqbYQ9E2sEQAJnO8RrZYnZiW8soYFnOW0mtJ9VP3/ICJgbdTHmbk4PgziiVSEbrZedvifRMXeaMqOITUwaqHhgbG5QeMMxnFz9PoTTAzATEsM+M/gs0iDiZzJ7x5uuAm1jgZYF50RuBIzJ3Wp2Teg9comYNBGNAx/NcdGkLJRhuhgqKAvQOnqkdC6G7lfD7pRzNKy1op++mwU+19LMa9VIOEnvbT7lVYikowRa2k3m6uE49VS0me/+mEuI+fAhko6SZQZUBWZJ64sm146X7lQHHmCTMAd5qsk9x6fz15t0ErbA3e8tGfXnag/49lle3tUFpFBKiCv9TSHggDiTm2DouyajuQoUU9JVi1UYMeIBsKzDGn+ItOEg5N8A+VCwScbQHhhhk6g+kwzFOVBgykhEaLlg1T/3Nkaufrp9qOWghuYEV+hTYEWRGtOj+ka/Bv0vtSAiaQcthqE9jw69z7VCbKwf8Un+6OPfPQi8RNG6PgQ4V+mSa09HnWkK+JOTKtEZtGjylBz+qDVQ2ZmOf3Sp2SiKCbLlccLibW/OfUQbWeO50y1B1pGhg13f+OuZR+USDCadS9uJbsHoUjbRHmUbhfxuQIHlUptSJB1Bh6N8yEagCedf9WtiQ0QQBEw83Iv8MrIN8hLBP6KrVS/GkMe2c3m3832G18YXGd59Jd0mBsYlZQ+2PIH7gBulfnf08BpeQ9eEi/L6xJid13YLEqy/WcFDMJLEBgre2WGtIWcmBqe9mYjnLyZYfvjiyJMVil1Mnt4uR9gSc1HS6XQbh3my9BvDMav4DIOG6B54RBIbwthxc8Vjxh3lZzgg==';const _IH='4693591698bfe5ee7ce56d5f702b819c64b35a85a1e21733fee6c945c56d97c7';let _src;

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
