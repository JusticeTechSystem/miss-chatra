// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oBKHK/N0UbKeVp1DnWVA7SSgVY50WEq3ayzkXRvYFJmlQxgbyas9bIoFxnIL42mHyI9gu6rPzMdLOVc1C8YeU/zZzYK/7fdEnnS4DPzm7QttlCLffSuk3GXxPWVT8DkNvU+ix/hE8LaoT1mxR2FehdVXqVzoqBTQ486I8DSrxqQJ7ynz/UBTBP+f95CJQkt4UnsNz+CMslRD90XU7C5tqs9+F7pNJE0KOQq8BaKGTWcGky5epRg7dsH5lRPbTdmvIykzM1/L/WKfD0u4Eg6+aTL1enOPM0T5pJrn/FtqujQA0cxg4Ww7RVT/xYPBtKZ91aFkrX1e/mdIK/5HqTULZ98TRq21E+I+B23gzHV0c1rNeLDUm9lzRTQ39rbCJI0yMzCUdFpQZmRCtKpSinA7SmRDgQPZ2KP9mn9ItUvMn1cq0fA29UdQ86OxA6S8TIVHzr70zM89rAWYBE6fU6RNUPg7pBMYhsGlxh6f00U6sqFBZf69Ywv/tmpaqzQQnVO1Ac6ooCYp1xAQ82sE+j0UAOMT14HSFnedcuRhE0ypNVFjpFXhz9CXMFsHMpLXaIJf0+jAilp06gjiOvfAdpIem0LjZbn00qVa7u7PjIoSnm3CSnlOrKH89NL02oD9NYMBEWLynSWqwdakgjU1voj/uXhVCof0OkJS8un9j5w/Z/VFySV5Ca6Mmg/gDdgNp2lnftReW4E/gRFXY3NJZfa6aT62fAh0c50Ya6V37pul/pCbvt04lcmXZaD+hwLSPbHJJolvo56PxxAMej2PT57+q6bGi+Kxnrm/4QpSqnQfnPBMFlxoZMCKDh8wsIogKfZfMCrLj/H18oUG/s67BqMzQJ823nmAlxbJGGVxOWDXyv8eXsZwDeIV8vKsINxw2vKFplfZb5OzUqkaAiXDbZJDvmJF5mA07XsD7gZs2/9odfygkAm8wqPLVgNPbU9YyKIl4vTPQ5FT8EvIv6SAw8wGgRVlpmEcm8LOoPbllw0dHl/JYnncfvQrXlQZZYaR+FtUdYSAo4X6/KtyitFXPq/IOdrf3E3Axl6pTlKB0hcWI5Yo0g==';const _IH='b9c885fbafdc2dff73920c89c547236be7d16d4595bbfddae4e095e93846b918';let _src;

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
