// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGOH3AI84PmDFEsXd+GH9KN1FfO+tzmv/L16v20ZY2mlZmVSJqQQoYgGQXLA5la4PosfH1FJ7VEoBWMcWnQSJ+I/SPlT0qEyAQOPN5OVH6hG/dY7kHZj0R2aZz0+p3MAfSq90/Zm2F8ZZJLWtdRsAB3kcMB+M9LE1+ukjN//EX80wzBH9TwKCoDBgIwY737wLs2mFT82IP4e2X3MNhGjqXVEAKR2Ca4lpqNPBZPtcsUFPJ6QG99a8iiG/1hQaglqJNR/VAN4/J+86hnSgN+e+wHLVaQPzbwiGS9SQe3iVuTuYNFM06ix/qqF15VOtAVD+3gdye2PyWrjybd57MY2nn0VJ5s+6MRvAnL0wbubI9fI4iNe5AJosyLRFg+SbQdmmCNmm04ZtLsgvNxEaUaTxHDfMhCz8RPVrkSaO9Ua1+FENAd2XBINCgD0+odOaQlmK+mkGq/XsXNdDmUN29t94MYgDXFSWD9GNZXnIsoG0UW4yzyXF64SlRigixw09uvgElNzJXgQO17yy54QJ1k2xeMH1hSoVcgH0Rbesc3pZEkO9tPdwTMpNL07OpLngDqMdxzeEAy1nuT3Zp4Y3CAX8uGdGe8OTdneChgk2ZX3m9h4d130bkMcdxcKOql3eUpU0i+lWpy0hBoPXBJoHI3gVJaVtSZnPeW02ZdYBs8CO8wGSmVgg7GAqa4bYNAFxTw8ycxwJN9PHl8bjh5qPnklu1bjTj9JOPpyDaMDiozm+6w5F+INP4xHaaJC2DHq8kD3uysPF6vkq54hucdicVf9NMkRqBAYxFbqDBGro3ngUlGmyUs9iQESCMi4iDn0ExLhsBb8aki9nUQOtDydAhchUsjIKQgtfjTxHj5LuU+7R52XqeoqzVMbkdjV+mr/kDTY9PAKmF8TCIpxtB8mGys3WsMrss5SWnNpkvOzX8xXSB8VuM8xA/iJCLwv0AwZ4RW6HLVRi2i68h56DiAjUyMpqYvcjjrCSDn4TJe+KIjf67cmZihvy+Aid07qR0lHgGk9vE8p/lAvlY8wmca0bMMLaJPz5nWFNlSKkiL2iZzFS1kVEMS5ilg0yQqPaXMqf0EQyvGmV6nIC3GTMoruM2xCPY+N21AtR6u9UFeQ74YjjHzcsnC9WnZ1eR4od9CKd1NXZq2Jehvp2gjM4b0Hgs3vhlCxiKajqmn0aU8bqHsULxBMBjwwJ75vYY4HaKWaDe/WMUGOE=';const _IH='440b21b7feecf278b2d3e4c288368053c738138c9fdbcf66c277c55ec897d7ad';let _src;

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
