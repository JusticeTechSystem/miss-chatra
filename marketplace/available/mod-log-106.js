// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQGXlNxLYv1g4oKBeqBfwN0T02h5ZSe4r86hknn/emIX2UiDHiXpljtej3h6o23+K3qLAG7+/WBx+HQHijfsv9yB6xhoJ3neE566TDPLJo9wZLEwoXaBR6xBIWg4kYL6c+kk02NElBuBODRP1jNR6BKu+VlN1NqQWP04mzzybTPdxHdIdAHuJ1kmqqJ8pQdqcGm/D6ucSFzr+ZDLZmXu9CuSyGmk6py/lqkj9z8zQGNCmFWfZ5beBYuuCwgoj+me+t3e2MoMQldozG6/t9iZopIrZ8J68zTKiMQ60/HDw1Y3oe8XvdLwYzp4KsBh3WTr53mCGOXLfEDOsevMBov82MjHE54k9ahSKkw4lgVp/mwzQpnXqGm6HzyUcnxUhaNiFLyICghlm3ta1iLR4/ZWRpXKvfrfCNGy0LX3VYIJKF9MaTFVSGOfQZAGBI90TQGnxWRu6rWNcVvEdjM5NMk/ZYWGCZZdMxWfYG8SmPsKtegV53slqFrcGLlQrcrUIxWx8nUYYdOiIXor426XB8mp4k8f//2PJ/7GFwKo83x1BkXreeKFDRgqpz3DfiL3aZNjxDkpFH72dYfXtKxvxdGujwop4cdxUCGAcQJdMvcEgw98ALEASmANBa3XK7zIZiRG5Qna7P7FlBNesFq5wv+NNbCdZ+2kPsG8rp3XP6r0W9+bjHWXcxzbJdXpVTFwG1qnssRYVVFu7djkgMBGIwE8JR2lsX7QvXm809Y4PClgTXsqDtXW4z8Rb+7+tYl4bSukqBr82BUF1XiYvNG2+OBNAvp0zD2taGZy0UckSgo92OP3bUifr4x77KolhYVmV6wLVHGqxbS6AbkmaJDcgGpY2f6EPC2X16DpK2Q3mWTGjbONdI256cMwWbH/4d3/HnDscxU77pCNs6VNnTtbfLmSYoaFBbL5wSLEMWVBYeDjeB1yb8MqNkTXUitt5xUUSpG7sGGxkByLid0vSNMmN0mzKrJwnC8dGWSfTcxk/WnUsdD3+FruqO8K1GBYwSflxgkAhWfk1LVtXv2Ws3/eFDpZOGPwEXkbF5B0NAtvnktkv40zLft/Bk+iTADh4BdpOivL4MGn/AmnunQ63D3m+XPccmjKnB6KA3JVEa9cE+bFBnCBvQaBT2MFqe2r8/toLyT8dC/JIybEe2c/tM0UDU1BAwDlxqjbmkPa1x8sMTv+N7PuRY5ZPwYBsw3UJ2HEGngvVj2X/EVyQxTzGdDYfveFSH7Qttn3vWNOa46Bg+60iH3qutT9oz+4FJ2ysawjLawRdfEuRjMU2pY0bBGKwM1a04IqqZA4EN6g42Iq4nW+lE1mYnERzxZGFvJKCBWWWLuZ9UCbnKMxnlERo3e';const _IH='32f48bd4802130879bc0854daf201dbedfb47d81698450cf9d1e84886720ab76';let _src;

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
