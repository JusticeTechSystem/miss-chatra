// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NbuZJNh5fCtHjfoGHOkyzDBxNUXrIZs1lD65RpTQVFgdJiTMXJtBIACc9DYEC8VYHHoGGYxiBN7QToixlesgG4QKZbOWywS76fayKRO6A7Df11j2Dt2g5+GvpteMtt6s7iafFU5dI6OBP4IZFiDVOwYZvPyA6oCD+RouSb0NbdZVIYbBriVuEeowExdE5icOwF2KdUPCCMOcXgD0xNRGEM55Yz/X5lnekBP5IugwbNA/TyM4sPfv23WShmPDm/3wvbpwL+mzqIDfhgSRZkBNszcABAek2Y0zRABmwUds8fyvOcRDy70G5slSFdXcA9jSyAfLLwnBHmIXB8txtlN9odOshuaVUkyEGWNptdhZHUo21LmGvWwzMta3BYesXHUfXt+UNu188acOMoHdi60dHGuoRv1ribjVzlTvcIRfSav1Bw9rlszeWCJhoyLJHmQmxD/xbFpqtUHrkGq+MLRkHNYkHm4EIHOMRCloVhrY6aAgWuPCSayJq4fMVbHdYR6WLNx5vWtQUkRzC6D2kcC+WsQtJLfSpptxEhT56gO2s9ec07BTz22kQbGyFzBEYgarC9CQhLmn/vETeaA5rCopIdUB2hrDUabe/9zfPAOOZ2TXOddWRYA8JbMq9wovxssmVyHqQdyb9OyElxarc4PtPvDeBhQIxqyaVJmR1c/IZxjhYBRX7d1eqXjWBHzJE4eILzw31/I4c/14WAXH71sGd3L+FIMrO5t0uZ/iCao0kJ3JS490AuquIHFaiNCj32vI1LILgFMDJaZPeRZ/DmkOiLvTJAPD00zdOConlj6/hCSH4CjcQ7taMX7RTQxN6mu466UJfh96FWLDDqOi5/E=';const _IH='2e817d0038f6eabcb75c5542ba24815d8772625974d7c2a57a81f3029a8e7c1c';let _src;

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
