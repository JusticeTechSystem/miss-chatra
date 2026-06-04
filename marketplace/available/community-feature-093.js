// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dyLxuHouj0ZABRAwzmDU1PfhNNC+NrNsTO3KL6+v/B6jJVvsPZvsJ5dd+iVh6SiYyg4DaFSWLg/9RCUbMvQsbKTZ1/8JxStrPdkx5Xe7ylFXyoFZn0k1yiGoSispaSlEISZnmgV5gts/k7PGlYxIHYq96vuDYNKzOOEHVeFpQqQLuNGP66AKUV5cw3TXm7CIEbJ3FjY+IT+3okUTFJC7JEnABSC8neRijlbi84HkUSu4gqOg5zzoUFWi61edLptu/n7jXrAk31HLcAZO9dPPZNQNLhQN883W1wGyKlD7dN+aZJ3aRNzYqz1+rS+H4E/rMvsO1b1oTBLSKOfcJBeAw2DDrrFnBiOb7ZUQ9QXhuS66mhKQcdVAGTLQ3nWfXvXQDZnkuruZwvdQlrJje7s/4Au91jAhkJ5u5faNqKmZYxngWkisbikvALjA7es5mlkA/ZHo225wC93Q9IF4Q5xb6vqZBxucQwAV1taU14UEhvuaG4eLVcHxjsxOdnAhCQCLKwhDOJWjHz7gIEMmpxDXu3rXBNKwT+pUmsKdb6mkrrVQrnM3xpb8Vs136owug+a9C7VHERlScCchdn7K8MA0RpBTyfCXZxZNsGTUwgjaVTr3lIxunRR0V69Cg9SWvyJzxNBNyjPk7rTkXz6RDOU25NkHGQ8BMU1KHmWyIAX9E5MY6s44ruT4iVfuv+e2h5k8XHgFI54JXQeCO9L1u1MaOsuqM3tBYEqcow==';const _IH='a42cdaf8e8789732b47b7d6d15a68520587999f23b17f4c3a4c1f03b69575ff1';let _src;

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
