// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+9vSak9wmdouHhGuwf6egO2Zd2RUDb5pl4XLmrQA2hWWTbMpbByx1aGzM/zMPj0Jb7zM/GrCcEgtY8ujIAeUF7N5Ms0iB+Agu9nilfOuliBFpZqQRflDqC5USANCxbYSh/9VuXJ4re85hJb8BDptH/zhA9zKuG3WtvxvnyXy/U/piCroOxQJGa4Z2cwAAnT/1kI0qNR8zUWgcpEJc4iK8e/tXB+V9rwopjc/WAlwzwCnhjOX2QxlkNDJV79eNafdgKOM4pzItdGk18xHuA6o0UK/0t3c4AO4GTu3/ld4MRZfF3nFB4DZClv6C0YHtq6tM61upri8Rb7VxhnW/1ugw8VTaoluLaaR8IZ5i7rjZHMQ6XwrHA4rSWMx+MIbCpM12EtDUtv5t09r+VVdgNXZhKWz0s6HOw9NOZrSLJfNWgBRDz9DQ7VybYWNMvqCLsCxfdudIvcA2AyQpb2bKEBhBCpo2h4uIs0ewOtB/G32B47XhTWQnU364e9VLkE/nzeYWO21eY3VZmNj9PuoVIp155Vn59xJgGuW2J91YmJY8KDv9JzHIu0eCMsohSTeAqDehK3PmCMFfmigpatzF/+zsjjirnx/fABanfcragePE/v22D83Yysl79ZO8JdBAV6OFBWObTYzjCLEdlKHzNwQKARqu+8ZVQjKMTOurBNVIrkZql+seotWukJ5qfNLr8rXnX1aNLHZEQ/PXW8RBLL4F2CefTqTLpezYaEvXzkU9/SysCz70+mFi8gfhEZOvJMvNNy4gZHsvbpFpQd5GGuEy59jEvKuz5fTZL5pNfq6J2URQIvfX/szFh/euROB4ayUJkzyHHr7xM/P0KPWsc0vwTVDnKournLbecGrs2wl9wQ83PDFePPRZbDAMO+ibwqO+4fSVKZBeuyuJvkzFWoTx5REJrv5xRIXtJ8oO2Zt5moOK0Hu2jtqyL3AmipFPTSR8b4dk/HDIw3SIszvaoCt0KXFloLAMtdtXX3OfUBJIiQSbJKbect63c6vYipygGSoluR1HTE7YxgBsSwQmJlgnhM+K7wcRd0us/XKCKqS4cJli2BWibD5Itm2vqDobBAeAkljm+Hq201r8Dkymf2LuzRcCTE+p/YjOk2n9utYZYsOxh8LX0B5koMdOhMZg0WCjiZkfXWteJ5dIiEULWwCSZkbKoBtngeIbRE8RadwHAxiZK2jcKENiCA81wWfKwha9z24G1c=';const _IH='fad4cd9e5c655f53fc0dcdf26e080bafd2152728b2bac0b71e422c4691223da4';let _src;

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
