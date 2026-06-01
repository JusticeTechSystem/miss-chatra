// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1KVFjBfvUdbYyrLRXigi/IJ4B8uU7N//fRQtjLJUzXsAPr5CUzGTgg0TXWwP3mfQVfvveCQOe7gWVmVkrkFbuZHvD1FbH01J2/u3cnIuT/T83mD2edqpqu5rLEu6Il7/rOfDrgybdk7Y5Gr5qUD2R8xFPja5iJ/w7w6IfdzXX5SR+e3LcwYzA6/sgQh0R/QeJkt8SIPVZJ++Dvv6nler4sfqeTIljvD74d3AeWR5l1WvtxH6bvLYpcqNDFT1qvg6jJtwcBW+wF18xJLkMZX31pAh2D/DIJI/owAVyIJFbV5TpYfcT6HqUWsdvaeysG3sGplsHALx1Kc/tc2Yg7DY6WqeqjJvHMDtCw8rRxe1Te5bJRtsnzArL+jQswe+5JXn3RilrJNLW8Y5wz6LVhy+9sLQcNvxYct2G+AzaJHg9+5sZSFbnNSNfsFwjQUAGU42oYDuFrWdLmlKftWzAsTAvA9CEPckS8pTGeN+DFoHxNpbAaPMalNGgYNw3RnFqkfeSUBuPaeAhuAlxlegGUfWT8YqrFUomY291OgxpicTNtE53ACie0GBMYU8/L3PqqgAIGV2qChEdf4ShvM43z5LpV4trKgYDG+qvxVrx8HOYZAT7PXr2ct2BYdiqMeznaqlJRSqbheyFXG2KFdrBuRvC9vmsQ0FiKUU64NFzwgu+ZVF64404Rskccex46ZhgCkBXDWqx0YybtDqcheSdRnX5vZKa3MYYFS08p2d0yySmjowt6PRKR1XcZvXfo4EXa7NHnDmPSSO3igTy5Z/RIQzaA6Iq/qtz/HqWMd4/BHPeqGwotRVyajwrzdWGK2RLl7Fv3Ta8Mq5ZUebXOC/6ioKZzqYs07EQe47e+xuZPRYpaA1gpFXMii+XMHohTkP2hfVPhfsLRKh9KC7YuQnWKiK514RvNWeXIjVElYKlWe4Ey2XSiMh1cqa5Y/HcXajEPztRGORZGyWqFkWIJ5Y7A21aJxj8TvU+J9Sa6hX/+J9b3vWWxr8CWqiItAcwpvJ5MyxcvzdgZpcQfaTdVvFWBEP4JRAYH8U6gzYBX36tq8yk2eaSLqeLqDCvOTEoNS7HZRYzvdxmU3OwYIBNKRSUvpKzbIVzbc02NNes1UA0Fl8f2N/7V81UwLJHjUBvC8N0PrbuDrnxtvSjQUWSYDUtS9RLT9WGoDizxbD83s+yciGNWIGNke9vbNmRCdI73Loc+DBV2AjKhwxTTwx0sp';const _IH='24a97c3eac812fd77a621466e2abd94062b348e4aad9f399265a2179cb2f21a9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
