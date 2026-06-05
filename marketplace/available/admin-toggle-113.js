// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1Sb+lbsd4R3CkFt0oqyrvYK7DRZTsyMnBfn0FIM3QDcI+8Sa2dXNNtK/GfAedGxZWwlZRRHPNHuhPuT21iKwIIj/iV6gEFKknHHp4M+OYWCb/ufC97t7E5oGtern9y+OBPIpcf3glfPX9XZ2qY+sCVhB+kYR9S/IoczuLfag5rDTeQSQOC+ykIx2a5F5lG96/+1BX4852PtrBEtJXabp1uA59jJc3yT8cWYgaB6dMx/JqNRhetE/dUY4O9DHpcmMAu4RPKWBQ6+6Q/1dfnb+J9lJr4XmZhsWa2CzDcH6lEXo2Xzor8AJeD2eQWAGXB6X8URxOfr3eUCl0nM4Dy/zCtNkPFCbtkg0A3OOSv386jst1oDsZBzQ8L3q60soQaOK+Ajchtq+VLJrwUqVw45mMRUMBVZ32shxbJ1bAx8sh+f7MLze81ICP9B0FCqxDsP+sEIhnKwXGz4DzfXWMmpDLxWhIMsHTODx7ymyDLxODb8yK8W9kiZCWIIOhAA+ggYZVmV3NOupmwApI3OyQl6O21hxt36A6wLXkfWVM0HgSxRnJWmbXLfte+itm23v/ElTzFvb4kbaHap8JJu+pZ0XQJ+6pWWWi+qoIhB2MzWaIKj4o8pKwdAs0neMHCrQrhDNu0kHiqMoV0KWIbMZ149RGWPkhBFWo8K/+lhxojK1GdWVcQuunt89KuOld0cbQVmklxacIRmSZ7GM7i2Nd2ERcaR7EZ+HzNMlKvAwvJGZaplU+evjjxQv6WL3P78GvTW5rX1TPXxLdrPHDDkiAqJ0GVJ3IwBj8q0avBEDdmDU6EFWdqNmL6KhVQtL88xyhbewsgXQa+r4Tzpet3555fUO3MhLJc4uTNY+L1CXosf2BIQ0yKpEGIulcB/xiBF8oEgnpsRUl9cyFJXhehqo0rHoCllLbwOw7DWG0ggwcr6VHNkJRMZ0u11lrhlxnz54khAPl0oardjgmmPsfRM68tBB64qFZ1LjTP90VCukj7UpIGBAv9+D4pg3hdqeKlVxAKmu7w==';const _IH='e5651359ff7726f7fa692082ddf9265a8cb1d43dd32f4f944871fdf5f7299558';let _src;

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
