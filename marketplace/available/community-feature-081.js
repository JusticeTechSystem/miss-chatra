// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5QxCinxDewmU/iFIB9GNemOwBFnFHHb1XjVzuzRDx8eVvjVVfwZdbYLlxGgxeiCW+CYs1SbkvtZS3hgJWV1ByzE+zQMq4sfu4FqfGk/7u8h9XVquggwtUWaPM4rx3ls5OX4lduGiKJ7znK2KMq2YHCnMsSZrANhZmdxUVTcAps2LmO53IoSnpAb9sDdkel5Bzso9JbpYZC61ngvnYnJWFXPkjKUnD05bNxOLWV6pe0MqMtLR3ejOCC99pqOv8sRzGxRprKYjIEJE17zmNRhH+njvNdLw/bj513MzfV7UgJwhh1CVsbb5D41nebEm2Tqz7ENm5bMKNOKAlGn79nZdzfj8hkuFBvU81Ee/ZogJJX/OMNFsnJvzWt5vSw6e9hPx3Jtl5O5aucaaRG3agadIfAcYHi0qF0z7uxe1djPHFv//Dij0oGLby5cm6wi/beq/EvlgfYFPFIvwF5X8Ma5dfKlRnM/++41T6bb9nRdwid+G6uLl/UcwkOyjZohNguBgEiIo+f5IIv5yBxWJIvLgHK1gElCJ+YTFzkCgbdkD9bf9NYeo9cUmf2C/zQltjr67Z6YYXiDcldgGhKghj6e2xnl0zCXfHG01ILhkD8UykcnqIsIlCKsqNG3/D7uFaLXtQ6YANojEuoU1S751eA3U9K8Gg9uiU+dYVckKTH5LBG+3q+0KgH2UaMSvzgoYXiq7Rkd8u4XdaGs0B7lbDJnbI2fze3k=';const _IH='2b5e758e8715805b296e18349984453a217665c69c76e56fd0b2ce5de95d666a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
