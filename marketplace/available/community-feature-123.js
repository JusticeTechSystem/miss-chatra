// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rTPIohEg/gq/Mh+S+tYI8tDxU0aAO4AB+5j/FOoFsqqRMv70x8OwBG8RTXQIgb/AUbvAzY7QoYaYS5+IwSnQ4QnPXhMUZemIVI1AgObAfqMi8V8hg2dRJ7B0vtappqRzHmBTT9pwM0l8hhmWlE7L0nJSxfXuXGGuVxaipZ0Uvtpg/vcNUKiYoKsVr5MJDnYhoXxrXdJIdfaAZyhufsW7LYIcZQ98TrO1ZI/ola47nBDDFCTFluthwTCAPxg2mDB0KOhE/06K96xLRjhIKXqYN4FJ+yy5ioA43JSMt92IGbwKorOfCTS/lziLqvrTOkNi0NALO42H7afRqmn9AaJRVHnoKm0AtQINiBtk1R6zc11e8K9MBlZm+q1irINKEnSGM+Gm47QXuZ0NYPVyedTvG/sOBP7si4SC8b4EeHunnHW/m27QFYkUWduSeEb3ftZUifdNvQeSOkdkMePA6NKLbIhZjug/Rv10vT/Narv8ZiX1jv+bBYvqy6K/Hi0sBprOgkP+mqVTID5lHetBvg60o405Cy4C3Lg2Vwoc0A7cROD4Vsgg1lJ+FIKe3QdSKxKShEf7oZnT/MY1euk0V40KzNfcNrY8ti80yXOo6cVyup6rnrhrEJht6NA3HMo+55ruikXsDM1Z4BzGuCqHfIlCOEdvH7HjhopN9haPi2dIVZZl67nT57zJnJeGLE41rCW9iTofseRSS2fPf4AyqYfANcOX1AP+OGr8gBGuo6Q=';const _IH='b009c8479f30f1fc1d2353f7d88a46ca06bac0c31928661eb79c6cfddb890309';let _src;

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
