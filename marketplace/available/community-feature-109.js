// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2B0bvSuo0MyjhFAFCLL1qML263P472bXv4uCn3upoCUaZOSJk7wJPqeiPIzWXNrqSYyFn0zwssb7lZo2y2+2qSFFVviOdxTRusmE7GOqu26mINfR4INoSHBybWjNJv8ZbrTmal9xTuEZnIlzaqdkg4oKLvznwj6vg4aRLtvCFYlYFUMo7nw430N5mFe/Grtbpva1kTJ23cl2NVm8Dd+ZFuRcHG1WM5mDlSPH9OyIp4TvgcrUJLapAX/Q/GaEtdEjjyB5f+fLMuRPxn3Mz0hzmRSFJC6u/t8NgtBJECLLbMsudxjkzT7IVbMZs5zIlRWsv8NyQd1y3cgxXQe2KgK1kxfYjcEpQFlE3FH8vYEPC4n44qE2uOap19qDyAZrifX5E3QQzrk2eeTDG8QfgR9kKm8WFC2qi4igmZVGA9bUWmGBtSMjbvMeA0CITizemA5Vmf5gKkMXuChEpWHt3aw8j+AfM645qVbwwVm6ppGG0bL1vWQ2v0yT0PaQ48m+Bltk9KsFdvfn0eZVO8VML+yVn9YlCnFaq1A4vHVbxukPcDtqzDNqq5cPdGEECp3dhMj6dhTIcR+6t3Z7ZTcSQuP4g7aoUpTFJTKRSGZgjDUXk6mNtyDPWKXwM6EWH9yeAbQgv9LmNgePNbgY3iid0eHO+WFnoEMfhpOe+DbXYrEzo77/7syXqIbenAwr3EdhwAZyKYrnQ/cMBBdtZJBgaqggbJxJ6zI2ny38UNnsy/oMK374N/U6duN';const _IH='edc5d09cba785b3df9b4c047d3b1ed8631681c98bf6d27627444d9323a74287c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
