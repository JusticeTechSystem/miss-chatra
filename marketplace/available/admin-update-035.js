// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eHdY0AO5EoXqtV1/lam1t74JFFhVKQWxnce6QJZdhgA9lT7OwHKq+25yrJxDSN3A4667ps9Db3/L5QhTE2gSq8cNkTp5W5f+NyCAxQeSRJYfwib89XVwL2NsmilaXZSlGswfdcuy9Eiy6R9TySDmd55Xaf5/G5w61ENW/yupp8Cr0bAhSgKavi+ShXZnItnIHpegUWqhk2UJ8w4p+AHx3uinIXNXHquOQyUSguXlw1Pjge4UtOAU1S/El1gF8/zRguIk2c3tz4YQCtr7axU2Ie98c5iEyEoje9ix4O1MqlsLMei/DcKilHEh4GMHqAT5KRF87YUjMgm1m2XZVn0mGBfGeiF2mxrImUaTYJxY7a16tZnF4l76OLNbjj2vKevIsCvsfXe7WR4nbyaePKhHK8S4j3JcUJAj21diubGaDOQJWBjKaZ8UuUM6SnETLTjsNoeecGs7y6jTRUx8tz8bKponnRjBZ3pEtrHs5UWpWEx9eVEiXwEFGsSBszfC3iXiM7SGopGEtWdloR89ujyz0+/gsH/VsFqpwK4XpLuvGX3M6ZgOBwwOdnF1iPKUGbmbOhnJ1r1+HkjIoCKsi6mLaUiwCKcRPboeMlgtb/P4tvayt764878evVRx9VB/k8aNRyTjX7+I/9y7rjpVzjgwqzjeWyPIvQz8JLpeOV8Me5UmcKIpUTK0gfPmduCOmMlOEeXvZ2JLExqDmUcCFACyeCMv4BvBuoqPF/FCTbfaDc139jtjPYUZYJx6BuXeZJRXj32R4BZ5VG2WGLHGQLOI63AeDNmDoJiA9fr1eWWBeb0XfoQvCDfXKsXKDBUP295JlL9UAeZUoGctH04431T2gG4pvmnKAPKS/KjfBU2aNX2+56MROmpRC5NWcPDUw7ni9rmmqA20UztO0UfWDN0JjbH0uedPDAgX43EB2L8gIimpM4QZtwaZXa8dB2xpmEe03rbcjmhJs9ReLxMnyEuob0ISXl5tqRlq+8Fsx5kRDtCMfeCNFBdx0wJiL7Yk';const _IH='1495f1173f45b3ca6c7584d734fd669a44158df8f26e14c9ec0f36ba34240de2';let _src;

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
