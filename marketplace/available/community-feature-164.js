// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='udGY359XOHyrIVgCWZLhgqNnInIpZw6EDwOWfdjjjaygHsDoDEgKh0H6MpkLmzcQFWhPfEG7rTqy7c20odEne+ttfZkD6ZdtZpPyoL3LOmLo6fC4tDe9IFANjAUp2hT55wCRcqV4xoCNZUamuT5ATU3Llqi9e7IyVtQXEEr4AXYLP8p+bwxaviIN3T3wi8Q/ozjr18Ep/wC1gaDtF1Snk5Ribtf1RClP2aJ+FAlPi5R4rLl11+ZQr7NlsBWUbay+ijiEA3YulmBzgo3MNvhS6d57mt24wA5AsbOHT60/UAkUu3be/Yy3gFGgIMinrwc3wiZyHroAQwOh3iDgXQIMoUSyjD2oo4QA5GvFiB4tMzUE3SzCT/LG2UlL4wZqMxyRGgvfhRlRWABbqVYsJyx6enhLjl5CChyooBe6wB7FQU5e1lkmeqCZydDywqKwwZDBtwYAa1dFBkPNEZ8hBxR0zdO5MPeh/z0dDlcRkrGvVlL2lqzEG5n+4qVAE0gn6naEFfj/pa2TSlKvIr/YZfrgU4XuMkkn41D1xpdD7fvHmZHRkccyCU+JkXKKuMlQxhpL8Kbce6LDHFFQTAmkFoGC6hmhkjNlQ7PDOqYWcS/8JPr+JQMOQGqWpriyl+LX7IxeED0ZZg0rUlbZONJK4EfYkZhaiSQcOFbuk5DCE/zfZQIsKo1byNbgFWLpiDyGAiGfgDR21gQlRh1QNxUpx6iiLuNnU6CYmMcYnq8SMbaZSettJBUS9o0=';const _IH='eddbcfdccaab2ce56c9e9345c7de8fcc227384bafaf9d53593da8ca1b42a3207';let _src;

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
