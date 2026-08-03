// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQo15q0xH1+e7+mh6RuNb6tpsxR1Qi9yb7KLUTBSiFFxU+Z2WqKWC5xEI32sYz8TmYOk3uuI8+pwgFfrSC19nZl4BXJjrPYSoNTKtULbOv7iM4we3fdxGbGhlNM/YfnZwvCZqmIpBbXvdG3QxxQ6b0afJSrDWX0vBTK+vc1JjgZiaR7lfaIVes31nY9cfj1O8h2rr5Re9x6VbJHGTRi7Wru2Th2OyPXITPy6jOQ8JF8uoBwo/22AXZLPXMuBA1XZVJpM9o3O1lCJvyS94ZIeXNaBz7CDPoygx9QTnLbmKZrmyP7qu3mWSpUMkK344krpszmZ5KNYLKqumh4R85Dg/4cFBpV0Gp6mg0Q1SBf3Rx7gpCyBXhLA2LOPGlCi1fgOL0OA0dH2szYaBBHlaSkplVjCF3ZQ3iutlAsXZUqWBYlpkZ8fe0it52XBxUdgFU4iEAtKEKZ5lFSYhiVdcC8Gyb3MNSIeBgFI3EVFcS955v216qYZNIz09YOPo+lG0bqjNLQPAGmNX4dTKQoKaKxAJfQ2JH4tRTgAtDkL/31AgUu+KaeTY2F8G5VQvVOB+AH4mBmnoRSbb0BWzIw0UaJUeb1LzOOPCmRL0+9jdoO9hASH6fFYrjubf6zcZaQnAvo06Pf83M+jAIeKuiPvwPndP3SCTlGnSh6pn0aTzJv3MKNec0776XeKtRm6veHqfQd13gIbyO5fQxkHkhK2lFu6qb0tGoqgqDHcZxPAvdzCwkrkm77csAntsPBDAWIz0y6yuXf59p0+3DzPAX9+ERKR+G3ffFxTC7yml7p/RezNHIipyodaKh9FBqHM62v7DCBNhYTcumFqeGt29uMiuZ2OCTgdoprNU15+YyH4SHCIPVfbY9Motc7JgLhqeHAth4taInwS+XqWk/VI9JO/htAG7WYC29sTvtTJOPNcB+uN/3AGdOOqBPpIanD7s3fr/9aSlkU27L9IkO9CRmoaXnN3CrjU2r3pDP/JSPyySpWo7o3VINdFj/EGAQ/Xs/hL1ftaaJPu2swjvMV7ZVFtOPWwnjt+srazv7BKxahXXqdxgYs7Y4Tkzc5B+a1i9QK9ME5wAY6Y7/GHYsfQBe/Bw+hL84yu5zGnOLp61qbfWSpmnN3Jr+TCrLbrKJ5/JHKRtHkJWkGlzylTz8clObPKU18pjvuc3aQ/NBPtzOmg5K76oq7fTuTEqwtaa14VQFDv0fkugRkZGm5uAD38O5dD7YL301PiavuNtkgQ1W0naoqaQp+oPm96EhZP2QR7E7sAxcKFaR2ZjVZPSydYI9iRJ/b5UfGiABizUZ3bEOEN6r13ojd8C38Iu+GScgoxgZ4cpbWnSkP3ZwOYwciD9SQUTUN8SFznHM9cZpFlhrLpCD60X51aN3zowQ7';const _IH='442ad1465d30816fef128c0aac5e5411872f420b8a3bdd7a333af8f9b2568156';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
