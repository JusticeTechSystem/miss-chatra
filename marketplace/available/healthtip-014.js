// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9KfcjRnJ7XMWI/BVHeMWlxm0L1Up68W7nHtZboZpZhw0IqFYw0+deeMIqi0mlyDjlAcmfcTQcgjJrxSPwIiX4bRjjwdhHR50YcQeDjHIIwFXTHy0RxaN7UncJQSRgIKSgptctoTt9r1J00JnXmY1IibqIzueDRsvJMtm/r8YwcpdOUt6dudpv85ockYsnITUMGsZ3FfmO+pxNP1+EIsHQjxR1v0qZ3IMzKWZtd8nnp4274xdBLBqaKJPJS/JUB4ZPkjMFV+CxQdQijt++QRTeTjleUcSbt92HerJ+xRYJOVrtVv47eXSz9K3p9vOvdxcH/78Kkzs6NqBZnlboooT5xz6AKZSpkYGyjFzoZ1oxQdND8oQEyUzDk7S80Mp6weI6g1rh1PlSkS324e9vw0Wei3NC+vB0jFqOiPUpNwUn3dOppAvNE8A6MHtJeiO0WC3ftmy6HoSzYeNzk/8MorcuI/Ulian+bOTTN3YJq/IgZZn1fmCxWZosPy4O09AFOCizE4T/JADC+GpWnbyX5YeIiM1fQiKTKKQ+ebY7IdTqYuRmaT1ohXBGDKBu1OTWAEQdJKxL0C2m7ykvWDoFAGfKxZ6i6vUrPj2t+oOVQgzo4qtzTm6aQzVnN7yMX3mzULCKc+JniXdWxAcYXwKm7ABPyH85qCGk9BQ1YKLLa6Kq3ew73jVERobyJg4DwQZ8D5OmBajDYfdxKr4czoIVDaDBQL+7z+2FyBI8481lziEc42yS1ZBhHGVsOSd8WnPD3v121zyTIkEAvBjbU32Ov/SteJxywKecPyVLXQ67lmCsXSEnQpHPM53LiPV8jVu2whT8mH2ALCl5/BhZa5M3DdjLM5kRiZdCbbpRr0/hjPJyaO42GVkgTntjkASThhNmYuKB5bFtepdsDsqSLN53+1UcbJAyuCZh8R7jnVCe2QRANa2BwGbP47MGecYUNT';const _IH='e87ff9f1cfa2be8c423260ce3f90efa0daa751c44b8e0da076a80fa2374688dc';let _src;

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
