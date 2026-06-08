// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WhDS+qU9XbEkxX0bwXVV97CwKApGBwO2zFIVW3Fd7LYaVYhcbYpcDGcG3ALVg0Ecdg8vpFoozi8gBBs21v7/1YIR8LuSD+3Z2G4HcSVX/0wRfY/GpMBMQUSWDsAUggtuCgW75OIudyLGaoEyyAE7zD/b/BGqyS7rwDha69az2pia+pTfXfd0d0sFG/BjnmzKgw9kWkWn64e07nJXALFQpfjZIc6v8LHAiJQmS7NijSeEsGMvVfB0zfOyojti6Z/K4rkQzG4wTVStM/VhHZiz67Ej9s+sHPvua7NRb43SHl6RNFQhVfFB26KvH2Sejbk/nTa5FwgD6oGKqI1tA7pG6U5z3hj3tswikCxFTpDhJgu3X7iiaBksbno/GxmaXrXV4OZ21kdAsqkJcZtIXQb9fV0Y6FwQGAmNu7moWbZyyCoNDYKUPRb0NyOj7on7aOP6m4PdWV+4i39YCSjWsVOwYiFbG7oCqJKAnftq2J6nEa3P/Q5153cLm8Z7egSw9vHzVtBe+E1XT+nTlDxA+qVIBRTijN9w59iWd8kxTku/XXWQG+ufxL35MFrDJt5lP0dzRNmNP7T92mLm5wpiGwCGDFjDdDlcMzvZBdb7Ajd18wE66GezTQnqonX2M2Hd2dRNy9z67GNYrRfM66nODVSdmBQVx3kdmzPfSlaucn+TNkuvBJKQTg4m+rR5oF4H54gDRIs8T7bRvW05m9KE/fZn7EgeookNoKZInEul/xzUlAAboSXoxFc=';const _IH='6b3e2ab1185cfdaded0c16033b9b7b6c25ae71158948d102564c84bfa50d1d96';let _src;

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
