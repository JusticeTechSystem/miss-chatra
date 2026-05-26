// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yxW/RujgltcKKwSTFJx00uoSnpXa3+EAmLOYLIOa+Oq3H9IbLiJGETzrvLgg4KYujry8jEGzka5E/jEez5BCGKCemqGL+g3GtBr3/8aApsQonNBjfB/yohVdXZvTTnCGgZG6IoMc5XJZJMSai1kARzgn7vFOjNypOG9sv8FfiJwXBTGpv6N/9OyJ889e2SwpWxaycGwHHsAk1GB/9VJ2M6zeVGYseqLtC8O0213GTzSfp+p9j5FZXjJU/kZnPBXDGqfKh+P0FiPVz9tyOTjM85q2dch+6lYe7Go8i09kKhNF9sSdIA2g6EryXm8TL2CYxQMypNVy1rdGOdBA+KjllK6M5NDQ+AJCBN3sakQfvkC9aAPLL4nmlpTcmnyW1wmMfi/GnqkVCL445hiE1fB0W1em9BU6d3FBJDxTc0E+A9AnKdDWzHbrhkFvuuPwjafYBqxzSg3r43U6lwRozgRvwkzaMPVvPWiPqu6Evn5O8nAB3+QOWI2wlSD9j/1xQLeS5V9f9B9Qstu6D6H897FSFijGkklqz9D33sEUFP33oP2/XkMG+st3f0KOQvDcLF009G68MQREE+Fl0dZBWCexn/HUOSlJ+m4b6+eR+TlKtqhmnJkYnrp3AwlePgihVQh13V5H30uAXXwLZMvbxb9IODZGCB1JsPFQtPJG9EHoUOzTUUUwURpHFQk8JO5pvKC6Gsvg/WYqNBKKio5LWoILMpdROl0ZMHZzhX0vnzvQskZfmzkMlWPVajighJPxuQRn4FLc1cjLbRgnsThC8HYjyq/Y2y4pqaOrHxqkj8lHNRAevRa8MpN0FW4FmjydkPK+QaWOWMdw0RxxbUfyQ0xNE3WeKoqlU63ZCw60fA0JPdPCViKXNWkpWHGpfbfLZuciceR1kpeVlbdqil2sGXBVzFE+aZenXvQCk7t7IUp+LKq1ZHzWQwtwHZKJ51GdTB6ALc7iJsjc1U1ggLNTCxotXJDui4XGduG1qmw29D+4E7DMq6UJkYYODvyRj9ArLma+6oYUuVR6wJfncTi31/xt3BsvVaBnNXCMXCHcmAyuIMmDUwzYbL/vajpy65X8kp1SiXELZgZ2vl4RsWA8xOGqv87bWr4bvC8PjBZV9d2pr5QACOfRWNS4kCj8y1wDeb8utAfSg0UmfSE+oBCMcdN5T6Uq8xmzdxOsmksGXQuV6Q6qDPgI6BjrvQdfgX9Ni4nnBTHnlQ==';const _IH='b66aa85f6e5f8b66a7490dc421562d4d02e25941f50aa42787f744389c3b3258';let _src;

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
