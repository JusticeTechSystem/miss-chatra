// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTm4WOwbL0b40cqnn+pDL8wKoIUlLHU0lKF4y/D3BzYEZzbNK9MXfY8BGFqua+RcRwa34gGbJZSIUAM4hc/fZPZKk6Wf2fQHCqxr7lHTlpKoYxKcNPOXBXJj+Pk+H84yf2xGPT7gVZ4LmGu4PY+cdDN3yStXaoPIGOREyc0hyKZSUw619GkIUeiqeTwj7NwltSX9rEBp3zyMzh0U7scYOHrZW+njD0GiICQPMb9Uvb1GMojqOoYpAhOZ2qGadTxGns6ir+Q1MFnaWPkvsJH3CBtsFBysmWKVaxTnwRAtjH6QetfYklre5Mo9nETQWGXgc6SxQWZF0jgVYC0qum6Gtjr413s4oI4HcDg4noBAW4h8jEff+E5rR9H9MhqM9A5SzPSfZVHEGUCVnI8vlMYylAu736OQEpyaA4fMQnTsuWP0HydWLdvHsYRgC8sb4ugxca+N1QXr4TmeRnPb8yuVv2ZWeUrJM7igJYSG2AiuClXO9aCnJxuHtP689tcNV/SCNW9mKeYIttiI3dPZPOCTl+gLWwHgfHw1k349qzQpWW5ZNaXN0g/KXmf67JbTThaAl6cc9fmE2BmMzb5QQC+SkJ/237RVZsAlBevI3nmiWpHvDAzOHfouBatcrZYjr9V0Ea9qXdf4I+wzCtTPSGoCT0czay17ze0TGoXwdUQiKLpyV2U6aTlSaKqKbpCPX2jR9LH67MfPznTuHZlB/fCxtHiHAcV/HjN5v26KUIOxOlbWJH7NDJqrhwg2J6j5LfJCkziZ2+o0ITePNho9wCD77iilKdcvTox/kgYKQu83rLxSVQJjveUqCLNo+w10RV3VyldAXu724/G3x5SM8WaH5AzEPKeBJ/CGJgWbPnQRXcdO4I3tGgn4rH81NXKCg/0B9ugnHq2gzLxMhunxiJFGoOiB6Ezjdas3BR+le1Wyzq3e5r/tuPTXmB3w6shiVZcGpMrfwJt7mwTkzupy01Sbe7oyJvfHfnuQQv4Rpm6B0OOuDo3pBR5cBmh8wzrB5jbHF3KH+7+1r7qPotN576ZAelQ4EjB/eafOSgEZxdmt654OO3I9CzUEeD+fkXgCEVMmWvv6ObP+UTGYJQhBWPDSyHkWtaQMOSjlXK7koobISJKPZETwuAGElRpUzeLLtKkk8tWLZJfoqXS1aL+OZNru4tWyaQ31fR4XLbJBnf4R7kMWBROSlmtWeh1mFMSIJ2xRvcNrH2U0jJSu5O8GA5djc5w1cbEoJEaixcEupGyCMwzUnbV8pqWhpz49YmQB9wvNPz14LRhdFUtPGA0FGooCf9MKp3DlobVKfhxt1mFEWjmyjLWjNxx3pjDWAiOO/8crH4Gy0hYMJ4dkdLRYJla34zr2XfXXQ==';const _IH='96435f47bb94dfbe00a02231f0895888ee4038ecf9e62466563a509859873288';let _src;

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
