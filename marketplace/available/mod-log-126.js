// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wjMy0NOoR5RSxfjDuDbgRiCe2L2tYrghsqPqwzwvt5YAX4gEH+aUduwSd2MEJ0TMRU88G8pCX/tO7UQVIkkeY72/ezDeD/NMqPSerQHqIYF46FIlBXh9lzyv6r5LByUHcsdp7dYvXFzoSipkxPPTvelfc4YlrkGncfuooKQUGnU/KYaKJI+uLTLsV64jp4RhaXJX8yt5bFQyCyq1JgSI1N3VMBWFgEbDzlnfC++Ec+LHuhGUiUy5GLRMQg4Dyln0aQlDyIsgEGV9gOxu4vAf+TRPpXvAdyOoeNhL2ndoNelyVmxWzsOY4lIJwV2kuswxquUdrzAreXmBH+v96dydafdZTMc7Z6stKSfwONTkxaRcXJTMCQIsCKrVcRawIDzWu9CIZmEBJyIFe/Wnf5uvXafFSTvHWm+knjbRnlxbLtxMhA2pjr1lE0oNRjqJRmRBoQjDzB5TskiX47k9eb4DY4kKqeUMla+Uj4CCOIqNCx0xLIc1k0vEtFxtEfxpNaDsJh9shJ0NAO8tL2Dxm2et8wGFSQT4vEZv1nmtzZfOQ/wJwmxWkSByc9/ZZcyta1g1URkqMR6RIKXScT1qIJMsqYB2ozBwjpuRi5OYvLv6jxlf1bbVqqXYNkGwh9vhSyBZkEUztVk5FSJh55stOn+Wj+cDsdJpZF03Ft0Dr9OpUpIdEmY72mniBMdev2n9aOkpuT9D2Pzkplx7MiEAO93DmSMEK/N9eRqPMbmK0dg25xnPs5ImEKvOSYav2kn5M+xB/o+mhVosVxAH9pWEDJCSZAl90XTGE75xOK97urFUXO47yb+McjDeX6IMgdWdSrAVKSrUQXilCTeHszKT5jsjuOzQkTrUlrLRuYYNZcRC/Jl5yk88njk+NDFO+vxlLVJZf4yeZk1WZ9nf0i8tZ/OGOEhY+8AI8BqSAjDtwu394lMYPHl3Yso6xAXrX/HDeuWW6z7WZlQmXMT9kb/BpVBJ3W/b9WENTT2zEkIFByblGiJ/raW15JgkkuUvTfmUe1JxJrwsLjUglZdX8da8NAauVx3EDtjZFown43LFiTCrRcwc1ccXVWzrz5z0HT1B0fqaSbziZ9Wt/pOOQFU8U6mU+ESPnx9Mbkncf59lWK0FeBpZNml4xBsZvjSZ2FUDLqKtC2UcQB/eD8shGEZCe+kdKTj5FdPj9DZqH6duKkKJOYtd+8//4a4RJjiWLfjDRO5x0tFP3Kray5flW6kAk/pIygjpbOGMhTD6h1T0a7xP+hDBcgfJdDyNRRqCMCy2UQ2m3lHF3vpbngNC5HoDvcG/JsJ6Z2e2tjWrJ4nufp/KxreTz9TWYiQr6WHfAzMY0DULrkCbVYSxEBN6dQ==';const _IH='db56846bd56045724aabb3c35fe76e75aedd18cef9373d4f782e4dd9b50b56d1';let _src;

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
