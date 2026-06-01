// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxwOoZH0LhaAdDErcffT7iDCbxxgSOoGvhcK/stC3uT39HnpLvlrmo9SwB65cw09/yeIpY2bNyqDeP8ZqwmKCWPacusUXV2yMOZW6xL1Er5Ad2gavpW/Y1ARsOKX8BoXuWrVCrWNo1PeO8YZYmsmfmgXv+1pWfstimHNps4o0XtEew0XSNHViUTizmJlPmthsNIGqCc1KgzbnzYOWeLXbfHdCLFyBn6UhNa6cQYSbV/1giohgbi/25XqxWufPhEvv9rqMbMUyYdufbGr41NfIdU1VSkVmnlzRvk8Z2/OGVv4IYuRrMrwtlJi6pHWfXTpTkP3LktuQwAf9UBGGhm0eiEr6tNWTCiG0fh8MmfmdpwNHyOdof612xiUkYBldPe8gkNvuRMLXfHCC5HEAPElFLaM/fApPJemLpowr3isMqToNUoSF/ev0X/PMyLV7gEqnp3ng7jNyaxIBj9qq8HskU4BKsfjfl+D4qG8/I63ZjJDcvtX6c20FZr2phpGzlaXYPwSZzM1f7HBv51rVJrfgNGKKdNrhJ8DGI+1ggJPm8YHJjrzBXIJlHkvzY/SIn+lGGGi8k/1npfByTKHxZ6XqtA/O1h0RPgtmdxYs81t7XYaw+MxTuvozN9VBm/LCC2Q41GbpIrHg8U+UA9Nt5VNaH7iFEeEDVMfUtKkl8V7llZrB2TU8mM6kQ9HbP0XjYzUDxoxTDSYxyGSLncCfttSnl4sNUtlwYzXafbcW1rV3d8xyc6IExMBY2Hdii0yLVRAXON2F2bWs87VYpywTMF5Tt+hgW8q8t01wNHXdDiKX0kRDjkt6sCBGGh4w2HP9McHSCEpSq8A5wCIjgz8xlX7J0dVCA8qNv8PGlQOQdWHzHgIE4gpfDDf2NF6cVKPnKL9jXz3++eUgt1FpZjWlNvNIlil4laMggUpSUOJPfPnA9U4exUd177BUMeh6UIvaapH+PMTrLrqTo/mMxYbXXYytM8tORi+iPuuhe71XqRVG9dLDi3IfdYeLnRoGMlpf35xCB0Fcv8iUS01u4/qiWCi7U5hqA==';const _IH='cf605ef5f0a7736d8b3d05d8d2a7c655f66127e074bd23d012c176e0bdf58110';let _src;

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
