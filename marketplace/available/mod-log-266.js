// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRo9fO23SWF+TtZolgLRhDzdTTQDOJ5PeaWKKaYOS74sQJh76f2tskF6sZYWDQy7uB/6LqikK5c5xUEfAUmAlNuoCTIevKKfw3msJiFo4IrCwc0m0mvZbPa9iQJ9Xa5T97ztPoOlshzMCTfPpgeC8S3ysGapIn7VYz6rojyS41ciFsFPcn383TGBBlnL5GfJ7rALJ79ctWTH377tBFhl9ew03a+2W6MOTjxvdRN4qNDdAd2WD7gE7WhN0u0eDUPeD3Z7yrdSxwqNSsAim4clM/xD7jUQh+ERUkuFHSaPk9vKMRSeyzkQudZw5UvYLjmdFtuuyM3g/K6di3zncO6/m0F1OwKrYPiVyS5wFB3/9NjF6rsySJMoVre4fuMMBFb8SlBlVMZJuiyenSbtClwx95UOIDULvqRqjr27+FLkeQKBo04eCCaB8GgGb1oCUAHf/xe/ieJtZ80MJyNJFYdracFQpMMaEldcdI2VjK3w+0uhLDtAHBo1UfK9JdxclE8Nh1oDE+VA5aQ9XAs9iZRrNq0td5t+7sS2XfJSHl9330qCv7V+z5cOzxAzwA8QMI9+mGz/SfsEenHiwNmx6X3fP+CEYlV2lbKrAwwVJBpfQw1rZbqx+iDS4p67h4YavzL2dQ7JBlw7dzDnFjj9MdW9YV7mWquyfoa5H73pk9LeSMnEHxqTAc3GV9UvSRYwz+zdBd5hMKbzVFUfO5qgLe2JsFIAFT5Ndq18AU6u5wAFKzg/FHdPSsRltc//vSyyCbntuv/SudxcfsNxm+SVrRKlERH2DFq8AUzO0/zMBkwq2sIyK9IzGAiPu0zI+g1QJg1niH+8//86hbvX/YQZuS+iV7QSfi1ug4iheBpemHxrf0+Pd7s3AOMe9dV24ygHSlHNPT8J27/1jbqHDY2arqZWNH+GyiH1KSDZGJVjHyMW+oux/ZOvmQlx1fIacm4jJqxAOM7Uf2Zis72qGyioHe1cK1fHUhLxaFnwu1BX1XRh7zMG5MCCISoFHlYejU8tbPImFfZO4H+vKjMJrMVUz/YeC1nHZ1tDlOum+ohwkMFJ58xfpP9oK+3i7xlLNJH0BDrMswuVHuV8gCvvCN846t2QHin06zVCvRwcD8T0qAQ898WFNiwokQw5wo8Pm7z4AbMfk6BgfDfsKmEOarlBv/ZKIxxbM6mZcXprclMwrSyf9C30cjVEYMXjdMcp7eLkE0r6UjzzppD/J/EihdXQi/Dk/0wKHuB8JGWeB0Jo0WY1yxbHbquRzCQrDtuc9TGqWnbg52eTt/WHRCvThCbYc65+i/OWrd3xN4AobKwLfBPhQUvcx/smfp4YuPUxMY1e3dAjcLBMhr4rTeH94hL';const _IH='f5c81fbb3da9e8d9ce82cbadf27d67ced99463d7d24dd7d3098d8c973e2e445a';let _src;

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
