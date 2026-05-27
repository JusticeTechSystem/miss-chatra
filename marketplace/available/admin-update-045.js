// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Mri/HZj337ijXnsKhQQO52GDkOrbZQ6GEahhZJNMA8tiYplNSfWr+kx+/TkHTa1S4mzs+JoiWPOqbb9hw/+GcxIYa10NaBaJoMmnAKwr0Cg2kkCHA2YElpCQ82Q0ZUq9RddNUEJ4t3fhcfXB525FN+CNZDpAnjoKQ17qs/UE/4XjCwhb+lHrB4lseSrUuQpagbsJTfrnreZZQANEo765ysrSlQfcLCsjMfApvjBxMfaAYya+462yVAR/eRuv/OQcLh2+uMK9ET8HMxkqUbu9vO1M1rDzuyp8ZkTO2YTn55c/4XZptAf6LbX7z/kCvivWlIAfGkxuasRBH5H06g8BmffAIjH/X4HCeAX6sXrkM6iYkKaMDANdMtrvDTy8IauQ87xHCh3MsrdAyJ8QmVjURf/yuz8/SEZQ3PVVTQ5czUs0iUM1g6BlyrtkabaS1oQyc5qnvi76jZEjWgaMagSROfLsynG0mP0tbMvfPfFeVjjzLQp6MlDoLVpTPDkLLfLCW0TMXGW0FbWvHxJY8QyzCTI8Iql/MbqXuUc0TMpAt/WyUvyY0NPGT93FKIf//HyTbK8pRBFDZfYQm+PPeuItWiA70mSIRVn63vy9enD0UzbOGmLj0xTYP3cz/5MDWVRSoeJ0iBOLOHZnGq7iYtg7OXFcaVJnUZCRo6vNsGhUmBcIShRoZIxN7dneFPwi6746/f1UKhQWHWYzqq7X61ubFzuUJeiaxoyN10h+LYj1iH5bMhggRRgpkiWhBNze2llDXyci5F7SFk5N7IX5V7oWneHwZdc28UyWNKZ2d3t/a9EQ8Dm8QqP59ROB0reOHwyDaF8lpyIRvqLd2QTOopu6wreWDwhFuYnqGoONN1+9umhkEIr5cvkdnwgddPF0rS0W3cAKY4wegCYE5W+MuM81iik0d/d2en/+HvqBwNhs9nmILdv3FoL2YuKdSllT+JM/Yrz2oLqx8B4xzGu800X4D+GGG/NRMGJtnCxP/ABYvHQD9PWeXdjPMCXliJE9';const _IH='ba802181af356ced75ba43949e13c7689f1f25ad5efeff7ed19f9b9c9e2ccae5';let _src;

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
