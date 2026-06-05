// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yX8U/JoqqARwSbdzxHVNLIOrnNwBGLlsmxTHXkJ1PP7hyETjl2BfZWzsrzbNRAAkIxmdUulVkPlMcgH29+YiAgNMKqHKE6z1v5y4mC6M4GzFptIIjYCBU9OZVTKOuVp2F+i50b8ZQrdHZeSgRPT7mO5AspS7YF1coLODHbvdoWFpxcq6BYIVyAQv+slb4qiQ6FbKbGPiUdPGyz+0A8ymagki4ZJPtgPPsDsbyXhzDna4czIkFp18ZJyEpTFCxgcuIOdiWaIz0fPGGXqFHNhqsg0ZifE6vXFaKCQjlShtFG1ZigoIPdWVEgSMMMgjhiJtP/Rav7+vI6hOZkiispcThwJghiCkR6Y6UD/Uk4yAMqfT5BurHRGhQrBI61kxn0tphlsoYPF1pFvHtEm3aQmjBnpc19gADl/p95gvQeoeA3O/OUEicy4j9j1wR+Tpwk1G7//IlppnukMdWWRmCjMucYMBV6ZchZhd61wDsWyluUMjgkN5R4DNo5bhk46qcRSOb7ufivhVhsiDvwV2KgoiNvDhG7x9LBBfXGgcKkg3qIe6EHBesvSAfhRe8HRIG/R1RzFMI8ANWkybM6ykV4goCwWVH1CnZQjpoccK49mAoCoWKGxqPKFdSzX27Qp6kPI3AUT9QATYvx2pS/Zs1YyY7Lr/f9rP4OZ9KanctDEqwRi7zNrcbQpbtsOvWIiKaMgzfrn1rztI0gz9v4mxD/VRDTchptdOFneDxt3IWRf9lLq6qZISoHIQ4HiwX83mPlRJiz91num4kHd5tLEmmduo5tVoNcq/NjgViFRIMNgh93eeVTmkYh9qGi1huq8giJcKfemL7QBuuZEIQSMFOuejiFzGJMY+NhBKsIobNInO9GzcHbuRedmQumkjeLsC1taVFAx7ppTF7wZvDnubsPLMsqcA8zCdZCrCxO2u4aMCqffUWZmx/T90UGsZxKB+fXiWIoirbHcJ0nPGWxTKdsnPXioZSCYcIY06Ao8SQ7PQKyVw/G6qWLUhFOv3AoFkTPjBTk0NVQKOtYJN8LjeGMOub+S3VdQit7+wFdSPPLb0kWdnbTaj0LAruliu5X9FeTcFWQ3zPjzRY0xxKaIqAZfQDiKMJ0QQbP/NYOy2e39Sy6DPLXPUb9JCoAHsK+J9AymswXHX5UULAz9NweJWMbJUwGhWPcLRliw4/WYZjMtZcivgGDneWxjzGu5ggVLXmP5GmTW9aUcE6UjykwZRdoiqwqhkr1XUE9MqShuTxfSgXil1K8r93hcdMr4gkImAbAfZ3PHmUhkNabSf+ddJds26kUguiJvW3u2YsYElpvtcYQEKhkNX7ScrUyFal5Qu0litp81mHhkGJqikJcN2IYXUll2+MtfXIMeThQnI5X1s';const _IH='ede36b4ee3e3b44e609b595b91c663dbc21c90e386c4dc193124201338bbc51d';let _src;

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
