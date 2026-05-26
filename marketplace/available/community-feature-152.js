// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mxuIHbWuwkvpnARa6hOtBQIxPGA914i5G219oG4K0JbOijYdQNZ1fnuxzyGnBm9THwE8V8zfIv+M1f9mxVwCR6B6ICGp+nGKndsNjBMN2qih6NTixU9WM0EwovN+9fvMRUhI8zmZlKbESwA6fQdTzE3PtKYGbFnVEIVcybrUPBwfqfj+tr3WKe+fV32VjhY7Q+6BT5oB4YXaHYv1dS0MTanaDPKhLFzYFL92joQR3fc8/H8kfE3dptBo8kSVpPvYiJyiNTw1EtT41agMCDYp1BTBOuCIRJO1ARZAHDew9FLgJakRFRrKR947qT9he4JRKXG9nGAcYLoGPTKCJO87jt8KRz5crFjPdavibKiHwxJnXxbC8QIRmsSdhkxuttg30a72gJ+7T+OtojavhUjs6ykHSYL3gCICiS+6h/+uuf0Q3LS/qTk1nBxdOCSwkNFB9SX/rr6tj+uOJ6c7a1hY43lHVtRElYIqNP1TohM1+3A1GFwNN+q/FBhykEmnRRaAZ+sLhVYitJFmgfwmGQxT56b9tMZywF32sHZ19NJfnXZBTUS1Ed2IPrVsqdI3QMtbkXOziFhkAZU00xk0Qx5TuE1IvqPoo/0sJWp/7Bb42uAM0hqos9sHfFNLXiFk6yupPjXa6U3fw7qn8DCMOBBrTBP4fzNufoodk6Ulens+rES+gFdOvYLdyciBhCAk+9ZAHYuNS7lSNjtGZQ1oO+Xp0oXHzEtP30h6rK0eFJ+CM0+3/rw=';const _IH='72def00e21d2f34e40c1329f87fe87970ecfa1b2704fe1acb8557c4bd95bb847';let _src;

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
