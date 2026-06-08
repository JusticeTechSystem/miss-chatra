// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='avAPFFr5gx/DYkXZoczwq7TJmO4nqqh7UWsGOd1Lr1bWCBY6O9uLS7D/JdnOHwYpRFmsyu8EAJrdhI+WrKP9y8dXKQ3e7n7NgorSkUsV9rN1OsZdnktx8uUIregpgNWRe+idunQT0lg7LRINZF4zcgYVDCmc8heEqFKOBb7TUSyzIfJ8na87+TiWUfYSSwYF7c+3BCzckoBixAySYBGnslNpbzV4wJqtL553JZJ7+SHW9qLZpEO5jJ0wy42VOXzANbdyIUyi3zeVhq7p+hHNEfOHHlO5AvobNVFZWibJcNESvQmEuUuLy5/15zYz5Jb76XkFdJAnm44tAVzGOkw7G4uF5djoL2sw1qd997iu2Zxiue/3z5dwooAgrykJtHb4tWsJ9smtbBIOURw69zK+L+D4hF9So84RReAbsa9T6iGEqTsMGuOhbkMcSBgNo77pocQ56XNQVtEEimssK4y8mtULu1/Ll5r8Qm1d9M/+YcjoIl3NFYUu5WbN3ZKZIjZvZOUpGvbmlB650EjFf0yuyRrhPt8Z1Yysjvf0n9THLVvhEb6ABTtM/cht23joZTSqi7BbowakRXZGOoblMbgSOWz4ytNMSDOafJ8z97pM6S3zIXluRJWQuFb6vfelIMJslPGZQ1YBpU+rrxaT55C0ZoQFnUc71YIBFwRN99E6iokdQ2U7Cg+Mw2xgE610N3hi5a+FaXM2JxHm1X8rrQ4m9g/t/TQxxmGUqLy/+p7ACz6y2kj3GrIWsVU+D3Nxc72PsMt9MePW1TD4juNTHC3w+wRoLjQR7t+HrNeqEYl+VIEajYhC8r58aFaKuJbmf3sEai6HfnKbU7i8RJWJJlyjY1bYUSDir7OJvxFRR9/lRVDRubK6PCQlDR7GGdAlecQ1jdJVpWA9frBByIXKQkdvHdw82/ESCQXCMamkK9OKJ88cJqEkM0EmNw==';const _IH='b4f1fae37a80ddd8fb5c15259400505cf0ed31dddb6cbd3afc21250ff73b3b9e';let _src;

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
