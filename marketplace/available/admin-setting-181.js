// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jC/iNrOOsha8FKfLG1zWb6cQmjL5bdTyriFVXNzp7KCshrmp0xi6oSrOgwspH8GjFaTxdfqA+5CQaw3L0WVQ5Pva+NAgNOYFt+v2DdvTJ2mqplU13pTeWjyMneSEuiTE9gaUl6xfR1sw2U1ELlAKr4136Iln71R6VpaCTC9C+Txm3CiuyEVmeSBLGbk0YjL9wsNsW/5kyMzHMn3PVn9Y4hB3+/ZRwLNlmygZVYHv8BgeRuo8Wpfj6Glbd2WVtdNu/zs7uUhFJZ4hNj2wzNsMuDIRdmAghPBMTo21WwLzWFlOQ4rYrqWaasdCh66UXzV3rJKL98fuzKDetxZ8iqDe+lNgYNGF123diCGd3AviRXjW/YRWJckCGIxfqIZg1Uv+t7KF7cVKc5E4N2qWW1PLV0ONeBavLeZ1ptm+Robyjs/yL0IVW2+oD8YG7b7rSJEr8dEAHQ66gXDoGTZXvp6/EoZJ8AlhIhFAFy4X6vOIUNVUZcZOj9mg0Sx7x2TIEWANCLnMFBt8vGHm/S//fWvP1p0fWo+/pgtsBiHJh+wOynT+ZLtrWt9909ZDULX7i6R3JCl6GUR02A087zUbvoIblcpm+BnHDsVo8qwDWNuoa/Hn372/goANrhiZlpTO9AUeLWZ90RP/o64LQRyWSrDcmeA2BDJRaWVD6J+XFID312i+9JlzR3YzYGXEM08E1kNcFdl8MuiA2MIamfyetOm8XIHv8VPiT5oZvfxa3kbqGHmkRCRZUD++Xv6XL5OPDfFJNBFWlPB4UzU9V5KVDvUlLVZ18zwxLwAM3DvgvY/dQIpzN/9bX+A61bo3nHKZ2JI9SqREyYVxkSG3l9YiNTpJauGlB9Tsz8SeeMlmndAC+JTEMDPzPQpndif774GiUwqe66tZ5PmNf6T2GCJo035Aad2qlwoketn6jbgF8nebekP82ZKrbtdeFcGRW3Uj9x2FdTRge0qYD/OiX9T6+FBc1smod1ro2OZk/+1A0OKVTqxHshiHkq60Z84uelbyjm9Zowpnkfh/bb4=';const _IH='f492076b3881e0cab1938078976cd9253c1d4c6676646b9e399f1b3ebe3c6aba';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
