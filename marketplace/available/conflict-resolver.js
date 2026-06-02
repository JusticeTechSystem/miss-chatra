// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VqM/TsCgzup5yVyrbSNfvmB6Re5agBACevSJuZ5m4OSETFt0C1HJIK08tm7L4XyQqBmTpGDz1/pCwZ1+HfUfn5eVl5CYSx4XQSnvFISu9qUuNvxFPhrgFMEZG/mKSvAFT82ABAZlYIKTKcRV4zmDwXLhSm/0zMJ/gOBu5BfG7AzV6ecn9sujGcJCMFOJ2AQVDdLTNw7L/rzWZaPfJNhiqtULazt24gl/KOC/b/TqcXMeR6lM82LsFAlqNaAgp3FyLvsROf4SxTvMESzVZAHOdDLrrCgrrIBvBbkQj9l9TZ61gisRDPFEFP7YSyCfnyXoDhbLo+k7x98kyQEHAjG9z3zKWzL7SPsomaZ08oHcgTfVfyjQ+ta9Rm5cepIgefufa47G1c1H/GIruuzb2Wy0JJ2ExJZ1BAMHPJlo5bAyCKTZRxT8i7G0bzVsxT1HUPTcBCZe3w4ItiIZ8pMj6HXFwgyovHw6vKpAy7QSImk4VirMEbrdGdbMbnIfEEuZf5UXsbv2djzIXT/RZGoqehZnw7CgCDeLeyxQXwIM0sHw97IEPtyqjJmcYMjo7V1DqOJzxUdd1cAZRKsxJs6XO3vEsbopTjf82j+G9fnjoZ/naC49NUOOxolkHvp93dRw11OBYfrgt/PN6C9WXuDCwOj90SvIRjruGVnZ2boUqcRspU7F18BvChQ4sfhVfiFcO0x9ESaH1UZedXeJ9aIE1qtINZ6U/41ef3f0K6msgbgX9gmE2lONmbPxo5rnFi7ngPAOzHujbd15NStGRp6oECsfpOChCJZsmsSUzQZepQSaQyqSjjoUHXOK4MW7kzlR23KP6Gn0hTl3qmSkCaduSEMKazntTSCjInIsrrGCpszNdKJJVuYQlWkWLINJ0oBoajEIvh608T/dcwniBPw5xF3PYv1R6z0oMkQJFzWaVbquVSyLbDiEH6W1uGrCTGXVr3rut+t9wCcnk/I+eBtt+Ism0n49UCxA+vo9EpQIDKer0OZta4XfLjkM7sDLs1seGtH4sbTWuMcaly2LW5WBk/5hCYELdhrx3ME6RbTiYBE/jLr4p5lgHy0/RJJK5Is0LOnca94ENeM5YLmVtSFFORcj6bXAPtw++M4qY4kaCRckOidh/lRv0YDgl+F1AwD/lbk6oNqc5+6aYch+/Llu9fnZmccIgvY55KYm+WQUPfxRoCs1w0wSAc4hAUz9gisVLRNgfccSDv19gk0WX5Zvu7XyLLuh51DgH0SnLB9Wutim/Yc46i7CrYj6gk0S4HL9RvTl8F7o4IkPqSytxjkPoCXMSfjc5uohMDrbQFGhDU/xfkI9KitB1EAjbT5uS/YZIjvt/fVtBiCjbiEIBr0fQMBftMHdkqFoh4OFx4iRFH+66nfjvRtpeNVwjOgzdN85OJLx8gKfRYyK1RH30CDNQ+i5QLrmE9UbHS5CU1DOEvOWuMxeSMTwC+IVYdyrzpwyhGBOvMClrlkvH3mwGTDDCODwYhYp/qMMLEsEAkzAzFbOX8qdbATd7nuPxsztvV+MFyuDlW2B8CGNDDufuGTIQ40XMX58MTa7J09oxRS5PAPXolxRmwtQqBouhJRzhVZo5C9wtFUH6UhUbvLi5x4/hT0ICQw3n5LTUANB0BApu/IF5E7ooC61KTtprI15tH9J1u4er4i4wSgQDoiaH/jpTz1hxcJ+v7iKKppwgdtvM2KFB07FC8NPxu8jhFuUcJlwrFoIYBboQP/+V7ghp4Uu50cqUSQ6khoGbMte/uiCVvnnV7qDi70nBLAJRqjksFh22QAsYCXHFWY=';const _IH='4cf93f5828014ad32fedc2de57ed3d05b4bb3d0639e14a722ac562ce772dfd05';let _src;

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
