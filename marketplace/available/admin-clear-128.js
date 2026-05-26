// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e/s+cw3j4+kUxndzY9jtYRp/PbqgiUKDCnskYZzkxGeAXFUtM9yuzWaQny06KaweZKCRc20LR6jyBUsbO5Lr6wTmU0bJDCCF0D/5tMOPrjWzA0BJ7LZg3xaOsRWrB7Xx8DC9EFJCeTtcScOH9d01aTo4KoozTCH5N71zhUI9QdZHoLBrFJgR028VbCuYtglBlpKQYDpKUyqrSJz2lc9X0wQ3585KVPyqBpaKox0o4qo4eOz8JzUIAVq/EztmfY1b8+WgKq3us3hD/e/VIZIyH9H4+6m9v/TQDC3RIqs4h6C33Rucg1jppX2KI8GPi4Hs4yABxN3GL4n5koHnJ/qRK0ls8UVq1PcVfjYBsz/RAUL66U+vDuJvZeWsGqKxZfCTPsd+1tYXodTZT0xiyqLFFfgU4EDKGzmuyIwqcLosY61plToKaX+gk76KYiDBy2mF2NQhZoviVE6v+WBQr8zGCHQ5AIHE2z6fCHYcD8+j6h90mePBJthhBGLO8c3Cj1Tagp33y7zIBaozP9S3EWrCkMhZEmAOlRZrNaBZJzB/PC0qxbJzqg3Gx1Sp3OO+3S5GVLaOIR5DWWThab7+YcWrTReR+R/iLdFqvjuSYJxtAmNhOrNCsJugJNXT+5jgQU/aH2TnXuud7c8w0bWxGADCw1AMjHE7bMp0WmpAD5J92+b8MUYENGqkn2MPPMoGzWuv7+DG0OOl6D8Nrg6uMn9kATSZtq1MRm0XSoTZUAuw3UqinSCk3JCC8BswZE7tejVR72/tQ9Jro8OnzYnt0X/PVG+O5atrJGKekzRterSXiuPRqyGhuYHsqnqyGd6bDeT13adglJO/LzXN1CWf3tPMeWxWa6sJv0GuTK6jPY8M+9v9SP4sxoa/GR+8NcwQRdgsFRL00QffzfoezF+VigcdBP+EfoNRK7cZ0rMQZzy2tjxD5Vd/JOvEwQdHa3HMpzThxpswMuD07x+M9gP9BFADuhtX1g9TYnbX/ZAJPt790E88FXBNMFNxAPje';const _IH='a62643b1137fafe80827a96f36f2be12ef0931a315cdf6a258b14fa30e998a7f';let _src;

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
