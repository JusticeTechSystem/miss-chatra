// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw3LN61mERS5rUMwioLUIZsmY1pVbLZpcwracU5+HK0JScMsN/L1gYw2BaEXZ/sKSqsXZ0m4vpjgbit9nnDifGDiUDFXulgaB9dgwiFWZKotVRVnBCNcomaOkdUNTkEKvUirMQUgZ9BDkDEW4n4gRMbYA8Y8tBsHi7srh6u5tbzqTPqf9Zwww297UbiMXN3Y/d6QRdVHyXe1B5ndFWNUY9Ta34jaEoj9mh0BhLhXntA/okI5x3HZxNHC9QM9E6t4lXEP3VCqfGkGAtGLq3BA6QRPPIob/ilhOsAMOnANOMYMlYMTOhaoBfLhwMtUUIEkPb9BjcLu5aJihyyGaBJGYzjIh2EgA+fSQwKSIUOJvkBj0ATO5NY7MLCMk0cY0Lhdn1eLv7ADD0EW5XhnQZMm919yJ8s3jPh//IoGoC8UtDNyF6y8GTOjiknXnyTtvKS3ju4xE35hWCMvYAZKgFrSGV4ztlu8M9mxNmgEsmaZrERgqGH3ezji7nOzl+I+iP4IidxD/pcWfsfQz/Y4iGOvzoOr81oyRVad5D5/tiQTuCPycRw3BY5pKYzy57Dof6hRd89qWGaUHEedT6pVMitBFW0BQw6wuO6xdY3PEMk+tIXk1JTm3AXAaIM2pUtdKIPnlWvG64qsnc88ygSdHr/PhI6DBrwNa5xHMBgwxGutSiE75FBD1vG0FzrFElXCIUSFuy1FK0BPnr4fJAEhQC4XhBunVvJXu22jRcinNLouqhaqhaxQXuDzZ832fFlINooP+7E5mJnirynevup0rYpbUVorEXd4M2sB01zHKlkADkk3cgx7+ggc30HQ599iEpZ3ro0rvjHAzUqH65W1o3Ho8fTqfRhtD50/EGtTP5CS0HAuSK5ne4ZcDlyarcrBLBJsZiQYurvxnC87UBLA93l6FiVHiTRKO/mlsTDiN5mVs2wajrRXoMWyvQPh3xI1qxqmg/pfW7giU+viB/aZF1OwH/R/keL7DXvRwEKMTBjeRdkjKmK7iJ23IW6mxDxTfcfye2pMz8VpNJ4crNFIexNi5b/ca0DFrX69h0LG7JQ2LKOgaw5qcULsFAuJijcW0JEhGCQGZ53JvHDVynLBa0OqlAgMGoSFm3/ZJj5UzlrP4i9WkZLRqRbWo0+m7Ntx/gaKu2IXWAj2+sJyeJCOYfRkZ9YH2B59n6d/oQ4xTshCT+EN8GBjNBHZFNdrkqq8o2nKvS5uiPuxAvU711rqMxrIG1U=';const _IH='ce0df586c072b8120425a72a8b2a21ffd5a5b29c173dc2e74d2048cc1b189151';let _src;

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
