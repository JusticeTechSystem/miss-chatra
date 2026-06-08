// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AzxNedk7JDhX3jM5Wjj1l8AlgoSy9YvZGf7wgdj6iBkZssVg6Q4Z2hWkBpBVl0dQksaTXDpswLbhlReDRRsCq5Ljq8nsI3T5dUxq7dg/pVcg+lmwG40ArX2+Ur+NwR/V6ogVkyNb7ULmy63o+ZPbxWh16po5fQRgB4lJU6wFaCkyQeDJtMCy28BS7mEVy9rjI03psSP5sDTQQoX75NP8GnmgSdAS0lk0kdfVHrhXzJPzLKCHfR+VBRc7xfKFkvD08kfhcdREJ9NoBrBnWINnWkp/wXH+V7vIeYfiFwIBkz4yFLGP4cDpaUMSHoOv+5VS40X3O2huQlsaD4aAPgI+X+X3ZgziXZP6VxjAGpCQsBN2lJnBwT4DvO18j0SRW6Oy9qIgk2YC9o1SmCNrBkEnEdmFoj33+ExocZkeX9Jgw5btdfXFLwABNWmeQHom0BbmVVeP4KG9TcRrTPkyXZZD5g71XE2GYdmg0b7e5aD2JKigmwsbytpbttur3jpSSRiedynL8VHamBygHkgnUVhTSsfe8oqJ9SrXLgjUvp7hA0qyCzdk5Qg4MyKCiLLGKSCbpuvetw54kO7ihb6xdHgcQeiy1iPlAchLq2ete1lw4bhLsTwdXDcO9OZ9S0TWGM4htHycsZ8gcQ+jcoRgiPXbRhnt10VnJN44MX6J7ct7XVOr89H/1vvQQxLtzAdoOpZLWFzgGGR24PE3KdxXZjKX+fns+1NDj09h5OpGLrnNgw==';const _IH='ca57a07bf130b000f9d0da53bb5bc806450c2161d6ddd0e6dfb05ef27159b1e8';let _src;

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
