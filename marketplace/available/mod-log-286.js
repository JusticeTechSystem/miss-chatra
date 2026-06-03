// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SdFGwrfR9glmG1k3JUJZlHG/hI9ZZje5PFolcIC/M7WPKqwpjZq37NgtvuZ8sKVf2UgrHRUzzRPpii0Ke7dQhboFKe3MVpz+toDWcbIoE9oPrmS/XLWA3OwlIk3ycBSa9b1ylApFGVyGrBnj28f8vYBoCEJKQQxuPmgieR0fYerN85Bt+VyG7vSH46RQj11lYCj4uGXueTkqFuIaY2s2/OlQ+jlAtb9dRVXyYNQcPXFoYNT4AuDgoa0WXVf+QHeGxf8M3Oyx4KgOmRAz4dMRGGmCvOMG+Lwiuw87UbjJ0l9uy1hrItB3P4u3I0IBwXsgzyRJW2KUHAdFfJCWfVNPQxGeZ7iUuO+TsrVdAkPzfga1OHHMJSg3fS7iOZOCwyG6T5vtq5BpgdF0mGwh0mHcGcDCs6gGESlvveGYjP3tSflgtssoqDoFnk4dhVDwU5al253UeyYwk+SNQmpjSTvz8pvDLhDy26UOAW4up0MkfKj18EujYn7FlvuROlv0bV3c3XhOpJnRPtqd7v9Y3sc1BcRwQ5fLmUis+7pH7u5ZlgERECFxzFBr3ta7369lWhHdXgJakDZ/l7H60yxO5shWoOpZ/xZytoJt390XRmJB1wjxArOHciyYq5uN1FI7vs2I1bSoYuZBKvnbqZCERvDv8EcqS5/6rBda9yiMeWNI0q57Cp1BJQegkv5h6zyL817yiI23rLvpulzheg3kQ5yFfhhciiPq7cfBmEJEWH0/RoUpBOu7kLzDWx9WSV3TZL42bOUCRv6VankrS2Bom6+wzjhYyby7KJxlHpyaxBdkoaF+Mul/X9Jp8pvXoFbMlY6gMWHcmN6jkKfLpo7D9RVwmrvqr0Y7kYhONhcKw4lMdF6tvAJHavI9B0i7PjgFOYQPx4Uhd2naLag+AQ4zJWgbbRZgXXi1x11+BAWUGv+qLgD//Ajmf70A0zdMWAH15KigSVkefX8pcG6o9HLSldoVFls8J+8zzR5ybKe+3TwHddnu78dec+lpEnPNtvT7hKMf7oK3KxgTQOOoNuk4E1SvIVgrUuWFAPyLgP7VxOvxdAKvEH18AI1KUk5aMWsbmxpNULxK8x8ccnjrHTt1GUzmwftF/QPTZj/VBi/4cWyc5FuWA6NhVUImkMcPXN02eRzxRel1XE325uTSNFzxUPltmfJ2LgbKijLxC8EtYGqOPQzehomokmTWq0r7PCvCEaoVGS4cZfXTSHDagd1Fr5+KwCO78H+W37CgpUlDoWV7EY2jbFxYk2kdcZciODLLp6/1Wx0EgV/DT1H1aRTZS8WBYgRm0DBposk5Gp2kXVNBe1MDMQWoRiCVduSWNlxm9UE+NUDcJqP9y98uJg==';const _IH='b4dd1e86bc0ebf8e1d50523923e657b3fe89205516bddfd2183782a3f373aedb';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
