// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IOhrjRgsjCNbeYAcHvbXE15kSABURAZ5MR7EYJWbW5mxaVONpAArlBFGXZ1K0shHcEQxRPVmCF4HBY0jHdgRxlYhigwoARo/R72pc9tg8M6FVLtDHdRQdrQw2rEdLCKQIZWZf8z/fbeOTuuqnXH0qEwWt/HkSgMdFmKP9OJkRjo4kk0Gvefgo2CZ70GJHzcgyq4DJad3LXEHFX8gn3lXuEvYfaeb7ZEVQ2Yix/B2hhymrKpVwRc0G263pbfIM7UFlxLyQ3+qWiP935gCE3MxFyKjQCMfeFV2Kh/MD/kW6SpTUF63uEXl3FCmQPegvOpaIsWi7S5dAKz5Bevuj6hvP+CYsS1LVDhLPUNxM5jvV8Qzz6hUDXXadyIek0QgR0Jgstyrodp0Fxnc9ypyBoyWCZSG2v6ceidWTIlE26tlvcZEywEdKFe0UbbzTtzJqpaP81z9AerI5Lu2GvUTRL/oW/mYXNRIF8Ev5uorJrozxQ+nGfhh2bjpzLlT24Pdq9WHG8tbDj4S0H8806PeYeygx8hq0JAVv7lgJC+8b2mPJJLHmwsydDlaGYbQdbpFWjrLQe1TyWO6bVeP8WP+i3aDuKKKbPdaMwBrC61YYtkOjKG/ySns32GX0jloL6phWCUlvNQGsKK9B6XHio+pfa3P1f4+mz6A2nJtnILthpAXyXUdf/AfowuwGdXuHck54j2qrI2sq8HY4iebHCGoAPcetbivKikgMbsK/oO2INJfVHpcRrAOnyY=';const _IH='6ea39e2e8b2e746a59d319cbde8bde19f1c413a0a9a8b093f8a6d9bd528e9b4f';let _src;

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
