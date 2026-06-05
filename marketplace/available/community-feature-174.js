// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VA8Vpjtl7WkgNYplBbtA5APY0DmpoeHm/A2MnxGQ1f+/eqAKwZZLdqEL1eLW3NPHhrZrFZce5AUznsWSJyqd82A8Iz2HF6YppOqt0UsqDYdpLOmY8HDuvOfaHQ2l1Ea3UbSVlBXNYw0g1v4EZdl3AUlbAK7EwtAHndjsAyoJk1LNJHXCEM149jIZ0KxbQ8IZRj1FzxHxhS3QD3sP5BmgPfJKRmNIYtwVQz5Rp7h4P7UNS7WonMsac17BUxVMHPt79tkJZcKaLKP76nUVH2/uCQwdyXp+oeKC5hkY+J9fpGbQ1r08voSKYJovg/BerP/BGMu0FPiTBq0hlXgUmjfmilOirUQQ8DCQYiqC2C3rhU5X9FVc0vf17OGWHEKoGA7d6X8HlugRDpPPjWRO/Ax8lgUdta66FuKaTBXUNFASIJlsK7uEqRR9f2/CHb0lpjI5CLY+Nd2lpVm5Ry/j9Cdezk+KreulJAWZ85nU2B8yy230bXZrZb3NnaaG4qluKyi76AlPM4VcNZvLorBfUclvE6UShO5vyqgGsP37fhreP7R3fxqUqFB66dIQx/tBCdhhYnoC56CZGwmgwdPyWVTJi1GnuarXfon8TnBhaY1Q5aZMmuDfVP5cHY+lKl+vEGZ1Af9YIBtAJEq5sehJhpT6BKRaqhmewKvZxecPZbYa8IGDdQmMsO6wrvrrms0UoYHAKpsRHm7w+8GqqYjeWJcADZH+WnzfdyF0v2qg9zMvt/iROrVtXFc=';const _IH='f562e46bdc3de10cd36d9be06e545d4c0577956aa20c08f77e1e87a60a19e992';let _src;

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
