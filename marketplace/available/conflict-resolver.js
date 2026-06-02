// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='82jo59gLO1sj5U7WPoOgPazCM0+hd4QPeanXFECX3jbtmzQV8/SfEjQ4GITMZdRSVoQY7lHp4SrO5jpw+w4Jy70+K0WhyK1U1LoXrd3DalP33uACU416iRWdOKWI7TzzwJqZU1/iAu9ngXisPXBdNvCVlobIyCw3V7kiwg6HgwI5cP7bPi5xAHkOxZ8Ufm2Fd8CzksN2vmcFIBAyAQ592TORkXKrHgjiMjNEjzWYm3wsF+sfRaTnpRxLVDDWBonFwPnhp+AFnizFmUJHh+FTuSxg02NfX7RYc0kV9zjPPPaZDbIvsfU1fGMHkInysyt0Or9N43Nup6E2E1Zas7SkX/oluCZ+T3BiRz6ulxlT2qUN5TqOP1h4115Dx7KRLbQvQw91L//LZvp4SQ/+FYdDdhdqzfGw9KJOV1YfLNkNk3HCr35mNaJWfmUrDKcWioP9+FS9tg6kHgheDFJ3EzaVDEeHCW6dVzHZGjXpJyWky4+B7Mpmo5i7VAF54Nbn4oHXEpy1iK1Ry8ZOi0tJioH6r1lvScBFbzYzgLDLDC8Pw1fS/2ctUvE6Y6WlXL3wkhGJvwP/85PZ2G5q0suQ1qKGgjhvGCrUL5HYCOfZuCRl84sz1W2wwJvNcaAfF80dQeSGlxfSwjxE8va0/pdeWrU6+kZyh5eSYfnU378yH5CHcga1CYEbxpA7rYESL6wdvmqAsJMQXQg88sx3lEubfzCLl7+xXeyM0hvhAJrUzKs+cAoW9ETyc5c70vx3pbbwsVfqmwpGhxlPABupeDvPp2q0ZCVfH2saq5NX+nkoz69fa3WSv8Z5YCkclmcizVQoCGKv1Cgs+xyj80A4NFePuLCi2qp3736e8OCTCbxgcRxZmeMEPw5j8BGdjRJjO1wVDFFKgXFVktGn5krOiPgPZ+d9SV+WsZ2vs/8Cn3Ym6vnS+8IfV1CnOJz1uDqUP5g9LV3U0t5D7ULGtJ+j8SeX2nOOagk+pcnthvtF3+a69S8bSLUBpi3XKZsjSMJnxJ6flHIrIniO2yLvV6ja7CibQqVJbTPRq1QQErnoUlchCQhikZHQoB7K/ga1HiFBtBaGcYeVhWFHVZqe5d+/3+llXogtFtITWL0UXBgkCwe6jA1T71LgB1mXBYtS8QTMS2Cs74eXDJnQBnagnTiRSgy8uCPqvO1iywpLg4BaVJHs0DZg4eYXdObPq7WkhOXvahAWHQ7227sXQpZnSGjdnNr+MPwrLCr637TtMjsYHGbe7cQ7hcSj7d+Qw9jUD6WVj4If9MOKv7gjUiSTOlJeQnLCzC5oR1rsEXck5TMYJF2bRWI3Cvvjs9+G3TsmRLUpGjMSmB3umIxSNukiiyO8BCUwymejUJcjaspW0HQHt3P0Hsp1eaKyaaWZ3XnS07HaD6KxTEpGTNPLWA06LsGETey1xc925XGpZiLF06RjqzcPltr2OmzNi3ZAsgx3hLAPJtCEddm9ORAjd2BtFPszDUb7IVivDvrhVYJEKPpzc1jpOVJwSKDO291amGiIE0WSjcSayhELxz1+QxkWW/iPw6QiejpqePLB0yVn25jSJ0zgCJLje92l0yuKMsomYDxfDAn9fsuNiWa8lFI46qCkr6fZB6vyOdHVKNshEISc5KL1svHaxyINjQPLXixfWWEkyZo+WeIAMj4thOo+IxAzhMfgXNxYkGDFa7Y7jlhL08cUMDKAxVoiAQqfBKe6xGNgL4T/phE1kGZ9ToBfPEeWzxJJy/exxRjXQodF5QQGDro1nfzPlVE8IyvraXhoyQI9KNIvLqS8pbuQQv0=';const _IH='06e7cc18b6558fcb7bb6170191556f4e936cb28b659682e57334bc6c948b7e4f';let _src;

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
