// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LKy0mXcmXM8U5uoapmgD/1eY4JkiFPtZLcgAhGkogu9Q+IBX/6+FAtYripynHL85vuXzD0FDoHdvGRu3BAGLM8gVXUYkIirZGbw8I15EvRBkgRHEpDUICKyKQcI8hSYI+aDnawaHkWzf2qLULqWSPPgm2/d7rJwumVa7m3EQG+r7No3OcXI0lB9LUu/5h0quC+8Ai41QYcDA7XZgTHbkbfu1cdshZs2DyGomtrcxB+d/3jlQZIrdahRAkM/Mbf4xKGXHTEUiH+wHk61zVnqX83bIPCydJwe3mJ8ldztYBEQ7HNZGqSfiEDBJ72abKzlwxNW3ptloRHRS4Y5wgDlCGpxZdiRBmc9iCbhAVmDyBYy6eoGsYsHNPf0DN0BEWEkLMmZB7gRUPrlPCOpmn4wqDaROgQBtM8dOQKHrMhdqCgiwrB1hpgNqGN6kwvK6LIvwPlgDrRqpVvQE8T3ik3HUDIkqbLil/k/imabt1J2pjJ58HXicPtHI1keCFUQTzvUmCXNkMU+KFL/MLmFq9jroyBaaB428GGdjUXpRLOTNETZeBVLT39cMsJk5cA3xHMTYQzQQj+kELg9mXhZoqfev7UmiaR77dJc6/yv8mrclnzJ08mCt6nXVvz8kdafWWlH1sJHhdH+MNbLM5nwtg40TwqA8deVaGXytUJfyAf2qgD8jqU2NZym+BtJzeB79G2s68a/lNX7cS4qHiG8wqMwIg4PTbykWWKo56tcd9OIwmfC955wEgJSWjT1xJujr2f7gTKtTSvz5OpEFhHmfpFg9CmV9j/zA3bxwIJjK137+oJK6Af2bWwpWVdzAloayWZwzhCOcl3KsDM6DKk2esq9305nCSUQ7SpSyB61QbI0SZ/+w8UYMBHJO78bTjKvjOrQig/y+2lSO9IY8fUW/FFIvnoyRobWUmlh14gLR8t3+Yi98q1NL7ouT+M168X193z65iqDuOg/wPCG8LGeh/HpwfaUXVMbpNmvvCMNO0Bwala3bYufVWGsgPw0nA846x37cZQ==';const _IH='14eeeb577276915a0f2c54746d971d3acaa266a770b66d11d3f40383129ce552';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
