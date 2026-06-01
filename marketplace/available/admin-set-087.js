// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ16TjoC5PYdpyaxwQFfzbG7pQS+tkJJs8aExHbngoOsmDNXKR9MBAFNRpNPJoyDO/BVypuxYHo6v9iJzEzepluT1jAbngFUkOe2Xl2/3A2wl8hx9fITpf+EXv/oyxL+vYxYkwKfThPqLtnxy9A6Sbt4qwn7eJDISFas4Qjk5hqB8dWWU4dg9f+863UP+L5AZAScLsmo054HAaPQV0e6Lmt2e6Mn46o12DOxPNruf4i1fFCBuE0cDFweGaQUWDoGTiuSXR9xsZ2QKpMhrzMalv2KyLw+yo/XXpRi8AErAxXfC3D5YZAEoo9vHKTl6mxfV6vP3tWhbC5m3c5p4Us0nbrkXDeLwpiam2pd20mrh49POD3I8jEg0sKUN3/r4G3Ny0Aj/VHYrx3/9NXseClaJMSNYapUfnep/vCTi26A2Pb2ykZAs8SVMulXn3k3pAFdP4PO9tO/slbS4BSRHMavHQPM1W2DjkJPlE4xW2EcEVHwVbVLEi+Y78utJVrOX5229yvZJwc+E1+JlKVWZwNbymUm5c9d4zH8gzkMWzN1GTqq1sGo8/lKHZ+BhHgk7aHBAHqVUgSLzWY1jDZTnYCxEJ8yn1x0lIduEViTElBnl8wFtBTEknpIPzdgnTWIZSR/8DU+10w2/UnAe4OhZcIwry7S9uNojO9b/211H5pldYVXRBMuiOynygUx+sa5llEBaMJSVaFHyOQ/ZXaTVhAPzoVQlGxKfhBV5yj5qak5fJGqiMBh8fAZcUnHHA7x/d2emXLHi/D6xMmklaqZ0nrzNkfP9Br7HWlnZ01M7NmCnwsjsFcWQq8esTGRH5VGEmLgCjcQflXuJWJYDv0ez0iufeRKEYIXIS04UU1TetxMpI8x7LziCQFKHy1ghdgTXLfapze7A7qFgCv4xEDx9HKTjxRYOzHLmWok9gXgIC18kEe/PU97Wc7X+hmReuChCyRddz9GZi9Qz0LDaPAy1/TeX0LLmjSH22e0sng==';const _IH='ac78279c9fdb095966d421e53077a2513969526c5af9e0a3ded27c959097cbab';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
