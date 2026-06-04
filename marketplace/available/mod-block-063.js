// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6/0jKJyRLk4WHfFYnRYS3k4GoTTlrdmd447YB9bvApShYfNGlDIDPMXC6vl1Rm23bK17qLs7kFuB0eFJLtWlxXFRJIa2KGGXOKEnxkcZKOSy0VChZUJjjcdMvpkphrNEtClucXC8ItHu0PKSRQf+1hFkd4gmpHGaZEj6p14g/Faf+0CKSSB9pq7E/var+NOW17D/B7X9AZFmZEG2Y7AxoahGfmfDmmqan5v/fnDoIrtFbbKPzDCtz8ljFpnIu0R2+AWbRaFpe/Wxz22y/S54GqDmRuul0RhHdOMtGMKOO4yhuNNfg3ZxYCuzvRIM4RsqJrl98wAG6Jg4A+tPqw1IDuP78ttZByY3E5w/GeELaWmoaePzsY0jQJMIjLyHgYSLCgegMHrf/wrN45wA/fC8ilEnGMyoDyFC25vWQM0tt7rx0k41t/i33+rkNSIyoKja44UXwBOWD1+v+yaAOGS40bJKtLP0565Jb6+JMnAHZA+afiFFBGm1PX+dYuWykMd68gVVDFBkm0kM/LRb4Orye+nXh2S6Bs40oW/q5UPFbRFkZ1Ns7uaGODAXPIC7Jj2TTrZLBriDwVFpK/jUI40lL5fu9lu8yx7Vc1oeZ/Pqk54dZGrBgGyGcnzvubB3aFJb3a+I+YOzbOCCXuhmrG7YlPpiDvWoYgCEL11+AxDAm21S2B43RPn1ylCrY04dEeWAyw6UhNGLN2FMtDccwZBDm0E4V7GYPCZcthjU9dLPkBf4xyzuPLcyrIqgZH0qs75b8Q3TE2OPmaNNJ6uB31nmwedY/FmK1/n0ls5SjpWz4gIb/i8epL49HTTVubau7XF7T26BCeRYGMcJrm465u67ZwC1M27oZxsC0Tu8pRHOUlV7Idmq/KplXf4IvXYNszPTEX2FKT+glr7obx3PbchfSAXU4sMtwVbhptQQA1GVy2OhllPpQBg4E9999AJzRszyHGcuAY5hJ7kkDVaddIaFfDJLMEspFBbJ8TYj21e5Aqh8nlUH/LOnjPQVcgn1oHFoPOxC1zIf6lQlQ8XLeob8ZcJxSLIATB/rDDbxUu7jQ8tCsgS9m2qOBFs8+oKwc9IO4LBTvjWJCiEebvM9zXvRGilatbTAmBpLJxM/2OKOwGauda7WNQOOlxcfsz+uVEBJqQxVumPfrwLaGXviFw+F1XLzVuebpsjJD9ZNTkCSAQfAEovuoTqMbWRNUSJ1tgaTOurF4Xyuw8nNhQAUkxoqpScOiVd4uJpvGTo4nyCi9FWOfLsRk3trd+oZRECIWvfandLAouhzL8TnR4dq9ynoQ4lpG/i/K3gzTNQ9BM/sPrdmf9TDBl6xPaTj477rbtrvkYYTKDmeAWxKtpHQI8Ft+EEEIKkphAzkVQ==';const _IH='fde82226d8d6575c97ad860a97ba0b1d2318f880f0c78fb845ad0da15e66ee11';let _src;

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
