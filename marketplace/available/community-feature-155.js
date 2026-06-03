// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZIhswolm7nXTWXlgZK7nxRZSy5Ikt1KMTIuD2KrLICBTMMTS9hSe/TN7lvYxbSivdJ7Eo6TvOhwwH4CPzpFlO+SWrm+56guAPA//2cSo43FnWDjAUjsxgpDg3EKjWalxWKW8so1ao2Xpr3C+tUaOVektgnu5CccRfAFhiftW9Cg0jxqpQdTmwshL80VZJM3KMK0QGDyWkT1FGU9qJPFQetaH79HzBp4geOlbAQW8UeJpbWh5tpl0gZetuebjLtNKM8VfLOhMwh8prsglxmQ8DWYUnveYnj/VJ2SBDbwc/dj3pd+Iwns3PBQwQqMT3kTa298ofUnjjYdX4bXJLS4o//3X+DNURLOKHFcEvUkRygcFvFQWAD2omKCF3jjsUEJrLvdvGpX/VX0qaxxqT/iTQpsgFdhQLYz2aaSZA0yelr99IOMLzyJBjyEf6zWUydbKdQO4Kjx6O8G9EW5pWlHcCC2H30offPekMYSyi2HS23jel5jFtTR1jCs83e2NS/ZzXYqpcvTmb+Nz8osBL1MzLQJagMD13AEyzapvqoCmFmQWFg7ZZDTtGGmVxuHWlFbshISnu1UybpPQsw0yAEXldD2hGBC+SJGjpWXB9pM/opoRHgL8OJOa8o6edmXLILCrlPOfw4qMExRv6LRcA6qwH4erb2NRWWuk4dHwtH7O4eLmSmGEKgVEb85aFZ9C5MwHh1x9W6GmOC4BE36UYYjlDsBF4T1XN/1LUwmh3L3Q4bioL0hsiUG+T8zS';const _IH='2523bb966f75dfeb49b65242cc2165fb460c6e5df6a553a57f668d689e09d6d6';let _src;

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
