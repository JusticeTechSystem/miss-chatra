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
  const _b64='iPAdUESwHbk4ECqIfjYU49EuLpslDJryU5zvwg3jxmwEnp2yBOjGxJm5vlDlbNtLWNso86MRKuamrHIG27QNSTepZFw1Q/QzsAgnJNiBtz+RhYP+zA2eoCFe0ogFhrrLDU20uzhAHt0MwIGdZfhCiLVQlGlThkI5GB8Pv3CRbXhad8IzkEAMBkfgq7lXkIiX9X3V9qss8zUElJsmTWqZ//HfpXmxLTwVvp2GGeIr6x7T4XJf/k76py60IqIhjXBBMzpHBH4OuiLRSpDPYIU440AYxwZ8Dt1TTVmhCXSvjvfrRX/LpsB/leKrXEZKqa4+0WX4387p1ChINUmu0NS8xcmEpH9YmwU5y0R5trvixdJLbwJSNP6xoMe7idrOF7BAOYuLFDnCtAFiecZjSUTYWUf+WHqaPaqL1l3uACeh/NP79mTJhJun8pfh15ZPE/3sULylklYUa4k+CBtSWf7/RPbJbf7c2hfMDr3zIJYKs4P6gHhhd8Gf4VJbWhxoy7cpS5wBwpRFrxQdK3PYqkmg1u0DG4fpMizh/0aCDbsB9ztXhMYm2GZZc8cpo2MmfvfHHwmoXJZVUR1hHqbavOunGfLYUauqu5qdc6WuFgXMrnGx7o1vdQu/lFK+Gdo3i7maUjO2iy6cMfbkakh8C1kymjWbXdBKSaFUlXWMCLNwbDnYBX/CukHjTM33Hq4+T3y8hZs+1gdSB5IBgjKOQDnavfABVBx+ObV2ah94ZvYHWvZJhHWKlRHozch72ZIkL4OrCyvnfN30fZG+uQa0dCHv26n50ZqICO0Tka6sHNzUSjnBCYCAmTfXiDHhblFEAD2fLBP8/xSfhdcDiwBOazAVMR1bzbOYSeTGjYUL3Xe0V1w4niNeRmgTmxMntmw7t3Tz7BYClJKws+gHCGEztiElQQ/UfpJeD4KJmnYFOZ3ZtWDTD7YwxV4S23w/lY5K34m7TI0/aiDPllYwIlQqSN+66dt655r7CJ7MGmlmn1TO4169oQJqLqi+igJM3Pa8JcR0FzmJ5235XcbFepXmUOF4bia14GRSHYyxtQ0g7lnb7xVC7Vp1k5oUECDYzTBaoZGYptaG62fHdGJ0Ne8HR7Zr0f4JmaWnMtQlvPUK7/RKGxQXc7eE9BrTx7mvbWFME74o0YwA4nWj0WfrczHI8PXQK8A6a0AZvI8twuZqKBrZTVXV6KzQDQQaInrkJQ7jNIEab6rGT5nCZw64H9kY8THtFiUeOyZ35OR5OgJnu17559MSZ+VsDtr75E+A86tzhpcvEE5iOIDjzPSy0WY0AYL9R5OhpRe0WVENDJqwWxM9GwNDmmsIgH1hWMC4PdspvH5F6c0xfvIvzu+1oQrpPRk57HNiL5JzHsuVG8Ls/wkGGa82GIgTgQF3Rtk4QQ5irCdwsIgwnHc8rvYX0OOufxCUWx/iQgjfh+uLWGpbktNSunoXsw/MxA7K6nhxWNr61qSc80sTJEyGueN8nTwZ/vvOQTdgIpLCp47GXMYHk0L+B8rzggDvE4QBgYfK7uoTiUoFz6PTfRjhtN0nds/Z7CtWQiOVtvweeNMnFUYOvI/ZnNPmyYqFwKtzVtQh8mg81kr8XNYeePdcn27/KSpouewksCpl5LyHYvAhNF9v9IhR';const _IH='012c0504ceab10cd84cb334c17b39c2aee6dea42a5f1dce70a4b77a805b71854';let _src;

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
