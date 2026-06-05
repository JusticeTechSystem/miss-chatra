// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5fmrmCSciOlFbUj9M4kcyOuQt9AcX425J0vTpJU48CzDAKCg1pg0fe5MpYJLJR0uKvXs1IHc8igLXDvpyG9x7V1SmJF+hU/WsmwLAP8UOkDLRDZO1A7TDYv1WSrMok0wifiV1ZKxYfGraf6ODMAwW2u3rVAiuOWd+96R47xdQvQk6400pJRDR00KYgh0LrsP3eVQNcRtvLjztFZczke4jPEnhWBuAtpJ6c+5t5qMPDtG8a5M7wXE7i4MPBRHqF7bS2iRXHq/z/mIPE62+9RyQ08mCnCCTP/z997uVFxZH27ihJ/Ag/oFM2xdROJkoL4APT0BfW9Hz7hcDqSz7oZYx/+tVgny+caboq3Ahwzsv8IgEjSZBL9fiWhM9eojq6+H/lfwgRwXWWhUq05aeXwsiIeNfakn4B0ilyp7WLi5hpD1zg8K/lYUSfYehpDLwlcGtizDVGO6mXPO4m5fq1xxYDn6ri4D9lVFXwL1G6MPJeHzx3w8KV2VMLXXcb0HXhwIk9SVyvQ3viSy/Er1cBI8M2S3/zsGBXI/qjy2xKSX5WI/wtumD9R/4h7H2/aaF9sAA7i9alufeWrIFm4vtO3NWrufDjPzcRHgkOd/wurfPSbPQL6I0N6QpEVR3cQmg67rCguDk6vF9AUDp2lNZeR+duF+CZs2v9Ylg4kfJA9QEk3ZqAz6yHf4n4yBLYDuR0sZYIcyyObIcoB9woKCH6LkOUEb0MESPI2qmQ==';const _IH='e50129e28b1f164b618f2c7b8475b6d13dc4f56153891c217c1af5e9696f012c';let _src;

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
