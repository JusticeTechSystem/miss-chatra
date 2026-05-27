// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xB8FIcemj4RcTEiqreA7/Eoh1RlT5+rDfookRcT3gzohg4f7dlU3y7Wvrg5ARNyHAMCtLySazrNNQ4fJu8wNJNotrMwmnABVMMULXp2ijk89kvhO++bOUdEt7HEn4aHv1G8kvWvVE3Loz95U38QQd39V/brnhAll1EHmCm/hQoIof3qQWbKdmFmRLCZ70VA1vXUoymYJhrU9KC6p2DfCEaItRLkjGZsV5V2xVumqaghtU1t2oDL1reueODqIE0ion4ICdK/k3D+rxazw2NmnMdJy6zLtpYQE1wc1EFWctHV6yoyt8VPTOeuwuXHQHkZq/7SgsA4qxrLvE902NmznSJOzML1ysI9ZfOHr5YWXh21f2orwRSeuEyYbIShZmf/QczJBD4ZKce+WoZwDssis05fMTSKXQdNxyCXhFIjWHXO4YlttEVc1RNyNxhLLiUveXRtcrayVl6vQEt7Bjcvr5P3w6V3NjmHbgJacml4MOfPRd9qyB/BMJBz/jkf14q/EUg82HDCFpvpZSlIMuYyJdlVMtlrGXCTP0kYoctPLJza39y/R4xh52HjqxKqkh8uoOhIWKuSbgeNbMsgzNPkpI6lK3HE8h2ApJy7JdzWTbvi9ZRH/rb+SU/VA/GRZ8TjxNDoxMMiCjEEBtxk58V7AqVfUiIm2cw/+3oeE0Vc6cNrLhs5YqKNPQ71HccdXHLGGfu8qZkGou3Kmw4NoC8EZzt7spQPQnmDmQtRDRhCGtIAqRIcdtdCt/MGZ9xlRAdEAlZnEKV9i2RvRjaj+bXpJ2iPoXH0IP/5WA2Wy+v3AiSIgq0XcWSvUDvoG4TOfUqb0GOl1J2TfC53JQyeGAiK4SAZ92cKePjRa+gF/DTG9TwIqK9Tqpg0Fheggl5A49+HGM80U05PUXHSfQstw5GOAyKpDxF+qQR9JlzRSofHGLX4A5iF98ABn8T8no19G81U7RX8g0pQlsvmGRM8/9YUcJzCI+h6X6x6doZryPqZRmvXwGKx/tgs=';const _IH='52c7f245c75751e4fa260ee61c879568a3402531439c04bc4221806f112061b6';let _src;

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
