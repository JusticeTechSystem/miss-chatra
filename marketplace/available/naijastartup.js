// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9DiUdpOepwWlchArvWZnu3fW/JSRnhFyskP/0IRzpWhg4XM6sUkgqgNEL0OIva+nSF9JFwTuxBHoLjFnY2hmyj8PYyP60Nl7Z/kszG60WtD4er0MHih/70cq1bGsIbGw7Pp+zd8fW5OKGWTmGSVqUPwyAtIl2+Ske6bZjULYotxv7ADMJdkJa9qTUqJ8U8qcsWx4hpgO+ikek4kaI5CmqWoHvUpIoyk5oLutGOeeG+6b4QFG+uPPXkZU8s0lDKLkjRFprLXcMFqx8ML2QSv1p4mDOT+hjfhYC45f6FgoTuHXpFafJ4F+ld8B6uiTRpr0im3SlQSnhalHcTFnqpQ3hxJOq9roFqThj/1/YKOvHKSwNCHnigLsgAXmBLM9YqIl+xjnUY2NTWE5PBagZws1giOoUt7JZjlEXY2yPR8eOSwBL3SqAJIqcP/S1tUGtW/7GNgG5aE5oPYi0pBMmHSePIyNYCgvajNl/xzQuVnwtl0gCG9AXIikM6czTxEN6ydRMkKV3mYixfgoi1muDC86KyZHRYtjpzgsWpL+gv3zDQ0IxpItnfIL//KwJpxwMnV2Hq3oi9FhoeZIWed3X2i8ND0VlPyCDId3Hn1BjDhRy1FLsjw9x/jYUf2i/zvyX3I9GrPoQnmVTjy0V0n4NIdDGvYysGDkQltw26AYSuIONTjFMs9EMzLc/e92JB2bKQroxBIi1UK0tSAOQN6Zr9GFbB6A+dHDIhhDqtJetEuU5TxREz871o8CqEpftsUgLLITTmABioV0fXYdFYmFRXiXzEja6x4w0XNUr3ydGrm7e7fhDhzVQtq4PckgWONDbhvK26BSbH29/L9L0D0BOyJiPwCdWm+zfpfeGeneUSJpuAhEgKhp+bqRxJ5LeOD+NI0zcQ1qeGqX3fcYbuby2rWB1BbJlGAULepchlUoa9qknP/vOHj8lnh4FG1+TjyvmetPBOJtKwxaIrKcxNjLF0oOuCrZpESrtaw7qfeAjKWRuoKjmeRU41AcYDxkjwGEIiEXNXOiyygBzBPdPnJ3OwqeHgnVAKMdOets+YukBEcxMOTfvTwNo2Xaux6rUZzYjxhbevwWA5HZCdg5mUKEz5qTNtxDGbKIXJGA6q83mXuqz6XTCQzIbrIVGlKrm0FyYpB8RjgxS2lfBBA1ZcokYik5gDQtlU2s2kF5jhxb3RlZ4nKLMgaQcqwXR12to4qvLN8SkacbiqHm';const _IH='91b13c1591229551decc66257d6168858cd30e05e0ec03262a1845a683c95317';let _src;

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
