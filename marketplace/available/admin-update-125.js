// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BNoCZ36T0xWIT50T0XmPQJI9xGqraP3eZcpNBrKTUzRhiOgYsd+LiOg2i7HWbP8M/En/W94aE6W6pL8XnKLi4NX/uVYx8CGeMHmVwCrOMX+Tg3yZCbEaH/ldXCWgDpDJaSfZrmv4Nq69xzj2dWwgoowYj9wo+VQhb68nfQy89oYGzeTE8bLM93BDZXA+YAiPmomL43NihL35XZySkEXKUr9Yh8eghXUWZvF3pxezfuJniESisB9yzRb8rqeYrC+gOIDWoIDOBNw+wo7WCloziLCx26xlDruG9k6claCKRPdTs8DaOgWTo9fmkLMmSYY9S39WF4+2I+NxyShAW0QGhA279TkKYO+PWVlukCI9J66X1iqHmygp0Jru7DFywM+k9ArZZjBjBHkQycrzc6pdxQfXzQD64bTsLjTqnouRM0BrKlGkXpdZRwPwOWZ5fP+7SOkm+wfVmDZmj1xULCYeSTQofcZMLpU6AB1S9EKRyFZKX6oKOK2EqlwvtFZHVyfNtCU0Xn+xCf6XwZF7J2pPOhpYfjglEQY8O5padzyyzSxKpJ0SP4kDlDFpx2eJXWbbljGkUamFDmYp9BpNPT5rRacgbLNPHOVIeEliX8obGAPrX/g/Jz1ewOhT6SeM//zZ61LlXPaA4fZgIk8NfwuN4tvNPCtAKWbqTffUEs/C/r7Cb8i3M8MYqcj99OD+85Oo6uqYCNH0TFGVGC+Q/pc7g9Basun8iiaK+sILIcYTDmgsD/jfU/s2ntKv5BlY8BAx+fcHTMPfiRdV7CS5R+OyorPz3OZlzlHdtLZlOkODEByuH6GvHAWcKYTIwAqmmHjt4YvdDgF7NI0cGuUCQnI9eIBw/Syy9S6idzSaZ77yGamITNKVMoK0hubqvA+3UEDEfihvML2Cqbi+CZhHRQIGLMvScZFFOcJYCslCNVPtO+N+O3lc5TY5APoPR3gyQ3cadiZT2iQFfqmAe2A9yHj9wdkbaYUXshvRjkLpPi9K/pGTP+yPK7HKS5ReIWD/yFLnoQ==';const _IH='52f1043b5ab1525f89742196c73d9b9d4a96f1df3934b09b6e6af46b744e3597';let _src;

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
