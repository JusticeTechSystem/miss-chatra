// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tzXv4TFDP4pEdu0Orm3m7QHwS5wlsJF4JDDD43WUbDVN3CqG+nRB1yIC4MR3qNtPiOZJBFLUnj7GGy1HbwkobzplFerEwpAZoagEALBVTCsktm3RmtDjxVo9qCl5yBrZq25bzVxkI3tWB8opsy3hXrUd7rbL6PDoBbrwz5bkwSrFsifx0ZrIdRl2wGacPIMhlfQl2xoyHyG6h7m3A0jhg3CgkQkeOoM0A6leX+KkZtA3cPGFqLhB49J4/cKbG2h3GntA2VpWY+Mf5btfzKVYhiqn9jfB/Lfhw8S97+Rl3EljSrZhJREKEaIXLPqYCqFurIiF7ysNqv8cjCgEQVKxpubTa+Dq5TGbB8pSagEL0eyzIUsnVREP+2D5HEsSUSYX1mlM+pkiDJeNm3280OIoHAnspkBLH1/Ju2ri3MTtGqO75NVike3r0SPOmmHRjxyo6ub01ziyc8kANhsLUyLGDDtAdV2xH2KPa6EOBySZN6oo2XRlEY43mEXzJ0Zy4VQ5Z7Iop2KbY6RKYgNZlPWI92MsGrUcMel2plplS3fzERyjZWVMdrg9Qbx4idmt+Y3dmRRrAjBb2bpDYyc2UseYEeKoj+ZcFkPdnIUhv0EAJfaPrIQYl+vDvkNmpUkNEhXZ8zO8lxY8di556k4NYk48sfRAuDjmOw/Tj/HD82b1q7kQwlP0aKDN72WppFZ2/ZvhsQkADaZRHmRtqyz4wlJD1L6n5xrEMnwo31x7rZMoAC2mOmRI0cy6vpWSetC8T2cHpPfGpGuNAWeyJPXKGyLwQBPtdJBLQLs84IUk9+pLKyb30QK+222fvCNZjqAz+GDadk3gfBv2KJLp0TLdSn6+iynMIvCUS4inb+fTy529ZsuffM6OqmQkbWECrdnuE6vFZ6NBQNEU/O0lJiz8zbCnol3S0dX0G6KkPh063WG4A/qcrIscXjoDn2VpLgiGLPdo8pCD8TEajws5o9GX7MNItz8INPt7BZtdNCXpdx9Cw5mdTJ2PkELjdBjJD3eSkKOs6/Whz9Of/nPX28OGrwU3dz6PMZ3J1RJPmL3dZky9k1Ei3RO3EDC/l10Pc/r4wepSNO3ZE5YOWAE586HVnV+RibZxoa/K3ENeJrPp1Eg9sXn/hhJaRz8d19Xgf63laAaK8YcIzlPUnZGm0zWDZXQq8QfsHsjFBUjR2uMh7PrTB/+cGXEHLKHacbDUAneqJ2cfZzeutsD5tSKwZC1esbtNNfXsETsW';const _IH='a596662ba6fe9ad5674c044f50671a65139d5e4c417b2675ba36e407af7c99c9';let _src;

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
