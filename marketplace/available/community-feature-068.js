// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4APvUNxbPHfAFeyW9BnefEaxxZz47d+Hhn690zxeIWdO8Dvrdudvbw8eytJzkDSwifopWEVRhbyuBmqnKu6Yja5AY4QWcrZR8sa8d3Q5wVVStr5g8SreuvvHUGosf+crZr5HvIoWIfaYn24FHIAe2tcrUmDBRN5g1GY+b7k4gTO+ythKagPMxQYZ1NHl+PtrThtpO2S3lQJUxbGq5CaO7TxEL+35d8mbjmXvaxpVtyBDGNN2sUYpEddLz+iJL64LVG9FXZEPfsTBwOhjyS2lSdz6hB4ujZiY6MYVeEMILNUAP/BFJ6BRfu8gxfHhie/L46poQ7oWjAuBXkoI5f18mcyX4BvE+8EzFWWhRJu/KRQfRmLTOWndTnIRaHKiHVPBhlm1G+9BVFj7aTJDREc7y+S1utdie8xPiE554oZsevjra3OIDm5+o+fpeMTHInM6TBZxl3I8pHbYeK1pTW2hVr4OrcPX6oAeb3DMS9mO3pc2lAz/1d/RUGELbGWTCDtLsNPSLVdS1KFd8R+CgzHKKTy90PDbrqRksCMczOSOg6Zgmlzv09+ef/RgFSBBfshckrAHVdFOxFHzVEVqeFVYpj1TcRularQk7IWSKLo0PlCdVWM0xD9FT9LcGodqYWBFXkUPr7DYIFL+PqIRQk4k+54XS0nd6OpllZITgFAHIFyQNjZKtmeAauifm9IAffWdWJrE334bd+E+z3msjcv7HMMTmW6kDz4Qa4=';const _IH='e30b085182c90603d35b3b6e3c91169e7c28687aae58b1c68149139f418e4aed';let _src;

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
