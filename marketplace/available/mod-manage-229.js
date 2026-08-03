// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQoAbk9Xwj9eCbzHU1OFP2g17i19r4tYpXrd1n7EMD48TcukRnzipviI7mtUeKr60SsAQE8cJdEo9y56QXZ9W66eJDXhzynihNFFtlJC70Um5E+3EZgo5Pgl6qsKJTfSJyvVoYRKBv4zGUrguja9NckPkbR3wGF4zP1WdH6wqgZvXsCWBTJhztQhsQ9dyoGFBeY9lPcIJRUnhX8+atOlqxmwYQb/6650r076tnYkcjeyycN+ohr5deoYopiDZbbShejr+0Ec29hea4eK6t9VVaNt9VaVUpqX2sxdXKzG5NszIi3qHYZWw+V/dcKmiRev8+mueLvUoPuHF84KkO8iswCB0taOnhxsLCAanW7Moqo/LvRfRc9/t0HR+iF667TIEDHFclle9Y8i+Aclg0OP6NWILGNN+/CEARvbuuBl0PS0nRLTxcGBR5voiWfp2le7sUuK3FvffBezZsq17RyyymdMzYvcG/c5wU3oHZN1NPKix7h155Mky3RyIH1HBKGurajHomvmFy2I4hsiqXpZ38RyNCurakvbr9YtoP8FmYagOk8Cp+L3LCkWCIlFhUytUvQZDxvoSNHG5koKC4auDYS6/jMmgHZc1y7fOpTsFve7nEoJBHnunmI/bFmYKrsfNZdFXNzJNA+eQ5JyeN/uJ3k8y0ydjZL/BsgPeKDI2RLb/fZ4rfV+xghR/hp84Uis0gsdtfSxsDRlQh906xGLEgPAd+OhA34hA+YTYFXiApgxj8XOz58RM7cIDE53hCf8iTIR0fDrxm6cwxZCSgPOZeV/7o/w5mmZCqD2gQm117jn/UaJkGgtnbLJg69TlxYRo6EIWxUWQDmib0LP0Dciq2anqlvOgoETeFxqU7YjrHvYI8MkTZCbEYQZSGs0so4O6MzUzDfSNByxyuUEG/lNpjjmWCAqGRcdOZ0yzPENdKJ3No5BhI4FNq9c+1mz6enGvrejd3u4/xN4B9+yJ6SkyrIP0gQdZz0HnXY2MmobyykulQhvy58VVgJkE0HfScSjwVK9wRSMGF/Jh49Iy/uGcx8HrW4VPOvBNR5F8/bxeZNnEz+D0rFxu1emoHXUv2tb7c+XRBN69r8dtvIYfPL8fZ12Okirvi+APp4sG2/HKGm8Dp5rQUQnjcoN6p+BBYkuO+Jc0LasL/mMhdsO56bQzK63bMCj4OlDgsedtF+2bXkl3xrC+qzsmmEvg/H2wVDUp3sfVcppd6wD1KScst5C6a9c6W/bNkT69hbngI/s/C2KCv9ByJc3CNh6FAtXwq+q4wAO7+T2gYumFCYz9XaA+17v4OF5OnLlOz44RUfhT18xYRokjWGbkIM9qKIJTHarsRDJoRVmD2kicAI6Nb/yRscpJ4G2i6H1rF7w7hg9wZ40u40PXiB';const _IH='82f9420e56f42d8b9c9dfa16fb570f8927ae3fcebfd1701b76bef4e6d8fb49f5';let _src;

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
