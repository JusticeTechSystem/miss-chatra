// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQycWVacYl62juAskyEcxH2zGEYYifaSUtTxZLn4HxmJUXt4ML1da9HRbYxncODKYGi81fx3R9Dwx+7MVOVkgEqtqhoNnJ5D7nVZgtwlr6garzh4nIxGQxOAV60NzNRwiyorsYA3GaCZdlo0s8UH4F0Cfx3w9erZDlksSsSbHBIGpnXJUspJnkU4A877ptLWJ/zIcceN0MduOgD3aStkIxZmWHTMAY0NgXx3O/vafr+tmGmZ0yIRdut3Nwu3XYvprjL+13U2V9tvnoNw8w281SJrCbwn8lkAWr9sFcpzq/+omK5pyaYhuu17EvQ6RSSwTU8k3Jdcq9YurhfBgkzz6QsNPvJ2MxmcWdCZOg+6gJTVfhKbvzF4f+TPGOA5IJIqXQP+BDmLoPJR5K3Gr4a1Y3jffn71OFOwbEyfC4sDsov77BNUaFmtRR34+Gn50pBLX+Rd3lhRDR8vHze2+yyLpp/fd1+hCjsp40/W8Ts9dGpnSQAmha9CAGZGnRXyCSH73ElEi9q/fY6LYGJCXxbOrCOOtDaxF/drTnWZp/7H4hD3av6ZErtz4+nkbFXU8s8sEC9E2WojvnBA7Zj+i7XvqgH3jxRHEk4C1qkbZoM2J1D2v34sREG9IXzUsL4J8pMf9oCBKKB4BKW1Tw1MMb67isRQJJ+VSm4yHYIsIptYt5h/7hKNsLh/m55Sg/toZztO0O3IGXd3cf04jWY1pPxiNy2OBkXeXHGaBkqhERLvkKgLT+5Xq6qXQSO9JKf9jRe58rUdZIPmQaehgQE3Swysb/EOSqViaQ5BrrXaZVwwbYyxUP6LUlFzzlgzlo2vKJONeAYdf9Ejm7HhAOft5lolK5fskIJFmlhN27am2P3oan+ffp3305m+QXTDhUF8C6uDyK8R7Al5BU+ZKExLNErC26Z2/vMZo5wuRzbcv+E7NlhIcBllPOeJz17KCnYCw1zuxqjWApMkY2AaZDQQ0Gp1UD9ycR99GZ1281Ggs43XtkTLtacIj17SfuyPWxW6Ysa5iNsdIGleLOdazSfOPJ3J1uv0NHSEHqFep2ztapQ/8dX2e3AFLhQfCSzyfseKCOIz1izF4aZotMbxACwGXUfQ2yW9JEH45AZVAc7W3HgQe/1zxYed7RvbA32CaXNpLUkihCbbSd3ccRwunBGwNZ5CYZFeEMniBQtyS9jsR0ZYDTl62E7gCzluzPDM+Lwl6r/0EVvPAxyDoKQvkOlouBJsUuwJen9lzbXrBQ4yYNXU5PyrsA4wncJk6hak6UN5w/bFckKaioEfpHxYb+gjiyWP6+h/mn8/xBK6fPWuh8nYkwlrBkFJI1Il6mtpgziEsp9qQUBeJVtRH0RCn8Npn43HejFzBY4rnYm1C4PLPUnO/+khj12NKC0xcTtM=';const _IH='d145fa3562e7363b01c140f1421afbb166d9c81511f6a6b7285151c68b638f54';let _src;

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
