// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pLOuN9arABFZSlVD3kdIBcu5DaAwxt7b+J1Ytd0MBzhks6fD1VlY/3YjBrKVGsaqyOCEJ8zMg+UoB4FO6OprxEPMMhUssfTJvPWpFUvtg7XtnoKGh9u2s+pxLAm4UEF/gbgvIkBKAk8lPSxQXlB7iJMzLVbY63w5sHWRfdoQ72VjN/hn32w/Sld9MdQTrN3FKrc0Ul5ef93+rkqfPakerLaIrBz66AfNqVpzz4MecujXPCwAd4cKrLa1u1JITh5CDDqXxeX6EEFVKr5NT+kCmYFO/J8UnwQBE9t4HORDKdptEgL7iJg6EyyVCR9nES1V3pDLPCdX8I7H5qarUi4DFXx72/Zo3MR3zu9/vqF7F2l6rwdteYGaw/jJ/5FHATrSkT4Sm0BN6vn8QAfg6wuksLXLarKwBZSi1S7aq4uuQ4XLyCPXSRdhjpqpVVQsQqfANopddlqGmC5tXXlwQYmQ02S4SUuwKC0J/dVTWzZWVr6yvXsx43LN45ntk4t/7txd29ZDeh4P7P2kMYxmL8Jrypr4TQ0ukTNMhn+e7gXEVGMfhunqbFgM2HU1eu3WxjFXxpYgJlON38wrE2jknT9wRszN/2erB95v9FUGVP4Klw839pUmd6R+1GNHV6lpD2OxEZNeUfTb8tatmLLlwzFtEK3HlEiONXQvNaH8bHU9dLlucFvYgkoLw2BQQbC4bge9sBE6Lji75Osmkb/7BUw2STaE9Fg=';const _IH='fa85769733c04ed5208de88e446cfbf18cc74fe569f0c7ea18fde4cdc3a1c59c';let _src;

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
