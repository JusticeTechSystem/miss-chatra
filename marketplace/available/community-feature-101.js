// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ5pMRUN7vHGITft/bREGQAbatxjZq6OZ7PmqbK9OeswYB5Nw4bR181WExZeecZxASNAH4VtLDBOkFlV8/BLypCyCCnqUd5wz6/4eQszPdCLVLhm0ernuaRZj4ITbxnhnAKJZQ153qOW08jFhLuJA1DKo1RzGMr8iZdpB3Kpasd3+JGzxmN5HtbsbVTHf/a3tNKrRYRViayzZrJ8aRjtRDmULgfK7n+aBTE+e5VW/wTVyD5cPz8lN43e62dN5EWY3rnQoL+4mOhkUbzdzB5+hdx5yypICX70JJNrTbuC5fNmYxpECjD0ZVecU19BTOhOb8POj3lF+nCJrN7drpSAmiJ26Oj0fWBXKEDZ6/gu9k/MhKrap4XqRZ13zp68X94N1TKjDgBoFBadymq/bJTRRB+33nfTuAKvCSMVA9XXhApJdoQgLhxOHsxkf11puED0MY+bp7hXGD8uilK8isLO2e8fkKqnbkwLFkXlcHbuk9o5hz8NZ/xPnTYAbnhmqwvVM5tfO4aHU/K2gqa+70rAIdE8t3wgfdad50yVxUYoExkEe6N43Cz0y+UIB6cmS8e4a1UKcpibeEJ7xKAlMS5IKhHDycbxgkAvXGT3sxOAkAzHDh5c+IRaY50k01k3wf7Cb35DmUdkcsOz/gdQwf50pxrIEIstAq7ch8jNaqKyYcQgvA03vXtFa2XALjc3pAGcK+58ItkADoce9iNaIvARX+kzNwsuOJ9gCg=';const _IH='2eb78b8bce35f7133032f56b78a506b80ecfa7f25f288d05e7369a120fc09731';let _src;

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
