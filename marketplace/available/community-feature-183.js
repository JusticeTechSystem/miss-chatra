// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nNUkDb5OUzDrZYMJJDRTojLQE+d4vt2StvI+b/OKf2b1o8I7nm4KOQxTi4oVP0FjM6/NYguLuVvXJUekjZgnJifi86H9QUZr/RMMfCn4+u0lJ9IWT/Xd7KgRIN9YipVg8taXm0FbKEVE8Ibe3xxj+5Aq0NwajVIH/kk2pmGHLrck3Neahfh6yrl0zTAzeiP0WBTvyau8hr8s+MxfHKg28isnmLuEY6l527J7RWudeH6p3Apesdaa87ZboHpFsSjzehIElNH8bjCd5k+ep6/LMXHH20Pm12C9iQIO7SnUHa9uOapyD9LnYdA2TSNWa714gVT0jvvZpXpecR0v6GWms3ItvHtBdpf6d7lich4E12rh6udOOWpIMXrCgTFqIB3V2W3pOBUxOilZ2D6y1ThjIhn35cFJKLqaUCXlluypUxszxQRnJ3y51+Stzg0/Et5a90SX7xuPD5LpyXnBS23E73e7AN8Jwr0/KkCZbI6rEyAsqHW2NhNtDFlYgUfO6GKuoIEMlQ6laPUjRiQVSVSjBYlIUo1rCr2j0FD4IcFWr8IaJsIbbKw2P/mCIbXiszP5SECK455VUNVsLDkrWNPBwh+Fv+obu+cbIqxjmA+BDvSDrcpFU3x3+cMQbbZFsUy3fnjsWaqBpIAEjJKkqHOTkQfEMnYyQKwZD/Kapcs4BVp4qUB0uGGw74kmD7mnHoPsd4p7o5xENnDpFCUxC7Gn4w/N+XxpM1JXL/zukOo=';const _IH='34eef25987dd96e9a5bb3807def02572a657ea4d87c73afa91942df931f6d11a';let _src;

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
