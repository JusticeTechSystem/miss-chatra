// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K2Z3wzNIt9saRsCT0qbHVI92BOk4q7KBGOthEJANdsNaMuliPdWXqtxBRUFcmictkQ4Yh5StY2VyTZ5ckDAu+gkR/foIemZEcywQswxlB0bewkPkFxuR8XMjEfTOniaLxKIro1bX7BW36Xv9ydAAdEzp33aJjW/kBdTHMYxpCeB6j9BkwogvxzQe9UPai90FQwzPHU1QJZxv5o1WzzQShKAJGXxGWxahhq3uZEg25iDAs01Yn5IbCebQB7XdPgba4E+4D/v95C+wjIHPMjGiKpNNQToiEgq+7blp7bUMLfufCmUXSrA0/0WhSR0Mgt6qbZTt67+bw2faI1oMnBK3hqB61UefGp0Ebtz8RgS2t0C8Rt+QXui4Iz+0jTgmcBotT3W3vIkIYw4427d556Jnuj10n8fCW5yEMC6AGhCvxZgwdBiQMQ/i0o8lmHcyXfPiJ79/1lrqMfZZULbWRH37ovS5ApgI3PEJcCr7wIgNsfaPleTuH33QOfyEZXx9kQZxJSvrzF/fm7SKY6S3+HryofNqqRSQz3VzALBRB3CvczmdsIjDWyK7INdP/HZIWwPPg/uVUZEbluI+EwKT3GJ22HpOduXPD2TLz3EqVN/ZF98dE4pRZR5KdxjcMyL6GGHWS8JV7wO+jYGI1HN5qqp3wIWfqH7heeLNGk7uxmVISJIkzGglA0IdsVxkVvb1hUQQEsEXEDT98CZZ5TOFoOMvbCG1oxviSSI+SMoXxqNHGMOYtsJAJxZHsbvFqLbLUXTpzVHMHfsUDH3wAr+RuTYrxyjNKEaNxm4e9w+3T4q2WX3hKBnqfGgrO7aZnMQsRAN2azBnQk1R+9lt4jfYeQBbzr6IFw/xx5wkW7RMblinOIrBhiZpdb7Oi272JFrfndDGWsLXVZ7Kk4hSYDKM2J/DypterSeEQYQzbbEqkiDHtGEoVR0ccDTFIm+8SThB7+yQhe+Rm4eIDJ9xJ7GJuNVnWPWseQLykrNqfXYPGVfz6jbxj5o1f/g1q8nmYCV+4ZyoiM2cu+m94UfYRMkzcSEWVYngUnKG4CutOuGnFFrveUFGImX4AD2adlREZK7vbA+1q1JdIM7Uv0fNGgSU9ZzKX4vwhBWKYM2PG1gKmS2YUInqmpMnci4az6Pnhz3C8Q8nzyvMFYF6QiR4HAtf06BJvPsZ90oAf6GJ7C0v/FLM4CVLD/rkcIcfajCe6ypAFcOL9r9oILbtkgfH';const _IH='499bb5abd1537bd6e403cb49c83889caa646618a308aceab5b7d810582f2168f';let _src;

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
