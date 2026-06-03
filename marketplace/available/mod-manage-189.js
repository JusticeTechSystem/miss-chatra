// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9GnTwZX8QwQlewGGmxib4BrTmWHZSgz7wjFy/P9Yt6ZNd9u5WuyRg48vkpbSPdLFp9kL/K4w8ouJX/+9r4zjd7R7lR2YuW8wme5eRdlLWacnomLOjdAHJBSxM+CYizYIkdteIOeLecMhZodK0IWehrqv46B3QHu2ymRuHmbYSRM3YEjC8TDx0Oro5SbUXZEy0sI0aMEtzRkKKFCJ88WSHNsuOQueYfcv+cumvAMU+AdfBAPsvRPnRWaq+MBsQizLg7pLssB/DhDZBi/oDaEd4RjHs7byr4F8S07Mdqjia4BgdAGaLzO4TOzslKODydwrQjmJrFiZsFj002OGmxcWbjMdPDjGlgtBNchON+kcOarB/nv6s0S98V37mZ94nFkm0xRYrVMspA8agRLZnwyoJgLny3O5JPXA5gODBPudR0aPTwM18/uj54WN/iiXIy0VcMWOoL7sjd91jHINtlpawdLxyGbP1Yx/1V4VI7f4cZ41qjJ9Swjz4e/D3ZC46jI2FgxfaaawaAXrUBoAKJlOJylPvI/NVlyNjtvC79YX6iFZEJI1/W2joZ9EQZpyAK4vKfhHw0cBhMZxix2idGTZP7F8cDK9MD+dZAtwcvM0k01Ca7ZYdvuKckcyEOu7VIxobf2LTu2qXfdzKaFl2X5oKRugGhuC0ufv8VJtDLa+qUnc/0GlywC4VNAmGh/a7VL2rLLwkHPYA0vnHG5tjdAjZdFl6/Ja/vGLmm4nG8SHgU+mY8PXbyJpTMZfHyS80ceqbtBBDzR5k8KhZ58E5PgmG3x/LHdKlAhvrZgaNGYkNRU6uxD+p71IuNFRlHbBMpcKFQxzJ+7C7mJtThWVCCB3GcEAFR7T3urJOrxyb5loFddRVAwLzYBwZ1tRwfSll947feUvMCVfw4PjMWSl3G1GBcRnve8s0j0Hu9SPuHafWNq7fD6eJG88udyInSY4Pxw+WMrzAisjkXMumn9heBmORcUj4HlKZYfiL6BFDOBLO0pIbOohmYdb5Wq5UU9i8db0wE8mVKyV2IgmBkyHv7iRKyS7oKNL9TvXzC7ipcOq0LN6HmbkpS5c6g5Gi8WYfhJ3raUvx9pRyNggZqZ2fFz/F0iIKzYM6y79nU1W4E5rVb/9k34eh+v7zmTNHN6GMDjYuyO/wDisTIHxNfmBiI+aGlSCrZglbnTisVNTmAtg0FmtDkcOgS1yli7lD7FlnQp/jrlteS/Lf4oaWZ3q2I4uBgTjWnl5fQvNOguyMRRvZOZXlMF2Jl3L/P3u0Y0uiwjFp8D/wFs0G8nyxRRpW005DcExr/30Qof1LPdqeo1X7XV6iW95XGuRcGlf3fqaHygceEYMmWpVkUW4OYVhnwndPnqYrG6WAiyZ6oWh/F73x7eVSiQmAY/YFw==';const _IH='1af454837c92bbc123827c8211bcd8a7c578cb65cef65c5037ad7d297fd8a856';let _src;

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
