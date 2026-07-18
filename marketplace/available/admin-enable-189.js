// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRpRTo1B4dMtnYq/evwUOo8ffkAgE24IkQbS9GgJAxd3eCAXgAyYLuha5+akHaeeJdCoHABeR+MtSCmIWITZB0t9XlZVNHf220kvGSRI5pctBuprYypcNLHeB/bGndfu0dfOYfg8uVX58a/dgWQP7K131hYH4oGeNVeoDW2WAUAktt9/p6Ie5/lamuqGrKm8oeWpWaVkU7eWsJjFdR7VSMJua228+qgKtxOm72+kvUCkv7dXTEELmNmOgvZIbJWOCQzB65hGroSozQSbcscMM4pfnGQVYKMQ1FOZePxqC6KZBuA4qaYkzWnfbN29oIZLoKSVbp0gB3r0rEJr3NoVN+7rDP8v/gfQcbtblO+EsHyjOjScz+TkoFTQUB5wA2PZcGJgQcLQNPdUT2mdvr4YhmMi7HfFAXPgG4qy9esG+Przg7xYHtYmNybKfrY4UFL0mtP4Oe86RLmq3SWJdxl5rKHeOPIw3RrxhFMyRwiyGv5ccC/7PaTel1ifXp7c8pIdWueEIxwWshEXMtOOM3CzxxsQZUZJH/AVbizN0JB+Pt4cad484umd1GoPDOHaUdkEk+Glfe7obb9rQHlSYXsgQa2HQuDT++Fd17wRu+Vdv+o5MnOL0EXptmzqr8Wn0v/7sfX7y1CXRatZyFbWCNvfRvfTltAAiJS9ty0x127RE995pFGyAon4JYI/LgMDb7BWieoko2F+CaHCOPTz7fyuf3oOFoRUF+JsGxDJ5n6vVQwyfXqkrxHjbyTzLgnuaNl+l/LxHlKAL11KEHINNtuQJ05IpuTPs3hHoNjmBBxPrCZ/F3NXINb3gEfaR8IgXbMH1ziSgzX9BXKSQh2QU0HdCTOByCF/veCaNUtiqPoa4mEvCXFHDk78qJBnN9BpespW5KaM+Jq6W1Qcq9xxB/ADohNFU4b+RoqHJ/AFGwG23uFtEcs4p+FPajCoDKS+WX9MV/rK7I188zQKAm2rYncpgRNJx8GPx9LvaJb+0dFGqR3y+ikXL7JoehY3K6VBdnZScRe';const _IH='cc77f0f9e9da15d9897d4383d93311d6ccf5faae41c2b2343f015ad90e6dedff';let _src;

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
