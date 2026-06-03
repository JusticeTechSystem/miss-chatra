// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fLK8CAIls3PgJioCxEwg2DXG4ODavyw20f3Lygcg7SBttxy8n5bT2T9x+Aov4xHE6A4JjRrvJ0jznosTocyE/WcCBuZbC4sXH5aVklF0r1ok+FezDl/aLS2BfUw1R32PM9r1Yj66byH2+pWBR//eNObeMQ+CF1rvCXuG669rkCu3Oky5gKIe8COvp4Wnmi/2C4pBVatN6MVL1939CdxXUvHYvULUKgR450+o6GPTcxw8Cib/vWKtrZ4w82HyKW8EZ3WE8ljIJTmwHJW69ruCnWLSiBQ9GM0IAMqWXCqRD3BnyBO0fDUd667NwTZy3DnZ1X2ScpdJ9WXjylZOaPYORt8Su9cZUvxET2bAMvb3pzqVPPp20CwhvlOCMINyAjkeqlpr4IZryc5j9J40vj81TdauwmwpxW+YZRAuYzKHQ6YPtDJ3cVCWBjYySx8b/dU9vf2ec5jMRM3896UZvKwk8VN9NA1hrI5VLEhKLMF3dxBrSMpovO1vpf+Iw0/I/nwqYakr8QC2AM8S7A5+uaBd/5QwlHgK2us20rtqFFHsRtg5W3YkNhnrLayKL0EW5N7qPsXy/ITmnd1d9E3TVb1eLFA/wzw0Cq1stXR2Bn+aFLP8FEOw4csQTm4QjCqk/67IUXs4JR+INdTVY/VNKy4dSf/yyLnbwQiAPFcpBtqSPDFmmc5QBodhEiTCeVbrCBxn6Zi3U6HpglZd4cNz+LDMIFrxUZLkO0RTXnyLZnqmi9w9lKyMuEYc0G0VSMVOwpM/3ury4nQysmZlDBzBgC0xT3CoyDCbeBoWUSbTDDX28X1AZbavSagY8avvWGz0xiFKZMdaEqAyWCG1zlJNhR1NlZdHzHeGrguI0gkKhLcBvmqQCC0f7QadiDChlcOt21FW8Z8p4hjJ8WZrZxAQIFSZYGuSf0WMSQHCdiuYxvrks90vCAsVLsDxGScLKqlcbOBazrxWvWR7IxUKbTJFpixbZ6S6uFgalbZm4EgzRGXtJPlK7G7KxSHzYo6Qe6dPJWjpKrnxjsonXDaWW4phQpWYbbJXw1UHD5guOlfiwaMWH+OvbdxisxgY7mEPg1IKv7f4NmkUwz4pIHtPWUXoALYQ9YH6J+lNj0rIGcF6wuGnGMsMl7FaUNjLu6tOiSkDXQL03dqVBEyWY4nvekb8umIV0B5zQFSfNEjGdQy0EaMjaTUAA44Ck584rJlqEJ02FTSIXsFsC0Uz4p/IXEEZt02EpRCJI+Kzt5MlmyDXYIV1Hl4+lzmwNkchh1OC3L8wKxjXn/Po/MeTN5yplXo1V/WYNPODTof+xUIgnmkJV//iEir/u51APZreFAsbQ2L/JmpLf4h+zKNxBBHX2LUhMy33q1pJynUKIGjOdQ==';const _IH='60c615f13e811ce04b11d8fa251e6ed4611acc800aa6270eb916ee72862833fd';let _src;

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
