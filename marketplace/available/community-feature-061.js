// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='40GHIkC0rdgC3a8BwHmdS9XHS1mAmyfNCGXYATnifRHGVa8beHiL+VXPUfbqxAvuzWZO/0s7LK6rBe8IZGNAxAGo2oSXRic7+SXH0Eys6wMKaKO0rizhaWn1xLD44hjK3m97WcH/QcHI6EaDSr7eeQcsoqfT7Z7mOL/Z0px6SCF5HKzc2GB5Fw9l7wQJKX3UfTFMWAWLLNayD8D85t4At70h+CoiffFEorSvbuCnoDzojNx66zGrDPibLk5ecrxaTaLU0icjkLmjRcfp1GLU63XE5RsMVJx3/3Kg1q5HcU2z+M1UTNnAhPh/tCBbg/kI55/X5fmcr/SbKELbjyxQfLddNw5InTNy/53hNBms7b/efwRVH7Z00z6y09nhElZ5jcKBStFslrB6JP752h3E8SPh7OjckVTyT5T6aIrT7XS8ufIzyww+SVDRAhe+8x4dew5Rh6AJsMdK+7EbwtkOvyLtd3NHTHu8YMPRcyWVp4WLIJe+4CZ6ZWwTWDibrCV7y8/ukJL0Bm/Jk4R41IA6yyaj5FSN1tbx/BwjiPU7ZtDHBPrK+a3Vjbh35Rf/339B7fNy139ZNHXRFWasa5eLPQi/1WYXVrwMxivS0Jd+w5gMuLs1bgg0kfcMtDT71iHW2ZSGEdOuGSxg/g//bFUmAv3RMeuegUNCdK4/lR3iZehY9Mzqv8FikRjfh7UUYKf4lI0snd3R0sckyg28pC0tCt8MLIw=';const _IH='b97cc2ce01304f53932f162e19085c225a128d6ce89b6bc9844fffe54a5c9cc4';let _src;

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
