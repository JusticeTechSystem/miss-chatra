// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRw4KLwK00GTUBKl4wFWIgO5vb3L30qsWW4GfLavd8pvtjzXxNOemIfLJ57M1jZ+sEQAyaW6EBv4j3ki5OYEEhttSdJ08kCgWioDXLsT121rfkVDZQ0XrjM6J9/aCTg+ElP4NGGALKkir1T5Yg225jSAbCLCrx8APSDPKno2vxcL0Hy246RiuC7ZJXQd/UeO32f5R9SHhijnYraeKfy/HDR16xvi1UhhTfDNNjRBOOh2XHEz+qxvzyB1iNiXiwpdb7XiLUr2qU/uAY7X081hLc+O5gui4Z0MLSIR/m1UhHWCvneNevPeKnyqDFRWjB6mvEu/T3+mJ2whg8S2nTkEKqJMw+WWXa/KQBBFB7fuUL55d2siYUeA2IQQ5H9AVWCkqBHszPmlgtAp9/4OkM4mlN/4O/w//pjaCEvds12kAdU5rek06AHV6D8LAR30CUMnrwXucS4An+s1mI6nyU5wcgUA/Cp7cOunNG5KqgN1DRJuXmXm76nI0lP1IH68JrQbjGffqTuY9chxYTzFnaeisR54bj51pPN2BcePQy8FfubYkB8/9RlBEgfsH3BCc3PDXakEsmwYrMDqP34XxmG6/g9urzuSdtSWs/wh/mJpsJGChLd6DIQY049Wr6ODCPDC3a4Cq1R7N+AU0kvb/MiV878s8ZarPezb0WY4CyI6hYUkIETSScxqSEQy65kpU7r/hRP4c7k4yVUQRCrpTj0Shr8Z6HUve/mvjjBBTRj8yOezHXp+ZD8Usbz2DLbA3X7vaJ6utT3SfzQB3M0AgrqQt5TofkxLe7wr4yrYuB8t8Ay5r2aX5jmDF3wrwkCzJ1Ev0dW8lrRdEnDuttlFfJzFYLSxVGWx7PF/ps+gxOPXZeVsGrw2wZQkQFpEyF+YK2r3AwMCTeBWdxZAhnbwxZ4m/NnouBmysmNP48Jf2JBovnOLQ+4D4DTGCKrvoW3Oz6zgjFaMpPMt04fyRKmw7kaRJOzgVOWfp6GRIWjGqU6eghp5eHXf+/69rnxWeVZEC+SiexGCLw7VQpWCE8wQ5iqr5+uBsLKnEkor6kNEAyL/Cx9m+lllLd3QXwoZEHRY41ZYd8e2iDiBIwmBeCswCezAFztgjgw5QiwqnikBCKgk9gSqnJxcUZ1eC/gKEigcZ+z0FVx5QAhlDAdsbAhad2USElA4BJNNQavi1z8rSJgo7GD6iWEp+iu+3Bwan1otXwJlTLedyvKl/HmSAyGPqN3a+bfgbOwx+JcWmSyDNu6FEDmTaTPFQU+vb0CYIkTEfyWBYNbm0FbI1sOEQW52kU7rake/zsL3YoDiQ7IO80rDJ83Q1luw8phma/25rRNIARm9thHhQGL4xWNbzr/tBkkI9QBDps2/q4o4wSIN5rA3cIrYukZtQ==';const _IH='e2e4fb05a1f4275eb82edff4686a698ac6fa9cecd9d03cfe8bfd5ca1776a1a9e';let _src;

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
