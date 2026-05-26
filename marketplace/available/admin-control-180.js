// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dMaJz732ZKU8U9z4RFsPVire5IiP9bOZiTga/uyIQ1WqOwXPPzv/JHigUaT9gxmzbsqMAyj+YDf/LniK+wHMDG/u/9S4T2+zEakKOHYcfnhjI+sgYmmipIP9BT7MCZBHmAqg7wSLoT+A6xnJmVn55RUhG3J7e24MJVRKjH7GFcGz3UZj+jx7Sh8eUowGLrZlXLpjIQ03kdE1+/NdVwHdHryUie1Osfmx+J4dg5bE1s2GRzNMy4/Qesa5Z7l+O3Q1iM6BMx3ZnCunr/n9KRw1H/GbekgRQFV53UMqq6Cqz7pVlnX8SKaDrgzq20Jnb7MEmNotONi8ORe/6hwbwl/Y5gcutdE9mZj/2BqKvdGfxj21VMfspXs5uqkkGFvLEqHgruR97MaqJGtycSFbKOX3c1HCXHXAoHbcbMnDF7hUD+O/RBACMeytGUOTiIb09F6wuXA1FCep98J0pGAkN7L9vlaM4voNVxUwB6GVEVZYAe8+GgO+tQw4hTEzHeGPh2M2tUBXvW6snNUT1rBFC3GE0ZktpwNn2YnP5l+Tgsz+ZXADfoUfu4gX7+yezhxQv1slP3PtJRw1E51Y5NKeXFLEDtNhBP+H04zNBg6VNW4nA41kCVHxBQGb+e6T1tMcUNcgMrY4Jd/czeDLQieI7eKva29CcopHlGKkpg98zq5W2yHZiJs9/wliDowbcoL7AoJzsP8Eu0XNHYtXUPKwQoq/+2+gYA1DH5PTSr7JWMRXaRyziq2Ex6j278z6ToZVf0VnfzzluV0D/HsK56IlRM++Dbli02hbU2NHJEVG0gzKe7n61uB72c8yIzudNgmAbctfqH6VcxVdgzamXcAC+3CMucp8vFvXHW8FF45/8MrkJmnOoNbIFV9u7+VotKxpBbczMjzq7T5kD6OGqySqnMMt16CShsk51qmXja+kePm7UI2jKlyQlGzovQ29PCJEHQem9eQlW4x/7lFP1T72R8f5j+VQDIdZYb6gpO0xZzFrA5QIaz9tydSXaOFncwu6mb/YmGcTyAULYOw=';const _IH='2de1fdc9d3f469107ecf17098cfed8691b55087518c92cf7f60478b231b25708';let _src;

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
