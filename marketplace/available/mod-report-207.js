// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OMAtIkXyIi4B5CZFajGHhpqhoGG5agIG/l5q6G+KO5CAS2kVMsVV+Eg4s9WHYbc6MIKEaeyrXumbtCu7LBk+zORT14cQZpKBLDPg6BS1lwC+jkrfGgLLbFEWl++KKc1iV1fDdGAC2LNAmfk5DgwUKfvB2WfdNWbdehawwprL+X6IHQpGVh42xzUwwdvjH3n3Myxg3IesleZ/mYD/Yi2uhXwsJa4GSxKp75ISwFNPoTP/ZB6ZZd9Q2qrdm76cVXgHT/fTZ3Jntcm1mmsFeBA/keds/KdEjDVDydl7quLrmXiuuobY4KwqXcsWlKHkGbTcIYbBP5s3TXn4o5IH5DalQq8StBjRhvILdzJuVowHAT2HrIpi6PKL4UQePFy5gPZ4AsdaR/mTP2Ilmkb6P3uXSti6Tp6n08iLHryB/xTiE0sLTlWgYLlnfXh81iUIeIK+thHC5K4WtoaxkJd1IHGeBppAe4sC1hBCaHcN/JY23anfLuYAsEdnwPoOhIQ0u9/KX3vFv549JzZqAZvOGQH+CVZIDYvbY8uzgbtKk7k1oh6dUh/ARtyc0QUfF4yNf85Hkph2z8UaKD9T7DbKdRGMgGjEPimKmB3B7FgqK4yfk4EB2DCe7uOkew3PFwUytyknoLhORQe7bMQYeCTV52oZW0p29+ZgxGnUnvbvNUS3bzvfjqWa37wDLkeRqenvskuM8cszFrzQ9POARNDtVR0a2WcEAMJP3dz1ths2aBlmr/e34djgX1D5Sez8JZdhMbUHIOyj0IGjQwQy5IrntxEcCZKGgh4iWgkttU45Rfxe4QmSIRwaogGPETQgu6ltJTEeiczlunNmJraNnVEDjOoiQf7GRLXxx5cGKohz4xNnhkbYHhrFFEOAdJspX/0FyagqVnQoQJkgUbhs35tSC3jVMFPrm+kXPXe+8CeqvEBxjGrG2y5k0HGXXDSbn6odL37sMP8xNZrFzLYcwP9g/Uf06ygRHH6yH7aDiTaPZn6hAQSfn5RCA8DglYJKHhHsndgO4SQ2ncwJwHfBVfPP1Royn03Y1fSKzhFW43+fSrnZuYNo4VSmeqsS46KHUNgx6X6GyK998mGu4pScdNJ7yCXzDVGjca2lk1NAjzsNzsxIf78Q2g2Axll2SUxunPXD7aYX5gZr31NsVf4CIR+q4aAuPrI/rJAVohFBb1S2sBaL6WhDJCJtFgo0oeHFOr1HOvLS9SD9HJ1SdA0p75sGIlmtXhuG3dAHXpjO8Fu1Fw0gYsRLAktMAi1qCu3E8COSAgGpZEIO/wNdyv50+HcLjCHNeslnpIN0wYHeWqm2Td4X2CLc+MgQkEgu8y/HenY1avOy6V+6wD0VR/hLlYhNoXrT4q0bkzQDtZsPDa664l+E39FNM1nIBPEvZg==';const _IH='d5809d4842a958785e8476b6fbcdbce9aa52db2dcf00898b21ccd56d188fc23a';let _src;

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
