// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AqqkJl7xKKtpICV9uy5hGdwytjDwQy0wtHMl/8VPQ7Ih+D9nPt65n6cdLjcS7uz4j1KeOkYtfQcEBUsW8CSw23fBQlPTg5/lQ3JyMTJfrNTDBy6lXf565HMqJYxXufkFrEUVwxqEpemf4ElOZphFXFos6a3FjXU3JobjIuKVC8MQKM/PitixwzpgrTmmdjDZnTz3gj+JVU+CMVfmWA9J4H0SmPMiTNoxWek+mTucrOgt3rfjhUR2Weq3Hnhy7OKS7VTbiIR/KCuR4WnoFhtyT6EKnxeISlnV2UfWOER5yBiTYm4vq9Rvk5j4aIAUc9w2GhYLG6SUFDTute42aPprE+fw0YIe7s/XOf4xx2t7GB2+zaW6CLlHD+4pzFcCSknQtF2Dbm3l3Lf8wXiev42tagSMUNRaIdnRZU4fBEHhqEJ4GzvSX7KdlT+h7Md3PoJeCTV232Ac9acIEbY8fYMKDhp94JY3n+KYPOuW50xwT2FxFQMQseIRHrQ3D1uYRTCNd+MGxPuurqmfCW5F5sKnXfaKvUE781URVCrz4222kQkMZSzIqoAJZzvQVYua+2sNIftYPCT4dcVcXnsR6/j5yy4XhuF9jO3gN1T4YxQkcKlKtKLBy1rGB1O0zfQrqrhv8h3UV1cykxN5X4Rmgg1BTbc0QWQkSGUTXY/gHBm7iQOwjh8YC6+9uKFY1Ea6Jgiv51DuhuQpeEv9iRqc84bUIepQaPIkWeR3ATdby18/rgRqV1Hw5btQypR1RJmVVVUaFJsgDroRx4OBtJT+jsx/5/UQ//iH3aGhDbSKMfKha0A0cWiJAwyBe+SMbskWgZ3BQ8nVrIRARHlAT0KlZgQvtR15O92JD8azH/IC7JgI4e9kNuaXsmPDmIdALWmqVbh59x+4BZE95mBRwiqe2tUONoLwoFzPAgblFS5r3ZmQZ2QWlkTspChOut/B+97E/A6Pg43rRd88G/raLAtTAInlbFSSAznLCiq+mT9KwKunkzhHRfdUWDiEgv/s';const _IH='867452e556203bc4299ab345fa04a765cf73f67c75b95cfea44e54743ac21544';let _src;

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
