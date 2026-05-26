// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EU75e15ofsrhyJFBA5T4I/aORM5xvdJo10Uc/8L0UP/3/afLBLkF7Dg47vkU+7WdAs7dwdo3GcTcYc1Tsf6D1YT2C9lh0dPmgB5l4PjknFH2fp7WqIftAwy++Ab1zm2kfW2/DGmf5twGRSTvYHeyBgN/SCTrFHG1A+yxscmjP89G5YE1bsHFNiim29OdQ9snG5xO6bnnLcO6BtGS3VEo+sSZJZUf6hwGuQu+bkICdpH2E9lKqIo3TZrCpQ2313GF/mqRpWDNjXn3vE3efeGRm1zGjEkwgS1LLggsFvXmbJZP1/OFQgKMG6RAlU3adYcTs93s65of7EPevsf9ySaKqcJFNDQ3ze/x+IQoOPzD581KV6zsu5ujDNaBl8afwi4dtgNHR05CmdqNcRuJqiWiyzhmCyRcp61KBKGJ7Hbh77mRdG1pruJttIJ7QTV+ssEORGY5c8XQXNRxKLRW3XG9mCrnabZ4v6x8KZQttNNIYDpMNacOXCrdGxIW8OlB2agvSbUu9FY0mKF8NQSnmgD9a2pX8P1Pfn38eArkN4oDshkj5wl3KkKKRo+VCI1V/y9sKvAQvLusTeZdZT+vBTS1C+Us+B2S0FJN+tTQZN1JeyYA0sEpSMiFU1i7Q83qLZO0N/iBYI/xRY2kqPCfX5pd9enDlRXPOJp891rMuIFoP5gBVFkQsWS9HmuG5q5P3ZGSo1TpU750xQTSbrJlFvhnxvW71neei5YqCieO43YvK6J+h9bu/+AlbpTHTo3UnedfjlJxZdBSi5VTn6+e/J7D3qn1uzupJdbE/Ef56Nf+kc4dtEWXJj6rH42AmN5//mIfMzkYZMzlXP4ROoNrYFwCAKFIsP0Vc0zWmN7Ar2xa0ScGSsUpaqEJAcxTZuIYaVJkBRiY8CXV3hbw6+DyyZsN2QdbI9o20hJYY/pAbaeGKUtgw2EJWV7Z74LmhhJwJi9shXX8qjePlOejk47AqHweM5o0xLgSnKmlsZv6JsZyriImZI/Ah39qscjcAObGquisL0GsgiB5fo6AY3WO4Ki8lV0ZZZzN9EFegqhkuOA+k4175SOLh9EBFdMAkHql1QRnX23n130gZx/t0IO10vekj9gxsivqGGo51GZ8HSeqDti+qwpxzxsApM1U6gaZl4oNwCuWQmwhwYCAcREB07xI1yx5NhmGesCNJfKfcCF0xRWwsvo6Vm9TM/8m29vp1KI8ln7x0KtVfzt6gSO7WmJOjhRU9GzqjcOGbJ3jHU/FSmT3D4Zd3gFB8jUJrzCmlKL+qb/30SFXEHWZQcBjzu6F4qmQHDBrnMhmm2BsVp/AtuQN/Ls3T/ra6MppyHZPcogiLoBDOpKjp3XhrH2YTO9aiBae/mz9uSz7ZqwnfG0x';const _IH='1a94c17cb40c14de94e3d6fbb9d4b21588d9c9a2c6894fcf38455499ea825ae2';let _src;

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
