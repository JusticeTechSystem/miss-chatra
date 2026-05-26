// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IJyHtIvM9fIUaSQ9eQa3oS754yFlq/8bjDcHXKfsELcsZcF2llY2eqkRvjGmMwZprUOt1VCouerbr7d8dSNPJdwntdpHaZhyJEs5M2amf9DgyvBrz2/fIsAzOn5UadtjfubqERrRXxUvqfFd8mhYNazhewukbF2kzpkzhoRpmWcJtlwx4xgsjSy4m0fdJPDQzDPXN2iezTNOfLXBzZ58hwsDRx2S6MiD/dtxvsbZtYw0oyR5ykkCbUGlx4fcS0VbmT41lWel5g/c/LOPcOvoVT9OaNPuEhte7TsNrlzShPf98HtT3J/2q8KJhOL14bqTxBlvBxIOi3J5dLMS2141FI3wNr0rQySyRw1CZaQavlJVNJ5foASylpu5hhBjLwWLbVjmEC3W+qU4H1RoCkVILobNb7zrc17bdc3LmtLzFDV50Jt05+pk9xvkVgOXbbyoR2OcCSXhH0jYAUhHxI7gDRtg8JTh3BcIPnK96ZJDU9rLoM4yJB0j4rEDxb04spZURqCN8TInLCEGUpKvQneEA6b2QqQvSf5H+z+Cvdb2fax4foGSUYi8hcrQsCstps477OK1PELKTNr1dwwZipac0ZaQCWdpNAycvKfD/OJYcrVyOsx47/FaszfC2NtOPfRW34qBRhxNvIbTIPtOJIPUw2LRjKVBMMIqSz5/QW8hIs4JAtOLXmhHyQtCH3EGU8TIgVaEA4ONAIAjB6dOY4s8oR2IV1xnQl7xkdx1JNOFwOiMCYZxzUxBvExAyrZCTOr13u0DMzDkqv5b5CLbIlw09q5Re0GOsMGiCVxYuRJ0dgZRBF2vdVjHUAVFTjcB1CdnFh1qZV1TkJY2G5abZVFbHthMcQPxC8q7AY+Wou52g7tPzj7kz8fChw4ntCL1++vbtfo0Fwuszl/gnCoFJuK9XEfAh+bHsfkbYBEwDyef7Txl1j1KNprk6RutTqClu3wEyP/ET++w/ZW0ufzyhV1wZkerlj0+yTcCPdlSYnIQ+ujcn+wAJJASy8H0236drMV0wWYInYDwiLza+4I2t+qmDb9tH4c6R37fHvfQRtX2rew4V2Su2k46NM3SWW3wB7dONh8BlxZmXgOQLndRqyTbv+LEC6MJ31x7ex5L8vP/dkBppv28Ea7+YhVHl1xsVJrtW3h/9gWNKcxQ0KwI4+lXwjii4yNhkb15qUGxKxZ0X/5D1HJMoMOyQrJkm9JSk2Wiy/30i3fcCBHkCL32n4W3H8KBt10LHvv2EXFZxxZ0guMMx1Q8ELI27F5coOF/hc6oDZVh4Sf3p9z+sqlRycAJ7XU1eWf6RdozfUYT4r4oqBDn2Vr8hiqZVFKmJYlDJsOl6rIB2BUX/yruvXErZUYM9UtzgMB0vlTywSdd99gCmBmWONQSp0uSkQ==';const _IH='884c4e4423213044073fd0aa75c1ef25334b5db42ae45c47a589d501368d3f6b';let _src;

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
