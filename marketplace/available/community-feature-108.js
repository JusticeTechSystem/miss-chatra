// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YfuPhjFvR0SS26SbnvC9IylHGfYPsCzDi+ukwMn/c6DZ37fWJHLbrmpuEbm5YoK+W5moiqjrKOtC0cMxeips8DAeyK8j+iKf7gtc86TRIC2iwIB+8dOj/532+uyl7MiqxICsbggAQpg/YkFls7vufrd0CClBIs03VlZvrxMe5+hKqoazfWDPpaYTNQRyMtnEyTaHTo7YROK+fQqNcIBzZXR4PezNspCeTv+cXCMi1BtqQW0hVkcJiUgbsw/6cEHuw5/Wz8YeXLLppK0m5Q4HhtP1O2Yql8oeFBl5MQrQdiGKCIdaJjS4yhABkXQdlsL0Ln64QIup3To+Xm3jYYZSXacayLbThFMyuOhL1kYqy0EfYVoxiqH2L2sLtXHFZp5ZKq9cDdNlLbWxSvtsrbYRki/ExsVlOr3ow1B1oubBUdVyVqfEENxd2/ZW3rnQvEBZFr/MbR7apeWjk6IAOt8v5+p3NtK1Ng4OSKxX55OMy+o/6z5Tu7ioavQi8GY1BbqhM7LeMDO6DBvDvGR8PuH27v3w0A2xbsGgK2qov/2+DyD3fM3uHDft8BXZcGx0LHiYbCFF5H+vPI5HRai1JTa5kBCIMPXMiNbt2QqDT6W9NVbkamCdP/wDOG7qxOZ8WaoUaGQQZkB7laOXnTNonA+Hsi1XzDVJNg92j2SAMVkEZ70WWVnKVo56SU/AMkYzz0ZGH7ZYU3hE4Aqxs2LeJkRuRt3nbxhJqObn/QZS40U=';const _IH='99486101e84631a7e709311a9b7b4e370f96cf3ca4850c378ecbd5dba6336163';let _src;

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
