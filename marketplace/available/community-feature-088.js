// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zP4W4gIV1JtFZaYvUiD5efzoMV7VUnjWB3/y+lMSB8iXxzb9CRMv3Im8dVxY0Qx3BaNayK/LPp7dfx4IJ3Y9T7W7ifUbNMvwop3QcwwaCcU6/IhsV7nEODP9R75AVBfaPvxHLQCrUZIZaLfkJucpp1HTNKAwTHtRmo/0ZbueoevVAi1L/VZh99L/La1BL6X2SiEuZWI8+8asKQnsKpbjSZSv63U1QPZBKX6kvGDEH+sdQ57XIUzZAAWH3zcPH2FZveNxKAlj/xVw5fi2J+ZO8jMmcJ49zNWFRZJQHhUfkLgPyvc0ymsp0XotTHJK91YhkCJ1bfJyzgm75xy9RnTCJf7WzuOEwUpi89ZGWxsHs8ZrvXjg7xkCngFi4bS57Gadt/GfhIaar0u9jKwbd4VcdYzPlbmgjnSmAzbCEBbiB6wUgw6JxzCmEmzlVSnx7uBNH0dzEWboVoe5/CVOEo3xw3qqUNDhnYkJseE84TEc2eXD5axHdAO6l7ZmBomxgdfhZFobbgBHJnIGAUs0CbaXrm7gmh+0xxA/jMYNVc1vJqFu4haTpaIFmyXVW7Aa+FzExXdGIs4l+E032ZbKf+JpYlADrTvSQ5z5Aih0kCGuBmXtnZ22YnN0RDeLuXmCYqlJRQ3S+UOXlBmSwkVA6686FvCNklBG2IkVBIqTvTJPnA/WkVJ3G2ZnbSCzYjto11w3AuJuf5N1dTxEEFLvt47e9YoDQG5EE2gJ8Q==';const _IH='61efb50199e220c0bc1b9460c7049c9f2b783017f68c5b094f94d7c9d0c5e90e';let _src;

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
