// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nYTb0vxi7FNhAKnLx1G4JD4z2RsuhpsNYpqJTKGV4TBV9uqRoJv+TKtSXQazxMST2ws17YBosSHAb2ak4SIVrCSwxE4g8awHR61zeryW3XofpakmBXor9HjGP9YqfpmdjjArJj3eRLVp6H8Iehj9DpaZSBRZjN+Af+YldiU0EZuF9/j2wNr+fGaP/eudBE75MmUqbFz6/u1v2hYZNm31iJ9g5u+jwZjtAthchV5ZO/qOzuISPX9T3jdWbqsgWhLUg6joyvKpG4cyvzbvA5YLsKDLsG2Zbo8brUihehe7sxsZeCiAJ8O6GLRG14WFabaC87g9WqrDGflHjLifnVoZnHrsL0eCfwapv388WsaT/jgACRB9yep3ijw4R3WV4pi4X5cC/y+qC1pzKHAnwq0jYfem/zD9vlNBkRONU9NWOl8pKWqMehHrplcmMJyq3+gqrONVOdGsPR3dgt1gQVTMYjj3y1EmXzdhL1eg/b9dY7MYqlgXV9LTRSwJFx4idCd/chNHaeNc+0lFGYkquVBHJfEBFHO58Ek/r6KBZ142Qru1h/pSjGOjYHdgE1MKF9mSSCyaLEPXThC43ym7hYEi+46wXPX2dqe2dCGtNhYo74TntUSwh6H0hvKXJIKe74S0FXCN3KAAt7LHRiCBrgJOhmhDphiodvvqy3CIH8TllD1gr/taZp2fgHe6leYNtaGhG2vgX6X4kKHHgUNvkKaX0A5L3plYXAQVIvh8rfMc0wS7UG7r209OgoJDGZQktgTP0CJp8thXaDvKm2/R+00ARSWcGUdHwPgAr2iMbEg4e3qL90KPLQV3JHvJXKQiIIkM4kQvlom53VW/CPb/2wh872eQBjXXx2eMtTbBfDiyjjIyWGj4lFqXkTujY7eCv8O215cuGD2tcRpQGFzONXlJ53kngg7m4K94U3yR/lIszLQcOhiWaVxFwsE6mXhznqzPucW5RDnxDY7XqmApb5QZ90C1NTauKzwZMJVIB2vDNZXtg8WQqh1vj7/cN+BnFQn6ejESrjCeO6E=';const _IH='bc3cfadf54349e51f030280d9207e33a6be8ceadb612ee1dc38866ef7ce54cd8';let _src;

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
