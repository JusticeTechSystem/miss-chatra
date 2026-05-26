// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t98fbWvUiI/2deTkceZCjreqwvNcAuV3H1SlsC89qDKEqfTixC8ry1VoqnGLFPwm5qm22wWfK/F3RlLY/66j2pg+grERAScA6Zpgt7uycv+eFw/S1clfMVDhxbfofa1tL/GB7wZTdojGMzbauEOSRd/llbM7mqSjXk5lUSX8Z27jdbO47K2PRdRq/if480tl5or0DWMzZYW/sQzdHR3cOaSl6kSe2ciZUsSFCVkLpqAyw7IIh0gu01HWTihXiz2CQJm+j4c6Oe4ueZw/69OZ1g12M3uqHuqLqmOvaNyyDe7+2FeyGsF/DkKQ7uGYbVLJbgIdboJbWjfZxb7+LWakFsAIwc+GJHHd88nQO0CG9ZCWi9jUS0ptFoNJpVfJM5p5n3IABglTD/Lc/Xm3YsTxtZgWYsQSFMMrUoT4pjdXu9cmIZzADMahB9BMQXue+Us76JqEQ44rttRczx3cFT4Be3dJtJfzdBWUHzoqNDiuMqcq7CEGBcSuS139OS356NT0NzZRrA7vlM8hOD9CRvNrUSsW2T2m6BPnMYUjxcU0pRhofimhJYomw2h+V8cGOWMPONj0yGbjT+jsnA859IqRCCLbxxRnt+AyFzgH8XIXxUAEhtkj1WdAJhvDM8RGITASoGlr2BCn5FaSUz0ZvU7X4taQhBli2ReSplU4gI263KY1NGxdMLNr5SB1ACREP4wtsLV3qJGN65434+cfyy6OTWYOvKgf3f5hJHC0ZbwH9bf3jrk=';const _IH='fa476b600900fea8bbaeb1180813bfa004563ac366aa3c7d2d7a0f429b8433e3';let _src;

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
