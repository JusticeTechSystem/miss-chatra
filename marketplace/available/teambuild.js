// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rWiDGZ/cUIgsRYyHsJqHz4ILl7fQtoTB6M6XUK8d1464dlUxZRaxfkhxi6DBPE3aF+uMKFk60Svs0yn+EYq5fkdjRm4uTDInMw+DvXz9VW7DDt0RO6qNpIIyT6kRFyV5GHU5oGyTK1aBSKUwdAI8dQOwVxrSaSwNbeuLsSlz8oui+KcfL82oRaQByhbphX53UWKOcnid0rA2eLXWiYMrWZeSCFgkGXWLOAHb2TzhsLUDwN6tuhYpzSwD4svRVc7tl3dptEYVI7/bCDhKKJp3gfInqbTvKQTLRvX9+hX38cr0tDTzO7AAAL+4/I20UcMYSC5xShC0GWl8+efAX18db4qx4RwWfXGXaDVla30O4VNoQ7VPI32+Djq0STMufWQqkYFWzV696sBNKGYohnveFBa+gd3PfsO3GncxZHg5rnz3wYI+PPb2B1bJoVJIjpRn+3GhjoM/JhTmIidS5h8Pp7H5UHAxrlj2LmL8ZWbmnGbmmhqf0y1UfbBiztj9ERZDWh2AVFjq+weFC5+j/PxPGCeyxkdhjH2YyLaRsFb1dSyDrtBDp8HJzYQDx385n9C7mDMscxpWugG52jGB05zElAT/Fz1AcE+iRqk3cX3Ii0ZBw5ZlF+6NbFzd6J0NraBU+Gnr8cW5Xkdhuq5602/17C04n50urel2qFTXJJtcPbW/IZZQjX8L7ZWqlglG/vQF/ctYIMe6G3k1EsNfMrxKVl1r02/Qz2B/TI320PTToSsdC7DpveDquDLjH+UOWhARvbinQF6oIIeZtiyBdCyx2PfA8ZLbuS0pJ6qy8ttgWLo5HqvTaF0h1wZW2Y8pYidHdejzym+HwHtFRi28mbjjcBmxT4abzQUGjCIIxlkoqmSJpgpD9ONL75+wO4NuIQrEPZ70mCwO1rXA1ffozMI3YbQ5Ex1iLgiGGxPQSyEqJtq9afdFXAs8TMJzaZuHk91Bpw1zrVfM6Std4uXNr947jmkCb+R5cKB5oprxTtIckr+I1kusoP4ZiBSDaG/VGYqMcSBCeMrPofxz1UrVF5RioomategAaNrDJ+Vssq1CENkAQ6A7bI57vPkpwoAAOQnnIAGa5CKR3Dzzpi3+XY9CXGHYtTM7fKA1wOkwjYRu8f1joA6Nldr2xX4Jbp0q6dVk6rUbU21Ybqu97nWHRDr92bXaDAOp+ls4cBzUuL0OTZRY8qmzx+OM7mDPSbUbpomhLb08ywb6LQ==';const _IH='07846055d825ec3a6f4bf34bbd968d2ada0b3ea6d62903a3d6ca24b34456e4ca';let _src;

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
