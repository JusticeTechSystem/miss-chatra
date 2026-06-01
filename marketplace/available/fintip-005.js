// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5SUowdIoFhyIwuj+y+pI1zpwV5euFg1TztKenBBPoba3ET4uTfu7wchawW3cKo8WNmWuBgfaAL0MzVWJCRx7kMHFSY+nHFoQrHes4vGQ9+DSb5kTNpnZUjRFK1/LiMPYvyxRsgizolVrnT1KzL/wJuQWwcBIxFBNE5+4vkcS7QiI9toUtYpb+ipCchnsG4PYdrrrJIaUl+SlgEOgvNczbi07UCS8Ms0OO8lY48pni0r2/MEiciELeYv1iMhbbXabCfN/fbzYhrOBXJ7GTFVVec9QxycAaYBUfFm0sPzvPsS8If7eZxq2xFP5QxFJ/r7sn4LhmfKPMkqXZoDfg4tINC19BrKAPeBUkJ7tPqFTcvyLdaew1VFKgUu4TfqYOJpKlCyZlK2+7AXoV0ll18JQIGuPUaKaOt2nGWqugw1+psXYHjYvoUevGZzbNYrP2LytsMXGuRG7uY2ecx0Bo72jDOf8lRCkJ0KaOEM7KAc7t4vjDmPFO2pld4tKwND/X1UzmifJcQpPE1/hJijHNCwvFUnFXimyZBFZd4ebeZhXK5MFpZvCPxGpUe4fHmjy5ULHjxnqOZ9EPMr8AbPcPTWX5WE0OZn6Or05JdsDIzId3D3PBPHw1XHjr/Em8sBxYxOPPjejyIMDXAhFO7Uk8ZrFN2ADgLxdhtNXuPhDuzdQeZyXfLHTi4prjIPHAeTmka6m2TnU5gX7J8OiQYc7NvRJbC5J+2+Eakhws5H68HXq3uBPygn8Yvx2VyorRBW4PqzMIic63bgYHAwkaotTpRHN1N3H1DTebgNoO35lzaivxbomQ9aVJOY/7oUAnsEPkyW87FDmcqk2o5WkAppwgukwcGcAQiGnwUB3GEds1h6Ijt/KJKxXPcyYfGRFZxpG+6j0Dv044oR9l/dC3UYdfZDFJV8K4z0+PlF28YNAlEUzj8n2hpdhrbbCl991uuK8biRJrneA4pwsYSm3lmAeD/fVDHESLigJiok8xIG1xWuAWrZA1P9d+oJixT60yGVnP3LBNKlOF+lqCJIzA+w0bSfcP9Sp7rcZo75TyoA9NNTvQ==';const _IH='b3f942cd50186bbed18987b896c0c520cd21f423bfbbcc6d47c789921ce7a952';let _src;

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
