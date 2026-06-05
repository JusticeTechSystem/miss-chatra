// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F/JChsuJgo+LctJhzOa4K4Zh4p6rhqBsdQ0BuXq38+p7rUR2CK3tAzdl1KHfTtUoemUhYp5c3mapQUlarqnG68yvA6B9D+opFOHC2pAO7xL4PCZxU3rB3F6EEDibLqz1iCG8qYn18qLXu44QPoZJ5xf0RplExS4KIFOO1PEmMXkEB4+lgxop2f+DwqtAE8CTggpvnDQ4JppfFJAVh1w9V271xES1Lzp5vPSVQiDjIYy32uPV8jewQTML8kQLUAzgdK9AFFqIxkf+EH5B+cLNp/6atXdz02ABqKtEqvgwMvcqFIj/8cPHsRH22wdS4b7A3VuLqWlOO/0PfZhY2hiMNEzlwq1eNkPA0uADsonyLkTvRpTr+44leS6P7FS8R+gtLTQ5haOrIpBXxcHnkoFmLXCT+/O4+CvPJ/+a5aZNYssC2OumgNFqCQIiUhbRUYtrZjDH0Mp7CR9pjQj1jg17MOsV7vZyIWcDICA+jyIS6GwZonxs1x5iw3JISir6rAVqZVX3lrLf/Pr/VUaEhUNcvCmELXvJak6fe+kkBLDMJyRKMkHxkEn7SNNU2hiTOZd/flL/zbtgrh6LIwS0A1udZzJc++ENPhlvWP+Qye4l3dU6iK9pJNv3s6UknPXig5Zmiw0D0ckkErlo0ICFSFKk3uJV0/st6D8VW9Q0cpoZ8uaZVKYNVZ9Aqs5Ur9tzT4Fmih/1NhlIG1J2vNu7b/KXYD38lzc9IlzR6DINnCdec2TvHna7Ijiu80BreijaKpAUbmnjclX8HMsg6yhfmQvaYoqL5Ivt2DgwWkQiJw4615qMRZBFX8zvGTDzocWaX1g3wE4rQKF9OVcwEwRFjMebZTRy5GG8UnuAA8+rULKuaemAIum2NVduPNcysm+iuNO+35yGbp1GYAWInTjqPlzmgfedjpjLI+nEb1AuTDEUE3nodrk1//YXPKKJX3/6Bv+HdvnXxs4Pn318Y733UHR/wumNHq+Ti2pyOYgYZ3K4N7Rt0DPkjmbV4VVg6bZU3o1twlCWM2tZrFKQx7lPApbzvaevuA3C0BWjtIVob/f15cCc+TVlKEhJc5wrwLJ2B43Y49sx3Lvzw+65Z29Wznsrr9OaudAmvfyqboawkUVdPfwDcLl79bgi8WRZPVw5EtZ9opndFAgraGVUo7rylsfLBV0jRWYhLYCTQCAs3Mr5GrjOvjNLj2CR7CTteCEFvi9wIVPQaLKLZGcpefyQl//tt1OgdRk6IDPQL/BZykezd7XOxWFAZ/1bx8GzCxeMicGAFEGGPfeUvzFw1qHitvS6XZYTJkr5d0++O1MajVm0Z/4ZO+nu+z4z3k99kc6I1TxMHsAVvYOqKpCgkN6OIHTCLLBmeIEurePH5NBvDb/x';const _IH='4c8caa3b3f6c817b062bce9c8954f1fe21be7cad2043f9a146ce693d9aa89401';let _src;

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
