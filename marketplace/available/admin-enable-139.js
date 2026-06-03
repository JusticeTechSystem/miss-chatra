// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SxS0wOFCyc2rn6qv/fl8WpgLvwOEi5S1srSu/hi/UXu0CFmEi1RU3CSSybanJQplPcmTUkteDO/k9tMO6MVx6e2zzJH4t9FhgirmSv9oK6sqfk6Rv8VWQtdAhcAtLqHg5hyhqOmT/GQAKYc6+/pMSyuIA7pxAcIezQTa8apL2LnoXyvsQb3uy7Zva+pRVK1Koodo+DR0Su9J+Esaoj7tFU45uANh3+j26lAKx9vK0u0XNzhXgeUKt8xirLJlnMOmX4Gb163Kq1xgKjNpiVe7p9GLpRffQEvO0X3bnhm8eaK4Y9CRf1nmbxByg4+rG/rMLPfDFXcvQeB3KGwS8iPhQx3Z+19xfR+Oba5mE60wkXnB7SFRxoUEGyuohcH5rTt76zpGgPhSFBg/EDV9I1Jfzlq0GJ7/13ZQ1G8uuGf7REp83leGI+cpMa5psC/O2fxGrjuXO++5e2Z2kT+sHl8e39r/pIxt3r0qRCxeCQC/KIt7Ze7jKH/bvpFefOOjr0VyIt175K6pHtQOuFdeYDQxajHn9iC4dklGc85UHWuFdCBUK2tRGJ8R3izly4U+5OR4E/v0VTrkCYxZ0a8ftKK2YzAyHDflj6gnVNPryq5bN0WYqa2gTFsuhhvoPhFpCnLvCMd/jVz6EgEK/bhM3bfULEbYvtuOQ9WTipizSCDsUyX6NDA7IBLHN2CIXeCca7hBW7QEd5FK91Vl3bnCYGiJFT8JxVneO5iPnQzH2k1C4IBZrXqzOR4PiCWWT1q0BctxaAhaWKfsNgrv1qusU6Q9AjgBMd+85YnKW5V7EP8ubHs9I5qZ1we1O4MoW9rJXDa40ObFxavyS4zr7vpwVuDb2+g/FyFBLluupWLu7zbne33nfPj5ZNJwibUzoodsd2n9pGNkCds7gLXo8RzvxdiBNKUA1bFXVTqwmjtvTWbLwHrTpFBfEclorGFJ8xFWbbpeVlZvuKqmdsqNxKPe+/hxlCPDaNrDRPNCOKdrpMusxLRou2hHT6B9Ao770H1Ubl3/Yg==';const _IH='77e88683b80f2b6e6bf86abd0c15a8e90516018f74796dc3a3e7d04160543522';let _src;

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
