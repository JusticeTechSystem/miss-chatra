// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='47QgdT1qlIGjW+pe3e+4cXbrbJvuvOs09WkgBVhg4TdrGXJmdXqcqi9cDZedA1liFfgKzHjPzAPqUNtqhLNLSV5WlY1I7UOcH9/IPIKX203o8LgGJihUQegrLzxWI13w+m5fSL49Oz2sz8MQ7RRfMeWXr6sH1mL/cUXBbU9SxdjrYije3PXO0KYeH6NmYs/clYwieWq8L7W/88FxEF9HirN3jmyYZYdcMpXL5xr+4/2vFt42BN96YniEfpkWMw6zIZatAymgJyZF1+naYLWpW73Fnu7qTW4oEgXrMTW5B1HLoEHeQmaUZILOTeuXmEriSoN85RWXDOgWFjKcZhwm0vs3mZ4+N7rReq0REWvTKkRNkT05t8r506WN6kM3tn8Re+T5iEKUuWqEanjyF5aHoqIotNaAcv+t6mBYnSZqh5O/7iFwvzW0GRSXEzdat7ODvQiDyqa/nIMGAKrvbkoBCc4yJX36WVPEeZEW2Y7NkV9rLh9S1wNYbz4fYRX84rNxgmMpsd88G8JKuKOxSeQUFMEMCh5rqPszM5nkzgoPyQH/rLm2e4bhfBsSA0RuLn6AJOkAkW2j5fMEmdp/wuGv17qrXAwRz8k6JYXbwhWbNS00W6ptRzlbi05NWBpXcW8iIMqJhkJ0CYVUhW/0UqdHIcXSL/fuR9eMQl8JMCwbFP0JrOQKlzBwTdrwTFiQ8hY2HYs1GXjv+qGjA57ZbJN2/oysLMcxjzBiDXE1AyWRqYRjWKuVzEc=';const _IH='2c34927f39089465339680abf8a35a0b069c7bc2f19b3be30131e10347a42fea';let _src;

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
