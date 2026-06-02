// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6povXQVrTmpLzDDZ+ZaZIfnKgkqOLQO4qJjJgfslzbaYxqr4MjcySRjgwY0rGVA4ywFfihqmzqV919QUpF8y8aK+EpPIW93HsUxyI3MQbMGbAb/p5UeYBAjd2Vhe8BllErBdok10Gu2ATHBlkBkL+6OkBYaWcxPtt+Ad+eLNqHjAli6zcuCZ15VvvMw5vyMBe1j9VGX7wDmAuAa9cw3xx457ThNNpbyNhBzZsnv7djp+ILuXNnvlF1C1UI+DQvBcA2Jy0pGp/NDaNbLi1kyeCQ0+kToOei2P3UsV1+blZeZf1Y8WhmtY7b164uFD0SkGOwGjp7X6ivFIEH/TpVsipd3oUiw0I7OJVZNXoMCJ2jNcHt5hEn1ubUZSVGeeZZhn8nmEuFk71vcu/2ullvgR0BXciT87nHG6UPQLrDfTQYOnikGMQZyfKj5PqHiQQE+dRPR9laDAonXD3UODd6Axf/81lA4EZyLYWwGXdUkznMKftIXGNgntuT2hxj/gc5xH/BLho8S0c2kR5Xo88HqghLYn2kB0TtRhqIpemTEjGGI5MRtNRpVcfW7MO+umjL4/OTYs1oBrEI4s7LtM+n0vI6dnanHBAh8LgBtpsLbv2L344l9zytOGjes1AXm028lAJ11WnYiVrVWG4ys/8CoEQplRC2bWMP1iFbwcVhRLnErgkCMm3SBMBD/H+Hqz0d+hafUEOVVCjqAIQ5w+m+VbeGMKU9pfw6H+DCxUc4gb/4INxzBc83To8NSJVdD6i3cyNXrvPqrSxX2tN6PKgNJxdKkn5GGWrMK/OB62c2nvzA+BMryR6BxZk146TQt2hbAgaeYes/YUzWGUhEE+LPpLnhb0ZwF3TLmb68UmTDBawuLU/5mwW67X5OV579XpVlb6EzwacEK0G3YuYtJa2SXjfsBDEu7uSuaTSdKOGp6oW4wj/Na3eEnZZeLu67f8I8KwYFbjb8M+2OKUPRx3aEevvds7KQLsv6yEtSsayc+fY8GLJS2Pewpp+lrqH03BeIaCcufrIqpJyp8h2DDSoN31N3L4FDrYtXVFQu/8CNtG6YxRwJZZvmrM9AXij1kOiKfQkZE9OVGGlFWB6vkcj49yoJwQwP98109y01YR9RTALfcjcaCFAJobWTn18XdRfvVMZMn/uWRdG1YUJuNFqjyNFyWn6ILyyRa5ds9bFXPS2n4HACTcDe/+qzMtJxxDhEtj0TbpyJWqTaw7MmPziXhfizTw6gimxYHhXmop2xBMBAOXX5gMuC4H28Do4ySOCDNK0d1eaLF/J50Kcbf+9Qb09SvcDDPsAt1Vh1skyNVc0ExWc2OWOyYj2yO+v71RbUAsFnXEI2nOIHqFet8MFCiou6lrDRoz1ZxflDnG+pmPlDzem/xzASoGW+f1zZ01tmqnl4l2pd1t7fJ5jzhbG8U0CnhDm3qmaJPNXEr9ZpOOt2rSmPauUc5V7aYoriCvtX6IVVK4imzjnT5eK556wEDgzi30wRUKizxuqnh78Aa3cvukJCLlJ6/TNP3kjeQCyj+HS9tzFcB5U6cZbEv9OsQLd21IWrunmtK3sH/eTcjy11k9OZTaqcNI7gjIIEofbT3ecVTNjD9LQZQMpwHp2B2e660IIHvsbbNSqRG9xrwQquybFC/smhN1UjHvB3+tZAy80iqLF21O3y38fhL1FBZRDPl8xpiiPTZp8IYuUg==';const _IH='413b59a273403de74d45ef28f9066109b734fcbb0e1edbac2b15fd11b4bdcbaa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
