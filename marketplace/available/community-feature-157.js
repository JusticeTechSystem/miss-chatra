// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iSzpz3lHTAYeTTrPtJ62KI6ZzSyPA+sAHsLy9i1t1ykI6ZuOKQ4bdTwt5+Of089iEdlv3jYXE47Wfglh1KG76cisWA47g0x0npXq8K3Y1bkiZHVy7UxNJsspGm4tvSXHkCcWJ7bn1Au+Ur8zAISXsVrtR+D7KAdBi3jlMHnzo5AywcACKgu9We8TbULWnYinjLRCS5Vr3+trdgK7RS/syKS128ouH8d4pwqYd/bjcSAlWFDd+19OZ5HPkg0BMqdftAFlnTa2KXiVra0NjYt6z4kI5xYl9/BAH6UWy6pDwrZbKuk27OP7xmMbVaUOM6khFPkZzKpkp4LRvaMqrXRPBkvqyMR8xXVt8egzl1bvDxPxre9M8A79fmcZYgsKPftafGpFiGW51Q0oIkzdEjAAGNzJ6R3rZsRVdFHwrDd6Vqs3UcivYjIyT9Rl6H+xYAbMIpp/p3miFC52JeEAHCLWLAbbywWxYdzIhvgbtO+e59MXaZ36SUw0DE9082QgxDHq4KvDt2wZCj8gioXCorYlPlghvIOQHxv+lC0+DmmMZgoy7zOVMifo4pZNSxd7mo1ZuZHJNzs9hd7CqICGJHuczk4oaiaPO8XoQJ5lQt/emzJwpqRo6EAI7j2uKBDixH8CdQbsr4HXcZN/vG9w93b2XBn3O4vzF3wZXGmXAFmcA/euNd2o3q0UbTK/Rn5gKMm6eaq/C0Zr3iDuBHTW6h1k7qS1Y8+lyukL/7GC5fmNK03kBPk=';const _IH='64b647f4a25cdc9645c2626db9df98aefa2ca443a077a070a2571551ae3acfb3';let _src;

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
