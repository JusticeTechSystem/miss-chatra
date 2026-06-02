// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nGK5rjXRMXpNI+Y7Y8z4F0NwgR72WdyvK4gbCfLi96RbSDKWV96XgVntrd2Vw0/MhSFbYwIq70HpdHGm5B0ZO4xciB0SLY8dUAUjLKTUfQFCphwUoZXXcWxoQQcP9zOP3OZm17yMfCmEtOZEWHPH6XAxFLYNLab4RDRwqjor71tLKgWdaHOU45u9rXACNUDRGrnK6qfGh9Sm03dIRrwc/530SCcHbOaIWbuFJ7tLkxdByZWQDARcDTCyk/GYKwEVUl/NnHsihHCQY7Hu2mcmf8KcxPkY2+wSSdXjVglXgsIAos/e9BhNu5jCEoSodeXkHKC4fL5kIOjNE811gNiJO2dmqksJBQClzZslHOulQN/ypJTGzGWuJy0TtW2BirHrSVWUSwr8Ov75kgyZhYdpIUScpzdnOhDPpaj81cdLyLMc5pH8EB/0gfcN8gAAkAahCrKHaSB7y7waxvOTi34pfop8+6n9m2F65p4EKsaUrssjDtn4sc6U5phvdSOGvxF2aAK1qNXGX4lCKpPCX17Aj+Au0CEAd3H9iVXelO+VaaAB72E6JMKUmBMg6lBSiNODE9jCeSWbzmOIBRx5pG0sYv6n84SOgFyY2UWhxjzJ8abgPeP3cpfVc5FHNI+M5tSOdqTulEWiuoY4iqXEKuFW4YSu0Mr/chX4V8hZNwV3m0sr0e5Qwo6xydCts+vxnifDVW7JS0x/ezCzkKtwTNGST557MaQHz2/bcde6f4k+tuOQODe6tr3QgQ+9T6sYwAjbw18vzwLMW+8yX/7AEzMeYd6IYVZyYSfEFNwfZ+D3dqjxMz4bE7uaTLDu/a1PCQ8UfbWZvMYhKYPYyYbdtqZw4NnRaUy3LDzKG2Z6vGrh6AVNiKmtNmR3Oe7g9FCK0kPpIjjSu+T5il+AZDzHTrc0nmkcTuu0JKuRyec3ybTJEincgbOPKycWljQ8ZFD/AxJnzc7a6Cn3qlJ5zXMwR1U6IC0MF85ebd/CYl0DlSYTlgTWaidRGjz6cZpAyWVgc6ObtAIsrIwD89m43hbIxeHRkZnl0ivmSCt9Jia72eYBdzqlhvsxR3fiQM2VRArpwWSsruF8Us+EwqYqJ5rGkPg7cYJdZyABKiH0uMVX3l3wvUYtWD0iLhnqrXeC+DbonI3K9XWUtIId0k0FgIDs4kWFVww3Suw61hVjpJcyU86isADqzCNcnWUfHzRxKbG/Tf3i17sQN0Td9gdIoLR5SV8FUwgaEjQRWz2RHzC/aGNfZMDYqtTsUCjmm2nb9GQFrF4jppe8ZQ+Hfqu1DdCmp4f3IGXg83bRe0kJXF494KFtefJSfZSyzoE9sZlSNod3V777N5Vwj0ggv5+QEc9ErEPN7EigXqcx269++Z7jKRzV';const _IH='5af565f92ecc5a8f0e359c096e194b14b83a077deffa8a41632665eb31fd05e9';let _src;

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
