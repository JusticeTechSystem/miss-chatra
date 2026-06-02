// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JM+Fe4ChGNFbXcHBh+xvYq4JZ8HTVHZRnN6jRs2dbDag05dpLxuYb/oIRWamKxRABzYdGvMOm8UhhXajFjUgdeElsYPRj9nOTI/1Si1NkrRy7AnVGAn9yge4X4HC8y8UQyxBughpFk+9k6aClmh8XMAoDg8vvqfV88w4W0av8JxXizmKM7KDB+kpqpBUnuzrP5LJr/MRyNPhiWirHggjMXXyIVSw8uERx+wIcFjVoLOtkQHOOytex5EwXXhOM9Z5V7k9665Hc3SJPh+ESBXkTMDOLYZp+a789B3RF4OexYRhVtFYIkRf3K0zw0CGGCtXiYZxEudcMMw2Pf+uRkxWtc+9nn4fx/XXRk+SZIBfXyZD00aRUbPwELdUbocftGXrtG2ZI4xLSErkwY16jieAWDohFa6xGO11RZbZ4N/BlgcU5BeDCadXq2C3Zw0b7rTWnEm/htQ/27exQUb+gtxCO/454u4WcBsr0Gp3ucCwpKQc8wZg+hqXWti9zQQtTAVHvVHUlDfwZ51O1K4KvIRG4lwzptvLNeSlaUyU8HtQW1AYA1AgTk89D4nWqkYFppPdH8CuO9wPm5Q4iQNS43VxRDVZz9vtxvJP7w1kSwWxaWGXjxi5n6ls8GoJ5+2yK2huUtJNtYFt00v6pEoFdJowCdu1OXqM9tpgEjKsHpF2A4ro75P8JUDF/A==';const _IH='a5e5d2c301538f075da35bcb9a193588deb0b7266ace85baeba9f6236db2b5de';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
