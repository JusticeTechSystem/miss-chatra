// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3XAUA3DBWxtJLxfShZi8hKCw4PRjwy6TeF0NzixNiTL4ngI7+5BhlS/72M+PsKT3uuiBmojSU07wSuZAh+cagDAnbF0QTkY1Wo9MGY+5T06IUrh2pDJZyVjyuKAGdTn/JOtn/jN9ARIxjPIoiEzZxd4hAlxcA87jAe75QB8iqwKy5ybwfJZpgWifUN4fmoIJJh9PvizuxANo202J8Fw3jR2aU032PTNL1h4AAmGQkM3IlaCP7xbTcEkTDiW89AjgOMYWtjRA2gF88YNggjEjAHkbr3jpSX2nTCQYMEymFpPWJKpClumVHYDYUOTWm0X+Df+tEKlqlVy3Ghe/C4fnSfue4RMWnpqck7hh6pejYV+RW/k9US66LEMm6KwrEAM7PXJp3qMrSYhorgQWhK2Zl+NXsRKDA65xN0V3bozBjB8eaoG3ZoOgVMWviSKWbAxz/VNFIiU+FQj1JsCXIvDw3G0lUz6xASv+ZN//hsLpqGizfA9Y/53oHKUcyQ5QuSuNIEVW7RtfvLj1Sv3f0AgZ1BbEKLUPbFfDAEn93+OiWbrftBp955F4y99g+JI/tmSZilj1vfP8dH78BJrwirJvM0WFPiycMqT9WA+tL8+YUurtyXohBrxKeS1xDUMTnMZdYBK6/UiYEP8QVjZ/+F7nNc8BkHPY2JYvb2yJkMIyPZTY6S9IrUZvQneHYB+nVGA13xcVDppETGcc8fR7PS5emrjkV8zIY5hT7FXOetq5ZKrUULsFQ3nQKKRXs7PSVbksJwIUIMhsU0YabljLwh7pGRcFYyocVFeT4tnyo69HhBBxDkVGIx2wZAMeKXb5lxadpbnonY4TC9fUTQq5pOZ6UCK5g3efdzdJ9Ex/lyS1Mm3iF0z+7oK0LkjwY5QzdiNweAeLxq9MEa4C5YmsZvlA7QzuwqtylSviM/4PwH1Cp1qKBpWFrR+EWdnyROwLDacDFKrpxzCUS2ixnh0UlTYPe08TfFjZlwaObGuMwzgY77f6ON9CuOXPZdyA7U43WHZX8Aq4+hazmwiTGwZyOhWqSAEmqk2ywhWixWZAW1teXb+TIfkiROpT3Os2LcyT68zzP7ZTmkQLuRAO1GsoaVC/XCB/IZTb8ZjRb2V28Kbi9TZyRry0hfx9eBwSFGW8baMkl7cCavhkfxTQtipv+1GjMYA97uvA2kANYSfTQeKeYnzdFcNnuvn2FjSnxzZgrPNXqOhfGXQzci4KJFdonTzACjK5zcCIwIJU7A7amwXFU/XTjyXVa2VbYZHwrV8R9qr3ogvg0frAdheiV74FW6c7gQ57s93jXzxZMA5HwMfRdXUZbdMfs5v/Vj5DHYdzboivAOKsvBfo70f6LQ5OyYINKHqtFtyyl5SKfL88vWCE';const _IH='5285b6fd24092eea2bcafcabbbabf1ec104570b0af2babb42d4c4b663dd60dbf';let _src;

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
