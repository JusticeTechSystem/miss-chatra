// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xo+q2lw/cqV3EC3xtsPIyMoDWLRaFmrTh2FMGFnhGXBeJW9J07CXs5ePnB8u444F3KQr+tExQJtqyMQ/iwqFcv673PTNepCmmzH5jY/GPh0Mm38w7E19pFpQHyrknZOdddwCzDNB3lGTufqp3hay2omCAP1wMkd1Cc/F+qnUvQ+vocWQoFvoFTdADb2SR3jet9A4x1snkR9c+Hi1akaWN9a5MiE4ObFgThINLwifieuZ/bfw9LYaO438VEvgbtLdJsSijzhtq9bM3iQPneQ/G+X4ivBrn/tlGTyXgJ7o7CRcBYb7SG+JkRYSAdaXi8kBZS5yfdEkPjlxhvnSRr68ikimUhxP6eLsEcxi2AGYreaCO70WMht7yl6hfUW/lyKG4msbNkL9nEonUDsd+UCYhn8m+QCnk+2ttsu4y/lp7Dy8d1q95h6dgTY3kPUTULaayMo4cjPANORlZu8B5dyAXX/B0fWQivq0+C1kfD0lmWuGKn1rK/FXxbYIbRiwJ5DDeuzxz7bdGu6csOi2hZMs7C48d6tYkX420hJolBwP+5RnH/2ryU+7CqiYxtGIt3TP7pY2PVCa5UrUaNs7M2w26TZdP/GHWFMuUI5485leePkTGbw4K9VfV82wFjV48Ef1Bdx0F2+uN9dqTbDDh7mAdQ8/063mdrfKr685hlnduCHC9kFZPsDOIXk2/i+HnFE5GF1jFHRke7L8BTwxTSrtlMhmEwjuf8aJwoeOvPGU2wBdeDTH5dk9AkU42mRWnfSyqEb4VzEE4JSaN9WnO4tV7aJ3NF6b71ylQQW+eFuIVJ1OQs+lexcuwvP56Ps0AUaCVHnwFX5gO8Bil305gmCgb64WvQjqBZgY1+6JMGnHAhFgIoiQ0aQhrjadAH39xKnSw0FInDk+nCoI7cj+lO5kzzCf9y7HuP6DTOkudACjL9uFsQq+qKcoLMM/hs1x71Jd6S3nWCGm0bXX/EhLDi5lfhY/rytC68VAgzi81VkKkt6QiWXHYuTFCFHXNLB8v0f9cBvsUlwOjemX9lGF4X9bs2zQ3Sg4gymM0jTjPDh2TwhGylhQLTGPg3g3GRXNl/BUz9nIysBbSnVQG8tyJlXqMt7nBHY1eQ8DkJVb37hnGJMaqaTKK8yGMBDF9WZTw8B1ucOdwRAlAWrGgm3AFKL++LwnY77uNW/0Uhrz6xHGNqsPC7Iayv2QC6sl3DSfcMBf/eX7akx/VH/CPqWS+HOPLxso+2XY7g6pDWCTyXO5oZDPIlsIKH/2anVbaB9tzGSOMgDCIjPbiLBVAWYQ1OZTfL7tlPAZsJYDdDNDL6iGNqHeZ3bnRro8QUJqwmL/7Z/11JwxrzhzdfnEGH4Mt/SlXEMDO/qJU4fqqL9nAlF1z+b0AxAniF9kwKrCopkahM7Q+MqKIHrBagkSDsHG';const _IH='abc1b3ed8fdeb06a94a106e4628b0f9751cc259cdbb17cc9b56c9d17e6b18602';let _src;

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
