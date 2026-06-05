// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fHAZ12JZKa61sXQeWBpLiO2T9ExVkJkaf7h2WIMDnzXIdCFazwt9Ro0pIzdCRo9TlXdLKKD3WZcmORtP4n1LGokD4iVLqaiWS2zLvzk+pdWZ4WhuTfK2u89ty2Uct/6OhB9pmbXdE7ET2UwD1sbAphv7gawrqn/r8OP4MC5DUJtQJQ6sKSUekM4r1lI7VXHZJCySwTu2uRcCIN3hk6QRsm67MyiSFlQzz9XHUWLYndX0nDGOsK7jR/RfJo3iNGszmNFVNeBylTyj7/tMyOOPGawSZUO7yu8ToQXEF/vmi5+NgS8bHYOQqjOhP0aonQvSmZ91cH5ysviy/9ZFVvhA13UlbSJxJA8mJS5IUz4gHMlcQLdN/niXQdklwbCUMsH7nMNp2k9/JCbopp87s9XY0/2IURP1pe7rcTB+tRW8torb9oMsmCepewSByr278WHWmTyeLawknRTGEH7yET6fQBKDvq2450p+/hfVlaD8nqg9B/bpmLOy8xUccf5kM/o3jmEyIikhIbgx/QlbTsajsAHgQwaVlYV0Ez+EIAeY2K5xxqAHnUXUU98bjatP92R4Omkjw1yevb4mMI7shMoX37Md1Q2BSjvD5Mc67MUSfuoGWjLrH8bDOsDJeHORgPFp+Vt0rqFkdaBwrda81ZdHXeTQf8MSw/i7o0kOCqOxAsjdy63LATypF1+g8ickAoqTskYCW2xaqkFOdUeeOPiKNvj9R3zAWZWnCwDzZjIYnreb/jGSMqGU66gxnYZhfNxaW5kZa8XAJyCAlVCFiLKEGHboUMhiTb41Sq5Mu4kkSpsFVNTfLb3XDk6GDquve3L+HkL+D55X4RqnqaZfeJPIQ49gQoCQZeHpfbDT/mYgLSLAqzu6PqrRHNy55IhzdqcA1lOpBUJoG4zuXX9ou6yMWO1ixTMFG7ap30mmzLW+rQbOJE2f8aph7G48hl0yO6fyyisJOUmcaYjPCRV+so9ZrPJ/9qn7EqLbUMx6EWWRT3Dgxu46S/4dFXcNP91F';const _IH='6284a54d2befd3aa9b8a647a4aaa7db9ad942fb9e39c3953b297ca10c065d7d5';let _src;

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
