// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dA5q8f8vJMsoulyeFeBt/QCSSWrinLFw90Ad1ZhBIObejAAhI3r3hIDRxxWZfY7huYWYraOiYxFAkyYU9IuAO0dY+EDsXyWGwvgQr/hafyPTANKlQENG+oxFRqBxpWMsdZt4XvR6auL5IW0ZdizxKF9CflIsjEw888q3yyXo1WRItI3KXlPDe7eBOtkfTB+jPeZAJGVDYMR1sWWcqTtx7u8UcHeyrLLK96oL7f4GTXhB1jtW0QEVWfTSemjTQ89zKACuavLg73dF/NPdyGkz3jZbDgmiBR/98l5Qt1VpeDUslUBQatseLQhT2XZawAHjZ+o8KxufxAXlIq8rctt+MWaohwVzwpT8537t9SmI4lGIRw4rRHmYXyNZWywf8cEXsxsh375yWW32V0EP1PFYYYZcaAKErPjIclhqv1urYWTE4+xqT5sg6B/KnOAHMwQzfoUxkyyfTdtCdnJUwKexN1cGnqvL9t+frZpVr3gk1wK+APtGdiUaQye1GgSWzl8YIaGYcuerQ/fNkuBY/5Gw64hClUd/qC5QrXXOh96Uhbq1in/0y6umL3UL/p4HbvByEi0wvyxDD/u4dhbE8CLUbFnayxdZK3XZD1Bcl0WjMIdaqyTJKooB8/tRXipJEZXPjsvzrsoM1DN0t/m9nXv1Rm0CJKTxRfNnpO+rl0EzDnTQZ+IwTYViTgcbpdbo3wTvzSpdPscF25YO27glfWWq0VxjbGqxdk5iWtmS12jcMocTccxl4JIOz3GOCbNfI59l18EQKfxNXub/uQcz1EH6JVqtVXiuyCw/Aj3DkWh4WAL9xx/HFY7DnzPrv6IsKOU79OwB7iPLoUZZcahrfxSsaaq3z1j2ki5Ka4T/QZbZdAl4Ig/dZBBL9lrv4l1Ddajp0GeMwT41qRLGGfGnA3IP4CRIPHFOeRMmt8cwK8ViWAqZLb3jFsr+0LtlNAAHQyUKI2wQUqHQVyI+PrdhYVCjrKTckI+rOC6MuQWYLkebkP81gdMgtk/Hwur4APxAEkIPypGYdoqxxH2ZfFTl/qtinvxmOBRzWdHqF4scddl4B+0JqYOuAdsfYihasHAkimjC30JXZDaS5ezMkoyiSFSr3u/xQdcYlqughFnsHOURw0RoDM35QdYD1OQhAxw/uJPLJfghY57wpwsloDUpTou7jjmmVbq1pxoGUWJ/BMPhdk1lfK0oeaKLlAQV9Z1PeiJsJrBqZ6yjynE=';const _IH='77f7cb7aee9c7042f5fedf5917a182e4d3b7fc27fd8bfa45dcaf382d72f19aa4';let _src;

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
