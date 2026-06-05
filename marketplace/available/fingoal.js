// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qiQMfma5LlnSXMTEEMxk3Hswf7C9XbEkpXGvhR6uwaIaoBOSySssJlXNxsYGeMsbbwX/HQKudRF09cFvv08vYImxvCndHQf77JRi/5WHc3l5gHCLTf5rUr5orNDJ64/qVa6JTYh15HurNm5eTpnMKD70helmi8gS/+O14UKzVP/ZOGLZKzwZorW2uatSyYoICArZ1JKYuTq66QhUv9NBlWP6gpiCuMW5tvY5VrTfW2tSMNzGEUdeT6X2hU0hR7XEw6oehxo+lYPgOZsxI2YljZaGPKlY0l/lkfEsFeOalD9WGHLgrn+RIOKBU7CsRhkoxozRkl1A74KP8a/EO7oyvrT+hl98ZRRBxLfvxjh0MOfmxD8B+MR3mB/+PQG+8U4vhMPKt6kbcnCLdJsQxPJbZjoih6q/TwbTlG4CDkzoYofqTDEj6GnUEEBxmKnp1idF/j2cchEvAkagLylRHT7Lfc9BCl9+w01qidN48EEvx9kqiw/2U8mziA5jPuIZmKJYmwA4cyCIhZCO2nSC3//IZGXLfOay3sU2daLAJZhoQQMEBWrMeUj6NQ4VjcpOQ02DEnng1lkQVds6VjzLsgjG+U8NnJK3wDSziaAG4Oq22J/to98OS5bRVQ5GtyXB/MdsQvqS+2bagNSJLaXypJi3v9Os/G9IUwBsKEHjy2o5cv8w3MTpulPpkDRPLGV4ibtUWLx6sWc+wIzxJTCd/UQTNrKIZCm8GETw7Er+CI2t68vVZ0bDLF1zHZt5kWOuXmFotwYKVzd8/YwI4UlGcphGiS7OdfFQTbX1mHPlcQCgMUZ8tVDqdARTdY/1lFB2Kaz2s1AO1vxfqpFSXofyhqnpcBYCmfpn7UvTs43bRjMk+yWlAoOTticuC1M8+sY9Dv/euBf49UlSV2aUN1bEN7DNKawCVKcHDr2jCYh6M8TSDAcZMSKhu96Prf61Y97sHOI9vhbqRpjkj8Ro5yJeBNIZvWPCam9SyIzaNV3w4XPjnP9sUTYcJOGa3Mi06RGPsp5WT0jVVa4V8aZCW6m0ltz6zGZFAtOo+DlTwUnMcAjgIyTAPEEgeDVyNAIrvoDDEGJ6SSJMvUn8rC7ai0jZSyRiDZ2WQD9jzY9lMmkTZLeU415n+he4Uq5YjIDIqvLQVBwmufpy55X7MgEz1Sxqpeonw9dks/2nb7n5T5JNxtw1hIwhy/HTKgbPDRAPsBlJJ097HOQ=';const _IH='dc5c0ff4f553e09b23b859e5690f64f4de9b2a9982be53a643169db525daf0a5';let _src;

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
