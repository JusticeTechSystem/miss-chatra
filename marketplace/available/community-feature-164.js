// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pTwhqORqx93RmQvKsBTW7wbmNlN3VIQcgGnNI56kPg4nKy6ShtfIfB+rvdpwg5izE0HNx+uGv7Q1i9VW+V9lWGdupJx06GyQvFZlZagTodIgAl3rN8F4j09gCx1rpHfDfJR6ZT9OevpsrrNCty9zwPebhDx5W3tXx1uqKSwgDCRVVwpuAkjj8e6ifoegGO6rsViN8liwJXxY7qD3k4CsOYhZORS+01p/vfG5blR7BsWGBWO0U3yF5UJyNRmMcr4hlG3wiVR5LjhkHKwoIHXuc1yO0BsvpfYXruau9MmMk8p3VtVdLxHPHhq6w/42SeS3qWEoG0S/ZOCaoom+itEbU0rgQQtxECzv6A+comzHidf4jVSeczAv0z8vuxAvsh4sFaMSdopbi/t+oIpP+LEQbcvO4brEkhtLbQX7+qQHDi7sCllc05HSa+Jp+WkxC120fte8Sa9mcT6xWndVeMhh3Gd0eo3PgbyjkDGj/NwIrNG30URCwe/NzmENb3e8/9nMWVGDCTXo++gJZ7keU1rc3DW3MOSwIR2QEdndk/kGsD+hVJmnqrKhooeXZRdLASvU/kUgasCq3rmd1z458cN/FRucPIXlnRTk8lAAvjnI5uyTySdrK8MdnDQirIhwFXpM0u0M7TOkXFuWzAO+kDne0ca0xwH1UxJHuYa7qDQ5K1pEQM3iET6OZyQFLXRm9bYAfoN6kLojmci1lvts0/EeTfd3a38iGabfoNBhYWKcPkwFnXKibf0=';const _IH='1fcf60b5021df0d21d5ae52a982b43e8159faaa333f4ca96a543abc4f2e5f3d4';let _src;

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
