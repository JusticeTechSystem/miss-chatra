// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5hKv0ZIBix5rJjBmK1r09NKMPOssJLDrmNkSNttxWKZGHuYNW+Et3L5Lq8IvOXx8K/OCQiYITDYfHOgrdKcfT6NuqS4XMMTd9nTqnsh+zagkx1C9LcX/OeK6LXNklvXoJ+DRiNphr1k/coyN+JR2JZr0bWraQSp+bj/ev0PHfBC8TqgCL50ewHO9Ib1t3DAoM21xhX+PXtYoBpARxD7zMRe9fOATDzV8HGijxSO50aWKC11aXdV5Okpalteb4AT3VZbHVdmfOgCV0QLfsWybJ7/gsJe/LRcnBNgrLnYlFYev57zl1QwcS78QkZJzKHLMcwvEKqVGQyk9dYlHeRr/fb+GR2oZ555dUsLF61iwFCHM4DSK3QEPCy0x5EX6n2yz06A74p2EvvpIT8rDbffzzXllLU/9y2nEZYEBu/i1bSyqALEXIInOzLCQ6XZ/lVeWCxf1Jbqb0aAqMYC/bjVqWRhVZ0zlFpWcSLQt+wnSWMkFv9v+YI3RnJXiXOA+sx8fzBPuuVWhh/enjPtD9eyYEFBtPk+CNQ50gP3NkHLiqolWqixGzfewWJFzREkTFSQYHFfOmiLrQEE7EOShY7fSQvS+eWufz7tL1s05KBNm7kfBuE29dPaQH6aZgvGvpQDsefj5eLr4V982M88gRmWM9f0q/CNHHbTnKx0mQbugT/m+noIkZXZ1I3JUKF+UwPkq3FBaNQk0IxUTrX66o4LwRsHnz4qG5XDRydcTJajsn+kpbQAo3mBFXVim2z9gif0ddwIlHQX9wCzJIpQ4UNtVRvvZ7UVTRkSjinhgLofdeVBSdNo3Z0ncqkX/OEXRXZVC6XpSdtlJXpJcUcqHoj/6IP5yDpqiXoYuXJOa/1cOui2tuNE7e+vaFWyW0hQDPjiZnwqYEWq55XC7AukjscNzo3GVC7mNMIS17gdaLZWlfjPQx7GmYshmas6HwnoJJfBkEo9sALaehiuR3nWedAbCFhtf7T5TDw5U/zB5VHOeRz9b1njPko3T1O6OAnud2raocU=';const _IH='4e8c954919a41a5affda9aeba3bbaeac12daef6b3b6e1006f13b99fad9f95ee7';let _src;

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
