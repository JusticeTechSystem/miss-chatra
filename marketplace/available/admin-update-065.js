// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D+nwmJXVGwfFK8GgDoQ626sTAulfsT/bBdRoJi8U0ZL8bn5rRlWFdoFSKBMawmuxZT1eskm7WiWliViGhrOfe02cdQK82jn0/QfPbqNebXL0mvM49CgWazfQpMSueE8bh6XKL8ZZUpokEQLt7Zb3UJJgkcmq37WSU/ggLWm+Lo8hoQUqeORirVup4lfReW+uv5Xm43iKDRLGR+p+QF/ludVQgARCmg9t855hbQ26Plv4qR2KDC4Hf/WxS7UZJC27w8t1dDbF8tABOTDG2HmjiuEnYkqR9C6rHoNN245r+qi7yOdry7ny5Rz7+Cx8Kkek0pcAqOLQsXX6jNc5UmJcvzi0J4r62eufDlN1INgEDU5xHtua6Fd4MAkaH1Av9R3k6NF+1cs6tizx0QWNPKufGPSpus1aTSvyXmG9xfOqYWgQcWnZe1J9qLXaWQiCw4t1PIvMB/Kbi5rX/NT43HJEFgrHGtJxacfOOgPb0J1qV0ZKX4hYagqzfB/8pCF/iPC/VvBPEFHRtR6E10VsliypNTRTgtPDqMDEnV32wSqUZB11s/eW5exRymiWmdgOJxvKcBeI3YEaVMtQ7xRDO7KKBD6j4cylNKUhaWscuDj4gikRHF2NseBFyTvtyQr+UWa31Sv55/n8XQtlraRlzqMN9GIZjQ0zLSvHfvCjgNXZIlXpzrY6dIaSbbe20y+zNks8a/hy7hKmjZFQm++vvxeTTukffljkHM9bG/vn17khTVsq8Kt33g7HIoybs8ZuCsvn6jbnuEc8vvUVgayZ1XbwZLdX202EwT4UoulSPwbYbk2Sa9cAOb3RK/XqXhHRZ6HMixSb5lespwj/HvUK7FJAkSb//z2TKggsR47uRrFhVuogW5UGHn1M6vLMfUooSC5jRuNCHkKEQUM2k5Q0klHCWzMsLVUXxI+rPBILlwQFc4zjb8mEycPerRGBJKc1KNlBmfum1WCUXrPNcTFPcNyJAfeDcHUCK4aNDibFTuGoMGZ3a5Owkdfi4dOc+wam';const _IH='f2f23f5a961e1ea6b7b1d6762c849cad819d85c97a71603db95fb6833f6df2ba';let _src;

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
