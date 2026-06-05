// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9CB61DrMFcHrXUmTtjX6qMFzq9Yha6odQ4z4Kh2gB+ykDiWsrxH8rMWHEX4CzAtTXZ4CamihMrOkS5LjIQTznUoo8AFlc6CZiILtrIIDHUf0iM+eJlxaDg1NbFLbBfEvtDGIgzCtarj64i1082A0nZqYU0qLK8E+G4jU0eh2RMq+IIaiP3n3L/VhJ29+lTEW0bCDcWcvlFgjnqeBnmgPUW62K3wACTi6okXprZDYXIgp/6zS/rZOSX4mCyBRHZZkZ0H+Fnby5iur25lshLLp0QC7BU40CBtOQqvC7KOV+JmH3bHTVsJdTwmLrEYQcvQc0slgLbwD3qb25QeZdxrPk0u0zGqI8qJD8cMOyiPN5/gPbTpc/ljqbzrkAS+WySa+wfhHDGBYfVH+7KOvWR3gRpoPhRmN2/wuVMAF5yfnBQVW8HtX1lzC0kgj4d9oSsvZVj/4YiAZVFs9poPbIQSKP2DKmlMGFpKAOYLgcQnocQSPLZw2QF4Q8Z1IiHW1rAVjqNXs3IMwpGjNJk43UB5k6cTPFf3/ppWDaQkrIp4DpObI0FsZcWEzbbpYyN9PXzpIQLq67xNdCPO1qzL8kVXFpe3GOGQbzdeHHsH8i+gUsFyf6MGAbGIK+qI18ToMwr7wrGtG+neR7bPY8mm5crBK9MQ6QaiAP3zH2heqMX/RJz7kMnC7kJX0uK2yEvmtDBEe/lIMeIJbBP1cWialD8CMQAXlrKZ/c/iUZ0NX5xHI9quJG6M79JnUCfK5HioxA+agoRqMCgQ5tnccS+mBJoeZMRDSHkgvlZEFrhWv8vivx11c3vs2ZNtlBJ+Dm6Qnf+8tg1VaZbdZHJRCHcNkJ4Mo0v2WXk+MOGobD/os1k7UvDsvm5hJ8tw8CtN+p/s63Tbo1YuUrr9oMZC5hgliphvO1P3w7FKCLPZAZKazxgN5UcJYt4p9EPjkdGBG88i+dDH8pFlJDqxeUKzisOgeD0QPxp0sGmZRpRSQcwiuPStqgVj+Rt1+9DK3uPl1ZDpqaJAEaPpXGKoDAUWZODW/WBgzt1X9BckCjCOtfBt4IEpMFiO2j5iIMX5FOo6/ycL22J6aBZ28tuhVADB+u6xhsgufRaFJDHCjx8+2zz32lz/nNICxXsHFoshV5huiHaYjRF0GkD5BxwTDyIklud7jn0bG4kWGyPZRl4TispRt/A18VOjgCH6uTVx+IPH+LtwPTZgmzRIjmopfHvBQ+gZeR4IrSPDJrVQYO6T91Iv0Y9V3kaff68L+yDy7GVkIyrZaZJlv6eWVb/aMRQXgW2tBUfQTfyu7qQljsJPcFqMcUtAoNLVOpUoW7E63GN8WQVEOLsqBwA+G+F4V3LpoOG6CIBx7s+Sa3A001oj1cbVGQnE2sVLiGumM7wMZ+g==';const _IH='fc5d30a6e5135fbaa05dcb3848925b784680e44d4008f9389660d0d490d0af56';let _src;

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
