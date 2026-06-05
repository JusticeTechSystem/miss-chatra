// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UibIS79ZTvYYx8CRzwfBOiVD62sg8bEvgL6p0Vuc6ihhAIkei1PXunC+RaJ0qxOGJA2rGv2eAImqVU0myLez5gojwv/M5J2KoiS+1gYpQLO8Xd9OoNnN1S59uN7jGHft2I+7RZWtZQoaSMpjASjTSIk+I4r9S07MsI8HxYW8H3muFSILudYDOouRC6nkQyYVC+rYdh7/DwNGkQSej9CJ2QQRBkniT/TyU3qYZPdS+usqT9aFuIRkk1rKFnR2wHdtHDo2VUFa6qWNm5s0ejuabkj7Gn2wuG5ATCmEREBFlXJkGva9VtOxcb+Y3cNHO41uZF168GTGfAetybCszzS23shZ6pL5jSefSV3BU9kD0H5OF+awvCv99Yb4mVz2ep99KbYUs5lqUddN5EQ8v8Z9rcz0ThRcKr0ty43SeK/WDXBTbhc3qXX1RTM777CQeMjZ/FcVxWay5OoysMdxoKbPz7UJTypMimoVi+NM6CjaGNtUTZxw87lifOF/gAXAYfDdMA3lWnlKutRo7bE0nExOaAaxZUkaRv7jS8K5oDlizGI/YGymDE5eI/zaDjA6H7oFb32swn4S/CtJYrao14sTXob9Gogor7TPAQD1s8e/+/bpMY1pCivtNTNS0YxU3dCqwt8=';const _IH='c68dccdd1fe33daed818512e7276eda3d140631e8f9a02291a952c2041ccc168';let _src;

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
