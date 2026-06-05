// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c4FzYd7AbBVaNmA+qY8sOYIKBWDF1DYSWzaTxIGMm3/cB3Rm9aL7AXB8aDCJIkBmj9TItTw3mk9h4Pbrq22M5rpcxEjTS/oAL8LoDZfVOICO3nWjtvKn6HK98OFZETI9zwquGYoe096u0GKfPjDCsJu4NuCa7C93sgcmL7LLeXbAlmvI0Jwj1zEbUiIw4ekRlkvoeOTBh/eXnO6nQl+vmK4zOsKPAO92Hynp9yaY7yXlHba+i9vp9/c8VBQwHmfpqzX4jb6nNqFvh5+UrmcZ0t8a7F0c42yS6pbQHzknR/OHaNaUCLKr/GXuPYG5voqavvnbLI+LndPZYHx+nVYj3uE6m4+y4+8RpDr+k0Dtw04YJ0u8K3vNeY2N+Kl+Y8pnpoeqtn7aMbkQU9dcVuOS0BQOYIepsnDPZi6Vj9iH3CGE9fQHuNzo0mZ+ONOE97uiNS31j6JLgLBwzEPIOtGC58OrpmHWE8IFuszLrOKzuBdl5VUEAa8tNXkd5WvFNZHjBM/VnEue1E6rxCHrKCN3smjSkRFgEaXhzq9aQsoPJvD6cqGTatgMCz9FCx9exW8+Zym/G/KdNYrhSa6M3ZL2YlXage5639Gzaj22f/C4G79g0TnOr2EFhsqj8K2v59YEm0iTsHOA1gGuCWGVIe5kcmA0/LhOxnWk70AqxVXVVIPQrvTU+eJrG42qLnL5SNIJKDjk88EBdpiFz4+L3oWf9BNOLSJBGKWMs1g4B9nIKN/ucAI40bI2TDOsue+EiiSZH2OSj7BfSyFK1GLDl0GNu6+N+oyP1c/CsyYzVBf1GaQ/TvJtJJeUwu7mNr78oya2V9Rwe97r1279OQerN9hEFo9JnHtWWrFQ3MzF53wu2BFD8dVaWgwDkQFi4XOpquDMkVlBbSYsn/SD9/LKxRKid9Dp2iqrpoGGDaV541cH6UGOZHIvmGKqK5nxFOrbI8lIw5YI68DnGBooQHRCwMslLuCL43zWtYRmtKarqJ8jfb/e3uy6/IEynlAjGvXHG3vWXvTe56TWAL+TcvNpMNRKsAkphgV0yqtaAKXp9YIBQG4n8d48MwXMbyqarmAVtYKcaoO8NiC8ADj+1lfwFUcJQnJ2O5baIzpjd/Bk5NjeJhroV9ZqwerDwYzT2mOqGL3S0hxuJ1dglSPs2MWh7Y+Nv+u2j/7dsvg554FDW8ruMz25kAAOKgdBh8zJ0wbDrC+/zPL/jTyGrTashP75dCrd4v4bzG6K2+X1gl0f8LoeBwqw7lKmX8ZFHwkR/N0L1GiwlDrklLYMcDpWTk6Bi89s1YWJq+We90xeA426Nh1w5GcLyVQSvL+rB2JWNoYaNoVMtg2J/nBsXH9ut8NBh++1w3iF0/0CBibniW6Wu4w69VxGYRbFBXmZVQ==';const _IH='9e2ed0c334b9e075a3ac317c8fbd06905411bd129bdc43dbb42826785d148af3';let _src;

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
