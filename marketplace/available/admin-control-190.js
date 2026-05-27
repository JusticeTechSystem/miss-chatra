// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FrTVjW6NOKHB4iaSMgcLjLZHoZKuW2ICq0Dz8KgGZ5axmbNPYsRh5jsV8DDTNNsdVyOFQ0X3GQMx5fkuuXdtebzRvgYJOLI7fkiA8boRgLrL1+R6SRZvpPRIKs5GoTuXehT+E2NWAkRqf8Dx1dOM9f5CZQH5Tn6L4OCojf+N0/FMR4XjzAjGq8VaVKANwchBWVl4yH9gexI6qogyBbJYupgU79mNc3wyVX1gJFiCgwRb/r4u0JNjlhwntn0XK5LT+qHvLrM5YNKJL/bPHR6KOTFO5ylsrSW0H7KrORso/FYhKbok4IfaSt0lavXuISvR7hX5GWbXYoNrbJWzSY+rzSI9gcfEWKF5MxxRtRI1y/y/KU0mG2qg+DYvbjf+eTYd1HZ1awvQ6yWWvkvmPCcacOYAorBJG6V5D0WRHc8TSeGAJIPNMCcYfg/wvGKpbmpI5JQX6RbS46hg9U5/ItNRIWsr3brNxty3abKRUSbS+YKsc8SCV1VC0BqrHeAaZWtLK1sHveeMHs0ifxvPFaG2RQScnR0S+Be3I/HZoao12+Bcrj7Wp0UGAbwXSn5ILqN3mfCQLcw52aUaWgF+vfgX/rqEhrSkX12og4Y6qk/JVHdwL5eMz0VDiz198MUI1t9+yY8zPLP9T5ZhXHdAml6QJfb7XvWGkEEOCqZFLoHI8n4OuvlY1EeN4hePEJ/HeMEm30yEp/bvG6hn6rkypE0VRwEabSm6Os2m2u6UrlxlZrHrbehLX0WXokhbTkOX/tOa8nBL0+AGV0oCda2ugWNzUZRDmoldbt92XRfsPoa7VBX76KG43V9yP/0e41HAKc56IKuVryCa6mxykCOlJhNEgCBNt8+jptN2ZJ2oNYEttMZFd3jkSULBh1w0H0QuYbJfeFzI/Z6V3QcjbaWMpzI88+inWVbRxlUcbDOS9buGmgvc0aYSrAdplSS+NQ7SXy64IENyQVIME66DjT0UmIBCed9BoXRoPV6D/T253qUfw9vEszn3+5qMXJrEENKyM68bTwHz6W0JMpo=';const _IH='3f1c573a0b764df029ea1367b5e87e994f8694ecad3adf45030c4bc7db19eb8d';let _src;

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
