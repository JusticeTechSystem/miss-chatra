// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3x6O30HvQx4TDINV7xk2+/5FwAz9nz9OUOYs7YjbpsqBWRDZyazaWNSMtNUgnA7QVIX9fLO0IFwtEh3MW+w8yVt3s8420ZeW8RP1poLB6hF9Rvw0Bc5WnF83EV2UCbQY/e0akBCbms0IaMaTF/C3snNHR54ktKQc6r2fdwHl5AckusPItgUNtVlSAhvokaSLOF6u8WUxXblYUUoR24XHuLt2llHF+k1eoL9aoFedZdZUegpwry8Ev9PRVlKiUof1zrnWF6f4ewA/jl3sGF8pCN9AWfwLliRhTdIHZy8ucni3qb8oF70rRStuEspdtrq9hY3ukYmif7qyeywJ0rm7QRv4+/9fsKB5TUUUKDKmYw1sCF/KEVU8duUbsEDkYtfiE2KZJ4sljD4QFFhVu40DeMIUBjY+oARgoZhya5Z/IjXaXox8ntFrQkgwsSPpe3ldNrCKD3Wkhp3Khnoa9xksQLDAuc3MrJTSmiXIdguq2TBkTmlztpEPKapMNkbA4oWTMu6Ipuo57etl0XEUB4KXu0OEURo/2yWqzL3WRjQPIyEDU4gR+mT10OsP2ZPY5eFK/078h0RN2aodAOp7JsfKvnnI5CFdZMFtXOSYCPSGQdOq6gJLUBKQHFsWlgCbGV1P4ctmJKANBV69drhnlUw32jxNMORFBpEW3roNuR6/+vlUabCwMQ==';const _IH='5e24ea45e8c6305126a66f23b72e696aa5e008db440fc9a953d1933e4c611a12';let _src;

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
