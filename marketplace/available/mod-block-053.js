// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QsPXzx+Mebaggq4iCDKFg/XwNU/YA/vE3E1lkm0am8PMacSXa1FgWuSVpG8F02SmSiItWfjOJ5nE782I5LpbQf0jgoziWaSEoWOfADE50Poncpi6uoL/hKmEztfp83aizLjeVs2DiVIeMHITkoiTz391xw7vMbgQB9dWEeAD8iwAFhrAOAtwt1sMjiAhaEHp/wWWqxZ3dLEQ58arcxMojcaFwTOap1XKBoQv65I7mnyaiTL4B5wJsnzfm9DrtrXz7w8XjCs+vGSMQFWdL2oWcv3IlFYrNExIdYSGt0N//NzJ+YAApQKJVYw4sPxT5ujMjvR5pkVlHGUtOsTOgvaiC/lXQMadUUwriGhRwFcb/xE5rc2Smv+R4JtbJIqACTmrmhMPsn8wTVBSudrc4mqr0SGA3HJr+HcgPC6kfLnLRjc9i1fcLAOBQJPXcnbEZ4P1C0V7AOD8N2PhlPwzSHNZ6CL+M5YxHnV1WR5K4/pZ5tS7SXn0dG4EcLa3g1CpJnswQuUHmg/l37jml5BWT98qCXNh1hDI4eZRRylaHhH0sC7CPHkK6B7p0w1DTvSotrTFq0uM7YaUkhsnwJ/7jT7ejfL2fLMO0pqwIqtDUKZWmeEjP1qRGa7UFmmFEFgKifEniAR/vqpxjFpQLe3q4oTZGlkci/Z1a+DyyOrTgyLr6gcqRIBSHgjcyfDKoUrVMGafeyz7GhdcHA8ZUwzCfF8OjRl/U7uziUaOjd6e7rOXls8jRphVApDfyyGpeis8MyrbITsa/DQyLKewwY+1oyl1eYxGnolEYFeiFL0jwKw2UUuVCpuKUnFyYso/6vIgR0Dl3630JLcFXshKLVNMtm+3xmjv86I8P5TLN8m8KYqOW9umP6UdFwTF40oAKYjWnRiMsk+DJTGeRP2+jkH0BltbeLll62hAsCaM7+bxl6yJGMJUlNW0KKx+un9WRxtEMi2lQDJP5eiouvi9I+cgxwFxOKxwTpXzDcrfQm7UYT0r534ulE/z/3EpSaabHItn9a3c8DRpx8wsDB9zpeEp+M3qZBsjjy5RmkecZPo9cBTisgFSCP+k/FucnCT04XKgyqis12Pswjck/H1PzOp24IZA5oDTvd0HJiGXZzwqGaUcqFS61pN0lsHuvGA5k3IoyIYNYSfTl4Mlvx7cVaXofeL39xWmg80CbuUa4F0KXQcjECMtqh8Q2bRBfuPwTcHgxz4g1jLJmkGXrNPHMEL3zsSvawgsXedC+8Man/EXL66omwOlgfsvxryK4UPn51BhcYZEAfOHtrhiPSZ34nItkagdc3EuerXndYYfjzhnsfpCWaof3zdxaYs25iMVTHnsvIKdzso3rKNchKwTsmlpgQueULDDPKeYZ40Duw==';const _IH='e87b3bbda6edd440952fc180d0a95514c3e4b049d04b17fd1fcd0335ccb4e604';let _src;

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
