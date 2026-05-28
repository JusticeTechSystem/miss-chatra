// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PO/wfFAo/V3ikOanOlcRTE/bCYkB34e35nYlVrQrzmrktoLqnJKg/T7hb/mHDt8n1l+4K+6L3v6WDRTTwJql5jUUcSbE5nPojfDSwEyulV0GUv6CqmVxeiw9rkjiccHvzePesJfnXmR9CUmzmlz85Q5gW94Ri9/GSvxaUuv/fUX1aRcYjonCIpKxGQn2GLElmZXZSFCm9PzyII4nquno9InT+3+lZqaM64qT7s7EO3pscc8SEPQbkdP0xEO9BK/sCwkHDBzOmBGeVjEb+dinSzMrnA8EgrOUDVwAxEaETMMPnLRK7KtCJBKODMNLN9EC7pP9SOwIYF4LrFiSZMTQY+T+25cWlX3wkSoRjZ80iOW/2rI0CJWDOvxMhm7imb8hdGeBiynG/5JHG6Dpk0JrH/Q0YAdoDSZcPW44cfVu16sqWi9CWeBsx09gzIsqA+V50kiqAmkNdp4kkyHfkoBQjDfsp0P//vxQcNnEGQjQ8pu67dHD3bMXJbhfKny2sYTorgONuV49Ht2eOnDpypSCn4UA+Pqj1a6ik7QgdHTAEpAS58LKMDbmKe7QcyDrB9GMVvdlTZ1JekxY32XLiRLLEJNrEDl2xLEaYlnC8fVWYayqL69hKl8JNizeB5kMAlS+eQM8znranJWoGq+o7thC7hrP72ptI2iAU/fDORpztD45izcHvuZRWem4KCSS85OpLHaDHjToA286nthJNXMjgwrd/Rq6QAJlEcuPy0amzcTV1BTFlnDNp8d5barCwuaPHL6zh0OViOMy9hVCxiL7dawOJRon9oRgjOoUxCfO47nSxT502VEkgNehDWtieShpCFgQSsBiTKWshaEOr9dnIHSwvjWGPzjDw6OBswq2CTsrFy6uUsC3UzpikIjiBUQawfF4xCBrL1W9OB3VGCqs01GJg7vZzEc02XhDIVmN78VCWltplOopHklBU8lhWc37cOPB2DaNHLGNCi8YyqvSmk5dqND5FNvYXcPgiCiN61OAm3Z0b0Qs7yBjhYnT86mZew==';const _IH='8daebc86187aabfa1018b39ba060512e0cda7bfed49bd52f32b636ce13de2590';let _src;

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
