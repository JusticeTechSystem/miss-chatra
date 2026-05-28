// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5ldKtCGC9i7r4l87fkcx6GsAxmosIBCR/+ondb55PrRA2tMuqTEDuFQVtmB3liyzwHEAZADgLngkdG5Ekbr1LtAJlMb3OtB/R2amszEj3ST4aqaTpk0lHuneIG6n9hB+8uDWHHJGFYCqo51cCBwoEVTy9I5PQJDpomwGANbfFpUAU+kJCuD6s8+5bVAlJW3ew1nR6zwhsIvW1BLO0iEikAmR40pO+p09kz58o0zsy83rVld0tfHb00ClzWzVTwdc52ggQPDo+mjd6srhIh5dyqg2+3gQtMz5LYzNEx+IS8iKDXcIYfO2xyFYeIOMJSa1L5j19UCFGimyIfGL6G+bGWjUFqp0KYrCj4DSjLkb8w2okgOu9YHlmkjDRSrktUFvG8fcjbzggLpg0nDj8eCLLt5PDmLEeZJvR7iMPbUC2CBVvVumaQ9Pf/HH88ERx69E8CS7YWPtCC8mu9N9+t/A4w2DbcbJVwA2N1Lr+pRu2uy6UC6hUix3rQrypHQoxeIFAztpDRGvHbqu3m0T4tbXLo0Rssrj96ciI5Koh7395hNifx7sFigpa4YZbKmhVfKIBbTAJSc0IE+FLKtSweGe72/eIoG9QuAh/bgVCm2sihrhP2E6OIlGUaKaZ6RAHg39LTBFisRTjLz55EGa9yFEuZVR85kY7HTwHiva/JBW2CaYq5FqzDezbJic565AdR+8SvkZxA35+DR3lT1mfOsii/D9t30gXQkkEBNTKyU4n6icIwAUluyFQbhJkaKjzBRW6bnWq6fndHzsB+X5yc64zj0fKJ+z3NncZ4SRu7vzXlnvqMLGZEHxciUIsFnSlu3tLWZTObi1UP8sa9RJyV28/Eo48AYUXoe3y1wRWlvufAWCqnzu+NyfE9yhqBG7Ysa8sANSuFQ5nmI6U9c/b2bfOrYcrCN4AKdjxfl4Hz3rXEdai7yPwr/2YFADqcP1Lu/qWyYCL+O2665VHYQi6Bh/LHpamtgOiSQSRBlyu59i0IVGHZhaDJNx5H1Ft+bLE4a0CGettphqx0omR0RaQk33bMxnluOoQA==';const _IH='9e8512c306502e14a09e4aa3ec9fff3fd9bb312a7dc1e878c6ef9b56c046993a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
