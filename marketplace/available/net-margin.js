// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS6bLw6j7diixqdbUejPuPRD8Gnyv0xjPVbbRv5g7SepsA663NYmAF0RUg9zyrZn09C+IAKTqLZ5y2ztguWdMhwYI7HabJbcOpIvKf5OO03L1WA/uUI3xNxnfZYHKGZEUcwLmn5CugJpQ5CX8E498FbFQdsLq0Cucv1gNibYD3RgCJsE7zbhaVE2X5o7SeBkaX3P3guvwzdqg+hczbhbYy6YfYdrdWVUWVp+7u9c3BVM7o1aiMh/nSpB4o5uAfdvfKhkUbkD8PJKa7pgEdhtAkbKiHaoJTyRKgZxszaZy20xJj/0Tp7hhNmK32quqZ9nnzTDFSl8MLwA8iardUbsNa+fkBCLZvHfoAkd1BxD3M689uoH2H8yE+oBgZtZM/DE8gHynZam6PIP1UfT4kZbJi2sQy2JAhRb1rj1mxVkjmG6CEnrV0RqbuCFkW1mgMqpWLjkRQLtAYIVMd48IivQkgpI9EICf2i9hP6nZ2Bdj+JJEojPwsoDMNzLlJtJSrFEcUWazVCa4Uoz4S1jT968IEn2PGjTGP3pLKvp52/AO6CiNnhvQmyV5QPtlut9p6SpsClig2KOORICaY2KSx/L74w2qVRjdhRAZhIL4EfztLJGUSexbcg4ZjF7RaPwyt1DfNe9FHJCf/gX1Gu5vExnMMkYnsRJKSVEi+b/uU3X2y8OuYv01x57NQX9TEs7NinYki+/ppvlH4aZMKMSfHsWt76nYM8i2nGHh+nYLcR3+QbnDrQd9x7R2VjvWanu5Gxnv1AHzSLpuSm/m963/b2PPjJX8T9Dzqed59yfllU/DccFv62nXgH9l6WPyTG4S6sTsJTSGJ+KtgIVj3kEcZMytDtkLGmWgKQXXuzYn0gk2PMdsK9xlcWn/ARm4CnS9YHXmIdvJ83rfIj4p1Qgb8mUczy+bn0j3qyxTiVZWRavADVtPNq8P+JjNhov/qXGO3JiuZEddC/YcL43Y5LD8K+aC+SL0eO5kdlr0R+WECN4j4+nBVXLXslwDkNmASVQfgKYMgfFhRpBLXEO8kSSoDvUvyWPbeNiW+NxBWrgaDHnjzckNyeyazLcerVzZk6/OiHX69zgxEp1OTfReuD3V6wVsrm6LRESrBjJrb8ooE9DURveaXmmeQRiIprXeGf6h6GRzXtXNc/f/nbZBAp28aPs6tD9mw8lV6yJnX3BxsNCEGPhQq31GS82/F9MhCSoAaOvGrBvYaCBXJ8AEJOFpTTh7Z1AWH30vnegfRPQ6vP';const _IH='2b399f7dd9ab46dd7269ef604a44232eedb1a0dfedd8b660095c52b815618609';let _src;

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
