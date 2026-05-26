// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='USBwplGvRtUAl801VhB0aC/HkJbkUYT0iKreAyZtGX6h6+RgXg53uAu2JPV6myAFSPJxrBd84JClRRndDz72BjPBS4CwxT6XXGlYVFcQUshnfOgJin8D/b97Avg3SaoYd1xdldGnYKZrlpHsTVdyRHneQWqJqYPhG38nc/EjvUZImP9NnFhsyamLTKChJcXu/5qYm/zXnhA90R+KgcFZLCiOUKtnp835OtQpr1+gu+/jzdr1Mt3hBGAtk3Yt+U13X5xYVMrDs4B/3OkejavE2NxHX70DEbDnXqiJ+QN6pj+biZjEixqeFaKoDv/EhIwB1oY0JmdexLlZkr9JJaFnZEnPUbkFSzZWIoDS+sD/i+G+ZzGgjuWKpC2IgmiaHzJHMUTz2bNIiERRv3AwCWs6OGsof5bgP98MDBYGQZcG/ZeAQQ1YHn2wiqQchH5I70N0tUhM3YSHY2qy0MDjFEyvSPcTl+43fMwja/QhNgukCqwJWzaBF7KleEfs0qLf1lnP9pOiyS0mzgJ0CcCW75K/Zle2309YRjUcQ3/udpyp35PVCeHejhwUzI0U07SZCvMY83kx6EouIYD2Q8mSfaqgGwZT/qBykgR6mfCCMo4EmQ3TkMq/psaDwhAvue016kW+Itj7kt4iaDHuoZ7bSWT0qh+y5XzL9/yrnJnQDva2SElHGm1t2jfVN1eyLxW7cwEdWS3SnqZ6n6nZ0QeuGjpTI0QXNsnvtO4/PA==';const _IH='f07dda9e16e788bcaaf816cf14d640acf5e57db16c1c8da84fa720dfe8305b9e';let _src;

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
