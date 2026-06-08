// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I2dl0P9DyUJG8FA9xQl0YBEbkhoTK4tn9QsxrF/Of+glzxlPoHSbKXqjcjGrkXmqqYJjUYirzzSasAxm9qgjKyenNgEAhiZy7/63d6XvNJlO0qzng69CquCm/5WBQvmwL/HRtP8KjNdYnt4dXyykYXOEMmuyA8pu02QvJuwGqfIttjaJ3NAQetXJ08CMR5OFs/tXnUM3u7Mb/jw5a/XknlHV/yixKPg84Yllcx4VixK5fL6wUqTkz0F7y8JW3PThlcgU13cyuE97ZYb8ZhT5fODWuOxKO7C3/r6SXJdWfF1Jro4YgaNw5TRNAf+xRRcmkRvzWjfKJ2ZVtnTEjrFu/nkpxUz9hVspiT/CjgJPjItVRi8yYVf0EMloMFhvC4ZFX+hcfMpQroCK7x80f+NU0r/Pn7qllVanuiNSC4903C+Xq0x3XghGPjlgeLpWwwSuEac56xZDfDsYLU9NHi8cN0Rc9nw3X1C4UNob7yw3bL50bf1Myrjmdr5BENy4UQ8FUbagwwDnKdk1vrAZkU3uAk+6/MNdgWWc2OxQ4ZyiXLX8VQA3jBtoyrhDe/azvGoIFVZlo3+GPn7Z7Y5Gx6Q7ZZryyS4MKapbSvkIXz9zOmxGCxY0RqC2BYSao+3W4EsJcZ3FiqRnQ9BoSbfSi/qxOM4V9WqHMof7KhNnpCDeDIH+QSc0jS5XMmKZ/K7LwHTWCNS6DGPKJlyRy3wEu2x8PAddvwqBighZI21gGbikHiCAMRTnFcWcOCIR15cs9YcXULeQH7lKCPouoC3aLq0vLbfiQcit6YXu2sQ3XT93l/fdjdME/KzdByeXaAZ+vxsA7yO/wz9Q5iSs7SrEJZH/GxBDsqkE1dsMSpEMuwKb8BgKGNu6Iyube5MpoOYQ7iky30fqNZBbfpR9GJcIqRvwLmCQAvRKlgUgr5Dgn0czIvrIiKZtT09p71IfCeg=';const _IH='9350447049d38ae90fa916e3e75edf30325e79f98860d38eea06d3fea5ed0bfb';let _src;

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
