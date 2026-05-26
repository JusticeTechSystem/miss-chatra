// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R21Bqq5oG222qVRe4Dejb9uVfr8Xxt8lvJann+S/3W33kFzNgXZYi9cv8lcZBH/lWpoaUcHSbMI0o2Y06umG18Dfn2KCDewaFLurvOT5PycMC1iLSC6FswXTFmZWRJfRlpkN0VpH6OkWDf8UwqiiNdomEwpB29dBIdkUx2WbTi3Pc0ViGs2Aose1ebKrpDXA34jCNvXX9PPYA5O1Eh/nJXEtT1BniIeDL3UGp3gzNuo1u9MFtjRkRJBdqMAJRuXoZICZEgIHMjemOUjaIbSSg8zZtycf3jHOn2PTQDf4l4se6Lks3xNRCmfB3KfUJR9EfNquH5mV1tnYPLgecOlFt3OCqjpcvQt8RtsGSFqKEhGU2cRSDDg3OdWSx9lHaZotRfhUZauO/ZqGY8gUHA3UoC475lViLbN0cgtexrM3FaKqejtVc3LwZylUvsv07V1OUHWHEblZHkGeFPUqlHfRxPFThmp4Zw8Z+KlKOqr7kwdFB/vtctNu17hLnvr6R/LysFUrYbaxrl/Hoa6xezOdOCfJvdSCK2DB9uNFBbT+skvZxfj4uNtpIKY6FN0J0j/R+Ch7hoNiE0rNe+aDKMxjwSjbg3tpaeLUxWHrBFNvfT2OyA72wzBMbdyun4YmvpGfEUo7JNhK3hJCHfyCO+mq9uhVp8YOPnYLj3kH8ozERT94Q4Titu5BylFKbeBdiDDyWFMvH6Woup7lQTaW0rhZM+dnq9fAaV+8/UB8L5wdManzsZZ7olhW58xqztx7QAUDR/ZDYvrnbNT0pFizqA+Iq3pAqKBoj3NPcuT+YaLvwXoeHAYZLjpuvD27fltC434XmDpoyXEm0affvhxoI3upXuIeICctHzi7gWvZzP/b1lqhe/8wYb+vPi+LTldmH9PlmT4/qRf3+JXmqGZCkWRAV/L+m4sE7GtGwhMzxgWO5Usq9ch0fxSEAG7aRjlShLxw6sZj/FgB7uFqUMghkkohMZ/KlipzhHqlZT97xuo3HF2K59lE0G5Dpg/8Vbo32lce7LHWeOmXSrqiy1NIOX0be9Ph';const _IH='08b1dfcb807ef31b6dca912eac914ff2522fc1ea3203e5302718ef06e5cbed0a';let _src;

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
