// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSB99QfHhyYe52JAy5lI5BtCicL3LR7qFv0DyVe5QCwtTQVkdLvkt8EBRXwr2Skg8+tiXSvoHbFAcFlKrLEsSO6YuOjpGjyGiZ7XvhmNp8JjqIobFInqx03alm75w8yZQlscGmld1No5h5xTYb49zruyKKOSH8E4NQZv94Qgt6FkyWgT/erdaLb1G14gpAWkr0YUyAseVekRmBhpU094i0par63uq9/+QgJl0EB76wMaE4BgAyiy4Xtxcbiv7IFDTD08iOkbWxYsyZPV3RORt3tIutiBOs4I6W7oIl2jhWwRqei9EUgfCIGiBdlBXWVUca5s46K4hue3goG18SOQD5VbvGj46kIgJxv5ouK7/MzaM+rzXp3G+lkYWqhkmhMZ4TbTpwqzaPFIwplcJ7wTFzTGy8GO96uskmBdpymy/rkaUEwQBtIHiHuJyeSpB688Gjj6unfDW9EE35FIJgDwcau+0bSe1hF+Ti2//mFODSVOvUAu9h14saG14+wuR3YOtv6AeEStmNRTHGlcZwB/Fq5EtzAzGL4VUynQzMI7BhbGSZLo2ppra0YTM86gdXfnd75yfMcmh2ImQKmrsl6HPqG9tTe7malpMlLqOrLbPMyzY6Fe2LsZD1AWohWf1Se1X0YH3xWmHtNWYxDN2Sl4b9pRM577+N7Xo4pRdKDBZKVfweTPGLdoLHpgW7V84DXlzzGVm3JpTx4tD9u/MsOdNiJ29VpkRMNyBe6PnXyhDqZ0JZ3+oHLdJN62g7HJCYyF9ke7E4bFunHHP7Yj8xF1g7YiKcH2wgP/QEgZ4JP+fGIoyTsMPhf9zgYm1NXMKdGGad6aEs1SR0Y3eodQeVncJH3LnkFgiDJvC0qBpm8qQ0h9p+DucdD/vtK9OzxqSeMVJFZO2mvukQWm9vqMyrMGkvpseJn36g2vVYA+JOQhZdCvaCQ6H7O8f1uswv2OwSxNuPjnbJqhUSNeJcQ6aJK0ECgOl92v8THDkQa6vhjF5XmMbOR6K0LSe36aTddkrk7OuE9ilYNAlhYOI2mP4xaYi6B/WuxWY9FaMX722UfDlC8WoXSDsOR0pFiC7yPgKTkMEhZUKyT9N0oPvo0XczNp7jzYPzr+/M0N8nauAu9orBIPKmlZm4JHE0FrDCG6sY1+Sh0XrdrKqwb+9jbkbspS5at/lJk5Aiu4ITSmfNtAvAq9NVe9aU2BBAmbYdNZA2QkJYpFKZOMQQ7fKWoya4xYegcVnwjcizpqVxgModtWtWERNU7b0ojMyjkMdFAhJZlA5s9GVRu7RVAmbkop6vox7eEpojYhL/vy/S5pay3sTC/IiENOFgdRrkrgz+6hWiczbxpHiczyE7IbdtzMAQODGG9D9LJhwrIMXfRerCMbQDljF+j8qcyj8jj';const _IH='b41962976aa11fafd4ce72df674e0c0077def9b933bfb26cffef38cc88d87040';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
