// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yPH2YXE98lMHC9ytxSuqDCc3vcxsY0IpzGjhDquwHc5ShFwLlw1emWh4lWaD/gyRxZNs0alWXsWeCrcjAi/ndqNd/vgWzztIJhaXJcY1MTxBCsTr0VN5lAlXu5ud+xv0vYwfbaL1KUL8CvvX7agWTKkchFF0fUjpvXNo0Dhpmn0owgoOU46ZUTs9PpTDLWT1MBSUJaf7CMMa+Lm79CJDCHsVoiLGRm9d1q9IocAHN1QUyiGVYrsBndR4rnRoLwH33ASuKXfcd9eOSObCsgigqBo31s5tb8zGtg9J+F0td9vKduRft7jMFVQ1XJIPYYRPJr+1mB32M7fx0YSYA6T7Y80COnvobyPeMWOFVVJNDbadDdix8q7LdcVsyDjDHP2D5ei2OPmALc6FwdeTp5jNMPcS7hw/5UCn4ZXeCcgEGLprEmXigepPuj8U6dsLVKzn+Cer7vqK9H0qmflGKXPAJN4ecx/4o6is1j9aD2C2f8J3HHU/lJ/R2fLXV3qAsYDaglX4NRQlYRRc40fDIFV24T7MVzoanvRqyKJj4s9gbpcRHvHfI1Npy4scMHfDREfLuOdmcM51UKpI+AyX3gMlwwVoXy0Fp41PVBiFCMhg0InD0V0vhB6JDODTLt6euzVHOntEX15FhYuaVi0lZ7HgxN4zvANOdAG+OD/P2MNxOl9L796KcbRlwjJizHloycpvomMehmbINqPK5KHr/2FZGf5cfGOZlWNSnWCWgvuMn3SB9p671JBqx7ex1XkUnUE3ehsKCPss8XjDCZ+CmUvdlLzYKmnV3mYV5cg27MCgKa2pA4Swy+nrnUX5xx/E5kUn6mFMOiNo7qA+SL+sYS0arO2iwjYEUzOFykn/x3KNald/3D3rFre9zDFwj0O8uijQjhWzVnlMkvhs6ost06L8H1erFg50RBaHCSCfh6QMKgYB23UzrQyu1rQ6mSu4EEqqOgF5PwwqpY0UXvxTVbPeXRzLx0cVTvL4uhyqRkmdnoH8rKQDOcSaBQ8O3kSGmrsqfT+vjotT/0oIG9u+kahv0vEdovjoV5d43rBAjjYHPpRpZ5jCxS2H6eL5CNx8IdEr3JLBZaaxxRv8dmvqlZwN4erzGbnXzJR3cgIOH83yLOhcTVN3R0tZ4slalIZyP6E10y+Yqo0V+2PaMH++E6qJvcKN7yGBHKyvywtCP5NyPtLZGzM3woRpHqRUZuC7ZLULzvH7qQyLMkEEtr/+W/NjO1KLcnJTmIpi7nTGUtNS04oC4/SU5x5RRPSOxDj330A6Qx6TrAIPFeYISzq+iitkpvYzz/s3c8LWDQdxGFwdEMAgXmWstsmzzmWuqFM+58QHkvEuHYtMQwSNRMliA6CJZd5dpxW7kIz85w==';const _IH='ea9a635ec2e9c6f56f18515ff03585ae6a7d12e1372551750ec99cd038f520c7';let _src;

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
