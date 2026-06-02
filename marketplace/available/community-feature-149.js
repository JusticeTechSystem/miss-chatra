// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dYxQHaJkfxgJi1b710ThouKdN+nXw0N6NXFiEDdwT2TWRMH4KWFKFcZcGj83woP3aIaJX6YAn7FGYHtFG+OtoVosKd4LgWukxDqCQvAXkJ0RsnEorDnvDcMyhlBv4rikYxoEcLWnKqATp+Sczm80XS09PSqbLAIlbGI2wOjMs9NY+r7MRg3owzSP9lQp5pkT6+j2GvKVFE32QQE64n/uqFJbNQfNK9ADhlKlxc8/GnH1ezQRmJduuBfZ9zN5jAhsh6d5bBmG5Puf9NcdAV7UinrMb1crY7U+1sZ1bFKJC5kzWkMFmP0MP0MrAwGOilDud+7JznCKnZT/beX+/Ylzzw19EntKsNuTTTTWF6LNFzk9qDCiv+y329N9GblN9WDB2oGL8YIPQvzecvl4qOlBus4MJ7EWrs8tkEgvTxS6NjKxtiA2aSh8+9yw3Thg06M5XDIdNKh/215mZZJxCA9Y8rj+q1sWblXVTpSuqbhBM8GKfK+4T1Rs6dVS+k08149Eo/DDZ+rMA3fxB9KfnYWWYYDmD3E8dMwXW1UM8pCOdUviBsIV5MZqXm85z9xwpEplnYIPIvlLZxNnvp3wx5T4NuRrkbcgR4aihtfv8p/XpQInRrqV4hDcymide284mxm4kgvEcLEmcDB20idGnNCrMavk1NEpdClJiPR5H8I6ciwMXkHPeZvGdqauuH+pfiVljsLJyEPlw/sdlm8yoDATnG6ZdUmxqd6e3OOgrjRlltXyhcHkLgI=';const _IH='1362c65875acb2d817454f1769031a730df5b7136e07791c620f8d78d020e70b';let _src;

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
