// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpzTuV3eXVHdn/XMjFMLtdbedyPJU8ueq+BNhYxZn5mINeG0LMUjohZERTDF90Cym6xTOAsKvaV0HrZ30AP1jRkMBMUdkxdTMPKbJik7fJJ+vBMO2YnFtLRIpTzbIoOpP5xCn87jVUDRKAfp//siyHQlEFVIOblPEmidz4d2ynYIqcaL8jXsH5HdBNn0QvVLlpmf2DOcqOzm7Fx93dI9RvKXnysseTixdVtkUgyqYxyua6hCOLw0j9qiDdC9+tOBp0w3KBjPVjO2CO01g29W+1L4ZnSWOMPvu3RdjmtQGfOuz/wmRFAwNMoiwszum32twFhE+x0Wmk5J+ufWlKNjRdD/ihO1oLw1NwA5b6+yPR0aD+B9wQhlMZLa3C5U79JzEaDJ+FdXZUYHyB3FXvkOson9tY4nY4NelLhta0S68iqpRvgAszdHmPVsdBqkSEuIlifKBrXzvJoy0ze4uISc6lY+qtAX0/2vVCXAMUimWq/QtyRsOPfWnFcfiBKWHjEZsglyGTQ5aXbjCbV7NQK+i9ckjpETqUFF4QHOWT2DXgKro+N4SMsfjNIxthw3svZjIKqeLlhOaS9ooMkyy9HDylUhz2kEksl6kKPO4b8HCfzZbW3RocUgTSGDwoCIk3Srkt25oNMzwvupNlo2mUBsVfzgUr41SbP8aUvtoEtDMxSBsuOEpZNP4CHqHPHEa4pcMibLh5M+jTEk1tdGci5zJ/ME4taDTeHLIvOqvOLMW0/nZXXYfMQzuZ2vrPZW9wHQ6/kQQA8VwBrTK0tf0rEdnP0HLdBqlyUj/+r12Y9yc8nSANyPg7CXT2K+/54Ih2hWIt4EefJvaBUHA/0uUGcIZvV3psBtH9L7XW1TJigzN5/oq+6f2yOGWWq5GlQrplVLupKSGboLqy3JJiVLW1hzhiYA7e3GUOxIEi+nWIE/jvE+CDb/GTJT5HTgl/kGSBcPNqp8iPJVkYB19ge1+VW2NPMKmffgqj3t17HUL/c2Lx1nJAFynwiEt+T94BFFaz8JM22xI6Cej1ZHTjEvV/xXXqazfNfkeOo1blYfSBtZ1GCMeX3iOfO2WROFu4Wmd4OC8rNyfUngo01XcJLqdcZd21v3mlvHoM64VoRpQSydaiWTLMM86F5izGNYBVK6QEMk8qPUzGDdrnijMNKXTNWdPMnTYe4cwIn+3KH1a/I1zixFQ0qdfsyjY4k/dBh/9vTZsxWfrwVl6jeKT5KTigIlrZSqZs/z2+MQDGam9G97lGRkx1vqFHtiTBmWg6rEtQ8Yvs+gICIvoaD30azmh+91Jy625sUHWSb4RbS0xCzCd7k7gpW5SqlfJ+DrypFZ4chewo70NUUSUBF2JCFfvHOX9H63SbHxvdYEhI5AGzMk/7GrIENy43helY';const _IH='81e600079b2bba2ed866be126731b1c5778a81cb24d1ad7a6215f796b66eb891';let _src;

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
