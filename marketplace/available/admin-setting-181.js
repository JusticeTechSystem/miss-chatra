// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ozz2ZSIT1YPJhrlkY46niTjtBfiAF+NdtsO8xHgy8nm8u04qJg5aQkcYEiz3cr7ZKLHdlPSlQGsLOjFYJ3i5LFZ+YBlYCIxQg94Wz36mSfS1+99QJ9JPNLH5r21aYLC5jDj4tN7KP2i8co0MOeCBZ2VNMWwEiaJcipePiN2Mc159ESsYvvFk43gRLg798Fo08UZTES+TXltrehHpeYKCUrtVOYCJHpQdNomJ5fdke0G4FdwoXuHRi4t38GAkIdT0trkvtFzNoKuBAmLM0lnK2a2J3ztd/WxQ5Y7AihEI0bGcwjgGFfOGx+fSvhZFdHwVzS+upDCGfpszmxGKZIvTe6665r/rlNMUXlz5nOFKIYN37uhNbVRYk5JisPnkCJxPJ54xaAxeBCC1qzoH7tFO9dJoKjkehX6nsp2k/nKg/psJL4u+l7F+2zUTzjXIcasjnYfTK+GYuvHSXoIm9BqQG6JzBtdaTbc6hECTNJE6E7LTkrjxGpminSF7gTGX8PxmQrRVcGzn4zhx36iJ3SVzZAkbZuPhpZJH7muVrsmKZira+/eEcojT5ljdXm/V4oW8yzmRpevRDnqh9tMOsPcdjiXXDfSA4rd0tWevpOPLM0GJwko9H8MI/pHg6HVAWdnGcvlsXYLWeZAxUkJ4zfrFGRv+ajpjfa5fo8S6IRXeHZByEdhcFwWTTT+gJ5V+cDABOvPdJFReDKjGJqi/qEA2EbcwYq8mQ1txW0r+3gNyqN6YK/Bh9rwI25tEgBhkHE8VDwADZyF0ayFIvztanpN/ccUwz3Sw51tk1qGi1t3KIKlLDiPWfIvvRoAFMPmKxIPTrBhMk9UEXiQBRjYNFT5SAD0ohqxqqxfW7UuMCUEgNQEBoFX1G7xyP5KCeaRpU577KP7h/Yk4C+xS4fmI+EUFs0Lt3/FoOqloVUflyrjeQ39nDGl9eFjKSGpTKkuGD8jCTYyGw6c9BUapntRAC7Iijy4oB3nqu4a/wXkj2RDJG5JGFCpsRT7kLFcUlSUwUdcVlpVbv+H/kQs=';const _IH='b2b3fdbdaf1d2ef5be3ed57d96ae72775d2e167f56e6edca20cf884952618dac';let _src;

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
