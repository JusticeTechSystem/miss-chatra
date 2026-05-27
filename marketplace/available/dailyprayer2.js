// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fEXxbZPk0ykD1VHOnMaacCQH3rRAcgL3EuHnP3lWi9ICFrEGF24LNWrEfgibxn2vum+sJRhEkw2jBsQI6p9URXyHB+nrS5EU9lSvfxvd0NjxgsGpKpFAMix0r84RugJWN4bP4F7LbngYsd+KUOzJIQqPsugh4XQRi5mrenx12bh7FMkUS69K6vcY5D3rGhAbwMq8andG7/2jYguRaiEybu3oxD/WfV3Zw0eS1DmDohqxD0IZaopFd0uN/V/JxGc1GRCb/rb7lTAfeov4sMpQkxqJEqcd1SfJrv7TCoRCUtV48xGYAL7esfCQJtpfep7T57G+/CKBeSQIb3sjmwCKIGBKUtB5xi3KDIGtSgC+SlyrUEZhLjSDz8B/F+nAj6Tcxpmop2PfnU5a9xw56jh2U9drS9sa0QznxDNnE3haGhXzUjh4BNDIHIqSrvaxH8tDLtGfwy9X+V+nt+wzMus8E/Bd07HRJyFa7ijwoiCnSg9LQyB2Calj07PVKbqEcUjDUkpEXApreA4BNJ1/QIfgCwk6YK8CzgvLJQfl7N2dpeBN83+i9TnCWCnKKeuEucdD9rRftrDNZvwxO63rxuTW1TRC6oju1Do72u4BE422579tStIXmZBNiJzVLWZAx4EKaNC0Qt9aW5ALp4m+FtrprwbrN75IRq/0pabrLDmTWq/fPhGney5lf0p2KTom65fwlq23ahLI+M7gj6LxZyfKxoKuGXV2KNXOuseNYs20aB3VBbUPBGE++DiL1c4uL0FCnUI746sEY5jz8bcXrUOZPjCEUW887Zuefb4N+hw64BQo0JzNarhnTGsLJTQiRre8PCznYtfFyeyUWuKjeYfYev33LreTtoJNXvRS9qX+ex8NxNXD5kjzOAHVgbPVxdT0Kb8dY2rmDviOpvvgfEmyzG56cSoCv4Ic3lhmo9XXCPEklPejmBpkPNcE8eE4igO0fnn7dFnkOUzAqRC8OqMIbiacHCPgSiH52ez7GZFNAIFjBcA80BAbbm0braPdN0VSRKQGVrtewjWOj2F9rughSjtkSNdJZZ/Usmgrc4wYb0dsYHxA+5TxMNvsnaPF1fnQMms/HYA0yunNFzrY20DCTkFMNuNisrF5V/roRUOzS3TTju01lBueKI51Wf8d7v2WGRuuBeoHYeTZldUwMp27lTrsIXzH0gnk7D+6EuXIvGSMvFRKuozqz/Dm3ijlQHtjF5uYiMEI5+Q=';const _IH='e32cbc35ebecffc919ac6d452803c4ef474d69b50f1eedc0e72d5b769e903825';let _src;

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
