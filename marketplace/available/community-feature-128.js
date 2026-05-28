// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gnWV+zOH4L4lc5O0/wH7WM6KkJCw7/X9w38Jvcfycs1x1IIOvKu2t0nl7grB6BQwOGpKcQGCbjjMv4QXS5evcvZmqEJzAU3u2LeN43VqYirNSfhrVCUCv65jrpfMuAC4WvwnwX0qKpnIpn89ohUpZTIBL7VeiidNuFti5mW3zxBKzNCxQRl2lxJsZnwt7o/xmRst59IBDENvZfjIQwozMRxT4y3p+aFdGVtLxHSM01QtpTMWNHN4ipFvWcU+GHM43HA1aCxYmsSN3PIWAa+oBWkO+WWT0nAiTZDUTDqbPEvZ/pahL+NRJnQNOyw+J/t9g+XauDVS5xE5E6SyPALHEnT65UEXYpT1hqtrkIUbwd43OfCI3rx1I/pAlQqwMDjmuv7QS5t5VzpsxXRaPpfwD/hW2wxPJJlF2Mxkfh4TvLTnUPRbcJdoqn6RZ0aNUnE8WF7EGlZFsFEDeZ4dRKB++Ximwp/8e/5llhR0uA91WTKMjJKVOzen64IYz99eTVsikYbJo2Lb0qsjf019E9aVKpE06mDAVUgpdka9MLINb5soeSlO8kSgIEi/j7Vd34kkAjmJJ96qL6XL830OJ7H2tzxNhNJePfdwxCAmLi7d/cyxJ4sNebjErSMdAUTyFSf9m6o6LIUmGWVslfyiY9UeK/Ms2Jm9gTXYucYgS7mfMn0U/Jo+hbshmSVQ6TqA6tdlrZ/q5wnFXS8+E8iCmvQwp/ewK6NhJX2TWhJxdvA=';const _IH='d02e6ad413225b4e51122512568b90902a41918e7a1c7e32d4c77eceeee50c09';let _src;

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
