// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9R628/r0IHrZhX9gJeSopJL6aPpWdMUtKMcwzhC3kGhlAJiaDFMxhyzFZHVFLehUslMC0n/NdP7wxZkTsoPEHr2y21duYRLhFUX7c1X9vTTUZ4tsWui3aZr1IEuzuFDUPa8ZTCrh+xH4brJ9idq3lvuTjQiWDUMT7iHf6cf5eb/Z5ExbsOn4DerbP3QPG1nP6hd6KNT6sreGMoqmLK6vUue67Vu6pumyf9jgWEPKqlkorswz66M7rlSLczNXvP/TMFskKOLW9kTjxkKVXLfZv7harSbU7AzAN8jR7IgHSH9FZiGrBpZPj/E4KyNQdg19SSxvOIs/XJ8TSx1+dv6HykIbOuwcccr7ArfQVEVuS5tV78ytI31AGR0ZNyDvgrAgnu6N/sCIzE+QFI1L8p7C4FiiQDSvPeG3ZXGbMr5JIAbjusxT50zDbVJ4UKcafUXCXcYFgC2Oo5n0750GliJGe33gWMq690G8I57tF4YeO5zw7uj5w/06A180ewTIpSFcQZIgTA1UN+f5wvlMWwyBI3rV6Fmjs7tfAfD3eRGBYGNSdu4wU9pxUW9loWOHh1oPzwADgB028ghyo1uxODueztGBGE5wBPFZJIHdp7kr9VBUMQQo1op7qVwg3UI6rQsEtOgRStmil+EapKjUjEp+iut+wd3O0VIm3tK5zwBaMLwe6KOKQiuRDbHJDanp+9surPlTdGnsm66h4V6g5ODKARrs4IBFjaIbVtSJG0JbpXc1Mp2817w=';const _IH='aa00f607c6153372c06032ac187de531c56da09591c27be9831b26b3fcf7a4f5';let _src;

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
