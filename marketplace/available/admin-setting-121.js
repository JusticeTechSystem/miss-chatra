// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C5ATtXoqMugxNXRxWxdURNXNgxz/EVhFQo3RV2aQT44XC6TlBQKjWqSxrD7wJ/5/LgKL9djjWO77Lda4xqKXWKuZqTR4mr41v37HfKKwmO4/Je38eX5JoxPnA9XeAeVkomkN+jkvMmCiEE7yZMX9Mt9b+SGDvO7xrSm0yP938JOIs5A/sQh94kq6aAssDWeFhwZ1yUuikt9PFoaruKS7d7YT9pmU48jzbnn435aVX2o7XEwFxO2fGFpxEKWS71/sggkUYQ3CyRZVlUqdiM2IRwLFDX9EHkkItbh4NxMemcde4aynSJEVDC6IS2zWu4NS3lsh6ubNx0g/QJki0j6FHSF/Y/jTH71M3GT/7oxkgE+Dm+GMJ5WQSiWWQidxR7NPqkdgeB2K48VS0h8Pee+/Ys4yhCpCHAb4NtIJeCRH9chDTBXUdAmj1CPuy+WRb9Njwi5IfeMJbpTorNf5WvgUawEJnqdEERlqBqytRaupYlwlDj2mLRkIixEc9tCa1oAiSpis4oWDM7wpTKz0mU+25SJrK4GrEPDiM5cMw0cMJCrbffJxwaluwAsKHm6nt53/2Ccug4WL98cRYE2sOF7q+ZqLnXo1rtoLcRvN4n89tV4nqf3sin5WksBJRIjiPjwRWRI7HoxSCkzvlFXh24Lvuxx9upqZGVVZPKCeu0X/UbLkjY3NgdiLD166Klp1eDQ1Rhi//37K1mZ+UM5lJ9yUL3pIVn0WpvmtcRlq84vwUycu5be3vjojUUniQ9NiyhWBJz+qHlmbeijh85WkGJgWjXHq03v1FM+JQ6foN2ejyFOn7y0oEerbgUTbz8HML4XRAYsjgQS9KcPwRzGfzpXCCPuefMifoPPXnNrWGuwFGTEg8bUE7f5ed2guvZFbRl4szUZhHR0uMRQlWZIEE8wHK7jf7uD0JgFG/uXKjl1X+ojS+DOhF/CmD3iZjg4IFHXEqYIBrTzn57kWxAQx0BqM7HpjU9D6vGB9ZnZuWUcg7c59sgSumDBQbOnVBlccIvp1nU2ko7YHCe0=';const _IH='b54bb96a6665334b019726e1afde311ad645707ca44a4ed1338a872269c77556';let _src;

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
