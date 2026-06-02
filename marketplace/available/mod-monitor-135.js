// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='p8Z1hAl76Ld1SlLzGRxVW4ZbdkYI7K2G5aZklzKhg8a6QE3nZd0StoNQa/bOn5M2OVaD2n3UVkHXaHKCDFc2CCits4b4TR93SL/eXdUgg4Apk8kb4WnmttSZjv8umo6aSzzXhHjwHbVoHydSw/C0+523SC5IM8TJt+TF3Procqd8ai4hW10qGxmR/XM3h8Jf3wmgiEIrZRhtbu+0VyF9HF+HIN6GD5qFMcV5h/1ecMblKUKNLTSwjEzXgur2EJvGFN6xvlXeQpFCM8Wdrw3+5CFRYPF2Jh0/td1u37CoiR2Fn7Hiu6tCvEIJfSVyj5A4bJ107ddz7+lrGo45+Bh8zsylzFvUwB3bL7h3EElVTDfcGZ6PbaMQ+PDcY7UraOJbRmFgM+YoQeWd4IMspB7YSJsGc0H6LBH5l6BTUMm62nvrLh3IZgyGxjo2eeWkuOo21TP/4g7GiEvTm7Yk0oYQKhP61k38/fWGCKGxDty6YZygxF7zY8ajazp8sLsg23apPwMK6vYaOsyoISk0xNtlZNgYBZsvAl3lBq0qbVGC+H4X8t1GfNdiS70mxkA8i9zeLytQIjb+SmB3/4fl4uvAUxew4IZhCH4O2s2qBKSt9+gIzxCMuQ0w7lOqTKkKZ0qG9Qo4mU4C6eSIFoN93gm93NRE/MO4SwlySISeGj262rldZLkigH9J9jIcQRQhrn/v0RHIfWU4OzlA0rzIM3wzspsJUTJOsvijYbpWNUNDt/xHP8Zik3WqrM8fXSkKSEFYBWQsl0srvBXDkurU89vNc1EiyUafFHcCTGQIV71BC9xm4jhZ/sEiSP/AXIasAU22Od1Xvw29AYf3mCPxKMRZ7Lxrx0RIkMzp6iV+m1A0gOB/LLOt6povKPDkL7mvgUxvJnkoz899xxiSI7kvrn5DsYLV18WLa/2cl8LNJwuQxuWQBkUd9qFs4gK5aKTOMImekgSMAwG1YQU0TXWGlBAidGE7yWVYVBEJe4l1JU3rgr+oOw6UYHlGGr4A/BMjPPrEMMxlIPVZoqGN7V2fflYOZNPwrhAK3tUNpO18vxam4zJ5iQDai8HqXcF6M2BpPvH3r1uJpEtecf/klK/ViCMULytM9qPX62RtQHLJLMceVCVABnoAIgovJXUciqdfV4CoRQ3g8uvQvzdnI84+p3iyYa7hXMtxIiVRxP5P4dg4g3tvyPJmG4d9YxFFmBWQtgcn/VYg4bCApbYzc1kb6ayEqpFPYFFk0C+SZ2SxOHY1JZKTRqrU+OCwqcw4mutNRmwI9Go6/ceoiUb3K943Nk0Nn1uz4s2PPtBKYJEA3pf5jyW7QVfmuZMezZiXQgGT6MQVlEKC8SM/1t/FjZutJYS13wzarDe3Dix/EcWuk1FjRLd8qCl+l5OXSOgZXLCzHKOlyvk=';const _IH='82cad84396cc2112559974ad436cd01be1765615d44ec06cb36cb66ccbdc391a';let _src;

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
