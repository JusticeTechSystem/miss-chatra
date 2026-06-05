// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Euq+PwwizIHpxp+D4PbEwXxXkPuEZwoqXd8ro2eqi6qSVi3zPpJKltfb8drmO7UuCU5eylg8tMm6MN676aiYyKtlHiJKSO/Yrjv7Ezf5f7hDx/QdvGIwKp0QdMOXFtnPcPQ3R+rNytENiMurKyu//xSIMjUSo/AJZ5t70UoteWhxFR7QKGwf4JNp3Csxrl9llEPLxWFC7LTlxnDs+gOtcI8mw5klB9ozF7Tn/GJ9+G/QSr1v+5KjfSsqn/x7Ufwk87sSb1Mo16ZQdyBYxNENV8kvtP7vbdabCCExc2gfT7kNBws7XEb+g3ZEVd50F5H1kqWyZzshUFcdD8zPqnb6oHy8OjjtH7t1z33jWlAtoBOIYeYAeh/IFMNNYoJokJUEXlyG7hVBq+7SRYvpTl8yPpv8LnJ8hmRsMObL17FnFMP4jX5vX0LffSmz/u6e6CYpni0y+SsbbmM3YjsXMZcjrHJffKy+pRq77CNTRgn+cl2SRDsoAKbfVof6FqS9XBhYVO3k+DwCmqArAeN/D9KxPzS9u49gxEWRiUC55ex/mGCifvY2qsj+fTbE1Wxt2AbEKKUm3U1mmEQHFuCa1pqlzrWlnvAf60fkzpxiTLW1a3A+GOU/1+S+QOcYrRSX+zLOPACVD7OUQWnqG1XdOhm2/1ktXvCi7ATS4PwrstrIu70AYP5Sp3WQxXtdEoGzvHAGcxdEEktvccWyc4Vr+ymbzRd/biG6KdtLK/OS0RJgBRC4iWs1q3P+GH/RRJyiDRZerB2s0G+lEtPCgbSv6uFNBuzjpIC1JEdBEHmO32LhjqQvUWrwoPyQ+rRcrrE3IVPuM8S06hsXyXt6S2rIMmlyujtxf9oRYJWtQG2Q/66WTbRJAbU2m5KHcJZiJ1bqjb59fqq+u/OF//6+Ppt0c5r7nePDzIYLhHEnuNPRVPBFYnUBdbayoZNpUVKuTLGZvfNCWVmrssMfGd/k14NOtphjQwK4PxO3baSTDk3R3LPhzTZrqLhrIfukKhhKd2InSi6nWZG5el1EJYEPo8Nz17l+Eb/ADCv5r2SZpZUMjzpQ4d7uu91pQy2fMNbBwyFpTO5iBzqpdua6SznCwoQpKQZAe6jnN13X3uXPUcjZ4XV8SkuO99AybjZvt/Tbg+bVzekQP2Pbr+/F4ka0u+i/3AjlzI0L7v4LpvvYGf6yJpEIufQ4MImNRVhrcGSYxKWKPxW5skGtOGJ6HkQoCOKpO1eyGvOIltLQX9Px20fmyw+EWByKAskY0dfvqBC51HZYiqZ49Q2+4JyYQJFMYk9n7clgYPRu9eg/rtndnAPvWKkcQuZJMFEpQ5oXbe4BYOgc8F7rE5+8ZBWS2TrFK+367HJt5rJ3AVyPVqYPuwQGxT8hXM6MIQqjx/NSLg==';const _IH='18a3d048ca5ea96c846e5be188a341dc38e77026b83760dedbc04c66dd7a66f0';let _src;

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
