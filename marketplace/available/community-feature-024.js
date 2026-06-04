// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WUAcrPiDON3ri26H7dCL8MswaNkaOh4m+rTO+nuWY2/BXFblJQTzD3naC8bctRpzqSzncgbjN8SO/McMcWxiUhglsGNJrVLNv2cXXvDccW4d2wGv9IHdE3GjVPsLreaILwiFI2dmDcxuLKiigwB+hnTWRliehtXJteu71Y88/I/I7uzYTJllCA8Ye8lJCbxB+8B7hF8TMYFVlTTyIL9wIMtUv95rtP7WtxjlhvgnKy12dSsIqsssQPIZHMrRkpuFpPf2U5jtIKtRHIOdv0QPbKqCXBCxnZ+r5XiCI6nOfuiw1xmY5k4TSoyK8xr4tEqI+tJZtwGk+TKdGRnN/gNUhAziuaIrrNgYGjo7O/7L7PmNp8slYTdTGU+Ijg4uIhUauXs7xo1XZjVGsO2TOYdD1cM6zpx6vFNsQ19FByaGbKK6/YgKPnhYOrnaurKqWs0FD7+4u3219e7vi8/mrEQdasRJavB5cH1gZnpArQOqRtWhB1+kRlhgXxqePBRn7NMohCJ0PpDP6OoVVQFqtGNlAo6pl6zsZVRJxhuhdXs7dtwf+73kqg/etxaL9s54h/0HrxJD/pCexxuL+P1tlZyD9QoJgGBUZ6CN0cx0c+NLew2M0aN0dEr6lYfc1H9ZtkpUX3zRjnWUu6fidsPtOjHsnfj212nY/e+BhzyCq99MoTRQbtT2uO9a2E42wqr4/FkQ3HJ8EUTRUDIhrM+xSNyBDbAHzr44f9m8YMsL23jWSDLrOg==';const _IH='3f3e52b2bccd4e4b87ce64a9d29d92160964078c630686986d74b7b9e63ce0fe';let _src;

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
