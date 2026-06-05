// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FE7+25hSktP7posPAfIBg0AmRi3iM67CWx/gJ1qoxmubjZrDjDPwsXRjEK76ZI72V8hTc33MXYRLUubCcnfG41pLvErbjFrrS/euhM0t4JpzvcYUKNPvfUXRTSzcFQbhK0MSzsXrBpbbUWR70hysgSgE/WJ6WANuUx48syY8O71EMzxdfpeRdS0wLOdc7aqjkAxkKL8BL0/woeqFPVR0YsedndjSOTSFNfBnmWV2o1GdANMbFzo7OCdPY9KQtXn0KTmzdvYKy24Yfi0LH9WECJaXeCCYPSwce1kJndkAAD03JWKN9jVVlQoDd9RDoprGkEptgiaJQrUmvioDgTeD5giy29eSpEHPIPA2cy512QqnGqXOak6uoDxGruzDh2ol2WSxHtGsmaXrCZ9HxKsDYaaN36RRcUwsomoc4avEKg8vR6/PvRo+loMUStmKLhwcKVnDjZ5nK9MHfW0BhjI3wf+ghEBrzNIPYbFYwK/J5IHBoSYE24K7K+P0PKhTnuMj7V7bBF+J79dxucKo84UuSjJnth11hIj40omb7JcNNfsO63B2CRSgYu+P8HG5NO1k8ZrVlvJHgJ6FP0qzc8+USPbVSoGM0Rgm64sE4VZAiztMand1wwj/sdJw/uOFc9hpVrmZUDUm7CeRaC6IMsbv';const _IH='d1de7f43fd5dcbcd57343a6d195f0f6f74b166c53adb752bbcd8eebd30db187f';let _src;

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
