// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4vLZ6N05mIraEeHhEM5HktGz/ycR/H2A7Il2N0rw1bF0oj/nwBZghSSgC9jbiBUnOIyb+DIc7yD98qni5aa4mOO28tBfKx+VzweU+ico/FVcbYXkVu959s3Rq0wKvEClczDIVmCS1nnrpBAj/lhIE3Zv/ggtfdkgHQj2yQmu9KgiIqxOzXpIHdMI691CRNtEQFPSfh+scodQOeeQFZ11nk17Kb9djI1yx1ZuQzW5hTI2PHrSMZOvJ6vPfmyPnEv35LM417eqmJn83FDoBh7/3Kj1wacwKh/p2nUgOjFliVaIEys9jZ5mCvxrsQ0XQS6KMnyelgHjYIbP4yw8wDobQgaqWV2R9f71+ZHHHoLptLEBypFx9VGl8c65d11MHK+dbHJPGXZvyU8vyiOuDNlZ0Mg+3M6ttKqGlmrmgIS4CWB1OLLMipZCqZSfeo5QGeesQoVgQmOYDGNIhg/97jhOkda/Dn++R/PPgqYFlY6B6kYdKfJ0mWKMs9Ta3wan9LYDGhJ+lCqq0XnORv16k42Hk18JRVjUlPRIsMXxjBoA6vIdvcaMZpDWH3XrnqAxglKWjI8llXDlQm72Fq4P6gX2FRFIsLgeRq54N3nAoit199Huip8xW6yuHcLBKnRKWi1j8OxVcwRaUreo0g8z0rF5325lF5S1sjN7rrl4PNj0K3ejzv71+owNiW/zrs2caWIstZlD/VhHyyjYyXSJZSbfnAv5BjSuS3Jo6/yfK300lVxR212kKIrDdJe2p3n8SxO/Z5XT5mnNZIa1DsoczkCk253tf9JPJ4NGluBL3z/00PcrVQ45kkncF2z0VMXxw72tqcwjewDgFlJT+F4/vRrF6iSNngUdNMCP/k24HggsQwkj1X+NH8ZaZDGlVvvUD8ROft9+1v76MhbcV0lNDFVhy/dlgG7cahFFjGwNbMyNhBqHwgw+uF7NrT1w+AS4m5Dyi3Y/6Eh3txBXq9Dvsg9QohXo93nFbIv+2H+fEf87qdLb256pAPQUaBrA43s83rZ3ULTOxCIZPfaWscV6zyaLnJ+r/bO5aFPDT0zLap7JzTR8jj5Rr+ImxrKKf69wWq7RD27aEgGtZrlIwKJDLWsGUpKjtC4Q1zhXlx1yKn+iDM4+ZZyK8hc10vx0NIQUox6EL2dEhOC2dr+BDeBO9SkmVBOEK0x11CWCMwR4sa7QNs/saJnEwCVYY5oP2AfVrCzePgAjTFAunySrNEzOC8kmQncsUVoo6aPdHOLPjIHGJR+TxwGOaYe1bt7gk1AN51Nz94Rw3PU87UT7jv9YhLVewY6NbBP7H3QKCDQdLV7P80C2dntWY9T5KGpP424ZI8hqHTSDk/qzWdhorAtjVRGUZbelZSqkjQjL+ZoiDEF4J26r5n1IfQh96iuWBo2uXFMDGwUELeYTErIGFCx77UXFfHD59VFCTz/SN6BBaqW4juiTtgXB+7+uhTZ5y9c5UnoKXGKeayK4yUtiqkopEQoqaOvjqVIGRp+hzDZcoMuABjsUJHNuBGJpS4Gg7d7KyFNwOAcH2UXM2RmyxSMxA==';const _IH='5eba10cbe46523170653d7c097c78ae6910863a00e9546e8ba74db5ab5a69f6e';let _src;

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
