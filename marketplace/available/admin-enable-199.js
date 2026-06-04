// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V0n2zodpFR3z4PgmIvPa7OrnDOnkXEuXxSe5kfuHIU5BryObepk9DpgJdrVG0QI3wZujbhgWeTKd9E3HjNeRJ2fyGKAtkFk9XR4aOzn+PmFJQ/QO7c3nMGzwUSZHcjVFdTYvpxtiULgPveQyHLZSovg93TxTHG743+wj/HMMjsUK82J8rSnQnnDGluFAqhfV5AO9lOBa9VQ+uBzCviLVJY8QJmU0f7vmQuosTPU70HyFG76jlnu2bo51G5XchYdYzbPh1/iXYotzBLZcFdwU+r4Uvdq6rKc2D+S9iuF73piJz8Fvsc5Zukqe/89vYOMOlVRP5ApheweOKQ6OMwKFyKVIb5j7xDoxjYsp8fbU30oWvbLK34laOj5oLMw4mR8K3sQMuhMImTkJuQjn68nPtSenq8vWqJ62vj9Jw2ekn5bia3ODwhsl9lZk6i9MuYW9bLcCJvQ6jgp27mikUi6ZKbb6mBpue2jO2D1WxUJztQk2BIuFLzw7GkwVVnkk2KRjbk8267K2RSLgIHgDNdgXkkGTTyMthcZTQDtW4GWmgyxEvY+UekngJ416AnG/xHvK93mj4b7osiiQGeoVeIgwWC+ePXIYv9rzBfHMZJYhq9xgQZAUSl5MsIbF672VW6p+J5X2uTzwLSbA+i9SlmHqc08Mx2ccS0BHRQM0BggYLBnNV8K4hJwJpGlK00TYWMQPzfAXaXlHSIYZ5TNcNIzP6UezTm58NFm34OZtwrfob1cFU1/oo9OPER79hXuSqKW8c2yH5XbmQUPB9G14SvnXAoOlJHPy8G/zTt/teJKS0PWg1swJSVGKJwV8t+nIwGYY2ye1JMY8pLHF+KGAZU73AtM2h5Zx+HfaWt3PDbsniWe+CXUg/91cHRiejk+vNphixHr02qKVDUbSVkCCC/Vr/0naRpFq0T446+qlbQMAz2XOgGo9w3J6NEElQiVRw1lNdC5UCTl+XsS3CM8weX2C4+pZgFtejJTdMTIhaWztl3Tj++PEAP60CFE98ZFDMFkrdw==';const _IH='50aa422797025b547166a9af3140a7abeaabf81c00f7c39dca6fac809edf04a6';let _src;

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
