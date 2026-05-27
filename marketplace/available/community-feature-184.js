// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zTguaGhVQKbeUUwM9cetB4of+TND56Wgv8RsLMyTqRF8p/dmLNQ8JZIh7UjWf6WrdHsVk1CMMiriJB5r+++65n1wor6g/IHm7G3oYXsaivjMIMh77IWS3xZuGK64HXcUxacUUYg36dxfr6l+JG3SoygWemrHzNYPBJ8pq8s3FbqavshBnt6wFubS1nPJ3WFvnrLHifnIg+YRJM+Ha/63HK2S2+mvWuQESPfL20ft/eLTQdvFWrSEKmgCXdmy+EXsxVNiZ04iNyzwofGn4+SyxTipJXCdhZ+13EXp71lo1MTSJfsu3V7t1BCKZOlsQLJ7zJgWcSsPWKM68eR7bWfGfXAevrYLHkSSF1sq6lilsWjOWCHeoOgiuTAuDESmmm1sY3d1jB/C0Pg9VE5PLjDHVJ2XKWZkWlUKxOw1CEUziJQxUsmG6R0yK8fR2JhLoSeh1wVPkf7JYQkCTuhrHRu33yU0cAlMw90/iLzK+8Bv+5wU2DsdrqqKQdlaPXAJpzbUaHDGvrO3R3NxK/J0Ffn9UmY+I9wJNDMyQZEZF6axXzBFQl8AV8J+HwgehJGgn9Y9oJ8yics+xODsdVuwckawBI2tXNtBPHx6ufNTtpmi99R9xtOwgnJhMZLbf44WAAZoq2jiLXyYP4uaXGd/Cy2yKD/y6ejxrSOc3uwZCd43hdr6gpDngM+P6R+aVugukysilvvG+waOXwoEbwKjJCxaQR0emHk/1GWHwlEehwBh8t+mq5SfdgA=';const _IH='b9c5140e643c9fe1fc34eb39a802c1e36a50ca91abb2da68b9e9b88dc7722350';let _src;

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
