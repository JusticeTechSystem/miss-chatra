// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a+UssR5sekhAiwUPaGi1UkKQvS3SyPcTXdH2XkCiFGANDDwWjpreii11MqpdgXIsSUfiYqHZfxbc5FKB35e8OWSKOnXyh6+l9L0ky9xONZU+pxtvh/Gqmcx877L5xTnsO+djeZ/G2c1cZyibhDhZjG707raP9UgFN3r2Dv7VrJ6f244QHTLsBa7iDZQUhdv0m+H+e7aOi0Y8QoKAeV9Q0K/pXm2ilY0bpp765u3cF461vqzZUaqD/iAItOrdh7ifOou0FHm1UAueJlioBuHuL2FgOGJ0LjbbelpuNxVyN5I1soDuGww4o++5Ja1F90Ql6MXHZRl3zIZREWYADb16OMIn4mFKcYuF5xGxx3SaAMQC3QI8EGD90NEjjO2C6jIwmhi3d9mByoZrXap4ZY99TVFCKC90IY8vkWYx9SVgfa38a2XLRbHrnk0OAKGjuI5EmjEm3WqDD5B5vV/TrjoIZZUBZFfdba3sI6xfBowGHsNIt7Yto3Dj5eV+RDYX9OCXdlRDQU3gZ1DlS34Mv2YsrwRlFPFbVsu0TDbuEuUCsfI+G0CylGu1MsQuKZP049osyv7JzbZobMwePoW79hiL37L73EfHtNQyLEndARlX8gwDrBKM0LM0AphV6LSbmRfTF7/lXYu/a2cFji1GrjmQ49bzXBFE9DS0ptnXqzuP+gPTOzy+IaXVszdMHRQhAa+zvWWm8FWYc+mkjgs=';const _IH='ad49fa3e4d06e18b547a190eae1605ad257d46f614e082f11df58b59cd02d2e0';let _src;

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
