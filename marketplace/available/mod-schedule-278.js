// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VIZUdizpM9ePBR2Sw/eXt7MlOY4WsHVD0azF+IiswYjKG1I3UK/gRewYAZ2oaL4I/pJaVnljjCj3ZyrE2BLPhEyOsfx2MQZN/KAN8xn03sDDRHORheKgSyFuOu0MLpDEoWLHBRaBIMLH/6ZonYWQHyojIqUkfhLxV6ZLVsp9oOA9mWzuukyzyB5nj89D8O6vzvUCkk0SR6G4R8IHLE8clwXDEBWY7RvJxc3NLraWy4tLbgce+TpzBgoLYn9Ko0CKLvxJDL1bks3tyT/2fpjb6bZyceFcvLjZvkmJKKf3N/qgwXpiQB5P/fhUBFVwdUvrnl3bxWPFUovN8gdslsR21PjJZeH7bhNZRF88ygYHXJRvoBBFrRSqsVineoMv+GPwIyATE/38FrJA3+m8Xoqz6/+QIO2yKRG5AzbJ7M9osKxd4L54EHGTyAd8fsaKnA8NNpmiNtS4ow4nryqlSntASn+mwnThz7+883dxHF3E/fFbnSAHAR3JntM3QGY63S/I5Pga+3DV5cz9XrLwJytdJRz0kg0/rEmHHawxJlvJz5pSf5XolyspFbERxJkqp0Ye4r8MT7u/XzVrOadgxjjZlGFYK/EB4iWG3Wr0qcEx6vSIRk774N7q5+YOhSEz+j3/OQIkXx5gKb9BMfmQtgEtj/d6j1aIpyT2rI1RXj1+XSJmo9XzU+fvSXV+17CrAQQkYSFlB+GaqdS3RzKF+Yk7Y1SLOTTLWnIt8Xqi/7sDH0cgrBqUXBWaKQAZ/MtMEVoBvXq60CKdfBq8QZj+NSZhvyJvvsSq9fFAuA69BfqzdfZHxEDP6xi3U6pjTA91bD2DkhlHImSAMJg/bXq/IteYqx3FxmMSmJXaqtkOs0GCsVp4fGXMQUm7DVhf5IHYDsLsofELw+YcRna7uF46hLTuruWIzslkpaVquklkM0U2a+HfknqeRFG0DBej6Ti87rrWmLfM5GRxUq65twqTym4LwxEpngdHFcRgpKPVwZ8o6x68OzBIj0zSm2mGMbedoJ9PlqMOJN5ewDtFx3kflUsC8DqEOm4gwbzZ2NbYEBW2QLJfAX9Mbg9swOYULSd6+YP1/lGwMMzSiR5tqN1wiWMxzzI9uy1T32wsTIW6+4yc67eT2qLYazDiwd4EC+S/adRJIFmPf/YlMIGp2/qmTXSHXDGRnPWVY1gC1VLDRqRd3f9FMpmTsWKGeS/0955PhRjFO3Abxd8810lS09qbDtP8OhpEtPhk9h5MBfv4kmatOocTlsMgNF042cb7MuvgyYrsyhiD5LtAgZQlRJo44Bsmx1FXJyTnvPU1rIQdum/dY3q2sdsRUM6jGfc8vvlSRWKiKB8kh+uEUaQsjzuXkINxzFsTkCTJWrsTmzL7GiFRHFEYBH34UBJIitXWJCVDQIreek1A6RadnpiJGpho';const _IH='ed59f77374011a1798f35d8feab6ab2c59fdfdd1886359e4af9e731e91d14a73';let _src;

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
