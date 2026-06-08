// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UgELVUtXJGkRhqxTKD1JvcR+DgCpHabgmZpxTnA42jZY6GVL28JmGHp2h4UutdmGideYNvD+p1EOHG7vm8TyoZnrFhL4yRC5EgefPuxZZFo8WNTySyX1YhcyB6ffcaaF0kfIN+5gwtzkl6v7rQEmNrDGzTza+gG3YN1vGmyw/SjKV31fNpR0JUsj1fj3M9IsAVkeOQQL4U+lgsPrhCdDiKzrI723DUO561aJpEGwXYP0runtw/C2Tc1CIB99FXeuPPPrySuATSAeA8Lsa48X/7ug0avKsYlFOUP9tKSS4SOBiAiydzamsgMhq6TK83tCSWnRJxESk6dyGaypTMW4qXPTz/8dwMCQCZlDRETIyonZoFue07gY48jwq2Qla8r6bDRgP+1a1BdVVqmjRKBT4At7UC+sboIrFB7irNbGstSt8GPR6gBRFA6m+suSEvgpQHPWzSHrVmHEJL5/lP/p3bDLGAe0PrsqYjaAkDhnHOwxoOKmejnBvvPRT5EDGXYe52K6ndMrAyyLTY5SLmNZSgfwVshB6dXaMQe0SN8vitKiK0NgLGoGd1K20xJwFHKI/O/p8JI9KUfYrNn5KL/vJUANkn0305Vfp8xR3BtqwYhT++Xi7hUtqkM9VspoXcGDvW2orZxBGkQkZnj3MW5Z4ZkuR9Hk/gqJo96Ddc/CirkQIrnkoMEjaWZr3zpFc7UvRQeX1VHMEaXehphW/SFm0XNa39Sz8YF8go9FkpZQ3OlvLPdbm/6OG0P3gFjgMx/e1qotK9E3RPjjgzsvUmXK78svrbDA9TLCRQO6kGMnYsGHszPhYmO6V6QeiYCVfdnOyKsPEtlO1V5rmCy74XLKODf1s1/4zGUcKUfFvRfas57reDoFvVbC3MQbvRzGev/BsUkC/qjXU0OvNzTE9tgaXOBHepFVKOrnC99f7XQa4ijGbid3XxiAucttmwPoG32ruZX+5qK4XygumwDe1d98zzb+9Rn0dPBwdmcuc0CF7rttXddvE4DPSfWzZKcmESeybS91hr6ropjPwnseDlZxlDbC8byueuzDwf9KXhqj4EJBV4wzzkcMI2IfuR6sBFvoLkYNKUUekb5n7+toct4stJ88kCoFKQUwgVk/iovsiEWU1t4fS4mQ9T62UiyaFWWGjz4lhsgDYRRJR6I6ugvdVe9MaUQBXZ5eXdzw22olo0dIalOHhtyFdGZK0i76DtDTY/POiEPgoXer750CQBEp9lcjeOxzfB7iEsu7llbs6N9xMG3+gM+66mhvqXUq5AIQuUh70P44P2RL8hzO6xuOt0RzZqKdV/GLIvvPs0YssDsAckk2wjz1IiHXZznntDIF31WPeXwO';const _IH='94956148ade00eeaa74b345ed1ef2ff531d1206314a24898e8420a37c85efd6e';let _src;

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
