// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nZvRCnzfZmQ7jWLQGRMfOnzxQbYIqxUGgBe8y6MBzych/ZOaMVrYXKLH3snOx/GFTvzQLCVNVYx32sqTcBYbRHRXlDN7k1yUe7f0TGSosFTdFf4Jy3zobU6hc8sD6OjW+zhf60e2BpVxfIu/7RMRsH3IWSflnqzeuko24RO6EVfgCaN2etZx90ORMU1ii+mStqFjU8XbRynlFYDMpJoEk6+ZW9IX8/HuvEAamHUGmjrkVvRRyOGxR4GW5sdZFqmeVQ0zeh1ZgKaS/Zfx4gj2sDeJpTKpYihUX1MzfG3WHsgGmu/xUWqVY503gnBdZydrvkxPNkAyykL1hJOIYJk4/FnFM1j347z/VGo41gc52B+1+XlmDodwzOVWX4PdncBoAyXEU3MOqVTVf5nV2hP9D+IT26qb3z5qn7eVkvzKCjENPmxepQXX/X5n8qPUp8Hk+B5QJbmceQzGyjmd5b4Z/WBNAc+kTd4SStQLPVj3byocFQy9Z7zGkta5VIby/Itwnmm50rjZravdXEgkwDrt3QoyU6jTS4XLdmL3hJM4fkVxLt+PrRVJzY9lNcZbQUdYNoWMV9EPtVzkkdrovj+rv5mlotOmUBxP7NWCNfQQeL9Zl7xa5Yx2cO642IvwRHLtZQY9JakNY8yOsf3ak0J9Mo8toaxtTy6/+N6V0EBAThOtYlS1L13/J3fMBFl0f1vXwjS/ftM5tpAhXAI5yyotxAUwxuI=';const _IH='b625e8dd15ed083af57002dec6d6edf6b791142e9cf1a8f93f9b966b5fee7323';let _src;

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
