// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1c2NtJYEoPf9nW8zzUyA/LuYU+BRGlojgqChKE8hxV6szBr7g6KqkBQDlH2Sjw7+vhUMIMg3SaBF4tbD+Nd7hYMsBVxYj1aGULiGcuzNlAoynCx9FmXnW8khD5NgN/wC08XJu+kUqZT8RjMEuDKkqWN4ZSDNvKQ0u8x/PzEuGMI7VYlL+dd/qZptxaY0ImULU/fUFEpS9WvIfFQ5/Voh3Cf6mBz7+0K+y7wgpERl1piO0yv5dwSXcD7tVe0jd0ilKeFhN1dllYnoL6SdTisnOaDAMXO3YMU6J0jsFbE/p0Lyt57ly0Du0A+UJW2bDIjLjMU77MLxhh/fTZa7qRtp0gQjtsg+EHhm1hDXmqt0ivWUIT93osvXG2Pz1LDA/JY2oaTbc1/9ei1brACHgETwK4YIIjjdfaMe57l8cTojx9PEQTyBFwykmJFPXtpEPnb3S2yIRbPvGvFrU4Wso7gCq/oJNC3tYsaMdRhzKR3no2ZTzIYYUFwXvtGfT3LjVvJbro0S8VGflMmgSTMESFcV/NbkiLYa9cYFcuA6CHh0Cc7Qyaj11oelism27uirtO6yPud7vi4el3HM+3YpQkztJ7svQ0Pbu5kAKlTdMpag+ZWVZGuUpoGYwedn9AKfobTHP/g3/kE2C2pL9nbiamJRzIrdTw+nIsofw+9oHQwxlGrBknLseMChcCGCPpDZE5cfhM80U79yLwtMJrCStVYt5WuU/9aDq90tEj2nBtHqLzhSZpY=';const _IH='3ebbf9e96e2e5a535751c9860f9bc4f914285fb804919b2334e2df2ce640580d';let _src;

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
