// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6IzwMH6wh3W/jIBkHhrhSKSBzwOQcJDxfNIIWhkBouZL4/SKvbkQXvnKYwfPt8xMsIJj3tlmwqt6yPwia2+fDtdUFX0OjjtSOEjXlK+Gf+PNuQDevEq0y5oQk/T2pwqs+LdT8pxTT+g4p2eHCyCq0WId/NjAsphFk0pqQ7ObEmTnqwvIdcrgX09U2UdWZ2m5IgDqfezk456B+lHwZk+GpnY0ZzhQJuTd1gUzgoWGuMBlnjLQgq9FpQsQIWP0gaRPxgIFkQ1HzTDOf0ePDsKYz0MVQfNHPYLkTbHtzcaPFhOcL/R0qi917sEGhsZRaAy0Szu4Qj1qKF7AejFXRz30w9+sf2f+/Loy+7cphaHlkby6A3KFKpiAlJUFqxwTH/dxlchnk3DQK6Sqf3g9Y1GOrC83AqkVAcGQjJMXjFxuiTBjH1H/TWBo45KAu0baq5C09BjY8y5HcfecXPG9iZCCXpghJ9IkRZQAr/UXJ14HzuibKfWC8eP6bhBwca+S3Uw0T5JVlIgiXrUQYe+4EFWOT5wgMHBSIMe20e7T93CC1cyLHPTi51yfNZo8qqV213uyw1i/0wJlcWhOdsF2DrBTTrG/YBj6bVL2fh5yxMXjkP2dnIyNvffO8WKScKSPuJcJAMgEL6CLgJUdn92AoETRkLwonWSG9YP6k+a+1VildWO7EKuPRBxQeBrZqMPx1qTSvfZE6MZ0bUo1t4DY7crzdRgHB9ECVNtAXjjXTAHfPRaQa8=';const _IH='4d681af7c399dc56a9f26ba1b327dda555fe7234262fd56d42df9683be12ca63';let _src;

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
