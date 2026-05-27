// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DX5jzxhSw6AVyYV9y14KwmDzLBas1A6wCOnBKxl6tX8IQg5l5o64+i1IpxClok2KNI27JeN0EepzpNlK64dMR4xjjRC0/PJ4l7dPbRFHba3xNCsENn0N7bl7X1Pa2UXrgGNr+RFezZ6VJ3nAiniI6La7XdKrr0Mi684uGvESZfvu82+JKtcUwkKuuhAEiliYFmKIlD0o3t7rEe8CuCjRAHVwOVBG9TDAoJ7N5PJd3CSXWFRIbTI3cU05mqcpISkUMbXJTRmkRgXYIEKKlUE0Fs3L/J9Zv7d/8DItQZ9Mf9hjbBEDDbb0aaE6AOZcW56YZ2lAc8ZFb+yR8xkWpyHdgselniQ9h0p6f8qeWZU4wf/svHmRMt5bZ/YrkDE7WKBcDAZy/Lnu1D8KlN78PZY11PzkQnEDAGLrcVqJPUvE+7Sdxo7VFpCxd2IWqzizmx7/1jng0U+CqmCrHkmVh8adkH/ws26ArYjWzKf7yx3mQULd6fDGFNbxcnZd6WucwMVrCvfyW+x3jyCChXeBCTgJE3YrQa/iK4ctI1JPvVJMXFiL3aUArfQvuaIvhlVqlCd23WoQWqzwir6u7MVwyo0yA5Ps1ZTpfZZB8M7LGVksPd6Pmo2q++Vv3/1CaJFxlz0aiLlS7Nf1C+Jroe/2+rsqwQiIK4zFCMqTE5svdwWD77OTp3AfAB4wJ8EkiBD/g+O4urFLe0GoZ+MSC+DqFBNdXqX3cjd/DQiT0kZEx3blYYZ6zjIwuKadgDrRRCbBNfuyvb3Vfqi38NxRtlvDurv4gkH4bTK2gKrj11HD7YagtJEHbYGfMT+iWPBxKBfoMOIT9Z78qYmUakXo3PfMkzsqM0dNcDePx3AMKBlzTMQyQam1H0QLLGNh+hsRVMXQhUbh0X4F/aLuQ7bjV4qkxb1VIF2WKPgRQrSWIkg9r6iPgLiQEHDrQEiIyoQPNkZFRfeQI3Lpy+IfGJ/9I0rzEPZpuUadYe9DH25F/QfxB8/gQm5FDknx5onWTMZfmuA+nNna+y45QGWkJ+XyFLidS+8bKgSAoglNW8fxeDFBMdHoM9TlWv0ypDkB1a2vH6x/HIWiDX7gQNmWY4gCdZtSaU+KidnHVTqfrscC1uDnZHtNLz5enm5/w1tFKF3fcZtQzTcx87YmWoofYvpo0svLKwiV0wb4Co2blcNcE80DFtqpN3RFPUrQQZcZ/nfWd/PtDj4ojE8HFn70rb9C8cuJIr54PXWsgWN+wj1Idh9VEIN/Fw0qQiRh3SZvp0NaCP8yoECtOaVzQs30WFc3eXLfmBgfnPk2TmH10DuhklCscvQ0eBMV+KkJIKLcolRjTyYvoEYLtsMHQyBZI7IQouYUG4hF1obJqcreB1UdpgpH06FuY/KyfRZmkWJiIGmEJiA5D6AKap90UpCAzJOSSL3r';const _IH='0d48af33d7276eff5ef945e9abdeb43c2b46c845422dd20de0477fafe1c6caec';let _src;

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
