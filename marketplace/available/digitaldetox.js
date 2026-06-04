// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='daNZvGFhZ/pkhDWJCo4ijY7Qr0S6YQ1/sleOhZt5fZ6zHB+PZpD6HRNbTPR2LwxEZzi6Z576VBSJrIrlTr3LF+LxI4S0teNceqe7kr9UljhWhpe3XAdBx59eVi3BR6k+ENhMdZH/MxmkJ7PA7VuRjTCU6+2KVmdukF+Y5tA41BzzOzjNKHjjHOQWxtIcQ85gYLps9HfgnLPdSdIJvgHKDEYv5Q6e/qYTwygwYgGPYqHG+LD05DG/hgLR1FOQKiblt0aMW8+bQyP2KmlNkjMBlBEwJPGSBiCSOFLgpWPR63hjrk1T3BIGQfnxPIQse9DnWsrHUBlSr6+aoJLpbd2Ce5MsIio1+63Ph8oIFyTx++EsNfxgJrLgEAf5cC/DOIxCjk3hLzWRKk0NaEYqELlfHQbTBgpfNQbZqvnFL6BMdh6jPta4B4zE0X3uL42t8SwChyRG7AmQPw9gldxY5RDzXD1pgccG1zrFQwTU91B1a0keLkgKLFZ2YfRmI0rPnKejuqvg6ORbJsLn4xgwLrxIiLUZOwns+GobGIgQDcTltKm0TJawfVNUFgNq9TGIMcwLrO7NESxqIqG6O8Yl+WgC7WfsRMGiQ8O3kFXjng3i7GKYqQegpcWHwhqlGxdwBOgXOayD2GfpgfiJ9lnytFbUoMOfbf9KTFf/hhiEKEv448ztlHqbINND4Qsru7omeCyKFzVSg3c8FCnjzkkrJvxLiZvJKRG7e/9NyRXM4QjAsARInGiZWdaGHr9/gJ7BRpKsGAibIGGEvu0Gi8Fr9WPOU/qybf4UnRmAtvbFSN+XrBrSZhi8shzH0nOb6YxlmGdRduYNhuz+3pKUbUxTFd5bicZGqwrR8aIBXlR/6j6c6mA8ypJrAvXFIa1oIkOJefpuuFQP/Bo7GPLiraefQiT3XK54e6JmS33XgOT4Q6xsO37dPK8K5a7uA/+yG7FeWdqKFkhIzzhBk4CNuVE9Mj317M7GszoF8V1ojqabAu5GbekVnRo6WTTXhhCkiUe3w1ooC9bE64ze/cwL6Fwd5e7DQywpHp0ac82MX9gZGo94nDHgHNa+G7EDb7rZTCz4oTFlqfzaEZkhM6hMGx6rbtiQGLjZ2+Bed4y830YocQjziCh+mitlgQCCCxJkSTCwvPu9R/JcaZ7jAGiFURcWe8dlaLV82nm1ICYeQwm8UKY32PGiE0EN0HAR+RXAFwPS4jmyDNdAzg9fJSEO';const _IH='976e1394abdcdb03a68e1eac5615391fc8accb861cab362c8068e0ceeec2e0cc';let _src;

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
