// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yaiYJ41LnN4Q4yHq6WGkwJfh6llzgxtPj3nQ7beskFj2gkeucGYN0e5gCoXCNXstUB30Cg7KIbhhvqQK3/HFrQN28CkXAI2tfQAWG0hrfjpVF3Jq2Ga/QkLc1aEDIUr/YCBL//U2H6RZ8Cib824iqQ/u6Yp1OZhWlm0Yupp0RRnbst79dP55ViOplxUxhAy/CCGIdXNRIRZT8LferADnExQb9ij638XWL76mOUxOLyTVl6acIG2ERIA8EOhZJ0dNBCQp/gb8iezGMPM15U7w9OUAFhek7WCM2PCqjEniUqEmeNqC0QzdWx8Yb09f/4sjbzROlOH1iQ0BUnzXPBXfgsBF5Z+awKYfICcwyv7fo3KMjra7uGDFqr8CPnaPsopF70qlnaCEhfRL6s8quIt0MsvIoaRapDo+1TSqQA77N7eiN8mGL28XOoLZju3PT6sxaEBafRdOafZroxLnQHVeSOKf3jY43X1MQoOnNTCDT1DC+5nNEbpwQ8StFESPEYPP06KCSC8AwMgGy3kIzPZlXy2RniH27NLOdBTJwBT06Tuavb1itlO6dArGSib8RrjY4gj1ZjyVKXtJ7Hdjc4ZVzDGOu9H52CyLGUaSlbxD17yEE/l0pwaCBa/Q3gxvQsuRoszeI4EzyxrpmeDL7Si3/3YbvOFgon8iicqB6EWv/KWk9wM6KMz66hjhJyn7ODCG9GOwSJwfMv5iUjbodzgtRIEY21z0mhl60dN0e5M=';const _IH='b0192190a5c0232f501a925e5ceff1a1f3fb7d6d6133c38dab646aef1103e644';let _src;

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
