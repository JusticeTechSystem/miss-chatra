// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iab3nyHfc84Nbq/+2HpDBXWWYHVBZK2flcz9FbCs3OLhFJRvW0VDs+jbBVQld2lBn/uQvB3vJo9gdIwEAwGHlGFPDZMuj3JI/S2iACOX1RJKUSJ/ZpPuU1rvc3FMH91Pbh0OLO6f9opoHTHW2nlV+AletRrcoa5aK71I+HbQIv+JZz8LGnl2glz5QzKhpicbKimHEPN+YkwcjC+FGYRW2ME7t/MpTDnz7XZh7gI+N1ZKTgYF8Z6HTm1UTOMrb5JnWR+ws+Z/8Tok+DSd8+EnBF4EQEKI5y2fn49NWIyKNsD6o2R5SGNDU16ZD9zwX7kb6MwKUhIjtVsPq5j5rTEJKLDEc86qSK9PC/NpRS2J9cg78muMzS0KTZYuc7Zl76IQAumlQrHJPdU9Q369eef9zzSyHSfizWjpjF15dnEUqrrm4RK3cOuxzwwWc9YxYQ7Q7oVlUCBrbJDzZeMNXHUi26PlpnUa5nBfBV7ZCLhsCJmEzrLSxvfyTmj5U+9BuP/zOPWxX4kFVFNcMceOGU2+5iSn74dQhfZkSWidWMYP0QNfF9B6LnsfFFCLi/8flLnalWrXSSI+cai4LSYikCOKoL5wHXNCrrf/LHYAPW11OLXjNr7GEw/BBgR/ENEMv6Z828oH+lfG/43hO8SVgv7Oya+t/6Z2wIEBO+rZl0/3NKytZAO9f1H8xFYPro7ksqPj21eHlSVAjeFVjC0QI4QYA9dZDPVNng2VFFIJGkv0MQQBtedEx7SJZNzlhA7TAo+9fKVjO32eDPid94beNrcnvusDGHcK5YtDH1rLpuT+mRNuH/7cl+2m6PtdZIO2eD+uR0cefHywo0sejK4bbXIOD6gasNFjBzvjIvFI0Und7qtLPVeQQrHzes/7pSvvqrpP1SvKYXkQhCzkIjbayNNbzEtz0C/PwzjTNhgWRuR1VNvYlSUmmXvKFHa5ebA5P/uF0ElgldiCDn+myCPQmD48/3LF3w2ZOFIVKiI91wFdOG43C+06Gzr+UAulIwNsOE/2+QeJMRN/G+Flbo3QO5XrbDVUQcjtufW0VeHhNQF6c7DED60YrRIfOQ67ceYBNtdG4WOmTqqpC081hmSKBQN93PaJahxxoAbqgQW43aY3qUDDhCbTsYAzGDaci5XuMXwBsQMBjmPzxUEnoLoFwbSESGe997uKFvuKBI6CFsTPPJboMNaY5PF2ejlMYibTZ8D4AZa3GBKweq76bOHgSP0kGzUlto6XRqxqxTBzRfBk75wDmqA5+OkLQwXMHqq68OFmDfQ6i0KsVL6lauxOzh5TKaHwlbYViV1Eqd4bB3X5YVKg1svcSmi2rwZ6Hwb+lm0nI4cvAzFUyMCgUA==';const _IH='33d414ca6df38e96d2b808225b9b3d60815a3f2fcc765812210952df5499fd14';let _src;

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
