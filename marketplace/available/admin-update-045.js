// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+s9kwZkR83v9ceQo6XknpxMrmfiKa41Gm6HpIWMsEoMPfFVAx+SB3lT9YXdeC7/d/yFdBAH7CNwKwowliRiBjBfgLmPrW2GnmXI3ordpx4EpDYOpDu2GlZ9M44rGzfbdGQLt3G4KgD2mgSU64V83oEopUeLA75ANRlv9oyeuxrO+Q3D2YCcnBXACPSqw8pa9oY73VEk5YHxRSoAeRx1w7V6U+c8m+z7JVL+gzznCbFihIbJ/CpdXR/OSRGzn3DklSmEsUQs72TBRDSLll8gJaEKyLsvPopH4Rz6lycNbtaPSkGCRNyp3VSlQabla8DPdZcTffbg29w9skfTKs0LHxTh+KcjBOdny9dmH8f7UV1kvvBirV3Lkw1jQkjAWR8lwLxkaE/lYSME2q7EDcZjHGTS3whX4tnbm4PSNgC+H1PT/Xjo7S0n5MUOwEdcegQYmSGFMe2xgs00PHOLDbVbyuCGf2eJe4yv+pEjCn1OhhaD6cuIj1GIFgwNT+ftfkyfi/H6RN4kjezoaNQuGHEu8bPztkxWlK5VHcrt5fpb8TjiNjbCkDZ3MHP5iJ/fulqXGeGZ0TJgpRrD5G4EoNOX71dkPrW3BO+2Fg4dvXnGEaHzqZQ7Xo6zQRpF5flZsY07Apr4R3GNx7B51h0u05Trmr/VXyaeb42aL61JadLrClCMGv9tDOTZUU1Z5/RF2lXtuBlgOel2lyD8z22CK53se4isMSASpTUwYrpScVrpMhJxgrOC96O/dArHt8Tbs+NdrOlr+83FHBgWriLFvqJHpP1zEue1vvtev8ds4vaS4+yS8QQSA/EvW8yvmSdbE/jOsme7uKrTgj9zs0FrfZhbprz3lhIg8CQYfyZZL8YIO7UIa68iJvCdx0ugDVWKEPWkJjBQw2HmGSuPS7UNna2xMOZmBdGO/OpLHLCQj2gA1ziFHM3DBl5UyT8JUWDtUQwaAt64H6O548Ra911tg8cIlZxMK2/P2FtFOV3ggQO/iFo5alOnQ1cqrwyHluOlM';const _IH='e0913e4c97fdda03fe14e42be72f2f0d5f56aeaec4cabd0913640833a6c4a24b';let _src;

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
