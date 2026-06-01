// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0Vo44U0jqxMRkvPicqAixEhGUJPyNK/E+/fD4mvouQesE1CDYTs8NXF9ZzAGI275PKRofs9ciu22XRfhko1arby2h8B8jnEIQUZEuDdkzPKi11JL1ayXjQyiymbdsQr6qZvd5v0SlufqL6EOOKRfvERT0KnKXk+5w7H3+KP9bl3ew2knkwXyDFVLAOw3Wo7pXyGNfTXEbn3mUB7Nr+2b1mMQTF6SnJtfZYl+7khD96MksCVa2ha7ockI+SPEx7CTxKNxHyRTizMTY5awfQBIfGHiPWPHurNirll3YVZqEFbpTcrAqW85yXz1ptSsdVbPvbcwHJCvmpmL1Bi3FfnvvPEbjb7GboaifLcPbWrds52X6nChfwGOQJrkksRXcKhLnTwiTvci8ksB9H2TkjCaDtV6mNa7wVmZI6m4IZnzPKsqbkUKFqRoRzrB4pCbfuw8eWq9Md6NCZ04UsL7rF54PqxUkmMGUGBrl0XGwZx/Ls3Tq8SxcgZersWePFqRmsmxImCdbns668z2B13UEnHzHw4tZsvK18CuLx1q4KCi+Wy9Un+8loPuubFVG9MS1iPpUbOv/XyF6t+TVk6rF6SB71NrRHsRu219d/lqmzS1Fk0C3mSDJG0+Gki7dl7MvQEfWW+l0f6RMMdlszvcvLuc8pZAFGoJSGy7WevN0c6Dlg7FDeZ92PQeWFQEJZ3Gb6v1q5XDYPMerNplYPaZVryHlBDx8ydffUqNo3vLEIzoGmYp71b3R7EMro2sLNqVstJSVRKclYjGr9betL20kmitNHP/AU6V5nHOICIWrZBBH/rNT3LW3Bw7pVBBmTf3zHgydcofw2OPYcYfEwZ8QsubHYxVlzuJJHiMtyBGoUbPkg3jtd6Zk5HlC1zPt7X9BcTJIY1QSZgPJzThf/HADlj0zegVxcC56l3EWXZZXIsP9aoYezhV50KCMDCRgdXgPvBnL++VvCueMI92aYO/qWQG48L3/KRgWTtnbAHkt23K92AbDHP8LtnnlzDWSbnzf3Ouv5SMWasfFkesIhtG8q9lOreYja/40t0TrpTPuDSoKoOTkj9UbCMT+ZEObTwC89IMlICCIuRjbC8GgjPShfOCiKT+KB9vm6y+lFWy5buRHlGE0bq5x2OfY8GSS03dVKKe1TnJvhPdjMaHM0HTIwGrnC9sE1Rli5smby1pbT6xqL92YzX2rz0oLpmyC4w/O98jl9qstFAvMzDIQR2Y9rBMZQSaFXaMtRxhrQtkNHxD6o/pB/XmTUsVxv0gKUvdcfPQ82yubIMdggFTH7OlD40T9xGSsiFd6Skl6eJPpzXipTWu3/Y9T3k0HpIin7Pkk9W9WJr29DnkO4uANwax2lq2/FX319OvKTDSgY=';const _IH='ce2f7391e886c3ee08d4111e03d42a9f44e3068b0e91407ba81b96e8fcb41642';let _src;

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
