// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rvwgrQ0SeMrcv6oIuzxZI8tDct2uK1v7SVbdO0x1VNJklylEzLgbYAZOEh02QYB3IzzaNmjw8iJr+BXkrIrGyo4NumhsvTiSxB4lDHsoxw3isV03ha0AaUDtG3zLqN7HewTzOWpxKp2vJMuowSTlrwiC6LlTtlX3cnQ5hIL6IJui8ZhOJIHQmgPxvstKM7OnBu4oztHlOytTDU5lF12IuklAYVyEr7J9LQFMY299+fBh0nX0mS1diuWaEZ+D4SX56QQ/HhDy0zzAq7rsNIzluwhOXpWIfkQoU0qXwTLHbAIRrg59tDd8WsLmXTT9lfZH9aOW7J1S0SE/64q+ntPeC2IVZG4BR3c6ifVBWVDeJreIq44OnunX5+EUB5bRAHxnMx11x2f5kIcRjK7BoOIRILpMn7szQE6l2n+Lwxm5WWE0ZYqLi8y7K8qs+Wm//e1ZEPi7FCrwl0+yqEptFptlmndyhAjXn8cTse5KALj2H74CL5x454/hvgLBZn+RhM9POcgPu2se965cKND+2w98m37WGFmbq3I+8cayZAXKGlZNf3sWnasKNs4tq+Og9o8OpZlGBOouAJ+WQRme45D0WS8xgWnw0WiHh2rI5sRUNN/ILTsMpqMzJalaMSG1du7VhcHadTIuVdSJKhe80vxgyNoAM1Bl77Beo+ZvBrA9G+tNxDWgvmBTVKg8aGoSEY21V4jLXwbl5YQMoNYDZIzAWWt52qE5OEguTmKHTKCAKSpJtQPyzHtfndzrpyBcOLPekBFqHuuf12c3xJpCP8JlCKru5rIJis1j4dKA60YBt8jnm/K9pKyORZPH5Xh8ZyQFyB/SyDua8WsbwmUx/obhoDo9zsO1s6J2Bn4r165E7C541Jpk0y3r4QP6zCfjsS6upp52EWOb/7D/tP1VZf4lnhpP+gM1WMqsLuFfoV7xBEUuddTvft89URfQtSu4CAPy/ELeXm0spgcy2uGdDreSlHKWn7zm/2PCyp9fC2fJwRJgv0cDzYKzi+ihnkqye11WKFtzq9yuhSd3ktifMYOkto5+4soHV5RW63yaWeUtnxlaqY34JD4R5b/FoNc2E+tpOt3W36npFXRjFt/qwLe+6yvzjEp3oiDvhCsk7FLtgZoxlc/AopvhanDf4PPL2oGIv4ec2gCD+B0iGapYThjw7S43UzX5tN5u5rUmvLTgMnlEj0wxcUO4njL6l6mwspEKxkrsuNqvgfBBIXRNRH3Jsxo8qWffM19iZ8pIeAKQYzXHTDzT5DMMO5qv0WoZg62XXcdy1sOTtjZwwN/3DAv7t3coVDGgT4i9dRCED+Su5sSK7Bdqnn4LyNrv+XOt+dJpa2M6wIpaasTIf5/QIiI1qg8w8vKdvAjUCmMC1VTURMev6K9IUvBbnw3BwpdM/3BnTQ8TVZ1W2FAIMyMv';const _IH='e3e0da8aec49bfe88aa889a896f632e1752cd09b443e4ccc18abaab97c9646eb';let _src;

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
