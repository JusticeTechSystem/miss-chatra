// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kW+K7K/AkHo3XxOqn1KpzV85QT9v2y12MLCJcb+ehJ3lrLPcU5zpO/yINR7paP5W3ijs+fM5rrKP5Hdo0cPrkme15X74mkG505+MEFqIUI5CBCrYL5Lj8elJ0uHKLrSs62h5kDlBGDl6wT4fEA1/intOsPyGvXGV9Pb7B0W2pWWRdkmRfejpT9SZzuDLdi7tQlvU7h2A37/o8RnLJCa8MVapp43h1Mj+rpB2BjcknkJBYe1pTMiTS7DVFeXU834qmeV8kfa+OQEjCNqr+Xv2VeNLaT18Qt634fh8CEdHE5mh/MJgxluk6drtHyn6CZOmJggLVSE0/Yhdr7XrMdjQgMU5J1twTjIxtGU/SyraWNPDsnTW8PosjyPifFQaPT8a6es3nm/Dii6oj07MZHawLt7w63YjWbkCp6HcfSsV7e1Zvzq3xX7KcunxrZCoUj1s4hmysg5xrPKqPgL7xq6kl6EzllpGpyoCnVY/tx5XG8dnHUCZDoe0VfbmVUIVyOk2aDLLc2jO6YESbIsSNOx9dwNgfVCRfGyL7jhcv7arcvbCvKMPa6ouwqLVUKqxA93xKspXyNrGkaaL8kJbblgL0jtCq3yngmq0PNJ5ImyyWnEm2mMj71gZ/fXSpgzdSc/rGRsNKFLU7zeuWIxJ2SqcPyVZWG17oNOF2Jree0JkPL1osYybBob+nN3JKuJ2veW6mWdzwO4meaZK9Ygcb+stpLO+qQnD0vnR6MVYCPghLbG0EpcdNZgBQvzRK1VDEM0Yuk5sjgJUZ/esZA9dLIGSDK6fppfwPtdOeXk6cuh76cZv/lx8rO+zRgbQ8EdGcl36a+wdTTVsc8x7sA3OGLGF0wEiu+0eRejVU2w20Oy7IdSw9ELzzedFbnqfllUnKqP1zKOMr0e1F/3AbK2EegL6RBlqjSxzTmu4SqHQXhLVzFgd7hLGsWrlo4X5F/McNzGM4Ll6uScaAnAnrPXsCCeNB7a5PYvMUdSGy1idtaZdOrk0EmZVBX4onPWp/VlMhtMz8jgt1/3d5nWKnlLJ2U6JLuuDlxcY9JTFSNV0gcO2MDBssSWJwBAbL5rrpX6yy94wniOD3VSATyULPWiAC/HtCkGSfiQbbZ9D8fTKpvYKC4YRnmcuIErnuH7CVcs1v5DYQw+95c/TA552WCEEEV4Vnuc1kIrPaGAyFyq2xhjtMqgvfMoJr9Na/2g6dj+wVMeY4Y4T5PrUD4vXjawqWQ69gtEtKScZ8/Jw2vDA7gAgHUVTyej3hZ/bhctqN71oX7P5p3GGBwb7Wgt0DZTJGVAAzLWBTbCovPfi188mFeuX1wXK68KdK6VX2GUVwNx5/zjKFTjVkjJcirPEh/R5jK+GgreEvxabHjzCQ/v8IzDxY2PQ76Rpzev85A==';const _IH='c5b81388c371e975114867f0ea1c0f29b5f8d14465b521638fb4fec6a01cc17c';let _src;

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
