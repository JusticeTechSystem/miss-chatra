// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fkSWtCD/64uxSQoR7XApjJPm+DMQD4Svd0cDIanDqita9cBnuiY7Rh+BovzTOyY6k2Zkcske8g9mVUWsPA7lRRmvp6s502eX8zVW6lz3ZStC1Ud+sDj0qHmdjENESss4vA7zUS2iuVEZ7pqkSYbmj0Y4K1t4oaK18V/HVMs/FK0pwRVFQDGKE6kUbxw5tX0Q1GJkSYNhJ3/XT/IPEUntxm+URzjYtqvY4tUtYeqjDCzUhelrlgrLjUH9eX8pIcRNLr1tXcRlVqM554Ua+/jTZOoyZrLqK9+h+EYZuM5GyGHSJQgBuVBekR9Qlip6cvUcgElPwD5Tc7Ta8JGteCkTw7qflhxj0EJI+4IQkYrQ58i5m94f0eSVbhg9Y8kXB+jUY5t7+Axi7f+bqR04ZPn5EslfpdQSHg5CVDsivUraqXzm9duw+Wvvzw2UaooWDeBSruYoXKdVNJigb2Bwm7NBB63Eu14qTB7eh6wfaztbrLA0rVwXkX6mRNBKcn9ma/mIi3J5ICR7V35dSnwep+VVw56pF+h3x3e2zAGYXQ9/ixdjqzW8mZT6A+2DPFzJc2uGaqBMbrKFnrE6ufnK0ohg0WLixuEqunS4m0xcO6rFV4TKulmBQF9dXp0zrpRcv42YT9XCFs1suq7hOO3q3WMnUW6tZ4I6l16IjoUuv7rYFZM/eR/E4Wjjf05rhOb/eQxBzP/I0Dlvk+aIbwyTLPHf1wU3zfMOV/y7D7vvWCj4TlFYsI/NFO5PE7X2C5hpQLhfFaQK0kNFIUGT3PLQ1C4EVr5pA6oo4rhUk82V4FJcB7CSsyt4ORwBczWNRU2yH4a9NJ1zVtEgBz1D/M7NLiY2zRNsrABOVOsUTkFPPZgEQ5EA8sSlsjpBshgtN6QEXvWEQjsDrd3JvwZ3GnLI+kEHn1zzXev+fEpxFZ6DpzntHfbifPnrR/zIintMi6Nvl5+22nuc2vffRYK0x7WngZKTR7dPMIH6A6srP0AOQONh62iCCuJkWrRzM0lGRkuK';const _IH='16466f00e62f39b832a6e60af8e392b0b3210d195cd5b72042b1afc3283a2554';let _src;

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
