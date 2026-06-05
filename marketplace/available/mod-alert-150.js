// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ubPcofRJ6sNIw2ZK3vOqFjV816yLsfLb/Q1BKYsrNEjVRy6L8TAQ+3Ee7CZmZ+dqhT7QfVEajau3uISutVGH4WR6Sq2Gn1rFIz1fyo0FYXSh0z5hAm8f/vQwcXHCGLL/86dwuy+YPGlRPVia02dxoduw1/8O/ekDja+s86e9JqqT/NI/PAWfGJEi0vJ01ijTtEaIWWlm+pGZlrbk8jxzudqDtXVIK9KGjJEX3NlToFuOKY8SywQX6crG4l5IXwxxwZMIdOSPq6xTy9v84OYJcRnMb47X8Kdt5AY3/BzJ6V3a6KtOI1HYgrcN8RT9pBsgTk2/iNIXe7rdiQE9B7HRFop8HtEME4t8jh4AyfOp3RYQS4VP8XmpWxVw1FYwl6wZkwTcy8k121tZU66nesR4cyitj7R+6lxGogobcHgiJXiiuiEM3K0OMhFIZ4qoqLLRMyeatkkrUDIyH945Hi4KFJI7LibHdzxsP/INf1TqQQIKDF6ND8uJu9lz5HPcYOGGyffWOS4Rs7pa9XjIOnM9Bx//9TCk+Z6nHjLU+TDyXTJRL5GTI0uO4yqrnQH/uQlXuHSRt0/yuyUNUpr3jFqYuIELAskUZOjQ+MTxWbLA7TVBmK9gCOSSM9Ue1VOT1IOPIOa5P1n86+JZtRJoEYgGWU3ZGLcZUdYygGEUSmCZIDKZznJCX4QBO5RfCL+sxAOayU0yakZZwYilwZ6Ol9H+uFlaBVYPmRzkOIsBHcBJcNY7y3LgsIndggrZnTnTk7bwX2kf6a89PQwM8ps1jmKTKxxgWV9WepFv5Z6nCpG2shIx1vDSztPNhWNbJlKQTNAKUyb64ZOcdXXcIcJ4pp1z1Jd8afQwNtIP+ctymwlYz7BvMcGZJ9IbbUp47LNGZCFYdX51FL+VjPySG4ZAElZfGwFyYHQRVfQXEvFb43qqrFVkZnuK0eTk8mt4F6e02nPiKWUhie4IpJKDG4+1banGw0yUjQR6zR3uMNS7Zd/zvd5kQG4OG38tEzUdrKh+xCrt6zYagRlKbi35hqSNPhJvWz45Bz7QYwh+c6rDITeG828MB78M9/DDQt3OpDDqELO6n6pDdwN90NN2BTafXLet2YQDc6HoA9bZ3EJYFBv5o5RaBFXINnLSIjUgkZY+1sprVKw33IELl7uokY9iKCw0ZH7FQnoZP+Bn3KuPJF+uYiCKi5Eq/aYh3gLR5WtqKQ4HyyyCFUv8QMFjDkNLRxeGXAlvS/8nLMlDcRbFU8F9naI7pLmtV8/NvOxC08Unp4mX8bT2zP7BxVD7mGyf2IKhe2sENtNwvSXr2FjtTKN44hNgoiSnYvgPLnWR1CYxizjnQTwWGa866RVUINSdxnwjCTurcw5pdy7VNSPhCbV0';const _IH='db04d6df699639ff976b22747678556aff26bf5db77c64ca3570b8c0ff9ee16a';let _src;

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
