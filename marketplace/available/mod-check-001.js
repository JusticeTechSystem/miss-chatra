// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PflaTdWS2sz1vY8rAZ1xxGhXeiPRxjWzQizeSZmC7JfrdywSY1AJw3gTbX5bVqEzTnFgxGbhT4XJpZpK2GyB3kOKHcS7xkugjyyJ65MXxANunyGQjdZ77FPyxwgERaszZJMsGljDCn9aZTxtFg7b2vOoogSzVr/d2CJo3GBX6/pyln3BTUE/8LLk3tW4Z3O0uTN0i77NhkiZvnCZ9ORiHj2dg59KSfVSTweLmPdQI5R+JPdgJlsJXu8NAdbILu3fklkVg8jGf4WcfUrgELbHBQSeCykf4UTfB6Cf/AivBG2SvOY75QjItj/2QLHYUKNgoY8dmKaa8LmRY+lV7NhpuDxd32tnF7u6ljRXYqPfwxn785U++/m6xCMePJOVl2OyeE2QftVWkO30qFi0z7N03Rstqs908ftQZ1A7PRwVaQSF/gP8ufZM8pSaYY6pEeqBy/qcRG6J5MhSCdy/8Femq8QvJ2v99g20GbgcUqKWkj9mRhYQS5JuGaXLSXiuaeZl2LyYNM2GaCOJkjZdUOsv1vp+KtBJDAIJi/Kz/wolDBesr23OgDdllhf23rUFNXl/uXmEkuJlHMDdAIV4aYbU7Qzb6m9uxNf3jAqSriTAcVneSoiMJu1Q+x+Q58wvZajolVE89vFMSAqHMiX2J+AQUwSXDhIZYtk9hK/80bqXvSp95xTAgQybOO1PpNOVPr8N/zyUyZYEf2I5dbKqZvo7DoNObVlGPVYydMbCLc0DvVKlngQ8iF/7mFVJlmSPsvOxOu+cGJxZ3t1xkrPLLvFul9Yjx/WUsZJP4qmihgdQE1O/7JlbPn22e4DEvCYDjQQz2vOXKqXONXURbKfPyjcoJ/XkGow6ZaKmAj9hKKn9dwHWMnyUsozQslfs4vcbjxDmTyKoifX7tGmlyEuToRi/i4Xa8cHnPbKLWMe/Jp6G8fsG2NwvGZIapuSRyN1qvVtt7ER0hqsQtPDsLqa20Xv2hYT5HD5ScYR2ZxNBRoXCYjTn2ZEd3F/1lIaGRLyZwTXfVyPH50eMk3R6AyALOv0avmUoDH5LgvnXg4RpyDPXfLIL0G8t/H/SDQJZPHxy/9qTM9VVaZm7sM/lk6WEg2ig4s2Z34op6B1GYXDlR4+ckQC0id4Qr33RPqqbSWL2DczVR88Vzl0VbhPLpXjJk3IaMkGuUwQt8ULV9wmbSAlMuESK8GYmLzawnuMRRPzma6b/IkLMmMCIOFPMmzUyRprP/3XiPOdxCEaY9hfsrDs1wuuOea2nMtrFjzK0iXBQ6MZ1kfvO1SucpJeVpxOD2VHSLOBMqnZ+OtaABT/KWDN802d2WIRA/Vw9L/82iif61RpJ2R/DdkAPnhLM1hP1gKos0+m+gKk=';const _IH='7ae06009725e2dc5d176945fad9ddd18edc2a67c13792bac81d4a2fa45f7fb97';let _src;

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
