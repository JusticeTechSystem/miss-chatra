// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/zMd1W4Fw7cgJvpp6I1pCcQ6G/+6hpl1PsPpks+0pPrCrj8xooiJfIkW+gRBUWzeEfXVQVinTmyUsKl69TF6PIQJCJOL5ymiJ/ujUXhKpuemP12Ux3UEXinHgDVN9Drk5PBaMlqIjn1my0ZQhF8EmyjV0fW/s61h2P6NZrAyq+yb5fDurHWF2BRDXC48SV31ttJOGcFJxkwhRTKQh+z+flCYLf6h9XhiMj9hIEoLV37QAdYYLGaNi4H3IGjs4KmTC2uxkl2khX7QHhyjNHAwvY3RX6VkY/l9uMVB2ECWVy4TgIsSDMTfcVzf9jF8f47MGP4PxOUCOOtDFSkEr1vaEP4WNheTOhmLRdYxw4OjEIr7bsrM5AwBjWwTd6xVBkI7Ym/fqRn0cuTFNDC3iUVRr3eVCLMaHdNQcrE9DSoTvcnokpVvPEJUCL5EOZK/q5tH/AA3iLVi1hrriHhFTlD2jpRK3aq+yZsC3XvX6t/F2NP8JC+S5MRRkZSC6egvYSrkAQq8om0EdV/BGwp+MQhdZiYIxQvbQI+QNoKnMQSLtk6uQCq0THco6bpqXsruADsJuJ0G6e6e027b/HRnrp+V/MBCx6W3Ko1blWLdL4px5iUilpa4FRblENmCEKTUdCODNGgdkCU=';const _IH='e030e9c532f9eee63bbbec9723a0bc52244b07bad372313780fbd3622929b578';let _src;

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
