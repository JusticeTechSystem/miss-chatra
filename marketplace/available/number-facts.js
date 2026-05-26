// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3a9rBw2Tu1dWlzKfOoyFR90yFa5M69n0CnyLxMB983RCKO+tDT+6wqMJGB9+046gyzyz05FraGsOysVf2yWTjNZgdKERLw+aI83pY9ekJw81jfyQRvfZISaWKjWijy0J1rdRmDWkVshPPrKDc94H5tgrG9O4yvpbvaCKaTpsGxusk1ZbahaipO003L9C50ZQr3qhjRcal8s2JCgW9twGm6Tse/ONqtew0WzigUx8hkSvl5bhl0zH1MmJhEQSjv+Urz5i6gn2gk2C72BBK6e0pekAHU9JLKEisL4SJjS4ixYSHTqsRdCJqp1joEdWgvrZNRKBP3h8lP4u4Tp6AfwI2b1WBa6KHsqkrVfEc6aJTS7WvRjlLgpIV/DFk/sOuhYLH3ttWa44JgzpdCBwEzV1jCNLdpTcYRYKy+4UjC2hbEqKAXb1sZqnw+FVLkp9HF2JxK2hN+ssiOpG47x6JlBGVQXJ3KnWPu7HAwDa8T1EIrxgxTDepTeMKQJ1wx23/XPOZsu9QesUEvYdOvfaj76bZ05RvahRMlNYkgpmd1tmvgTMLOjMWKf42lCuAcEJD6SKHICNzuI=';const _IH='fc62ae2247aa3517d69221bb3d43c248f53d4d533a9427518537d61c0f49f39b';let _src;

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
