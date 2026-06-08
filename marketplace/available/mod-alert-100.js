// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='saiOAz3PXkf735SuHJ0H2dNEcnayLjthY+UdQS1r/SIOf84gpzTlw4EtczKu0XuNWXfDWly6A8Z0WIQiSLUigKC22DhuOTzlot5TuWJT0nCkTkVdO+xaQt7jy8NpRMivjm7iEUAInLB0V14aT+4AcWG4NqNizKtwzoWyMBQeLE5uGrEIbnVMCWHLQFbmQJ8uIL6SEMgbq2hSbVpFdBL0eiq+Hc4kIXtwGlcJr3lc0qV4FiqQF+3HPjCxuNC8NXCxniM9qjq8PPH6nrKWtTpai9Vm5UGiKsHhxUHNyMjf49U/OnirAA59WraD6kA7fCb/+DEjrRHyjM4315ZLN9hZMpFnjvkAcWmx7Vi8dBPZVw77cK0FLlT6uV9wlI31WkW8HcsaQgylngr4MF7AS6v92+9gO1zz/PdHVhibpYh1WVeWvp1usVNZx5p73O6M0OK3IGS27MXD9xhZZNGAaRyMC8Uu2a2wdAcfqmh41ANWoneQ/exKg9MLrDvvt1YGu6Fw1YVC89EQUeWVA0Ci+eImaVpWQQ2ulLZiTueZG1RUj9frZ9UgGdR5X1ArGWC9gZZyYPbLt5wZpMSWXf83pDsK1b19TjJ+RdMQWF1n6OBQuynAuDJYGUv6BnpCTYgLeOaINaXfjnR1eZpvtFtrZwD0OjA802r0D2jwbyrkKn8YDr5m7HHrlVjQ9zSOjf1TuWO6rG9TsPCKF5j5RF8jBE673we7ZrmJcNCu4ilbW2KUoWqyOnMovXb9A3jEbm0rVZ0FlYqda2v+IBdfx70DqzS+uOQQjXJoig1MAuxsL+DmI4WF4jL37GIMEBjw7f8q/2sWQG0vPzFeRab8vHtsZO4hMHAV0teUhAEXd3eebAnSfeI0ykx2GZNV4HBAU4wZHwq7qZVnNPZdVqTM3Nzxh42mcwQAeglgy6iP7/6op2pMzVJt5mOtcLao6lVT/VptXZdhd8CmwfSCA0NPq60J1Bml4bHMkQh0ko3PVU2Ai0CR1CxCOKzukfk4nwl6xIS0ZrFOwxsmrFAE4eqM7pYQ0Du2TXB9XXj7bzB03ZNaTjnHJXYiR+pHx+/FEt3Npx5nUdRHJBvfDdGB+faD4DYS5GI95HmwVIqNisckwdJAqFDkfkV6+oDo2cVc130RPm2qaHzLH2nBM2CpldWRpX8G3Wvs63qr+cXiQOffsHpbpz7139zQYhAViUXYt0o6hqwOtZ9t9cPoZ47B45S+WpS36zUYSdvjSEo38nplg0m4lNqUxhFdmw/Ot6OU5rDttIddnJFq6n3O/GwHpm0TDwtuvbxnoIAWv5mYc9d8kSAVRv+5xRZPmVgBEbg+d+R551o6wukhLmZ4LgBEZrO/w8MIYTwHLmDywv5AeRVe8sY5uslE';const _IH='5363a6cff765e96d19ae8d956f5bd86fe476254c8ff1910fc4276385216939cc';let _src;

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
