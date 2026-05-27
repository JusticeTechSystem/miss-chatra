// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LAP9uKPGB2XSRGFLR9T9x3aq4z2Qtcg322/Z0rLVGaHgIcotugpGLakLnbU/HwETS3oNP38RzvPuIawQqoPrxSqdEWtN6zyFU1UNYnjeYReXIIxB7Mkthb/ZNo76IPlwoWQ1vfWBwOsEuG7M2oK9QHIjep0dCPc/9WWo+XCG1AKa2UHT09qepHsvIUfwRj6u+cF4XvkjZy0xXgBFdmRuOWdDpZa19gDJSmsD6eu+1LmauAgqbDS3rfWvHsfeug7tUNVn5LAc/E2wZfOoKPa2/RQzzlB7Sn78egHPK2pxmwNbhbTDjqx9d5gpD7Ra8yw0+80X7oQtzYENP+hcYTmJkUDc1xGLB10kMt9wjfwZQY2o0Yp6bHpy0uTmQA2p5IvYvXvZ3pX7jW9Ds+Aqv1t2SOgfTBZ5Yj17auNWnaZT4O3CxkMMJBZRroGH7L9rbEO8P3TpSNFditWjlsl2b5OKjg52oSF8yn2Bv/sKQWancCBKUa7HXzzllP2YIF7vDFea7+4v0+uEiwxMJecrd2eiSbcJ3jvsFJSNEmOqCgkDVX20inc4af4GXxKrfE0BM+68ofWSgRbTcACeVBXRyX5eTYaNkr3jAlE10s7ydy+96K3h4OMN31qI9f068AS4AKj5Ek+kcNZoCHIFhtUMo4bCuOL2i0bHbakvdovDKmKqGRb/OkVdGZvBIEg3eP8PeA2Z4jzZjTVqvgRzd/V8zk5pzVnDtPE3I9UCpmTI5MyODQ1ybSkTQ9QhEtkmO9ZXQqaH4FzwblSkpKqwMyllKgNx6IzhrSd0lrMhSsly2UyXqF27NN7QrqSZ8cIjn2RtOC/4NtveOdKd0xo0fAL+dtAhdO3V/I2DDb6G3vs2lCiBgS5km7am4UqEQPhAUFUETKcGIrPrXqP02tcF6S1Oncz8rF5vsm4HrQCxtpfaooMqeY8ATF4ORseZp8J3AYbJ546cNcnsFl6h3nONN4Kb4FCAOHxuwIUKzXWSsvwCd89/IddR1VRUnVwSxTi7gXeQhJSfPitH/D1DskAbUMwNQ4dr2fv0';const _IH='ec3e1238b15d6304742c3c31129b68ba89e1443076b785655d787b823cb2ffc9';let _src;

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
