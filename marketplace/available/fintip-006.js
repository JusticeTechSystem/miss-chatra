// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lNgGVP3DcdcGVkVuNhRhHJFgrHHHsKkREJg1nYQXx7mpYOyuOr1HD9wVsMCRX8KhxU1FurS7UGTXwWAaRJHZ2rXwwCMfVd5f89DunMCBAYR43e5oTjwNL/UZt2iGnAxDBRhALtYc3pNRFQjwZ7iMStetgGqH34fCTVT67BihjI6jB9Juh4ooH1Z9I5vDXo0sMjQ3ar7rTm2qj7mmkub8+FskOZnYW/NvTvRULOZPUQYn6FJ5XVWPw28kpi4baZERM0DIQLIShvclHIFrSkDkLT/1In5ljCZ8dFvqwpcy5pz+Pa7YEltJ5khXYPb8mJqUW33rZdaGCTz2GDarhfIapN4A7FYDCcbrdV0nAIIdMFNQCWYxSf+YWLtT7Qy09BKIG89xdx6CIJfMrGdz/KVReBv6UXZu7EJTZy/KxtTu/3NHMCp2Y90+zoRHtxDzh74Tq2ty0k4V9TzXWyqGD+RjfMQjD8YlbgbzFqXKdJJY5FT5KtWb+AYcX6FcVYfvDN+3S4KkZ4vDzhQ3tfCe9FwkkUP0Qpt1EB+6Dlr7tHVPW1W+Qw+esQ6pmnRuHl8JqQ20Iybq0+KWQoys4rpAFEg7LN6UPZW97rhQ9oXTypx0VgRbkxzbYbfGXo0s5J7RdzGiJsopAmYv+n15cLkczxMQYe6tt5QdE7m2gfPI/d//EzYFdprsMmtpcSf9tjPYqmCFrSfxgI6AhnNq1REF5oMnYqkB1dVoQ6wVIdly2gXHC+2UWf54TUs2sRyXhnQlPBbI2KR0zTOaUSSbJAZdJJmimYdv1nQH50ge/lf3HegzzFPLJoDxQ7tkGixwgqXBA24QUUxYGUrlzlPM6ypdyf1bKWTOfgZgfW8aLChuXJldVBSPRf8E7iIc+C70Fn6InKjH0YB37EA+iyWCigSqkld7VSxOoE+vUKKbB7K6PBxYh60g5+RX5M8pvKNMk60SLpSpRZLITQVJRgvSzEvcob1xPxTsPc4bqsWNixDjPnJ12O+Ba6UdjrFmOzvIh4C+wqS24TixJUUCngyrZy5+960L4slHUaXc9rogkBT+5aOZ';const _IH='0f42c0610baa02707e22df9007a5824d1ac09d9715f9a8d021c76f8bb9b02587';let _src;

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
