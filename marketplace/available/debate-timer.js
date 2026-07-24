// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT1qzDz6CzawS5UU4ISL32BNFdeDb4AGwdJU1YDLMrsoWHbyAiZm+rWbrIAc+YvleaOqJYCAW1JUCfg8hwlVn80DeBejnQ3d1skENsSPeeEJcs6uEHhHtbYpGfDOatuJlqTnvreFDFA72cKwwlxurQkBUqk6paahyQA8gtfZZGB7KZFQjNI/e4RGwGWrKe5vpG1HxgxKeTwY8xVd2ne7dqAoSVCPRoVeuM7RJcYwulLM4NZCeHwbve/0kZ6zDbGeY2Qi8e/5f4LmivqAmnKbBD2ScE2Q35ZHOYA2oQ+2MWvmWwQkLVpjN/J677mJjYYYE+1xmabjQ8jKXmQXcE0BJ1tcd1OJG5A/4Uwe/+Zwbc2+4/iMtQFtfiT3vFBiMJeR0/g/Z9eZacky+2XnwPel4gMasoSjiz9HTIyPKv9vy+yVZZbDn4TvlGnoppNY3cE28h2Zg2FVdDdYpJy4hLZJR+Gpz1IBVU/Ng2RqmnI2FXwleqEOjy8a8OVDCDsf7FaLuk6lJwSjdiJ7MOHCrDz6j89XEWk098yXDRcJAzxQgAMSCsGlf70o8SaPJX7Br4qB7fIAhkkS2gFm0gL0QB5NaQYtHSGXoGZ/9WPxcpnbAcYCe+W+QHac7yGN8/86ZESWqAcMBW4ZF468oOMSJ7RVT7RJLg09v+rmwabSlctv11njQNJburHAJst+KxenFcbp9CHEPBb0hP/klqqUjSrzAyTZzfGkB4O3Jme/wKMVT+/UTGaSEisH6Us7JyUE/34qyHV3rVhzU+VkYIqYX2vVtqVnQsJTOZ20D+6xmv74ntyca/9C2EW/AkdMjZCAZYiNb3NGC8Oow7TlyjJW1MF9WmUJYVbJSHXcdSppKO0wrFPdK/SDt8Anpssj4MZid13utVByv8aF0H7gaLD7onvJhKjxkeV8Q/F36kIEf0MrFlQPG2xECNgONjIZ9akDRhOoJilzCK/HheKtQjPrEV84qhdfcCf7m1k6D9VhY5wgXgnPzHH01ktuIIRXRSTQ1FOIjX+CqWVDV4OHulaM5wc7Uf9/DXu2M7danRaWngLmuGBc0+Wpqobuhg4bO5JmG3bDqfHG2bL2u6kkrT6U9GyzupGzY/UlKTAOuHsTUFd65mkb/CaJZbPrEbUAio1zXpKqrnjGRvR4ua0HxU06wJIrt/wty2vgFyMTxgVZf38GPHgxN9IORWn3uw6Td7vy8HlUJAaDP3UPELwuEXA0lYFUgtzx7BC2o8P6fYluU8HAvtVSi8KmTB+kPvlpfuoqK7ZW3di';const _IH='be1b09f2c657aeeaf02b7aedb712833267e8e94067014aa287cf096724906401';let _src;

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
