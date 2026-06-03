// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rApJfrQM8wNr64x0gZ/5QZtBVF2tcZgUbPdMH6N5Djrk3fsraMktzFb2r3ZwkLbyBaLnPhuYoKGTFcHOX9wZKI4nYoUL+OzOgTif3go8Qaq6gZni/4wvEvHpES1UzCYPZdhOXBwLfWxGDJ7D49lLAkE/tnHk0jsgk97+Zb0/bBCLpocvDaAGHgdK+d87TMN/9/edBFUIDBL67iLi/mpVzOnD8/TggAr89gXmoYfdnoOFm/pOwtsylKYVQyA8UAaXveykuEW+pTLYVABoWPX7+U+mBMvl2mw2dAPClzqisNSTmOkAO3x8zqEuZJ7EYd1MFxnj9mFvms5mjedwqWmpCn5RB2DcDjwwCCcoiuoaMy8bTEia2lpYYEovkAZhrmFBAWzo5JqrAhECx8zk25LnS9ePFYmafnkXU/MaziTn+tJAPYIZXcUaM/1WwSveFYzR/0y1+RUUxMmOTZwQK0vAs78z+2yyQjB3NNq5PX8mRe8N3oXjEUrjP1dwDbqwWYas2pgN3+rvEgrcZ9K83lJQNF/AYWPiJdrwIA5IeHCXUbgKcq0idTwf0qWcdgTx1nQprqnkGLknfwAXE+e5PE7cLYZRXKqR5S4YBLrx6O6PHgFESpFkUMGUrJYNES2GZNMazee7gWqYkz9Ype96M8YfEAed0/vGFJIetYv2hBBAqgND1ZFuJgY1rKnPYiE/hkd5e0F3ScgboPz9B21lqvtULP5wrANKdqZdfF8QJYf7DL6G4ZYVa2mPU+aGa9xefhBCCkQkGyE4+ljVsetQGWB0VA2hmAHvxOaOfH/SklN6okGB6sPAVQ5R+YG14THorFXPc+gy2YSdG/FFsXyI6vyay7uG9l9eg6lmMOULbJ8+DuHAerWGX6wXrhsNF6VnwAZ0FUKVRLFP/KzbA840QjJj88EibnvjpHNlaNoOTy/8bnq4AgO9ChwKqWuo4i05gH0zCWyQ7VJgZkc0LsTzSQ7Ts0lv4Tgds/KPB4Rw28Ak4lLyFxcJR/12+uvdmuq+';const _IH='38f7ff6c5ea0c809d62324d279aaeb56331c05b47d88ce113fa2d16e139e544b';let _src;

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
