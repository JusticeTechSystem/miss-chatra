// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='376NR7Tgjxoqr7FTMzCyH6FwiG7w+DWxu1j0IzXVQXGaYEnoUiShYg4nP8uofbXv1pKXsHuuTvoPb4hQ84GumNK6rtALwRZkR5WhTqvuKJhmd0W10iRIQlp5ebgb/xD+y3/bvmvm5YrOGVwrhjIuJD3C9NGMpIbYTLHOVTTfcbEsu+/wWFoHXRnPwrc06VJAtxuxAmUj2HcMXuPQKrCtspf0M9cIQgjXVa37Sxdn2B0UVsnsQfLk0DivtMptZc10M8FPcRvJn/zqSGqnqaqE8DvOsouerEDebNplssq7TJTvUwx8chbawKkTmMGrNW2bim2GZUjZOrY40s3MMZxFAt2CeJrVpiOyde/8IDWMJEn3aXCWxz3pKOuKz2x5VWrjoM8w3ojxyNae1udv6S+gqE0xV2PJiIgP9w13+owyVyDtOBVrLME8BOKUhDlO5+xNfGdzsZxut13+6lbhn7utEXtt4u9G+M3GgDRVcPiDsY1K2beLwk6GsaKPK7LrEt+xW0Tfi2MS6VjBPA+Yu6jrr7pIYjsCcDf36mFHbizS/uKlHSFYrRBPbiQinSL6zwONKOE1zc0tjiOEkJ6BRrrQKqbH75LquydA6hQ3taJJwbHHk2JIrZZER+/DvU278b0wHg6oZYAYijeAqV3xeosqDmb+l7V8efPGvynxOJJgY8Wv8Sq6ReiuxxSCZACBHr3ieBfnw8jlx+WvvRO1aRCkr3bOZRg9+C/j/DsluVsmwOxPQ0hBgfEGmQOkpcakMFlI3yltxw3kyUSRNs5crwhufjvRqReoUDHaXkbBqNOkDxfScS03A8U8Ywo/IwpLHpxbCw6khu6SLtoeE9QMwBmAEwixGIH7WywAjyp+0cAiQwceOKZbX2lv8PfYV7EEq8wvCCaKr1rOh595nleAXWWwfEkklfLZ/S/eXsxkErj0UXAem/bKFPr5wDS2jY1aBUK2RUpcXKVucsww+CpQ1nIG178HVz4BzYXXg2U98Cq6hq+OWMg8b23RUD+gf60Ero36sprxVa/AFLZPoUrhusCy3KWoc/+61vDqItOQyfkPWA7Ui7YszWMJ50yn+/Km0sZU+AMycRMlOb3v5p3Wdxs0AKN7ArxhytUwuVVwcS6AfOxTsiXS0v7DgpQlWyQ7NWnODEQMUBzoA8QcRuwJfzLB5dyApmh/1kzl+zqa09a10pz7zDnY3sZCGbRQ8YkOoSzLGTujEq+Y8LYpuPhfM7gBuE5WcAskFTJh+udpbHTT4vTaFABYDmkQB2Wnv1mjBPTqxBri+Kt8JO/tPdkMZLuZp6r1lCa9H93Z3+Jr53IXQsUwkPSPY4rrFrKSY9vPQsRTz3TSYqB2pg1EoU/G1XeeXVSufImczeo+t6aLyOruLTgZghIe8TwOvV0tJ6EqyU0UmP4UEma9E5ZYFcO9iUK69AfBX6QtYDA0GPsQ1TLyz9JPJGPskD6HjLYpVqpxsjABUJRO8Q2DSbJ+QGYp4r0vSXKvuPsHQibdk470M/ezKJIYvwhwkTfBoqvCyUJ6IyrHCfugerET1r6LUHhzqc2YgoNzkKZhNQ==';const _IH='c6adcca9d344bf5dccf94d00292269214a56b2b961c01041f7d99d335cd0030c';let _src;

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
