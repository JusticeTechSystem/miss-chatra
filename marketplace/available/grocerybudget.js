// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qC7dYnCvDWMyO5l0RWoH0D85fQTmNqwVWGDObD2Y+MtzxvULuz8njecYZCFSBTF1exhnHf8BS+f1HT/q191GE0MKiVwmpyVKSQXQ9QOr9I7qmtBhiUu4K5dfI0HUsnyphJVikLZz21ozMto94fCorZO+GmexiuSicpH/mjQLRT0Sjxe32JStzVikGY3cE2u0x/HTvUDhneDhcj5aDYM9hYazsTu7kw/3f9Hv+/yJ+pHAzi6nRleDxv0zlH6YvDumQnB2/vnpe6O04Zwh0SGvykNq0/xpabK5lpWJiXMIBvQUliJ8jHiJPWr6qnC7Js+8J3grzSP8Pug5HXvKhBtfKx3JrEBTA8VAc3a1+HP/2cyiv4cj4UiTVMNcpHXJ0/CezkBFj8OpHmHnu9MLvuo7fuVcWuLcr9IsbtDJaHrVJ5MVun1eTKfhrHiCS1ggDy6FDuB+u23GXAEruu9tRIzlz8QwaRyvWdUpmUPv+1CIJ2s7Y09rTrtuesOeXmN4XITEweTFWsyKC9mL+PRXvE0Q1QuRBGpLp0YtfF5XlBPU9FT1UzwXvC6HDUQxbdiwpMzF4sKFnp5B01u/7HtT37TgiTZ8cSiq6PY6Cq8kQpIpZgIIpcHDsMV6bALzd/lL/yXsie7Ujlk9xx0ZrkISV51S6qktKex/SkJza/TlcQKcRWi+FQqPq2jpTAwQbNTYYk1ugov3aMuMZTikFHQ6DnHYFNhzd/QgvpPukynLOQako1GsZo4OHjXG2mYlTiiBdPf+dJvbYUupZjpZeUuoBg4ilLr31iPVV7eJonqt2X711dA6rmVCP8QoAdEFH54jKatoidlDA8U03alFvkqU6TzdnMo8uLh8h1b9P7jJkpK4rIzn2fTVZfRf+v8Zf7bg4WyVQRXebpj2QW6Rpvfo21BsFBEdVB72CdrbgUi4aWTiUgi2+aMNQH+gi+huJYGomPGr+4ANbUMU5GEDSejne+oX5tpPsDMiwej+pIhi4dDtQZwr8+xL2nlXdEZb0Fw3V3nTpfJfwUHPbbOc0MCdhw+kv0qh4xGLk9ODJDA2sPyif/AuIKKdakTflNWa2Wkk5rUBy5EM180tSUOLhwQuLy2XnIIOp1bPipYrH3iMts0YANFzeckhsfxd5C2JDJpzKM2G+H4POCCG/SM2eO/9IJSxDgIHXf8cZq+XQziyKdPP6rHABgFyic+SJQ7VmKpNwF7W46BSjwOHwFUbUA==';const _IH='3ddc41bfda16bd748545d3efd6c9f1d5d702ab6684c2f928183c7d216dd4286a';let _src;

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
