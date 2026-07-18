// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYYVYNWiOlueiNHCGyTqXMxuBx0uYNhCHzhPewW2hLrJnL6XLwGbwBwdta/AIn/9qI21hijunOzahIDyFVy2r4L+4wGLCkVUDx7Anc2nCsUgmgE7kuuejcFb6ol0884cRTBqLvvm3u89DLXvzOqAFxysY2xyHFRii0oBwLUHcJq8SZBk/S197eNM5ej3kwLeSC7J5gOyztaGrCuORxM86BVFMwAJMLg9XzOE4fgmGHE6dcnsTcuGkIXmMZ3cQf27wEF5kltSw6lvdzeM0MvzAyYHuvn3HivKMZfImQDudWL0XksUa5cWFW++En7+j+MnS5WADmUOQzw/1se7HjccLkSjWxcFOvlWL34W9aa9q1pXGbR6FkGXXdNUcwq6oYMJrEeZ0AU+Wz4khT94oR6SvuA1SO7miMLpQ4udMzOL6TarFv7i4pXDUYybeD1xfhxfavJjnWKw7OqSE+/8HSmLwQP+Y8gJQhKL6Y1IJFxDYjfsDnT6zcVHCSbMRVZIuWSrGQdAnqXtEWDeeDGkMZM21JzPnsL2rw/36xZphLJHVaaIpw+M+j6nVk9pa3efck5rYkCN8JLL50WVV7gG0ozDYG3vcWuxHP/viKACvjExlnuDbRWT4NYcrMC9IQzLJf+xx7UJHdGVOWyYqb7HZtdTeRZEg7jKWFf0ddtlprZTELgOzKjM0O7Mg+omON6TZQiIvWGRZKkw2TE7AwHa5NK913PUMYOSTWFVdVsdvern+/McYWGWzMJOcINpa9bB3bwtgm1ajiqNylWGpugY8K5NvCJ2L+ejUlxMmThWin79BUDvx4vW8ILIAsmVEL87eSvwUULJNPpK4MQKCS0IQ62Tty2LGFNMPg1Gm4gb2X3dOLLtMpVt4kASyupJXBf4KlWb/05ZjvrfqGGfPgL1/3oqcasQp9ruOKInIOjdBnyx7EbVCLNCul4aHEzrJ2kE6wlQ13xsgcONW/+B+FXv4TjBQqRjAtpQaNa/meT5bd73sQemy3iTnoWiaEmtVcuqaW3F5LSludiwTxCA==';const _IH='f719db4ca9eba0a7429c8683064a51d9a8db138a6395c3a62fb35efda40e8bd3';let _src;

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
