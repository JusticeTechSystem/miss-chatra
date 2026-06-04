// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L2uHflNHG58tRgr9zkHvmQkET8b66z7u5Ij5pMN/J54nyioZch9meNJ2d3R/LmIMhapEVBxj96zKqt534nq8bsd1VI/HG6IsxhjyTd5SUB+39bgYiwNdEzvMRzbWkFQntULcoAFvsTlbEXCUALvQWEH3i7+z3lmvsRRKg4lGV/DyS+ckJ73emd8QRnYdAqBSEeznQfXiv1OAJzJ4yxVyh9c6+sPQ+LWsC9toSenT/XyeY2vFPLZ5F1IEXLFvYUf1w4MXHZS/KibztV65eVl0TOqJ0l6v4P70GNGEn5jWgv1r2Yk+YD5OYO0mQxY0t8qnWjC7JDWlhkXYn5v8WzzpebAlDOgl2fAF2MhuVU/Wj0tJpLQXF+1eKGToHgUOkBwBHjzHKV3EZfQx66u+jd6w0pDCBgq45sJkhu8+jeJIGt57vCJUi7bDPlU4qGM5iy6bc9gp3FAFoqpsvgPNs/2eCx4bgCIyAmirHlfUzpQECd0Ttb+mIHMLRvYl+UULPnfwJYkPz6q2xVD3nax0G0JePNkWfGD0mlw+R9k73T5dkPeGgxLvUTDN2w4w4uEjlW2KpBfa137M9qbLyjogksMqn/AS4UPPzUwbI+DlcjbMCjL38sSnBM5i0pEU82oMbPYWoWzJfUmDdbZk0z2+x+Ly15xEa8kPU0gsx4RNYGcC6G4YZpNHMXyIzvh5lSOkTWvr9/uN3ohPvhNyC+afxdu/yeiPsvtizuDDEb/Xd3weX/DK07tIsM+0DBwXrhNzbvwnGedB9et4N1jxKzfS0fNyfOlwPWEoS40v8qpCfnEvTOyCYmCp8GAu9wGDu8ps7qnCIvtT5Hcdf4zHCA5ZDbpPx15z0vgmHkO0NbPRdkWqL4fRlw1O0G7m3z+Z2LWNp5TL1gCIQsL5lYG38RODE9ny8jqwxsh2jYze8xBYxOv22FwSURtajgYXn77GEOcx8V2ILRJ2mXAi9bm9z2Dk3T1XrLZtGH/ntbsMGMcyd1u7BJtNHXKDyx5JlhBvgVJji6cCQfNmdnsa0s9dA0XEAe/GpLTCXMHJVuChvwXwye74FVYDW/HAoqSSoGM7dR6wd4cNEU7PKBmoYuj6pbikuXR13zj6kOtcYC25YvRiNsJEgZJ50vJ9eYru7PMW1swq1y9J1XpOEaZj3Dhw4/FYd33tpVQ2PTTesKazWtGdJV0ythvVnsHR/UCylQczf/2X1zZzAtikHq6aecrrUPYnckpNxZKkxfALiglZTk8waHuUqknl4iQ1GpOA7UNx8mxafnG0OjiOPpFkpQA9+whLijtn1XUxTy+35cwHN9gBGq4zFZDfqPoyDDH8Hp56EIr1wBF5NOl024egxgjNsw==';const _IH='6a5a68eac1b4bdd95d8666747131a961308ddf6d29b7e27096f5127dec597ebf';let _src;

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
