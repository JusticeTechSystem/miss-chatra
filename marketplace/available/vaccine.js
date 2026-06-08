// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v7MdYZhBAAKID58ew4GUjSZNv/w8drK2Kup1da44s4RNdRmtEpM7WXDQsOvNXDNlwxa8FoIRM1ikwzC0VhLYpJ91VahV/zAfgNF8QqmhV4AoUick1DoWV5TJzktZRA/O40eMXhxZ3hW9mWsGGd++kJgqCSLjPXCSE+Lg2t4ucXPrXv4p8tbnOjd3GULUkI0j6joVXNyIhhWj1SG/2XFAoyhuogmJatR+VbFSJgldmMeVUi9PgLMDZUwOCMOCvgzYVHmkVlLejjixEbJg7vU5/A46+TlsPa8DUjNlA580MTjqZnwuZXpLqK/n3kboMqQb8+o6zxVscEHEFfnG6C/F4in+dyCW4+xHCC1FUDGoKRjT1+TnRbq4oKFjd0R+a34GMjVDMRWLLqCCxomQINs7uM+u6FgoQG83YUN6GpHYs2wPQBoeMj/DK5AKbcUE9gKpi/ei4+4/o03EEfJH1HT2/KrQtxxJvi/8cM8MMvwIMephITL4qc0m7QJY4sVhT4KZhaq2XOOttQewg1J24z1f5IfWd4DoBcGZSeAy/Uw1WrCmaMrjmAQZ9XmuxpePdfxHT8GLoFd62c4Qv05BaQK3h+6lxPM0zEqRXn40LuOCYreI1zeXAB/yRWfTvT2z6OZ1k8Xkg3CdD5ghjhKs5VDrFNpZF1n0Asqw68bUYAYVsWjiAfTYujkXCRLlmTVCnFsHto8evUXRx2zaCN4mtxr2y1+V/wgPjfoSWfG4774VbLqNyaMZdkmykIiMyVjZ6XBYphM6I9uCJ7QpPmLXXkY1RJhATtg0giHjZQKbIOg9onXEUyfrLPQUJqM+tRBZ++cxCR72bc1ie8V5T5VPU6kpFoNS/iqmziB0axdZjP0qWq5/v3gychlGvWPRaNei2wIfPJr2JaTpO5zgGnpWPR3BVaTNhwwLaEbeoHMVrB5jJiRX4upY4dmsNhDE6MKy4cRg9mklCtsI16JHEvoxnFTYBIxHoSi47LD2+98/yyGQznYaE2q4zbO+4jzM7EgbBPLKrLkmWtcGwjomTz2QIsdl16dtfcUqgmKkO9PCnGQXUAz1XZChKjlgzZq4ROGP1DTuyeADr1pLB6R6XCFmAq7/U9y+GeObbJoPovHtO2B0ktGFGChdMrZ/3wSgDcbYc8eb0wj9ZssjObaEYedC09wJ2yL4Lm27+mTzLulcB0HQTh1Z/Y1UV5ZxoPNuTCI=';const _IH='95461455dbcee4234d8f44b96c908fc14eb55d20632e372e2547f3a7371df690';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
