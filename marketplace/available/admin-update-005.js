// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GtoPgKXHhoE8RCvwZPtWXuecbfN59uCDUJDEm8DMdjLZe7V0KjBTL8DQi9p99AihNj7KJyVqF/NlSl6g6U8Iyjpvng4j13hSIRNVPURqkFZJYL4UPYUq4s7ZE/92r5d/81hn2DhaOpaoPQ3fu4NQq310zDW8CUec1rPxVPyF5ukE2usy5tH6s4sefVYtfdhZvLRZ9CeevEJ+qKoY1853LT0iAK2b50rONl9Jsd176pnbB4fHdxxgThuYoAyG3rU1Q+wo8TXzhBELmMl9OzQNWrxz3KL6WTjkyspZU/YFkMl8BR/AgBz0+Cp3fgzhTdeeNBeriSQKhPNm1/BqZGwuS7q53aCDes+Btc+mMQk4emIzgqizVKJkC2ydrTZmOl8nMY7Xsk07L21n6/7TpN6UGagN9gD1tl2NEreZ3RgAP2dRNF7c61lx9gK+XVGn3g7J/ft2u4glS++vFVVcx7NzrZTMEcVc6L1t4B5CAY3ca9/gDlSH75/h6SkQ7XEyaxzXzCwFP/VxZA4lsEyfKAF8wJjzCgfGx5dA8fGp2WliyuWK9tz6d2neht/BBmgfvf9ikRg/yvni3v/U6dipdj2B2a9RtGm++qcsJEtf9lbSoqwQGOEIwW6KWwRmT8nKvQHRSS8M2lKNdOTsJamigx38NFwdUypJsjcUrJlV4noLTUWDBT8wF4daOooXvNT6FJxi9rmWx0BXhEPvcyE7YmIm3vmTSBNHWW2bWLMevXls2MUXqBG0Q5fAZjtvenwGygVc1kDS4nzOmjRZWM6vA7M9HrvqMs6+VFeKpsvOA8BtPq5c0a9nZoifjgGcRbsFKkFcpgSEkp5OOldPXNyX5zCWuo/mZnP5JnatBcMLDYn0Z6d2W2OKvsRff29M0REGICxbw2H3jz+UXY6RrYCU3Kr8bK9RhcqVWcAofLBbSI2dbbT9xR7tbC4AWr/hb86DV0nG1n2XT0s5DBvmwzSEpZ5Zzxocyfd2/hm4sH4msx8nIEa6C3ppfWUh5gA=';const _IH='922c74add138baec887795ee198c3ed859c2a468b08369a31317abe00b159701';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
