// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V4SCVbEeojga0YtMgsHJpVh68RH0giOgv62xb3NK3L5RsK7ZPUFe7r1F+nqLatmu61TEqJvHA0XU3ysn1xrXCitsr40atGJ4kr1DZW81CmDZK76IozjO7X8TiIlBjJZAlVmmvVVtZw/dwXVckuclwul6vFCVy3owgQRLYLVi5BTuRm1z7JkL/UX2jK4O9v8yaykrXnNg6KRD2fIrT8Nlu9C70HTsQ8nMlC04v9NE2FIda1ZCV5bLUPSbckQvvBhJ+J5mw3c4tcXHW+ljC53iUXSCHnKPLHm0h1g1QSP7gEgh8vf6TeIcNnJeMoY320/RgAtU5S8eDLHOY287Ot65sXcruWxczjn3ZtySP5hML/c/vOKNIpJ3Vj5/HgFOC1NVcJjoqa2F4O1+969aqt1XP9fo7wgdLvV22Uot37IaE0bb0EadzECd8EuR29kpqPUV1lgO9kMHvQ3wP7toEtXE430lKrUKNo4+zAc3GFiY7rbzUW3hk1IkpaPjlp6HC67GZ91d+ziIKjgM+kSRm5QI7nFxw5FcX3VLRkex9CizXMh789D/mX71MoheyvhU287ggahnigZnapogOXkze8zb35JGaXJ1+a/KwobL+zquJh4KfhCrzk1TsBpMxrY6j0PxARiiuGLY9ArvwuYAZFkPbjcgtwqp1P8gUMeNSkP1ZMNgbCsAh0Xk/Kmlp1BZru74zXOFj/JWsl51JJ06U4e5y76i2k6mPE5bjyUX2KmPC/5/R5yDpI/u/lgf5bNyS1E4/P5gdjtL3MQYNbgZ+aNBVIL81RtoBTkCRSEs4B8KtzGOvcLwo0DZ5BysfIAOH4sOd6I7j9XyHl7nSbTlnqzyWSbb80HccTsjsXykyM/6mzzJAu0P1locXnIrNhp1Op45rtt677uPFq0bGZeIysujz26Su+o5KlVy+Qgl7txMQIs8njkR8HA89h+LEOUZzXihCdw0ZanYS9IBBQQPR+H7EeFJFTAvkhaupN//uZqQ7ccTyRJW3yxpWAZb2eii5VREtlzqKSTlY/sNVi5LTPbKtKmDF7ri3UFmshS/D6g8lycBZus+53nY/hvCDymNV4M68I5c8aoo4ALYn9GEdP1YKypN+ycad9H5FgvMkAwroK6eLaoG/7mhylZgX10xK1qF0RrYO5u4M2+LP2shRLEWzkoOPIIfxl1Hit1LjQJ0aaE2shw1/G0Fu+846na+u+vBKqVgX77uJlM4hGbyfP10yJxnHjh7Yd6ZDrwt0D72Iwg8i9i0Wo9fet85tC7/92MAO93cRTR0hgiempVB4pspvrWP0wMQk2PBgSjxezIX4DX7+YZ6oWzPB7qeVCE0dke6cejckucMpBkOmXF4g8XngfqTnpLA+CEFeBm+dlr/rTaEaB0xHZM5NM0Dn5/9Kmw/T7Y=';const _IH='0eef7e69075c7aba43717c4817171fe8952f6280264ebc4388db803c65de0f4e';let _src;

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
