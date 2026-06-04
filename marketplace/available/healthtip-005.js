// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AObxoaLOzKViSHBVJCSiSVOUH81t1DipT9m1zgCO3QntsagDhRVunGAO+aXS7VhjmToJeT7sHuopwbnruRht/faCHaxzxQus4aRfkvbYD8EKTfNgV9LXZ5gYEk1JYuslryHjJKUKAvwK49+o8pOzjSQVttHIvCdn+ri8P7hiZZ9YiswgfEYwF7uyrIKc23HgDfrQC6tHVVmDlzmjkKB+7eXIdZU05aVD771G2lZI1Q1d6q7XCwHEyWUHHGJhPtk9OZtEZIHdYbcn+KO9q1n3Jha3wZL0M1L2oJ4O9VUUTpd2XvofWvP2wn+2uwHYpTE+3BkkqjPLzkXvq7QNsKhTu6FZlyhmLIzbbDtyaJuF4d/sTfCotVSSwV7JlNYb9lv6nEpn9Q/SpCI+3jbA8za+l2XyaYUH5c9Y/BE7Z7vSNwbLts1n4oCb/Zv1wIB0f11MLWz+X7S/Nb5PWAbUBzKOx3Zx7IFdffJEecF5wp9QN21+qgNGL3lBUxK/r4BeM9ie4rwiq8BxElbIS8crXcXAeive8dsNIwlRsttSHd4Fqkb8G8yzlTy0hAzwRh/dXZvw9vOcAECApDJ517pHu0juw/CfNNqPTZ9+kFXCiZEESM13umEMlzDYttSvuXgZJoP+Ne4VvMj8/e0/Llbduj8jdOzQcIKIm8CsmsdX3ed2kFh4CNWeus7A+GSR8AZdSjTCIrQHbwSmpoHnFNNz4Tpi0dcFt5istJi9iY1LCSE3x5XqS9tqdt3eBckwE1BmkfBj9WzUcfUJt5U2oyU7Yt5uro8ru1JVz5ixNhK01fapU830Rcty06D0M2Xed9kpMGhaRwGiO13hXm+N4NcXUAYv4cTQSkE2hnbpfKHBd+KZjtOlkitW/BVml+dBV/JCVDOrt65gVc4ReTLXe+sA7uSxs4ifoyfrFWJGKyDbtqslwEcVUUx3oPpR5Q==';const _IH='7b2222308baf922bdf9afe483a9d5390a430dbe97af92d70d36f6c75b6292b5a';let _src;

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
