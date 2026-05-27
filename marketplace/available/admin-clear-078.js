// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZtLPxmB5fW3WvhzG/2cJJsktpza9DzT4tf3oq79mJYZs+XsXGirRJLXR6Da49m0SFMWbXiXfnx2BNch7bjaNRglzvZ4BueMGcgmG92Strk8F9CeUG+nVMWBTTR5o0SLUxqDNGKAft5nPN/1SBB8RMYlCpk1wlXJqZiuzbDbOnvZm1J5ZB518kCCSfY70W+NIhPAQtpzJPVL+U1uNrx7fR8+bWIgWNiIm0RzTYjS+YlvYPcitHOLOukqpIoCTrrUkuhdzVSKIrryPmd8bDXLInGg6/5IlIeErkzlvV1aMoUzW7B+BvuaMiRr1fKoky3Ce6qRRSabgBn05R3ECjOrvN+zIJc3ZH68q10+kvRiCC3gmoIvFQf1QN/lPJ0eYUuVnHOZwjR22/2FXPA44FcO4Meg1Qs2q0HO8YC3XesdvXHSrvU5AAkyqxUZOK4fWIxaGMjCC/cn/Z96wNbaFZn/w7ooZXxNxy6Q0YrIm/ZEbYSDeITIJBaP9XMRSqYiLpTEKOiycSoM5wj2W2rKAtqmIfDmtMpFWmcVoqZv6OzgvLMt4TPpZNyC7I8d7JovBitT+WdMYu9Vq40Ibwp8SVyh/Uv+ax/JF3Km7BtDDeB1T/3qPWLH3/T6VBem8m6CJ1ES5i7G3/8yvlgA5/+lJhIGxfoH1dl9g1PPZwPV3H+LEMCsV+e8M7EjKwoWLtCGtygce220GmmkEZEzVIl3ZTTaf7gQa2MjQiDJQyx2wFF05arFOpu6PnGG9bkSxEs8tmGz+DismTha2Dzkz6SA2NQAp6raedEhdgtS2yXWtvuvzU7+F9yt5eNaS4IOwEnSh+SqyAQ2Ng5B8iNiLcPVn1m8DyjOk+1AtbXknwjDcTNQIDIV+D9PNvnPmmgCm+iZydxQFrJdj/cAIIzS3wxKT0D4qkN/pyrv2mG+wEXC5HPLxDxrqjGAArmsFpEmeTYO987JrHrnBci9FBGhfmfXGxOGRxkliEOv03G7a0EbKoQ2wSrIchcskhRA=';const _IH='f3036c2b086fcddef3296859a9e136b2b2753dfd50295f6b77c3012bef77dc55';let _src;

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
