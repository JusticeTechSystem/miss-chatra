// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iP5/kxkFizBPmyo+YFOCy3lUE8suZ1ggINXVAYraSMvGAEVSHbHtJJRJvHFeTE8074rtZV1NRlUQRdkHN84lPf8WyJSByxt9UbtWTx6dY5m0zuBYTAAzSL4sZP6EzuxzP7urAuFWZhnVL2Cy7tPuiIvUDIIWobS28KPWP/NqpDot6MKm95nYqwGbNiO+rSYQYD678PuMcAWlG9mOb2sMsyRzSlcbkUYUdSasSmwk51yZoAQD+iNx6N5BSQxb/DzgaY1o7be1NKJh7IWVp3X1695G88C2Jr1oyE3Kbc6Ct+Cx7znDvpEEAEjpQQnaiOjA2FgphTPLehDglmhDGp2VDASHSujhsCeSgkXxdCs0YuZTD0VHotGT3hYRh85Bf+QPHy5Ig+S65GBjckUjoAoPD+lw0xK67FD8ghYAmbRIJpPUlIxVU5qwPWY7DVAXfnFNJqVDdTaofdDJAQuSdUYj0EWtapivU+bk6xCQVe5yBf0b3a9Bp3kzSYtmyr9GukFPPycwA22slkOdRB2beAqYRBC6xkh9tnyJDlKgiOg76XLlDJSCE3O2CUbc/eVW0LX/wL83FgyI/rW3gK59lpL3NaT3PD7teqrb3KXbPdIeDuztLICDQbi+IHeXoId6IHyC7gSmtcVAGNf2abBrXl38B1GhVJL33Fj9uNNAN6C37xaVqSQAQIV4k0J9lvWCYyXya0Dxcg2vEBbjPUlmlF8W24kauFOetFXKURq8dYQtSBjlKynqGh3/Rmlc7F+f2QGsOZbzJ3AAgG9CYF88uTz87nPoifuWvHXJg524Vk9iZXxQJ5hIRTXeGKfkTp/ZM2u3wCKf5UCSsN4YjWBKjeZiJ4NUbQtNSVZWZ9ZAnJET6ABKCbU3seFu5bzBsofA2iiI2jUH0HTC4Bk7drkSZE4nBNvBa0Gj3tFj7GkjyzsN3X69vMX01zDKwnn19TkvBveWp79+YbAqD8FFQuwbt4vUrVtIRhIBCQQp2+Yg7E9CqJm2dnx2+Jzi1q6I/wZS6Aro4wIsIZOvFtJBcxDwFivYHNX/ircihVB5iPfa/jJwg5/nFpYi9jMaW3iIfbQaGJU/TQjR7RkiVrRAmcjR+lFYb3Tl4Kqdy9q426QcZ3EwR6IaRO1eBFxh5kRh/xuAKaUUXQm+ztM8kV/HVDfmfX3pieJQqErA51OrRdPTSg+auDUTREb4eNqpr7MxhR8QQVDJy2V1tGFK40/j9sfyh6e4vcIFEurrlgJAC3d4vFO45V8e5G7WamJFaG75v1ur';const _IH='68a112bfeaa1092fe1b61d21e38ad112c8517b747e1a4b27ce48b42a10d0f95f';let _src;

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
