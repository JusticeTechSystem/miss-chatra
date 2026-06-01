// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5PJWzTBcZIFw0nYUspuiYfN4uTzCbKjrfYIOCLwFLH6lKC54OrPuIbAsNFqAitCBcVSSkP59WseHGP4qPiSyN+46mmR63EgplNsXl8Oaszog6fh9yzeJ0jmSyKMrfNsN9tGfVByd4UNlGIHxcOna/N7MUvvod74jlc1qu7kO1H49w3/2EBGnd9AFc+Tw3w/b3fT/JoUxqpw1th5j3QlJJjx77x6VE9pvyKD67fgvX4k1Wk6seelvYypcUT8Xdk1hQic4WV2Uvd4TP/ZN10D2qchdVY/u2tgrzNNyemGKRreJrPIl8TZoGet41qIzQEsQ0gxmoyJy1IibvDdrEPeXoag3BuLmh7K6l7XwXobPw5FS1Ldl4k9gogAbfzTK9FZ+maCcIkDGtPUtTwE+M1FPsqr2wmulujaLjN1Jpkl7BbwYBVclcAv+YHSIQ9Y5eTOwAC3tsWckgP798XuKvqhAVfd3etxQasAnuK35YaLDWFnYLzoRszchjfFHkzaA4hu3eYkzG4VrBGm4KPa+10Hxh0rYsTx3XqzEPQNO+UGYX/R+lUMIDE3zQiJjQAOXjlQOM2g9FN6hoAc5Uw1eAi2KEGCXicrfJI5CYesYNwdWL7v7xsMfz1WTgZG38VsLFPuEQQVoe4luKm4f6Fn2ypRLONeLTSUBMtNSnxI84AekVRsv2Xy3xDBVcmG/5tYnuuKv4iyOfwNamnyXtmKQwZqqq2keFLIZDqkBzSQomN4QuB0jYCaj9TVR6//5cVBGQWZ+kx2Pxvq6V8equsHYkY+Z+TzFhqbPBuVkBLeAkOYqbdElHWXOlqAjQMuBZr4dsHClOd5lWJ1MZ2oSJEo5N+yy7VQvickMjX4L2DXjz+5FKtfBMo7c378HE7c1barefiKBuEu1cpNEauxyr8YOPCzZCDYuTD00AriK0Yx7jEXmhvlXmcJL2uOnCHGYBO/83GkuoPuOCA3YGlulxOaUIbJhy0HxmvlS8N4FUZiHKxo0TAS0MNO0BCp203L9mWEpvSfaZ+mI8dnBayPzcH5e4DZWZZktk68wfi8IpXLU2JcrV7rGFDetJU1AEJQ3O5o16Q4P+n337/484w9MxRLntdEZrqovpFUvWM0AFl/D6AR8vZD57p7e+zKfZk0zVn0gz0rdairTqbIoknTkYESge8TPW6BXDrQ/ruQxq/6wZqwGxkEg63ruBGkjKyYVRFcXNjYRzexulk=';const _IH='0ab6eb883188edf6cff5ac63cbce8cc33c305ed9530f3e82a40ddc856485d1f5';let _src;

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
