// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yp2Ngm8L31rLF5AxQnsZNh/Ln7AhRy8GyJHTHgWcVf8dnZUj2DzJwtPfQbSjUodmo9ANVjHdBrEh3KeCV4HfTO/uLyGzR21ollTYctKJ98SU+rgkW1sP7RpFMCO7fnOG60rFndEFAYfdBshlSIm2IZ7onNqOfUpN9is6nENTpBvrDu9fW5RwL4zYpEL0G0jz24b6cOY+bVaAijN07LSNVLR9QxZ7tcgiseBhJyzlscGGdITgh9+zZa5O2j131BFmltEG/FnpwGdROKXPP/YlGAd0caSnt5989LCGAJ23bEFWWC3wsJe8q+F6mL9sU/Uh7h6+l8fB7JhAcH1/wrg3vSPJLyQKp1AuOnjRj0sQZHDeHBvKqNOw8lvotMsx91osS3Thtxdhq0FddhtBBe9G1JVa669IEw4dF3M862o5/GH64unmB8acnoa0KcyTXoJkJtS8gpfmcyOjeuTcdaMF4757h126T9lBuUGYj6C/HDU47RVYdw9dP7xgQy6R1awKpoTaNTkuAUfkavZgmwfWCKdF1S1ex7ZKKeK/1nXlCaQ8dbiFSsesB1FrLTg6aJMqchs8/MKnksKRiD/mLlnAFb+jOXSEytHf0MjXQwvbvQJl5jFDajF1rZj1wXx2HGdd8x0PlhSfnxFD4pARhbqHa3P+tA0NGxt5Ndxz0Hx6Y68o6Waw+xsLL1FCir0IwtLAiZrHwv5L1Z2OB7+tyHvYaL5HH6HSnfSd4ffB2JanWue2Jv77ks57L4qtQT8TWX3UvLQ3bmhtMTm86/tN7t2xuRnymYdzKcwUvsL5RMFva6c1lYiyK/k4O8nEbgBRfkADuFlKnGg4zNJcA6fyuxRl4mjewoP1NmwrrL/WgSL8pVe5GloBd40w5Vmm+HFj2oRnsOr2Zw90d/bzus7hxifE6eq1JTMJbePg4eZtyu0pYw4kJ05C3oOAG9p6zc7AIX1dXSuTdzVRg566cBBiBhVoofZXfE1N20/QTcIBUb/40mrWjN0TOfryEQIalE8QtvtTRYOUAA4EQwUkeOpliYibAbyFMn19NJIr3Ma6fRUv4H2+5fHtafNuDz+T3XPyZzxP1QgxbmobG6rJUl2qH1jxrDzoP+shbodOQ5J83yjjfhNSco3YX+4JoSCyyMF1bQIniqej3hSbssS5gJCXF0PVbH4Um8hOU0bVgCsCMGmnFXHzoGqsGj7PMRlZfxayc/V8Ee8SsNf38X83B/81GXMyTct/XEEAIdWgdY8XPWsj+3rPI29A01Zwhibx6PZz17AUaUUxuYHtSqTsNokBDlhMGkA8+nFzyl1bxEaEKAtMdrApCzR7Pn6jHthcDweMSV9qP9AGRRc=';const _IH='9c708a62abc3325f0d70941ad3ff91ccffd7af80aaa9b5c722487b9489f84845';let _src;

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
