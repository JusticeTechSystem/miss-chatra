// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LgXeFA+43WZtbubiquydls/uCFnuiuYMw1XkwF8L3b4D0dTFw7fnRpoDt29bXJuC445g4wi9MnAZuulUp0YsDNuta6QP2kkkZsHAj6/Ogup3vv7UzaDTrRQm+Zsx+5nMx9HZXw+c/82xuoYmqYtuh44Gus0R7kjXCKtayzKx6dtcaL4vvn8Onxk5JKnINqb0nhnKEPevU8PmGznWui0aRaCdvkiHCWU8ExmJBttHxHpQvKgaUwhwO2vy8UJtAMbvaF8trG2w8nuRO8/1SoyL+/uyGhZJl5FLyCWePY07LZYksIoIMjwEGG4eAGW3o3xcyMM3IGmvaqtZcoAeYwferaH83TANsWK8owgJeVvkDSOLV+NU0j7OHeTQ9D4dHTPq8sCXXP3UadwFv4r4bATJl69JUwhihkYKzItIiafNgQ5unu2TyPRIgNGQJ1nwLei7/4rwVklH2AUBoAzYPgDRdIYcLz0tV5UdnnmARElacx8CqJ5AhF7g4vNQyoSOhUP944DxKMVO1wKc6/K8V1UupyV1T4gTYIeXmorbypVzriVpZbygDHLpWpmQLzzfWD0Pfe8M49pa9wF0L+//JVRx92eVisNvmmPcryS28EvRtc59ncS2v9E6Lbc4NmbdplfKvYc1bsMrxoi0asTFFbYQVeHrsmkrzaimiRnsW8epAtVkCkZQhT+7G+1ELjqhuKJbVRbu4QcER8upCIbFnANiv9pHkL0S2SzUneJarYuVNWvDBw==';const _IH='e294833307faaed56f76bd765034e3cd039dfbf44d55d922ce8544278d331595';let _src;

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
