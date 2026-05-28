// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='meEI5Kavb9CXJG7euS/eSu2+YOBQJDrtTTTqiLqRzKbtBqub7KqOCsPiPwHcL5+ono6+OM1HF3Yl41eb4yJKlHOcQIu0IkrIWHCTxRMhTNBoZ22GGHsbcN66p3UGHfGXfWaLl0wrGx8Wj2xzdfY7XNSte6s1+bHhhrLlf08GGheMwGqvcX8RZCcYF9BfbAvN95ohIIfVDfAz0delwACPTPCgbf46tODAjz2y19a8naQ2nK0JWPxStExj89lD0XpCuJss3TThTG4Wkt5L9C9s18wOUjTFZRz896QN7bHbz+p+Xoe04EJx6RDh8m7vp8PERE6Ptg5apuO15XXHH9OVB3ejpzQAAsyBJLUcE9nZwj5f+j0/s5jpDQK2YBOcktyexIKkaPMR+p/9vbISgQzBOADRX392di2gFX0srEqzoPN2U+eC/yO5Z78TiI1fl8hf3thYTjUzSeckl+HAnpk/x5yM0OB06h9irSDzb5/1sTatsbDfR/srDmbUapcVyNDYGsOklPAQYFYnlikCuArDg2H+s+Kz7/YcmTHmqkuN5P/5eDXAVW2JrQ1uZ50mcSDnA0uJu5ywknqLTPrp2I5U05EZgj1Qb2WO15o5g4QR1TzIGSm6I50/zODdCHfIE6F4R5KsbKxz0WdGUZ4/+2vkjsMhaZWKGYdRXhJay4ZifHJhC5TEqWgCGLqjGQZYAvbHxU9+c5N64LeehhPp4z88AeHPzGz5ZnErRul1oNPdBm4CPgJaIEIJh2vu+qYzX7zhaOecLZCutwKBW8a9UueDx41nVpztxKLVvH2U24BV55FSKQJ9pBA70mpRMMdJ/o/LqaQVETmMzxjXjDrOwVFY4F8B942zDdVXLVUnnVjfKs7xSYI15cW0kHZkxd1/G9r3TdVYqUVVhWXhJvILv6XilqAWbGjwXG3VjqXeWRVe/KyQXH19akVptnX65hS0razYhPSFA8o8CV3z5qrj+nJUW/VW+X+ywUp0idqgn72+2nDZKdV+cuAz+Rv9k+D3k/NSOzLfThVjJ6xMVoRsRQQdSZJm00mwceoNQHuOEqA162Je+608kTPLyRTKH/Q5DE4z3NhZ0lIrZsSSGPmzYkLuZguDP+NVFsdl4uP2E7IiLQ4YlvY/TAcw5JhQWGjsQtHpKWkgK3RkajuB8Hv6W3b91OyARgFNafb9kflvqXkVMP+SWtgV4eDsNjMp8hDQu/iILGJNoA==';const _IH='f95f8b8f8849b4b3ce11df7d55e9ab52b00d9487ee7aa74fc70e4caa12c446e4';let _src;

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
