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
  const _b64='4EIgJHdiMMOnQulo8CA7zrtA2vIH+1YOlzq1cwDoo9g7E+XlJXwwBOKESzTP+Jb4n/VdON19uXvPh4ttdCA0qnKogER0GjEmfMIrnanrWxq8l54j9KgIWCjKkj5vl8XgcVivDgIZc89w57SRGL4KrWQh0Rj5We+CmiKTXdqmIpGaIY7VJycLe0DrUthVIwv7QV8qsrrncoEm4i7km7P9aR6k57WRDePAYlG/YaLhMkTCD4XIQKVzKbaGElZMorfgsSg7GzLUMwWE6OOciaW+Xga1Z6XywoLcoJn/gJDI7wHiQ+DigsI4qacvkZwDYQ1/ULyDON3MMUNf7mMgfZeVOevaL0iFmWOwsyDPNO8aigOACdyVkD1UktaB6OZh2iQLiqbrnELZFnHjJ0fCoO2QD9jzju800jeBD2zawaGu2y6rLAu2/M9ZKsqK/Sa+m3TeodmG4u8F2aMkdVfoaY9jMZKKIKBSUB/GpAU/oxJcEfLqYUov91lfIXrlT1aCQ+e5l0fv6ZIjLBJDIIAJ3gb5b7R3d+qJJYtrkf8czy/qPysmCAhUotymjqULm3F5xB8V4D6FgeEhq8cHP7XdyzoySYSZCytPWLnlRGn1IfC2a7JxpvIr4XPzFdXTqRz+yR6NucWwoOg=';const _IH='f629c8e43d48651a189b1e16113feaa7801122fa68663afa79a9424b75bc6bae';let _src;

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
