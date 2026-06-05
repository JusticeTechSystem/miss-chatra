// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vOjpw+dE6aCJBTqyRkGzk+hiumZeT0HtKrJZS1zmS4myojXV/kG9VcLrjOUr18fJ0IeGs4PDOqLciq3CKlFC7HZTo/iKl8eg+Abgx8keWHC8sfvrYXayaRPm+2d7uM3Z0QIW0n5qp05YMQ2QG+4j1yfp1GiCGa+oMCcWY1S9/2G92EtwOdB3P9mIm42p58up7c/dZMkYZngRYGMZdaF0Y/DNFinqE0pth/XzxJrgxVIl+SaSD7Xc4iRlu5P5FDjQQnTTLlDc/iOZVDX9/SxA/NlvHJXv7vRKal1M0X1w56pd6dxzsZgYViQefp2Ngkeyz0tpEtBxMxHKIa+uUrz2o4r5Draksyf5aV/5ZHnCtXzk97uAaXC/7Z9ThVvhSxje+GVSCUdFV8jF/JiUKiLZFo6JKZMQhBhmhVFP5r9/il1iMrQUv7KxPH3ZptPMEHUJq87Wn+VTcCJmG8OBUDXRrO1Mctredh5qgj+VCQ6LRD5wgyNQBy05MpqPW27ymUsPyak+2XLlek2k99vpde8zZb0FlQ99flL0557Ty1n9xXflR+l8/WBsOfukebAmiu4lNOo+ZVPW6boYCAslhXlmLM/K71apVKxIAmm7Br6e0T9pTBzLQokfKQyYfgJU3Lx78iQHRvFd2OgWdyKHdFBOelbctPtSwWVrjOs+uxG8SPXB9gy9UsU/7h2bWYQ2lpiLxCppASmFFriQexH/EvOr5eQzEYRfBW9q30Ng8Gw6tXmeDE3TzUuRWmlEtTvPDS9g3l/UGDHjVdWUFb/85ZEk7MeoHxDZCP5qNy3VV7WQ0Kz4zTMjS5IbOPmyvSUT+SWS5QeNaZlsz9QexGNNACAbymtYqSg0xy/3N3S1XyGyJn/WEQA2psqasmYk8EG1dApK1xCioTkdr0UKK1rp0VhuDT0nzmU4tg8LDzKahEqP5iethLamY8N3S6vu6Hh7//ohEiN7XvmYZujeOoV64RtMMpluyEDXpI46ugM0RhX874yCqOOcpw+9e3/e1zK4msRe04dK9pkI3q+7R69JVzU3zcDmyT0lDcKbw1jZDBpLHen+XewwOCdvKd9cR+Iv1Bc6Wkgx8mMi+EZb/dtwcWl56UZAUg10jjN2vX00+WpGSJrsYL8tGkrimTOTRKik7TLHZpmt/AQp9OPQ3myn0iEZAZKOG6uncz1ShWU1nu6eHQ7G+aGfIRSjM7hg3V3NKfA+qStq9vHRCDzA7fEkGwGRqQXfEV7M7TM9Mwc8norQU5L20svzosg5RxkIea3sm5sptbi4KiZ8l53ctFOwofrGWvRQq8EP1mQYW5c5kV9ZPXv79oL2+rxbATdR/OSdOD1mLndW0n1SDoKjXfY7NVVUMyrcH+HzAuhwHQ==';const _IH='19e6510237eee4b29888471b54d73f3ca51afbe520981ca260172ae1a23b9413';let _src;

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
