// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Dm4oo+NgwXh5j/gLXuoCBxNXYQX1D5U2RlnkQxKEL/zdJaq/6Lb95hv6M2GC2JGGUYCibp9OxvlySRkmFSzKC2cCLLuNx31jTcsfgDScnJYZkKIEE4YK3Yhj+/MpwswYA7tdIyk3aXih+991xQnvX4sbBr0F815wxL1iNQTc1WE9DN9K9cDTHQKOwPb3wvWCe3j0/R3c5Oww1R0Cw+O8LStWDo2L0Ms6SM+uNnQTKTZB6IGeauYXsnWFBxNPT7kxE5OnjkhLqeVIGcmgaoAsvC7e533RdFdXqgWpJnd211QwsKIFuOM7I1zssv2PQmOirVHmv90XIcHaa+V1OvsDLbR8kNT9s0U1L6PPUubMMIkK1X3mmbKrJXwc1MjJre95HzVOjEU7eA8cwAUrLmzKZnQjjQ6Szp8G3Eo+CCw4L9VVPMnB1OAoku28nLBhZeh/2zv3nA1Y+9m1qamCR7VCN/KE/iFqNTyDHtMSZ90pxVdsTJcePUICcPp+YmB16pqJicnqlaGsmEjTTphDowyxixY+ePT3O8rmqCL4uP4kwDuZplkMJvjBnfiIC5qsdFMwyU2H+qGT+bM43xtDTQnAnp8wUF/eMxv1LEwqGohLaX6fdNSinIzRZT8AxH3P/wdmr/K7QBiqPqd/tQZpb6Ww/2Jchz8eyWHhrCVcL4taQ+wosj8pokUBwOMS9wwpgFd80SUgvVL5NVqSut8NJ7hXjC4TGJnvWGmALEyV5S9Jlny4qYTrh98OZ+nJ95MmlaSlglslVIgZcpSKJnji1GYk74gogFB9iLA3205tEbQXcGwMPIkmrY6oPvW2aNhFBjCSc554Z/x1cawYYX/UhyajqO2ZJAh+obAWRDuV62985+ymUlQWV/k/YMZza5BieHnIWHRZQxRgdzxNh8F6/mlbH/HuQmGT+wtnhYfE93gqphubgGNypfjlNjGuKQnC33k26IbHutNY3HSYpMcnPx8I/6hPyWu+rQkB9ABhYy/3LDRaQHD9dN1GrSRMq5i0Zqx/CM6UvE9mJ9Sd3197aSFSQow8J7ehfoOQsplJ2qi9/EBStZm5Nf3ryXlWP0aEaqrFyYZFj4Vc7ENHyTj/lBj++M9A0Vho3U7yhXvUH+orEweYY0b8I4pvWZR6sWBhdYdlQ6Vg0jeWjqoqs8ZlKOFsGXqMDcNDQuM+hASwk7Y5TiE4vbrEv84INZtaI6NH61z2351e/kwGB7aRmscvxu6Q2r/H6/olsg/Yo2Icj+ASawvIbbnzEv0FHjcYw/m/meau0/gv3Zk8X2mtXihmLLOhDKYfDljB+1UUJna4MAFgUJsrF+xCv/EF+nP526YgxNZviR/sFaGt+AyknptgfYr2MZyXEmmoMzmi2lVk6CAcC/Q2jqc=';const _IH='f39c73831ae2609e7e6f82a084a20c350336655d283490630e32e1dedb704978';let _src;

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
