// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkHkaQL+IoG+he7FR++R2ND3LWBI+AfIDgxpQXeHDwe+SDllQZLvPtK19ig3wVkggf4lIf0dWG2Zc7oEBjXjb+PwZKfLfdpltHdaV+OOb+WFx+NBXH1wohhgvZ7eZSwWi6NDOLU+tZF4iXPyoAuxIQw3xO5PxKBfnGadBtMofnReFSFRKPqnlgCColC1JgmEXXoigpLeAwgW+Wz0N9mZLlO8FQ1CSEqs+IyTzGLV2z3w7WbnwNUKrgsKyGkY26xob5+/2CWueune+CS+eIGryEKMM2OEvhhosL1I/W/nUt1TWQO4TJtNglffBdU5SJ3OhHM1CY+D5K7+Z95ZsrWUcAL9D+fDLDv7JWmsJMzRQ2oDYjYWO+ktz7JACnaVrXB8wn/Ba7XRqPuqEbY8HfYmHGCK4znJr02dMf/puOB9YzuM1jk6xgzSRTZxf6/xZu8OGAxlnTiVr3YenUEpJWEhTn9PDHOwPq05RO9wpta9G+ZpwsPBHTYfrTutSuG4TdCZ7vOxl4YXjPIhCRoC6p6CMwEz+urD3l/EnppLGW12yGiSekbHEPjQI0ZdfhC6mODY3zV3RtzxQQidZf7kyEA9VyTMV5xVs+h4UAEiAZDdIVkDwEm1Em/sy1CfunheTDLKKyRkvemskEQcdvybNlbzPte7cIMxVJWclL9NkN88V2GV6Kf4pB3oCNHZvCvk28f5oJfov72YI4PQI6z5zjz2o21S92SaicXpCdz44rXgnSPShA5kLrxA==';const _IH='e86def98d18cf503aea191715784abc0e86ea137a8f0da91b6659941acd96021';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
