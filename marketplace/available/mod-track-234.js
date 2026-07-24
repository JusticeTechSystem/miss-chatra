// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS0uFvTYmFgOLRzMdIjKNytFHGO4CbZIiDxOg3b8SUNsLKsIoIhkGxAf1XBxY8+kaQCJPi1lOdFBviGbFdMLG26WS2F02RjNEa1fN5ZiDcPd3rCr2z/7oNqglvy8+DblDC3rBuvDPctMAFUFHnxTJt8DHZSLm1xyHZJhO8YwwdN8z1EvZe6OmDmUEb+/Tzc3Vvor0zNaiX+njSWk6fZrbd343ttcWDgPtueSA3yvteUvp8Ol0MVmTko6hRLHTlPPCSEHCWt6G5tNnxgTOF/SifBlbE8ypL+FtPfHTCzs6530nREX/1QpNMgctrcBlxEI3f0ze/orccCgmXz/xPDd2gSNQNvIGhkj6S4eGC2v0qLC2v+hY57x7BrR3zb0Z7lU68Qn6gnQKxwjftJ7xayzLZc4BsHXxgrZCDA9e1IBz6ctbk2SbYWZhGQx9Ddin4T/RfG2+xWr3XTltD3ZN/JN2XCxPX+AlrGteywgTKAuRAyzo1AKLpa3SWCXIoZJLKOQNb4zJ+4+1z3UAUhxdtt1vYka0tWKEdCbtMMGUT6K/dLzeDWjUfH2K8qKxm+w/sVSZfohz3iKwJx2iQ7XrJ2crElhbFhUz6yzD+zvW9l3G8/KVd4HfEQJ6UJnK3Eytcnd/fxsp0vo0Q3NMKeFj1BmdvPGInOD0JQJfY6DCImygOM5EwIYJ2G5zQ1Z8JNN4riE63uguKwKL78ssbspkjaNldCHluuavYDdNFMXv04fk9Wak5i7/ti/7BiDEZD9rcjEcK47Om9Vh+Vjl9fv32pyoAmRWS0Eq5iPZkrzQJ/soFrfVmb4TD4DGt2Bv+319AbTQtZnMkj3MiK7BVc9J8oJZ8sA7eXtpJFA2zPomneGlmJxOz8zQOgrUKnc+1GCKYMv4JVxpJF8k3gi5ug3SAAtkGThzzHIeJ0McW3Otyg/8j54c5DSGFqoy+2QlWXmKHoNgBNgK7wY4Vwv9nal/4bL6ZRfZn4ACdGYtezjTrVgDmWJSBIUCm0886+qbSjUWtCt7Eo6iTw9yg28SAIehdZpxlQTY7Ok5Rg1PRE1RUYEcqXggw91jQWVJ9KJSUiiVGTVH8gd7g5ZIFvZuPzFIeiK2QgJA5QweOdqNqCwjoDG78FTFoFs0CGmyUHV6sme75Q/kmTfmAGoAFwEf4kSNA8vBq24pVna6M5KxlYun3Vq495jX6oFK4QUZNHgI+xPRyRSZqY48pUZ5KSuJ0y9wQ6bjKMHG9aX2/GNkuKd4V5MKS3vXSkVOFNkopSVEga6fr4YjA7pvWHfb7HSy4pJj472dQHuP4AjNJcQAyv3mSvB3LaAq5OjwiapcvtsGGYXIQo9IKZFyFsEAqj79KhhMJc6dHlN9vlm86pFXypX4iZKj8=';const _IH='7d8dfb9fbf82861692d24a0381dedbd4e2a700db86241ca04806e24ebaaf7983';let _src;

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
