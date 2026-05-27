// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PNtLLAeQVFzyNf2G54bjZ2+rVWZ9h16RQ4IEspm7g8hF7yazQT4G5JeYhR5IblJtpPMe2T5PU+KAV+C4vw5F2tanIsXIX1zsmdbMEM5XoU5S4RV2VGNP6dXZDv/N2AbL6kNx+HV2sbzftxfjpMyb58eOV760w66N2QUgWIMEAb5Jz4FJuVjSFoOWiZEftxEz9JN3TBf2hIEIDiWCDFOpLPvUqjPCwy8hp/wSorApMiFXvJx0+jGgJjXOyzwpjCP4+ZUYo6CupLXs386bn/qx2Tpc8SmfcukYefm/Nq5Fjkem6fUa9bXJ8Wnz4loEQg7sGmHyvt9KiViUOyKuJ9JnWBZjRIIAgmOu/3J6KpDq50B1QKUF9RQ9HSSm7BRKxm/gxlICEG9Y8yohXlpi0UXNjp6r/DYR+cy6ShsGWn1rtOC91lWEfX8OoDaxoBOB/xjUjbcPjzDdYtt9lxc9LdV5aB1rQOjNf6skW9//vCXGZkpth46f9XoqZaKMa1/4ch0txylRMdg5nOPjLD1VO9l6tnI8AJLm3ApKE3ReLX6VnAHjDExSqr8pFyCLUG4Pn6wArnZTa5dVb5KcSYTNW+j2MRpidJPgHW4v5REVBw21I95uXnt/lbK9gal+d+V9Z97QSfM+sH13M/ulB+8At3pvKMfNKuXQLigsyd+y8LwrcBe0ZDjVyvyL40mpPE7w83xZlf5CHZ/h0bFcR5q4uOHLevZVsrifY0dFyGTCXOOwMuLTKITHXeBKK5VTDmd5kG5T2HLRPRdyUMLsZ0cC1tCAl2DOizKfyWs10V1tt8/E1GFxMvtbh1DPaXxweQZIGD9uubP9Muy3VQX4diyL8WfbEzQdm5DD7pWheOyUJXP4cOZ8c6fI+SGygWjYw+uCMph+0EPeYwxh8nxSBtBWKs1JpTCIr8nuAdsYjC2cUemoYJRbjEHxXRJ82gbcnk3Ufk3xp4ZBMRdZKrXRK15XPk0k6gdzH7l4NLaIiH5Xja5HwXyVDbk5KM2ufO1z5D7kDolkKcoyRmJe2hVLVACyP7zAOr6IwAr28kZ07vxhrOJrpXFKWUlxlnqeJucp0Mx+oyLV7qK/lV/mKXNKmCYC+TFjxSOTnsvp/FE5JeK1U0GTZzjmiEm7sr8b1mflt/D7IjeD4y4iMqRkbsnwX2EgRYb5MokeT1+DcorwZnJqFz3VIJ0TTI3A0dThj69YIx6oAr0DJf1E3xnyl86XAqY+HJqqJm9UY5aDTcwGZB+HzOqF5lB1Zx/Fjq+Q+JsBRXUvSjgErmCPI0ArX0va0sbudJTTFDTEgTRTmS4QaVoZj6iHXeh+jV11jw5I1v3hCedhxBn4MXtBS+Gv8PEhSw==';const _IH='f28d29cc0b80fdfbfdd04895d4f005f002be2ef11773f3754954355e313347f3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
