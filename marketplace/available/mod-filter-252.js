// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IzlviLYlcNj62oyP9Rpy8zacxUf5D9nG8WJK75r5X5MkOWmpOCMY+pjFRrYQ85eFt1mdfBIDzm2GIxpbhQkf8un5kP5o73pN+AWqwsktMH+QGuee+HOEpGXQuzwPJj6TtPNMJgDDUNXDsE1UZw9/p0r271IlaqDmc8wZm4/JCGpPIPK8u657pp0v0izpOrIYaL3XPMOXSI3HWCLtNOspkYys9mXKqcJEAGs84ARbPrLtpunqJWRaTtJEHF+Hd5q+50l/p7mRqnY96HMIgagGe3V9E3KvR3u7q0EOsWp1zCt20xzH4vB46+GGbBnTTRAGJsmQVczV81moB9uVmiFRrD1QJ+g2XJAU2WVj5cVfMYsw4k2HMHAyP17jdOBpdaj+v2BbNirGsCrkbs0kOBuzNaIGhPLpuOEqXXt8CSywH5Xr9phMw36QXarVRFkpMeE4TX7nE8nnM3HUKjMxY9nY3lRfIYrc488iTCWENclXmco8nBo+2JDcSkVcmzVeGXI99iDLRJpwxNNlhX2eWZ1BJGSYMuu0L5qmHC5RpAep1IKMEvWg+Cwo/k1bU4J7xLm9UpyzUOmaUDzf5lUTmpv3zd2am6CtfoHoFN6j2JsXFlOtFgRBfQLVJk/sh1bmOzjqqD9ctXXr6EV85CoYrJCorRV5liCe3vi5tRwSApyzlfKMU4C4gt/eYcBdBOAdzeKP7M/WyWkzKt30KgAhWZ6+uma31vCRI4Gv3/s96xdc8Q0MWIRSp1PI8zq3C5pX5N2SEdOR39wYywlyRuB5H1JZQlakr1QYFn4AIwCDOz4hkBikaWHcgiSuSABghhC2O9xMSeU3Tn3PE22zIFYSFTcwLPWAafK/JiG/2zW6GGN6QLiqk47Uzril8jyoH6a9ws91PAELuRhgf++93gnK1ZQgeZkR5w/ahr2/+cFpHy89ehoctfhk/Vp/Qf3pvzqBarWuKUNX4ew6f4Cq4Yyeji66yWlIf3GPaqZXYKYFNSI33XXNVxtsx2O/cqYdKytR77hsU+ilSHs7tBCi7rPlmm0RXLcYJJfAIgFwNJX0UH7DxIhtt6sGkWki8ZZxrcL79lCzwKx31sG40kM6qY5awuIAPrAyLB7qX1eKg0YrxWe4Y96sk7GWopGg2B3Z18zCL4wWwJQM4AwwmfivOvKLgAIJV0VHoLzuushomCQgjinXor7/nEMWp3nCby2djM9Tb67kvvJJRH6OjXKlJ4uZn8SieV6EY809acSLDJIHA4rJL/0kUXDMdEJ3YbrFpLK3FncWWAhxq21xuO3qbCKZ1/9y9FXj2VDcrv1WxFYhEswRUxfgYHBexOZJ6+S1xsKLdmvq4YWfMl9unkDHsX6qqgN+amqK2LNXP7f7er09rSasMj51MwS0e3P8mQ==';const _IH='c409d9a2bf5c9d3294399ad0f3f3eafacdb0bbd9863dea20d10f86467869b65b';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
