// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SsyIXaB6DXftBx+D5/I1MVXe1lXNKe5W3js0H9SRpPZKE15RVb57Pqe91tZbpMTfRVgezsyBaOODbDJEg1Z0e1nGpsBbTFkSOcTWm3A45x0UylydcDKjxIb6p9AJR+2Fhwn7UyD83dJI1h+fdnnVLbzBo+CDc1lCclQHsmy+kJrnQ+tVQUNl38joW+Mze758Yg22uGEDnnFmp9zF0dWIopvce6n47BX3XAq5sEHCTU0+mTl+6TItLNtaJy3wLFKT1ehpbvhFoc6ZRkq7fVswDiR68mgKVQgX4qaAYeElMyjT09xF7fElWKFU7B+UzGfcF6AbbHkIbJDjVAC59Bdm3ez8XtyeJ6CxQCNTPBl3OBrDZdiyD1vFF6zVddxDMgelK8gissRIkqwherR66vnYvJ+KaBgQgOm+aF8+dusuN8QgH9uUtXganrvTIyCqU/kzxmGOXBdhG2+KDM+KkOd0nwEoHrWVxR3SyIqjwlpX7sqTx+HVEzrlFLg3sSMOK7qUSqCZ7TjjISdfmk0Q9C/dGsRGdWqroJ7+3Bf7oHK1qEfoL7Onl2WeFIy47dzMhvpfsuqaZw6+MxL+djUPPypgRoQVHXsTkTBQDBItp5hGyi7ZESUFapNzgqU0VnuUTCbmdejHh2sLG21nDQcjLoB9cYAekdFPNClXozsb3UQE10jtkltwKjnpAPjsYNwfC8D1X9B+Rpnf85MQJSxidHR7hTkQ9BLQ2m+ZzAS+G2lcFIx8Gnu1OGRpgaEvEfxY/Iyks2vYnHJfWU2uUgpyNCZ6Efpc2Td+pe7Ef4rfKPjNJjEg70N77XTr1r371iDPr/ao43W+qUlnIZcjyRe5+qlQYN8qbaQnoYLSg6b55R5SA+VphQu5mbqYEb30NOxxSkDZq/LnedEu66vRKIJQI9A3ptcQQbC0qSTTLVRVrpanJN4QwoQtjU+L488TtNJkVa4JwCZ10I5j1lFo/z1GJGZne8ZR18V0lG5qI0rs1pD5KLQzzOO4Qf/Oq9RKkT5R8Grso/obcq04yf4MPWkKWcQ4h4QLIRayiuL1Tzz9pN7INewrh8A+bhS7kH8PGzhUfU6BsFeWoj6GneYuuPT9IGWxjJQm0D6sUtliNh4bUAFlFvdM+sgmuG9WNmNCutAvpctSITsHurqEDhYBZXdJxInem+3eItDoU2//p/5WAyzhA7cYuRLdyGMBeZkZeK+tQYHJWzpVaTVpRa5LS5BE917MCXv6zVEiKdm0WgAjHzSuNonJslW5o/LNMxzdOwx3kr8D98N6yAZTzXiAk66/Ei606Walgoo3Z6Fz1gXHxqUjZZr9HNCeAwWp5LfI++i5BBQvDAPsSj4oSSmzgcYCW6l7lMTcokHdpiw3HdiiInav';const _IH='587df2e8358ec6e2d3afa72bf2e51b9b73a29356de4cf6a5755839d6e2a649c1';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
