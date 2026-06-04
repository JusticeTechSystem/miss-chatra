// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D/Zrpb//5lUGpTGCLI4dwF7OCWHKNG3HK6V62mUSVoHjE0Ikhwo+iFvYRnhN9vlrj2/7ci3rNVqEYcnIWLz+acKs+EkI33sRXq9y6HnpOOgvUkM1toBw1PQXWsXqBH8hbfRnvN1nhblPAxLyaM8RzulHK9qWwTX7UGeNSp+MK6PXCn6Rpwt9191y/Q5oHpPrj3L6f7FAYRwX8LVkSDDVBDxnS/FkDWiHnwY9BqJE9XdteSQ9ioA0V1NurOOzN8dmvjb8G87hMgTN7WAwRFnM3N69cj3/po3RoTc25mnq2UoN+mkoJwDCpwmDTd5NoqaPCD2u5LM3BtA0KUMCuAAHcCaq3spVhe3/OxBUZe+5y7fwl3L2P/qt20U5TrrBMgYqpo9T9VdoKa+anP0xvwbLKuyx4uZWRhCE0m0FDLFeqdN0Blt0s7KSa3uYBrlN+n9AI8Jouppr93ZI0vHrDzmPb1SMJ3udqI6QKth0yYijA5s28i2iUwJrFFyErZ97ZP3kbI1DkD9BHIZFKzAi41b088mvuqFrnC+BzGmaIReDId3I+D7OChDLJkaLmW2ucAhr6XW+BT+dxFxnp4wrQ0SCnuRxV88y+4OzVfi87giQGyR4KxhiVgSgyp0nU0WxoABoYmAEeiW4m5wkZpTLTGYmTnpeBI5YwKOqi7Y8JNwSwOg6r/PmiXLf2CT4fFrRBkvK/dKEQZ81wPOrJIl3LW5zX297Q8ATf9+UrfJKcomoJpBEQ/K0i1oByT+xuKm2AUGAeOrcYCff278YbNIhtmXiufQyR4wGkCLrzPzvpdYwZaTH0UnCJPC0EWddEzFwTXePv7gvDG3ddcXyOitu5OgV3FxpqKAAFCqi9mXnxJ7m3iwrMgi1aTEgz54ExEc8mVxdqn7D6gi3MXrdquzI99xy8IFEHu/g1e33JS3qPkvBfIOYubLxhlbURnhxQG0Nm/2s965k8h03YXtVZGcYQJbium7V9prO+LvJZzpyG0WbtumuiOms8+JI6bX3M4hfmRvj3BGYYT/6CpQYo3Cjp4dVUvpn2i4jzYTWM8s7p1J6FOAZmaaJ9XkvueyGexztFG4z+KcN94ZsaAYEHKY=';const _IH='b7e5a28c70ceac5026f84c7d1fa1c6dcee60db6db9540b71d6cccf5d524a0f1e';let _src;

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
