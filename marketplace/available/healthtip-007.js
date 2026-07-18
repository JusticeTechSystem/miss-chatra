// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSP7+w6Dc0Ol6EnGOUnTOCBV2qFys0OVAaWpp1x1oea3ZvcVKvwZmLEOnDI5K0SkNbuXYMXKry/ulVHlw24amD4ysMxFNODAgxTRO1RwFko5nebq86nqGUyc/hFmSTBKtj7/cEmtKqNEuJBnGHOYDOqPP6Q21Ku3vzzvKGHfDwJlNNv27VG9nirMCstwvV9cpTbGsf+bMxzB9DAH85TV/RRpZyIh9ynBs3R+pa3zlhw9Cq004XSVQQiFwl8JyC0hcD008a/R716WWjw2ktgyjZy85VV8jIxQDeXK5Ie93uJ3V6alhdvfNWAxYziFmL7cwtsmSCUIs2HIuRux1GJw7A1/7lFIDlE4gngmyRKFYn9hRog9jJSvCHDucsMLy1oh5xd37rRLLQ4suLvVMPwM6ilOoGEAexcr+B9OU7JKExuTLT++hPzw4ndln1sK/XvXqceq0JjEtE+cAWXiA+byrFPjeXx14NDYr6Qs7j2foElgDLsVEBcpuFB+1BCXVlj7UuBJizX0COR6kzJnnc80TAhXlb9OXbK1njC3TXBsY9FhaXR5lcgLKdP2/xw0Dh9xODZv2mo4RggfdrDJfm0I7qCTikcFKny0kmuPbjfRJWtf4F+o6DZH2eI0QANKf4v49Yem0Q84l0jUfTjYelK3mEryj1cQaU/JSB57672S6MixIygrn9qdO9PHiUz2GHjIeJl9vw1pSzXNvd358S7WfSZq9FBTPHXux5YDsDaZMvXh93jtRB6WjY7ZH5crwp7/WzLZfhluDr689J4tHy+KRY4RO4Hi3jDk0tOfbUssc2I4xlfMfM+5FIcgY7frYPIn1tCxpG8X+2BZx7Ml419mdoPdC8PxJkxpV83uJYYrLYEg19PJ5Yqnr/INvAiwaM1aMrtPhtVBu9Ez8vwdMn7Lf//coNcXqwHXgs84noO/HanRxBo4SimfteS';const _IH='77aac2b5d91f0f54616474e68f2104e9db24ca6a46074464475d725a66d5ec40';let _src;

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
