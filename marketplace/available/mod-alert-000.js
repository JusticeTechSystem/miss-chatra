// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HqM64qmBfhbnd1flTv4099ZBe3qSAQX4n3dbrdpavdm4SCyAM7ijQvGicbm8YdXbU0Z8+XdVq2tsmGRslmVEoBt38rX3zgBe4LjMuzyXyTu5Hqjsdr8lpNXBtESeSPCmSvKi/jCHidDHVbN8K7jJmChxE1iLdjyP45IvBWyo/AiyVJiIldHdaDaeHwwq82cbDvYJCrzSHNNm4uySJas53DoeLJTAJ4jBscu96tNPPR23LM4C+TiyxzA+IetRBcSm933NKubQVD6l3hahH98Rqsj876nvlKRrKasA6engdZuSiqYRKN3voz6sWKqFqDmsrL4PkaYmPxbKuN7AycvlPOquqz+skGkwfeMf1WxMLA1gDVsQXdBl9kkOqcuHWNrkZGpNUlcPg2uaALAOKIyZKnIIlQBAYXLY/EnH5lwWdcJWUMtfQGA0bqYY8Qrm0mwlWpweND8GQ3brqvZkJWnItSrdCEUwFgK5g94EjnW3vTFuB1LATjI+hN2BEyG3vWC8Kk14Ia8BasI0Kuj9DmeRQ/vEPsKL3EbqeHn/6GUQg5LMt2c1RgDNODx+Mil34puDzk1e9XDczwPVYOuNCqIkEH9tocGlqXArl7jEx7mj0IuNRlR1olXa3jqWTH4koaTqKuH39Jqii2aj1Ls8z/7BVld9kcLJWB9Ltaf2LKfollFZqoj0B9bCbU3A50xgzh2PVa9hags6qN4nYqd1v82UYx9wH82OCoMgg0N3rOyWTmJZ1rCIEHPIZ7YnqJSd7iAAAraN+Sz0SWguQq+rTYy1NQ30ay3z35r2c8OO5LYpUkZSLa7WoF5x0zU5nW5MsEBvm78/rsCz+OlCi57F558xyAXWUBO6Jd0EVBLlubje8+djCpXSJFAFowZtWc1QySJaJ7jnDBykJQkCr2i73bZmQOCUMgJvEa6iAZOHU3U2lYQrVOR2yYfto40KweXnVv1u5jL8I4bkwZgkQdNFU5/2Gn4X90VwaqdlYz+tFx13H6mXxUYsnSAbQDET+IbDh4+KJY52fj4PCD6KpmWERddyQWh8A70NyLbeEF0Z2hLs8i81dg+PCTMkYXhOhYT+aQJWRr0v6OrRY84YE7B9AhH1rRH0j2sQr0WrBEgYPPSskmzTYLE0I8Gz2nX5X34PR5+oM13BK6lMhXuooIStjItD0OERPDnx86numv7f6cWKx0Epjw9qpRZfwBLqwIvZP5ohFvyIMXuROJHHqwKe75otutcSY7XMWD/AEB6EMORXMNgBRwcJHHqOYj9OFTBIf26Ya12NJ/m2km9ubvhcHwOCmpbZbEOdEcSOF59HKBXuBNaW4YsWvitrI7AbdX3Zz0sJW5lqCIAsObb+AO5nlPvtOfJDZmU=';const _IH='ff9d7188e0f9f33f4d3d99b76bbd444ab6cfb31e9c57718b33fab6c42b4e5c2b';let _src;

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
