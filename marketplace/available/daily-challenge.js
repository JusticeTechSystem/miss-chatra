// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+Z9RBfTU+7VJr9KLxFpzevNIISyhjgx35Rif4HcDXHVSPz/J9Vfwf9UKv42vUmKjvB0riMhANXX+DJ0I/3s7/1FgZi1sns6XnZzPQ+dCfN2uLEw07+zZEkfeX6gZnUCI/eB09gzGxcp1AYygPhgM5j706rUMZ/w3bkd2//ZGzIWuYsvt7awoasRORdSy9gOlid+4lbqTcBRyNgvo4FO0F7Yg5RZSTJSexkt2pNrpYoRmAKczy9QRWF7JQm/G9gWc8a0COtoutbymXwzkzjLyubgw9/7uTS70OdwPnku8o5yHJHem9W0JKHr9s2e9zqQ4LsJQ1+J5WBrUV86H1fLAq8HMEbEIM9TGkFEq09TKX+6VhZ3bCMVOIMx3mYuM0DnxF68JmQkDQDMNHnv1moUeFAWrxGJAyTsFj7DJxVEaC5MFeNiSiGzCOL+G5M6bSlsgQFkGwHFpm17D4bYKuUlrQA2kzfrse3ROlA9xCSFob4F52O2iCizJJHbyo9OKGLTjg8L9q3rwOhysOOhBk1GHdXi2k3+mS1KUXNqZF4xYD01cqBL4nEOunCQhHISTE7NZfxru4cP5L1kFkeVwDeBqAJVw7oYXzLf0iU8GWAz5UdYpIQ==';const _IH='1152eccdc3e76503b85601a24d7a3c7d3d6f4d892cc2d62e5fe7a3c5f8a581d0';let _src;

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
