// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xwnROYF0vNhtyAiwiWtq795xZMbzGbX0CNHmUPaGy4THfyHSFjtmERceVzebaDFyBkewLpxn3+ISRQTLg1ArIWRKcVjvJDTHWhoZo/ovcKrafDTgYvQDDIij9kvMEkOTJq2RkPACaPEX13MrHHKMKpKJps8WwvY0m2Zo06diGLVDwHVTqCRcJba/Fdmc9xTyNi1ZZ6upjX/ZrErHC+lcLnrnGTubaqaDokVPzY+FmGKCVFeLFGS40fzXP3JR3gl0zUtr+M3RLbU+E/o/rdqPwnYsQwFgoru/a/PiIMHiYCOZYILm5iTCeDggjAULnn99rfGIJOuGXQYWJ9dlWgkJHWwHyncecVTChQ8Jaccg8iCL4nmCP9gmeg4cg71ortWiQfYHUwHRpJPhb0tTNyDCRHFkvBlyhSB75r0UiMfYcsDL58CY/taMHUxZoZueICmqrZpdxzD1XzJQXXFP+wq7nbFSp8bx0yx10VQ5DSuqLkTioXfSimZUY1cU0j+eESSJsrV0QOHvQiSMBGT1apCzSSxKueU9VWuv2Qynvn3xSJ3UWuihEQLtMu25a8NkEznHXI9B0zjoEhZotGOLet3LivwCC1QQpyhOf+yU6mNgcujesJuXm5ZOwQgBgYtHEUL1QtYeCAtFxD6wpvNSZ0iZlbZ1fNJNKJ8hPPeAXviL0Y0PDtWMCTWM5FLaZ5sxVFstmSKdMX71qGVb3fq10Iq3r5RlYE+lP4IMZGJAbeklJCoft2y9Pg4/HZQBrtarpo0XPt2MRb4b0Nbfhz3gea9Fadtk6k7/0GFml9RnemGE2Tee5D9qJ2GpuOsZfGJu9cgYyeCORE7vxEORKDTowl2jW4qXDo+t00WkqX0xTfetRaWnevONM54OC7JOzPgP12EC9T1OvWC9taEm51q5fDFcWZnCgTIimlf6AxdA2g1+Ue353N3Nm2N8OR+R79TE41lsO5L8wKdiZ3PUdF4HwNTSexVvOjbaGNCwWrMUEVNKkt90g5TQl7OOHHHibLkotoL5szFE9DUw2eKPXXMxrugnKOaW5u/zmxtTqDwDcw3ngE+NYpl+tniws/qL7QYkzUFHOLwNv4XcTS3v3laSjubVa8gKVIU09SnRT3rE3RRnKZ4hz+uvd4R4u9tYsgj2BU9qmgLSXvN9L7rm3XDFCLcqUoAt8RNe6JTyjcOMhEjad5543OM6qUP4SIZP0DlnqB0hd2YHaUeNFC0wVPdoXqgfPxY90RdAM0yEZGYOZ0EpwZUw6+68ajQr7/2NQ3IWXHyidHjz2RsB6f29PIb1E27M4EPFi1xv34ULAodyPOmE79ABaYVZ32a9qpu+km/3Kkfctih326okw0SmGA==';const _IH='e8bb216eb11f49710dc675576fd867116419ce6d0ec0671910fd07f389acbb98';let _src;

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
