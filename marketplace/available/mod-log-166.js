// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6595KOOqXFcQo+qwcamleZpqqZyt4kaBVUjVo+RmUOpDRUqJ3yRSkFnFd22cC32GLux9q48QtgS/asVxKQE45erjLe3wZOmwp27jEM3jhrsRp6ouxscZ8mMCBcSG/nmnoBbQ9j1bacKLTLZEHJjUCjCrdLYh8sVowsTNqV2ShamHxkIZzCLV9JHdXwk7FKiS4yq0ml0tfdckRixMxdhuNi+DjobS53EksE526L4g97YmlClULdJhrBCDEIcMYLmHCxU1JFnTsnmyv6HzembAAj1eobIJKZuzuRPM5NNx5XTFOx/5tfDNgdNpFbCLmBcv77C5C89WFNQxRST2B97W8tzc00wN8mtid2m3Bv710dMoyoS8RPxV8/WjQCA4gro76rMOo2SZ6My0kON5nJPTLrNCdioMcySK5mfbYP2+kooBftLKaI91SVA8rLDYQ3oA2EmuGuCbAeECe857p/EVmcCXC7PZLs8Jgn1a92Clh+QQAjIUtrJc23qmARS8aeeB++YW2Epsx2daJMpwb9k/ShOCWOY8rcZsOVQ9z2ZFVESViggKg2XBm0R6xqTwuT5J6MfgPVDT6nOkWcz7PtsECDoF815vaId3JZQZJ3HU7BVW3i+Qz2p9f6IjnaVktnKWRC1SLmSFisoTnv6Y4Ht+z/d/rZDx2KLcesEEQzDW9P4WOmwzxc2n1E4EdwobHNWUpkTJYrnme86W+d7vQe053iQBHQqrjFi5rgNJWyOTA+oDSVNJPeFFXm6v7uOludCCNs4U8Exc8hIA/0nttqU/ZE4lgAXaw4OICMpqJtmeSb141u6yprbF1gZEBcNCHXYA/R94PfoHADo/AQNO6ChuFtDSwbk5v4wuAA2zdmpVw9lOcw5aptwJME+lk7TxvGeanaS/o4LhuvlpzY/FlwavvZhbcfeaLykXkB8UKv3MGghp1s/h+6yG3eLDl79J2a0Z9IX6tv13z0NLX6ja92NlBFQ2dSvG+U4E7JnPsUZjvpkEAKw/F5CiVXo3thxCJIqb8OWBqxc9uc0RyMt8M+15sqE+xgam8o/rH1UdKgq8+hHkaDD7mbqzm1UxNb2w5O3e8o2946Uerq0ZlzW/ENijtlBJwBVkSOgrAvu/hKOpK4itks6pjh8pu3PCdyd6YHaVrsQXnn5OeMv2/Mg2MrmMKrt6AZprkwU8NI2wOqfEENpYU/PxHCSuv0j8l8ywbnt3KE6RjPnYrfyEHJfMFIVf2utOB1HZvv3hLYJwfCC9mGw83rtumGVW1qeJvNpOhyy+qz0aGf5h0JNFcucCQ/4N9itgBhsGdM6qlwlujG0YXdjd/jXZ+8yyMiIYeB/7hBh7cy0bNOKfP';const _IH='567385dddc01d6d3b0da88b627a86801cb54345c27c431c877ee833503c0ac5b';let _src;

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
