// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SCUz/M3Hc4VFKHWB2wevnRzwxbfk6NiZ9ko1LsK8gc6wn6+mBGXkLnjof1yrwKZ4se0hIQiJT9W9fAR9ap0jx6uTuHFU4XNv9dSzLMdATDq5EgkpAozWltTc1M0imuGvcdHOWUDSIVanaLoMyYRUH8sVnACmlptN5kVJ8xBvQpvxdG2Jm4EKmGS7J1yim53D04LdleUA1YYw/Cb/tufB8jnoMMMLorweHUsPekOoQBtnzaQ5V9A69RcwlVsCr9TRwInC6hHFsPa0ROE5ncyTyjSDAl/lOpkYdPmY6QCLWtsrntHOAvDp+e2dWkQ6URSsq9V6ezuDFgXsUWoSoeeM9EOQf8esXNwYrNy2OcIh4I5EWtbu7HGdFpjtvUXsJQPn8GK7g6UvspeWXsPMx6nS2Qwpv+sSGyd65N6udyfYP5qQ6OBHA6PRBeepkUF2XpBRWAsMU01Odh7pDOxmDzIYLMH7ttyNCgUFerNT9Ct3Un049iAZEgjv3+PlLMfN/WrLPXwx1AxiWGAZDkSbNFjpp45RPs8qZa/X3Rpy2FoKKjEM1fgmkP+yL6udhD+tu5dwftP8GfbdbZUH1yfGBohAvOC0lC1w8OZvtxhEWymQdxkFgMubWK4G/FB0PO5PzuHOZirm/KPHxpOVe0jCzHniHwW15VbN4U2ixVbIOk4LZ8RdTdxlznHWfVjVaJc0basDpCPOb82OXZDxz4zAk7A4IYzJ9L/yci/cICs4ZfLOmP+Jjs7GOncbE9mWuw9/dPYDSeLHrTcCyY4b6+AWEZzS/vjDym5xepwj9IvR0scnf+tEfJgvCaom2kviwiWfRPe9z+bBgwxl4YfQqH7dYCgauekmWkpMv0QwC68V8AIlkSSnTMNbgzz2xLW0sjFCrAPy/Cqtv/tkT/6DETIKbZI5SW1Lk+Xyej13DM1oOJcK1pcKzGklFyFMoU2HclMbdUM6HdSyktOMmG4AAYy5YGc2A6tVr0ydfhMtIY6fkehRsnPpPLGQ/iCqPJt77wLtcWOlzz8v0IuvHZw=';const _IH='679595b9095a4decfb8ef98b2ad2dc9138f397673c1c494d3295e24f3d4ba119';let _src;

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
