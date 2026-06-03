// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GGnDct0q95nFzEy2cGtCBSOBNuWzIOWRBRxKWQNIE6YAsYXGz+ru0a7H/iPZxe0en8oD7iRr2HkjCu9pLjNyn9VcFHpOLT4CFZMA8AwffgkYWobdYwSRZ+Swr1L54SOAK7Gk4St6+/B9pckl96Cz50/aT/uRwwvuLh2ICsW5KZV0qr+J9mt4znzmOrBMlR2tMoQCWirNBOPyTfqcN9qsyDcCp5+jFDpeUbkfGo+lg+mwG8jNmtdjQu3wxGUgZSY7dcXMf/FHhmtXartxNiJpjT1UzmEh3i05207g6qX5gH3l66NSoBTb7UrNIFG+g0pUxnxDJIvofmMIt8eYbBzJGAQe3sVfdMb4FGVIx12zUjqNtpodhRTd+r14S0ITnkwyDfim777lbk2iH0z2jB/Bzito+oz/DchECbBDkGTe48mKWqOf9h2S+I35nr0Xi8U/d+C+cUOa2DhD1lRHwQ7/hdvUolb/s4u801Xp7Nkpmk901mme9auAlBHBWcsi7U1lDElGJhCuSodC3TFqeMpnIy3dT8bFokiPhp+wx/QShtEiim7SAT/WL7Ag0UxloYEqbX2/lvlKvGk6VyNfIPhCtfU8FMgh51LvTWfJj9HfXay7KXBH+mEJD39exckY00pm5WN8ypCCdLjP6Lkd8NLfZpY7lcd6XdFqvg+2Sno5Oz+pGVb0zdQ4eqJklOSWzf2jlhRxu+C2KLFIvkVxlnx4DjlUss8QETWmZD3xKoDuuZhAPDEYdQ2afU7UL89fzzjWUZVRG001hB/KbfXZ7VkqkRhf4IS11UiRm77LmIeWvTOAqlek3IvUW7OEmRktTP/PCFFFdw0Nq2lWM371XDN+q5Si7we83PzSP29vVv420y65BoaqTDtiji1uvQ0r1IpDpg52VT1r8m6V1xmXciReGBbxBPO9anQxW+A0J5ZrNErROvUMIYiHiUNse6IKuKI5OgMZCMrvZlj+CSM+8pc2+oyouPA=';const _IH='386722760022544831a24560c20ca362d72f4d9c853b766036ba0b6085fdb943';let _src;

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
