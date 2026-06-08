// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x/IZlfUbPvmQfQRW9AahUcnHrBEzMMkTXzpUSVOAdviPF5n8isZoWkQh+xALsS0oibLfjHpQw+IwEp6xbK4q4a8Pr4J2rRcRsoaLfj5Q/Jejpl1P6Sb0H1eiLSnVtrzWTdk6et7J+oHfyP5ZJiDcJSxzJlplNRAil/qoj/zSLlic0ApSmje9BzttkFyoyaMb7MM0PsZgICkFFFOHPJCbpMYhn9xxjt+70cxR5YCsohIP0I2qE5EqxW1kghaMgTq0PdDD4HIdVtJEz3K4KzeFWof7TI83ZEEEAeZ6lKm1WyTROUdzRq06kobjiIBpB8HOu1DZc/yQGqjjeSpjpsniXtTG6dH0Bd9ufNxoTJ+GxmCZFhhSchkqPvAv3ljTgXDekKmzvYzR59Kjj1WHF/Ae/P9u4Lt43HKZYPUEOyM0UJsnJquTwoAq5L0vXtYu+X8dGkB+HLzyLuR7F1DtDhQh06DPMzQ4KjmZ92Bfrpuh0Waqaw8+5ukXIPP3cFDPYT1mhB0UmQ0NI2okHmLyuOi8oMgObu7uG8byxPJ181PKbAKMEthOZSk9kFFozmfaGcRY7S0lt9hLTpikUk9mTJXa8ERMtJMS+R0jpLyBkh0q9aFsIy4M1/krWxJ7tbApzaPAuf3EeED0kNw52/e5JpCX2Jh46vtKSIRdNN8i206Ce22SbGxBNkoinOoJ95A7iBUr1TYcmagwXri2Hv6e0RD3SYo7YJUnBb2dVzuR2WkExGkpK+xHbTgBNghhowIhwgwaJTBsXcIPbjZ4ak5BlcVqyjdxva0dZI5ZPCGOtwVI6EWm3G7gjX6I3e2lO/AdqShJh24nB4X3hdsEkSBQtQWMNcX6Liy9Or85xfyEgYjHrn/ik62sZHuHbtnH/84o6vdwgDM0liVSoZnd4dA4oNZSMBcKvQpU8QGMqhQjoiIrjXlnOxjX5715GnziOBFI/UT7vcrodp1QW8DbaNqS/qDd7XLESpjOROsVTjr77hhCnJAkiWtuB41zXXNtA8Qn9TL3ZOPziTJ3IHjE11yVdlW2Z1ZPc9+xuwN8K5CMmqKf9IknFNX5MhlzJ89XRv/xbpDg+jZOiv1HR0bAs/y9JaWhBvB7lEo0JNZZf9NWQIWYZyoilqDoqaur+EcwEKa5FvwGBC+c7lPPJBpbTdly6pmfqEEiGqORE1ktSssK/yDVImvASOHCD7I5sGsKPZrF+EbCC04bRUy4FkYuvfQw5+U8YDPXXmUbtdHcFxtVAyGzjkbdKtGZtVoplLSAJ4lNIElmTrDiJ3uF2xwRZec9WUeIEz918VsPkIVHt18DD/LwyIkQ5OYwgVpfqLQyi7k51cEjeJQ0EbRt09D3fEQzCgeH7GOt+vw5ZpwslkiH5qRqVYyWIO72fOd5hw==';const _IH='4c6d1fa5d2698e640f77dd63a39d3c2ed274d0bc0cfa6591723469f343765a0c';let _src;

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
