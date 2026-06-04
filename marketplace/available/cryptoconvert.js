// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='knbtDDl0THmCXRM3XRE0y8eFeHNx097dJjpdLsG1ARevM/J+kZ5RDXfs4PO9hWsrM+uUvHQHsBCcywOsH/npH5DQV72sTIsw09OcjdWI32lxqAzjDoRzEJMqMqVFgFV1zHfUdwCyn80WxcDU44hPFte9iy9fdAqrySjGmUSW5cjhrN2x+QWRUzcuhs8mQ/dIr7IcJ6VmQMKOw4nktNSAZfll7QJw0+SyGbPoXjuOaE/dnvAUaiZsYbUfwx2DVygLb2J4AkhWno3/n9Ki61qHZHPUAYodvJ5/HMFP8sDRfHIvWWnvQbW2h2+xpgI5x7ISuHx9tWaJkFRGgHIuREn/AsBbwFpxr78VakuVBrUxCQmakznYa53xnquSD+6572ja2rc14buWVxV/Pvh9IdUHZEqkB7Qg2D5W+HpUUxOYu6XbtGuLzx8YPGmRIT3EcXFZkYM6U8Qvx95/ZWvFpGA4V6SSEt4ELTdlFK20SI1zI2cz+Z4sm+ThWzO63Oe4FIVecz4liO+BPQuhWHoLWlZhH0187A0OEFOpY67vwWznZyN82sXn8+pIjmv43+Crta48g9DFv+pzGhY/1/i/vr2ryGboAi43f2TcZRP7bL4lZIg3HAuCS8lyE7ja2tewRmhls1niWGNlVMnvLCbFxC0ZUwm3DP/ajyB/SlGpXs1aIyHcHG1h5iNHF4dxc9QyElFycdlafuqlqr+7MljoLmJlA7borC61eNdo5l9vDzXgiEReoEmkvcNQ8luSL9e11uhs59AwNfwvNAnQpuhiIfBLJk9zXrzDMNmZnZAAqEfJTp1ZCyxjk6diSdAhZGXBZyLxNwFs7q98USmp3Pb32wu9EGC6SqvqHnYvsfijh1gkgTid6Lm0PcNZkkXEkj6WEnZet7qgQ9UFCofsQnzMqSjvBR+VHWPil88vcFTG7tRgrsdqFhXeB9WxE1Qq0MG3pLdoC4wAC/UGnLJbBiHqttt9Dkh9pUmEdiP8VQRFThHOtEWpZ5lilP/o06fVpAELwKVmqBi68bswvTYpTTMwoOB+IW+kcl1fpqWGlf9LrhKLGphnCueCgpGXoZqN0G8lRF3nO6D4oY6JHe/Xg4iIL27qOSvfwoK3maK/VQ85ir9mjLcc+MEcHkgCDG1p0OS1t2IXhughaVwl1JVGlofSEecpJM5gIKJIHOI5G4BUxwZUydb5EhNyrQMFYiihuGKibJt3Z1sVsX2kXzN0hQ==';const _IH='1f346d820c7e225be5bb1cb5976dc4005a996e9429b29b37070f2f4308a8bed2';let _src;

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
