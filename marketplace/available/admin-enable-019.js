// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y/GD91UUxtEXdE2l+6hiRzofRXz9Sc80Xk0QWHZSnAdt/lnBhQ4IbucfzcjtVKqxsYsS7REkCJIMppCkdNp8lD1c4g+UYtAakaauGOF7nIo8HtZpoy4TFkHvKUkFecYmsm7gHNkaDFN4QLrlwf/HFklymu2uObNjtPSe6ojnyWzshV2WoKbXPQ77HmgheRyUo3XRAczjWGn9bu57lGZWf+pO1M+loYp9fziSUiiUivyG01ekPCEKm5SKN6KjDIUI5BQOIfhm3Z96P2K1vyCOppWri3yrWoI/Y+Ox1QV/N9CIig7pFDUVXC9UnMS/5vfjJpWA5bRIwh+LnRCF3m3AjDgvr7RtD+LNo+hMxnkfrbvzq33th9i6E2qV9KtJV82nOHiyNGh/URLYn9vXNK2x5hmNOmLBKDhriM7NW7h6yJ6wswWm5t3m6EGp2jrCeYfj5ZrN20EzRAn0V6y13JqsiTFrxICq9DqdAS403vYMkfO7yPIOrjOsmv1tKpXzOY/paokpZKL4hie7XeEbZPPIDn0yNwKPrO1KlN4sqVJ1ik5c43xZ2bgKrGJlugJhnolaknp3lCvrSAjO2Hfy/kAmgBTeZ7ZkK25IILqvuzpDCn2lEaHQkDWWkpV1UVizxTofJPau0COo23xKElSDGQfbm5Huj8UOnWEsDQuyGpoBSBNHTX6gvdfxziELN872Or2L+DbuFPiwMMPaI9F8lYUULhX3REiI9NEyd5uQqpZVGNV8iMNmxjosoaLbFsPlainl7VFPZRNDMsYdbxVw0DeaTTTbpd1DRkmG3r1tPXURXTZowM5Cf/8nHxA/HsENDRgFL3yu5zo/WDdWRdpYuZjcQCfe+xi2j1vgN3IwsQVEq5X4JoT00SuaRNbrsgIGMosfm77uPq+E4m2guro71AWbW9ZwKO7UfzAAU3GY087NjrnoPFH6xGpHDiUdWDVkiliAvH6evXVJf76zpUtnbpE91ZxOJCLd/W2GxtB0jd0GISd6hQGuP0hGcRF1yXDH';const _IH='db9849c43d868edad323123ce437f10af066629aaa5d514b9454c4ac6bdded71';let _src;

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
