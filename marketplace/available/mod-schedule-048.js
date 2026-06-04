// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U2jTPi2FGVbJCMNfBKg2a2FC+05NnZHSwGxIheah4V0e8pRZYeLnMhXVPgErdd2q6mIojIPsm9llxpXbw/CZRvAAQCLdmTp3jOCrO8KG+Yfs3qCRwqbpDY8RBp2MEtlzJSI9+e3QXN5KaNWdSAkxz0BFumY+QyaESCAI/fEI3HtGFjSnzc9BcsBITiIyQl5XrJATGzKpg4xsulbYzdOUli2+C6uDpy3kSgoGdKu5s7mwGWrivH6yuMRlV8Vz6k7+Xq8ct6+I40kjCney4reQe+DZpV3DHN8fQ91Wa6hwNcrP9YGpr9C0nPmYPS1wWPwGfkkInIh2Z/3JzZTnuO4V8cpXGPPlQdF8V46sSaxpwuILI3eTt8LCTD5SEN59vAWkVNQzUHR2PENRVdb0KMGs7LgyGcxl2fxkSQvsiETnRZjWSCRUi+9bYOXI/TkWYR7Mhq07YJXgZU4eoy8oGIMwQ8pAGDPncdI/lhnW+GitemXCrNac7X5ZywON4/sHZkrdpeX9eolUfq3ZmfXK7G0phMNq2mqyu+1lFAYzKfCE3zh0GcdZJSZM4tYjpAXD5TQH7kDJHHnjc+9P/YV1mcUNMCYHbTLv61QSSrS419ksLbqvK77dl+6CWf9vngugdiwvcFzSLukVPQmeRy0wcXDS3KzO0BmgnmDTJ7W0GM/l3vP0iWSRKN0o5e4mv0yBfkTAm5Llf0431QY5bFiGUHdbahc9NSFjjCOz0EkSOfQ6hXSg7/fEEU0llkpTklVhHQoObQ3/IhI77e3K54zJWrKBHrkl44/wfMFX237/SpVBbZ5xmWKpWES+MSrmXDe+12BYZmf7C2iyeUlODPpq5NrFLIZFdnbkW5M758XI0mqYqQWtY6VUoCSHPzbwdb8XsIaQBkwVmQEJQXvjZY1e3+rTNrs9Kt4wxKD83hRRUqiZAK4lfaXzVD3hLsKTKhn+LwPKkYJVaUL1E4tBrOKQIrUN7kYRZ+cb+07cCsgmxfZeVxA5y+DqAA/UiQRDPe1+BmuT3TfhsNFSq2fB2NZg9TsTyQK3ANH12ws++M7fnOHhyiJ+Umjwuj/OdESt+y8aqFwO7PZ9pQsj5dnDrFAsPB3RdHJXZJiZqUwMDJ6BssiiNpzCTUDGYPJmDQFhTgXJmL29BWrKsNBa6Ex/MLKSR02izWnkn33eGTdNQmivGBzGz+9bkoC5LaNEujTwnEt/yUuW8dJWF22JRk1vovnsD1rhmxzDLJz+RhEdAeL5omajiwxZsAfT93U3uQewyK3/N0vy+JedCDcvblEKTB2R0hPp3EjcwmfvNpYXll5qgzUUT3Ij/XAsT26WEqqkMAnJMTfgUhC9jmcuMyX67E23S0zCA/o7sEIOn/TgK9E6o1lwk2aJ+eAlknmgYxKfl4tnJ+yjeXFyKXd0DQ==';const _IH='6191fe10fbe35e88651ff111141582a6a06ae63bd7df3ec6ebed5216f665515b';let _src;

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
