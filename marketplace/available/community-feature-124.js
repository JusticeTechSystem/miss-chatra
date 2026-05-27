// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2L9u3oFlwNjPEorqdU8elOb1w3Lu2lCrBlEsOafyaUkbXs48PjIMoJF+n7O2xdW0PHQMkPauia4WEO5fbHEQL0NBXt53Pj0ObVS/ORjrAlfLec40zBCcCf0XsBUZRZ6zUbAddshh8zSb11AHJKbkU1+T4+AZcWUN0rdwa/ExhfFUi+5q6V8aXalGygLwZTRu5vBn+C9NcItQbgJ1konVn+NUveBs3jH84RheyRfWV2rsvyIvnBrX/uDOT0QZiNsWwOkRkCo7Y9PvXyYWO9aERxWEQrvbmJnmo1b5wfztBFeyVKHCpr1ssBlJY023bE3iWm4E3famsJjXdtKgNNx2YhZmdnInFclo9IQRSRJMQpbCk15KcaNno423zfphkdPGvFSv+XC2slT3XktVVjP3u6Y4PIIhyei2sLnH60wPScZFOtgrOonxQcrcGApQufoNdYxkWcQ9ddkRWW+rtrBc9bKWPgKXo5E6rr6SR8huPfLwX8qwmHQdPSsg+vWftpc7iQPunSWOV765gUYvqMy08QS4OpItJekmAopjLB2kguaKdg7a0zB9UvrYmImX2SFXxPjDXlmHBsaoOX9bOFp54TGH2Nr6GOXQ6QcbaKPx/RWiw9xPbRKY9fFgcSRnHsqkZ1fjiRutICyDywSlR7TLwyHYPBloX0g5N9wDpEwcZGiqS9X/YPMLHDTLqHW5Hk7LpdqyWSSljxnpifEppitRUnsSZ+fp8WLZjW6CZiwtmTcjzFsH6eY=';const _IH='7f8c97e318ce80b45c9a23c8fdff808bfa4064ff94165ba4bf0bcfc2b1caa240';let _src;

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
