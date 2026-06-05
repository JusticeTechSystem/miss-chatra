// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eqc+8Xaw3+NFnldJQfiLwqUwgDkizwjui8n7nckzu5aaN+syPwoy8IOuPYgfVtk0BXt1QOqDLl3vVsiiynhqy7lAkOWF10tw0eZBK205Vwf2LGVDV83ckXQgQB+6b1M4bB2gt/gqzb3upQQkg3b8i/zwQHBVsqyoKuxPZwF8AwzjbiCBftGQxHXldaJbgZNFNSG/0U1leYLSiUDyA40R1fNrkzDtGm7vS43jTmEyrPmQsin8mkx4/ppcYqj45RamWkPBF8g01xDyIGa6q0L2z7x6FdragHc+1ukdoNaV3N2bcVh4BiRvZKcDlF6vKr0tM1b6ph3Y1voYEe3RZs5bBx0R1AiKrYkxgj26PDMNmYUMNFdntZsEuEDTwiyWN+Uv3H3U+bCC9mfVpwnk0TiiloeYJ5cAJVxzoH5dA+OgGR4o5MtQne4aKJA9/31UEAsQWI99pzS0BA1jZdaX+QPDKKhc9ZzW9pmfV5qKPYYYIIhuBbo/5C3E9n8BZ4hQ4qRCO650zye26OH5paMR1yDKYJvKg9PljXVoA3efeeRTmYwCyi0r+zFejFKwGHpstZLaPWY92NrRYssH4JrAu+eNGbze9C4Std2RFKuNfkXbcOQrcLkhAgA6lU3sV7BIUF1o5nK2rVY5X8CBfuff1gbsTM3ScC3bx22DOhPpYLcUuIZWqBphSKPUAINFpnO+43XZIR2K0646okvgGLj0K3Lq6o+tH+iZ/kygwxQTqNwM4Q==';const _IH='664385a00886096f3ea69183a03764177c3d5e5f0e335c5fa6282ebf0a53952f';let _src;

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
