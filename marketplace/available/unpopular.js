// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X5sM/sZnsVQ4dEtztolkexIUFNom4v4/5hVLzAj74T6cqCdqTSWCctlFgOSEYh/JuTcQrgHhbwofZqI/6OZpP87osw7jQlN04N4oVVbNJnCs9YukD/d8yWsnoxbIqGBbSD7yq4RhVkb3RBdv8VQrDRUziAhCXKECP+5Yb3rEHfU3q1Le4weedXXfIJtDKlWwygh4eSFD+Ul9C+txN8Pm4MyhKbOKb4ey5e4jd45kNWbUZ2JxZczRJiO/V/q11kejVLdgXlj1KcLErEJjqVa/uZFen7xzlIstORFHYDinjfIkRv0Sjz+B7U2GNtIF0T7kkjPH+N05XRlNP3GQXU5oLW05/bRLhUubfWsOhA2vOhII5UvPdKZW7b1xrWSQO8335zHNDUHYQ1B3C0dHHSzC4nzIAU0zhfQsls9Su6luZt6REe7dgP96UUVCiuo7fFm+L+cfltXUhvB8Q8kSgfr9T4p/WOTxzz412a0Lt2JhkvN94fdh3pOBPlm3hXygYs8KFQIa5pUOtXrGcZBmzN3u2+42o4Jx83uun5oCYsfqPnxg8SH0t9qg0vCBcx8U5tdpE1S2CG8oRWQpT7AkgqGIQbWxAWiyyWYOgOwg9g/x/3Dk1q1T8eH8FPhLr5w4wO/MbM8aDQReq7LtO60hpL2LE/PME9zN3ytZlM0fV9GRq3fdhiDuztpzFAW38cCsk80EbEbFvKws6a84U6SpsYUIQ8d55KiNlhaHhXafg40NDxmtlfhx8xyUAUqHnFsF3zwpkLPBbMyk0NcgfXz3Y9hGx/dnGPDx3BDUKd5OEVtrzZ3kGLK9G+ai1ndac0kFnFXaCY2wsxFqQ7XTG6+QAz/kTDJzU8V/OraYEoYRaJvB+Gap6U5JzqFwwpX7jDFpu2YKqytVk/XxVsmZ3harXQ1WWk7EIh8ZkppQY5/qfzRp78MmCyp01/1Wnw1JMtWg1vs2ni+fLj/0e76FPkLxSWA9d1Ya+8viMyDpAZlDQuslLEzB6H1pvoi3vZK1obRq8syzk9uiSVhSfe70R7WtPs54qasMy0ejEAaFSNOMEs7fUr1whCd+7bdwOotAK2FIkg5LGmoWZhoIZG2kfTlxibv7jinjDE1iQkvYXJVnacP41nuHD+U3CILScT67aqZO4V8Q6DOMdGMOOTBbpdErdGsgDBj2VkLjxZcvvoCrLVp4VUO708swkWNhXZ8FKCPOt5uBxw+w658nOO53QLK/WXvREdFo';const _IH='2154713101eb954a7941820d1b0cf28f5e1815ea4cf51d411d84b53d2db2d29f';let _src;

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
