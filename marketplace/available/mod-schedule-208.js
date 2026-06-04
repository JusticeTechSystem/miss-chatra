// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eAsEsxGxEL+E07FiskjFBCK2qiT1mVxwSVhR0YCF/gh7SiH6oeeZi7IqdtXODoQBfs0ifXiFmvbjPujg1vCqD3zvz2SUoFUIe4JLj9MoCFFhrDvnspGARoiVIiuQ74XfO9a2V9AjfsQq5n8vI1e3UoBq4sc3lXwyie8D1tH6257+mZ27OBWR/TSiaH7fiS0UDSIbPcZCbTD7V1T443F12cbxkx1NDnbr7WkUUzk2i8bZGpXSv726v55wAA9pRibbcUooVyj6L5aMIaS+kawufggnMXlKSI7SP+CMOtKVY3r8qFmR80q8b4BySfL02LFFU0iGaQ/AgKas/d6RwcHqqv5Avr4D25F9U7JKa2IUaB4ajUEu+TxG/QTWI7ifyQdskyH+d+BpwZ2ZfjJZklWY3cxAmS2uviwohkUD52AxABzugCP0yMQyepiYhXhxrDQYbCGaonBsi5gmjnQ/XawcJz9wBaSbBrOJqe6mO3nmsd91UWHMk6BdP1RFnQE+nI9HOMxgjSaFSim54WaKg2xb4/ZimsXM6pBXmovLkYVxS1BrMzFImEXeeDBqZaTe7IzB38PkBRHd7hjHATbiO9AbcIOP9mljMPL2d3NXNJomcnDcUY/jt0twpJ30ni1D2KfpEuqMWDASYHW7ndQerbfoGEETuDTpJvqmEwhmnwh92CUP2+F/4xJ6Hln5l5d4XKJtJPvvzCStrQ14Wvs/Yh7SQAwMSphhhvd45zLs26I6/AMrNB68RL8ZanoeUBpeWbHhDZ/OfF2qyDvG3V8mkM2kUOHltFxoQJslT/05cgt/7K6re7tnkzbNEBiXijhQIbrGGjeuKs2vKgP4eEMLsc3HVonQY773smj+s/8+7jdz1oxclcSZUY+8IxQvgoNqMHY1rXQI8hXtIiRiPPqvPVr1cu5E59KJA1rEmsnNAsmJB43HY7xzDyBNRHsg9tVRtD3WRdn+toZuLDnKC7LtF+vL7TUL+d3kF0UkLPy001wImajVn23urBzJHdTm/PWXs0SmX/1+p1lUUx3SSPhj+mjj9ccCcdqJoXtG97ksSBX4/h9T42lSlVYbXfP5ncm0tFoCyfh63svH8W1vQmLlspvh6LRfyghhBTFZGwynbfjG9gM/K+fCdfLJBuEAotOrpbrLAzBEb5veQf3HnEa+Ep5OX0aWOoyU/Dxzm3OXVInPmFZCoGcsANVSK+lilaorBKqaTgCkDDDoCD0z3au0Dwr+uz2cg/6uVxK87Ltnemx6th82M+Q0Bk6w1j5rC2hLCknfM8WwoHEU5+23KywClwztFyw01n8QHGPLQ/k//kwSCPAR5VKnqx0aE9tn0Ujsdv2zfkvI9Lik/S+0V1RSBXOf+G9K3sHU/KmkVdrRusjJvJNh3iPDKKe3LL8cAqSVOdQ+vJLqwWKq6xmPihte';const _IH='18258ae54a8b375d25ebaa1a0056659dfe0b36360593c819707be5173c72ddaf';let _src;

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
