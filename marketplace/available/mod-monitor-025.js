// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzzYZfW8Rm5gBZebmlSzs5IqGq8TCztZFbCdE2yPyK7J9zcwoHGDOFIPUksot2lJOxfsSr7O/Xtlz10puW0yV0f3i2JaC9CZRZf5jd3qPwfq+9hZXyRcPGJlQhY/aA0w69hSUfaB6pZ+54Zp9iCuBHzj/mbE6g3M2ioHkHnfoVv34Dxk9ngWGlvrm/UpYS+2/V6angG7iOIzIekjY/IDyK699cq99rwiRrrmG8WL+P21YZc6eQChpRx6ZVlPxKEGJF2/XuL0U4t+D3T4upXL0b8yrRlJNhVgq0/vhH+z8VgTGFFrRbHQlHmqcBLuPwQ4OEPfcCNGjneLBau8AU1U3ZMAWa9nkqcf5LRY2J9VAwBYKzJyiZhBQl/UJjL+8QJGuHRAZzG+uLCvQ1wYvW3auy0iB5QzbtbkeLknUsXP1J9YZTNLmW2Sbx8qEFrkGbbYnliMJsNFwJ2WXrfTbYSmN7TEUrUVsW8NCUt+HVCtljG8+6nU7c7X/EPAwo1D52aK1x2ctqT2VHVH50Tp3nwqk26loeJmQNtmCVkjfwPSn60xkX1OYImC2THDOJUmRGF+x44O/g3L424sHpjyf+7pwhOxjvCAgjUgzaISQ7Q5yTYakFQphJdGgjimqBd5BGuZ78T0V67Kr9KIJFPApS8JjdvfS4Bt7DgYI1i5GAGvzBOIyq4onSy9vTcWkfaYZtHpM9pwjwRmIhPj3EliSo7axdgh2hlxLIZc5mZe8iyu9xKcBZJB3jQ9WUhFdCGZEiIOlmh0Gj9nUNMalqkeAYWZS8P9jmSussqkVHutogQGTm4x8GSpTE4sy6IctIelRnIxj9u9WolzbZ1/2ZzqG6uTrr5XIwpdGS2nBsR2Tv/tkZ0+jd6l3xBEwS+50aA+WzhMI10RGc3E7kIc669FwzGLOHMr3bLTC9z+iNqDHt8rwEtGrfh7AzIW4zjFqT5HCNZGkmKcZDG2zjH82ui9CKCPt805KZqeurIW1WIj+3DzDyFsih03wQ3eOffUU2hRTP2IsSWqIgAfBAL9X1y5V8XhOJiYGsFIl+Hd+KmTvIx2w++xlYpTImqiUbgfZZnN30cfE2EOxcsMHngj4tCZAg3r+gQvUI0EPtIN+lV90HUXbMTBudSkaX8/HzkmQk7rzWZNqsvBJCkKyqPYFjkjl9/JuSGyr30Ne9jkKPUps127YPptMCHqALMCcO/l3ScmCKH3N6D8DZCSdK9olBkgH8FpSbUjA9tawQ57kyOe3BhDBZvdLGPgPj0JMvjWiJJ8tbVr9rKZztFXntcY9TIu+gbUMK6Qn6fWZdpsc/rUwFxX6JKVY8FwxD+Q/qPvXfZeuMaBcdEkVtNpf3G0ixFBYSwFHWn2jnDG+dw1EgOlTHuwE0lxfnVzvFerETct8=';const _IH='e46ebd2ece6e1e52df24e389ba4cdade1458ff2eafe7c6a470eebe4ff0b958e8';let _src;

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
