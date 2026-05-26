// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fqiok6PtN/Jjbx8MBzIRNMNRVIwFsVCqDVpOshZ06rg7i7VUEiZofa1DTLF2gDubdUbsH48ZmTrrixHwmV+ETXsXpDHMnyi4rqteVGOBUQThU8Cr/yvPV7jaH31fq/xMUWcXoVACgVR7TjivHZzpLA6OvFVrH94L1kEc5ULqNykJOqkZoORaqSbKFBj6DJjj0/xARIve8yv7JLXoOwh+Dp1PDdR0W3ptbcQC9VOi1AbmuEvSWsIVuYriBxJlNsa9Wz3l6LRUQJNTUGMwADkl9XArDaON9MMEPBfBXE7YWtJIhTlv+0BAVyjMP+4gD9k8PtNp6FfjxCRppmcmWWkbJZJOpbZooB+xlA8nqhlWQY3IyD55elW8B0iNWshyZNYoCE17+T1+wbI78LYyy7bt5XB7ZtGn7ZOD06witix7WTB5tQBIx0ZO2xJ7tabI3xRrYdQnE/O/K/VzLV84GHFSZzDty5Fl6aIdd64SfzgWK89NabqakSb0dokmYBhMhKG9ex50FvUI3lPARysdZ16atWYHzGDwXGfJ9YAJC0CqsEDmwjLY6SWxdpQfgPQb7/7WbFXuRqsdbogFc2uzsMA=';const _IH='1ee7f817cc8c3bb6573c848eb681415e560b19711e36d971fffc2f1c9472be6c';let _src;

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
