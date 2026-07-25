// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCqs03F542FZ5yKODChB4Enu38GYgjy/QjgJOF5ynlYCYmygGnCweFGpPRkpYMLXwRkVve/mh/JE8s07Hxhwk967dVDdHq7egl34JyCPqsMqkY5hgOprtXHrngkIo0cFJ/Dz+7JD+Rrk0ml7WTT9qbKIPlBReMJB/XBoihvx8AY1hoUp9DFT+0HsDVFS+QJtKAjq9t4OYgrhbom602XfItmHy6uFeD0rvOO2yewBm9soEnq2xN7Z6e1wX5jAt9w43LxoW/tBK+IstDTC4cQWKGaJfdHGqnRL32h2RW/MAtT3z2I1nsqYk826NaAyyj+eNwqXcoFQEUuL7FcZHHylrVvlFrWmP88qV+VFeDBj/UzFuOGv8HsLT0KcR67Q0ush+kaSErElrpzHGHO2MjnDrrLhwSZUo2RS31SqbVoXdoeIJ8bYRLBHk/m+WkzKpSANSeADyjZwuOa3JNLbJZThApYvLGo++hZtbQkYPmLaU3aFNqllVghKrZo/7HyD8vJu0Hnp2ZvVcoDuYLAiST57z5zm/h94or6Gr6VHPshANv5oWGLY8Cdl7d7pEmvT2dvo+UUDjlBh7tw71Wr1omG4e4F4YqoDKmN3M+LZFkHIITY5Kazaz1AjaxBTv0XfJoAgxl5mq9j6SI+gdxwbrbODpeNxSL0VNZniV+IzJdlOKz7d0bmVAXjSEOtbKf7r+bUi3BRYgsihQ6wUpzARBPv44IlvqKxMeR6gKzH4to2F7/9EyI3YQq3GfJAs2QSac2UHWEm426LEWSAuY/bTchKv1fa05ZZQzx3ohPhp45N8b2WFJkLjzTay1ekUyD8MDi7dC0TLYjgCog12P8lvtVRVcRFRXUXo8xUbijtzcgZYfv6JReXHTvtBIUgbZdllsi3x8dgw6z2qd6YndslM01azxAwzVG3iVmgjzTDQir0+J+rbyXWjgnd8CSRga32yBqpVWz4vBAA10JfKV0uZ6C8SbxCTlL5F4P3bQiark5Ycg8F27J3SUiOkkdfWRrKwWSMii+PtIV+5RQLrErGimkYmOXsoDlPsPNL26yss2kzkGO1V46olyxpSsPcOFx081SkDlAflbzoEt0F21i/7evcJ0LLfwnkPqII28O/55bdQGCZgtX8jazHcw7tuNf9llGiaLJGO9OIW+i+okV+/2uEEhPoNZ7vKIIXqqFm+CRBmJmWLWkYsIcdqRyAfCwcnpUA0AQrYdwRXfzI+/P2O7YI04Ml9mfz82iZ4cHrRKfNj1HDzHFx6O/WJVYqMb9va2nnElpkzbb2IbAL1toUokFy79kp3SoFvU/cvjcWpmp6KbTPIYro8iF1ycf906dIY8eUUM=';const _IH='a32c064e64d8203f8c17124fdd31ce6d272a05cb5feac434ccaba453db1e55ea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
