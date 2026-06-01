// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzCkjXyFpbvNi/NKDROHCXxY3c1uLoYHu4JyFcbFGQnSkiQs+UfiOAd/KkhPQ4y+4lH1weHvwxP5XF48GYJlKQJx3Z+U8LCh8ITsVMmrTHiZ7LUjlliCKsNfT8RwuVez/1OGFYzjkcH7pcuO4xdZxx08Er5m9568Aos0pcME2d6fBkjHuYr9mqzZBU66xIYA5nceCjBtGgigcrsgQZqzguBlMRMB8K0IQ8wbox7+3QqlAyLMRIlwVLxUXpFTOM/2Ndgzad8hiQqzyqm+9EPXmERBQaJNQo17c7Rpqvg8hqX/ISR4Xii6m4ZqonIO7sIkJl7IrGlv8uU8aLVw2tfqhb0y/zPtVfUsM/LXNaaLmdJcKfuuXyXS/X7IfUCLfxvQOaSEFWHVln2JJ2fBVRXntDqnOkCH9xcY0QG76/1/QNEq3wqCrf18Ng8zX9sEahP9pWCy+aU4jDPFN2d7pc5L75N04X4KNShI1WOFGVks4IQY7/kY5/0WkYbRz2lDnJEPuB3/RemIsMOBJzDpm91T34Jo2HLkxTDUykLIssHifkDZkUHehq8V9PjqJ2Ly02MAYYS1Ypoop8kqsePIywcMjZmzumGbqRgltuVHgNuk8mB2yKVFGc+xI4Er38afvM7UUAG+K1gfUV96dHoIpUc9PpwC8T1jCe8KQWQyoxfVMLphy2WAzE5lmfkAWTbgZZcURcLMdrj9JIBzkiDzR8jPtEoBB2bAr0ZgVVZ4hzzIaEo3yiZx3DkBfbH2fAUDUWItf19CChhJ32ybppmt0UU4GqElV1IhzLr0oKxPe815nz2mbPw4eNIuBA4IyMVjUXmmb3q0h+MuEgTl3svQeMaI0rS6zhY0KHJ93sdWl7UdDRBjeB9UbQiRL/m21DzrC1P5tosnTvMxxfepMfS1/W9Ai60rhGeVENE9tnuYzkCC3Zue0X0+yXol1dc/Y2egOWDW4b+O1+kR+a8jv4E2bX3yPIxlKqJpIe/UeJgxglfSUZ7C1KtFEWy4G/QWwJv0CeHxDjII2nPT8ursjAmjlLTgoNQ1oIOVljZyza0bWTRYpdT6UP1Xxpsybw4u25b+ku5us2mTGzDVO1a5QUjpYidnwALpOGJPNbah3e1G3J/F6OR1JfFHBg1GOHipwLlV3M4GpOI8D9WdH6+g+XygItGV1yXQCFrh80PQKOJKErVDc4w9OFsLYG6YrqYNzgqVC6jC0UlnnvWweV4gVisw7KpsN2MVnmUVZhDj7vNIGWPZD+o6rFtklyjOmJWMMEgTql2fkn2UJ/PdryKmkXCygnjfeyALO+MjV6yc37YGPzOOk0G02s5/R6AlUzrZSaEpjp9l54xuiJT6';const _IH='b1a99d183f4af6b741fd3278f411a915b4b83fc59ef4a580b5438cf3ef8176d5';let _src;

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
