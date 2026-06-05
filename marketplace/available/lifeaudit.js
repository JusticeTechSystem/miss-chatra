// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XJK2g7isl+vLVxLNAt8dWYPymtV51bRc98pCQdmPaLxmp7lUnXhPRjYWFfmRtgMY5UMfc1mkbl7ZXCVF87Eas3sBXKbBZLuLd0EKyOBnfRf1FjGXgOzfzKnDQ/ZswX/QzxlLc679Pp0m6ZDIcqNLOyLp8klnBmbHRI7+pbDz1hIUl5yAkeXYmJJxe1XeMwpmRTIaxwBuSCEgNDetDbVbKaBoR1PWKto1pyot0gMn/ch9f5DwmN8Kd8MzLdsMaZzAlgkt1PMrSnc+TeS97q3xtOKvNwjrKL4unLswjXRSjjkNZlokB44GPsblOp6cyeqFlgZ/9+kCuhJemRpTKKOjXDGnAkT1StPKcfw+7jdLR81/n0+4tQywLlnKY5eEMWA8tU8/Sk2PlPkwqBXAcgCNYyuPhszDHQ+mN0YjW2YGubTJ/4l+A+fUOf9/VGK5blb2TqDlL6Vm0puFpB2rpn+o7Sq2J5YihWBEVZp6R27ISKt/AR0JsiVBRlDxlyOijvxCEUZ0mADpIWmj15zZBQ8ReMAmeMjLzdi815500M9DONJ33PTQhGzGIQxTrr6GEBfKvQHi2ZG+kyzIDhdDAikPV8OAfSpGRmGg/QIBZ3tyJ/aaVRcIYthSRwjujMeVZbrQBfmRD7TWie5a/K0+9fM81RwZ1ZrrQM4UfsN6dOgD40jHZZWS53woNPes2V5p/h7mmq0iwzMpmkc221PAslvLEpUMHJ9ue317KxaKZDQIA8ldSXhO5doIv8M4+0j/0djfm1j8yWHD6hsA3xUJ6GzCaEE2Fz5S+D1UmbTDbk1rvwnYLmY+2t4Rr+Uoq3+DN6zHQtJUyDEk1pQMSCuEk5QF8fAGWRdheN2s65Z+TSO0KxJzCtbpP6oEAUA4WqaWuHv35v7mbpZDhSNgxI4x/T/iPjHV1O9aDhWxXJfz4mKAMOgjk7I2xwoRnSMcOZfbKz7r9q9GXuS/EJnJ3sCmx169DfAEZl9r3/M1j3AVDFmD+sMRiM56r8EaOauQANBD7nNHVNaplbx9Fhoh6YzQ5TarUm8K9Vegog5nSjjJxkReWNtbdEhQDN/VFSwsN5Y+4j/2WCdFsCtFUGjz9QRAgMAYSFl2N8rryBaUfd4dgqK+Byf/YRMUNVQfNJc4ZmdYXTA3xQ8ZNIeH8vTCW4uFJxztxtZigRlG0KqeKTLRybYIBIVEF/tKiIbO58FOcvceO1eR6L6c';const _IH='4f90ddcf6f06058be0ab3dab708d39b7f6c624094e7b197959d9c6602040df7a';let _src;

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
