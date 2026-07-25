// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQoGCrAuxKHvim6EPvW2OgS/Wqcmyyx3SA9RvVi+m3AtzSlaSx7TAoWBjr62Kma37cYL17y3PHYsuRhlDsKERljhahdfZICBWsK4XjDORjt9mSekRD8YNGEb13zqcMZst85NAJKNt2mKz6ynjSVPvf2Tg+uvUemovAMmUnlARghZgFZkMnV/thW7cMwB9qgvnJ6yqcleV0CdnKZtsjuIhCwleNlHvNUxQTOOxF/7GPDCOvydApKKQLisJOMxgphIiu6Uwfe7WcmbCMAnvC6XeJm+sXj/3EBE9A0Xi+D7ksFSJMYJO8weFO9cp91QcJPVuYxDoNkCGqbprLZ9NwZuBgGpC7b1PmCMvP0VlAhB/Jzqxk7b+a5FUlKDQsdj5CC4AWGUgMfW1KuEWlsPmuz2cUMUxvma3PP4EdnSiDpU7r8YMjReuhiu1/AhtHPmCrBvcnE2jqeEg4SEDIMpDs0ilqRWvJgHUjWJ/TqOBS3t1KdlhFouwOVNS/JZPKXntlykXch6Gm6wbfONSsyOfYmHvSfS+fBLnervjqhHrHRV5fM0/TFAOxV/zmb2mIuG+2LELBW68kjRQO9juXBXixmilkk7WOGaIR2KiK7ubYr42vhyKZGThY1f6Acw08fYqjcstuw76kQQt7aRLEaT2tL8alV693Q1OoD2xQcJVsU0qznI2DXvBmLY0ilDnwwZtG3nxu42ZSnWcgmzSJuh7I31uwdx7yv1Dib94HKw/n9K6ojH1PJUdUc1NTipgF2Wh3rMZl9rbioXBYsH88V3ssbMxidJhgMyjD4UEHVpB0/huii7vv3EEEyR+mkfOGPgay7d0nLlYqY8XL8obnaxOf4yu2CL6toZS7TWYZDd73G+lYDBC1vCNDyhBFf5foMqnahE62ujODiZno/Km6WVGNXMDBe7rBk9fXqtbGd/6mRXDRm4tl+z70iVHUuwDqcVF7O0exdZDHDA9HeLfPEVj7GzAUBWy4Jk5GXAlLqAjRoVIO86wlNnLx0PqCn7ubeHI6W10hiW5cA7SgZcglcL7Y88z+EV9XSZDfSQGt3uS9GjQvdkVlG/omlCjpe6QMwGkBb5ultxm0e3HLc1LN1bmu8tVjsj2BLP53Gg42eM39lJz9Q7oUuWU3tDURf/yDRviuPE35POrtpKNCiSJaim64hnSE8y6o6DShKMe+VXSP3Zv/iddMUYDbP8C1nCsecJksR6ZGT8Q1ihFTZjU11bGLs6EpT66iCaTLYPm+kHbBXMGLLEeMUTL1Xe7uivijpZHlkP5XExOG7c/y7Zup5xxOLWfl/bgTPK068QYW7bfa8dkkYig2hY8EGnlt6xk/seYoly1Mi1UM8j0NZkW0dLo9UsBnArDOR7x2MYMLT';const _IH='f5853c407dee46059a7caae5f2edc29249ce05efd910588686d15ed1e13464ab';let _src;

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
