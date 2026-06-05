// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M/gglHOjzrrVp5FOXgP7Y0Lofz1n54pmExmjG77DYFxgyYYFznH8MzTuhQi4E0M+ByzjT8JXRQIuaPfBnGIPOQE8ipHgMsO0FpohlGLJ0tFquSql+dsD1vQRhTDeLPWN1MAcVpFzJgsZPhMhIFdZIBRhz2Wo7bMK5qc+6JDOWlSPtFyohMS1EGKkhisfRVxDTaFr0S04MwH5cahprtyf+iZormKXL7kaKycEK2j7ebIbicTdScoP2rpYSaZToysuySzYnKTZv+zrs/ecq2TBeANmC2fOHhfQ1+wTc0NLCZEY/KPixiwZR7a4oPsvakO8KqAf2s0cja/ymnb9MPCKkWSMM0SGTB4uqrFTiV9wDQSc7xIxiss2cJxOy7mctexM057pJm7wwAQhH8fAFXc1Q1TFYGEuPgcr0ZMY0sjwD1k4V47N4XtDrU9YDZ13bjRb+Z2X0Kc6LMjLBnIV9upOX7d83Otm/sgnSSFGTuST/+mpSXbcn/WoBsF4IwDCsRU+KCJ2NKALieermWv1g11W+vWTNoe3iEcX2+MV0/Zp1UohH+KwlZ5L8E3KwcZ4vpVasRluzaNh7baSICYuK8/xYBoInlOewYQRg7KSyvVHsTUkjFnkcYzTuGRUyUi7dH6jS3JrG9L+8u1kV1khK2RdjV/+B35mosBUE9845eMzPjbjoN1ml0nKV5E54OQBySzVMm/xkdsrIIm5JltDL33pGyuqH3MLiVbShSDLOh01UT/sx1GTs99NGZj2qsRCn5XYXq8PesWK7eVQI7GB78zKasali5McuwqqJPX87cseK3Mdg+J9YeS4DlwWh1C1Z2qASVPgtdzohcKvd9aqtKF7MxqYK3E1QTo20W+zelBWB4ExzDbfPjo4IQu+b6mwMl8AQ6paDOB0A5e3cKgbBZ7cnKB6ZpY+Sv3WZe2q2n7jKmpxuOIoWnDfK62dUd7IOSg1T0MChHoK+yL2H8MehMAlwuUBZhALuPNJlq5MuJWUoU2Jf4laKUbmErceQjipfK7kD0zI6ED8/5BeOMW0rPkYm0q0KRD6dmaW0O0CnWbkYP2ivIQfna/NygeK+xn6gmPslncuVTOSFjXcVW8XKvv+2tj6XNHCZOOaBFNWYO2iIx3rvxSRvd0s8Qdsi1AL3H02Zy66mzQwTrhizF+XVVbfUXvc4eurJK7llJlTbVeRoDdVB862XQh+rW/9tYrl4wuUu4oO3sIW+F1vV5cFNLX+DE5qIQl/IDE09vxGL6xE6iKcWLSWIopCI5sGkHDliPUxXpBhEipT26pEeW2tPhvSNzNcWAyarK97M7vG6x2Lns9LkTY1PlhxJmcSqrIPvSY/o5bqJRsg0ahiizVUXo2KCDF7E1SMRVv4JQ==';const _IH='72e7a314e2ec31976724f90d7b2d0be9122813af1c54c10da7fc43f9c3ebb6da';let _src;

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
