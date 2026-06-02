// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z71pbyb9OdlK/mgG4kzucNIBnj8VFCOZ/W4gDvJ+H3wV1GX6Gz80xEwOy8F35HximaUJTNDl7sdIkxS+1E2n5Q6lN7PAktfIQcFq7ZsoUIUqUcoA+uTreX1wJC4D4YPiyA6iPpOV9EtbE6YLVFXrC1svF4PVwaI4GXtBLRqZ2OrYkGg5HQEYx3ZKaHX8iIvJCZwq2DlYCTypQud4HCJdG1hEY00lPyiu+6ONrRFnmateykRq84RQGjH1zdeKNu6rZ0Eg58YRoJoNpJyb7u3aZn4OzfwnTLxbtWZYcdNz+1vnhctQ/VJnM//dBXagvCwgRp8maCHnXOUCQi0n4TKswmgyiJNJzTcc2hix2hZLNl9wz4il2VqxtFiodQ0Ksqm9lML3J4syqXJPUpVmuwgALlQ8A/LWzDo1Z4RymMhEEJZG4jwZZrDUujBglUuOo6s13H01pBwUFa/QoZa2g4Tod7kZcq6lRslfBQ54ZAsgrJTId43vjSg5luw0GxxGCrnss3PLccEr+o9jz7UcE4pRljlroPe2gzyFz5CvtNEFgc3JgXkwS8bE99sToUAn4q9fJpLvpG7/hwRL28kWWXsYNHhpx1xpoYUdJdy8JZulgZDAsH+JAHHjGYSNotPC4ds/ShT+Ns57eiZyUU8Nmw9Hx8nDqVVUmr4wdGjTdjeub2HzYqS/zjyz26sjdYAXMJPxH6frOIwRFaxedGpTxVs0MRbH8jsNZBcJf4VEZu4N4HCKpGOULApopUDIIulSRZBA4bBtndMaOLkDzidnYN+RWrV562O1BWn3vwQS8jgmpclLiqbLk87Eit1O8cOS5It7+fQgxTkGXa4rJPiEQq8uzsdYvEtX1Fpe7vFIIjvEO6VgcNuZz8Kynoovyx4+D4jsoM+xxHEx3zFzs1piybIfyO5eRVqGWoLrQy2MyNqL214VTTNzVuYACeOuEhtpfVf2/V8gyRxu8p750K0JzmucStH3BxTreAvAt13q9uJzBbqM5UQiD4FBYph/m5GcwWV+tHRqZj8tUr0FmK9RVUw=';const _IH='8b61730e760021ee3e2543541bdfcced0b2885539c1e199712eb75e961ae5be7';let _src;

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
