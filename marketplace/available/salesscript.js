// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vlg1bLVrUys+lRQdfLwibRh5DmFGn3om9uprSRI6mz5rBdyepfjZnjHmjcV2tTOoAH2EQxq7WKN7TeD05tHkqM3oXmf1ONl9m+91KSDZ+klIjNrcH9K91iRpDMIkxly3gZe1bVYW+H9z2DCvqZ3RAeJJVnQAQI9Hsaf5NKeeSabgB7CstqbOfQ7GSXjF3Un+ic/avIVF5t+D4v2OlI5wOMzIjY7l+9WAhsMaATZ+7ceoq5nPliYI9eNiFyECGNvux5e1usdrKXrpQwKPO7wCUB8zEqtejecp6rKt4VRiYGvna+dRtuo+vcMaMN0JGHtSYIS447MD/Wx7xFhUHMX0Ebn48SAjTVBtx8tAST5UIfZS8cWDceXnj19+qpikwD+nQNERgNS5HZoxdpnDIGQq7HvscyyjmfwRnIPFA4qCMqFqddzX8EIxdJEhOTdZWguFWnBmiO42hIKDnE1wD0+PJwWbZvmUh2etiOhEqbi8/Pp5DWf0C9cTKUjum6c4pqi1a6RHbNz5h5UJVvgBgQAve0DQCNTcb4Hlxjp65sJEirbutvDpLr4SCaaSxa4UAENwIeJMJgLHkLCMTN18pmsHNdaZnLht7SsrztQ3JCZ/ZHYyy/l372p4eZVmdBtylxZ1amBHXK31cDtaaWMgv+HAN57Bv20+sXLEftZ11mvSAs3vTxXgEODs3suF4Mhb59ocfvddAWUqm19AlnOvR1tmoA1Z3YGyrS7jhu0+boDcc1CzWSnvCKzT3VlmKSc10a4P0eiksNnHhBuvFTKamZlv5GIqfha+BBxmmVOmLLgMLYjyjwA0UkT5Ouvr7rdqAHijQfO/S6o7Bdu258BX6xJAxb0mcSndmPeV/wOl0rW3VLtTJzve2xL3dkzuuikgkGu+uX9kUeNt5wQP8mVRIDbIc57YqM2PBmbkdN56COQu5jANNUeHnCyu2YCDNex2GdCQ7td2v5f1p3cph/tpebRCtn4tiRQCyi1rk51fTkjfuQBfaqocOp261i6zLxpQJHycElcCVqh/NI0KbecGtKdCVCqj8UMMxI85d9SzBKij4fbc6MNK/tiiT7tnlu+W39qrTREVtoSK5if75Xuf3Mgp1M+8larOEFdRIlEhQjNDzFWJexkzVHRrPIfcOxHvGsKp7n75ZOgeqpZ7t6ByGbVJAOjZ8BJ6pNYKyISYFha0sVQGySO050Xd5kfPbmd/5scXlyj1';const _IH='6ddbd2eddc2c2af8effc102af980293409f36ef6923f9fd8ae10e60172724715';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
