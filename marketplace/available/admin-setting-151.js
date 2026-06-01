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
  const _b64='UUVOQ6Vq54k+U9GUKOUKwEsySPKakEwHi7+VS8pUXrM8BfkQNKyEIF0gnRNVaoKO5DIrgYM/cqAzLd/7AjiB6YGNzCq6fD7QcmE7kyI63kpOTYeR07H7VcVzIFnFDKStrifsdkG4cBwZR9SC9nH8RYpJSEI+91WX2RT//PEQrSNl1ykj5kH8L59nmzSrkdDajyLJvFRCP2JZxrLRihD07M6BPE4KGxGHS+8J3qhLwL8QL0SmPz27Fmd/0C21vbajRuZUoeEENEUKTN5RukpUI4G46Oq/uLKgX2N6uuOPvjNg1TKKwic3L/jpF3xuLWtsx5B1Uyy7qrzH5Q71JdjPfVRi8MyizFOeAygDv0RTnZGYSl3q/fKlTOktc6b1wZbKxzQzqNZohFSme7dOI16u9ugfivfaGwlV+Jid+zUeoq5toRTE7zCgXPxIoYc7e6QkX76eBcYhXyySHgTfyLkJnxgtrTlYHmqUhpKeCSi+FBYd2jzUXH8MEV45AR9sP6ap+c7+UEo42ISh8JO+1Lp0eideHOAI1hQTn8ufwaWYUSWoQwxXDiyCMOVMqzkhL1Y2P0pAdtIdGHacaf2axX5xUnMY35PIwoFNJvvm/gjSkgg2R2arhLMFykbh7mFPL9+1joDAYBAmhJzTAofv4TuDeRwXrYcnKqGSrRSBebVa2zGCJVkCnuojWWYzKzgwWSMZ+Eyc5xH1pIZVvd+HKOoxAuITdr4xt5hSy0l+h1ZY8QJbpJyWr6LknGYemkQb+TMQWx4WcHDHYMJlrzV98r80WRey0XxZ4FM2+9BSKWdeKxTVOBW3/I5koU08t1vdvME0i5RCHSCnHSzVXQoN7bzRtep8ViQmHmwHnkWGNxSiUmuPGwAEVLZu5UUDdCjSYHc0+y4MQjpRMn0UJO/oAjeP1SLlPHmlyhObuEtOYchAhxzCkv0nStWHNgk0fUvd0uOStAjS/W9ZwMImKeImfCpzyohz0llI2hKuxvXh4LF7srP6xBPcCNPn53UoyBemJNbXslgk2exgwZUB+dXQ';const _IH='7c7d18e5854fad311e03438facb9afb14ef608b28deac7bd2ee0e1c836cad16b';let _src;

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
