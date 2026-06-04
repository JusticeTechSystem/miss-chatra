// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7qFDV2Ym05TqowA5dhveFBrhP+qWQjIArQZG5KkE4h/xQs9PxK/6DShBHhYcScfXFjf/SUHNkDjvs+koma3xIaLPcIxEsBSeVcXvR21xKurbH+wlnY135Y2F2kV9iFP0BWmQ3S2vkr9g9+a8rh9DHphhwFVco3QP/wiztQ4ASRfM7V1Xajb24lsLzXSq1uI9WoTLhO+cRYj0bXI1sF/JMjR514bHsyY3F8W//6R2JHy/vK45Q4c/r6OQuxhuyoxNhOjgE2su63k/N6iFoHV4gZq6sQaraQVuPJqXg4+6+lNPP/x4vwmTaj7iTSTFZtIT270+iRoSgdEF/EzvQdZcbc/7BSXg4pG7tdl5iTqx0F6gmSkLv91690NmCe4HfcP8i37h46b5FN0W+p9atvgV/asM04fid+GZcoNSr1ym1/5yJO2GYFPf8BvtpF2638zjFOBPtIJJIjEojtMhu0owsFU+n4V4/mpUbkyg6CJSw1w4UMkl4M2zNPvTOQJNE/iZys/Dm2U7p67GlCZqWGCUvxL+Aetpe2kUPnxXaiByLSB/Tiu9z6p3O+Zexbqo6yJ628xEYckYmQ5W7qPBCQ6LFnz7rI1PBNDylHnruDWjGaFWiqp8yvi/cHkl9GarYpdxXW07aIOLsmT9qnd7KeZE4eYqaZU9sFb99gScH5YQI4M9y57TKQHwrcQ4CNpPfOSNCntY1WQibOppX0yhtYyF/ZPe/ePJUJJwsCdfBAJShDkhD2JpPUIfrd2g8Z1ZMQdRTLRBkYf3hlLm2hzgn3oFdUoVeiiD+KhIArp2c6ANwwaeG8L3bz76AdSzqVTXL4pnqbxXDUrGkG0Lvb/5Z6XecCNiVjPy7AbSkeur5ec8ftlRmFFmaHMdIIQ5AE2IpNGLZY4gMheV8daaF0ynuZjWNlznd9kGhb6lceCvNZ70ZXGJimjaC06c/rcrOvKaUEEiP8XCE1qQbvIcaz+s0agAtPaFI60YOqewKlS0fErr180Id6a5VszHWlc50dga4angFxCcuIEE4wl5z9fQQ/IvL6qJ23M72w==';const _IH='e346f2900d89f7c149f96651aac4eadeefe67d8884c64ee95df1122ad1fa8942';let _src;

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
