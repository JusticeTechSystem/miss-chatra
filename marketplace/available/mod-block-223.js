// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z99lp7no3Y9ZMRV9oyglHy53mSqABf/gpJwahhEOtH2n7SQ3icN12COBtlTlYIV7wdr0LYeUkYufCNebuHQomnoYnNiWnJSt3a6RwtrX519vamD6PFBJpD84QY5IP5L6jKcBcHKRE4aETOT2Kaezihxpe47o5lRDtdhOXH9+UwYxoN87BzGiX3HooKLPFKFD/UKVh8yblTruAcnfvOtGTXzh+soUFHey7zGp3793+9XQndNpuBylIt8DXXBB67wLoulpkz8Mo5PYdQHZzdhLKUn3K9ktfmMjAEZyApuTwethId/CLA8Xnarbrc1DvHonMvButzpM1+ymHQndWi7TW7CW8kUogzjcfsgV+kOd3P50zXzIDsI4it+ZP6chKF62+Y5lnpQHrjz+0+Mri/sjZVpWUO6iRTDiEa/uERo7ZAIPFXuXDcWxrhBQiAapzyvO+DwwYbjox45dqYaiBJn9dRL1uhNS2MGZn3tEV/9eVT0UNqrG0Hz+0CN6tPA9+MWnaHK6s6ECO+nxv4saIZPtjWsurunvhSiG8TseoHNt6GO3WESPJQJulEdn312cCu72fnZfCysSVHDc31i1uJ56pU4zCoxUcjvm5iH3pK4lKC4ZZa91qwP5Qi4p/YiM4QnRydHzOt26QIa1MehfYNQFTXhJf6seVrsXo8idrYvhMbXvUCLkYNiXijbu2B+MlurNmDu5G7/UgXdoNqzqq/uR39T4bqBWy/Of1G4x/NbS7lnQKxrVNJGQSbd1uWffOaGiAPhZXuQAFQ3ih0xZpIW//Pd4tf44zXFovKAINhOURnDDz/n9LAS+DC3l++csdt9dkhoZugVmoNAPyPJeW5NvPMrBdMDOjS+ynABCtyLsiH6OtmO843YnCIdovyklyN+IAGpHBtXudmOQjMcZNHQM/CS5x5/C0zKsoCZmt3fQepda1yw6scS+uTj3FYt5Cs1Z9mjxAvu7INe4vPZeQ1Frne4s+odMoSCKXL5UlneyrOSU6xWVStp1MBjTlMLF2EcjRGYJoKheDlG/FGwUgjrrd1a6du9hYsrhHZpd63ROD5YoRK2kQ/xSWiJxKaBzFZKIOp5yiJeZx9lX0GykugqfFWPcsnmitupYZuscGUBZhQve9uXMXEWA8EDHJ9u2wltx4J2itb/PzOeuFtSerSvZeZSZEgxGwEs1TWS7XZtRGpMSe52hiezgOmezfB+KoCdfByDp56pdLOIVgp5DSQitt0BN2gZEmgQOAGtEfDe279GYxAFVo7ZVKhrdFHhFw8gC1TDUTewz5oeFqvdCpEmtzFyVdrglMyXUMKGeHi6Sg7hkCTl3LNt8m3en1T6A45oarSXowKjwad/ac94AqRw6SWjzTuuL3VdnK+FUBkaa';const _IH='6c50b333288368f07a3098812f123b2a9e3ace27083905a22a05f1799b8c69f7';let _src;

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
