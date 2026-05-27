// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gRWDN/keRloCBsl9v3J7802MAIjsx0wGtBfGN6lHnGHwxtdqO0q7l4jGrxIn16kXAt6GMDfWUfNSn+fS8y8a+G8qZr5jAn4VxZ2fokS697e3E1LtsWh1wyNP4GiZ8Z0hlSi2bzWwDQ8zOj1nAjPR5JETEmqE9PUhtZlIjWJxP7G1BjNm2uKJi5ga0h5DEbE4Nn3edwggGTjsjtOUobREf3qSkKK7Clo8JKzl/y4ejtKENwm0XcB8+bNRzKsVwM6H5mKDs9tq/3+Wptnlj25qq3xTDc7h3/7yFrYIbpRZKSDCYd253DRycbmZC05dJ8YZBgSj2J1UDscwkHd7J1vYbLT5gZgA7rnPV780swy/nTlxLbHVfMIjTl2xwbiNdLSoDrYZfIddPyW0OVo0d2FFxc8DOfwE2jIxyMTKLqrhtLYtmxEMRwPTicLDlhknDY8kp4UjVmskRFcFZKwTZfyTFkpnIZOe2K/o7X1j/fxhv85vDxZB1OXuDabD+NDATMvG5EtOJVA71pt3lv1fIFxx+iJqXXWLKzXgK7sy23JJI94WRRguWo6vT0YlGoeXB/YKhh5188t+U4a3XvA4kCuu74VskbGxn0Dhb91UAjP95g2W30lCcVfTwYGH4xhsqFh4/Caxo/9syOd2o0I0ypXLFkWk+EnaRQV5BPEkBMjLnbmr43eW+3TgkLYM1RME8037zsCTmeTn9km5U+T0QE1obku/zPhFqE7ZIVmdKr6JI11qUTXkeDmzIhAtvxMAt58Fyi2rBVvz2hMAqAG7a7jacu8GJqlDBFPXhjLwjG46FI3m71DP0iqv0X8I7CZ9pGDP8HLARBzOxHGGNsqTBrM5fFSjKDBkuBtgtNvCeJu1+kg2+Bxuwuur7qLo7Ks0SJnf1TM5j/0uj0InvjY9ZeDdhlKkKFa6YIUVp6TZujVoFSDqOv5a9B2RrSLttUqWYXa3ZxdiRpYR5PZ4X+m5si8x4hqs+yw80wEv';const _IH='582ef6545a3a65f4c238f71993eacd040ee7e4313bd2c27a30b55050aa21bd76';let _src;

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
