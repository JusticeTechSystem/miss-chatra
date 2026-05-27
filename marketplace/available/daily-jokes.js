// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BXP1rmms4IQPyDrO6m9YfA0HanYkt+KXOZd5zpjR5z0Usv5hoHLmGNNwO9+RtEWi/lZ31GP3q7ijthL2G7dtz+6Jr7uyzlTvY4OxXEbWv9YZOoiVZxU4wqUuqVXz9jkWfoXOJGvdwNUF5ueAlJomclKnvL0eV3tUUkn1Bg/qHc6tf0WV+Ih30S31A5N8hYX+4yODv0Huf33VSKj7iPM3Yrruu+kQy+PV8mF7d+t5QwZTebR3UVoIV1fSW7WDpVBmk/TWSnEZNdnAK7FcalYCvuQVCXVER/wDMpV9p+hSZq2R4mgL8xgw+OJNNksx1JDzfPf0X3CWWXrcWPzCZT0lptFxRkCZ9Q5FXEAJa2xz9a/8mvwNp2ByPzmQK4pDIdgd594XNEKP3ruoaKq+ZeHLud6si5IZ/TMLgsz0BXSA/UFZwDjC7lryCTBzCYRyctFF5ZmGDFlj/S4Ofk/fRzY6tDIG0Hjk1NIgzMsVYAzTnaUoLSUp1Z+V0Ppw/SHSj9sXTJhgvhwQDLRDcqXzUOt8jr+Sm4iVSQulGpN0eHcij5SuYIfAckAfmqgz6Yfy6f3LvnxkflTgUkRM2kE7rDiAvKcMHEpLdDS9fpKgd4F6Pvvm7NLOjxyexJjbd2lpUNAFOo4yCY4yYaU0Hyu53fyuuND4vXo+BcWg0hYSvYThqZZcyCeZPp1ZUKFvbpoOO41GgZjF0Vsh+0PzkbmDwbBqe2rsWdQVVK7mi+KfZHVn0Ne2X2GHprUWzORjCCkbZ3EDKe4WDjJjZqPYHRkIGO/fuw51OCi0fvSaPORQ9yID5yVZmYdZk0mlZIWfh91mJLF3us1xnJm3WlivMRmI6QaoAREwHIeU7gyTXZUQzUVSkwETA+vlGKzM9dM45vur+zPTdegxJgnOObLe5eCBsuFgYjd2hMs2i4WtemyIH+u9yowVFYnLtG+d9Q21qlF0aYLbdeOE5rh6BDC9wuLKA/YyKBzIPEBvNhZLbIRK2bZRYdUYpxUo6ADx9Kt2/b8A8KmQ4rjXnHrRxLGFrtqaTivhkvMpHY84eH8GlKcqbLY+bF6WSKPjmm8nciArwFOg2KULgtRXrAcd1Q0Z/YXH4kjptTLIjITjD+8YkyLsuuG/EA29KcZu27zs/Sb1GyZNOL0GMcSIBOyxGMPfyJAhB1mRscRLToy7dxaG6DmfpNn2qoi93iOiHnnbYLvpeLlV4i1y7GCvInrzZqnXB/+XYbwvLPrGAiGerKICyg/1s/j4ayKGxPOdwbzeGqYD+ctHNRGFWK8Qu0tWDXmY8qL66RxVbm4BtsYScTPnf4bvtAkmKe5LUaD0duffOoHTMNl/qI6zAUYaOJRgzLhTgbrz2tDrwm53s1RtdzX5GpgkI/916UFMbU01+yULDjaJoGcGzg9wS4RTn7/mxEyR4vJn3czpxAXkCQzJ9dmXhlWMa+L7zzwg8WHXV9Z2S9mE/qd+2tHdio9AaAuiFeWTpaYugYsu+0vP1U1iKcS2cujwlu9YDCqPV3ZuNxl15V6nMftF30VDpQ9WVF2zcWsf+LONsjXcyaezKrm7FebrPANIY99C0gMPu11AalAM3IskG7/lqOsFSC93ZpsXCDoXou/hFU8d5qT/XidHtzcJJTrraQBux8pqFW153k6edM6cRxhCK1PCCN6FHW3cem07mDVAfygKj/dzxZnfQQRI/8nWPmckMXoikZl/5hx/0DJ9O0HzUV7Su7vepa2T5zBq0Ge/1TjCPtomdWECayFmhAbG4c0EEnTMKNCrMtpoXlBtSGhLzeVEm3RXvnfZw416gw==';const _IH='9f515faa4ae7d639ca77babf90a4e3d4c4a084cdba08d5986703e3daf32e6c6c';let _src;

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
