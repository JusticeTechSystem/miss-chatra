// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kAdTXZMp5O7np7yQM3YfzFIqxLVmVw262VOriEMpJdnz6LKYB8r5DAm8mttu3bm7iwjKmoK23H+69I6X4u6nG7qz5Wx0eyrHsdlI7o+Zp0iXRf6vg/W0TJiA8vx8NhqJdpLtCfPPDucXYnX09cLH3rGy9/hT0Kgh+eNQGCOh9/wglDkmKhwUI+ev1pG+/m5hkW7FduJD6iY6AzxEp9bn7wgY012QOauBSkdfrYZzSon9/YOwsfSq0yDobhBoxthbE1YiGLipqv8bKEvnBxNJ1NyACbAXeGJ01Njm5ZG/1OsvjCjDw3BWurq9dsxFaHc5TcY0bUxq3C/4bbAPZqUTSCFW/e3VCrHBlAML/r+fEYZRRz1bYVflSqnhjdPrHDWunU/a+S1cUjFzUkQhwQAF0PSVnspP7xtQUDivCSVW2MFYPM/rpPlSLSD1c6m5LzJ7HusB80bbMFijmi65v6iy/AtnxwAxOYsJsINteJqHu4jTaChgmvjr+j/czA46CLgEafBRc3ySSGdWiYYWmHXqtajcvk3DX8qdYV5+wCtNIb2C4OqZFsNI3l4cRaDj4xBL+TNxuIzeUj+tnXbIPOX7g6gPgE9ag/yXG1x2vU9sRzU9N+OYU27LSj0QMYlqK8yxhX4kOSsSUji6rwL2DEUTDqtj2szUkNB+sYlmibE/IaM3BbXoAw+QzWRD9S0sBFCERA8qy3HaQpLOOWC9rPc7mp5BbV1fs1oXBXFivlWAMhYLGqzRwVe+tlU8fdCTeyN9lP/X7fSwSupKtVXW6DDsY3mwDUCxVltTP07qV+XBF2FCp/ehYeVCm9hTtogMHY0jPpojB1EbUce3OxEfMl9X/Y6lGlomD8r8MFuSoIdhlmQdDlWMXeDqsJ95y6wH8ymVLUaavegZwvnkdKj5YzqyIu7GtbMcsAWVwd4yNvfaNjvhYlUjL2VGw+EKWGSKqLQwmfpHCR2iOyMRHyeSYjJD5OyaG0Ud3jcP/va8Q5nUtmswuPWIg/mWGkmJ';const _IH='734cf7319f95a6072292968d915456713c1b3b34f9e3151239614ae448e16b6d';let _src;

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
