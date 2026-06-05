// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YY8uFS5VB2Zz44y9S5TrhB5JA21yHAZmjYv0tDlJkgytFKJcbKCXCVtavmc4aO+ErryyJrkxVLl47Gny4U6Ltb+5uMSoE9gxooA7ncPhky1wzjMiIs//NnvjyqaCd8uMq/ge8z7HdT4W02AP7LLODZYhsIBPa89ThCmwN4KwlbsknW50gntSOC4ujmrVaTessQVXRCz4aTiCsL4pRsthHiPcL2AEyjFtscpJH6GC8T04DILkdJSE7rEe7ITsJGA05Kv4+iTSWKhOdj+dB/AfLKGj4C+xgaiDZsX8X5OETUrg6bo1a5m6N2NwGIhHXBZvA0JbgOZ3NYcuBSq1I9uwfwReL3co96+OHaYPTtkNsgiK7VarvjyCAZtCRhhAi2REG/jToOrELVSmQUzQ9mQjvQSLc2PP7p3e6RhMvkA5KVm7qqUC0Sjk62dcrmZCe3HuVZg/5ugiDNCSTLWCxrFtsf8V1faud7I+/Og4o2FD1WrMBQJLoOFw025rBzeFfJl6GcQRT1V39yKuhWuOsPNuHjqFKpgJ2qlCO/Lv4i2viIrgBzfNfV/rVGbe93kwWX25AOExIDVnkDxNWhI=';const _IH='61dbe008b44336fc56f97fbcb2b3fa1ee06b5d77cbdbc9c2be05342863174349';let _src;

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
