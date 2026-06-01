// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:46 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2cYO6iPw2HGsDFYBWR459NEMdKta2hI/hMOHbPkPpkn6mh4LMygGbw35gKlLfNp+nkH0t5+0xvgRqLziYrspfAzx3+X8LHRjTi/bIQEL1ExsJIgEQx6PleXlrRDxK4wvFAAWPqQFsJl1Jt5KWeJZy0VExzwfMqTDJLEx4DWGTa5bOE+YK6iWzo+6uJnrRfFiP0XM/KbbCAD33m9YK/EyWXU9riiQEbYx8Twvg2VfynSqrlvbUgd6kAmqLtzz0/9gr4UYBtX/b6b7UdoJihswoz1fAZ2kGvm7j0RLWHfxk+cHCjg49RpXhv4fQcL4ez9vLQrmPBDqNzxGNvuQemAe2/HCd2IykItNSLwaAC0hXK15qHhmd3wGhJuovPblGkcSchQjxl1+dRW9+EizNO658n5kFkNnkiGT9uNt72fokp0eKrfyZ1CLWj9Lg5gPSHo7dmDV9oD1XDZITvRruKooEJR1mABVKH4xwQHsxIMV81IrqsCMh7e5e3dpZgVGqoVnnyErXWgNCtJYtFu6hNFwZuSK1GDHDl12kDUa+0ZS0t731QnUmq4jj4OwfsKIlJqb4OwpitztALRSsWYXQ//2IXwCIWrzoiK8SuF5fNfW+JnjY2nGpmIhmZke8ebx1Jc3zADHyfkdwxy4MAw8t7v9IbvaZd9Wwav27GX5CZKcAOaqhp6/s/43mZKEUAfNb1NF0Iz5c7jn8Ho0vmLefpAn7DGV1TqrB51zt4L/jsNkRzYcR/mHvomuapJO2dHWg7QA5tarPwaLmB/5ndQcyvc+6vV3CLIB4aPKr6KREsjVAiAUBYssFrajfJRKaYFPeU6BAzQlonl595Mq6NHHE9ZN8NdvOG/SBNcOpRNzXAiG3xb+TEsLqp6fawPJhSphSUD7t/s2ojfjYWmMOJODDQu76t3VciQXenJE2Svi3ExTCo32AOAudPZ2m2wyAqMho6yjqgymh+Jx7aIqmopkBqAQM5RrGVdYHgblA==';const _IH='b9b2ccc67f407384d9fda88bc53cba308934bdde0d84989b334f8682b85a8a51';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
