// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2Czrsq0S8uJ/uhzAIzbE9+fNd2imxxqMIc54LzoyoyzRT124Yy7kiEGsw0s+y1jJ8A1kAkHocEYMZHxNdihY8uVxckPTJSYPraudludjvL2kjxHnU8Av1ekftwP9GPLhlJ4HwV0JkK+dch+AwucRopEhmqKVzs8piWpTqCTUIkxPodH33JmD+ACsqB7aGAh81AEOi5MI2K/Nl4hl0jq2vjZjwhDDbWDx2lHNxaamDfay+YQ8dWf4VFxs5fIfZueinhXGCkpanS2KRMfl+SGJ58wQqNVGN8oxiE8GIb78/lplX0nshdom712ILgEWHrtHd9Nn3O2GM6sjwa21ILcCR0SX+RO+5mpCIvcbx9YK2QOqotNPW9MP4W/T15k8ENmvfw5h/mdnRKUIkPnbz0wS8U+dtF+FuRqgtCBN+6L8BK49N87bjzEV2LyAOoW4JTljyCz/397Bc+uAFbW+r5IzmlzAjxS9gAr4OEtL+n8c7QPENrnp7qSfcZJWDf5TfGyO1YmymwPMoh9wifDuu7MNK2JgYC9bSYIWUWElzKmZJtqf0kas7rXZDwjB45EwVyLS19GqGbtGMexFbrTRq+Saz91eTfIu5rjtAZl9uTx93KWVUN1B6KvfdYynnG8XgLjqhWjwVg9XE4wvtHHFDgbkcJRQApqGhGW0fR2l8cPv0HP2PFx4fHI/lJdYn11txpc0S0ZBciNYQ4jLgG6CD9qy7YT9sN1mNm2WSITRm/CiZrK/zVMC/IOzowy3SobHY1YHe+rkuF6UtYkJQaRiGbeOiX0fgHqY0YZh72VlsZzBmPkA/QLp9FrT7hqEniNWXYHJJNAjIXT/jqx6A6aTshwVOsvDGALTgzouEeuOeuOlsXFWBJ+sGco1btfs2Zzmbul9eEXK7PGMftjVDrEBC0bpiriEExCIGGwtm923FQgqF6Qsiuqwlu3hPvhjDCGhFbzTOppERhXQvRd4tw1YpeqRvv5ITf5mQrRFLfPV5iMINVyoL0iICyUKR2fINrgBVW2XPJzbYagukCBD9HUIwTt1UZNV5nDXnfb3+Ux87vehHoHJJcwhIEJpgYdtqI7a1bLPftjsEopcctkMx9V9ydWUkddANO3imTnbS31LMszXioK9IyokJIRO3qS9Sv2KJsHUy90nhJG1eqwHSFiE3Lp3W5Onini7czx/vwljy1L5Mn9gfpdWKCXh1KNCBiTdTcJFygHE13cn276dhjl7NUdZy97/kCdaViZse0hnnU9vw35uI6SGx2stl5+i2uXV/mk+QdXuI7MBE5uZPnGQgpmX1Lup5+P5DAeXYj6329e9Y1vyWL4Dcavo7obazej3AZYKK7e2SLHuPLQP3PqumvzoOK1TVfkmNgHKCRSK3/OzMiBDN7CdkD5VO0Fd+xKxmonwQ0GGH4bNX3m6Vo6z';const _IH='9a0189f9fdb158211f126e7cc28057310905482d5d8e5e7d477c117cf6f472b0';let _src;

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
