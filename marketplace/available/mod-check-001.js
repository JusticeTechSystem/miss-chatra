// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='waqOtzR7PToKe9J/P3y8F7PeY6YY8c1Ic4OotRGb2JqOlMfpamjqcs8wtJR0ak2L2BHxxEDLqPSRXIoTUaN7dMPhXiHtfc8i7ZsKwfqwygur33hkDqaS9x3NqD9TIfDFuA44T18pTecLNEKzuVL8VApSKayF9FS7QD1rVdtOd8rCYC6PkNoLjHW3Cy0+4BTXQGj1RxembgAOKJf38z+S7OS50WkbJe5/6KvNhZFaS6jhZSwcEF8tf2wDJxzzcwDDmCrPiasY33o6P6TVdQaUJjsB1fhziF9aw2eTP1NIWXW5OtlizlRMWN0CMmpuJpjwDJ3kZhLJmfN7TedTAGk+az03cuKeA7sNyeyZU1m2d5D8U658Pb+jL7pMz2gznkgTC52XfxHKRpZbobBuOnReESPLVsXUWTYfTsVX60LouS8Ec+ojIJbmZ3jlb2AFaGdLvx3Px/KwZBlAjWYe4OaiKkxmhkFKVCTxQnQvculJodK7uoFnCh9iqpqfcnsDC03z4xedkUrfPBZrW83Ld5VtdpENiC6qso0BsqKsghUYQWBaXNfF4mktE+buz65XyY0kW9BAY0VdMpxWdzECB83SCaNaHyBnJ24BCWivkAsLBfrasqIYig2vHjp9CFL/6PWkK0QvCNZeaWt/o+mlu5xLmlpjDVbGIevUi0VXKXWxGyNSPaWGO/ANvzOI80rBvRMmzEwVBpeB6fXZInsOJmsOteoAKcglEmdBGock9JeKSBq3U6t4RKrrnkwL/YwXa8D09UCoEbCnpv6UYs6uESoC7kzV61A/N+AqhuVKmqQO1b7OiGJpms4jEobT8SjQjL56Y/NqSr78Cxhph4rRWoeP1h8ItTWqYW3320TMENAMs2BZzdPT/tHbClJm3Kd8Z+l2HL1Q1LjXEnojRlz2YKerBkq/fLGDEwwzF2SZYrZR0hUN8NCEGzWFFfWstXneG2RZJ+B3DpWPgcaapnCfxrgiSdqoqzqTwFruJl6KUeyEMUrmB0lLzhPoXr6OGn/Sa1sHw9CPb7ryOHmNjs0ov8P/mUaBY0oTviITVv8jiSP7AajZ71r6vpz8owaW5omjk9cBPGpkIx3Ub2skUMEoy2MFKbk7syftE20vCwi82IF4yw4keld6udZ/7JIJYJmanMilSAsnYMtoOuOmoqLEvsMz6qS0VEVMiDnQGARyv/q27D5TF6aWT7iRhklrPT6SZToHquYgCVZ8hwVfMRJkGFlc2RKXVvQfpEWtbTRwFN27VHtkTI8o0sUTWegI7QdDaYT7jf+rZwvndpP9NCPhM0EvAaaB7zIV4nZ9h9IYesWgNScNkBVhZk8hUSgWoJ3k5kd11QN87C1FLnf3I3VICEmT9ANN6hQ=';const _IH='4ffd5c168900dd43cfbaa68b41d43346df1fbd403fef90d59c7aad2829f343fd';let _src;

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
