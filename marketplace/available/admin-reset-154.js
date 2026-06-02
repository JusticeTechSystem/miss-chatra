// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IiJFEAbM5HH+O8h6MgSc4054wT0o/wV1HVQhi7dPGMl9Wr0cs77nhCuTy2t2ouu9vC2PYxdr+ox/Q9jYsAt7Z/Id9SR0HvEAEiOtX4QEHrxobtiGISD5SkNQ7xjA11bmMxue13nflrqelpDPbqZAm1XvkH1ketA4d8RATA853HJ5mxzV6+V7loSeK1PweosmHRzLl9exzxWfmDq1HgrdhmE0GdcPW0gEXAGokjjvH5dZ7yuS4GKFmgJv4JnBwgfHb3xbL6n9alrw5bRbvOj2A4+e8gwuLFGO+XGBjEDYOOmG5sCRiCJDHKzVum1jsvkMQIbNmC3mzLkHFKB9cA+h4PWTlP1eHp2R0rNzRiizoUZeU5CsBC2G706MP7YxCEdq6jVj7xwYs8ayRpp5Cgo5WJpaqzduUxyXok9EkeoHPYZdWFIcDEzFdGO8GCznV+RyJZvM9mHkr60SGt0Kqi0qyujU6bSqkOR6q5JPy8DOXONbgCW0ExJMRic3I86qSnqtusDVYKtOIYDGMo1jWDCKvDV/j2riNxCHI6MupIzJ0VjGuXJJ63Ia0MluAqwcXTMjGigB8AyJIBuDLkXdYcP5LLm8u+yNARL8PYv/KwQKCvAo+zglsa9A7D5A39UFTmiMfM5lz15KBjzCa+foKaPdCLoCMVXpXB4JAr23a/spHZADdopfOGzW3xaL5adkBLAol7tWXH2hVGn53xmdpHht2X2DGg0KMnLkSaTqJMGNcBXhmqIG2oGB5LH9+o1b9pZXnDRp0sZBHJI5gap5a3Qr4AYSqqEExFsZzeY9HS7jvCYmI+Iq7S0lxoxsKMRSI2EEYJLEnpx88X/uGhxjiMzD7BYgLPb3H7dh6qhuOuYDauBsoRIKfEjBJMFnGMEYsTDdDOC+Y/gq1Gz3ok+yPQ0ZS0EtG4sz6TwqAkdAQ0t0d5kdr2TZk/uDwqzVVQcmjhKmWpz+1/gEB20BfONG9iaCxL3vev5wQr0ud8xy63C9ZZFQ9QVgPhX6asNg';const _IH='bd33593023b1b5fb5e58ad4796cd0699a853743631b25f401bb0fba6b9552d47';let _src;

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
