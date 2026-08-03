// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQNDhI/oV+76YKIIG2SqIuxkj5I+qInccYNvq+k5t12ytyjoYbQ/2IZnuNnNVwEddZgFbuXgi8Im6hkVrP7fWif2zTFaIDoLNcbi6jWFBC3lHzrDwRjV/MkAutk0QNhN+3mP46UmHidqEkq3QHj3jjGNthYbckMvK5rzo4dAXfxiSklpZ2VjifQ8OtfNTnFhY5JxLfJ/gA+aVz+1zZUBoo7w64euvjG3Au6xyM4ZDklOVmOXgzvTpNJHTqj7QbmGxx5eoR5PmBXjXPxw6CUhlt8d13TEdKoC39zNF9lfyYFDzKpl2cfvWRoC+5TxAzNIDS0tEPn7FVwQB0OFoEYABQCoIRjLKam8fK62ylMfSBMbCYAYbVNmdL5r+r82wyH8giBtjWNQvKCZDmE/afrWFLYnqNZUSudCRJlwvKWwmLnDK89MXVwFHfQ9uq48z47XHDF0YKs+3Xo8I7t49DEHYyJbosdmNKARTsc8LLWDO7Z6iCuNGwTGa5dFo4OeTowqsxWsXDQdemfX7Lyp4DYFh6wpm+iHKitueUsp5WEMnro26Tnabr9MlxYnKvNJT4QNeBavQWDIhZL4NZZB4PAH2qQjs2FWeDC2E26eXsM8xdGITslpQ==';const _IH='47c7ff1dd2133626b9a72657ada3e7b1a78eeec1a7ffb3015289fc9955b1dc15';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
