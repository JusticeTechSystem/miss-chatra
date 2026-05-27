// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P2Yyky3c2rpJvJ9PNPVber1X1lVDmty4QORyh2RqXHdFmOhGSZDTimGshUdAy1VI1jDeM/esZscH8uQ2owMj5y+LQEUNrL38h4+rODF3mStpXQx2JVhNGLniqR/1HHlhfdDxyWTrjICTJy2B4Y+rcJp2JYzEILWZJwK3hOTRYpE6s1bQk/WbHvuLnzPLEkxs0vpBLiLszX1ZBcRmw066KJPv4zRB9AGciHfG3oRM3V/VHswXrdI7FLngyj3DZiUPn24/kIzD+8q8RgPElxDm2Bg70z52Z5sGbjW8RS8jlwiZoCdbRBhfqm/Q9FrF2QSy/rrio0zBbBgPhuWUcsoKlO85AvWKXqsj6eRAVTGI59s49NNNIkaYJIfP60JberHmN9jNKYkroxUrIK8PH8lG1nQefty4PK9emtUgwhT4spkmozXv7qswkBidaklmR/fr3oD2V6So4TX+5ln3KxcV3czUg6Sspe+77sorpHqOKJcJrRAc4qkGUmGzIJfMhUWYvUvW2hnZbfCO3eq/f0DtRLVQVowW8hk1QkEv4zrpqesaJf5PLwGyKnyk+Abqhc4DjAlXdlg/SJSzxeYAvYjZHWDxQ7ievGzlKXmDcekXvvouUd0hdgVys6cGOTHYfBSMugy7efo=';const _IH='ff5b919f50d2307cf1d800b01e4acbc6c3a11270771902ac92eafe1cf800546f';let _src;

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
