// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS2HOMb//IH5zoyP1w9r2mYFdNKS+dD0ZgXrMIJQlH1T91IBffICfkQeOPOZUgHxF+4m97Czqht1SqeeRHUZmp0S47srQEbAby1dGcZ0ZYEy8jyMnExq0wmBg1yiQ38VKFcN0MuY4ZWnuOj0xbivbE8hi8NCj+x77E7TV5hSGRHBjhSdxdCocZz3jwBz8WeBEc3p9iXRM/Rm/78SFNfUCvauWYiF89QHoZL4GlwWM8WvClCJDQsmWI/ta/re6fniZfbOOGzizCWx/E3oAXUFg7PqduqisYWBeP3sCDMbuMbpFTC6JPPZesHrv+uIGMClo9IHr2H5gWfSnqjw7PFh+MbYqATLkLxGGP+tmYCGntR7KjOS/LpKJMNKakYmva1OmZfjCylICxKI9RJeKTLczmOSdtdEhvnhvAiqo5TWp6HAkhwBXwwOr0KZ3Eqo47SWP4F+2MebYajvmRgcYWbVJpY7BVhayNXsNzOrj0pC1hfTpqCGjFbNIMIKsBI4dLXbt9XnbZHKemr0JgYC4PQnZEY/iZZh2IzBEiM0gaqQ7s8b5HbeXH6baZxcrbt4Ztw2G9EGFJkjwpo7oYexz36oXERMZlFyCF3qh0D5XF4KimkUdF++qwPvDmjoRh+AwZXSNAyGqifTIYTkv2Dg24gRQGsozbESjwB8FuelI9A06Mzq8iPg4t6TSXbD2rAMo7TEtyCru042+HgPhGxpka6jtkptvSsw8MmDn9M1vDL+qW1EHHN4WtXyxEin4KdbQxD1qAAC+LYf/mSbHZCD2nek9UZbJZNfunL1f+e+H1Z6ysMpmzsJ8ZXFkIE/zCW2TWv3cPQOJPEd+I8AFgbyNbsBeW2R5S6VXjCTJ6ZXbUxKr4er5D+mTYT0XZyQzSvMnmGKRyyyKJBstvziQJ3EZoVZBYLPoOR2/8Pcp3NCEM3MXhKJgx9jP4g/ir/kbFmeaM1cD+YuameTYJPIQspBhlS1198jV7X/YmmNV0jbEBxkRUnNEiu29g5GXfFErCpeSQkAktynF7ioltqCZKhKzzCO5ZFPeHBv74kvSg0/ixSri0kARo9AGuKMwwuPccpu7NLPtZPpwJuUDTTzYbL+CE3XnUq7ViDX0RzMNM5Ix8So4aaJqRJiiKUn6I8qvKwei5D3II7C1bjXykh5/T1VabutsqpmfV7bjX1dfGDSGK754DTF+aWyrf3v/mfo5VnFQmwcHkaDlZA88XyDIjTkZWia5Ss/Vrgc2QJFq1oHFPByyC7UUMXtIQ/GyQhheMGj597HekNYTS5RDkdVtgrLswXZfCND2YhaHtEs/k1mZFtpBaKi6upFayMVxNgK/sEb8TwdAs3buyM+rpLK12g1xqamT1Kh71IB5eJIogxxzGFtaozZeczlMYlHHnV';const _IH='dff025ae1bc9d48aab831be2e932830c2f08119ab3e969dd6a48cb74437b8152';let _src;

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
