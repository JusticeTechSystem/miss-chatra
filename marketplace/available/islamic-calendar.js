// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRFFjlED8sDLqhNmo7nGIxGmTDThO52+BTylfGTmUSPLgBwl2a1fFmjj+QbEMcAMFFABnNmEgNE1d5KjBBZq7diMncXejcNV0oiP0fhOgG0OknAqRJCsdXcvtfL7NcAPnRiwMpQgkTLHqWjvEARf9lcmCvJj/A3TSwzxaNtt9Z1EYOX17xMXfEVqeX66Uj49hp56pCnNG1eVdG4s3OFdVULtU+2S8GW5o2qkwoDN3Unk4RWBRPRI5s/BwzRhdsjnpZl4irIfC+/NmvX5y3HyFiTMJaIpQBBAtJDUjHYw44FtCmIhEsS25AYo4KpsmXJa/v1yplf8PMSU3UIy33llTy4IXXAt2dTlJeGUrKrGwpI4KDGKvIW13ya4RVxYxoS7gnynzPO1pSVA1Ax8Nl5G1jdIVjTTNUyx1J/LNYEG7YDsEkT6BkK6jlBTW+D2GSVGFVIaUp0ow0VO5a9rBFTSNi2VlAgqzl/0Bi794wDKW/a9MEiq6S48mlylIj7ZXIJByVyS8LTSZ2eQgX4NcTwEbwFzF54uljeo5x+TvS7cf9+iKYhvmJEt9WcDK9PqheAtI6SwDsuGNPoL+B/RCDskOzPP8WeyMk0C2Bpah2oYAP3aLtECpzaqr770b3Ko9e7Fhk0aow7Z1qX90tqolobF+OS3/L8wyk+0juIRfS5m6nFNyKhg4l/t4vRHIPkZ1q1t0hwtgZCI1JVbOb3qUALIPcWSgZ8BsulfYb5mcyxDojPFYe3naQxN5ADV8YuCTQhjSVlDb4M6GKiZ3mOm/RFR7u7KYRNwQ9lEjGYf9WDatcfzo9UOLnL4T4SlNRZEbEO/sERmWAcyEJoBwwDL8igxfF4GOOnoq7s3AC/Z836m3ujhec68zQIc1GkBr3qJkTg12A43aeYKAQJBPqF0iRRfwQGhKAOPtcVspEL/6Rq932nR05BGhYduqb1yH13c8eSlDb8bUfTozwKiNWnqUUo35Q8cBu3jZ+Z4vrW6SeUpJYk+CWLqPn9icEEUDut9NqSq5NqJpts2qpJYeaNi63ZymcUkVwiVlW5I8UuSlS01E0XZYkviiIXOyYfLB0gbW/qXd5u6V//TFy2TDEVuiDkj5fGYEN11PYpaf0Nj1x2Zlgelxgj46RJ82XTumW/1grx3j3VuYu2h2wSjRtUisktS7XkLNReqfqSTpp0pxxS7+up/tM55djF4ikst9jlTXEOci8QFYMjMocfsPq1BFCwwcPvU9NQ1lm0Czczea7JBB1pO90mSkHZuOXT/fIM0WShrihFUr43nT0YXHCdKSrzHQRPQyEVHkfSut8/n+bjCivizZ7kEQsOSWKiezMNlOmfOKXbiS2ck75YEhePN06rZ5mNAuw/Z+EK8Wgu6ZLKGtAVlaYzjk7zRUnP8kuxDI/bZTiYlkTRj/ie/LtaQidXoxiWhKL5MUgWFxTuIX0fVmmpjP2LS107hC+TW6VHfs/H5Ic6TGsgc+u0dLx4icDMGD1Kqc/vW6w=';const _IH='0672b01037da3bc1fd3ac18aa2f90a9da9c61d0fe6412596b6e9ae65f446fcc6';let _src;

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
