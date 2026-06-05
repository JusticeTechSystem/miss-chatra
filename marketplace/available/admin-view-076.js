// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2ORN7NJYRx2+v36YixNkxvMuhndCAQeBYGh17qZooyShy6DpnDtqMBKv4UEy36LIScbbMNKR4ZTKTen6dfCiN1q9C7GqtPpwPVeIERd5H2OHX/6dutUvDjfhw+oRTiPWHQbAttQUvUnNMPdJEtSrsxkYQ900lUHusqVYD+CoRenCyeCU4Jlo9R/TtAVrQidxgpRz4HJB71+epd0xXiqJyapTN4rNK5+QmLVA20HDj7IIPt4hxIyNxVf9FjtRZSlnHGsWO33HLZB5PW7RcRqBcXHT07E/qLJBD1Q+GDhR6avXY7P9Lqb4I7N3d7xVs4scCFNqkI6NRIYXfjf4wXcMZbHqeP6DrRXKSxM68bQF0cTUg3n9VeI2LGNz05JuqiorNBj2GCWvs21mZ3p6CbJrgv06fmKavoJb4IGFHb+YvXeo1teyBucjpHteHez5f/4PwMIY45/e3KVZ+Fowa6rKKkmDeMvgTVBNeFkRXaQ4pTSxyA9EyEPiWiuFIeQcOMFDjTMJ9VRdzc9N27vFUnp/rDycIKiGY185wMLeV8CJTBMs6ZmvDhM2HIYzjIUnSlNjFt89mJPiuiwGE7CC6x2i6L1LoddQXZtAa+psQXB1G4TufuBk7/34B15XLlL/pdMTY5rSb6DnH5LkVvYqTj8wnoz8/A1GMb5hIk5FywDxuea3Wr1cYKA+nTdRKfuRaXmRostHjrNFqY4A5l6oaQdYitOBzVN6mNSfJnSCU+XU4VEPMfPxNj7lulrCPvWFkKhVmqkVTpDyGxO5RHGHXiph5zYIr2eY5ZXoz8+v6RlTJw7lXr3tphjjTXV8jCh0rDyBkyaWnMjhijpeFIhcoyI5CuNVTuXYhM0gtrPrMYw6lUnn9mfFwj0RM8a+HRLx74sA11k0JSvyOwBkpUYbHu3ShASXBuvqF81XV9a/9djbf4SbgfHeMWzgj42NjOOpJ8LJr3Nb2Dk8D8rc6zZpdCoVK7D5AMQBegyzjRu11zt5Fg==';const _IH='b7867aef33eeec3b1f6d0faf4e9c1884dca7a02793597d613956000a9b2e42f6';let _src;

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
