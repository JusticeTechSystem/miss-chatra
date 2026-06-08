// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lMAQkfsbkam2OUy1+2J0sjo2YjpDLX0BZELeRVAsuPqry7SLVd8dRZFMKVbRz8udy6h8HQUKiFyeKUvB+2EZBocSIwqtMWaU2b4YNmnjJdUET+k+PwEH/Hpbs7xw9oth31AKxOqrnjPWjo7ECqwOSCfvQvMNLmRPb4EPDMTOFgDJnSSkwELPAzRwfkLPUr5k8VIdulGYbxQqvpy9foESQq9/hDgNou9lYGcJ3rL2ZH4xhFtcEJ+7fV50R11mdzucT4YP2gBT3RrU9KNrh/RZ7227+iefsdCRuCExJae0V7eas/xsvA1uG3BGxwZSbKWlPqUIMTQ4X1fpsH5/R8McIxcoNJQfrLvAAo8p9IJ5HMQpwq9MG87seo3aFPsPzefjZCbkw7tBDpltK/0AGvsRSZ0dQuldLemJd5j6gVPtqoQJDckXojUE7i4FieZl2i4ibym1WCee2G7nDMNofs+DzZdj7o3Z6Fnc/qK/0oG61sUiSyYb4a5X3x06kiOOSwYwv892Rno3Cvnmdp4RjJAayp4SLffkqRlDF5fim8Zy+HP5AJpSe1G2XUQaMv4PzwjGeFyanqjr0qxAVomkabUCePdscRgPNQXHXR6hw4+2K/BP8toLiXFVOCUR1ywdxm7yWO/H3G6Dh98t7ePUhxCFVL2ULDFHbFbtJWREChvw2J4YY2fF6OaP+J3pNJIMTKBPxqZMT5R9cKJdzcd0QXeb1uZZoENJYdC3A/UN4Q/x0Dxz9A==';const _IH='1cdfde692a71c30bc73dfa4046249dab5c6459ee56042df8f4c6a9bead7e9f12';let _src;

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
