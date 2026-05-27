// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AdYcVBVy+wpxJHZCubSlojlUltwpeRbJga3aLAhVk28O1dRY7ZBjnlIKOzIPc9B53mBoMka7BtOFYkiFVVw1L75tJlg3mZoFyRmuP1+wdGckqjDCkADRbVM4Bkd/FVh9RBrB9OOcw2spB8oo8FKoA8GfNiUT5pwaV41FyMziWhcs9Xf6JoyAYb+Yj+D8DyufeU0SOt2usHQnQiU8ozPHUP4/9esS/ynfHrWUScLdAgXYozLDhPvZQRSueQ/ny6p7ALjMfwIngbNrNTHhSJdTTMZxk3tLmXFRpk0eqZHZZlnXRUD4w9UXWII2v0ppLCrCdNkwVvMMt2vnf79ETMP1ouulNbuyfWCYTTPhQbXhxdbJOnVh38m8Uj2tyvkK6uPZJnD9csQyJu84Kz7RwIVPiaMl7fTCq0cymvDQ28/eSlMYy1lD99aY2Dk2CJL7tcpTE7JCR6DNaRvk7uKn1Xr2IUh8/NQ1coc1kyiF0g/JaUU8ctku7Na0zQ714VHuMBoHbIjQZySMjErWqtD4yUh/g60ijjNtjo7c4WvEbWsGUOWg+haNVg/scnmQCHaKm7BsEjVJanx5KE2psEG4bMRE9FM3+WVxpVHS6w15gg8c3lg2BgEGCZJeKivPdajqvLcfXVl0Yt/w/1hAFLG3lAErJHplge0Vex4PhY5p8Be956BbvDTAOgEgcqgVmGj+wudBrIJX9B5uh1q1Po4do0QvALRzx/xQvzU4zfTCHY16rOiUcQ5/pvE=';const _IH='c537e1483b4a951acc89293fde77546f43d049eb27bd150bd68fe2ea26210470';let _src;

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
