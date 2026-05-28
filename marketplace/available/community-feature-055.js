// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4YtBLCb0b7IocCDwtm5qX/hlvs4w45YD/ruZs7PoniGihb3SSUGTMKQVxp5g7a/VdBDsHeHBu5SI/Kzui8mkLbVZL4EqezYpc10SMJDnNSh5IW6rlTK6kGxBPnedJo/tA/CzApD0wJ9iMd69HVONcD/Zis3thrjvoxBaiXG+nParBvMa6J1ImGnHGJkqdb6Qt+kT5jI2qrHIYHwcGftFRpctqQHRi7LYefyIxaxE4de8Mc3MORqf57gr9rcwlMx/iMOq5RI4MX5Cci33x0vuQGoymoQfP/zfUltz3fQFqFSeaMtNsb/QHmoHc8b5Ub0nHQcag0V16vN9gBRnAehXPwQIu6IV2CLQjm/Cln89hEfc0Y2blQDEIQRYz7y4xnvqLl5Qbqi/m5eRxTo/lIdCS+0xT5Slh64nP8gJ4e31RdgcKl7BuxzHrLlZTAfl624q7ZfJKViEkMa4cnBNP6XYk/nHyisD6k3Y4Q3VtqZ4ZwC/zGmmgwu5GaZCAu5AfwZFHkIu215EPDByeTWbQQ3a06gDnl0uNI7VzCYmrikyZKVTt2ZLoWZsgTXKnMCMf2LlsSb+4DbTrXdQFGABi6WnhXtKKNRpbw2nwSy9XyIZbmU+7xZqtWS8iApOpt8rTHcop55of7vfWexjZoWqM9udqNVg/5vakQVJlqjPvdxc+NfZ+CNS/tp8BILEcS6lCBLP7/ZzuTT3N9K2u/HpnpPD3T04OPpJF2zi5iuLyAvTSjw6Q5erNAY=';const _IH='5c1a14b87da14fac7c769e5e9cf4b0d66a522b282eff990d12da7462f2a00cc4';let _src;

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
