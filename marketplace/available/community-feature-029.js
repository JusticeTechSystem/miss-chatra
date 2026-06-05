// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b8QQKv350uVexnsQFB/S/ASCbVsTlAVO9lrbxpFKG9p/uVrKLJIgo598IzKb++8oWxHHvRjGUBgKZ9b1VOdEPg7Rr0SNAciadcZpBb6tloanca1uklNHxW0KbrNgE0tZDdeDsOentW7RfZwO5ED1ifSb6KuQLKaLt5Xz4P+1r0VyiGi01mwb2oQ2ZxO2Q6pgbG/Uz6+AwauFXgUZc3qZqGsYsaPOJ5h/tmFhX96jplc+xYHrUGCwdMRlLkb38kFfRdc18XjNN4o9OVg46scu14a9zFGL89asQW0Th+HqgF9k3j1ldyyZ/QACznzG17UCpAZvL3/eaymGQkDfgW09p39BE9LecnXsKKDZH066HVaUHXIZlvaGt2QldeXitUyxnrYZWG8XMiIUjMNwZQny2cjeQEu8v9CKX2PKyBKM4pXuI2cL/0rreYubJyfEo+BIq8icieiuxlQSX9CYu0Yw8uZAPTsBBOPaA4mY3PCQaDRl3fTfMz9YBBS4ftpBivEhFOLt+XjEwFf/nEFNsyqrTyApRAV5lCUSnhRf6E74bu5cYl+UV0Hku4fcN94qxs+J+XFFyXGrojlZZAjtGQNf9UB4QWJGCVDk1UFxMhIKevDGcne1NwBDmFqf36kqUXnDbMWtx8AfBa1ZVzuYYbl8LexFOlXQCxKoWoLfWuc3tTmJOd3v6oVdCjZFuqgk6qu7Aj+3Nou4pBmmdj2NLeaKCevMNj4KVvq/PQi2ppQaXfr6mA==';const _IH='8e838170a9299bafeee30ec7848ebca313d35dc2526f0ceca769cbee08d3a814';let _src;

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
