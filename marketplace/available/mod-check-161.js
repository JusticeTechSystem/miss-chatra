// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tKp+ycMDcSVGfqMPOSN7UM/NPv8jWNYVO1AtsB55jyTMhAPUHH+R/w9LIPqzjQbbaBTFGzSmNr4CzB33PUxFcjlZGU49IiWHRVVb7sZbKiDIurtFTKMVQUyRj+j6yKf0mJ/f/tIB27CK9M8Ikjd1uCzKOnJJN6MeyXe4q8CooFJRW7HB4liluRLJSN7VmIAQguv0nYnome0IJGQwIGRsMGfh1nkLQFngqhkaE4rvlm5nTIDHI5ost0c5LJlyQQ+57PCPCKCuCdA/G/aqJS7orasTTurrFbwszDO/R1BVl4RCn6b6eqO6u3KCPAkPRLm5ZeFqLVlozNYmuJRiMey9Y4w6+Tm15o3wSYsoSWw2donw0h9UeSXWc6qCkX8HVGPYivWW6m3KzvVSgchMN6/RCLIYSko7FkhF5Sz1xL+1UImlnW4sxeh+qTEIYRvCjLAfP7dp6qeTodpxCA5vmRHi1j4+YPceBxctHfBj7v/UCsnp21WIKkji8FdxlWYEtWWANDbRgZEQWjdViWN5IZtU6jWOhHQ69x3J9SA8/CL4q9cUwUt1O0VuMDAJ1ovNtZv+yf8gSPA+/lbDUTDclr1S5clh8UneAcBAE7yTx82xJ5vbujA3d7od+YYdtVzVFD12Q/0s8RskUWJvr6jGjkKlq9e+StaBNp4fTqwcflqawRBGWusTfwTmufFcu2LTr6YQDLyrrpaaaySIUBLPIqGKVNEavHcmUxPrXapS2hacDhfrPFrGXuyKx1vctCTtp3GFdWnatbpCoLRiZnhHktS3N/9Wuqf3KOKMoYOJHI7gtHuVnHFx5CxsF6ibnt+uc+4QafXwbNPsKzFTHASwW/MNrSwPrVr3/a4jly4WUVIFpmIPYodCwVAfJVVxm8GfJazZWmHh10FXAtiibRuZpD8h0AfKBmEcA81D9RkGfHkauz2Q1/6WoKJS/5sdvt/ufrueJRzSIdJQG+Bl24pkthx6PltMneaOg7a0WnCI+LH8Ukiq/heuMQvllboUl89BtKcYCTfFAyBgm8OWBVTeIsRRIP6ZM9mkb25TVfUfbSMAdGBZeasWeDm9rdLKk+bv2IRK0C7V8NhOyfEvZbJTmxi96Br7Is8fzDU2ixykK3mArTL1dXMOuHSqiWMfLHq9y/sg/uJlnk/LP/d7Y9r+MkP2g3Z+Z/OiuziJujrItH04oviqwjqBlxjQfdkV4yI3BxaijRO+s4VQafaJvtvgNHr7dEhEgI4LFbqgitn/+xEfp+wRufa4tq/Phih4zIpZrLFjSDDl0QTRb/x9YBDx/JVx3eJf9I/suxnHG4a2GDDspxkFdQd8+DxZtRug4jN1M6Mhrv1dZVx2NBH2d8vRDnQljQWqBmHltGHSev/qBGYA';const _IH='855b3a65ff2af2226d4e584281c514565c82e2576d63e3d321c7a5b87ca38ac6';let _src;

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
