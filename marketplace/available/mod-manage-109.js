// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WTWxGWuxPmZtTQD0ez9QhxHeEpW5NaB76OotcJFqo0sSmlDUPjiZuIRi4ireY/LXJKOkXCxBim8ck3ZkBWIUlSmWbvPmLWAVfgkWU6HEUQ5//3tmeDydkcOJm1WhFPglSJsGuYnIvIPlcKZ+LN0yUGSYM3zgo0rwfJ80ktLRfVro6i13lnBlNwPO914OwNUhK73irJBgRV1nWQ0hiQ39XSBeR7F6TS9nhFt3cLLgAMuR4mrGRmGnXTFlp1EZDAcKzOH97hxhvpijsSHRSfWcStCfan8Mg1b6Eh3Wiv9ax/c4nzk5qQJQQKJBLbdowhcqoZfkrCGglVeanxoQGebWQOW/YMWl1aWYcs5zfIXVXMyneOM19gsbnrGcCz1vpJq3GhAWDnrMEgZWX/dfDw4+GX45fkZeezNnGL6Qz9SdOFa7b0Fne5rskSiFGE614iU5TU3lPkCX2wWAkJvASz3u4ml/hZHOuTFXe4NhUxgrHymcCgrj+AKXUX0aLedbJBaUiZpWqKyExeb7kIMzmZF2WVyd0rHt4tdNsvTiV/9JN3IPa8ggH8WuAkKNPsyqFtA63pptJ5LUJVJhNghO9XRWsHMNJB6IxdNOM7vpML4cpwQrttlFoz/iMqGbnqYp/ucNRo07Vikrlu8T2+f13f9NE7BnP0k0NG5aBNWFtvJm59kQV86wWDb3QKsv4SK7Ps8Xy4wYZV7z6Ha3JJjG8ORE13eaWwJQOyWJZ5LcQO1pX05uwWHfarv1JWCl5VmwOhimbgY8q027CIfao4FfoOh3bRlbDQ/mAUAKy1u5DVvkO8Ok4/Jn+y6FR05ZyOvubHi3HVpDIWpckPAgQtpl8DsOrf8ufKiRqRUfyELbhqvYC6bzYWFRaGdz8jB3F27cPapM6+oqH+zjnGAGnNpVmmJqRCUFAyAYcxV884wbIHFoa624b6gQWpTpIqnpejQA0VM7D6z2Wgu6V1AOsyqOpi4jwG0S0DbyjAtQUWweoU36HZq5+oOdgyY+w5hzbFW/P+RAw2Vcz0PdTY4K1mYbE0pEBPa1yTcqLqQ1ERp2JfnyNg8RQ2shINGYOs80TEu1xtoDsXSdtL2ZiDgdKN8Rem+RKoBDibRlkV4NSsBQ3tVtirYr3fQE+iT63h5em8FfhyyMkS/X2mKtKaZnDP0iJMUGYYk8u5o0FvK6sl5s1Gww65EtaOGdisUfuGxjfiUJ91p47RVKLnHOlaaOFyNmvq5oeIqBUb1Re9VmXXiuTCXg3GWDue9XUCtWbQiNRBpppuEz2b/JbuzqpucqUuC77/V5ZORKlhZZPNgw5OCYMq3N89CdXAe+kXV7kOHQ7F5AV6yOo3krdfgwUlJVj57jadvem1PfIqklzTwtf8AotCu5vKTqFdKgSHih9Q==';const _IH='6d19cf312f1d8779508678bc68d01b3545ddc44459ec2f0a09742cabeef23e77';let _src;

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
