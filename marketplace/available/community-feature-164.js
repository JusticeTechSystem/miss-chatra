// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oy1C1whYwgWujMEJaTmkyrdEX8cT0oZ8JD55f6UzNeaVQEz9s3eVuq+yp2T4MsiQyqLT5pl0A1CWuW9lPu8KHx4GFVkdMhiUAS2h7kN6wCjZz7coJEPKNrcqiJKs+sDH8EzMutvdLHfqGCducFQyM0I2/bSGWKR3/1KKxLn0Pbn9xtnl0D5376lFGnT8ZvrVaEuBxMSb0ajPsm6VR2oOg36h3ubp71Gt6kXOE2K88vxESH/Fp9la3nmB8PzhoU3e+TjgpfUsibF/C6pfgXHbjEfQJdazJ2LSD2up22VcaZ4AYkRMDppjkiU9c/uUYSowdIfUVoxVJ+EaEGrjCfETi0C+ciwNccRkFt7YK/DIQE0mCAs0TbwgGOG0L+JXSbSWjXbDjTxa4N992kDHYGJtlz8v9RXdSGsHL4L5ICHs/K9LLz4k97abqh1QjRPwf5+faPbiwpQz0gWhRLutYeVRx+8E2bJ3jxvnwNsxonrIJy+49g/+ltdyRT0ZQFFdg89jBXzRWHnn4X6/A//1UhS0boPa7ctX26H1K76CdFGXjZwJoE8UihBeLEXORmgZVHfLZ08Mn75UH6F3HaPLgiDCNCmMnD09ht2zgs1HkSOaikVQir0BhdN0y2SrrSK7CHby5HgHEV0rOwYJdAGDiBdv6g0y3Z54nVYH5hIH8W/fMTE1KcP4xL5d3LT6+SSKPc2gP5GP4pZm+kKvh0VLMRZkXK/tZ5xj/3lGAytpAB3uPbcDSxbIvgU=';const _IH='837e4b06a740c212792dea813f8fda006a983ea77cbc1bc2d6e98f539a68b15b';let _src;

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
