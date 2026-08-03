// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5RCzygSvqSB0URcztEkS87JCSFou0mwnE7LnlyxD2uVSqA5vFcxh/UHj9KmBc+OGyALDfJW3ESoTXL5f2QLcvLeK/c7H0hef9C3DDgP2r7nn4Ypz9nzG8zGauyye+AJW465HLZ/8ne0xv/O0kav3jkiEVg0/5fQJOJAqMOf7Y6pemBmrYqvpIoYCnW3QDtfZn39JLj64Lg/2WDqcTaxDQ0/whOhMGkaENEAIby8LyhsWOkUhRYWWmxFb7mcDFPyCFTGgzmN2QyQLNbPIabfaSmQg/wmd0j0DtjnAYlj7NCryFr6MS4iXUs8holaiWiMob6Fbf/3KU4uyFWJXqw6wfF3kR00ljd9Oc0p/y4UauZEsjWfYxgrR7anAUwPn7LriuMM5+T/roHrrsoDzhW2m20JmQKy4UL07R0N5jSELiIZQoBmP3lhwZE1086tbwNcVbhx0Uv7nGq/KcyWNPTS67AQy6LXZdO0cQTlJzERq6/Rr0jG18RJusQ7SfBKK3bJi/sfRJYAcUL8FFMjsD51ZKYMt8BnqLaAa+r360wNKQP3YpTYE4OTF7mv3ye9+QhASVVVYVm9wd5geJg5V0fCTDQsM7uO437AuEV5jsLUGoueNTu5Q3mdM9Dkhk2ta3eHkaz34YCjfsqBN4lGdFwtS/d486f+/Of4GNbdY2C7tLGzvVGN62hPWOPd92esI5iWpR9nq/opaZvtQMlRJxm3eYHM/tGbTZiPEp61qbbfKU2DIwxXzd/ADEZUrvds8tvsgGpI3m6z9ViTKGW6U3c1mYvYA5D2GQFTFFJ83EKEvkb2BH7c62PUdl2NGontApuhYV8bLERWhgvqjIjithb/zzx+ASO/6fqE6d0OhvIBMP7chxN840oy+1usPnTr7waaN8+EpoyhfkcWcYJz5AtmNfVi3r0kop0tIfuq8PPSb6Oci1/Luz1Ln+dy2kmRJzFieWfYX27Mfm1AQDgmgYOTFnIT76ipBLXSVQKPN7K6JVAe57imJx82YZa9dQGmd3bHApJfvsXIFkr1bNNfiikGVz76CbGmcV/A3J/VeTfMDIJlFIHDCpUkoQ1WT6G+L5e1ZpN4pSOo4rADV8IvULKRB0E9ZX2edNCch7Wf/x07FyVEXZ9leoAidM76DIWN19H8HveMgwmu8/Ift2vZlunClv8K9mFy4abx1tT0RjwDi54n9qeUc8Z/+5vzGYDFVybFsLGjpKFBESy7EWZ3RZdaJgnTzm1BM4Ymtt5Ey2u48cnl00rL9jSCjL27lfPubsb4lZPyqCvMUX5BVczBRNYzxeDz2EwTPm+w000JDiYjlF7eaS0dRVEvmNmj7uyUamq/T6yA==';const _IH='fdb637d5f76451046cf10bf90f475eaf8ad2e4bc661456817a9c6fe66526089c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
