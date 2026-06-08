// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='azyqIQeDJ1WvnN+aSQlWPsqwn13M9idUCMP1KdOFeG2ysjI0QWDvZx060So7+kRLNQh+xgJeANAlDowLLUxPTKc8tviA/CYjOJt+nKJmIbaox4Wf3E+EZz/qZH+krkI76frO3kWV6kzp0Ga3FDtIwxGMxklZ6mhSySYSxC6edKXfj4QaNv4DqMv2mnYM69uJkQ20l+27uURTlG4bvNN0zl6lSkGeq2lI3+hItKAJr1Kj8crznjNFo2b3o+1DPQrPWAKqEUhL3d56eFjAcqt2qEKXrh4RD2OcVQT8mHL8VX7lxtHBbs8zmpE1P1F33Vwwmzt75k5UgJ3fqDibCE8EWAJnrWe7TyE3KjCFdRWP9sOKy1fTiNvF9/THyiafKeda1EW3a5E8QKW1Pl3Fc9n+myIgNiO3WWG0tKUYm3FTHzcdEk1kCyjgV5Ntt3a4jciZcYBBVQYBL4w7H2ywG+LVs1lwikMtGtCUqih6oQVcO9HXgKcFGfytyoOdq1F7bCuRntcxmebibabvY5A0VF+jfYRf8I/f60ssKsDPKGQ9djY2KwzoslIHQiWrp6bpRior2oiehHqDL1NxaTn+W4tVW3DyYA1bKbvp/IVtefTuiUqGHVX0NwWZRY9mXJSTMumdLYjHt7Ll/a8kRWhHHZ0kx+AxoMVnIlVCsSdSQ713yPAG6IPN47MzWVXQtb9fiQsmXqAR80YISI/QfhsCET9USPdoJYbYYCLN8A==';const _IH='f107e1f1ffa96f28ff6b4873ddada48dd09f7d508871afca65044d8f18f2c331';let _src;

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
