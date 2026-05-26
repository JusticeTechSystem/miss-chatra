// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HDFZ4IbNBDx73AkuJE5V7e8POaBjRfYMDLFNpkqDJRqTjB0I66ih6QUEhjt40QZQmvKbiMY1Cvmi2OZHAEc+ILZF0i71mCEc6dH7ehZ8k8PQ0ZvFTYL6heWLd3WenMa/eiPkWnRKu7Px+PpxIrGSN3JspTm7eyrV8acVavYLvbWlvScwQy4w6FiI7Y2/8pQdAbTambL1R/psN3rLyUnfAiSAJ5yN1QIuG20l2DvGVHfhw5sGzSpSe3de2P8KBhi2MK0QbcD+93Wn0SyNn913vo6OBEfzhgxE4wtlVeZN9SbG9zE6iXFKnNMoM0EIBhQrggpTffe0Ywuif2QWeddbWqkXa/w3+ichOK5trR7rIHW9/Ah+7Kphb0YRAr/579m2yPPb23KVRk39QUzlT8b0S/QOZtzOXsQWRS/RLlSqWNN4DFyfC3KocHfL/RJWmQcp0xD4BEdgVXah+fGvMaT+SZUAE+pKOTtNRIvtBFeF3FVtLHl5aG5UqfLSK2qLtIuFeXPLngGgRSqWaDe2+HisN4EvqXxjL/fVFQcZamOAcBKakai7xTJ4nGlneQxiUCfKT+2EiOI2GEDhs92FG+rJys89i/CRb05T6Qg78CR2R3YMTHU0HEkpPWaOLQF+KuSTuLTrc3dv3/alpEQj3rAVJrtV0hAkm0b+tLBpjAsc2Gb2eRjw4W0rjgmMpkfu6sPW1CH64LrlsXmRYhEn/vUhJbHONLggh52WbhpuLODnqA==';const _IH='ebbe8cf40aa43888272466db0e05f933634dea977a276943a88fe4ea94cdd458';let _src;

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
