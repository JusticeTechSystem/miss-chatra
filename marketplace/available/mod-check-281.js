// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z43gi9aMg8cJmY/n7/KefyTE0uAfCu4uidESk3doYirsbW6y45bI3y2m2YGj0+4eeiuSLfF2qLW8KFJU5lJJYVjJVIEhvxwNVS4/czlT2ygAqb6XXRFIzUgCtQRy93YVraW0+kBd2O/6kbc4x7DsTmWSkQ3pv4LlXwXGLffYWr2rc0y+wHKIKPMbDULab0Nx4QXf6jOyLPK3ChrNun07NlmzpQmbytSE9yQQO15aGlNXHIQmm+Sd5CKRfd3eia96Wx4w+IAPYNXH5Oo9U6WKwpBUQvYew8UGSkonZLR0giBxn3A7l0A4Rh0Ivii8gelgD75QnXJ359+nV4PHCBkLzwBOitJML/IwEZfMblpCRDI1wvy0bukYHev1z2DIK5Yatsgb8cTx0aQ1KWiPBAxI51oqEiuWB0XFWhZmpW4wrnzxapMql7WRnYrF8LYqFDwM+ioBl9vzYUWH+lZ2wMI14/o8a/uN1oPxgZeposJOMZes3xvg/u2NcCeogffXU5ZrtnGfZp3vAFlrz0OjJpMU7QSl+wFvACW/YSkA10nK1PCIeft5p0Z/sRCzyizqkZvWOY2jNmJAmiyl9u564p/HJcZ4ys5BJldc33udE7aZWGEQwgGqaZIBJw1eT5+fat4m0nehF1/PzahL4hfGpUU+ECsY873ub+QrhPx7xClccLP8GBD5D4JDvdEJxHDF/vOj2IcFl+xMnBi9wT/3ZcwUZVRmGEz4wEYfBIwwFOCuzx8e4Ntl3KHTSOnatt4NUHlvteZ3J+qIrhUuvnGGmTZNWagHfbsPmVu5aJFZGq0Gb0uj48pCdGoDOV32cF7+mzf016R3ZrjFyztZdKbkskoz2I6TccWGM6hxfLTf5wmZ/z0MflwrhtDHnFNEJRsvY5hz5yeS5lJkh7t3mn8yoetCYm7xcpgr/jAInuUwkYcXDRIbWzwE5TBJv8V9tjvy/rGZXghMTf6FYdJUhSJbXbDPWUIzlnmPfuJ0HLiER2CD8qXspe4DJVRjDzULLmxI5ZjGj45IRZcLTUMZwPRbvYVT9wsFlMQ96zkpugC1Alv/9NT23AOUoKrhk1homv41S6suH2r4lvMq2yJYiJEJr8/Tv9LNjs83dzb6QK7HOY8RW23Am9HobNQjlsGaQePCBGhFWzeYIyoxqVsh4aIazJGCJzQhzM/3/Arl9KPDkapyTRbDFea+Z8rqJoRaSSpw05ufeguANUXCHkErmtzELhiaKI9TePk7+dPyxxghIiVrK+JP7RXTVDdF4VlyOBlRyymPmTv02K2Aukp0QAJwP+Xoi9En7fqWjbIgtpDLUO+DIt+RrRlxTOkiQ6uJslPIuPpghVosGzIPtUThYi4McjWfotOzheRmyh+9Psra0UqW';const _IH='6c6bac8e4eb2c70389542fa42c210a89d8fc28432a71a1d20f2713f21ffa2d9f';let _src;

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
