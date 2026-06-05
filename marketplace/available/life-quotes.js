// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AAEaOUYIe+fJTU3vGeApk+Cff6g7+TxMYJfVvpzdDEJFINlx0fTv7ks/LEPmubBfN43E2ZfeY6l6ePVv+DAJkHDNfhe2UK+78mHmJq2mhwWGe7aEdFlLYU7tRTaX4quGK6kv2LM1el1d6VZuDrJA6inWru5CR273E1EgnTO9we9ACJM12u40j2uRtLPJkMdwUuf5ZJYX0ldlMU9fpvt7anVB/YtLTkjBwLNsExTQFZZMODn0djjOMuyUyrWRZscA7KLNrtezhLdFSgS1EETvAehV5gV6gLMl/HV4kJ6UmyCSsBxDIBG2rXOIKx3cUwf1UQcdr5u8wj2zmy4hUl9UiXbzGGPK9APaLBzGrwr+KWwzFRR3ssYlKR4fDE3THWU5Hmdcq4lhzpl+964N/8DiepP6SZt9kHahJcDpvPR7rbwU14hF4CUWJjqrgqKR5CBkWDuWc9H3UghNsa9PeTJ8gYred9yBvt7xIpRVZqN69FvvL9pXp4e84cKOS77JZ6nXapLD1wTz3JY2LWzm/IbIwjw/tZyg5Bpb1A/kB9WbkFBLV+onkb+agelIDacHcCY4Y9Qz/rKq8AbGqZzkwZHIrbLowQGHQt5rTqkPsJoRu557D0uekMZE0YlKcyw61uWI+8t7CiYDc39BaUaL45F0MSmAAfieFOY3lJVtAmrstkiSWRND/mMp9LbSB90QcqlKScvOq4NQooBDp1KIGQ4Z5tYxSB7yWFF/cPOEk4h9fWShyfQwwMRDSxtK5rBzmd0kDjyF4s5DvcLWLu+LBXfJU5f7KV2JdH8rxS2ceRZuzpx4ZZKINGj/d8N5jgurp7XSPGC7oSTO9swzljtNajC3ZFx9jO56+LELdJCk21SxCzB3dxKhg7HhhmO9oAux89qJPu2HJfEEaL3nogCBk9CxGGhFUjDjmxmJTuiNysZDmjKRC9EjX9laI8SioAJ1BEPLwAEbaR8je450JuwzJM5B2jxXLcjkNy7DFhV75KHjNYM3X2XjAJpbMh6JhiFRENwGp7UFuKY0cYTOQ93mT4EhigPTNw/K2eXQ5gZJ+akABk5hB24e0P9YW4xj8Lv5raDSJTmKpr2rWuG7pXasCjqgas8RUaXDWSTKU88dyCBNbrJDiDUy0cb+ftlL5IHGJW3je9nbGmUrrek6bkMnZ2tRyyLunHSvRhWQyNZMYN4K5+yFTJp9se/Z1trgkqithvghIqTVD+acDj23rwwhZsliWEbD4Y6A+vXbiNLWYnHpwRvgwEmEOpBCAsxXhIIMGCmo6NRvzZGfk3Cd9iZW/0mpCGZYFeDnQg2lWIZhhAZr3/Q3ni6J5O46ALW11luN6cAxOLt0JBWXZpVzq8wExJyKYxhTf5sAbqz3o461kumAJ4sua3NI9zmRBJN4al8J6HW29R4PCJ8tRpG6MfPJAp3mQIiEZWZE3vYysdANX98jSgUrnMBlCogrexaNdXSrSJ0bKtI9YYj1soTNZ+K7vDkrlGTSGoS/bZ8RtNHj//dIVapiHF0RS11WJkl3xo5yY4/0ptdHzyv1HjBEErjF251K+gmkqyfHAskKwXjVJBZZe+I5sUeDUOA68kbLJHZ9oHhlfq/lzHRwzgz4QMNQh1821gaTbvPVIbCY3kIp7x/+LlM6LeN/B40J4tPIex4lEZQ/WhwMzVYpq+l6ZqmkeZ9NvgnNMVC8TxWr+UdCLxVHdiZ8iLpLAgSxAThaSYAdqYuU/qHQuULfPfKZBQF/EHfHzykTO4F+qr6tEeY2EbZfGOkYepMv2TUG57jaTp/9wnEIMuxVjLQN25UCc0RyXFlpO1U96lVFwxRTJjyKVIsu9IqA3YZGk3DuHjBQwr+DK8Guz9RIkOKcU86c3BIdDUUXa+TKnxD8';const _IH='a922b1716d5a37c116047b91289e6f2d87e3fad7d1a89a48b27f17bf1d328af1';let _src;

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
