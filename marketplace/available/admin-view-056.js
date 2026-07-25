// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSakrg6wuQl+uLvAn358dpAkSbHh1kiuC77pTxNUd+zdZCvTbDJPstEOjmzUZP9rsXJiabOtQJnvEDzI+rzwHsxPyxQfLCJDPwH1go3KPNpsqJ838rU8B1g299014tm0D8tIZA9MF4xIRUcKRKCEDBrtcQT2W6X9WjJ0Itmrx94xkFb5w1jeIKsrTdoKlRHPUUkJFaVH4LBYno07niEkznTE5rDpIcDjng0alyR45+Ha2eoJdanwwls7ewutSDu7tN29m0KuqYbDye6rkHPoOkZemv0n+kVINkWlrvezzQdvs+OHe0Qk7mn8XKsDi0URBBhl73lDwWNu4d80Wd+DMgvCCaIhRD1xmD2F7UxkqWsyK7pxS+jpXaBapPUn95rkoEXC08naP88Uv0pozsyro+QZoH2Q5aVB83cyWZWRr2nU57ZyWBwNR3z4j2Yu9B0kGGfTwh1V4OKM5abP+4CHCLnwi8JBORlUQhr4gExqgT1/StZgylbKuro+V1VRfjFtLbUNed9p4pbttED9RyKjSeayJwximGl5iegjw9QHmtFPpob53qo0vtkncpjifIm1e80HBE1/sk5YvbKp6bAA63BG94Zgpj+IvZTCqvk614qCeL+Xsi2GT6vLoa5qesi6NGcAtEsEHvVGV19ZdfFFhDVS4DTeJDQeVfJriGSbmJjjZhccegjUH3oKv0Y1i00xJ9zz3JXgRnJ3Mse+RSOfx20ANPUR0l1Me/YAvNX4/4PbywXJJkUJm+q/1FnU5yVd5FlPFfeBxC+BLJGkfaaO0DnKsviliUHwqcgtRmU1ZkjGxGiKXttkgofO54q3jFpxtuST3sfTogR1weiYKgXkU6YoRs21klVhkKBwbqvWB0k90XYhbZIuynbEkIu/mg7fD0xSmh/LxjuZkVDzV24KNO2YeUemGVgD8cCJqiYo60/A2hwsVkb4giz8PylMHIZr1iHXWFE8idkcWTLKiEFA+u6rsWVTwGt5aYWOcyZso4u';const _IH='0fc1f604d81099efd870899bb310b55477861dfb8b28df59e187868d6321cfda';let _src;

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
