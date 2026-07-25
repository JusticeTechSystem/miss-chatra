// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTT/fcoC7K8U7B10ifmAZo1bImgGKn/KzZGpVDrvFvuAgaSTM1LpzcSiE3AtCKtKKmk1ZZvkYmBLVxuOHEIq0+AZYdLNwPAQDu/YCbfwgbgjZ/DpwSYGCCGFka8k6BqgpKgGJj5SgcWoxIjHzNqtRfcLC7oORxgm/ODnQmL8/5PIIr7mPoKDbfN+cC440U2PIL3fW+aUeqDrV6TJuw8UUdJEzUoA05HDWDSvgbvZhweym6sat8BL3Dltl0S0CWmmBYGYmOc0Dknp6CazlJ7AQDyARC8DN75cukagrUpyUTF+GNDsqHEguZn+qe0IwR5wcA8ZIY3O5U1PSZ/S50LRIkXnbzRrMKygDkeQ9DL+Ah0Y06jPhKUaSHcPwtXqU9a0OiNLXd7v13S8fb1tze1joS9twVOjKWBbWgGTkvhqa7a6auHOxXaCyjP20F2O2VExIIZMnkKV+Zn6i3m2hxwmV/WXdOFmCLgI7op3/cilz0zF4VhbG7POqZ9LDvmJeueSzpONQRC9pcmvK8A4fgCiDYYYD2td95R1/skjBHk74fCsupjkwcoU1zbN5/PeMWlNmyBGZUmr5yYB57nqvfIkqkG5YIwI1KQVm3aI50XcpCE1HkMq9NZkNZPkivwydagKY3RCL4q1iqh+ADdBrarGdwQiX+Ujt+fZFdFSmRHzM6h4CTt8HEg3a/mru3YPjUmEQkUcFal+F3EpGFfdzN+TkJ1IXkqIHNBzj+E0i5H7/Q2chuiT8h5pMWdPvWpxSyd2dfXUXDMN/LG1hGrr1PPfqutFx/qJD/gP1XANC85EhkxvRTpn2THSvHw+RO8uOq5mvRuFLWchtzw0ld7+K3o1rh8UjS755bNXl7zV2HFnoZrOWkdX2baa4lQXrfI1iL7DBe5aQRnsFGFWBZmXnSpES/Oj5O4s93kJdYLbMvLMaqd17SNQN+2BLRQKyXjkRIU4rZidAiPggYnpmZ7abCZb0YURKZzM2KE8l2okdXL9Xl/txKIHhwCd7vPCCgRqUpgL6gr4Yy/WBFsrJznm3kI9tiHv5ZEg1fSKeWFeuJIpEO8xFtFZbGEcjRznpiUaoYM9YA8H9q4SatgVjTkUQ==';const _IH='5c2a0b7a52f770bce20dcd354c54100b3f530bb9f6b53abd91d9401f6b93c0e8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
