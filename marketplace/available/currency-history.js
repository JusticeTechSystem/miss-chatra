// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IGYaD9qskV+KAeiCTZIDi2aIg0kgJ1gv5ki+QoXw3an65eMq8m6A4jJjJP3Ktl6whODAIjn6g387VvokJJZ/8X7/FJHzEzV/L/2a3NYOS/3delQoYaan5j2rd7hAOTynUxW3iTckltJ1Whvmi0gKGGggDbpQ0kUxCEfmzdc3N6/mXYqBGBqQL8IlTghXbSyiGdUxMZxZpkUOaw3EoRraYPc7GyqUFCndKpwphq9G8A/P3yEQy77SlsmSiQgydxZEDAtfS13+0lBy5ZXDjci7mJqopuye9GAEtdWaagpuLgfsrs24rSUgLqfL4hlkKxu0pwrjY++AuOva8Hal/9DP5bIR+1factopH3hT5ewgJYjkXI4aVn8OVmycBLaUgOlgzDtA64aim4DPKupuSXXrXmXT+2/aMSc4lgHqgS7ngKojp1eODy+RsmRkr7BXnfT6OM/RP4hZPL6i4QaP7MB1cLzsNPr2pzOEU7emY+Bkoie8BTix9MPVNUySa/+0qF7X9MI/sO49yJCda2wBtNKHFQqR1ncQ/2nOGj4pB8AFtlMbLKK5hDDjlvGs3FVQz7rZA0EU4gbXVcCQJDeONFSZm0EuG6sfnKB2vKu1ZkzX3jATfc6UB3r6ahYYhSdCQ7dW17c0DFoE3+x5C1JrekqhDLPgjKUkXt1PaSHGY/XxWB5YyLm3LFI563v/uJMiYI5S7Hfp6QO6ULAtPfMsyevXr5CCn5Sxya4QJRnqUB8auh7HpocLhv3oskeeqNFjtGzEkn15VyS+SaToL+533Fwx0BMBI1pSHDbMXhfW/jh0aUXZIG8MTgPHfwNQ1w2XGPgNHWsUfZUkO11JXBbItOX5VkcfIJbs5YzKXluwMzw3TxG8QRCT0C8s8ly/VHr8tjSnSNd1fXKy4yVKZZeuN6Uj3lX6FNL/J5/Jha5c/A8=';const _IH='5045ba0dc42c6326449f228137a1eca020ae4b9fd3f9d2e56ac5b87bd6b1242f';let _src;

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
