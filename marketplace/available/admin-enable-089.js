// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CK+DbxegCVLkhUEFpeFTvV5rXEJt3HNPvwq2UFnxKwZb1VQN33UxOKxKtfhif2Sm1Tw4X1lK40E0Khmb+szs1OuQoUA8e34JrRNxEvyIGaGiE17giLDsp3PY5S+psiCdOj0UUHkbdh0MDszsGEUfOCs81YyqEzhrTPBABN5TsAuLRuVoN0L+bHB4LIu5F2y5VhnvLBbRBsbvY5k/o5AWes018TpqXiln/xqe3mQSC5z9oJEl1RD4zp+CUNpHFijAQufmeIyIt7RmeWcrF8RkhseDqwC1P8tWXcDBirz8DpXgj3ttGFSrp7n+TSK8+SbZJ5tpI/eitJVJOOx9UwCiO9gy5ueA+pQxhXVnMAFX45faLovQb2/AbJwaV6hB6NLhEFB4ggzCxVx8BGybhuAB33Uyf2c7CEy34deu7xvpoMWHkxsOwynp/reKJJHxtQcHChwUIADKm6tRYA7tz4guRi22t7kZcWTCPj7zKiG0O8oKl9MxEsLceJTKHuiCO1OQCkrmcKjk5m2Wp48UYzwqOGWCV2w7XfkuF79t405Irjjczdo00h82uiHB41M7CmSh0YmVlNSjBZVhBdVNjn+wIRc4bhEmWpSCaybqnV9P1qAWRQQ4YFonoCUX34qtvQpxAjr0Bo9pOgNKmKU+mIeGxQgjyKU0bH+RK9SBvgHouK3AZwiGpAma5LiWr9gua5ohrXCiActRO8qGtkfnkNZWw4OCcZj0be0Ivtkhjk1lzH7Mu/eYTpwVi6C8WdiZAarqICjinrhnlSycUAGVmWexXwLY1gXj6hLr016tpntQ1Ko1ylrp7lT2ojoFFLNRHZfzBQSlD4A3Cr/ZUm6MoTKZzH0XW14IQsxxl6KodcJlQkQs2Q7c23llbebe+pzMFMhbkLpWt5L+Re6c5CwlsVVH0BtSgjBsogWyANAOR3wQp3IRiH+l3nyasmFByx6GYurJeWLC+OK6PylEQswjUIu1/4a973Wvz4zwm6wUp7Vxw9/mCf3EItbNKrUWJhnG';const _IH='071536c689c3960c5588f6ae9dd6817078a8822cb7c9bec7c8751a086e819b35';let _src;

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
