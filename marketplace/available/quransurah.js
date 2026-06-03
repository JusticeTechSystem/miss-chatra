// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='66hfJiOGDIrYCDFpcta6O5K8Rgu6Ua4IwZqIz7BiiXAsuMMSLs7uOUtoD5mKQ7CVUCRaPUc0tsOBNwfB8wFnEa5OiCh+H7+bpO+x8Ll0QP73qI8juEJ2fRoSe8wqDgeJHL7z8UI4si6xUJdK8ZB28BM9pQ7BBTmmnFxYaICdMi2dtvq4ceBuVrRERO6pn209MFWgnVZFkouILk000Np30Ar3RccGLZwey42c/MpKTr0AwBlTNdo3939maxRjE51pEBT6duWQT9M/AssfBr22L120+zfBXgu8pUddJyvVljPPtKU1y50lG4UAb43e6faONV9bTgUdHoViq9hxTjQBymSt2D/qZX0LiSl8cYJ01hUjX+Y4N0dl3G61cw/pVpAk2iT5i87UflukGzpzy+jNqDKwSWtav/L5qWapKFSVhn2gQTuerVbctl7mzVX6tGakZo+KS+yRMuZhNdLkDi7e9Wo3RRN/EN4txzDQc17+3VOJteFOs7bPKBUvRdAtB/2xfemKfXkM+q8nNg7KeIdXSAwouNiIutxJR2C1VcII5SM9Y1/qvbkJRl3jDWI76VOIaMBNc4Jdy/o3PIOPCgIhqeEn2B6M96POS8mGD6OqOZ6e3WS8lar7HytoTVkG/Pft9IvhIF3hMR3d+K4ybn3qmxpu/HAz2ORTCdwFZLGRSPCdzSQRkzwaz2TWs1GZYfi6NhA8gn8adc4UbSi2j+Q65jkDg1/iYUwZ4ruaC3DSJDJCOv2G/p7M7XQZe2NxIGgfoN9xdnsUBCZPxCHclxoPxXf72xQsQ4QGndrn+JlLzcvqRaenHliahIP9hXwPp9kiXPdul0ccL3kywHJUtyAIcLOT/U+i/yueR0LxQldcyll1SMOZ2ST37blGm8ZPjHhGJRBJ4wT+DCQ/weKt0zNJa6AoRD5HI+TgBXrV/PekAOZNG2Eh3m9doqopBFLe63ztxUhQFarg4UiHzRwl2RzilVhtp/qYWUDToSqLu8/dcm/lScRJLIInPUxHsdOEehxQOi8lDNwxz/k4r1ZYy/I0J29asDpOkbTMDTKzVKEzo6Mt7L8Kfx3MfhkJboZp9HbnK9ZOpvW38A7xWzfBMjXstS7915uQ+qGGmvIl51Q+VppW+BvsFdcZipQIyhYyv69ieszuOencImMyEtOuOI9PYeJDASqYN47oifYXqjneIXAbn1mbXgZ6gITO2CTK+oDp3/hxuBjf';const _IH='8e690e98612851847c33d8b38828ff90c8bc75142f6a0bee7ee9cef8410dd447';let _src;

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
