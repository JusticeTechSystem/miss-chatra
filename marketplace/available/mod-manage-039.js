// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRWocBhTUyT8EN5I3RWnioG0/HKFC9uaGDxAyif4lTUnsczpsjDUOHJFUGH1zfnKp7fJENMEhRUkbxekXdVhRFBEJEtetFhbLbmvV+pnnkR6xMbxoiLC4V93cTn0RIj/B5xRsb39GjHbon/nL0aeKSy1AdscueAJDIoIwhKa1T3JI1Alcm8M846D4ygxjI4Yhzru3ae0mfG0yHhEcDHDR0hWQ14el/ahmDMbVVRTrjKebQ6W6IH+Bv7KC4yA5gf8pMJtmgxpxaw2l9dS6Ztql9yHddR/0MLCeW9KYPUOCO6UV10wtVkGVr4L2vvrsJ4zLXDiJDLrKs8dW3OqgZKAhRbb/V69zGuWUXBOUcddtxMD4jE+Dvqu5xB8vNaDiacqqLaRsAjzNhS/9aJBmT5dwbxeJg7Mp9yzjdl+EgvImV6WfP75Q+uYwxsrmd2Y5qTBzv7tEbjq8sRFBdbi98pevgunaZNS5ISdl0PNfuHRDEJaU3TIuGVqXTsgW/zk9ZjbZLrjlNSyN5Ge00q4RgdMnjRgqH8WH7msXJwOhHH3PtXfHaijzpry8o3NfwZZwuAl+D9ihDaSvPpoJ7GZ81h0q8cSNmYt9b3ZbDHYwU/10mpdU1uNwTHGCmK3MbGi2/7xJXCGuhP3yXUyA19QHICQ20D4IY6mFLRWWu8wsPMC2Xx7Zsr2fXSuIf9Ad8gglwNQmuOw2mFQ+ltvb7ldWAZmmo6Id53ywaHhMLW9JJ5a7jUVYNaUtTJ7yLT9wGEUXebGrKWB5exJ36yP8GvEPoj0xoN5R41FjC/plZrMcgey1DEkjda8s2i89gWDP3qOlYZzq4FhvLcPUqncHybay11IiKduoJWKATUnHDd/QxIpd19ZV/ebWdNjwKVTAP1uTrk3ro7aIuLcWTY66ZUQSEubLm+o7U7lxsDr9CMiWJMlD83Do8XEsKPnt1XM8st/OgCtopxhyUHCr/lDVDbtmfwWNflnGtTnT7p38XG5unyqC9B98oVx5pI8PjTwatvw5MjjVy7SEGMHcjq+b+0QsZ5gCbUfSx3Y4T4zz3aeLHDFPnYF1i2m445fsvj4WLTOUcVQgh9dwBSvuh1LZgU4ksoO9+P2YaH1qulk+4HzDzTbbpLniEjvOjDidr1I7PtOfBMwjTs+1MMlOyj1hq6D9CAvwHC5Y7svdeN5ew7OO9IxiElpf/wdRqVM/PZcF+gcHjBwGed5Du3peNG9v6xPsemyCJqGn5Q2LBYb59+YFXvIeoMLX3UFbWUlv3cKzAfZO1BbsD1MOrltAnq0DG1Mp6+ZdRltG9Wwa2IuCMFVbsZMggj8JaGc+TqfuDtEpECwcA+TXnZvuWxE/dMEhwsqO+edDbZqfajn5cGbz84sAnMB+20SbEKyA==';const _IH='6b5b2b1b6f332d3ed0d93c91b69bf5010f26c7021d1260f7b1302f1890d2a00f';let _src;

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
