// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7cqS+J3T1+g4xJ4y2Vv8Xlc5727k51UQrC+odrHjnwlrp1QtMmIcEhbGbR2fvlVgdqKCi8RjLyuZEF6TZ83wfnr+swunNq7eg/X2im/1gZ7U2jPl3fCCO1Y51oU3oa1V6DWEOUFOtq3jvLknRd1c49myrCNxj+KZr4sfIuZ7CHzOGt3bG/YcREGkCb4P7/BKCErRngduhc5xCzCkRIGsLXeTT3yvcrjhirLNdLzR+Q4vl9PmpgV+SAUgjbUKmKMFzWjKVzKRmrt6z+sU/KmMAzgDSPJrr0lgnb5Y3shw++BbZdwah3ZL1qBBYOISx1HaL16qizhHy4lgdqYzfBA79zeP2rL0/NgijdgwuSKP3LnPSoQ9SRNOTfv9m2QTXuyVkIIB133+Z0Bw5eR9A69O7J8rJt/y6OfF3WCexPJqegtY7+BnOMOQVJ5m/0ShGYazkN7iLW2bSThmvwtTjzIpJ/7K4z6I605CgcJcwybMiNqIV3l438oO';const _IH='33f8a5405cbdfa1546b2b4330919569bba4e348981fc54d0ed5d6228e2c0b99a';let _src;

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
