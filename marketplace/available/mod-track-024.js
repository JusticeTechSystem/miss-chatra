// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mO5cdl8/7YrbYnwT33FNACmcvk6KLgH7cmrLgQXSNoXRK4rWxt6iR2FpTr7qIdtlrN61iEnctDAXy7uIrJ6LMFNxGaozEntSSn9JCfBsHyMLgpdV6gN9zGhCsqv6k3utMzWQak0xDdQHq5MnJQNLzt0a7dmTRVg5kd3qUwi7jj+ws8tYUxsGpu+AQ8kIIbkJaFcXPntH8uQukD+rHI1UgaXpBiGaHB/83cJjrn6y8jp1DRtrR14+SIY4ub7iSuj91ztyTx+f5tkoV69ralkNbukJsoVoWPIFUQx6CPLDbMDxJUClwUE5/EQIJEDOuphFesMfFG3/vSP5OFxDeX1cRRhpfEe6tgRzA1cSUHVCNnn0AVBBdJdAxyf3r1CPv7oHH5VlC5VFbedOLS5vEJhKKZzLyxbRxhNH9bhqflHgnvxnJ4gdtuxW4yt2CXCKIY+IBXoYTSlg38M18GCq5ZI7LaR5y7JLIatvNzmeqZiAOkUxtDqZ0dYVEY9cAvOMAIcaSyzYXKryZMjISLPAfdIE8HAwQNNxqpK4i+lphij+6v8OsKrhRSlGln6MK+1afUgumBE9H6tZPEVYVdW6rLjt2RkiP1drJ2CGpRK53H0x7mveHucZH/NHuTSwqZNAW9lIkTKICfUKhSIw3a96gLC6yIfnRPJXckj7QObJ3rqJ+GpY6J4OUcU1M6DHPjkQdptdrpfQ8nQCW1ao+ykJPNViY7YcogpFH3B/+wxqsqPiXug3kidHhZLtngvLHGcuCXXvyUO4CnrxrFhK6+UttZVXAh1cbUdMYIm6tJUAUtXT5+LsXOjjdBQD+D8ZbrN0hy9ENpf06YoAl80fPbgDH0NCpQRYRJmMJ1IiUk0+uWPuJjDE5klYVyqyDbE406Fm05Q6P+CfwVIUxQaN24j7zA6fLvNhxz6yaiPaoizLMszb8CuVNJIWowZ+NIP2ZhNLaVUICGo++tGr0VNGBRx2z0X63Oc2z05g0Po+jS3qQsQwrKaBGzEXbGORc9xF7zA0E2ShZXxoQLoc1fCqmKv+XzpOgPA1T6vRS2CqBQJ1vhIzZOJS6tgwgkmKYNQ23mzPbx+k7t7jnsqaqdysINcUtckolyAxwo8xjv3Z1t8t6LPi/8m9p+OI4lA7BQ59P72eFS73F6hyBXufsSEgC1dqPYh1eq2dcqB5ab3m/QppBEzjRYkg1ztKOLyWt8IriVNhWlv58/mOMDYXY2ulk7KfNyaOckJpT56P0vM7JmK5LJUMqouVmK374oZDeWJIdatzy5CyDvUG4q19WEc5/+wgCUImygPmsolXWYInTNdrr+YjV34lolByMzXphuEwg4Q2tMsiE9g3CPyHP/7NBadS03v1OU2k4510aJ0d8Q==';const _IH='7936611a8fcaee3630955d9a589c3e249be5f4ada7583c1a3949b9cc3ede67ab';let _src;

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
