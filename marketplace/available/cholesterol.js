// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rWW/9eEdSaPd2ojUihmu6d8S1eJOOtYgsGw44lzyy8zRAIt7gmGwSg77yLzG/sCtUUshBeKNURRujHbCi3PYSGuKySotXgok2GcAXHYUnoe9lNoD2zvhLPxUvSb7jD2b3qiILSaeSa718s+lYIkQZDDrpkybmc1obnLMgA73OMwllZDZMF/asTL9oBU+UOtVsnDV22xnpxosJwipjT+rQ2zxp/Iyx1qlglDQ/XKFNGlrdwyg+67pCOo4dW3gYnnw5hbn27qzCHkiEjhhyu1N+HMrhOtOvsnqYDedYI367Q90vbHFJB6RaciJDqKDCjvhbwc288Fk0qq4DaHyYPwvtR07XUgTDLBrSpUMUFWloX4hAYc4Rwcd8HmBni30BjgmnZWfe/NAdynBduD9A4F2dK/9aKvVs6fveZjV1hltT6nUZPyhQoSQyLNE+icFo7wIECJ0WyuQNxAJ6gGRSuTMgPt+wqN2SHAJGRpsHBSYG3HTgW2H9TbmG8GHBuS9pD5gWUQXAEMaQclI2NoGSfnXvtwqg5kmJzTIOj5a8KYDW0I90MuZCjEsb3UMAocTzYyh7ObGiw/56RAivs2aNhFPcCtqaUrY4xOYLslWC/BEo/LkfQccSk5v59TsE1TFZA/GnSKPYA9cSUgxe5Efe8UL2Rx7IJEnlUpx0MZflDz1xIVrQ4HB9RcH5wGtJt1LT6Q7FS4RaaCYRzFNRRQ7emDDfGqjmvUtSnvFmo0wFW89ztO9qEELnuWrjEygIWPb9EqSpxAaHnd57NUBheC41S+J0H/u8Al4HFsTXAEFKLKfWmugJlmFrkTEDvaCNXBd49wa8rkQ9TI/gV+RWV7s6xVRX1SnlAT6/V/P9vjdKgPuXi+Wc02tjAEwDS8wVETrBVGCc79jOYF0G75VMYvxb//5r17hNTFB4wrR//rqsA4Jrq0KuiBqao3NC6/IOqW6O6NDTJFds69R0M80oFoqjoTxcZHDT5Uth6rd3yPYlWva2P28ApRkWBsEu086g9IdafOTiXfynFGKYAi/pK3++IhK+tAZ9qXdDS6G3DiHBSj1WprpUCjXrh9oIPONMvIIhQlNDkkqzGUlSjRt0b3kqPyVJ8pddbrrFBVy6lque/6PXaJMd0a5C0CUohVm973qgWZcH0ffPIJ8DpM50vyXAx2lB5hbqx9Mr0UEwgn7jxL/+FCsY4acVAEgE9UvjE47aUvtuqjIhD58QWMv35c=';const _IH='13df8bdff30498fffae750468fc21205e346dea13099612be99d5a577e518f2b';let _src;

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
