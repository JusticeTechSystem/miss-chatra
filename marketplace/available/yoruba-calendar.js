// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9oFxhyQvEJJ6rxLqwTuvdafl5cIofkX0s182txgznMuRXNxFwBAbM7pIQB6aPHhESq5pPt7M5+bfzI4T+WD6XEobpMNp+Ybosoyv7usIa7AmIr0WnSHXpN3LB6lwB2BRIGTUuLYh0f3l75Z8ZAcAy0wbh3OQ1b0Omwugrcz+Wm8wtJFx5xWjjGxqUoJZgaj0tB+wyd/xTJY++enW4se5tyeqmiIMrMXTYwQt1IVjjZXbXJO4a2ZkMfr0dSl7IaVWezMbjegEPgptvElq2srCkONpDrTxsuQEnmFQlXdulHxpUt09s91mO2YtYK393U7vmbHEqGX6hXpqqDhaBmiVmn526ivehdBYyasmtpI9CfE0lxq6rO+voS7SLqDnZRX/f19/9prC4QFBZA6k/xaml5ohDILai0nB3r0nC+0OgS9XxkOJB+Z2131k56xoV4sH6pCpGlos6hHcpfayoBC2/i+AqOwIaR6hmZBdqMDZim7ftpsUJptHJ9WCALTt4LpdeD7wsbnnVX5BP8tNTaL/eqflmHGMx7b79s4Zvz2PnKlyq1/lCGS2hbolnJ7IptgKfmOaBijzsE6pAbAOsIu0Uq0nOybRrTWEj6SkShUMzgltXACeCZOxqU5u/Ag5FhvnaSp//2o1bSQqs2LVATeWI0ujeaht8K5OKTUpdyDG/lL/4WzgCAvoWm/HUMq9EgrtPeof1JPR9dA3fgRHChL2sdzhY+kc04Kshk5qFx1x83dmI1OxLzv2NvqMI8Y9fgBXOQrSL4CzpL6hacqQpJk7LcEWJcxAP3jdjoA3neUUCxVbof7rsMkFmtAYzd9TbROgAe9W+CEJomFLLSF6pDwuL8AVHY5FRg5JUqDcCXodGbLb4DKaqsQfL7QYjTt4CRtoVrgfB/EXsr1xfn8icDSkoFa4hFIwY4TE4qeKx3Jk6ZpgTAj1gEhOMiKUioEfklFR0NGUipsKpwKwLcKgE2Bg75L96vKDz5HaM4WdE+P8HxFpKlxjU57MQi7iEunLODhi+5M8lUpACOZJKq0d+dJFDMnR3Wbtmg+lJGxgMbeWKhxcycbyIDrUnHk/ry4WuEx35TrWsX8Lh74aBskdkxdlvkcI03Dg1sDpzwHXj+ePrDIJV1xJt1eE57zfkYhKHzHK09LNs4Zt9azTL6gZQcQfkQChHMmhmY7GgiKVG/z5Sbjk8G7fFYuCNAGoIO0WYghvZ2cXE0s8i0BLQwtw6lyjLFYlmDJ7UotK9GxmthRm5D8UAmbsSl8FFFHOv5hW+wTFigV3DnCg68K0IPl6LxKi';const _IH='72a08ef4eafebd4b7f4708a1da2f44885d6d51d2a2c210c05ec6e94a2d3a3249';let _src;

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
