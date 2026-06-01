// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:06 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8mEObyzUYNtF4UPhvEubfQGv5BQBgcGMrhytD3uzQXteA6ACGqUs4Hwc7Hdm3sT2/CC+DFX0H5gulKvEN1AvSogSXzGXy0YqGWVef30eBuvoZKwN0sva06DM9XBPILjCxEe2YlC7afj63+uo/+GbpVrDb6rhMI1MjKLKlyhZvSTcPD/U6TA1z4oKHaiaJj8xA5SySpYqCxpCpQVLvQVFeE01ss9ao9PjGZlqtflWs8Bl43XzsF37BltHYPnw1Rv/FWEzwtOdg5TyLOWBiiJDn45V+2Rh4x0j88lD6nrIkZNLcS0/WRvTieiNHfjFx5wM9HwEf00G4bkv/4jRSiskMAGlIQfqCsijnG/yt9ResYDzLrAxjcMM6Zlt+pvCcLfjtzmHDqILUYp79GKkYBLk5BjFKSjbmj0ztMat+7ltMQPlBsv+vRB4ggNkpA1dFE5ZXbAqt7HKLHRGPYvATWNdfQSzaHitn3+DZ1UISPxyWhf/1S59fem3I41FQ7Jww9lQgE/XTycj3pfa5XUXMApRFNVVG4sj889ZamPwaEO1FSX2kH146+14CgUEQ/EXObb4Ooz0IA9t7QgQMjyYn6c5JvooAVkwa+fEkEDJU1P7lF7/F+FXIdrPFKi6oD9zmsxyyXCP4z6yXKTIvKNU6v8FRSs5ZrPmv2plCtLMfPgDbiv1SqttTn0sX3FGigyOG2BBEPrFkIHKSAMOPNsnKAOdSEJ0hnyy5k=';const _IH='898d1acfe6f8c691d0ebb4254e9ead4c28c8da1bf7f2a5875e769f3960865ce6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
