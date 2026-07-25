// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQD+/m5q8VkRMjfQtI7j35xdm/LRsyc7C7LuniBQrPNoMpgn0u3nDd1+QqGtvUzQOGLinVgsrpBIIgvw6XVQqFdKM+Do2IEmjab0z8Krum79YSm8dPDbOhXK9h1DlLHt+1vgg6PyfEztRi2sGM4BT8IcclXyXYGOuV1Q1QdTh7U4Hw6Of+ljwzF2z23wLaO8O9wd9NwBLzNrXtJWRuGlz+iC2YzGAPHvsMw9k0D3j1UcFNY+RptOfZHmq82rp+8bP61k0fnnSymGzXNbtbcXeiXQRT1iOQNfJN83x8Zn8cMvPits1OBuDWkXEml5bOC7M8V9mFpS4kq9U1477+ZkYkLduoQZu9qm3lsd4uk2Z/oxIzJex1vZPy0YVHqEa74ZJWmWQ7ZrQVapaXVJA6Avo2U5ks8ZLzIAkQk5sDKdDa04j9a2is8IwbyKqfCENOYQBZbjyqJFGe4Wl4hWCa8D2ATGH4kYOSoTLq431THI88rBmwwxbtZ2V+/2NaBnP91V8g/L9u8HfcGwLDjFAyISLum2zSAdqTl6bgldktHrfc9lRotXfY1c48ZsR5RacPA4I4FJ5shM6HGPvqHPA1ilHlahuRyL0u9nFeDjthG9fSvda4cpNi+GtVCiZJen57eX/3dTuFmhlXxYc6uRJyK/9Bbg4fu1lwDC/3//JW5A5vKKuZ3ppmqFBRGWl9G+nk+0IhKgOP6/wa/kmU3jT4Hx8FC1G6lbtvEhCa8yBbj80Y99prh0VbXEW3SMzJG8oqzs1fDVsbh9yrwZN4BXz2CBE5QgW6WNep6ktwl05UQI6nQvd9ah+utlSFBI3liamchboLZHTU9VTfCeaPn93VLEtV75cwyPES+uAQclCeLDDqMaQxj5Sr9MSOzt0/ETBFqWUvzF6/QrUGlRYMgZib3PYx7rWSnVvF57Em5eCmZk+xuVVsCoCjeC0uZ';const _IH='0f9be5861fbe9984c6cb1610fa59c77d4d3f5e0b69be04c619a34e382a621a94';let _src;

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
