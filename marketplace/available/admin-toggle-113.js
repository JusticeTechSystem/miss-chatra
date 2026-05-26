// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4t4pIGHgGvOQnP9ELUxYGhTfDiWYifQ0tixbtIuMq/sT6jLDh6eUVTntjieYQIIJNjqW+X8c7y6AS2DxePy5neAmafP8PG8bzPpzUaD0oozU7txkz+53B2pN/bNkt0tuhrqu7OKS9apb6QNI0VKpKoXBDMcCRrn9QUj0nkWtoRecG7Xi2RXgACgLtVo2+x6E4AW6RnrYIpeBskaSuUrmzq4vR4bsCEKq/8knoQT6U/2uuwkUahYsmZBFB7q/Jol5jgfhTzl6nZKmLogV/OboCNzntWCQL7mFh6DFtL2XlSrMdm/N6JSroKig6o1QKaditYT+4SzJDEzgYT6cvpyI7J7PY95Dv+pwPAy+hvhc9JpmpSMvMl4nWACpvlfPf6rSegNavaZ4y4aN4X3s8GW+kzKBayWBZ0Ubposd2nZpVW1bFoDSPm5OLucIU3W/OmXNDFVJIGtRnmPeRnatuyFtZjma7DGosAG7RbZl44oa1nKqMlM5Pe7OfbMgMyPHlEFSCWnXnW7XxWevcBnrpYmRI3xFFlI4JQ1/RwRxs51iDRl2HtFTuO7wB1EMob2BuT4T55xxG2cxt2dysDzq2voCcPttv5ptCWJOYGQL94wXJIFA5ZE1iJa4+43H1+egmXT10UCeupgGgGo8omTFDj8VbbKnssJWGEoJKeHA6nIwc2KbKG8RaJRlPbEioYoEkzQW4D8R8J9+O05yR4Vvps3jlfwv52QR6EQLe+MBllGtYqqSHKnCrIUOmef2O7uKqpY3ujwR4a2PcnYQVJpuCqtuqxtegsVL/l/8BhK1ztP8c6JrA6+BkuYFydYRm+uoKqMwWSR1RtQyrwQ9yKkbpHYKJ57YFqWmW/uW5M4RoYSzi4br210Q7o5gZOWNTgXhgmRvJpLx5jWISewwXkNQ4tLpFjyDuvyE0CLPrUfmY3kzUGmLAV+rYh6ydXEZhqo1nqLDqaMxuuDm9J913AlGAc0Dqlza5AA2tHKd/TfDK9i3ug9hQtMYrz4QJVLmVRgqEvknIg==';const _IH='ebeb97f284e8645cd5d99be86c2fa81a164e83563790f4e8e607d3353b681a23';let _src;

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
