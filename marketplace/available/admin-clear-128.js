// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JZ7H/9hu6H54tjGNc6aRJ/2VHnr+l1du9z1gBWnGfgBnTbF4kZWtz0CUxSM03oDo5SolDZtYSHIDLR91kUH0Y3Ox+JomGL1PTVmDMNC3wA0NsL7w1MDlJbxqF2mpEffuj9pU+N856Iy2k061ztifylSdkueZ5o9ilpsUt4DWtbsCkr+kNWuOV0aZY8VtrdAg78AgSEhYocZXwa7nVi8I5c8bgaWebKRGsVvCyHvU8w4YgbU41aIDQ6DxafgD4UVK5uQGKdFHdtQn3FH93BvxbMZxJZ7rw6TAzjvUSbujRK42xqjATJK1h+zOOrQPKjJ9qXD8B8OxHlP9jxfx+wzgSw3aajIf09nIMfrapEYIOi31ZlwxabimhUHOzhPwyZpRkLIEyxC6hhr4E4nS2r7ENJhkmYLP40yM6K2J9+gJYtZ9lXefjMolyfziA5c5OFRObMVLOvepmkd5240uYowtGi/O60gAgSP1CoDSbhpsqylzdjPDtqlDk2eJlQ0EhYkdS4xtjeKWTm+jrDxT8A6lmxS2JZHT/TzAkYYPnfZzUoNXnVG/Tip1t+++qPF8zN7Ya/v24JjKCw+89Uexl6minO55Ihg8abJVr4ezjG61BGWxtESRwrqv2Vjf9MkHKQLhXQCfzvIh6yWfK3UMi/sluwwepYzAQbVWbEbXA6/LKw7tNQ/6g67h9jm+X1r4IhSIkedhJo5nFYuMH2G1Z1S2F50a/clURVujp0TzBEAMeL/8wjieYQDBcGF6PdFm4suIxd6Ko7JB0xesoeQkfOwhqTBiUWy5Nrw/vNLUrV7gYkUIkIBuc58w+gpx8VGFgT1BbenraUvkBrfpm3RYDnyLJTQGRp/75m6eWX9kpEQSh6DZfzwHUVOdG8uIKkwAnPniwjpz8+f/SlaSo/QrYmSh3/MWQ+F4b9ln8jVHT3WjdGUNpkRXa4Y8nD4rxA4Kua/4HKzzT2tkzLdBHEENucPstzcjBc+AL2kG7wsR2a1vRucQ6XK9Cpxnx+F/';const _IH='baab8b003ae2eddba8226e6763304068e8c600d4115705def3c694221c798aa7';let _src;

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
