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
  const _b64='oSnJDxakg7MtbKU6RgNC04ar7t6kr0frH9iSZNUkGfLEF+zN/Ai8PX63KZWZI19zXNaMNHglKRJSnGsPMtlAhGWx/d7vDpC0sGSSf4qXh1xqYtkK2r7xIp957Z8P9hZpS0YyfpJ4rCVQ4ITeeyU7Z6OZr9pwatlZ34Z2voGWhtWM1lOjnD2HZAp/xDLxRCe0OYVtCyy3G4c4kGz6/AEE8+Y6VMyOpQaIbEjQjFwX7WP5s97RKxdzgiQ47XT4eC/bEpIbqYloEZ/sJySYl7Luoz4CFWxLOxs7qhUGs3GEUNVvUMo8YEwQttLytLz7mVVjISeTypZ9uCgo7lMKEoK4F3+wtF/RnJn5yz2l96xQ0STGl1cW1fYQDsKKzutECTHtQCj7a+buLhabwYgV4QmDzVBmVeY4HoSvotJ6BP4wUb7qy8BuiVAIy0TG+O/b915pMl6qz1Wsjre9LZHTNOZ5kiI8OZSXSL7+BNU0F02jk6+pEKHZRr3uQ5+ydRcxqmrBHU9pw5GvtWiRzUAq071Ta1BphRGgJaWv6MGRHZaofwPP4rGjKdID27/0ll07mizDj+sjArMvM2eIUyAI+XRg6pBKFUwmM7x1CaI1U4HyKw+QzK6fSZvvILwtlDwTJFCMUl+hXwTuJZ4i4AJfyo0f9uF6H7sC5SUIQzNVobXc8CJLcw9DymhPJV+y6gZvya4pFuEIzLLZTU+J+exy7naMVM8WFhrUGFGks7B0VTzl2eHbvg==';const _IH='8f9a3c8133c235e1c53026e52654478b16fcfc0489bfb42ab324ea1875f353dc';let _src;

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
