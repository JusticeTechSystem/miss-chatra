// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HZMl5q3nGC12N5hweJ0qXgtEvsWYwQgq0+JnXh7G0X076ZVYXXuSZu8bNgoanClCqrQ2Zw4nIMSb6ERSIIatI2dfQSp5Cw5NxWJ8P3cHm0WDWvk9Tdc7nKuGfY19m1U40eB3vNb7lsBmzmBTJgwvpcj8ZtYJFzx0LiquT7Unl1nWlXHzpC73gZ75bX0bzH71xCuO11hHQWT0G1bXOHZUWixIF82AhaHCWXTfkWMboK4EQz7KylQ/v5u+RpgWd3XQdTVUR5lmbXjsKpKno0anBeN6ZyiTUWYeL+aTG/pWhi7CO8O9KWTzNxOfvnT+AV9VadfCqrieIkFP+9EPQQYSlOnIKScBXQRtjlIFnGLnoP7Aq8LTxocoXGF51D3X2jddPgH2C8s8h/qTpmCCnOSOl3bcS9uQ49kbtcda2+bUbFVtf3NJ0sOJhGOZ88dhY4Z6j/GxuJYKDjEjZaAyLdP4UymIIjdjtiC8HCWHbcRAxHmHnYJC9r03YifqDjW5/LqoUg2Pud3ZmNB6r1Fda9sT6HMK/9mezCbxpMi5fxcRfXZh2VlOOB6/wi4PVKuxPrXKv2k9fls8vEasnyfD1wqBnePl7zmh6KjalF7J1xBGlsHV2zHtnD5A6Cj0AaGuursztpAl1XNHg2Ar6kXLwpTgThFzPzGXA+UFri2QXRhAAhoUjuggEiD5n7qSNq2B4VwrHH0fKiYQ69WFMrB8AyzjQMjuqjgQKV8HyoCNpt38rQ==';const _IH='5ec5073472d5e971383123cfc7af109253388f4c22c61abca4f17a9d1e39875f';let _src;

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
