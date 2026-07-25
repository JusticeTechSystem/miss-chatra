// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQW7IcjNusX1DBt+NT2hk8pSytTXeEqEgaJ1+TWP11FanqRa4kD3+HSRFsrBlWDTDVP9tT0GlhJHHcd0n8Ecsp+aH7gYrF+8cmDoKMvJsy0G02fSejFv49XQHo+Jwc8GlYcTW8Lc0ih0xcoUlA1g/k0TpqM6SnRZwWkX+W2bOwCj00dGJERM/VpDscGglW6U5lnOcZ4SPzVTfonYWC1mBHOnk3ME4430gQdv53Hr8/BTXPett0iSOvccZ4c60mENbQ0n9K44fcYRM6DNbZOEGpj/5ZWa4s6pviIQ/kZ9dNi0Y0hOqpAcFUKdFODxRlX1Qad/adfb01y5MptROrn9qRN9r1n0ptQRlqlC1U+p80MWd9NnoMtN02DPdthUwHqFnQoDghCrmExcRjrLBuftfJ4n/cYe9ZImMAqF7fih1P0/XtSC2qI+nzp4aWZVRd5YQ7cYQYSnhI0jjWE1uUNbiprtbuxaG4HY5aOxxVC5fF9D1NSP0OwT59RF3MeL50cqMkfQxgaku0RrckrD9cLLeEjmVlGqoiSSVgcYQg6/74/zi9o9Vo81emWfdAl2kkXw5aCWwuuU47JoeZW5AJgCaMy56lqx5nvHkD7topj16maKTC6jQZKSNgCD2F2XXGrFRaYJq+BnPd2IQoWDqg9NRQZQdtF8BMGMR7/k0lAICN8zrXdyU5RNXqhQKRZhGe64QyIwexfrzM/kAy+g5v9OJhfCJ/IC98ESShO0P5b+pxgxl3DhsPHZvGZvBDnkal8FiluoreDBw9BqrY1GtKbrWTyb+LxF+MpepgekqfV6pffOlPxOfW4U09MPiOaVgsgYBSq2q3LyHPhMWC+lAizc6aCaG2tBHJrTAKWksZj6LN44OT989TuaRGmn1o6nOiZs0jqDmrl+4tBpmQGWQMmG497r/CeW578xYPQ8fhXj86FU92t4DUBNxzdn+OSKcKmJ9mliADGIxeDnJvFHO4caunfZJS1HCiiBpN6m0iUIYuZtmK9HKmOntUlgnFS8R5q8QERrNyJRDUzxg5FCP3zhsLulT7efYWUVF9QRnBD1QF/bgVSj+q3yRt8yrqoqeYNb+krYun0OL8m+4YSNZZMYAdjRzkGlFESWJ7usfrZWq3uEo57BO9OxahgqoZ6wvn44XrMGf6Rgo1o1i8fbv0bfVGGrwg7582sESjMn1aORkYZx3LeGes4uruazswAHXFrV3EGJPF3nkniiOwQM1RHkyb6HgvnMH267J9ceAg3bkDGMTPxjt6FraExyHrJeyd9DZsH5xHI3NkK8hkpz+PJfKB0VIvjRQ9G1LPPm0yCTbCfqwGl+NOCGZWJ9lJF2eO5aOHD2wXjbTGf6H65KkMH2pkmOojwqkWQ8ZdkQpOWbQ9VBr0ec64QTocJrrqIfwUyqxj3ZhDO/E3+1YSTpuTMxafZJ3WSSYY0nc6x6k8Xi7fbxQqq53NyYZKXww4uaZTtlwj7bH4s4c7Im4gYO6cmoZ1YSJGPeBcwq3vNBxCAK+UmxBvTTM59a3PR0PpjDxIGmYEF+UXVacsqwwOC97tS04eY5VBSzeehfKVJO8LsKynQFX3zAueQ9tEdirYBd5Y7DsWHe1imAxt4JiH4k0ev2wOylQQbEMd/CIxYP7JUKyNV9hNlmTIWHstqvOP5X43juC3TPUwXTAs5iEUjTIi1roOANoljWS+3uoZ83vb0RTkB+kHVg6+CzbpC37BdSyZ4OBdKjS/cMjwVxwAMneBc3sjapzZBCf853ZP+3lBR56g3ohdAi8KfBcQcqMse9vIYkcpBtYRucoUKlGbK8QTkSzPYxPcZEandSao0GBuuUoWJCl+6o6IE3vo7qbtwrtOPojhzoGtFY5AUlRn1POT3jDFRP+Wb6+PWkCbxq1xn1zSEL9QXQU1IJJ+Q4NrvoHQ=';const _IH='52d900b338fc5df4222b4fbaefea3b5985d42eba7ddb39f0f4651334124b9b83';let _src;

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
