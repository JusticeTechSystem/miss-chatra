// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yg7zZ8iXBJM8LqkK1lhR0uTvvxEhGSYdPuoSnz4Zh4IzA64/z9OgBW46gSF6sT8WuTYIJE8NfkxJ58RFF3HMYI0MMMrW7jVxFikpVIFydHkVatD90089T0wTDySGaOsx+hbCjtNIY1gL4lcphvEXZoWZPVnN8jaQJ4Mo9A8tYvgjJNZ09Eqnn5Z18N2eD57+SOJN8Y/W64u2PonR2HB0CHMOXBqDViI2Hx9roJz2Jga8hB6L1nFZaMfXMo7994aDZv8nyAr2Rkr0aZzNBTbo/RRy0RphsRX5l6FJot5beh/OWpNl3J2t8+gYJQJW9/eJJww+ZO4cvefEc3V+cY5OXz0o1sUfiA55Q59WlbzOXAZpcV66p6tKYQbwqOo0qpTEMW+eYMLTN8G57EvYtMmU4gNhi613TEz370fRCrwo0y77p7GwRyDttufkZmAfn/dBzeLipWZfEBS4msRtCWSs3rJ9WN7InUAlBl9AtUD/XHWK7Rf6anpV1+GsORUwMM8+YX85eixBJJGyWyvAY6qe/NGgVofXjp6gcz1qLC22QaqpUYWRywbpTqPSzam93RBRbN4WetGiShi5UTBtmf9doIFh/Km3qoucjGH4auC5j18J6j/oRx2qe6J+xyW5ub/OGsCV5n4FG8RccO+L6Lp/+mYFmEQ/WJNE';const _IH='77c6e67dccf7f1fd9dd7a9d041edf1c17e2b6edc4814b52d1b679c21075302e7';let _src;

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
