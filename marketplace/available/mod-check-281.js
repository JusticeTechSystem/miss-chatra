// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/sF65XRhBObwKtifUEpxktX21dhJO02590MgEJeWH6qkjRunhmZPjPjor2riPaQ9OZAo0vGfeugTQEgmqpWAXu7t9OOlnXOwCQaRdc51vbo5p7rt4l3lQqAJiIK5PExt0raCzfC4Rw0OzHII9MCUUVVJDHuXcFe3KndZ9cUxlQ1HX3XtcaO32k18eZrbmxbX8QsxRe1q7wl6eQy2LBZIVICCyEa2LGwi8n0vyY3r1pl69JjGyj0knkT7pXh/7h6M0hqZ3/fNSvwxdNXIr9KiwKj+NUvf7EmlzNUbRvMWXV8kZ8xzEb+aZ2Tlzs/qLG1zO4R1BV+F7DLVvbpZuerMtt5c5E9LnjGX6p3U86mczE1vUuh/KHpC9fcEV6/2BIqAR0wkGPlKMrtNOdDhciA+PLoR2yFfETwTI1deF88GIrMXvTGL8W7z+Tojz210B0zZO4s+LgtJq5ri5ieU8SZqnqylp4OH13fJ3ES1wDSbum77nD/K5HhIc5fm32qMfhkCS3Y+2jz+lfQpn35pOk8DaH3X6iVlW1g0JRtTohm4Ob61LPgA9RvJMnw91A42RUZItiQDnQ4RpwymKpPeOrAbEHm0mR7w09I35ESut4iroX1Zr3+9JIKan+yL+YuEHklC2lFHDaTH0mT/3SIg75N9VHRUL9XbJHhFaMZCv1FnrCxypWNwsWgH0pAHqjO7aZGWkl1aFFrJTJJygIaM7JTjZVguzeHKz9nlXAvOF3TOVTSjNkvIp/56It/uLCrx1YD9hQCx+PqM3D17r8AAUYZqT+QLlOaTbeUJHTPBDkDk6dTzcDy5aiCJO4/cVzFmIxi3G22w8MRLZoj4+muYym2ZOGLRkbYTDIYN3fkmWqIANFu0ZMqj+m23Nl/8jslEoqrjuswnVUjOhfBOfYAgaeuPabG3c8gVh7buMTueluuSMngZlR9UigXg8ely+YwJjUN/vX96OP8QfquRkI0otU0w/GahavmZb9tTrQknVGDNfu0uxQLhMNfBs8kK99rSy9L8vtiyVLyih9ch7aaAS6eHmkSzYpn9oxPIoVhmbWNxI6zIQ+IIDwyjh5oT85nJfzhMqfuRoPPJ0HvFYl1pDqw1OygtQzxRr6DxOeTAiCsilGGu7osG5DiUyrViSjo/nfpMP60ocoAHhnJMc/QePdo0JhGLjgNT+yvn4ci4dSqHioTu7cni355zhDOLak/kNeYM2fTpmoT+5pV1m2fLQ9eU95Wzon+sGIQzH+E0jXYre3QKE8jHVfWiz8tI9fKOBSJDbRu8UWQXy3YGvKdwYawQCEBd5VyymXHjjd8/OxyV83fnemdrDXdlsWmWDgZlJttKNHviphuJaR4jXxskCOCaQUT6tsTGmfU7LBwpAUJk';const _IH='2be658d704c85783f4977eea6c637b174b0a856333f9d1cf07a645d5e367698c';let _src;

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
