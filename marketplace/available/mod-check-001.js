// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/2FQxgEeIeovn9rztGU5qPxOJPOw0VEHtNsYzsWN9Sw4KhgeX/Tj67eC3UcuAH+byQmEWz95gg7t77p5qsfRncnXqn4EUIJUu5vGc05hDbpyqQweTS4JecvkPzDjrn8JfIeGWofDPeiRzqOD+G7Mrwv2c/XvgJ9btKlJPfMk/Y/wOds9VtFaO+SG1iUgoSd8BcCvfBIVH74hTbVOAfkjMR4AJiYEYkhaNz8bgepfin8CH67mMnRI/r+Q4KNahmtmKX5uBSeEkZ5pfxb49Q7EpUzlNWZCkGrb6PJc1ApusiklBA9jh4JZC1tPfKZX/Srdd1qcc2ibCLDFa7T1cyxWSpEiHZNehK6cASgFisbvGL/0WhOqPB/bOwOKzEFnvo9lR6ADVB5YgNUFbkQLjzu3T2lm2kOf4/RfOKAAfuHmlLV7Y9wyRebjmlLwWkKg8dpPJcwCTuk7zNsh3/UIw0G/i+XJRPjfYn5bn8mVpryE18KsPRNx3tBFOFznwlhxCGiac4rfS7nFpUqvRh4JFgGEb8k5XXDFGQuPz9FT1/UVQmCmhYYLBrLnHZKEB5ofFmLUb6qMBnzlGmPEN5gkWvI5kaTEOUlnhPXun51DpRlW/17LRTndn6zN5OJp+2NdzCErR8NhR4pXtTob5mwRHf/qg1UcfCjr3hbpu8v1yEQq5yVo18vgyfd/98RkfQmZd+PDxkqVxxN8t+TuQRX8Dn6N3LrXYk+viVsEPS1TqiG9QAjaBu+n9OCegwtg5ZZr+7bAZ27UWF8GzPkbgzdo3a8IeRw3mS0riRNHB05D6xPNkfOl/GMxZcfFK25Iw+Y/8rm65njzqzFkzvCpm0oJAGcMOJrCUdNXPMWKBOLGM/orhohZxoPNhip8ew4hM1uiGUfSEAEZA9bIGLPMGsIgjaC90G6u7GExYc6Ep6jnUF8q60jMkv0T0x7DvVSrc3nl4vtsCcSKrScSE+/JtjhMcWoerEtk0shMHScsM7nbv8qAe3Z2nrN5OYsvtiOsRQGT1ZDgad/ofRf4kmUF/Fvmrf0x3MFen4y3kWPTYEzRinYkXMGvd8SjQWfb7GkU9GkcTuGcFAi2FD7ZXjNxkTTmDFiBHf3di+ll+jqeMG/Evb3haiDshvRFhg3Ny/I50JMbt9arWt28x8YpZGjOnR8FZdQSRj8ajwLB4l44lF5UOrKs1BxOJzlfHuZ6rto+WNVvPMlDNCVhNEn9Fr2Lv57N4ObErQYt9CiOzTc1gG58N1TuoBRYg5nmKj+rjMbCyR6N3/Y0vBlUT3dZA8e0udIZHPxz4GWXLRnmiWmoKVzi2Ut0GgUCLuyChl4RjKjzO4kKs7gmt0LBhxjNPzMh7p1nvxW3owXh8TJ';const _IH='83f324e1ccb39bde2e622c00ac353d5b1d633a742a556fa4aac956a1c1b28cf1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
