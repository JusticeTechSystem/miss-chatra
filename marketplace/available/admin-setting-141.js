// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7EVzo2OrFtk8TNk6/WpcENYXSdZA/OiPZTCygzsOqUr5UyLw0ThSsDz/Qx0qDfgei77n8eC9EkK4s/vppi2HdXsP3CUl0/zzA6kFDl0RKZKZoA4PLvsyWBkHekeUORS69oRiTlb3tQ66+QdktFtg4beiv48f5KlAUb97iLMqBrOqmCw2qrcS9ZzS0Gan2bw0trgXjvnpopJqkmUBjhnMskRzCT1pJxOt14L1iGaXkbDnimQM/1z+ZGyjEIG06A6GvDE3IfY5cbXoCxqdeHo1YMUPuRojFAdIro/lZhtPFWx/MnUqBv1qsGuObhhSSEREb3r2DgonlzpoNafFahIoNnS77FVigoy7UaPaP9AdLzpA49jC3PWSb1Hysab5gWJZRmUFrFDd7cw6we5SKrxTH5OQfs6DnsPSrL5U2OnnUvSYpIa8CTIbIe1Smv3i0BkFbGYvkj4JGF+nqUZE1i453re9e+SmtSwza8OJZ+xZ/z/xyu6CsyDbodXo+50kXz2DkbAdKC9AtBZiXNmLGkhUVY/XBvIveoMxdZ/TPrl9J4UOQ5u17GBxAEFOmfnwS/hO4pGC1kHiH/eNUXX8IDM3Ghfrm5fKJrFYn3P3vpvGeL75x2A5RIRWOmiJBc8OekNQpvzIPI3RuNvI4mu7yF+W0X8T9YaDlgp2cEy98dBT2wl0SgslVSowmG+xj+JKzKCfU0frhw8h7ICrkx5OEBeUcY+ekkL5k5uEEcSDfNvCLPvNviBFHM1o5GGDAkPvf4k8hgJtmFZbL/kAX8TnwgGL/Lhclkjo6JbILc/sdMmsbCR73eqyzv3Gvw5likgV3MGdMZIBa3UfQWpLKjqDfvaa6tcnL96msXnDcBNkYbHVEy5YaX7lMW2JWq+Nk8pAsGyhyeBtSf4/v3Uf0eYYZcRdbFCObrLxwpqBq0MD/0S/7GUBYgQ/cJfiaefu94cYAqdN55KIjUz6tK1tPnmIQAkDu/5iZzfv3vk0BDsGmI+zcaS9XYmouTGfCWezWnQcwapIxZcaxTN9gtU=';const _IH='ea3fe3e740327240baabe8735d58f1f827a8f195ed43ddc0275d754e56da6976';let _src;

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
