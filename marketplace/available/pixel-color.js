// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G8FV7tP9+v8tuelUOMIqjn0tXrhqy8XvxgGcov7HA5+DaXMj4toMLGfSJsz2ffKWI9U6CjVkSwtqpsaYbR028ovzscTyNoRhOi7pSL735erGzXrLElWUtHVaDWviRjflm47ppkLvXDe7J29yIKH1WpllxmZp470eu/8zJqvpxj1kc1GjwGhbZDawlQs+DE8z/uSZtDBmMow/jm7E2mrtJa1Rj+MokCUr1A2a6Jwv5KO4YKy9MMqZz+cwLof1GIKbTtepRJkqas13XlFUbUyyYOAcEL6jVfTCTQT9ZYO8ySCKIYLOrfhO7ZW1pTPlQ5+ku74i8KKyRbDxiabjwts1Ta5DLMCZmyHe/rUyQpIlocIC7Mwc+Jn+HR/HAx7AozDOoSq5ypLm1igZw28VmJEnxpId0EdcNrgi7d0NS49otxJIsn2YBf6VFn21rJB+LiXSsNH5PZbTlLEkS9Puws0yZ+vqn8lEms6sGnMSqu50JGU+YJSbGEQmb51OMtPVDYGw41nz2nhmYUo318gHeQfxtrwNhGqE4KdbhNbKnj4oauqCxF02Ew3c6LQodjHtIyyXcncKFhjaRpY8otK7kD3pupIRCwlaoYmxlfI/VYYhE+UUNqznypCum1YADkS5c0OJzpsbEAzWQ4L5Zq8ZkzFAm3NQvaRYv/N8nZccsukyqla5Z2bd6OQeqPwDEsn+95Gq4+HoTf1YkkkR6vcAyqQzBmsPIGXDakgdlmc8vHbikspfMtXF23yfYN+uzy/cMvJwJvIc85qFOTh3XHSY9gcdCbauqFDwpVtr0wT6eBCFiOUnBYmwF1S4rp5+gS12LqlCnfE1BQqT5sokS9gsS9iuRut4ir0OyjSvZK9iXifBL959A67Q9UnVi6fPlwJBBlvpauKpT/HQFey1Scuv9qCPmaxn1lXQcHZz+aRrgJBpuPST+ARfdUYsafPWDp4o+Z0RCwTk/Rf659miImyFhFsjf4jVhYQcSlp4KIMi3O3eiYI7vvPP7R8KJbM6zDXDL2PDX9R8JXB84lbDQzJf9t196sJaPQbijGbAhSRxw+fGIZKeQznFkR9Dqe0A4vJvxyekwrQQdYFbrhI6nZfNetbWm1PqQQno12eYOJUpO0a1NoIDZkup4R2XcDr8V+hN4YiuFI603VY3HrzUUzfML24/Em8VB86S262bGXWlgWEqMAx+yrst5wBP6VZ4HmybQub/iVptoLyCDdjU7oWlOp5kSbucYAANvZI1Q23KqbwYxiIdo+VJE3vFDnn213dmjyyi5bYkQvfy9Ikj1oPB6zDCuznTNOWmcQoWbngChjalpWoiGW5oOJIod6VgOw4QLb6FXDNVHTcnidT4nzU+FWraGeH5z9bebXs+Xm4fX+7VBs7sEOTv5imZI3ZN5WEI84ofPMe7leWHLGg0j8McIuBdd6fhpEEvmD1dxf/L7Z1Mdb69W8akerxZywMbPeRPNOMVSLUkhB1gu0AQnfVyAnDDHVE4rENwCD/GDQgYLDDIi5s6q6jrvve26u7tPMHBOvv7S1vyt7FpUYzfyCHqrD05y/iDn6LdH+sohSUptFy6rPdwJb7NhkKogn1w/EALS3eeiwfo7NTOm9CArAbyYM5mT8duava0+sphHLZFQpiCDH4k2qAkKb0Bi7AJxv/k6ZvGGQOB6YrbZSY6BSlP4gHlQX/HsVofcYpsoKqwe8h6knI=';const _IH='f7a1edc5507ecfde7ba4cb2bf7e21d90b90d0e382c93a04f4aaa3ffc6f5b2877';let _src;

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
