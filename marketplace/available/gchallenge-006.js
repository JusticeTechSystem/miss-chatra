// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zzLAPagBXrdQU7ZCA6devajy0fKeyCuhxdog7S9MzGWjNZUK4maS3/txjuT6r1OgAPhMbSvjIiPufAusQmyYGdEDosoT2j+BzcyibiIwfGGXd+WpwkNvs0xh72qsRGNKGr1hvKBBNl1Iez0Tofs1X+/QXU3gZ0H8aEwhhqyG6ZpIEUidax5hH8RHA3E1JDbAj8NNAOESn1HTnsPBLNma0itSnD90Wzw1CXa8HyTc7b9m0KV+9rk2ar7QXLDDHBvPvLsldamexgAm2bPhv5EI+VH5Vw62z4leCo4wkw3nNkOcPrb7oFMfvELHtU4AvYwn5akBHokrcntsZLhSp6kpNXRn8EhFT3W6DnMy6tagZc59NUC/oD0jtTpQ6DmBM6TmvU399LBYrMwVbo08eGeGAbfmvECe1dVtdVpGDf7H0rGBpMVVDLeM9Zoeuq05PdnxI9r/qoDPy9Dr2Fxa8HkSanF9Nq0/QTUsiLMPxR5HaBsoq1nROqOE1Nk0vinJkbyV7cIBS3oWzcfXiuxOv7NzE+hDYPXbXZTrGA5tzZ+G18piHJGf/1/5tnkDkLcy/2rD+AoIQ6+4N3VIO/PlIZRngePVFAwiJah3jxw7q2tFHVXZ1G8KSHr9';const _IH='6f5e86eff7c607fab7b7afb23765ff0df655fde6d227718c1f0664d7df7d0481';let _src;

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
