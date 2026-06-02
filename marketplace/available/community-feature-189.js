// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cuDwLMOr7Qi18MSO0VnxgZd0gabHYAh5CrNSNL7nJKRZoa5DBKYAC9haL6FqyFQ5gKUK2K7MbdEDsjNnG1a3YqZGtQWPnYoOKvbb+dMx2PQ6rLh3uM+I6KNepMND5++ECFq/Et/43Fuq0lUkCMcuEs7SzEfPTMhZEKt56K0aZMDc/2dQnokqhRbfzCoR3AD806nx+uLE7dAPFmunYAvAX1V/VYuiOdJAQgdEV/anvxaw6lo1+cm4d3S1dXhva8scjJ02APEhyrfYgZJZ9KJFSi+AjMLQHSo5unCCYmRjFHGGluIMjWwn5vImQI5RUOnBOT8S26o7NKEkctte6wnky2m4wygG1+A6KzEOzkLmTfQwFUJf+uAgo5FZ/g0NmSuGd67i98czsA03dea2gub5z8GbWGJnsoIqChmehR+uYj8alF7JMcWNHa3yePvN68QyLkrF91a64WROF8gHRGDu+eKWMsbQytp+hooGMgtO2gHZSPQc6Frlr6WuLx5CE4og6PpCmh6ocCSpLTSW3eRhGtJn4BHfI7jAbgrPGeSamzdJ6HcYNe9OmeCaWC+19dvcYkDkeOLJyasbzRwFMzQncbHAwzBKgKEauw4v/qzmbPs/3NpRAecOBNuxJ3OCqclThktGlWtqM7xPgT4j57cEOqZy7GzQoO2p7CoFnEzKMMLPTT14+Rr8jHtbP9QMHS5wvOLpLwKgjXAkouOJI5PQg3H2qA7/BgRjhjpGrFGsKyU/xfSj2N0=';const _IH='735e93a38a1e764008416862a8d7c6849ab9fecd7da2b4f88cac073559eb8688';let _src;

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
