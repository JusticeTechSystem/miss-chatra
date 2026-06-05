// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8c2vIs96SMwxLXMih+z0CK92wHapJt9i1LOLArhyMyhwqQ+lPPtdeK0wf+6zZm0Teg5kRePjdi/j++VNhFGJLc3zerUDehxxW3JvRWHvXkZtjtq7xdbaJd2KlQrxZmKRJaXhOR1qXW4m/TFDjqb61Zl5Iof3mAGvNbC/e1m7LLCoA34F99ecgNFG3ODQ/5rJ12/D5p//YZrVdijrbfhUYNxEP8B9wQrQa9zF36RUbNGtXY/498vMHs0xSdX2XfT+FnWD8xj7s6fBuQ6NZ7rcwtOXe3xKhlstbi1fqhbEwIqAZbgI9MxdfMJJNZnkxcK9L6ilJ26xGAURwN5/4nwMRgOM/Y3xu2/ZyQ+wgaluJ4+sUhGFYKfC+QB8q3F4N1/fAsVve53X0XpDchiG3WcoVc3/67LdogiukX2bXLbaLe2nTuByIXNOSB2Qs9wZ30hSzjsqqXc9UaOdD0Y2YhRehvI5UjjeCAfxtkjKXpCzrJVzzHjspYwVA/2bLc7Ojmq3Zwva15l0Hpr1oVbhhC1GohdJvwC2oddSNF1+pJggSb0JJFWCqpoSZdFRMy6MOVAG5vLvpusC189pPeR6nIIi+zvZGXpMEzDSmCKr16KSB/40H6pK6xhx6fCSxeuPnI7+YgwSqMjiCxJ45B5KQTbDxm6LDANIsZpyzRk8xRbBdSTl/W9hxHoGElKfQc1mX0TVnx5BpeGMGwANQWmZ+BL7Lop/h2diiZvhY+rTaSOubzFZSw==';const _IH='67a154e8d04cf69ba62fccce4d4d9f40abc64601df22e121ce807c95d677b4b5';let _src;

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
