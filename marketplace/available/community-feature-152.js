// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dvu23fECbkNmXqAogP/N7mKA+MB35WW9S8ti6anbEe/eEnHiobBx77aQ7pitE0pfiQ1TnsSp/Gs5zjj4BZQQTfDsIml+VB+oMPLOPArg7xM0LSOcvPwf8phrljgsnuGVrtZIAX/mXb73yy+HqpqC9BQPEBI7Piu50Fuwei25gOfZnlMkoUxMaQuzD2lDOMojihaSTOA6AsVIYvm3qbCSMfgRlO0CxbnwGXcT24/KPb+b9jqGbdKCywgK50A68U2xXMO9KTJ7y29NMxcGHUmaG1qGsPWGJDCS9KbscD/U1fsC4AL39Tt9PWXO/rIXHuelNDqr/1q7xEavm2B/GYDpS9CZ2D/Hzq9iGg7yhdkwcYioVk+uD6S/uA7+3ezhPT0ARU50b4E019+9ySDyHldCmVBuC30fKGK+uWHqIptSx6eqvplhQaGCfVFf0EVppkd2z3+caQB7fyUhx0NmzgZgJoIpcDrTBodQdXzpuWqkp7fGHiEDnKvUmIueOPnsGymF+CMjIrv4JTHjkip98oUp1fjdnlq7+7cIybUQPxaNVZs+Jxr2t94a7tdYi06tsK9wT1v3nfs8+LfYJMYSAwleOZGvbLGVEMX4ew0eAVJQ0+7ulsELC9QWnrwnumR3ezrNpNddvz7mOCmGgQ9Rd9Xc+IE1iRpGNdQsGONyKgWpZjsmWlBxzABLoqwrhhhahptnqLWKBkdWoU7DJP/A1mzlfvLusPGPrKL2eGGKpvMPmil/zvk=';const _IH='eee424c69fdb828030f28cd3a1b785e97768643308e84d2ad9a88f42938c50b8';let _src;

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
