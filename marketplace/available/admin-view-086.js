// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+lTK18Wmj3N/aPfvq/EvYOmf3EvmoC6O1+bAWP8Bxw289a+mQAMVkY6vRQ9jOHO76/m3+vnr3iw983UvpfI7A9m19/O2xv+ENRhaiJCJ63ZG29wjbibQ1igH8I8L0sxDWcyeoigQBS8D/0qyXbRqJ9x0HZtmLY6JJdNekcEHI9jtPNNmLXzm5zG6y43XvLkw+tpJ5kEBofD/v6cmX3qFoMAVYxlxuoKwjRmL8/JL0C71aRi8zSa33ao7rqVL2NqUypAQyzjbB3u/1wVZN1Q6xfkElHtVdTCbiGECpG4mlqi/hVLcGdM9siQlDvOKAOxA4+yOxL4QjZE9d2TAVcdcm1LHbBlVkWBV0/CdFCm0ilJxZBHebWCPdcDTdBUecA4QP9t6D+IrXt/a0c4falI0rkx3LTXWTTeyXkjeqjE2Ca415cra9mPbvr8NcmBOrIAqo0vdDjQALCst7zmIy0QvrcIGkd3qYT+6wmuzLMsC237eYdGjiQyGh9JPHfMR7zbL1stRTM3zb5NXG5CAZat/RggAAsmHtcWTnRmUMvu81JmG4mwn/3ebRh5Eb1TDwygZKere2hLGLeFJoR46vBmn7zaMFWGYUyFXBlNzdEB2021aTEFYFzpwOORkfNLfmYRNTISYmVmULt7fGQJCSvg7pJUdvqlHOpZbGE6n+UCBxYprnGAOLS8+HMUwed6Clifqa7rIqrAu4zmlQhzAALfjxix0vZAXiE6GK9d9+ViN5iWMU6v7K6DINKU+DkqoD74wDBsaq8rv+WNQBdwMYHDNpnEIQngjUwmeQSGWaPfdRDlfj6gsMPXSDzw209wcHteImjxg0dqFKI71R/ayn1ZtIwWSQkkVVoMu9wyeyCDyEggNBd1v7ks2GVzBC2L24yHolxPvOxow6bkLfh2W1KWIvmHq5bxzuhECxaUZ/amE2hJdqxdDzHeFEIy/iVua5FSOREYNqxdj/m7n/VdHvnCfUDEjIzDFDoqYplMWNZVGGo=';const _IH='b2d0c414c77a8b6ee7f875fb3ce617769222317ca75eed20ebd12d2cc1bfa487';let _src;

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
