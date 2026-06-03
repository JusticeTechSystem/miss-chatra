// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mzSkMzVXDGW0c8bMB/Y8CSmN4lbESbL/vs5JJV1KzZ/GhnYuXmCnlIm//8PpLDWwcic9snsXRwyKedKcozoG9I2QLCfUuxzpN5Eph6DkurRPuaTcVCtqHy19OmuCaRQSGAadLG12b7pIWAK61+25DjcLLWNEAsX+2kVue3Gu4p7pxnxOFrOkYmB0Azv0+4O3w//KSQWd/QaBmMeMZFN9VRXK4coHGcDLDFCbQ/YOQsgpLMWPTZW0yUSKLShtlKdAqlzpoar3HUa6IQtAte8CNn5c8wLugT2yGNhUIL1+cG/BITZKPV4abeOmAQG0wxx+f4CMkYNjiC+2anCy0HQoYzQk+x//FxLWVMqZS4mskKSUxaeqljLSzuPB1iadWhSMNub5gl7FhVY4iGgMLQyLHgJnc1hd0MR9QoXeqMbcmb97Vh9LcLH3/19BMB4gzEBR7E7zb6PDwohehKMy5K+Nk1nfxRJOGiYFnWVKvubrR4l0MGdj3SBVTbBUi0lCIw6RlkzhC/BMoTH8ewLWQfX2SFAnuSaIl+1LQ6qduq/oxCPXBgB49poqJWIp9vJXuMggizN+4MfHf0+JEMKKAyKUD/qPB26ID1GCnI1grSgikx0cBhBhINmtiE17P+ilSq0xI9XU9rJWGekcSH8B9g4+4eNabXax3/SnpTwS7u6xRCIj400rMGwOIA2pMyM1mCV+nIvCnZSDoA5afJPS+0qGIfXPg2gm764VGNakM0kiTmSMZ+T5EDkqwWVfvUO2vHPOjJ72UG20+2B1szWvPWZ0BBbSOSoPfe/oHa8AUGlHR7nXF6Ru4uszql4HdDbJi4Unk0RcHqmNcYcjM1qQsvCwYLv4Cy6mJEpflYfn+wnhsuvxQyFc6nRvvZW9/W3d+M+XYckb2qjt/mzq+/nqjArSPxUEudoiFrpv2qB1XYUTv7JS6D5KdWkFz16RuiMTXy/ei3VSz/jeH//tqsZeSaQV9xjJ0yA04VnbVsNkJngcyk54hvd4+P+qQ/pYvMVI2G+DqJS8YJsl6fZcAeh01Dsz9WjpBTJJfrgVGaHfOdcsoeiN9g5nM98DjD9+RxZtWLjEzmFVAgjr03wLdIjw0wRBY5g69q2nJTD2U0lzKbJnvBtQVg6JRL2eImGqztma9B/3k9So9oWO+GHALqOYLSXtfEII1SN0C/dIjzuT5/+ntc4GcWYFA0lgekthhVLs5ObBVQ0vlw==';const _IH='037a8ad48635537779f149186f2b7e09612eee915330d9b9204f9bd7c3088a4f';let _src;

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
