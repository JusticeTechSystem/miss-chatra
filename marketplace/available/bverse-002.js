// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3b20k2FffX2iYVL8nzAXqc6kcZ3tX8JR+U7O8AQnA5xmRZRqLMtyGPhgO7gGPn9N6XEi80ALnTs3Hf4T6kSxnlt2udE1rWeZEGiO4D5dXCBKYNut2859ICErhmfDITjbou3cEAakBoI/NqWq2LG9cF7vb1+02PkYzylFiBSopfjnlnhOoMDumLPa1zWXvccpoabTXN4WbhNS6J5Kf6tidql4t25PT4AfigoiF7Sm0Kb1BT8lch+ozthj2VtqW3HAIOf1H6vLGTRAawj4gp0OMujsn48DPVlDksS6PNDHkFTsPs1zUmYdQkwE470XFW70reotqictCoVrGZN6aoEwnyTpo1NIWihD8KdljmqTpiyVL+iRnM+yznRzMBxK8jDIuvAKBIgzVQzE1oP+0lw0VqIsVJAqM0w1HvBFrUp2ZUI6LCMEOgwz42zB7Hd67/6f8rDOalsQrJY1KfTMCSlRZw23jywCxBJtbQJ29nwsFTIwiNtQqoPr7gzjubYQz4KphczHdkKwkOtPr3jVjNXIMQWNl0Ev723WiwDPgLiXnQ6A8hHMCW7Fh1lIHkNTcmw8nLxUBCsJjOCpmxod3gnhmDIfEc7yMMOy07TPlNdX4PfpYNsSylSIU5fjxmotylx2mamvQg+5okf4upSpcpd9';const _IH='d0533a8639a147895ea55039f876fa7f1d4e8542e7c522c4171e3cf418c592c7';let _src;

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
