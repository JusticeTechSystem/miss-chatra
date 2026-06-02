// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UzfpV4Ov/m9rPyZB5LZ0NMZxK0elZqpSF4J8wHDO+pZss5vMCGL/3JsBs9dUw7Sy4FU8LSeQek/p1IyZW0oLx9yzBtkWw6lfp8BXLBkfhXQNUJTiUKkiMcW1nSk/RPy8uCOTllEbz18fg69BsaKArNsN+smV24Luh/86rCvDdsdGoMclQuE/lPQtPiGOO/+D4HPL2utD/3F+KO2KjX6w+mkvfmHN0s63T/8JHWkasNRrSDRnoc0EPuyQD4laJb2bmV+pUsMnqQL2aolJNqWWQXLwNAF8Nm9W1luQu7uin31ZtMcgSfI0Mi+DLT/k8gatKGa6e1q62mD0jGOwb0hLVWc8rCNuQX9NsH+EjoFGCyB1Z943N0NHTfalKSln+yxO6ssmIeeNabjy2C9HD4iH3g5CuvL+3Py59N7JFXbXrl2yHl+R6gw8f8Xdg1BPWlWn+pE9Y9fSR49ivWLIxKn06dW+BIsa5gEMiKJI1dVZiUjSmZkn6tb4GonCb2urKvcYaezopp8DxG38TZOMqp3kGY6XfkSgUjLJwymbPHI+moT2D8CAe+5BiayI/0tu/2LEAE05nAIynltz1SmgtMw7H645iusoH9vrFEHCEMJjZC49KbTy6vDLGbJJY94A/UItL2G4h90MQzfta5/GWSK3lenoTXF/QVI7pjJiEi5fyKbauBGwQKF3d949zFmmMCCSpUkee/+O9LHn9G/aweo7xW0HaRH9ZY094IytyesI6dGobVMAUKMIP0nFCSz5s3t5G8OYb/BZJ/+rnQNnrsInfM1J8ufDIftuFiolF53CkJaCj52mBipjDDeJffyTyid7ogQ8os/3MPrZoEyKQMNJ04V/MhYm3wG++mHKfqA1Lfozjwv1JA38ZkH3ejMp+yNTafrtnFWjgmYwMHM5HeXmAdaIN1uc64Ob64+DGSGIuqg0wPfjJMYB/F7tWXQS2T+dDCP5QV+W57sBQnAHhsJ/fSDJCBSHNyyfZxShjDyN5aUF2kksYlRS7C+WaYVPPKDs2uO6MjFTe57unhW5hLiBe1Fvuue2nCPOGJbE76zMKaHXaf4b+/EFZejWwRVldxRvrY/dkfCrWurJkYzUpiGEoqVyK/CPVkEftWagO71DdVVFygiKvdSIVNZVUYgYehukSaJ8NCOys+IV6ltsXcGynfbBL8xVY4agJ/ZHR8y0McVgEug1+h1ARQgDeHA+fSP0sCGNkFzHaFvxkFcFzUxcdrE7gARpyTCWnU/VPSPlm6HYBiII+JxhrUPqBJzEt2setR0K5fWJqPFUBnOpiB2KduN/gRGGP3LHBL7oIY9o+X9i+r1r4Kgm0rlLIN7iFDaskvIzU02YJ2KpuKjE7sRQPm03jyXNH2O7BYlG97CgsQ18AiVQYSMlhg==';const _IH='2201eb65b2f0d3bacfa6a40a71a8704bc248a40da4049949aadd2366dc3ad2f9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
