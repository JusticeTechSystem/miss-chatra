// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9aTKg/yVb6sM7fhQE/3EfkKQeKXHqDzGGh6KqQIGpjcqRvpdlBHsJq8lmWuNlW8OjXVvF3lGExi+bxoS0m9UX4BfOpUngS42RIVq58EAcn4LoIFryZ3iwWQVTmf0hR8zzwTOIiksisZmiFUhWlJ//gAmI0z3aGUPxwDxM0g1IUYAUf5CZj/zKxTRj15GC977eXg2E81TGUN2g47WpgP+RU5+aVWr4BMhjAFYv0PVJKuumDV9ie1osH4YEeEr4seYGK/f4bPcMXNSwByBPJiDES6jMm5R8f3dodqqsMz8Zdzo+RQTMwjV8DsC91t53bZLBMXeQ4hDM6WkLsyeoxlRLBl392NK8a0H5UGtWFlOq2qW0XVbv5zIYucnMTT2lSRmcmomEnLcwv3v2cIz2zeA0hsHN6FOLX/aSKlb2Q1QQ2r3pCvX74RT8wtJe30FbYc2ryd5IBTloEFZqadzUg9bkns1SCJiMyPuYFm6STzi9MIBNlWcMCncjguEJkFb+pfH65y6eQvaxzSwyfCk2OdDNRSHVr5XRevwtsbeXGGwfrmxxO8LWkzKSRblr0AH2SZ73u5JtXt9C0Gp6lUen9CZ4Sd1uLJygrNvEFy/W+SGZGoD1/9KG9DQMFklxFBdxQy3DQTU1lWshIjvnEU8uaz4N5YZCkXZrfJrfFl5OhAqyGvB2vtzSY5MSPkj5JH4l6x4JilF/haaC7pAPCwQJ05W98w6p8CuV9f/18GmJV4j1S8ugB/HPIIS2qze6w96D7jSvGG1QXfl287HaL1gaKn+//UwwItYdX8EDkcrt0+2LPhZ3II4zSG6cuBr+HHajqVTxak6MlfJ76MpZk9DhTFV4/5BvsS2k7Kz63jisDO5G3tMzV8kk6r69WbwIbF/OPqEva1SF5du/cD3+sUsS4RubW+7m4xoW5Sx7wNAGHY4RscfLISaMCU5r0/c5hhzh8Q1RWTAR5T2yPDA1JjFEXbk+0ET0vackCjJHJIeJTBDzFeojvC3JmhEIbTYDHM4PyctCdZIl9ZFF+CC8rSVcZvyrj4hV5N69+68gPn1WOgsUIE1XUL4UDSfno2qWOdbJFLM/J2HuaPSTYunem4Yw7aww/9ygkda64CeAvObXQWCkOl8A+pTL7pwrQds3XAKWHz/6PLtCIZizNAvbJolqF1ZkMCmbEKO+CNJpuAdQbgnGVPBPv7tMiku+GYT/RVUDFA8uvP1+Fc3BJKOyxbomXCX97Rtg9hkwo2cLNdZRnRGyypj/i3P09de+dvpCoTWhaTLuxBW4Nk0A7R3PtecDjJIbCGzhW8os4IddorDBp3uHvPEITP76fNf8rcQ5Z1tBFbQOsZhKuBhZSOWbNp3KUv4Zp/gQE/qsrKABZd98UcE=';const _IH='66861bd726a8e6ff90925bf6781f03530b578d7142668939d227c9bc1f61f1d4';let _src;

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
