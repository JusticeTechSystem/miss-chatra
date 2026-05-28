// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WYEsQ7kQwt8eiVZNOaH0amusC0FwjX6JGS4iIAXUV0qsfA+EgI+npc45YlHaAm1lZuD9XFXKpd9cF2DFg6sB4mmLZnxWdIGybzsc6A+XO2wFEvf9EERR2hqq//QwZHFec0QYp8LEvRhiy587F7sfKWIoutzjJryNdb/wBHH1yw0u2QUhgW3iEynTpJ5wb/dl4SB4ogoGDDFNgG0Lul4+U3hGW+JDpc0PW5EwD6T7pAdcopKYkRDIUuANVFJ0R9a9hHB64MhvBXcCen+h9WXK+e6aFg31fHNumCMTL67jZa8ZU2MjvT5sFUGxC0UCrmN19H58zp/kJVZ5yyJr4fNwcMzWyHrQ5kbagvdz2C6J2pzD2xikjtN+kWkFKf0qYspaawXApuGEZpHmEe1HmsSl1XexWZRgmvQwwm4VLUjhInnx5FVU5i6zMPxqr9Y5OM0q5OlFUowiEGBpgzUniPXpgWr4DPpDH9wVpE/fJS1n3hYCkMcQg/uHwPhXnUGgXWw+pex7v8bJQGAf7Oyd5fzwG2GXCIW/262/1pey5pvHV526A4UX3APXkeBXWNnjrTI5hSjGqiTGvCMX7EeifuxdX3+6OWNu9eHp3vfL7/hVrv3vkFkdf49wGZNoY/cvEUCumqZ7Fg1xoi0ATAKBsa9m5kJ1vrXnp8KErZLJKXLZWg866Ay8X4mvUrhohhUjqVOukVk/JHmtjOTckRhBgI09fs6BtQcv+TP95aH/Hy4p5QqDTxq/iSdvCVpn/VKZXU+3TBQI0Xf4VySG5s9iB6yvcx9NcEh1pQ45qTc1BABCzFBVKmpKVL177N5D4LkuIY7eroOUP60FamWiYxaItgAjVwMURBcOVJpWAJZ9Jrr4yfauoSi0AvJYGwp1/LImJs1MLwxMOZlHbJ7RxQLSiZS3frn21Jt/fr7UaOIxwoIMAEjBz6KPWZWymIrrsNTLGsR24ZvLHi4lqozXR8ZYo3CzZ7MlWjt379U0M+2y3JpcDp0WXNILqdikWuvwncaw/WS2rYhZlbmROVFKahmpaB2vxoDN/QoZEzGUTYmJwF40PaqtEERPYOg1fZ7Jc9mIaifHjodSNrAKpzzmku0ETGy3TvbzUTuGB9991rBodjyqde05hdUObGrPaLcjZ+K9lGZO6MPtRdur1yuAq017hkD8oWxwyuMrQqQLSJz8KY98VS7IDllYshOoR+JtTnm0DHxLFVLeRTmEOfoirMWk5SsNKIOHXMhS6Yn8uvvfxmFyL0pvseI6X7CSG6lBr4F0tyMTe+dnD6Yx79JkXDDNGL6QMNZOlKlMq2RIyREhjOLuXXlNyMkC/nVXy2bckw2LYPl9mc5K2mMklybuyX64G1372/QAB7UQO7o6Z4bYh/UU8lntWf0WBpWpiNF+VAlEh6Ql81U=';const _IH='181a77eb54201e150622e72a375a20904cec7a10fbe9a00339b4426051602c46';let _src;

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
