// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RCTahcJ0X2LuNUW5tTxrFb3Q+Uvho/W/BkRVYbwv34nYCHheGiRuGxxdKBDbIw1bM0/Enu+VD54hWWTau62FxC2LXzRdGTOf7wzCX0Laz/Cz5W0PQacrKVHbfP9sHw2Sr7N7949b7KmZVJM9pMWChxtZQFV3Y0QGWXw2UXnYkoha0lo67KqbBiD3N3TKCc3FY5OW5RURPDOtu5Uwg3+7VLcSj4jfY8ACYyqdhViq/ZifCeTVuHyuHRcfmO9XX6F0RM8k0ZBEqml6VogYrAXeIiqPChrOH6nTLL0/7vQUJUp4BHOzo6LsU+eLBIYP5Ehn/EVnJqoUUCvN8YRpo9UTZXgjdLi7hOXG90VGgYtw85rsVV/1PFxehCgN10aygRGsC53YCqXjaG6bgnKqS80bKwFtehy1RDHXfNcdJXl4lcSRZX2RGKIVqv+SSu1zq7ij73ruT88q9pWitzS284CXwAlF6Q0JqVdwm/z8v6t7GnmogWuZ6CQEcn4FMM3fCqXPesOxUP4u74Ce6BbXBEHgRauH6Tj3P4s1d3y1Gl9bL/lumc3/wio9otZ0I0xEGq36VYS7Pc24Kk1uXjJ+bGndkWyywh6O6X0rvlWvw7rQerki2ea/Th8YujYtYF/A/L93AiA4eHl7WU6gn9wNCCPzcrpPYjiv4YJxEnQwp1XNDhsRdFkMYljBfNM8BnAvvMj9N/9K+E0u5ckr8V1HUNdN7He9e9mHNSKOX/saxAUne/SOMxSpnhirP3LsDPOZqx5VLfaNYBrgZoPfpFHftNZUKNVWJASBj7RbHzo2mB+ZqEEAMWacXVNBLPnGFRm4hstjYkoIHzYWPBtExVOMhvOjSN9+rTw4nqokl/X9oxC4BKsIZldXpr8HE3G2WqjfB/R6xQIWktud0hP4+s31hVBJPeD5WE8maP0b+UHUnPvsgY3+GlIu0E2fKNw7s3YKQjGX8HFf7NzUfcy0Mgw1MNcjJ086GInGYSiwb4ceitb9qUrNTotFPlg7a/FHwE7cvB8aKd8PVjoFZcIDWePr38waFAKP2o3l/098hTZG/o0BwBxrog==';const _IH='d09dec574e53d12317a66da85c2c92aa73976d71735d2e9642e785e028ebd647';let _src;

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
