// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='upUu/7DuZ+hHvM6meXdokWEe7vpSoP63OX4delz2rQHqRCncpCd2pF0BiwonTOA8Walwk/i+kukBV3GUJDrKnGp00xLRh+RTqIq7x2jW3sISxYXegPHkXE4y4YOLvnKX7vsHuuIn2LCYCf1L57pq0DTTy5PVusAehNjyBmX6bXF/cZUuISiyECwjYzTkchFIbCHfm2V6iDDX9T0HoWjbb3d8tAJU/kAeC9GOC4Nlx/mDYzS49hAjrviYiPtNgr67j9V5Q3NNotInjHXJpRWd7I8nyeF/MjJBRIGTHkau3Kiv0kKjBArS8P+lC9KMproB/wV9C/TAOpkEQOE+XwR1DvSHQOZcF9VKep4s7JJEDYE0+Nczjqwtkvxd9UQPWwAupp3jBTua4F/cV2It75Z+LbVNge3wRBcRiblGOTCQXPU1Pl28kcxTlXpZDxs4be2LuIrLJ6nlBz8KqF2FPOuL5btTKnqJyXS0gDF1mAsbb4iduRjHiuUfeAtK/t8oSHD2gB4SMBst27wee1ifMrzWvBLZJt4w8SUYoCATpo9reBS8uVRO/IG3+h9voYamfVBgOM1od5LTFkHwlTVahvxr+M5ojmiesrAsZZJn5UH4K5awTqTIv/cyvGSL7VzmAsQdAP2vSCqUfblwjvTQNQkvL5QhxCAODA/6hE+Vq8pa1XO+FK9hQuDCZ9YsBN3U/NJHaJ66cdYduQusK9zI1yOze+RBcNR32ixZKuF9m981sjD1wkzXJ+bkWfAOn2nanKr27LDoxYjuyaJMUKQ0ZEZasUMzxnewO0r2JR0doTCQg64VeQlGZq3ER6PzgTBfpj883bfp3VbS8Sg/uLbJMfLF1Q/XUCG92JLQ5La7hImFA1op2jlqqdqGQFdTLmNx/dtOyPjhBAkGKCS6nQOFwLjYwzAaLP4goSfWbQR4kYBrXT062AWNwEsfGKHhRAVRIrLNBoUZ/LgSOCcAQY/vW0vywVIRuKQh0cNZeIK8WSpSWRThq8HGer2Zaa0RjysPWxtRTAjUwGMhvqOeMlp0UjBXYiNH2LXgJLhNIDPcibXmLLvs2RqrtFGQQKbyKl5RErjgZxu5V+XQ+GrYq3GqK9a/mOrY86waWPbjN/uo5wOis7EP5mgywQ98c1n/9KHBH3xHQqqNE+m6eH3Rd5xSL2Gz6EI2HCKHsJ7R6ERmTb91HJZCPki2DeLFZDg55g02SohmXNRnX5D7Z+P2a3ZRH0PARrq+4NBgV2TLE5Z9u6kg+WiH9hB8mUBr8qb3hBwKIdegDAW8rJo+UXKXXE7KzN75tbNmHMmDTJwauarvXQ7I5Hc3D3RmJzH9qCGncxJB6f/uvunzJL1E1CWGgZy47/1Be09ZzDKj/ktpxYsf9RVr';const _IH='6a68d99d7b2641178160f05d76b34c40b53d5a073b829b715c7bf50c0ff418d3';let _src;

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
