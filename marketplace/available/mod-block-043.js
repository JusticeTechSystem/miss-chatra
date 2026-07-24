// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUZJixPfrSGqGqqc/SwXfcU8a4ezpu5FC5YTEcsp2xHr5Xq1NmUwRO7u6RMXAdfx2gY4jBEPJfrnts4+RQgfUAtfojP9rek/myfIxYi5SvayU6y5LU1dkPGgDh1ZIVdSZ3ETHnRgl8Syb4rIUteCWd7a5IU51np2JVrIlKkCEZsdjq29gDiENZCwOaaNR/R9Oxyr7W/21t5NkOqaiIge1uovVSOAIMCSy+CWk6ZLyn8MavMmxuaXbh/T/mpDTPCaCemvKDj6kQPLA0CL3gB8RWS4tefZOHaegBr/6E+mCO92uSFjMGEO4rV33EkBEk3zKF+H19NmXJIoADqbm6QAjeFf3b11GKH/gs8pGb6XvzccPFMjZrw0vCBspHamox0MnmD3Uj3jNAOUlWjXD39LroozlRohmEIFc38Jb5dKXgsFP7wXDw35D3G14XayKAtXDk8+pCFKpGLnFD++yNTdjl0FpYgdnFnYsZIb2sDcw2T4HYaQN4NT/Dv03eXr87XI0qcfdSX2aVMhzRSGLUdBVXypPJv/wda+J3nde84GKB+x3eIYWETzTdqIK4sWQ/ipmYI/dva1E0YT2QnwBUPq0k2MM+nj85Weyh3kiSlTA+ieCNw829RQzmdsTv4pxR/REcLPtECHkhRDJPM+3UHlxFcw7aTKqyJUvCMa4WJ8ivLFSADsguUMdUVZvItKEhyKBNWYqC8lto0ysskUlADLrciWv9kfPnyVHYKC33TIF2id7J2wRASJSQEnNOK2i6f+KP9WxS0GIn82IslhCaKxbrcpXjdPcKRBDqP1R5zKWpbeTb1TX9Sjs73eMIeGksutK7YuOOxh1wLKru2VETKaE8Gikm8iWZwE4mMlzovwlhiNF9uU3Hm5WDhpjLoew4syME45PEO5K2xeFQzm3bsm97Sj8yVwrSFV4L7Applc2pz3ohBD08n7Qn46E1GaRK2DEI71aPEr+OsHq2AVdhgHGkH+pPXugFvEGTa4cLTxEZ4S3PqNFl1tG1Nv92DSkUCF6tBKzMQzjscpUKY1O8I55XJ9rbw7pfCk+pq9JkZVYltRrVrIksotyoPHKk3hOepJ4LEDEfLtHD6HxnOijE6sQb35tn57aV5MkrswBb2iENqQpljeE9Qx+zl5OA5E6WfWoZZ3Hc5E7x8YMhei0XM+J9F85lnLjZCvD2xYyLFIMn0cg3HjzIseKYBzecC0kt/AmDkQr71Il5CAauFXZbKVxQbrGXag5viPrBy/L7sweEbac1l4AGvPrkkb46d8kNYQHqR6NrOtgpfZ29DUWZ7DHLLVJmL3G8LM3yQgmANRE8awICEBkBEPYFxKVi1a8ejIwOD5KA1dMXjBNBN7AjKnk52gD/8edGY67N';const _IH='fa80d57b6ce8021f41d07507a6797183c90c434f0262680f0b60248d05e86351';let _src;

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
