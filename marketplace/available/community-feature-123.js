// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NOAsXqhYtZ5CxyVkN00F5OyiX0umc0Zj7EvzSFWNiPHjWsh1AByv0kvTdGARRA7IAg0gLoW+5VvV+GC/Vq0NUeC+SZfBI36Bt6NblfRQLkjGGje/aNmquZE/7qXxyNFOcxI2Z3uAoTMoFcrFcmWMioMlOGCfXkgj74ZtJog1zCBz5I3YwAj3VQOhdnNw1e+obLPiAJdwtf+3tzlaLQwPOco0Bby/OubTJfe7LFRSpchzKitiWiO5sADGVt1zYAQq/U1F1xTdMig8RByfkyQSJ1IO7bUze5PHNGvWAQ7bqkBtIrdRsAmvlNATpcT/HEVt25ZUfVeSkzyPqLx78rvaDNjPrCXbQRc/kFHV6XWEGrkAd7zziwj2kPc2KS4+iJq7H/URYQH9/ZJaSjRp7wZmYGbfo7KWlIrgEehF+Vs297mqJjlvbM4rFgaO0d01H0iJS0ky3/kyYzZe0+zj3kYg+jQ/nfwFjy2r9Z1wZ8yrvBxfJrgrgExgcillkrVgBf9tfS+imwSxn6eqQqQO8nmSPC5EyiAxAyjhVgxuqb4OO9Pa7SL6Wjf1K70oXGhF8LG+PASq8aCwrzBRE8XoOtS+9KxDxglO/9BzjdVvZ+9/0rEqb/tXxBkTH7ojnTiImSUqPwmzGpVdVEvN8Xbd8Ax7CgOfstynuesBlD3w/uV6hV/KnnIAkDEAepYBoVaoCdmvmPi4b/0ldy6/BYZiRS90AU08+zigxD2WrhgU2Qs=';const _IH='782c776fcdad37c56e5648aa5c254b59cb04cffbe47285bc98c39beb26fe1a2e';let _src;

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
