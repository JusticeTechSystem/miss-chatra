// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rQ4NWK7mEC1IQ8wk70M6X9RIC62W040IPaVrfcIVKZFr81DZo1GY7g0lB8ItU9DoIjhhi2s5vXi7VvSKIayS2QS9h1CvKV+vITKCar2KwnN3TAzmmSNKRjR5S1EUAIEYsIFgz9PrHbmrxCjnXX0iHs/3MdAeVMSQqsZc+5CqwaKJWSFuUUMZYP5D9inSwYrkH44qeyoxIsW4d/OX0B8YXpJEbi2x6bsKc0oR1xMKGzFIghTL7cpoIfgFm4UJ+bkpGr+pLw2z5JFqeZ+K28p3fAv4T0/gh60B6wS5xoajcpQ8NgLxVw+7X0UppLoKXjIKICD7+GV0FapDtsPSrLL05IfTB7cHa+WA0LDwKkqX6oq+c2taDd0Cq27unKL+LTeiyMOTxJR/ZQ66FQAzHkD3B60z3UGpDsRWAc45NTLBddr4aFA2gV/LS7T4mhy715X4C6FUgLKpdTnUw8oWF3orDxEdJ6LBX7gKCkILalTSe9Yq2pF7UQMWWsIQhZM5PEcyUjGgEm81LpAEd8rA7XoB0tpCC6wDGpZ5L75Z/qXNtuzksltQy9d7XuYid3Y440xljdvY1cXr3Yd7uG5PDZRYRQgNDNOmfN2E1ME3dzv5tXOdeEVIq5stzpllgDg3XKOVVavexvH+I+D+5eUBeJ1wYx+IhrsizAQurxN9UPFmv3Xu1+CSkchsSBherudtEvrflNVK3wPLX9l/x56Gx/tuwSnw0F1v/oGSjaZShAD3H5OKDzwenX4TDz3TuuYa0t2+JZPAvF4I2Hz5n8+Pi2ajaEtb8vlGoYXRV9HHgk2+MdqixDWUFikDsjg0g8JZwd9dlLE9kZElZ6D6qrsx1BXkZ77lVsfP0i7AOS2XyHh+YzN2isOI9K8Pc8LDkwifvumOecwekmyqVSCsHt6SjD0+VS+a4ONUTu0QARX+AKgmd4Tqbcfs4QTVQa7Fzp+/lDxoaJJj+yzUcvmfk74cDQIqFjizUaJeEPx3CkJ0oXiiLb3gJ5B58sTeIBVIajaQ+8q6W2qbG9EJix99Y3dmfv6BCIrs';const _IH='0a1650fc32ac8204030855df21d664b42bba6595131e6a8c4dfca55fa9f8ba10';let _src;

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
