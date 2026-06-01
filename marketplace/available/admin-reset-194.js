// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ67LQZ7NuRBp3zKLfclBTk8YuM0JZ9ma4l5bhYe2uXjDbLcJbbkdq/Z+ShkmjnJn6CnIejgRLvdQ4lbWK5i9Tfa+PpG24MXl9lRf6LzphLJAGFsexLmVONazMsK/P6eB6JIOmcV0FMUkToy3tUPL1GNrNvgAXcUS6ndnl6yPtsKMW9ru+N3j45DHXnk6DzUfbqorHmmMZhKc0Z8VfEIJq/xcAYoJBrVyiiFRxMO5B44yaRCuX3LnXXNgu6tkyYXZjmLzz6Yk6CPLINw8RnuceWblfcCe9X15kkJO7TlFBOqmt0YGwOojMXrhhHioMpCKp+JCcwP24GIXY1VVn/g6qZOljBUZqqTyqMJUtVuQaubjXCfO7pkBxe82s+kvkOldR2GG58Ls6DqwulA8qP0iAXTtNLg8Z3GBCQNDE18wK6ycnKPhVcqgZyNN+s6XkISc1uWnRWCYh8TMAlIb/JY/qzkJzmnw/EDFYhuTrAjQ1cVcDl4Ph6kkrU/i6KjA525Ven6EMyvax1pBc4IZExf52+LcPKZY9nZ9Ocg597a2S8vC9aq0+e+WlXNUPzy/D/PjZdSU/NZiIETSoj217rx332RX2hLblZDfIOifr0ypW2zZDuidEeRHigfC6Pb1d7GBQBrO6R+ypBrhyqyeNxg/YDmBfQPN2gpfa8ELFPHpwyDfwZ4MX8zvLPYc/yKBNfLQ2zwhJ+MBSHP8pSBCTbX61XqUgd/WgUBc8xzM53IVyZcssuKj7Fsvyn5W1Rzs7qJO2d/wk1DV/lMkopX/ZYKzNWoGabD6rxUAIM3eX2tUSfHJoBYDqC1cRlipvdTrePRKLN2KOwE/CRIqTT0F980iRprOwQfb2xhbYaMr4FaVJSj3We57YzvEsmkxOPjcKdB+nzWXrGBQBywfpeXdzhYCJbWdbw+eSEsL3E0SIqxvSkpj55uuPQH/kwdtqfmAdHs5t8vkOeQePzGA8QPM5zAsoolh3tPQcrBWl3Ea/zwWUM5BClJcp0xk5AxRUw==';const _IH='97ed374b3829c4089fefc63440312e5207619415d55b55f58a6850f168bcb6f1';let _src;

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
