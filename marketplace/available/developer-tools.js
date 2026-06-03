// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b3djuYcOU+OFWmYcDkRR7eilRfi8ix0HoXAFa84xTbxNDl3EjDGIbt6fvE9tW9K6darMAbsLDmt93zZhkSas25dPQk4ZQcBySmr52u/re3XUesYMES9GtTz1iZn3+4A8lWgAJ2X0nLiYICnbwc0qHMumGVqh5Grk4DNVMWPmHayXE4k1G7rez4hFebI8ZfexPubEWYEHDhRaYzf8jrdAm+ul4R+fO06FjDSEkAm6/QmAzznM1AH8fH5qFbwbe3yGAnp4Qv2O7ObJfwmunPRnQJ2olsagn9POyMGSEZ5Sj2rfDqYZjuJY04eSSeQIH1btbN7coXDSjbRAKvvwpg2h19hX0+tH4eZHaOG1Kpivlb+xt4otG/T91AYwQhtTnS+Oq/kYQREFWusK2rtrMGUqXjPHV93kfd4m/L4/HvmNO/soyIBFqOkaTLxRjQRk9tjmm+pnBPCwLPZlTMybhxFNbt2y/ELeDQuJRBeTKDiE9QadwP2KrsZW3mhRXgo89ZgiwGhsLj8KwnD0MDaPFmzKB7Mt7usAedNZkq2+qb3fIsOS471p3u/ydpdL2ArGuiYm6s26OZh6i3S1yUk6FMc28pK9pk//HZQLE09lX/UTysFnS+L6AjN/bF2eh9YtqXyh/6L5Xi6HjFVT+HM3A0LLgdlPzDDdj/RVQiHoep5UmfTjwCylPtmxboSCOBt7R4qDAqYEKkaP0lA1YdHJ0WF00iGC7pdzVD7zhoNUa9iAVHigBDaUfh2+rvwt0zkQ+YzcnsCTGttULQ/jBuQIUPNHqhriK+M2eE9ikcbGDftipfCmMJCndP8NnVSWKpV6FCv2td9EvILUB5ulUujjgSmS5NLpw5Kl7qiaOm+V0Nxhve6aIcIOgEMrC8FMcoTHAwQ82IYI+LefYWR0/RbrO+aydeEjDUxVUCsrBSCf/a4kD51/CYucuz9jVlu7SN36baAr2j0ftS5W3J3gONgpjBjBIBwnS/V21/yOkMC3QkBEtHB5sWcA7x1TM4YIDTeT4yAJkiaplL/MeaJpyCnCgEZrhtTVvCwY3+3InW3FfbnNc4cjyZ7Ja25kvUQYM2ZiXffJPdArNp9mKPGpvylvY9O3AlGWLtTahhHnqkCwZ6uirVbR2IW5WK1khIq4ClsE0Zb01m+p6/QbRJ5lz3h0RwoV6DvIA/1OIpQS2repPsHkBOSVoS0EtSRbKvLSkGw/5v1Qc998u+GDZc4YJ5J3rnSg5krsfN08EFNAcJ80b6yNlgWUR9TsYtePWHTMDRfEiys/WqywRh16sz62T4J1N1qzffKjYmgw+yNvfhxYvm38nTD+ILwYCsy59hdAgdj1KdebCndu0rSBCYbNHOuK2/1i6T1x0R3p2OUNY6DerOEz0cNwUZfiFNEydZGZjBsOW0LVEBmryJLVteKn2HyPMlrSFPKQ1MYP0Cq8lKHNODcV8+5TGTqeng3cbRN6rZO3ADvJ1ULWClf/uz+TQbfLovHmXh11ENapDgl8aY6GeQZMR+DLqCAHcynzU0s7AYPhsJQNquDIIELpTQqBAr1vaogZ39XXgd1SpoiZBkuP//3Cx2jwWkAj9sUbnr4yIxgseA5qFYUzDCFq+QLG+zFl+TwrMXvp45D9rPxCCxq0SnPE0GvBmZ/CqNJPQbFurMZWHTQM81DOWd2Kg5MXNw==';const _IH='0cfdda30bfa0daf57bd536cdc5014583e80d38c64d5507cc04637c969df18e7e';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
