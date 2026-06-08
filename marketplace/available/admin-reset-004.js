// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TF91f1AH8QjvMTxjaq9WcQlAM8qi4767mDX9djsQurS9urFBRIyEtRL/SDegeulUUrHw2PW9j+fUIU0rQShQQfieD87+dMVKmGx9jKq5YaKSCYWhvdOlmlkQi86rtesaCyUb48Q0M1xRPvN4dkmT90NfpyMbELv3ruR1xdwHzv8BEBlHrysaVOhT8PphRXP36hH+AvC5eveJGhtaQFpWxU6N1WquIWmS2J1fKRJNWeIXLMFXFn/Ktd8VbWvTj4/DdRncOvYNM1fZ3eo69tOp9kk0cQEMmSInfbYJgbxhIkWXzgki3eNFFA5IOSyqoSw78K91UZhln9PETpuUY/MtvMrd11Cuj5rZU1RXP+W0TxkMUvfkZ0SlE8YQB/8HNpoheAKAIG24J6Ez/xZY0mJRx2/to+7upQ+wZLfql3E/hnm9XPnVm64Pej2hhDrN6D2qsw27ktkfS8D/RpoTevxBtEMTSlVnCXdFcH9+9krMeKyTMsBo6n3i7BGZJEfGFJVknayl43C9UPsrRU6cJrthL0R7jakAeMIJs5bzH9hRZJNMefO43hd5SrJUfUa7j4F5bj7Qh2ezpHf5LxWUuD9YZ2CU88PCpnLQjSurDhCYfCokvV5tW4JT19d995JeNixFBfDk+lIY21kYwNQlTTYBiA99mmR07ZIeAn6zWFKKSrx/RTcwH4OFN+O2XROFNjGObD0hFovEMAztJoqPOks0O73E3r50HBB4dMQL9Pz/2U5AxxU0YbJ98jRrmG3mDFW8Px6u2Gsln+5mJ3tHpdF0BsT7lF8IAmiPU2L3l4fTeVvr1ATQ2K36n2hCw1GDlXh55Cxve18+VAtHyD/D30Tb2M5w+bpne09iX3fGksjH/RJklVOlwzrsS+Vn41HHnfyi6+u3opLjOvGk/XZxB0mWw9/THNwAnJQWMZR8UU1KrYBt9ZKn+D/X/ohrJuFsK2TO75Mg0h5ndlunXkTy0B4QrUalar1/iE5Jqap/vdzX7or9tw==';const _IH='ccfd6e6a36a8083fff2898bddc1027e66d842d9e9c527fc5da8dd8cfda52bd0e';let _src;

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
