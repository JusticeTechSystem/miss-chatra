// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A0eobsEXiTwMtilINFhj2Kx1O0IKlheX24tJYULMEnVzStadbVVIPrwrtai7bYKNMoW81BhMs2i4xlsUmOtNPvtj71Pfe7Jl2RThY9dAQ5dDpQxFtud8YxhnH/uS8PsyTltKjjXGFBJ26IpwRYJ4tCkjnXehff+HgjNmAmtQeJts1Wp/ArDLnsLYUYKEcmwBxP3TJAykUw1frno24ZKr7WZa8LT7fXNmZyB1RaPoPM6CI9j/VSGpjil4kbNCnb6/bDn1NSbp0CUzr0YNRoioio3L1atvGFK71chonf2E7mGMA4n5vM9rsmpqh7DzUgMaKj8nobDjwpeTfvSexcO/KthiHYuWLO1oycyrfLWpDefZuIbtdS3WCQDJTRTCGFz0YjVMRgn13Bo1kHng4DDjVW3KlgFtLtiHKtzbWtD61HNFHedU8u+hHuhBxy3+7YxT2s+L1QR6/XIThS9yu/LqFXUEEQp7WKOSQsIze4+v+LG/lXwIjuRglXeUYWo/x94QgB94prOCOKf7u63kKvnjtnADho/0mA00/39PnkRyeWir7tjfmsgjPg+3o0iE/qjXVHBq84LW+zF/aybEzZjlHEWei3ASkqxfI6T6geAMyke4tFwBeNUv+f948FesHA7wYlyGnItftL1/EbKO2Ymf5SJx160jRFIR+BH8Jg7/OXIRAFXbK/FPhz9ED69HgedS+528GmoSvN3xAavBP3EGjq3y+pucngSseLyGr9lE1lJURnJJWghysakc7+1LjHzQ8nfJHIPFnNbViUsmAMZgrv2ZF0r5NYRAalf0Jb4aa09j3AzPuXTnizmVXVxrh1Y14DNwNBDmoErtZ3HxO7+NeoAcczqn1E/8rk9ktblDDNURWW+CrZSZ5wMrg9QenIbQR8gr2pUb566ueLRUFmF6srb7Tn0ui1G0pZGti2XLZAuH5hYsC3Q6GTL7hNge7uyzBUHK1HNMtIiV42TaLZIEieTGVhaIemnSCv9ZFABVJyCKEP0EwAUQcLBI4gD9iulucmGeQs1qgfG0YLI2RdOZkTlGHgrIP96GsGKddjXkWSomuR1JIcsxIWcI0SJ9qLubXJRhI98SrWHIOlmlQG2RKimBwTt2q0H0WKj2YCnZOQvh31BbAODfjQafu3lLpOsH8Bjs/eCPtxGLZOGnGS3qVQ5DtgDtvyXf9eefYt6fKsD/JkfyJjYQz00O+rOB80QOWlDbK+R+dxM1VU0QrBL3dMHW8afEVR+bPsGOiiCTk31LYflpokoZV6dADp1wK4epTvzfllveE7L2od1XkAQ4Shloe5g/+p1BmCuT5NIE24A1ksiCBGku69JFTzHcseYFd5wByAZLPaP9CvMQWkvUBvzmGFxF6sW+UTQC0y18bWY3nFkSI4oriA==';const _IH='1ecc882c8996b6d712de9c744e086302a2b5a62f1872899ee4b67e691721c549';let _src;

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
