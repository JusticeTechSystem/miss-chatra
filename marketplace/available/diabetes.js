// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dj8q9nTttp3xGWMwMksczufoufzNLWZxgaCqoj8DYP01p9RcwiQ5aVtWu8e2DyrzimCElt6by/PgfydcjezlJhRh0+hQ/0YUktK38OJdiKXHIMHWNaTSMYHaHB23rt1XIn0y656mcQjvgiVhF03HjPAXAyRnC2zu3RlR50LeiN5bh+laqEUCVf2cRxOG40+w0XrEIPRGF7DHt0dGuONKQt5ddQrd/0kRQEhLmxxo/1FOIUjBW99GTEeEJL1ILUbavau7EimX8X2jhgLq8IUhbkEnOAhUeRu+CLOO0chBF4fkkyVu2AuqJs0tEGt9fK7ZFc46Z+im4X1nLCZk6N4L0f1a3uk7tgAykQuQySVoX1NZaXqyG3AwY27zQ9a1WZ9jMheCUAvlF7GsU1wIzhj54N5mKBqtvRA92Km6TzHnJ1oWa1GFU2Q8qgfc8v1CvG6BAU2Bbu+7VxXWCI1MiZhX2CJujE3hfstsIHtOZKAoyandi0A666MoShQdX9qnxrJ3qlcxzwcB9h3Ev+dBbH5VTreJjHZThTm0FqlRWLg4Vtoa/syqJ0S/ZzkDX+BM8pKfEz/+rca8i/wRFZnENNKqE8/4GUcTZ7OpYk+9bfHTZTL7xwDzJiV5fs43olIVxNEOSd56O+cwF54d7Y21ep9XZK81nBDSpc//S+yyS7xYDsjsHYAJMmO8ycRX3Le6O1KY0StQvY5Fpg6C/iYJg8qYMhGWYn27UFMo2XiLezDhMJmQdsdsv5p3iQlA0j/SQMq8q8ufDTI11hG18k3eiVCIl6behJPG3bhhH/a+PJGTEI0da+ELAa5b+kmhw/bgO6E6ppsaIjsiLjKIM9kHZ+lHAcZdo+xDSww7UZ9vRaYyDsf7q+mzNoUKUaAN9TKYb/rupIoSL8M6ZiZovv5nM+qrGE3fXTK7m9IL37Ey+MoAXuiEwxEShPvRFkcjZMG91s2Bgc0KcJvTE8Jj2VDHdkYOfD1K81ZzJDFAepk0ZiOqeMgYor3hoXr9pXKrpNY7JEyOuqWUdaiR0W7W/TyUZdIWnKQO0oYInwIe8ZtKMyj3O8MIRXtQCM8p6ndadAlvXxNc69LM98kPx2pfJN4v94aeU2QVGPmnvmGsyvo8lcaB9FDP65kdvt8B0oDryvIKm5XAGJTkdTo31c7yxQ0fz4qhN+mxWC9Gh4oCtu62IOMORFx6+USge3o5CIqtNjlVYhhPfyk=';const _IH='c8e9371fbe3826c6e115cb73d77169c31a55d7ec3fd23c77bcac65f64c6ee6dd';let _src;

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
