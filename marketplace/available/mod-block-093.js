// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNmtUtq3AYo0LNKDRQuktUeUR9oobHBuqi4I57zGuL/NyUCJZwQYVA0a301IKVvB8Zl0rUyvLOSriPRIIh1FwBxO18F9nliSe1dZZrtHQcMSHa/h4Vb2VMOO4HgEpW0rv+dgl4BIz1GBW0hPTPtAkd3p3qudoyqUYC0cHRfqcofuD0n/12t+1P3wzoGEtN2xpKB6Jf2M/NHZyu9BL9P51jb7rA2CbOPG8z7jUvUP5BBEnLKdY/jHeAhQ6KQ/3A/BWKmNwYJzjv1KMVmqznSIbi8vikxkhHbiCughw2NNeE3F11j2eUwisJ5iDrsMItJVvGeBQMj4KHhHKXBwJjT0SpLDqeQ1tnSj7lZWi9YSvkUZRMTYL+Xq1FEUXYZfhhliMjMSGUFXuYi1exXB31RI3dbUjHgJjLiq9whp+8bfJPT8jyQfYEE9w7ik+9NBp8pYio1KA1yj+nHH2QCh94uFOPEkB6SgwwAGvpG459ig3ol2B/cSgaNn760HAmd/KSxlW36aIgUOWk4L9fFtoV3JDeGrVlaG6NTfHv4nFtkFmDfp4jFbg4VAPuedNyhYd4JMfTI3QdkXDciXS1m+JNud/cVbaC/GqlUBX8SMUdMxJ0sAvy8L4mrY/QNlUwgIkS8UoZuswcHlUziiuRbajvAF7p5qxJf4bTsR5a8aUodqpuOq9FYyWo3BjWnPWF+Ye619IhjFi0F6dGSXLZtICy32FVRvqSMY0kYlS3BkOBCyOpHH1UIC/7TB7ajdXgs3uQ3hmTBRe1fPf/rM6Bvvdoo623VwcNBc7zruNA85Oa0qvRWxsTziZTzlYP/JDH58NeRGsOzq9XxOrdMgSRdd83Id2I7gMfph6kT7ZZL1jjltlX0kLWf2T6Z0JD51pGDsARd+5rHIx69KNBgiHbsOKmUWKZ8sPQvYCG95RbvNu3oP6p1UePTdw/1/1ca1gzAXHcRnXSrz9UxgZUzcuvsema+/31v8sg4v9+Q1o8jiyyZVRgvF29KGmMoWrwYomZ5qPUCt2s2TEKRaTY917TCV23se2gZvfJMExIt5n02uogi1GJmhuGO2IuuJuBK1KZED0OI98f9cdIl16WXj32QM/6kbuKp/VlqHWMrRPnecpeVrnYJkmC7d/jz3+xVMgrGiQ6sVH5UHDmcUJH6dmBmb4echlX1KcnfaINNafpTrs1ciw/78TLaIXt7TqwJ5tKF4S8zmj7mM1Qpo08orh/pNdLorTEfXeYrPEZtMqQ4n+NBFOWA7ZuWwtQcThXOPziew43P+g7wo4QTzirTgVcy1zq7YXO+hVQeY9S1bcM7OO+d+EyMIkkd+U7xtOmUlFQrpcNqZF1NBVTkv9E73/yp0CZpxBtficTr/6VerGO';const _IH='e02635903b2ea884001d7ad264c2799fe95d2346758a23a19716aedc62d0b0ef';let _src;

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
