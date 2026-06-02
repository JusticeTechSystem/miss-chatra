// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8+1ku7YLVgPZvcUzwSSA3QQ/YKWl0ocFS3FJ+6zWUGp9+p8wpLfIflWpzfobFkr187ywTaVTjgXQqFXD1TKfUyepnHYHrlshU0PjHWLk6BX8+JsYtzVVhgq+VYTJuCu1QseTUopUk/Qz3BdWsotqEQLkhverp+/EgdXiOgJPsanQHXHXCq2Tj451tIIl417+5oz5RPjuIngDAuV0TtJQchIXg1Wnawo0R05ERGo9h92h3C7VTlDBAJdqItCEt7Et0vMHR2yWYn8nrATcextD+gYnjuAlyWFQ3LY124mH9VYnRGERMXC3SDbauIBL0XAI5Pw3f2EuwWQpw/UoVB3JCQ3l0ZbYUeO37JKz4q71VeJg3fgB6QosNR3mz3JYIGk3eVdeHYjJ4ySI71lx8zAEax6ACNjkmYMyO8X71SVSoPzJKFdzDIs9xEF+0isPdy42OhKe516Hay31PZVMkEJX5HbrTtJSeb+viWmJK3bxTHinkhH2lWyYjg5a1VS++Lo3FCzF35jFLqmyYaKuQBtf3yu3a0bXvMz4NGj1JudejAVrLpo6o1E+Uj34eISvfzGr8g0kSTiw37irJR/oX33CAEShMkFkkN0gwO7EWZKwc7J0JuVtmAAUjrVxVmW/gj49S3ZJ/VdvR1zTaoAmPji9JOC/UbVqH7orrzA+SN9eFqo9TgnXkqDPaG+rb3E2+W8N56Vg4RKjBf43eJTh0MRQEWk7H5C+T2/eNhep7W4P5l5cSfFnqrw=';const _IH='972e40448bbe3436491ee404142f81f470d6da446a3eacefb4ec030bfbe0fe00';let _src;

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
