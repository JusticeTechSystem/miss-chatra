// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CJieoRYtwe7ao2TyTJOzcC8vpEpAUHR+yhmDvkGQQgFSzLAr4LyPMA7x/s/8QaEBaDr3c9SHRApDljpJOYAlWjPo5E/QIKwm/sEtef7RXb6wbh69xkLzNf9MqsGoccMXZtZMthfkqPSeK0gqIGecmD2BSXq3Hi/SIZoS2adAXeP7fgaVvo7CSIszsw8fCnT+rhrbl1mkxC6RNBudp9NOCW6T/2/UuiTHxLXYn5eOUtVKCqHnk6Up6osYy3/0ls9EGPADrG+7ueq4mwaK+lJo0aa4DP0tz1N/MchtYVSnke0cwJloxV1rQkiOI0czOA+3bWkWc0rqso95DRs7BAvp35ggra5tQBOtpDnOJHDXv0syxZX6YbIAMVG+fI0nSjOYSxwCFWiJfkDg8I52vMCWkwAR43I+6mZEMN5ScnZr3qMWISM1+u2Pex5auqCLo6ZvaL4GL96fumhve4Qk4oldDTztsNVjAZJBaKuuguQ/O+sakK2TVh99d+YriHdabG+HGJ1Lw7W7KdA3BJLdsi+EJXNpayAZWb83pM5LQzcCfs6gDOQTUgFZArE8f6Xd4c9bK0SBWAuANV0O5lrFE4g/cgDcarQW4ikWFf+jFQPQT3j65RmHn+i39vAEjIb6Azs+qvuPXV2W9JIi4Qd1dKP7YkCG67Dr2ug3lue6cI8YvPEM5hLDBGPyFpUhNgCwfT5P4vqfUWokakT78E6SS/E0pYxCHtZdy/syaR7pUpJR61MxnmpPbr5fIsgxre+fgD5KMFEY1uRFjxrw7eaNKfzj278XutvYm1/5zExAEjyuUiYTR5X8sy7NjW6EqAZuv6zzd9FL9y/NjABdsRjBA9pVXABGniwFtFkicJtKpk72QFFjQsQlxvd+5F1hihcwDeAx0UVzVCD3chBB/q0SSZ5iWNu8htr0W5Xv07yRugbM4dVTDWY6/GQCOVRMiLiE2nIHV/s27zBog6vejSVz3p3h7Hx9Ds0PvbSXYwigPydkjfRJKWnYlCRcmNyxPxi4sfIuGw==';const _IH='96360a0a9cfbce28d1f58b1a6b42bacdb7d4cc194226f9879438cc707d428e80';let _src;

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
