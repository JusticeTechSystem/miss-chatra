// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gO66bqIxilQZpDWtGuhBvZj1UaLCC1RvgV0l1jl/yvy5s0CgoieeFLK4MT8I/RxQF5uYxdmzZKiUD7Fmg5N0J1GmNQk6k8AvJIfZIj+aaM40xCUvKbYbIb82eZCAn1cMk/O1TDAMYLyllQLAaslGehGki2t3dy1kSLghZoYdJeB/oQhlt4tbOXayjk6ZDJBpDD5hRfhMcKXNAJ391ceK3h2+dCOJYMWBOMjjg72gPsSuF5w/f41BGu3gYgmOSr/RU1bzqN0L3oAy3J/fPJvOaMS1NpkHpPDDWtuKGqRr7Di5mEvzvIszcBp9mSVm4ploaLfxbc+VW47mGJ6pjcLeusX7QYJE6FsPPKvroOVq3vQPq1khhyEKvgwAq0QknYVLXMFtLkVImSlc99PeBz0cBU21vIiAZ+six+mgeK0Ll5Xylws0XopjyDqN6KXaEkX46khz3DQGARLJGmQrDcdF58xId/dmDbs3gfs/uH/Vg+N0yH85Tb5PLVkWO2xcRK6grDuRFi5MWXjEmIA7HYMqoKFLs4TOkGE6rAelyBZxkQHAJ7ywwcfPBVSGnKxEw47Zj+P1yZFaPciUVslMgaRMjP8Acfb5pMFM+1twK+xlyvXYICkwlJM7fnTAtmihMA1Hb+LowEWkivKYDfMXNDwgwYXX4/vYaWNScHM0QgJdpa5ZszUmeD9YM7znV0BZraoNQMGtkper7zAn3kovyX1AfOU7htnNMFTmTu811QFYb2hirN0MM5H+4zenQ8PiDoiDPZYb5xfxdpv04JJc86OZCLT3F3yzPaey39qvIE0qZKbmfijWCK6vWf4i/9pmiKbO33Vzfzgpw/ZXw2f3UBD+hVHLYLa98IkT6t3VFSdkMA2Yr2LQK/hkyKpDlbnZPacinaOeSKzDtlYFiEjxef2ksIFVUrBAw8T/JfcxvqRotSYtbxcTJSiITEggHcYt9ht/pNvkLJ3AbHFEhyWMN+s/VI6srSFnHFWy5VSm70FJQ30hoM8tmA4Kr/MYmGOEnszQHJLhWX8ACPjBXlG67vhBbnkKT2KNxdqjlQFHu5+0749fF8A0AUR/SqWKF7a46ebbD3W7J6NtXdSqkHfRsqFhakaK1ga0KwwPfqkq4E9N3UNFbipaXAT5IaQmvGgrM+2+vOVxsxfpMLpJVTjKplA3//k75OQR5i+RBdLrp96DBUR31mTu5/bzlf/OeYd044bsKYW+3Jc6UnanGw==';const _IH='af6d91399beba1a62c20bd914601d4c2572aa8eb9c2cefa53d051e871913032d';let _src;

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
