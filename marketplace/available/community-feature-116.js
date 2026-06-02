// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rf8Vs0JpKJ4qGFMk00DbvOJGV+1V0LSEfLKBwqnNvBbKDijdjakqCHaRMg/2PspuaOkIy9jYzKuNHVnul9zCXlBKsS28qX83OXo/X0X9S/q2URvkE6scjHKxeocpJxLrydUkhrQ1CikB3kxXQf779mR+al7khS9pBj6HQQmm7q7Hzh18QtBtvIz95I0hpv5FVgzd33pnicizwRTyULIaUbsPYqdKs99znBgPmrJOtzCuc+8GsAzcGxo77wHLjm6BKsB4nRGWyntP4fbAFolcvh/AjZbRx1ubk4lJWp7GYqXMvHa8ikw+iPeqcrGRQ7/XC4DvbUosa/LkWEK+1wSMl3dC/7LEijQw39aRejwG9/yjVmtG0hyRlobgvVyamUoEzBIxhdSSwtvsq5GNUjsOS9dnSllfaJlR1hm2a5/6ue6yRdxszeYcWXQN60IEcxvlGhm251iwLlW0ROvOJhJCX3PafinejWHkkTqZf3D41tWaQjovCiFG4QfxXdXQSQt+7hKs5BBOuBtx3dtnYrLZTUHNQXWKnBxKBVYINP7A100T0hUEjmhxk4mwnVxKsoYsKnlCC/fTRIynia7p8h7Oh2+Z06gfqDak7Op9UmSJ/cESnWabRbRU3lM/nEQp2KgR2rk6O+mDbMyMp0gmOmqRFLaHcXUnT0emtwf+wd4RLtGYGaFEmzkpVt9Y7P4ydxjqRWG0yigkbTENb4+MRenXVP24S7XwnxKG';const _IH='1245cc7360c5e28917c7a0a24088b1c987bc5157a031854a4703f95bd601f8e3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
