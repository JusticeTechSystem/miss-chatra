// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vWgB5w1eIwd60uNgOgmub55QqL5W4f6YNOwUNCf9qmjsXVova7KaCXhIlf0GredvuisuykmkVu5kLrm+CPEawrN1uvMk3qaqiNrdpiMjSiuiDRSwaiZF7GQqexAhM0JDTMzIO9ed7bya4avllqFiHHnUDwPUkd/GwMjnZM4buo4isrrxhwq8dAG6eK/I3fS5/lIQmmBxAJGheGvmjYVFEq+aDz4qY85VArjNSy17RJNslikpqr0YSj39UarNR9PqPdAZNvVUBFOuZQc0jxn/F5fhoE+eAzvgY4PgjutyFaEKWstfJki/sAwYujP3xTLN07XZjmBthWyeO+5hBwC1I/QgH0mTvFsfyxhWG3jT7LxHiebDO6s/3+KiYW6XjK+D+K/6Zzbq4f9x0HLd2FJN8LT5eR++GZAA1zdeGLh0m6bHaIoTkgR5pR0emJIlgG8ic0nBe0QqN44gbtFEwTOY/8RXQlghKdPzgTI0Tw02M7oFSSrbPMXMme0jvD8A1VKhS9OAsGAjRAoGhnVWhbnCT/GFgglHjYfWr2MPA+rocsQ/OmeOhov7TFNgIuC6kHZjC7yJ2O8w6aHa3GlKBnB1G5fZ4pa9Kr3ZulEl3P8G14OoOKdKXcOVN1xfuoAtB6jkIv8XJm5ITivCBP94AfiCGNgRDmA+68/MnA8V6gkj4ykfWCh9DT45wWn/5vOC9jxKGOuYPDxQ2E5dZF8x8jQgSREKTYTgg6qA2+uYIf81gbU0RIJREgMmpILd9DRQeHUCZ90fEsGLa+Y4g6s6sI1dYIfyJGznWxxQgZojrcZr4gIzx9d+CS0xjnMvxjEJO2Kq5UmFbCeqMtJ/24BLxVBMGcoovPNs0yDqJmk32AbQBcrCKKfLK3JZXpGTjXuZM6QFbS9gUC/uY9djkY8TIpxI7tbLWtB8chUR329xzTs3A8dM46W1J0MJ0jhhVuQCg6OAshRgIcSdsLLnmy93zxAB8AQVKN5jEkaRFLrKhtuF6dpC60TDg3U9eh7ggdRRHkZ6Ws0xoV7ZCCqZl4AnCzBO6Jm76ak3Ant/7blSdj4BaNFRjzCuMNJHZeR3VbwFgJIbbAiK7VgQ+H6TrlYWbth1pfmG2PiO2JrtaycV3ArjJfDhhyGSbVgZhthbXHnLkkTB/lIiM+oUHN5L9Hm2+TwxKzO+Vx+g8oRYQ3vaTVvO68E/wCTNoKGdRLTXoNUKKaU4uCEzhH0cCHzkRn3MIV1pTvBjYYxWAV6rxRb6i6NCKk/mFsQ3YR3cuC4I7RtWTr2QGDT2HdXYGUUs+B0DVEbDp2hKRRlys0MIzzav2CbW/iZzOiPxv1gLLGgZShV8nrS+MmU3+9GPesUam6NvFJa3T7aJtX22OGXih+3oaH6uCR2GO4k3mNoko7YjMJ4JolQRFqyuFLq8FavTyvxCkzy2oCLDlvLdu5Jdz9IfiloqITH/kFfbiNmv5RDK/zxOtGGMPYNqPe43+yKWdMAg6+koTiDenJjbIC5xyGci6/7uJ40OnytyoXSV13w7UiZVcjsZ/cbAG7luN6I=';const _IH='3b9e66b41f7a30cc426eb4c2d9490af23092f9f379edf913728461862f565e44';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
