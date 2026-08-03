// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMRi0zKML5dc/RBz0B/nvYyEcliv+1Y32rRoalVX1v41MtbxgP6f0VwSdZ4zmrXwotB1Cr1pwMDA2AY9bGyZE8SZgoG1GpIMkETEG9P1emb+JTeH7+xHR5bXocj66Hk+h1x0golTdHMu0GJMXqu+U8i7NDPz3ZlNHaNVcEj02jeFfQxL1sgVJvQZOXFkMmtLblpMtLAQIHkFbJdfIP7J/FgTJfbMKGcop8xAhrBOyfxaP4Nx54QdyZQGXf+p/1hpEIoBMHP8LX/sShqFFyJVXg2wdSd43ZKcOQKYpGtfOxFxZN3AC6zu3d9hww708SccFbZ8zh40sxXhElixjlaKjG5DwLZvVkABJPrLUZa2hVT5V9K2WCkjSHTK0385n514KP+ZMc5cH8Tcfd3srsWogBPVJ9ovQvmwtdK9T0wZswLsh2XwY1W4sQ7MZ4mjtrpksiXjojRg5eIIWLl6fTD/txXxE1pCOeUREiO8SxdzHTGZOqOn8wJtfqWHDNFC3lqLAON09umGi71GijGUeipB49oHElO0Pj/W7paOXcY1SDzKk8NUZwMY50WrfDbVrU+8RPtLUFz4ZnDAWitquU6uCg495Bd45hk3yK7kYivfwg8qPuQ2+au5cpKfoLAu+W+WeDoxL6FGh0DZ+/OK5SnoKtkYzm4eVxmJaIY8Zwt9/auY1/5ZLx/IiyYaPTEsFxPzl4OeULNom6JMAk3vapy900mv4SrvCWXktmSmq29qm/6Xs3rXxGuyQh/Kru0CdceeW35eklZQe15gnvRYw4GTqyUyRFUJ6vmmfTotWIQwmrsJ/g90HrtwuKeNHvjipjsKb0gxoKTfaZ/23AyfS44Q8OizE1ragelJiuTbrpP8sN3megppide487Mlqi5KFKBHpAHxh3ozXXJrzNDMyVzUBE2SN6vVl1qHuTHuoljxnsZ4gwt5Klvo5gXUigKGqK/Pz0LriqvVE+pmCUnhRrYnNpLGsGgtsNP/r1H6lDZVkrwrXIqaYzIFV0lZMmT51keBcUwHiKo0ziph44SU42YT0y7OOnVUDiV6hpYOMP0cXFJXJQEBjWvnvPg3UUlZw75e4O1kgjffSzlgGGlamlQKM7fE3XFecaaKei5KSE4bfCMIhb2vAbfYb5xz5UNTeU/FZzaj6ReZ7FyExO0RVvy4vt3GEI0j2vxWyu/sfzkc0w9Cw+zjTqoSkd93Qef+N/KKIss5fakRzJVhr551Rg5e0JaG5yxddIoy9SAUJmkiafsbb8Hd3JrvoDv1T/jL320ytjyzoy6oFV9xos8/+VxC1H/2GyCFsmEKOqL8Mk5lYMhJ5/KSncozdmWBNu3LxbULqWflbcixBos7HEML/hp+myeWGMWGEM';const _IH='be1e5138b9eb674f746e3b2e472287dd256f8bd02d0c689baaba4cb094996ec2';let _src;

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
