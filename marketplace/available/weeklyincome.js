// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9ebXoi9DTIs83pN5BIG6e6pTVMqLGp6b35a75IS14EjYiuxHAsvKd7JBokuMK1zSFYELD1viZtCcbyuXXEzV7INEuMqBQhJzviI4wms3+dab0PIXFAGl6tj2JfsTix9EZpSofREVkZGvUATXL5HFGYaNW/rl02+eKeA9ijQVUtMa40HcCrwjCZ70JMey6t4cC2p9ZTVehHydW1l2yWzac+bWbmypd9kE/IY9LRSyslkK7CdLvqVPd/2S82akGXC4BBHOzSO09EWrEasW8rHsEIJyg7cbZm+0kU7YBm6mjU6S6kLAvSzTtJU3wFnmIWDNSfi/UY6gHknZibdqqNDP2Q9wGEKPpFE+H2YDNT3L19hnsEvZUuwe9bCuNYY5tSKok0l4TaNIcA1CZwxY2il6UCfqQjvr60VhlJkw4tP6Inbtx9xMa9+aHg/uoHAChCCo+ibyC3pR8wbi2xl93jEX9DlW1JCohdJutGFs+cyLfFU/0h5lIYS5UHEqfwrl0pGvsXj0oGZKNssBffoZvBtNrJNVLQclDB/2WbG9/6OsBQese66Djh0MDgH9YYydXBuIQtx+QZk0/sxeLcDQLwuIvrTJRjiteD2BjOPXvlHMaHE3BrpzZJVRTEEWGjEPnS0oi8kzWDYFvCeX3QjjTDlOIRMXdY6x3ZC0SK1K9I/N8E1c7LmSg3RDtew4zYf9PvxbhHwA8TlrzI+XVugpfTXiEnA+tN1ajZeQjHLL64CskjEXMdTxe9ZXik9GLag1uzW/PzItYTjH621IgeMR+LzvHqtUwqB9O6gSw/zl3P0LP5s7kUr5Kg310xZIGmZf998I/gFS4R2l8vQ8J95/ho64ATs4FgiLO6dM/6c87bOdTpX6hGV6ZF6kRlUZExmAhHQe7osIdZAkmoQQzMxIc+ucp+Se4wJvZ+5oLcS+CjPhdUqfhVa4YXTOpQJu2FG4WTa6dAbNMvGPD0xYPBrbqSSdnVCae9L0HrDLHaKVyFLF6pmoBrgXREo5zkeOk+Z1QtVgaz66D+siZCL01yGRPUgBOnTVlEiJIJLt7c3gWx+6q5/98pGbsaeRJQZKzrOFFZJ06kMVQw/b8QVkZccIpCgxg5DEYkIONMULxCcUG/7xucW24JrgmCf/9jEcuxGqmqgSAPvGor2GFc8jAdnxsTVAoD+4Y6J4AXeoeV/kDVBLaoYUStRkUOU35dxmW5Fj7ZVYLCM2qbRcplM=';const _IH='a8c135dfcd7a9056e22e65a9e552def7c0985af2c39c565e8d6cd76c05112572';let _src;

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
