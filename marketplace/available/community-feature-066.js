// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ak7IhUPm7NdvFWWTnoAubcB7eY/hga0S7G4/tDJ6zqAaMae2Ii7Pf/+vfYVvheVwgMIFl1Vhma2c4s1mhlrC/6aR1xNILdbrF9fpp4xvOC7R+IxMHG7e1qPBSjmy5CPMiBdDjeI4bP6bfhj8vAgj2YYTponKNy+tzBA5Hbi6d228pu/X7dERL+3LDSBFZgpCZTdAdGAwqVeveUjKYi4k5H/YWNzWPL2ZJ2BtI6lxDU2Mvhn25tC1KsTlAgMf40/7xjNRaD07up/UvMTLUoO4uXJgG+gvet3i2IaO8yr+1j3MUHwimDzUyTTGtiG+QggGl4fxqcq2Y1LqYSDd0g/tk8FhUIj2AEeiMTaU7xrCyOaN8yGA6TDx95Tni1E7VSEsXzMy8IV0+dxdbEe436HwuCQ08Vi3aiE+k25dPyQM3vIHSwH3ryha6XHNZHwfTwhjJavQ5C9IL+5mYmnCeV6Z5QRR/CaBPY2le65VrB2sjOJGnIAtrZbErzDzVuF8W6FneTIp24FaP8O1yhS4jBQnmIRIvwDBBkEus/FymjQO5f9wbQXTk+iXghYdLwai7UW3nP1NmEyNlnpoZS4tD3bRyW+EpFCZNZree6O8PflwKz6ZqcxYrotD3A2DTcW6ufXhJh/RMzLRXGKdQkKGuZYdHOO40CaenvKwpc/58sQ068MCKB8Iqji2bUGUD9OuVqR72Z5hoE4mhExyE57wSHmqslZ4NwA=';const _IH='44a8ba053986cfa088d3dc80f37e7baa1478a3859bc0273b1461ef85e4ca25e6';let _src;

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
