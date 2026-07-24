// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRruEfEOb/g3RbCvlFJ6CLPJL6c4YxnJ4o3lRGU6V9k7cOwd06C1xgLSnR8CJ17p2ANUWF/sIlrmutIprUybvQYbFWN+cZ/jk+bOs1fNk4xzdpilxeT3bJBVkrR83evH/HZEKDOUcsnLJsgG0TJBUs6RwleA1JKOFUdqomkej1xa9agaD/UBhEwq0ui3Icgozo6Dn/HuI0pcrladnvE6IMs9MzuiRhNB9+x4LvVw2ieIplrhvYF2mz9LXkhrkLQK3EpG29M05znVt9saC/Ur4XmUt1Ek/d/mrwF+O6ZqYBLsfxNEZCDi8rdfic6e4eqbMLyBktuFqhQ7X70MHvV9k8jj0p3IXL4GornAqR87ZIOMEkHomVrF+eV1iGkcIX/lPZFxKCh+DV/zDxOhONi6wpydHOyS5zO7goSXSD1PCMaeHH28fRlzFb3Y29XIPEyDf3e++CvGyA5135IjQ6Ui+KQa9sVN7BetOIUUcK7V43GMDxsT+0AvncWdUKUsekpSrdktHWXyet7dcqRAZIOLkpBx/wlgbzM5XG8tLiUUQh5Dd3bIU+9Ga/ahvATr0rE0bC5sYrFcYwtlgTWuHjyoGH0WxCGcwr2tPNGlBzX1J/Iv0F/XJYwuY2DY9MEwgHBU1LzXWpkaViQEseJJq6WURvV1JltJaR392Dn6YIeL3KwfXdYC0fYbanI9zSLUiItULmTrC43CgzYcHYg5v9GeAFtCyf1/kNVKAmxpFuHlKbErG6o+QfK5oHcWMHw6zlK23FQd53YeF6VADK3w8IGu35deg3msUgQOQXJy9H3IzRTSslBl7a9ueSmwBCswZded7BHLIM06QlFPK1X+VUvdEsijXJzbnztZBI2KpeFfPrpRaqOuQPPAEMb2koZEsfi1WrEQJdh8Cb7sct+wz7qFPiNC2lg0lrAZYm241CZP0UfAdMAQ8Q4tUjaIOFjo290PPy+swbjPHm+W+totutbFb52OJxe3WE87CFcbgXnCRkUBQGzgZHJWqj5Bs6rEmO2goqB1D/6ZnJD++mbSqMKkA==';const _IH='97905e8ee9051264248221c6220ee9371f5fd75f8b461d595ea13cf0506b8c48';let _src;

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
