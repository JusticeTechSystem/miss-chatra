// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2XQi1swtsYvvQTBH808NxUe4h56mqzswOvANe21+40EQPWnv5rFNPft5ELo/H6gLa8A0iQHKTUgeH9U5LVp3Zq1msv8q5G52pXdMraBe7PP/IXVBkjSXKtUzdO800zaeMZB3HS93w5VhpcmnarUNoo+/JrvuOIAN/VVxvmPmVHsXufbCt8H8APLdyk752nHd3RBVk3RSUtkv1oXwA/7c0aPEGgSwByTcGZbP1osMJy75//w+rdzYSGWswPxZN/UrhcIFk5u45iI816GPAQibLajd/uk9EG6dqv2Dwdv6kvNulWd/wgqlE7ASRU9w5CJn3JCCCzFbqr2q9YFVtr1KYdceXnbXPlleU/Of3UJ46Au2mB163WQyo7XC+RcZBB64FYUYcTMx+kzQjij32IZCWfSeexW9TPSXY4e6dMvtxqmQWMvHPa7hKofmEug0TGOmiP+da+ElDomvxH2bpaeIKhwht0rkWY+MgWk6hMGGoTx0to4bXIVrB9snsBLyhkYFPSJx/3JFa+eYSQuGYx5vNB3bHB04FGPHVTRGN274iesT/eof2K3mWFOb3CWQqCRscKUkLVvaQzM2fVOyiFHHjj9H8ECbZn2XZSdOTbloKtm4xJtrO1HhO3iL7AQSdKa8Xvcd6kISpVQS+bysz+iKzi7WgcWxwLHtan/xKR0aphiJuskjz36saVBF7Td27wJheI24p3TQgy2oioP/fsgjeTf53LA3asa66vHNefXiaZ9LiHEII0vLvCo9JumBb5+wQK1UGIK5/Pjes+xC1kp4590v1WEUsyzwi+ieV9nYlsaRdyoHxrT0cvRbRUYYsiRBOywZPothfsnOQh5op2rCTca5BpzXE8h879vEJXrNCHxXQqri2QxoYIBCYjXLrRypBBpLnepHFoluFnsjQzbUovizKGHhpY7QxHIn6D5aSO4OqJq+yK4VpPkrmQS0RzSXtyg7yJvajqnkQp3pUYipHIY5picQoqLd5E5EEwYRh2/AL8yckHL1LoOtgfUoUfcItXCmEnqkA6cMkt+qvsxVPIj/hSFjNi+LaOJgg40MNFmn4UqHwDMuY9DJGCyUEH9NDKZXzclL869ZxRHrl4TrIn1Anot6PxK+cs8BezzHoKcozPbTZq3PGBFP4w2dykSmZ5CI/pXiQ1gn3mZkBk7r+iq8hUhWpmq72+F8VTuYMOLrFt9tmR0P9/gAA+z3uJOjxHTXFHzNGRoReEojkKR/IBDS/Sn0uPAGf3OVQJ7IRQ8+MFHTkPD6NZiDP/HX41m4KRwU530dDrMe2QXe719ggBIMl6mMmhQt68OCnripOJaUJ6oOwghDOyoaZMFxZeFJDtKsFR2tcLmYMh/GEEZP3CNrfVNIvjjtzSrx923uw==';const _IH='22ab8721e447e20d0bd92805acbbd4c296371a477eb26695a7fa0769119aa3a0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
