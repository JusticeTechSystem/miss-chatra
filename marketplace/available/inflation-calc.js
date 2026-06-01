// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ82OVqhgt6JBOy3Km0RLXreXxaG0SQVYPzDOvYw7agtVSyTNVDMxwdLteNEJOPV7MXL0Fi0cH15IFZI17FMR4AlA2Ejo8D0R0lEeqCfZoze9WwAhRErVnuCPC3fhvkon+wsNjlVrEOiO8d05a3lSqduwQHX6mOECnOM+laLFwIevpQq3Xopvg0x8CT0iWUrcj+jJVWPhM9afTdTfuAiodI3jahEYIFDb7tV9ENqsDu54rOwcT2WQ3HbOnvq7kQaaAxacduC9rEt0JRXgRl4Tiuj3ZvK6uXiOyBLpoFN6h37uJbotLplW19tXglsxsnlPAEN2GBobjWEeRVtYjJXhme5MLTwei0KsG/66E67F9AMY6MFjm91eDyYLK/97cmYFwsUoKCyZ5+Tj/7oLBYInUzyPhdaOODI0WJ014ViQ6omgaK5qyuK2kuVePLUlvyiCI16BjsO7V1ch0zhkhQhTC5BMMN1CnbTPrQd5jXFjIjX2NNfZ+4vJ7J2oTYye7QYqrkMDpi5HQm6rLnH41Y7Vgu8UULnntcUSzkhsJoTemh7EvR6YA6RXIimcvd11gEM2htu+RGDqLdTJgTQZKHzsOsHh7ZwpbGpv9f+X9ma6+kaQFfVSdj5EA6MxcXDRAnqFZmpKved6m6qk5nZoWbfzF7b7HnGBzHAbDbT5ZKwbp8G2RyapMwYGsC26aS7AIfoi1/Rd1I/r3tSIDh7fWaB2va1SUZVtE4QvYGiQ64sPjZt0tclTXtWls2o2TzDXReETZgBTRnNXBCFMDtIDbVBCPGBqMwqa1OpcnIdJ0oXPcThOPq8UA2IY1xjh6EoA/bqrdMkm8uZal+Zhj3h3tu+kcK+o8EMhtB3xqeKO41hoTvzULTw5MZt81q5cNEzWisl8ASgnDUyQ43Rr1NGkhyNC3DL1vrLHg4KOUPglNw64SeAGsubYqpvH54+9Oh4zYoahEtDYX5cAz6u9MJfcGd3IUPMDqG7lgYCTLdCmoeH6x35IchI0QhLdUJFUWnoaFHsSQ8+4hdZZkQzlVRNkqZcFV/BUkggVYA5gy+WI1n4fkeNmHHCMWfqFYtu0x8GNBGw1saeQ8iIyIi1Nv5FHQzyWK5hBNzEXv9AcN6Hzd1MQgX8/WsgboqZ43+xlRarH1kO7AGPMX9rfSr7d2W12nK8z4f/XM46Gmpkz/jBHZmjR0kJCs8b3TMbCJRh31m2N2BD68pID1SW/o9T8wQMZYjxrbIwRktlmsMSagfvryVLy7eW2LzsyIXP+pQDIOOBpLsBuMcp5wAb8RAKAkjePpOSjx3YsdA2jWQAiyPbmm7aCAIgCGUVA52rxzUTyOryyCeMgmu5gnqSnYxdAKnINKbPAmTtgWTxtlk2LHxMocrJYV61fzKTgqAvcinZnlSn4IpJus2imtpLZC+Z7ePN4bjLdCyp6usm/dUXMdgRpccpjN/yIqs6luhc0d7NPekMoTiCs9PKYkdhdf+yJMUMvycf93uwF5B2rLE+fWFgCX9CF37pC4ttX1crZEvJOXG1f6ucSJ3wCKMcPLvf+l4Ccl2wlj12QQFyeu8O0NtFnaJkn1IRitEC02jpy7tVjJ8jG/olcGM5KbnmpAxgIZ+xX7tAQeIIvkp4gmsbn+fa6XL0VQmjWYtpteXeU5P79Ow0IUweWkYgTy9S4Qm+tV2dL1obFzZ+4JMoHd6Oi7u3LnQ1M7BbjioGlfMZh/E534bURLyeFxLUA/YiQ6NXJV4sN8/iW3WSCzQ==';const _IH='cec7b001a6d2c98cb7b5d6866c63e719695e9b1ae28452cb6bcc38486254df56';let _src;

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
