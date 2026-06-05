// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fQtNBz9u+NNgDLVzG0mUVAJwoged8NO9Bx5OfKC0KrxwX8l2wlKTF2KQEbJ3o/e5GbMtbY9XMdX1c0NuCYPn5GTzHXfcrJDb9Gy7MGSmbOcuMw7ShVunWPLc9UlSz21SXqw7+65KCjQ1pfzDCLr3HHCoekXkcLzLwTloq3AVDocorVf+5P/4RM/AxUo3vQYccn6h8yMpcM879yofmL57w2PzDundwEiOM3caP0EBYjPZRrLjcvSWYKb+RcSA2zDO6f0C7bxjOTbHFWmhO4QM9lhhrFO3WaqlNFRfwFcdqmifCwjQ95gsGZL1F0kEBAfrpB/1POOgdej1Jp5ge52TqBukDN+tqfWEDKPTZ5+0i4kpIj+lcIsm/nbCEQwr8uY5WtISimU8rEgLwFnbDakIWHE1g0dCDezlf9aZ4hcNHA0TQirJb4Dujw2Maw6IIlhDlsFMH69IXyjKhvIMEGbmXeu7xaZ4MQ20kGL+aiJ8W72XqRS8hX3ope9rm8gOdsp40Bc/wZrcPj9d6rKYV0CtxeaIxU7IsS49/HfbJj6QuZCN+8DJbPy2zlSNaXmnE7nKXso403KT8UVsPL3io/rAAdI6KI2cDNF9XjOWP/z9+i9fxJSe2WOUIvAqAJUJ1bJcvUnjiWKg1dv60egP/Nas8ocXFaWLZP/09I2a62vGSwMS37UD8O/125Yry+1CsuYFVwLKE03kyr678ijnatA+YEnse2gBUjj/ldDZBJQ528M90fHrnNaJgtePbuYB013H1l6V+DUsh4mYYHxYYzaLEmlSikD8kAGZxl4/1yTFN1DQ7NR4QIZfwPbA6B8R1A9VxZHbcX5jseIKi5t//wJHW/lcgdafqaLpHtaEl0bnUtcun/sIa61YB+3tMuYSWDOhJ5o278tjXZZJKh1CejuaAN9vo14jhGBrnqpOhJ6NgYR9ViVh09Z/Hg==';const _IH='0d7dcab77384c18a399e4755178f7b8d09b24d18c4a6d14542e810db1219d951';let _src;

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
