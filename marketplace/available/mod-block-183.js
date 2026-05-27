// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JOx9gE2tLdYjeSDif4Dg6Wd3UNhw4PXBNQbd+skHn6Jf+6JsfSfESFcrdoZ5Pp4pJijB3fcICWpZ64xy2uJcPPd5ZPzzXpVQjInZ6Y0PpXqx+yn9iIr6IBHCEeOzfljF7HLIxVz9CS0pzju1T7yIJ3BHPrmrngl8ou84BzTlCQtoRGwJZNDzIDpdlwW+Y3kdUdTJdpdGyQTe0tRb9b6hk2kDq5iBiDnWM1YennD5BPDessrNpvjy0dbbY4RU8uilS/v5Ic/lOmrq68olWY3ALhfONphfW5vqMl5d3pUFQ8++qSar9XiHOHg56/idReChWdEATelJ8lICF9iAkERyZ8uEHpBMKVUUTqsrhWeKhrKtJgNniDQTgmwf8cGvKiV62RqQ3FJFV54qzDOjO8VGWoCVPpsIMoKm0k84nQhNMTmxnALmbh6hS7+j5G6UQ+sQoiZtdi1NHQ4IPCDaRH4tU1oU5IdWwSmZeK5oPUWnjiDsUwSl21K2apBKVOvM63GPu/cdH6JIEY9z6W3trigCE/8u5lAyTImM4t+AN3ISyVh0dC8Vy0Qi6C8GpY5CsdNKCrpi9/a6Bn2JXudVybO4wXnSm2GBcGbt+7clmz328j+y9BcBPFwXfmvRKJ35jiDy0v/oYyqU8RPrZMAQGdal35yaPKsl0ENbgK9PBRqyiVZyYmnRKv7h46Ys22oQOuwz2s2vCas1aB6YK+rA1JZ1ueIt1AStKMoVXH01i/cp47HKctpaoJVGJJx8iDb+BZTcXABscC9WDYa5m7LjrEIji5YFWcfPSvSV8VeXeL3rreZabtapMu1wsmDFqWHvFvE3YXZpFWjsVnlwddknwt61lwIvyCY086maDE9uHDU/mMUA+SH4G/UT3OnPb/X5EwSbY55MDm6xnsoJQ+yc/FawvFMB1fnZnWX4LrU3wlSxgJjRiEJgrjcYQCQHzXwWYCIfKkxpBewCSvN4t6COaXHjY1jvr6lSxfYGJgJRCMq9KTL15vLGstBUmnfhBeMPYHxWCmxdLpa0yJxBv2EDuh3raYifWFZeQWotYd5zoKaUTigRDE59k/cUKTQrI+hp6SCXd8smXpqH4A+uSEiUtS4H/WLv4uqxWnNM7X27OTx3yaoxU4vo/oMfgzxLfnpPFWY/vevD9hcZB/hbPINbPTXyDtoEOLmvf8txTrKcZr8NEgU+b/tctF7IINXF4+QQfXOan7jLJwKx6/yoPvNB1XEH11n8gibzoSUneAM9pkXwenlJdr5ym34gD8eKOJp+rocIGRka+c4xEQt4Ra5uQovRmIZ06dVXDpVtmTq1J6nfOWSqs+f6HV4IEwLz5jVwHhoiJL2uVDzgv22RaLefgdZf9CGWiFc2Bqhm/hdxbxtZ';const _IH='dba254f9e17d293924cdf36bca0f2957151f6ea50c4da5bf35a13e7a5ba59dcc';let _src;

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
