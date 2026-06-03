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
  const _b64='Hjcv7VFn9XbaEb2L42dNx1wj9HzaM+V+08d6orgtNxg9/4Q5PKUjlMqXB/K76OGGZiy10wp8X49Jhm1Wkn8yXNUIf06fSZf5j0iItexaIMfsEpN4PV/ux0NAI9nmGP7FcUWFQRWvPXOko6ASbH41scGmnkNQUnFSM8i3z4lU7aKA5SmGuCHv+b9ARwsreQPKynLX4Q0Kg/OZHTfKhNl2KcQiPX+QV9AQILFld2ZWjKIeBlNSfb8QOK/BoLqmvxNnv/0S1ZBwTW3WsXSUadBnKP1HFE5RUga/LzwxiEsA1jVXMPEBOPqbIx6KLI+/4LcvvVTJeOOuBjrzJjA5AWNljLfmewcXOURaUOlxniELCao4JMiLSwOm1kt7b9IchlaTxH/rez2/6HDj/H/L/eKcG1xoag3uz5lodFdcynwBb4vLpyTI7raLGRM5DuY4r6RCHo9igPf28G0rIMrcsPV3d4dbwMV8yGivT8aZG1YlBoKE63Sex2p4DnroaZXok352y+bmJR9V/GUOnkfLeUAIRSmpMBKjBu2lnIBMkdzibFMxR6esnwZi6LPZ5vPIt7xW44mGGYM/3eqew5YCXiWD6k5imQK+52B0ySnmfOXK/uQNMi3ujMLt/LbXmd+UdL5dQt0xyRWl/9ppJyk1CG4J7OiBUX1MKnl1/CKSXtuWWzLKUJtJlcfB7nsWNVrPi9xeqNxrJlGU3/eaZYDdwac9NYZWaS5/KnDmDTm1Tf1D+ZMx7R2IGT8rfwzfz/Zkh1IkyeyXGCkkqzUHBSaL76KQPRhD5vpVs5+iE3l5T8gKswcjsfLaHM9SSrs1/WDOLn4hXm+2ivOjnn2fx95TsH0w9GQPckuHlZ+CDl7A2p1KmbU4/Srf8UtYQ0AAnYIACzb/PPluZozEsiB1bbk2GsqfH9loDH1Emo+RpjNTPYrkYw41DX3jgeygaeiMN58NzRvo8K/L1bWqNA2shom5Qw+yoYlOKLxNlJWOUoDbIXY/zBc5xF9M13KH0eg3A3+mniT2nuL5nyNFMNDUrVrw71L97lNbBFh7Ng==';const _IH='51b2d32f60782ccdb886c54dbc113b42b0b5f49a5d54761bc81491a93ef2fef7';let _src;

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
