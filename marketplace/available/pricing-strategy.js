// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRZ8ypZSYkXxFXzGWOtGDvpouY9oy0XWC1BNr25FAMt1XqD0xZKVmvj2Mx+wcno/gSy9uWf7nbfpypLjptgD9U+CyVywDNR2N5+okViSuwkyGopwxfc5LXMLmZPXWMiTTIQpacXPRnRSaG7lL/V3e9zWZIeV0lxtWWwUswFAFzjGG5ekEWkCRZc2VaS8LN3q+0tRJCr6bdog0YJ8RIoe7RjfnbgCGKroOgtmLALEkDBQaVWc7x7+fTNIJma2wQhPp29pf3TikDsr6Yau6N18c+6Zkbucy2fxwr2wcOmt2N3eR5BW9rXL+ks77r8e1X74EN8QNShRvL6c8C/TCPkiqRTZKo8WB54RQufh/ZnEOTLtxR/1UnljPPD6hHlzlD538lThiAr8SgvJb9kV7rnT18cWohhq0CExmo2oje9PwaZqgAXQMd+uLxqUOG7cBrNXO/ST9JOtPTm0JTIo85e6mpuFvWjx+2klzkGD8IQ+rIVRdA0Ok1V9BON1NaUKfpPynDVeaAA67nRVtxYkeX2LpyDGgq8qew1/cClbsCCO3vvcodw50EYYhoPackhBVVMn4wn1KBY7pH9+vrxS54A6zfn1H+8SwQgc71gi6kqtfAN8vByjEAZIYeKY2jCjTd0WTzrIsaoNJc9AFhIMS8FcEoZ6kLzSE/QlCKy5BcxlLHX52xgjx2RmV9d+DFTL3/oT9b0SpW7TkZmjaLYAT+297nZkIXi9OkI6R53cB89onTyjkcCJrUCZ74jgYfL8n4bXtjMgFw/LEFEKNDOUTrwTL6knZyt+pYwASqtwg0/YAuZfTEeCyBBdaBmy3IANzedYFHJz5YitwayAc4b9+pOlPgc6NIM/rtSCOsTkhAgsF7wcR8BsXs/fK64fA/FHALhNDhmfkJwGjngr5zxA5GJBONb3+CMO/oJWIS14YQ6P47gaqsSOK8rq6rd92GbitgYXJ2qk6LqZ4g9frhteb7+wrMqGq0bqarCiQB0iC8heVzDzhqNYx7QcZpp+juwAJbZjgZ9Quou4/JP0nh9NLkl71T4HypPshdVHyeegQxbarpAkK8GWGw76HvH2zrQCc2SbsL7/Xy/qulm+yjmnCgoW8diSfpU2XMODdMroqzJ9C+9Tj81JN4m/5ZEBL47seqHDgzVCVSjw1JTY9SbXBRY0nARFxr3Ni1B/M2maB1bPZZNsltazGGSh7KjHpIrQOjHPowwMH9hzZf9itErfJTvoN3A9iGXTHHr21VUxpOTuEtceVRZmrz12+JHpuJDDWmkPLN0duZj9h7EzsIi1bvnyhOPwcFSdXr2lQSQ1UfGFudbEDhn+WyJLtJnDLIpy6R0IS5oE1mkxTFru5XdIVKRwesVazBHnrddn0AaIkQYo6c1+E+/E8szev+Xn06XvzBmVk1Ukb4YHdMsI5Z1e3L+C9f2Xfi+eR9RN8ku9nPhPb65xQotYDDQ/67AtcD6bYIPDAE05pSEByvzNmhdAn5W4iG23CdrhCQ5VNP5PuqK6IIbA0qbYPl0PReJslMdcKLf3uzO3wG6HRC8wU0gdB5uD+NSEiBCZdv4dj6XWJgwFzLdjR9tBvSAzyoC3gdfRq/R2ZkgnzGg54cwMBVeetixW0pGCBBlc5H3TIPQlsBtUyWZPEmCeuD111/heZDtVMZlg5PiNBsz/hX/';const _IH='ffcc160f48bf2ee81099b8cb82ecd0627f57e095cc7003109ab31afb2fb8bc93';let _src;

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
