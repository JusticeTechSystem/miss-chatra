// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQznY+wv9iu7ijla4o02tr3GnOOeN+md9yg2Gk3rakfbtv7ViicHYS8F2KeSH4iCAGLv8F5ZUE3h0uyQZDiUySbI+pNR58xC62sFGwfBA+rmQt2zG9YGFuXQQpXbr7py/abw8Bbvi02Oua2rWHuq0UQfb6/FH0GDasgAnpXIkY2Slv4ColWg3UfkGWnGaTrdRCVHa/Jc1fEYNKS33yfIMsfT56kmDdg7aVAW6VcOhz8G3WinP+WBuRuX50AyzlMA3T4/5UX3kVP72tpDATWbg5ok30wZXMcZIOefmgvd+Pf6QBzsyq0VYS3vSuyn6xPKipAFDf9NKt1pLQfMPSlSxlRB74PS+y4rR/YlJrkBvBmA2hTDONMxo83Mha56vm3j8h/FG0Y8z2rRon10tleD17RDKc0oEn4DLMxpwkwqYC7H3HSNZ2kx/9lB3CD0gmJfHTKhIKV9aYyAKvlka26ViQiLT1ZZYc/kZBjCtaqts8SYgykPO3bMzfsm++amnGr/614cGAsANlq+w+RQPAR9BZv5UQtc9ARJ47hPrxgPXID9zxnCcVg3ZPxQWuph12BGeHtRYLqFz9xHeu9pzeeI+Ryd2rJmmDnKA4QOBzm5dQOXEg3scqlQBTS6vxg6nmaD3iITNXrGfR5TgwcnMAG5hNpuljjlw2vmZ2PKW3D6PZcsqB8buFDdZ/yMFS4ky1wv+Bp4i5ys2vTVWL9RjmWcHtxqd/jYrtipo2IUFrtI1nxdezHAVQDt7q/CghNg293P2BSUQ/JYDfWdf7pS62d2ybWuF0gdDjHXIDR3FoDD8D6bFXAd5Hdbr8Q71LDARU0huhgXZzImyNS+/CCjIAZM9Y/VvST3kL8EZXEQ/N+bWqreLVwcS1F310OAHy6bQtkmYmPt8adtJnMFiL67GQ8EmDzbO0kDJlZvsydY3HM6aGcSUUbJnKTf/IVDAXOFUQCosa9+CJCNoaiC4BppyurYvgjzj8Rv4ufu9JgQc/ds5e5Sk/jhOy9TTWmUE+RfGESclYOpu3pAL91FAda+Hsx3scaF6LofoZ7h7MqK/VqsLXsyTT5i0tZezidC0mr878yUMzsL+lbKl549DQbdgH0fEelmBCSQZ2U5+v5hNyB2J3HanqKChIGJdXpwL7Bb8BrHvSU4t2ir1BXJ9AeaK152X2adcyvcHobdKGKorzTEFJ0D5ol3Hgpv/ARIfwNEOWewGDy7C6Q0LgsQKSZ0=';const _IH='50e19be25e74ef1beac8807086ab9cd267145c5f4f47b5690b27a47592174590';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
