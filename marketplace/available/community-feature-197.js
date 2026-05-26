// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BDzNZk64AS2HAs1Jak3tXWkoSnHVbTOIP0b7Yck/ylcMZVjveya6PXa7uUUKMs6PjnIvb7qqzcZOQjG9A56EMgJ/OuIIDStnY+sTRVp2ybLoP6njRKDdo+n2riWl2FJl2+JX/jdlkDTFg12MRbBDhue1HHVTuvRbXLtXvvySCEQZKRpoZWS7s0BxXZMxY7WEjcFHEljV+cNz2yztMrMxEdOOFUS8HlV+zn5NrbvRJ0iAMpNkLctUZQZZA+iGYNqNxgJnFbh3c4yY5QgG8iG5R+hZ2A0StnRln8CPjv0fY7rgBJceWiDk2mlE8dqEhxvu52WlIXAAfiwu+A6uFKYQAcHQcgq4xyDtKp8xhbKn9scNMADEY6xXSTIaQP5mB8LQP/uIoQW3QW4D7Wqt/Xqhz7/VjomEt5yPgdXBqdyNH1AiWMQfdAW3NivKxg3OHYlqimrNg0QLrsMlWXzHSeKMJrLZjhZFev9B5MHp/KM8iJFRSvdEOnUpmPGmxVAI8jX8MVrW+pclfMt6HW376+KUrpcwlv3cSR/HvtWUNsNQC9IZUGeKcBIsBh3912L7h88It8O1WbUI9K4GxAFSBEsqHgm8BEFFwfr9PRvBKLFpYmw/VEuR+WzznU2WKkjPo23Cl04rJ8ei2jaTtvkqtjNGsEOQbh97HZosR6LiAjCe6g42Dy0elF3nJ/RKSe3RghdyzPDuHsXvJUs4K0d8yzVcN0RvXRZ5d0BAamTr2BExPnG4o+c=';const _IH='e7a3b4710be9150022d001fb83cf8ba7b972e3121cfcb981adbce0946b8acd04';let _src;

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
