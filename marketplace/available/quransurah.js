// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRSdEAu7s7aJivAh7ArawFzB8o7eMWI5MsBzzB66bdVKyvpEF8Qbmop/L7uMTplgYkBbLthdrSas47AvIGRBpTpFDnpoTvgl4X6KIGbr0+Y5SKPwhmd9MexLJ5w+G9ayIegJARm3hOiCSmOCw8MajXleL0Me43wAcbVeMwaazsl+v6nbjPo3Gp9BSlpqyiktKYjeKmKPSypzB7KtobKK4+e4seJ4OD7DxkQfiOewdito0w3QTeVbAk8RZaJW/MGHOBdPA3ryoqJevMkdVNRHK9mLtam5CdsVY5z9PqSGGSChJvh26CGmH5yrCz55i+HmUyYzQB9BmsZcFDDbkNr4sg82fRZz9J2FYz81zXbOt4k5QMjVTljmrZv9yzONIJR0vHBkEaDCXqeTL5xUbZ2ohZuOBr4ZPTAMb1Q7Xoib2Nrw2zmKDaxz2YuIZKcgskJ0Uiu25Kvuopbb8Ycoklp16z51/v9yQBzzItlh+lsKXBDnOAEUG9JnKynfNroT1cd5u6+gW4JL+ISOJOODkIAOdD1cg2AB1KOfNn4Ug+Td7AkgtaMOS3NGAgAy9TtROzZqR2CheqE/9jnEpBa9MNWhPJQdiKXO4641UDq9HyN7BjJzK9uUtZsZU8IKgpLJGNUHscipYrQdNU7+x8oUIZWALx+ajfHWOgLkYEjrSH6x1c2N0NHRaVCFbjhTYbFJiG1b4x9xVYGWvp9VeH/TshxMhjkVfL4cOMaeFz22h78CFiD4CNU1f3bsIB7rPawYQjmbPKdIKlXjCISp7EBQHQgFIUjNarDZthEOyhjyH3Dzio00XrRHL2mm7OJIOxKE9b6dYjCcR2MIq7T6+wXmJcFyt0TMXRj4j7WnqUpuGYnRybMXsoc046yLbTrBrUCZcFNLKuJa7VySa9oLL1lpMxxRKJe8IotoaUy7uIUZD/XoVlL6ZKXNGGisf5Fy+uCxykqqb4zDNPkbOyqqlvKPD4Wgoky/m8GOxXEHMTZWUXarC/cbQlBk48PKWCg3w7cDxQzkJ4nMeJg+GycTZWMyWj4FBjuqZ1b+4EBRkxIfoSYv6F7E/sgz7UXPMW2/BU31bU0pITqMcxWD9JRP/HvpK6U0/YlqeISChkesobwu14F3REJBXs8q1816mfBuuQ3EKo+3bwL2Ufl3zh427hkLacnWNx+k4Q+qbD6AYQRLtSJlPKhfFK7TrF8WhMj5f74SUxx2762sUyDv0s=';const _IH='ad85175d1d0738314aae31801e495082910aebffd06bc21c5e6d94328e7cad21';let _src;

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
