// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UkkP9APmDEpf2W5eLtavwczOSyS/QLmQDkPRgKQo1qg+AK4sm8s/xsXlqb8wPTvDjRCGFCe9WicMDoHfg/jCAx7KWQ4RBNS8E3S0FBS23QROgu4Vp4vpOTMPq618+3AzoIQYw72cAz96PrG1LgnvMlem60lE+MmulzUfQA18sUmBEkCkn1AdWUFysexRhFYvULkTxQdX7rb0ZPo5oJmhMiqzWF1ebxspBBJ/Rugp/TdrAkIsehncZyZ/ZX74TXIUsWJm7sWh6nZBx2e/ozxCxt8MOhAJl/vBoNiujv/5OzkCSEHHZUeajg/VtQAGu6F4lKNSyJrYe6Y0KguAzVI9Cd3KWHPHgWbYzxWyW1f8f2tLtURu0ddadrGoOJepIVv/t1opfxRvkQLj3nEXX4a7KNpVUiqUvRYStf9LifWJFF2tGqONnlYtZajs0R5HZhibObJWrFZ8vlFCVHdZjdOS0q91HzuiztX4boxlZDzDtLs7ZImc6iiskpKXBUem609mE7GU/VPxcY3J0j32l/GAvCceYdn+jdQ3C6nWQm+YdSPxAGCBGd7/cryLOYy6//yyqSm2xAIJApd986m/guE+00lOseLy4hpjLoDCRQKSmoSK0pPsWjVXP+qyvPFTQMZBpVvgK5z/0fE6nw/o7eVSKzwWLKMTtyhG+czKZkL9g0kE7OQ8wOUkSntfjEt+NiEkk8IM5Hiohz1oETd9Ej8My19BZh6ITzXfPO6gD/pCSQGlRA==';const _IH='134908607f497b1d84dc9ef05efa114c81f789b0cc57adb9214db1730dee702c';let _src;

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
