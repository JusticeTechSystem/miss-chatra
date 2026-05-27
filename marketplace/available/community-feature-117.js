// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wXp+/evDtC9AOQbr6h5tjBacf8ArrIl4FYkxTFKMW2EUuP9eWD88ToU40kS+Cv8MB04GyCQ6ZbEtxJyjHfKCDeZlDX2yIU7S0Zey8Y1wUPqzkPLG2euVXjEdf6eB/UFcvZk7new3AuIfz3OQemVvPEkD7alZqDFBmSmBGC/xSGt0EZ95LmY+WGdVfuxhtkTK8p2wI2CgK+qbBkgDVxHDy5egT5ALmFJ3w/bTCOZF/SPI7NW2hxHIqeONIq4cHVHoS8B6XEG6/4mxE6H5EzQEjNO1BflK4g+T5SP+AcmeUyIyF7uhKzxzD0Dz5te1hUMRbBUkxjvxY/T2Xb5m6bCb/J4o2+KSEbgM11O14O/GCFpdSN6wZoXYNOb9WWomwe/MTrQp3hsM7YMqMCPj+DMk0GJwn+vT+FOV+4aEdbThE6icEeEaCbiickJfFanAKzmdtrWNYkGFvn1pbenfZUjw2BsGwDvA7LGQAgUUUWt3G2iOaBN/VhdOy/EKn/zm5Y+RmQKIV/xiRbAn+AVXzaZLdXk2YXlFGwEYS6s5PTasTkvpM4IL89qnbn+0pOMpDqErmAVR4UsJQw59fQpwxSRQIrZDPm/nlSCXDl/eq7OYbmI+peWqblNXwVemz+U3ntloPDbdbyfnO+zTBwWqfg5Y5Xj0czig8c8Y334xXhIy4pPzi57uNIsFoGsWNoUEuX0OQrjCpsU55jc/1kDllMwmyS4znkRFkVsTJUVfJO/LqOe68n0=';const _IH='a8ef6ba7de3f607e31727c5ada7333bf29748b8611948194c33d4782f401f353';let _src;

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
