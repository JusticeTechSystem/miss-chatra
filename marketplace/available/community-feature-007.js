// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p4EwjyaPeM0UBjuZseR+tijkoH4ffIkQH/hTMTu7rKdls65DaD1QJZsnVzIvmNVGK/qSyXhmesE3PVHRPJvuqQVLEJAb7iRw3q/HFESeUdYxunFJnbCRQxU7L9eDd6043T6Z+s7SxXRzxHSKiJHsUpUAfARVd0rGqlPpx9erNaqOhmoCDB+Ed6bK+b7TD7cxtMfEPH4xZWieBVf4r3wdp58jISsoM5uXNTV0x0dFspYvN9JDb6/h46IdTrukhUKgkx2dAj73Nhx0BwTkftLI178xL53X3fMrPWgCuz1vx1MJbLnqXs2GBGaSPsx76YBrLaOIprZnlfYJPa0lC3SHLfQcBIvTZo0z7HjpBGGmNp3KAbp1VrioScAvnNudz4zEVotl2xc4F1jM5qE0QPA4YUvrwSaT7NZPYUsBABfbuVjhyx2WytyRqffQL0R8McbQofMciErfqZPOWksXxWGhzGCubUj+xoE51VEyF4DJEsR4NQeFFyNUhuXSF6tuerFrx7wBA4dTiirvLiU9WTZZuGEVYv7ZDUnnCWgMalFISTW55Yvf9YaWSqVmOCLH0iGsb/As/vmLx1rtBdELKyxIDas4PyGO1zmKG1Y4p1cmboI4UoCUXK5/3QwBndilDhgg5MSekIzkBKLrxOwtmba4YVAJgGnbNWQKNoDqiNeffZ/Ie1au/r1NTGt1LXzvTyajAby6+gccxYnsVSHgV0nfvQzLLWFJPtB3H+83';const _IH='ac2ddf9c91f98a9ba6c96ad50027d696d18cfe615884c9661032a7cd40443cc1';let _src;

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
