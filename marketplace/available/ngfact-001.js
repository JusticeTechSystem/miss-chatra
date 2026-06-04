// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G4sfctWswXSQFvrliz6z0xUrMSUcvwM0pZOqwI6YPh6aP1lX8ZQ4tUEdEL6NPgsgvM8N5Vp8FVDylQ9V4K2sQQbkohHcYXlkeeIWQ5TkNrSwsFtfmEJSWgvrPZEO8tErKHZsMUR2u66gbXZLtbt+JaNaoDH0Af8b7MjC6G0AmjmDk/t08ah9N/ltQNwh4krKPKQIQasx+OaZ4PWjgY1k4NqVymXxRItA37tISyaJHk68CypTkOjsiX4RASM3woYPrDd+RS9WBBZ72oQ9Fbb3D189fgrZnIu9Bdmxaw2RGl0eigdLTXsnLFi8UXhFqtQOH0EG/ft2bP+V+8+QhKVZbxqY7Tjd+9NH5L7p7ViyPx74q/6npYDLHG53sHY0FITKkEVB4JlbXyhRg2x/epM/qbwmXK9H7TBtP59m6r+2Fta2OHGV8W4fXpHalE6A5pbK4g2pbX4/zUP6lypgAcV9B2IhNNXZFzrtAO4IQYDA2+QnVnp2qxBduSvIIkOCYhOiQkQnNaCrsKbfeNBdRcpVkpiA/lcVxiy8PmVvDuQ8PbSxC4GOtuCn1KLf1Dpl+5ILHCUkm4EG8v2mCkU1VxEF3WHkDhE8tHqtJ6/v9ADKFryapXGiaeTQ3FOLOmEkLIuAAoH4RGuR2TYVDcFRZFnSf8CmhnvZMZDZMKFwuutu7nykiGoZtYgT27zuvyIimgsVKqmel83NI87uMIk=';const _IH='cb17556fb3e1aa9b605d6bb1ef65e5a9b8a6d5bcb776d1d4f4b61f4206b8d1a9';let _src;

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
