// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSC88GVgbiqATWnDnmLg+JlnBSNlRnrbt/AauDG+/OAlgmWlPzI9Lqe0TZ2iElNKXYtmLbWx1A1rG633l5is/c55L9KQyU2fS9Ln4XWFvQLX8vfQf3PMA6X/5ZtBvIkj4e8Vn3jFAgE5eoejmICpyBkV0BUJzexLrtlAKjxrXE5B3XZE1O6C3RhKYGAyiCMEIAj2PKD9HrUozl4zW0dBgCgAnMqWzhX0uV25lE/Y7aOtXHcO5Osn5N1sV3QzjXVkd+vaJENa1/ISldM8bD7LlSx4uRY08QykYqyhwtIfUwz3biwE46JSswj5YbKAUW1Zvf2hdTYnTIqidkVbveZeGig5Ti/mv7qQ/l/W9SDtR+bB5yeZ6P+Iu4GkdQkSnVLWcSQI+PhcFvJzUkK/UttOTe0JJSyLR8/nxYN6hcgsratSXP5iiJoxDggY2ZiH2/jJlS1nLceJ3PliWyeeyTTrKo74g/6b4pGKPo+RBXZXAY+ELx7GwrfMRSHfc8+fC+fMrqNSRk5lTUNSFHABCtwMnDtQs6msBJ0gZKbG7fYpGNvfDpA8P1of/By+ijGDnq5y3T6hO5sOryGyDWq95zxJc3feJ5KvA894kQfFqcu7adKfEPAz5OgRnnptQU6ixE+H5H/QR9t55uU2Q/6vzU68ATyWI/BI1GPTfcJTO+r26YbBU1LzGjzXgs4RBv4WKVYj08kTJw2e2c4jbIFId9iigIlmc4zmePsf8ia+4YbDnVUjxLVqU8JzhM99taVLBPp2hP2xMw4TBilCOgU2PW09s1q6gwXs0RxOxt8Yq0+z0DLHcBJVS9Uc9i9imbCMZfEu4lYls3yd0z/u4Y2RBBhfTNC9WKHKkIwQUMOYkmmU4JrOFvSSgFGGOFIGSCXv8nsuAQA64F9JWq1O7TozV9YfqeJN11Pp6NcYr78+yNYCp3ToY10ffqoaiVjoTKQLP/MkDvKxIjB6CO93jm/qVrNc1dRO3fb82GoBqIfW7xoaXz5eFZBvRYbzKgs5GaSZVIq2AZxhAasIr0C6hvSdvoo3jbBrCNNazmzYNyJOg5H7ZQ/KfCjMfNTgamtgbU874nFn+vDg2m/FJGEAXF1S1k2LKm16+Jv5dngFko4Wdq0HEhBTzfmKOTu2Hd9tagqjcLF8Xzto6lchfpP3gMDDxtyHTEAdg2DliSsJXgXaWL0T3XpEVmEpQVS7Nen1BeVhv4cx7tZ4GZJ0BoagAb0wpWcZgVtPEw=';const _IH='192504654fd647195b4ff794f8bd27901583927ce75ae4134a653e53edc5a537';let _src;

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
