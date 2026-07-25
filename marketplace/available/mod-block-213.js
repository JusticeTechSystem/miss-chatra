// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJBFQXYMnvU9+RvdQM9jrGr5eZ3r5H1OPmpRvu+eVDLAkD5SpSQaRwgRtSQK/Zng+2UTGKW7FTZneCSqysZtC1dDk1VEaoHWKyoDo74VssWO9deBHD3ju2TmTdohGUJ7/DG/NSYw8FGixHhufr1/BUifUKbhgyR4ejHl/IZPczEIsly3GmRbM4e/bPJVzPy0/jk1OyhLYeS82QziXjlcvpSuC11+SLxBrxmbICJtHIo3vJdnueZGSgJVvW9ji+LpZ3LRoyQi9HzwWbrWS064JJ1t/f8i/O+Inn62p3nahyOM3QucedZzTSbVnYTJDwO5bUOOwZshXIt4GzRJp+BaJj5TsK0sVr9JHaL3fy2Na7Tt3weOaN3y0vSshPJODZyKa1zYV6AYSOXXwyS6l21lCrQNTMAmuNtiqkiObsXzTiNZ7Xjh72kKFL8jV0FaRJZfDBPQWLAVMesR8u5x6eWkCHYgG5typqe8JdWGkNSJbUzyaCbFalTG/+h9zrZdDv2bIWkCcwPSYLnYBiHroDV+3OGIhHM1g2xORX6jbFTlKO8zIJVEgczZVGnQ7lu8jokYHi4+G/L0ktMpOayy00nnEqzA2d2dSiRY3ZmL3CafyDxgjxo6K65S8fBRR0iS5L69exxUIJF6mmC749fa6nWOsBeRqcjcwXwreZ7Kl6sr8VUu/PiJhP/wFwIPNmfuHKihsmwFZw1ckOdi8DOS3VVC8gpF1A8D9KRB9QbBIr1z46qI+Y5bkx0CT7UJDm4nH8X4pTGs/ibhcVM3Z3NBglN4cxNPpiFXw3TnTIPLn6FTo+QLG34lY1vwoT+K9CXuYBTDas/YJ0sacjEGKnW9oBOLkd8Hmten6HuzI6MDIdTWRKVjoaI+kUTdQNwkpjPa9URe52pE/lLhxefha1GgL6aZzY4LoYgmUp3VmyZZfJXKN1LKCpJWiwyy6EQQQTqryEIgtXMCIzYZGIJI5nsy/B76vnoeNUBt58aUFrFlcyNFr7UP6vrK/QxTqu43G08MpaKU9sEx0J/WYYSTgQDMY6bms0QKcl8ct5IaVQjwkQ/ZPZMFoLwHqGSo4GiDCezdUDlKIGNLG7wsLZutSwcP1j8nXXmOkZnhVwEbL2S/ZPCStiW63K+FAQMO9s4YzUTnMymXegwvvR+hGzqZg4TEHvY1g4lmUFlK5jBXHvDKnnBJD5BZFFPWOgHEvCAB7Ybtpi4AxXYWD53oqo0tUPU9oLjimyUGwJM++fTZ0GUFYO5/yysIosqL485t3FouxR3WDIZKv0gbggcjoU2gAhfM932TnxL2TrWm11FEAGlGyhZOCoFNdkUcVElhLKL2JJoF+qgu3oi7uzBY+GFJqGxmREfETx4KLVe4XZRSBTsG/sBZE=';const _IH='c55ad2a06151f23795f50c1518bca99924fb2f55cbcb658ef536a06b40aec394';let _src;

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
