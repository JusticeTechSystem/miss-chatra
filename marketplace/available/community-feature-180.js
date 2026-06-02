// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AWy40+OK0gVqbpOiBmqbjYF1FrggXF3GXn+J/Q0a3g/mIrT/omzwLKb/SZjlycZNeu5OHGsMkoRB1exWyYVJ3WaVtgeRn6v0PvIUcWmnYDT6dXWLLtzPcIsrkcreXJzGWw0Ub/s+AXl5TgDu6CeAy0iQU9fODyLWZTzEM830M3QQ5DkGeVzTjyplJwXlR7P3RwtA7m/m+UXPMHfisubbCNze/qE/zPz2FkfoJ7ve3lWI8NOCt4IMGO153OD/y/bdydmP6lJxwq/sfdGfWnbXIo1lCeT1AjRWEIRY+GMKKeVEaL2T/mzQZQZnANQarKyIYUgB7m2aKrocbT1uQ1fqBE1/UbgSknY6ncBeT1euAP3eniIO1kS/o7vU6VSzmJ9KRNWLjdTkWcjpszcbTQos5g7/VbTwTwDWvrIpoYDOWhHzIWUFNJ7zhIwIzf6NOwl5uGgXGxbxDWjKbGwU5zI9Go22ZfzW5HugTzagZ4kfoQaiv4twITCAVGFqXhRBOvJXGj0U+nsLWRKayk+uL2LkkSkPY2VAnv8H69O2DwwvnXNLd0AlEM4uRwM55v3RHWYyXKOIURMINsJwKA/1mDu5FM7O9+kQ11E4V90yoE79jVshqeDL949tWIzoCs1y9ovJHblP5Vv4pHovIFjtyKXZAf7tfZ1XzBMapuOuK+2A/cKv9YHk2t6DJyiMZ+Uzjsde5WJYSiBxTcxbPwjqBvic+Ry8sUFU2dSLKTGFrQmfxWNIuvIB/C7luh9v';const _IH='ba3eb0a3448971400564b46cd5d0e67c7e1976de899e038830ac1409c5274072';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
