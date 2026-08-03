// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:20 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRe0odjZ4BB1HOqwzqWwVApXdEW0AcNA6u2eYkWCiM6Hij182lKkoVQ7zVj9ARmkRGtjhx69O3oaqA27MFBMGQRcW41aD1cdnnJaVmQf2I8aoc2YutAkYwxnySYiMGnkgV5ehZ4OlDbMnIKVWcvwrR2bnQg7Xj+fM9WV6fZS8nCc327zf7RWl7hcLSZN8nPZyqv62Wd7Doa6MegxJgqRFASIg1Py5bseNp3kAVygQHZoIyL3cPqapaVlKKH/ixSqFewPBbQhXCQFRx3u/dIvJXz13Qa6prkGVdS2FSyZ/JElPrjiS2n840u9imJ1MQj4ULAam4LLZFnzbiOpI/beE1jQ1qberg9rS1XwfdsWD57QbVyL69qHPz7XSWnaaJJmyAiKLKyH4kH9syFVZt6D+DcOHb+ATzdcDvHgUp8v8edXkPC+udz9kCROFt9vlqNJAfSnvLkA8+BeKOgClCylqq2HqG4NYBVwUgv0TVeO+FSMVNjemKqVwmwxzF32BVoRzfOSD3bPFb6JfzHNehzAfFVpe6gDyTBH7qVoUqtY7nButWxzzi86epRNuNhEX24Cdag9A8YzBGaF/C7UVGRztALWfX2FaZ9nn4uZjMKfN/5UtdNX6UNxQSlAl76knC0CKCgmnL79orUvPGwZV4Uei4gOhoZ3V4inHTCbxPhDVa0Hk0tqTCYW9T7BEAtkv3sIhet3pyvgAZdPpyoPbOqI1MneKQKWiuyX7P+ENqSrmwrX4NiXqR6jY14j70msQqYtqVCxtNxO62seCSDJRQZ884acKyTXqWkaqPnPXR7wKiAYeBI2Gf/EW56aXKbJ1GtvZL1vifhUh6QA9e1d4OSSZ/mexLjo5uSFZkGkoGtJMaSN+xQWwrs9fSB/TMVPawPJEIid15WjktagnDeZO6vnDBPAJsnEpGv+FA5T9E54qL74XTDZtziSS1SULBTT4BhkMkzk7LV7DQdGjqeA1A6ItbJR5CEI+XkkFpsope6Yr+wP2rfz9MAPI2Or7fk8A0XmuqODl/yJB9LzJpvS6UUKmvVt8SrQMwCFM9iJ5SzlHOMTQIcRg7dAQDHvNwhvUyD3nyu/j+meM6GcnMecrDe+o2S57y6nfhFoDCc2VBa3n6aMuP6N61fBSjvb9FrOjcF0axmz2coU627M0SzKPvob0gZHkhOCcQuDMsoYUIXzP2g0JTC5VDyvfzRP1IPGxGAMoetS9NCir1HihFqbQL1NqhwBVc=';const _IH='178056e2718f50ebc4f8adf7e7ce5ddca1d407455c6bf184479da3d81288714e';let _src;

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
