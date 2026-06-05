// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L29GnkRGMckAMUeI5nMG9JrIR/5/hOvtiBMO4f/MRhyS9QfnbRjl9dB9pBeHmfIZVsKddHtnuZDdePhA//6UP+LxJ3pwYgY4JrB4JpX3nMPTphXW/UbCeu9neeH+OofOziGdbEWyjzT3c4OYU2GPQqxcamwurjerpZ0e/2l8RQ5AUhCueu2+/iKiNhySHGk9fPvMcutHQDbvDOr5TI2RB3DSC9r/v6+Hy4+Dth0AIJK2BUKZY+UretDkML1R4zZVDVajVjd8FGff5PhOtHUWngKuaQ5O1yqE51fvQac5UsZnYVE6AU5axGMJ9c7ya8Ihiwy5FiEbVL7ZM67DpVQRmQvHm6ul2RIPIDpZd5b83SvKa7JverKvh9Q27g8JRGk34pYb/gwXXWm/s6uL1+K5IaGy8yHvUdHJE7/RNiV6QtA/EF8mSOtvR3D5HFI2yLvSifXynLKOLvwbd7fhM+y9gHypUFIFioPKRX6eLsTyU7MnI4Yv7zi9OHltCX8GHVM6lon50v+S3GLGeLF2BDlVnMFzA7PP4dAR/DHps2xakSly5NZKziiaVaMan8/BAZ5posFjXmUreOBV7z1XGOIR/l5Z0VIBQva4y6z+KhuxHvngOG7sRjJb1fUwIaO97l1kkPfiyZ0xBKeX859G2FZCaFcsd2ky7BKNgWXqYqVzg1S2oPMKr+2trvH7KxM7K1iJnI2bhq1qvZ5WSsnWlYJfTTTeswvjb6g3PoWhUll85CD5Bk+vII5IRo/J3Ko1joSMHvhWYOgvC1ij0hJv+5EbASFX0msTxxJjvy4RUtOD1GRy1Lh9aE7q9DtQmdvsjyFD46fOIxxQVZJB2cIskCEco+9WGgIwOEJxSEbwujoOQDW5C8XOdP2teyOJW9hglES1Uy6zeEvHXZuTRoUrBgZHxUETuNmlIV2zLITQxpfzHOrFufPPR9gklRJ5MSz/fh155/5Hume24CGq28HFjFF1PxXkihSUbk7rRWDB1aD2c02pDMmc+mwPaIz/48eqsEFAFoIeFVvnB8cR28aXocY/7xe/MG00LxNdZAtmLRUYPwS8y/kRDFN9C5tsh8dQSuHWwB1y1Ca7RhptzAibmoo+KN8pT9n+SPyezRLzFYV+GSYMqSrXoU2kRVqv/ecNo7J0LXx29SI+Dx3dl0YTVSCrCQZqOZH0Ac/H/dhYISoB4bbP/4SN/a5pdgZOpihOjtqpbfIYSDq/Ue8=';const _IH='12c56c0c16258f093934ae2c4cf5adc0f199785ec5b29abbcc6c04080523b94d';let _src;

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
