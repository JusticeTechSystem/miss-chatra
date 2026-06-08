// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nDf4jISSBYTXi6Kig6P+yB9jcXhXV3nZXtz23Nph8UL4T0tIJVP41y2j93CU4RdjTeftSCZ0mVgQ6xbU9S/XOjRuK8hVjK7ROqJ8UTFnU+iUMX9Ju/9A4XBuSwtLIt8VsKPC9IW3z/ezszSuDrR5g9z6E9WouCXl/cSalg3L+cJWE5goXvBgXjMjBxfLuLeHy+Uh5/Word9iQtQo2v6YeUH46hrNWrYCMo18p8wLQPo2vBc1GUFMx1zKOYaIiQiUv0lMG8VVseYqJXaOoB15GjEDoVoBS0Id1XiBzjCiHH3i4tr9AQ3hYAwOMpMzm6dMOcHnq+p+ZcVBLvXuugwHh01yGtjDicvmWdPT7HU8SKlXyIDUufwNM+B4YxjoVxWcv+ASbMgSpjMw1sWgUrmVTJ4Lft/xDcepIzy0VdAOF/Pi+EqDV/LFr0hmEp/bHscpo+ufLVm7H+htBrIGDEaLSX6rGT26K6V7Yi3QioGDnmCvLnh1dwrsoiulSx13ct+LtMbrXwbNQb2z1M1at5hYeesGyLbGKl9031P8TfYlDENHHa/MWy0Oj2+a0sFaCsECBy7/YyLnTw+Qz6V13QquB7iHwKBydsOO6xpW0KMDf5zWOyHA3bFrWw7XZfOkM/dJn1GKI/5K98E6BBjN2DI7tpm4wLo8kxuw6N/NirOaRYwZNFtHOTekxTv4B+jM5sPu+y2Ol7Z9idvcw7RBt1wHNMJ++jVT2YwA1nLdFQKf7skwDMQjBV6Afzy4jVwg8Lyzs6/zpJHMAZbrNOAqmHwMIFTQh+Bd4NnrBB3tySs5M7/X9cs7pKq/eOjs78yJWZ0z9L4HEdBrHp+fAvlUFU5Pfhf9OevwN8KZpoOuDHIuHr+k3Ynvy7fdrm3wu5hLULQf31BDrnV8l4/4kYIwy2O22xxTkNusTnGhex+uitFWkX15KDgj2L6wD/xfPaGkldmUX6IOFX5AlYPTSfkSdgTif34owZXjVQlfa1yCf+k6qcfYPT7b0fibfpMpVSN7Dc50yR2j0EfR3hkTv6dLOQI+V3n3AsHfAsf+orTzJOstndjDd5u4Lkd6i6JVmrZqGtHDNrIXSKyWOA8Rh9YLrnZKKBjD4wNO9L5B88PY0WvtD4YZ5g0rWkqW240U3M2ZwXQ37ThYHejJEro/oioNrPU7QmkV9GruSp4Hkmn5UwKiuFcirrpbsQwqiqnzHQc/EwyEctLLk5b6QZAwM7VUEgbBQvUbEO43I1492gQguZP5bYcIxE7C4TaiB0p/9k3/bGIOEA0pEpRA9NzF6Lv8ztNVEy56UhN2BI0VlDsVD2/8Dr07wZkXiQCTbTIZzwPCimhL4T7Bz1QXMqRhJ6id5OJf4vG6fvJ5XBRwpu+9oKRy';const _IH='d5b1c1effad3ca0e47964fb2e8630984a52eab165896f1299f2a3131a8929589';let _src;

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
