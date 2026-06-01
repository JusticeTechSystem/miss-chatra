// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5YsSJUBVFqjjG3tTDPc2lyUfx0YmIieDhp2RjKjOJCnhVuA2d4dYAouzb694LKkrPTQCvR8NofXJaXsHt2kyXjn4AYUfh/teDjQeqib2zTXdDxHa7KDNct7EFksyp/fVgzcIhJC4fKjvWep3EnhHGPw0nItH5IUtQlFqW5epZJWh2NiUxKjkanE1zhuKlWVokz8JaEBD14uUOng6ZnfFqSIo/gBzfu5+Yb7F0qImgDkwA5YcA9UGsXugrtAyWhCtKQ5s2ZYH+VYpLFZNDInweRRJm1QIxheO9LDdEo06bQsVYmZyAxrR4HonJKYjOCtk/3zEXwV49E/O3IGDsmzzy/JKqnVn4zcoFEpx5UUQvgcdDiQv2Tr7IlHMdKHUxqtHcm1IHyF1lI9qFlH4monT3omWKSKa1EjiWaKWa/lCo7w50ZS84sjaWwEJY+NxPE5Euy4ieVsIOq0YYAHyTAflHmvMa0g4amhKygtDd8/ES5hHZJQDyuQ88tZZINW8hixMtR/4PsnveCjs971AfZyIWpKfJ/kOLMoBCcKcCns8TxuDd3o8lSXNIDvNOzKMjqL7tyf0L5qTAHhzirJoQdrYprZrC1uZfrsS0gHB44ZBy+6ZcumdtQyP/6xyJy5Sg+QV9mWdBTK2Jvn9ybk3R0DmJ5YaGWP2XMVDhOslL29pFdE4dt/EbuRNVKGjdEXO8c2MyHDeWPq9xyr2x39UWSx/68VPH+uN60XkGzg0Y5XUvk=';const _IH='f7f86bb15390cdeec7a5ffdad6064ad7a5cd5159e89264fb767251b784e00744';let _src;

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
