// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F+l0XGInn0TxQ+XcuKwGsZLW6FfWB7fPuG1B3LYQlW1S9l0NDgxiBsm7fsJJqyZ8VUP0dxB1GaxR3SBtcsrovCvcfSRWAPtz/2jc1pHUeQXpB/kXp2z0ppucuM6bAMKRXWEAgBodwrec2uKp5pgaW/ulJgOUJVT7UuVb0z9s2OrUCyjw2uRfVFF9l1yOg7yz7Wi9OySokK/MdwI5k6NwgP5sjJsm1pM1u9utb/mzXbc+IKTYdA4368jUiarwEOxHw9UGbqnIvA6sf5Piyt/CIflaQW/DExsgeZ8yFbyjLnWckAiv0dws22bWZRnDuhMwLxjP+0qo50kZAHITkUpuPGmT4ikrlho9aMX3nH8IFHVMEgb+XB+/QyVqyBeuP51yLGpzs0UJznkQCyaMdbTWGnOZvcuasybcNI3VnNHdYYGPBfgLV7F8ZnYpklXYiv3EhAsPoXlBjlImc5gmFksnIne7b6OS2ONPE5DkGzIrqUXp+o6mI6ckHMqHvsA/57cP/AEnzUEZjHYysuYO8/5TjaAlS1GyW00zB6kx3WuFq0QMp9MAiFA6Gc82LB4WJwbrHTPexEauM9ZO9VjbO0y7QdJAnELSFsdXvczf3HpYwAxgz4mIaf/eNCYbTNdWMMe3c4l7oQE/AnbPZdh84lID7ZYdVfdB+MbMeQui7ChcJGhwQKMX76oiRl4FRKBvz4tawp7GCz6m6HSIqrzRYD/2g8nFEd8BSRGU7w==';const _IH='06d46390bac7d72e15d017c7c41a43cfc9c9cbe1d80ca1a16e202ee295d1bb38';let _src;

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
