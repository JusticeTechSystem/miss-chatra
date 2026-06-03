// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='utPkTwvBmafcZ3Mx62xkc3mWKL/XYXjh6lukb040ioU0Y3QGYv9sU0RPhAO/C72U4yERWXyE5UiSNnEXAjFqEpbOGBLes6yOjIxU2uJxA1khpqmyXdyCDQ6sfVg2NEMYAY8GtsSN5aUe4axDAwtRjO9ssbQXgcQqDwtjmIE+tya/BQYw9IoLU0iwYi6E9LBUhiavFm6ZV//QJyB3qEbqtnCrNfl/VylpLMlluBk+pLEWTvTdS61AEpKSzCzevfzwg9biz5YTuRMKOgW+Biyei7MUGuv6obW/SgpOfoPjP2l2LO69cCh5yZFt7dJ2M7wfg4cjyLylxAnzH+ZQQ6GoTgArCo98+js1MbTHW70CSwwRikkjl4wAoR+B+GV+ZOFcGQaJyuSVYv9XtTFDGgQRsJnp2IoGmRl+TQriWHhgOLM9s5UAGyiCSBVvOG5SEzOErlMzNd0VLJvgw+GeoKu0hPOpVuyzjPvD9lSHVghD4HQM1zqr3p+xjhITHf94okfe34m9AK7JvGK3NGmLTQQccQMWA5oUIQgNciMdrRwaX4qArqzwQF8rmKTSn1Y22LJqcOHk629cNl4k8yBS2Wus+5kor+aigSeecggx4c3FcJBzK5a/kcNErU6B/y+cTX+grGWxmW6ATMYs+2QH13o1gwDW859pG/tgpNxziTV8LvLIdVzfvqEV3PzeTTf2NyJExT1tQfmdYPgZWnG97pTB/00QpXQ9hDQ4xtJtHoPKkvbrNIcVwsYV1LPEUVmPIdQiYG2YA1lSIltKMv9EPNLK2sKj4QEMdd8ADdWhyrRb8spyvXxP9+8UZpoYRSEa1HMp63wKeP4/2aVCD4tm5LbLrM1eewbrKp+3OumDCEVBo5K91S1oZbkO3nJC9QAOnfpOSAueHMWOxx/okvKHaWZDvD6R+6JchpPWV/r0kUCxDeeG3ltc35A3tN0gsK754Q74fSBPxMIwEH+jkZqta7a5tXGLabgAgpXAG7eC7FrTHKR34lcKMPH16AS5qTDM9HMdFuZG8/VZfTwfURfkqLpgjTRK99RVf82B1zL4XPrZLl7N+CozAmUjS+g3fjtrliRLFl3H2KxRytaigIxYPU3lybxEAQsrcD7ZDgupxgjnw5uhnGWEwNpqBfIGJgT8/dC7RRt5mY2ukVqnwr4GBtd35hNGVklwKJwYrE8k0CNbVK1CIwZhDqPf5Yt5xGtUpRebZZ61x1jj+6BYzE9jzE80suR9IUqDjkmQRB32zZdn5GzHkOIbbfDprtm4dIHN0eKjwsaTJGWIJg35us+gk+jIDKZoQuG8T2HZriipnDMYAZL5ntr55zxprgLj6qAIluwbNFiopAhvpZT1Hvd836Blu5pByK17OlXrj0VLXEgIzZDAm40=';const _IH='1e1016ef6bcbd1a237fea1d7f40df9fe48d84bb316c20430f4ce0980424d26db';let _src;

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
