// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DYybajzKvuwWjoIKhqLcaAVEoJgBCF8OKUb6kRP4PHd2xbLAmmrFHfghjBT6PNNrxxsD9d/Mumm4CYNrywxdzw0VY38G87cB5S/kIaR58M2YbeYTmd2qhA3NxNZ8qaMQGNB4PxQKlHxFn7azKwsAItpfuXBZs5rIcBHkUDTzFdcuYA24qfclDZTD1hM1+5Ig3ZnQjzZ+uqtWMJ0r9g/vC/h07jBQw+kAWETVgQxcRRrrZqhKeQ8Bpzl69CrRA4Z9j1orgOJfk/EPCwYZOkhOFy427XRWvIJ/nkAecr6R7LX7ijuo3E9FGiJ/tB+hp/8uK2UWVFTdN0YGSu/ALXP8fmME1aEOcZNStRgKsayjOa4oKilYPenIiCKRZyW4QvfAGD965zPDWuAdV4p7ztOymoT/6Q68sV01FJIYu2y4G+OOzljKfkYpmoSzWfi25OHxtIggru7FCF0v2sBwXBY8vA8KVxSyDCqWW1t3ZYtVHWoO0UWlW5XhSNNYONCwQjnnTRgkErSOccQsJlsaekX/4gyf9AYpuoNHjfEL5mYwKlylnZm4poRV1eovt6IJe1UQj7VHsAxENbjglg222EYaW54KAYD29m7xLqHPmqsOsG7WOKIIK1g4T9tOzMuAUq+2YZnyzpqQMv86q5axq1nzfiS4Z14bO73OaGdMKX8qeRhZRpW5tIP4qigRMgan3lP/hkZ1SdjitzDeFhi7i1qFkwx9f3dMs91f2G/N0bUFojXW34C407Z9S0VZhUTX9o6L2WSp67CkaXwDpUEj2HicerziR4ALziW+ePkrJ97H6kzIURz3SsKvhN9bb0ox4/dKlkfoFJVvNpA/4zx2xKDT6RbBH6hd8AqgkJyZYXBURK1KKhF2SGBIjLz0BMKSf5pG+1xT/agfzR+8jn7sTBCFl19DOaByYHF3flXnzAGcjhZ+JWdMJwXlxgy3Tno=';const _IH='70c30b3225beb896c2c9e70d7869d03f58e9e2887e671066c54b2708b046482f';let _src;

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
