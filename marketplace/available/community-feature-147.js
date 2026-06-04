// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tf+M2/NqMrHpz9FoRyhumJ0G2b+B+UmWzKMtVNwSHc9PRBrAEcjGbNeFLup0rk7YHTYYTKsqlEhg2DrDTkXtldrLCpvoeXPW0QwnBJTOTAiEoPH20kNRPWSivC4iORkHg92+w2wQqq3soNaawH53bsDcGu9pVCdMlMj9AUY9j++5yNZhyxgxl1w2tH5uf3TBuOSG+Gbh54q1AMMch8PFhmOFd/SlDVFdBos+kh5baLJ5bPV0UOy30/d3FKlMBvoYn+7nSJRjrBQBuVcpkK9a3YL8bLYjzv8JPNxeH8n4puo7yaqB4yrNbA+6pURSzxQi0o/6y0gPgofLdbikY2923GEcOZzE7tnAtdfADnFWfZQH+V/mTBL1dw4TgR/nyaD049fCtAsHmGvcHE+FZVSXlNUs6PPlcZit8WitEDv7LjKp0IhTH8+qn4scbn556FsqNtNfFTOKQyXMSjv+KM44c+JoxfNuXvCeTUACNNwVsivL/x+8n4OxeRJw+EEGiV/YxymKht2m9zp34ZoaZQK0RUPDEcSUSglQdi095VnOaMAcZRRemt7TE0AmAONn0yqTPYCQIV3F5WUYEbiCrnrCkzLlspesoJKWx/tXIMjxe4hQTCVenHyYPVRoxmYy4ZCvM9vOaE7bxTWQJ9gL4+t5kimgyBI5oD7hQTboCNZS3+zmqOJuDy7qMs04yv87tol8+8/upIe8OKff+L4neBePY1KZPFHQCOkHIgRwhY66XhqFGEQ=';const _IH='7b8c07e792b180e6d9f29e4eec9e973caecf02ff19e00d99dfba4f279e34b3ab';let _src;

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
