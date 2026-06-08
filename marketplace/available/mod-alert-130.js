// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lQBe/xb2eLl/L+X+UuR/kIRx1wKmIn1OANE4okTKUFa7pjWyHCYdAujjyJFsXxotO8ZrbJw8l6DYIyjdqZj4q3FnqskTbzt19nd0fU/aZrjp9JVgxcXp4ZzTTXVmasYwxmHtNsy6ofd/8HsmR7Ox02uSQpNjKey4FAMxqBtv4NtJxk8BXcxif/0Sxe7CFKpIENGSYORlo9Okv/rOlnXzYBPOA0rs9qY4eT5nl2vD4gqmTn/VvT5RbvjKCtGhTlvs1Qdfgtg9IfiUnODg6NKZSFcYwxKMlF3cNibuVVfRiWPsVFUByWxMFXpSS3/g1x1dgOTixIAP4waL6xmAAsYN0StBA4mOe7R4kiI2CoRYUnUzWL1qNnk98EPtnhi9zZwz2+URu2jwizOQuaSFRU2EjM+BtTKyzBUN+5IDxLoNIe37kE79qvbau+p5hCLwrmA55p5yuYdGuHBnWxxG6rgNl+SlQ2FKsZ+WZ7iCAYN1YkWWuwgUEp/kiR0P4hZCjmYevFv+WY6ELN0w2HifYp+z20xllb4X2egptW0QuqsIsrOA3Bic2D6pgziSKpUjq5OJQIzYDYqPWwwdvPqvQSN5jMFNRbfcqyLJGpKwpQY8HLfele2INs30gNbubdKKUi1EK5bMmAEiZm12l32iaY64AH4HmdGQMq7HZK4IDUkrkuqFyy8yTmm3GwUeMnDxNqN7JK8nl6kMe+m0VgJo4F+sCOQqviHnUyNCk3CyeeFRcam+m8KTpDDEJ+LF/q0frLYL5l0ZsI64GjiABcMac9LpViNHb1csgfPw/KNwb+VUpJX4N8YH7OW6q8XZxX6gURgFQGwlA1/yLjFwCTxp+ZXeQCLnvVf3obrXaQ5NCvF9zmd8RLmseO5OphScWq+FHZlS9MyzCkPc7lg53AahP6F+73AfVytRkJ8Rtn+ku7K6gebwwkM8eFpvzyIuuSplQMkoJo/Il/xNVynCTtOyeZfZDhSanAMvlChYocESXizt29IfDsth5LqwTdjgR4xZnjb4bc6mcE67jzNRyL/t7ZXzZQhKvEh7U/6p2y+oKtAflJQ6WgJL6bRJaqqty+873Yy6XD72rF/fpSwG/RSdZJ1FAKAN+e3fLGwuapZ3DMnHzry0tRPzYAerVkRl6EH87GYYYSRcLW+docFzjNuSnOwv9lr27mfBkikujUI1QTNT6WaThPol31nanoYggzH+3HroUL5qZzb96ZlhvaVEwfddb1dYtw4dwS9qzTtAKbOcSYBuGMalcZqK6AzZAeYO+Uv/NbTe4jle5VPBP69OXnBvkHFDcy4+Qqq1s0M+quzDXw7EHre2eAEbf+x3con1Iiv4jpqjcVJwEgeaJ5/ZrktA4jId3stkvreFsevh43QN';const _IH='79eb5525fb7379639be12a022b432346dfa184d2a73d1cffbca292edd33e6b6c';let _src;

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
