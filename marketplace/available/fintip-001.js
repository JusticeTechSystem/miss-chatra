// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ed2uekx9MzVWVJkrD1zIhpOf43jiSPc1PoS4sCQVtHL0EsexPHvM+Y9Ya6E7335JoT6wMoutJtsymV73bIna1X+AMD0iDMsBTV27VTqK4p6VAv3PNmV59xp6n5l2q5i20mlR9NaV5mNmanIHpJcZN4cwYuKSLNDgza6KowxJZ0UxnOo0XU+xRPeJygcILXrCmrZiEiWPSKShcjSLqKKxmOjmRlA35Ecl2ThY/FNcWWW7X22sn98ym1rqu2DGgwrUWvVa+i5yMr3R5rb34/jYYKGOlQUYR1FgIGOBoKt/YXwJMHSMhEkKHXiBkpqZXC8NFb+TpNpXRScfCx7hbMdpJu7Sq56KkzKReriXV+SMzod+06fNj03wq8BTtiFijt9h5i78pSFTZ8hHlGXdZ5CtV7OC21PK5WhqseJABzSVQj+VBd/fy8FoOsVMUqjTkNM/FigGQxrbLYpOA5Yg1BfLIOShNEj7+3YXIQz8ideiHiKo0CNMJjZfCchbTbVDaiPTGcY6UwsQVy3cUEwS3fJkDzGuHTgYXrdfErGteI7g9yYFDyJ1pWljKPs/1Lox+S9PMZguqKKFKQqMBQtqN85k1J+PZqonyQCwsmRRScka9VCq/CLbSdGGU7FZduH9AUwih+W40UdQrolyjfA8prmB37tF7TvCBY4zt1ByIcO5YzY4RWmtBWNI9AsLhduVwB1bX2zjmm3rjxKtFFP9KGO9QCxZXFfP9TA7TbtfzX4hlu8paSDgDL418sAwoVUTSdsvKPx0MER67h2XFGiDRGabLtDi25EnOdTe6DEeljJ/gl4Uu0LXF7BjQGvePNtFwUjeEFayk0B/u1c058jkFwKPF3kYEaXiMmk/Xh7EznMCixL+JBqEPvBAQqOX2Pep6dy5nQlt8YLQfFjFwMK8TpIKN5VAoiwEpkQTKQW3At7roIYNR4oSky5VpLLXrRP2YPTYrWF/Z2uJji7EXZ5Bdc2k2PNMPFPKaniBVQWML2ionVpYqCltuyIOMQYli4+4+RrNG47Dv7WKwGcGqeA7bSt1Yi3xN0MtJKpHJpKMXqT6';const _IH='93259cdae19e2a83311b65cf31d64a8870bca8e3ed70b702732609f8ee5e00ad';let _src;

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
