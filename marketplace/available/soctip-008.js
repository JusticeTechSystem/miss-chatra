// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tdt1YBg9xV5pu9d0862zLNAk9gYNmmWmGsjIJmhmxA7NCHupDHZHQYNGMOrDE3ZFg514AZzvourU1XX23Q+YHigzRVMyZn7LQpRwE0jHrRmtv+ZqMcbLxJmzKejyPd9FYrva3qW3IyY9CA1S8BV3B4TJZdtck/6RsfqUZSKYeh+e8m/IDI3xajIF8Zl7A2O/URJw4eeCONQYaXQXTUf/zF8MTRQvkzdpCD3PFDIgy5cnJBT2e2Pd7nJIXJD0CruQ6+uhvphQGtdoYqxiwvQzkIa8Ffz0EYPTfZ5uaZV9DMnxr7gjnPoQQYdGkyO1y0M1tZKPA7BG/E27lm+EqF/izy9rOLRRc+JduDNWVpQ/C1Hhhxdbb59nE2ZK407NZit1NArg91Mn6WZx3EYS60DJ6wtmT2uD+5+Plbs9WiyZZpyMn5Vvk8iKbH9cAqypkmz73cOxLH1lC39dgQA8rggPSDfJPAUilcGDt1lrivwcOO3+jktNzKxAtcmrN3f9AxIYnj3KCxqpLTOpM69x41exJw5iqMaKVehdrL5any7gksYlcFjzK0P1BWaHR1m9YYV0787tMIwpMCd2CWdgAMfrP1FVUkTGNDmwZOSDZgPjmHcFtutjmBWduQS73ByvNXvFSAMcjTGNUKeZQzZP17WDtY1icn8amM1/06stevM+O6NAz/vs9CB+0BgvHhGiEDhsd7djmv0YxzC110BIAf6dkjGHxdiOS6W4nLLM0HTBNWi0dYysM0YHbbtfEen4kMSGpy4YrfcYdgUIrsqYfXJiZLV7KNR5NegqEAtkzTexVZYS7GkYfBuehDoJ2dzLBIugrLe8pJaDNKS/ZzycwJwBWeDMyf6IVAhkT6SYzdZew4MUqne6liP2aHC46gT4g6KnzrMkf5qQsUrLJdDhD0MLNiJye5GDMfez/YQGyEzsaB46OWkrK7QyF8QWZ0VROwjzEkgxDVBGB7kEItrrLYiiGWPc6Aa7qQB0ZOy1EJBaf7ymEuDGxUiFP2DK0sq/8zIplYBPwQyPKnKbWGsRHrSZAD+WMnjXf96f4rABxEQMMLfbUVwZTiOL4xytuJalmmriyczEN+DdrFoBlBE=';const _IH='1a4a38b00bd86aa9ebd62e524f324daee32b7f0f5b59b1b88635c5441e0f6641';let _src;

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
