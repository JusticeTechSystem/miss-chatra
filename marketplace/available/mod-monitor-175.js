// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p6pnMOr9ApGqttYQuykCePYPFz5/DgBp+YFR5TnTlinDocQWuMFG4O+F8r/1z2r7psR0kyTMNEUy29AVZbrVTAMvSe0dn8yyu9nMw3xf2cUj1HIh1BUbugwCuca2OzMmIZ+yQz8EOhwE4E8b4qXMMPxx/7KmM3MNIKtCLBTsmPHDfyaXTZbpvpg+YB+zhYhbYrqHFVhqueZcelqb1hnMloYECQK00ZsJ7sBmoLRwxx9uCjXooF6JsCtV/TWLUoPvV+1Vn5kV4S5Tn2KIoU/z589heJn3dPJQn5KA+V2I4Aa9CMqURo57XT0broTRR7BOsiczU8iJOcAlyEgR1VW3uoJmtWGz/iPeu67tDXSADsyguQLqr2QVWtqr2xu6HrgUWDYXVfLcZ6ZMXChioZ24DzqdjLyzEKb4Pp50VCOvyaKfnLDisMMmyNxoLg3I73lQ52X/cDuyPeUBbuVahVNWSiyQavP8skMS5EaLiJIKM4wAZXAtTXNiQ+JI8LII4X1Yx2Ui2ivb1tqtfsWzHoILTr87np7/Ztvfdv6vZgzoabHAr4/JkmY6Fhv5k/JzYyaW93WEuYzmHx/wB/HiVICAYUlnTp86RWcRxfmSJ/t8YhMOWYOq8SFr57MgO1wE+Yz+Yj7ln5k5vNLYVGlgjxSIVo9Kv7B0rNVl1Ogww2COOxolinzcFr6joV7LSV4CJGN86iqfeG8SZ9w+1+2HTVbEdK29J2Ee+BUHNxuntqecezbo4UdPa/3fqO0IifVI2iA4vECAXXmm5zqLOzcy+hc1XvSGfA7JgpbKJV8bxfRiK7cvy8mngyIPDrWISac71VVZvFlBlHj0Es5FirrQ0rFEmzOWTyZ6dzEwQwY7hBjLiJu/f8+wT2pL8pZAJbEZl832B/01XXHb8A5t7K8/eq3MDgZOiLLHaxxuWHY+wOpY9t++KFBNBeveR/lgDCghZsQZuOhS0Cf3wBnaPmeHtSG6rUbZBaFVHm3xAGIOT9/EwPYhYrbPkWTBsjvi+aCD4qnfjUZ2b8PdBkHKl2oBleGJkNBmVS/LOA4FZmfF5nVI2kNwEY7ZScMrdOqztV1q1ZgarRzQKmkiRR5aA5SzdSVkkqqorAxmtCrNLB+yALzA70VIx8EHM10BE+T8A/pa6Kw+dM/u+smV9scZF1H/6cU1WlfegxdpzuxL6lYlTK11Gh6UVUzEDVzkw9JgEcFuOzZaPKYxpHZkTCrGW6nnUsXlkakjgmqvGK613iGd5OPlBwZWrzHJitX5h5clnTQnevY+pY5UV2SvIBY86umLl0kQVq8ILZf9X8UphLVIojYKjCrj3xwb2JnM8PtHof4+Ns5l1wHaONjxseogCETQmjOylz+R0QqoWCVrUi9dumIHomYFlpN+lqP91ZnDLntXl0tEfkE=';const _IH='f52e8ba1bd0acee9db1f4e186e84f736ab91a7d2206a49c4022896b67b43b433';let _src;

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
