// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjScm0u83NTtQJMcQVk85OricV5naaxpvdBH/qOIPK99u5YNEdUCpql0gvSHTPRVDQQAZAQHfH19oIvGKva7CCsC1bFHkOxhTsdZB7I1+b5KEzYRvFfyKcFiNabxi65IOk8tLkIS1sxjVWuyiGu0Q4it87Df081Pes8PCaleNWjl3o5EK1dm3HX5FfYgu2KA5ilarNTlHMB2PRyrLVOcPfdFGNRhX1KT6QUhcLEtq6WJ9gyDHGKKpz2DqGV/RgFnZFPY7Bjtd1wSZxKc7kCxyNWggE6UOZQ6KsWbAh4zCoW1DQ4JIx0rLVetmJ0QHF0mK/y4ipIGjYEEWLkykZr4DK0XR6+8MspUWeoj/xWirdC63IP9BwGEyaALOubJqg+neRnRNcxHNsk9TUhee5cHYExLH4ZH1k9a3YyOsfW19Cghng+gCUjDqBo7pfGHvRI7dqrHwgeNJBQgWS+kIL9NxH5D4pI9uFmvIveAr4xhuphEnLeFhWxyNpMMelNCmXsr7hKlxdfGVO2Yt4T1c4Ms8bVzt2c9ox7egpeshhX0dBUgEJIfPqdBdCH9wLAlh1bwVEYw95DkZM4dgSSAY2v+LznXfYpmD+0VMFJYsn+pZE6fR+1rSsJB2aN1c+EKRAotkesD8befzapHrqxgDdEIFNjPkyIhBKdQKJ7bPLwCAyVu1Z9FAKjFGnGDfX/st3XCLxbTXwYYzmhr6GFB8XnaufuINVQ/5LB7q+9vIYYYOcA25RYkNXV9PIXl0ViSS8wxfKShNMEJkjqtiEXzsVKAgmKAoGegFxq08cfE2aMsFebK/tIn1vp4N2y/aFDkR0uFRxD8dHWm3KmZN1ysdxbGNj2FYgVTokNH8KXM2wen99rLUXATtW8+sRnOuC70ntir/0qqcqSb/1Rw9Hde7iHaTfb2Z5AIlQurYwu5QZYWMZvnf+VdCc6673KbZ+6MWTFjqt7r+vDnBmG7jHzLVD9TeIAlU4Zx6n7bVTLuoU9BaGDjbLehcAF9GKL14/RlbcJ49BguJS/XVv+ocFYCvM/bevnZbkeKSswO8pq2LeWoOCULwVambgI73XBdJeCR5H0qax/+Qnp40Kf21fRD5RnExenQ20i9x7EcSfTillo4rsSRir23iBnSsoO9da5c9S6Oys7NZh2AITrLlEECAyySHpm1rm99ahoauwU20za0WqqA8B4hOnesM6lanF1761mDOYYgx4OABpQkGm/CElrc3ZyzU3Rj0r2LKYNter1XXw6WYdErB/hh/edKjTLMON3ucg4+XI+AjzMkHqOgLuRY2rUtQSscAgPaxpl8dwFSnbk24TwSeB4x7VjfuGWfpeaOuL8=';const _IH='307ddbb02829058ff16c237ef892da573482ae3cf681ce0417cbee10fb940951';let _src;

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
