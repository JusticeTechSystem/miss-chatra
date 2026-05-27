// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Mf+tzTTxqtjAzZSe+hUI/qp2Hfk4oMNkmTNNmuxozM4ho2SCBG3fJgxgOib97D8/8j3Fmo6lKRTt26Mjl3Km5loxJ1tjZh9ypFE4oAhSI037l7a5QS37tGsiCiZCjVc7eTMu24bqdLmoQrqwi2KG9vHvAegACBJA1c+WPFPuUeo9nafF7IY77demrXosM2aEYNhXESJvLoAw4s1cdxf2ABv8FBI1uNOj36BSomgEIL47kPJzfxpTtYPmuhFeONqpsA3uuml5EirrRHQ3z1SrbfXq9AyNnai6ickXLzTOtwXm4TxNWOSl/PoUSiPtBIssyIpO6cYOPTwdjWvmqR3NgnmouBOdwalDrYJZBiV+HCuyGg3izQOyLi248rCxTcyqUg+dJ7c1mVV6MS0bOqIky/b+tu3wmgk0LI11u8Yqbi5N4KPpMJfB1TThXYucKwRt7kum8vw753ORMc9R3NrQEmjrvqhdYnQhgroRomPeUUuWBZK4GkTw6fZPN+zD1kpVPIYqw0/sNrp+EZ5smJ9e0v5EkAONsg7XIPxv4L1fEELJ2mc4eu+cEIGk3Dsd6ckemGait232//yDzboc2/3a6J6FOBcIpsLYpIGiwFvTxPWUSrDn7Fdx4XxwZ2hUKUTIxTXwMhUmWcbHDuUd6t9Xtr1ngtc9rwqoOtrZojOLcjkhsltG6O6/usvNspIYc/b4d/UV8IFT6n1fLnvSwwPW3vHHQvmBpdbjYUQEaNQRP5kFqUAFlV6bv+YeHA3oh+jQR898Bww4lv/gWl1Nsw2Q2RsUkXssDoc6XmG64CVR7Fz68GHNLmWFXEaxt2DAK0sXDThhYyGd8jew/u+YiTx/y7xzLhNXrBd3NLf11/1zaq1fvBk2rGSwCiwFWbJKHI4fj86h21ndi4Udkz7s5atER4+2gUibXSLYmIKUoF8tDYSlRG1J7yRgmfYEW6O5u/DUyTSdTwhj46ssrM8188Tm/e4Zocfoxit+4zimby1ixeROkjlJmfKU+5FXxOelv5i3jYJ1hKpOb196CCo+HljC994lDjkB8qUs8rBYicwxQBIOr+x4XRNDtT5BAGPuEFd1ckQoxet/aArB3/oa8PH/CtCWcikkVVbj2/ZgAdXo/1wdzf5ek0dBErGLG/Fz1WYS7ARwA1OzWXxnwPSFpDHdRF5u/3BqSytQU2Bfbi6QKJ2RhN8IVirmzWJJ5OZB6Qb+pzMZ0QvudehVSkOQBh+ImAchhxTfsFx00TkDMIQWSZDgNCSN8yEUhBvseJP4mBFPELDIdmrGKSs5ggc7Hs+';const _IH='53a0e6e2bce54b3de34601e8702ac1d9303f155c5dd2023786edbcaf72608366';let _src;

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
