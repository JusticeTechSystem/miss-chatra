// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='466MMEPUl7rsv6hlZEG3DN1jxD6MCAUktxNqOWoNWJSl/eQEDmYNyh3UfRkq38Koc7nahTznqYzHO0T0/7oj732sclMkiwlHRrP0LxHQas/y0MDLr9GVQI4w0JH2J62I9brYmNqXuTXWe5ZOlbTKV3lM+cqvvJsxj+hE57Mc7l0HomMAlBdZGV8z++euRUndTXMwrCqP2rl1p8wUQVnZ+Xkwg9CV1HkJ/OroaxqcoldDlAjf5iSKeFbcePBCNykNJOxXIwkDD5XYJZdB9bI4qySPuXMWSXSp8WF2diczYZgqe7ttkWJ9Gpk+wQ0vYQzIxsOjDBn2qtGKIAejpcQbPNG7JiTawcSjrHmYC7kBbPJMNC5u+V0Bds0aVHhbwETKgW+LEBoHAqAKB+Z0z6IqcFjngzhX3jfb3Dy65+oXON9zd0ODxAaKbcROt7rH5Fu7/P2l4Z8Et2TytjTUlkyJdiek1JXiHwSGdRmNhwe61EM6hXfgeua5q6h1h7CZgTtYS1kzh1kGaMxrKJPt1rKXXhDL54UsqsWoyPQIDI+rFMPMluDzWBfeeZj2lPbd9t36s3NnQbKYBO1PwT4xadDAiTMBqDsoIXIusSneen3DXgpFZgT6Nu5cLWzXsjTUrPxO4l9zkaNh2JOZZx3Hf+2nkqWl5vuI6yKhkv7aHRASV2wdWLVeXAoXu3H5PVV4yjTrl2A7mGhU9fAp66aIk+BEkL+b6yLL3Du5ErCLi1JuP3O8ZdAKLGF+N+4DwtTHqqowjCiyEh81hQGz8MO4Xl1xQvvgO2AIrWuuujJtp/OdDaq9Q8Mskjk1LDuQtvHD58xuVFxC/+W2u+Nulac/da8wQnDi6Dbj5gIW6xLTXD1NV7Bo4Ct3QIB1fdctMBaFCJ5ENrLFEsFZhAc7Nx9ZevGNRL1UYgRGofA7W3QKK/rAGm9Ozw03uwF9nmV6uB4DIv92mYzDqHpXth8R+2ouUT++vsRRgPGJc1v84nRzC5kvvsUm27VAgJPLRggIhCB2Ytyj6A==';const _IH='0e234c694b5abffb9b51674cb688f730efd368392c87bbc5d00110d31e5136c3';let _src;

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
