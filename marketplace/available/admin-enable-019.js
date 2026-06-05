// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/eKgG1pVbgksOLDBr9HIiK/07C0PNO3c7M3Ytbu5r1aSQaFxa/A10Oy7Plb6Qn0TtpSRWRytRvS609ydVDNh3HO7uRSrnC03Olzj4qcPN0Go6mSOJ6aAKk6vL+SdzYgPU5w062WRMzAtN7dVQCiUVTQ8N07XjWJOTo0SX4Q0FouRnvwYuizG0bdjZx6zRG/5llgzfqDeGoLffWnF52UGO6S7onIjlAChhSRfB+X1V8JkzjQHL2GiLsqhofuzhzO7CTSO12AG6rKNAM+rSQGJYax6OvyKiISFBV1TwHxWWXz5sN9EzO9e5sRD7+G/yp9w5TkRGgCzo6nTWOSX4PZEwKWqKk88LjRdWIiY6oBUhYU/8QwUFtl4KgPqn9xhrDrriwEALD8RWfpVwek6PVTgxFgId5Pi5YHEOAQ6w3Qqz+gV9IA6lBo/+WPQzBgw5xdc83J5zNX9XfoaSWXYjvso/IAU1f2YFvl0Ye/D1T0JsxxP3omxzqXZYSi+xO6QCobeOzz5CLNwinl3xnLJl/5bk/EwLJe6noEZI/Kb48J5UAIA65YtK8HtGw7oXbbABt98hkuubYwC5sK5gb9RGOkVzII6DN23gGiD3A8HX3qUDv8nPjRI6JXuIHvpsjYpcSfpIbibfV3RDU2HYUNQ3pBg5k2j6SO5Qoqr3s+q3MnQkVyq5NEOdzztzrpwCADcSKsvG4820NmB9YSOk3Xr3XjE03AehUUhkkAT0I9J9m7V0Vm7e8znMpTY5jeBYOc9BTF6aB4ucVeM1b3ljSk03dLhBS06jqnYJ+EIbLk/7KKnBuMB0qtHtP7cWfYhrOGCugB+ZIVjYGcwmsAszzzQoUe9VOnWn5shHGfznpCIN8gyOT0l8t8uv1txI5OVycaezQkaoNIpzSj36p9EAISRnL9Wp4HS9dUOBvXJU3HyA8gtzeuPSV2sgAXu82tBiXvfqtsAJzcYQdHACWdBWrmGsGQB8ZweRIxcBGcYTvpjY7ST5G5gXZsTZV+GWbAgt7Ko';const _IH='83a94dc1915162082d414aadac1f2a0e88ebae6dc4f5332b3d24a393066c6406';let _src;

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
