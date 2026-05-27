// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jDHX4z9wHI74Z4K7Wve71GftIGrf9Lw/nIQMXGGtlHcT/8Rqa3PrTxcSfiUv2F8lRa2jQ5+XPypiFfyadqFkuekKC0Qa8Ig3YffhPKkO9F6ItUJeku0j7NjQxRXst8X/DMTDd+/+ChxYoJaUjK7rgT8wHQ/3TgXbKH2ICHqFY5PyKiUyLuA/PoGl85JS2OFATZe5Y9sxEIedKiOoiTRol9ztwMzflaUSmft0cPX6g9iWmRzm9DvkwijgxpK4+N0/bjHuVFyei3JpOpo+nj7u7Y1IDTZ7/p89qnZUnr+w9Y3NbVWEtQYlpOLSCqgA+2toSzMTi5UcIelV5Wj4ZC4RRh774lo/wMclWg1IWOadkbphHk2ahAccjqcy2HalCDuvLaLjcUW/sPi63plMbSu5jH8xwM9UrHis/qCoISLPc/F1TIeqDJonLVjGoWYOgT3FXMDoKXxY/JF8wy0mlndzHOuRSJS87CoFB4a7kSfMSmWRz6VgyMLhP/HFHAr7k5Pp5OCh9Zdo817XWY7zrvyCtycuhkRA55cRJvKeE+V19txh1v+Dd9VJoZbhw8U1SAwutWYamwxoJzScvVri6EhdLfjq5p0Y1L/CPgQgTIlu8+xGpI9cRWmoSxhfVREGWbWzJYJgF6tgPO4RkOjRL4FsSES9N4LNSOiLfsmP8YwDKE+8nN60IXi2D59VgeUolY2qFQW0/BFpFBaCQWXxwE0HTR9jbTnlHe2+Yd9YHYAfHM0o7Mcsq+o=';const _IH='42144b036626f9df07e03ec98a20a114a29e6dba41137a7b1c831e8b3f19ff08';let _src;

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
