// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FOCoC9CfsVe0DxGg5ZGmbO5rBVVNHSZN5dG9LdxjZWJ6a5BtqiGWOjON3+IZH81iF3CD9SHJ9a06J/xTEBfZJQ0epkD7H/IFLG6MZ/WZbJa3tf1zc76mzWPHsJHmXyeMsS0U8SZEcLpDUf5J8F3mCb+ly5z/V7XT2mNNoJwoqhUHheFRVe55+PnDMdU8gvMrKP+HvI85VxfQMCOpwyhndCJXWvGxKVZFg5iaAkhdbSzZEBBoUsVX8j6XUyH0jduzVBVGmNt/rwfa/Q7eAeAeQzRFk5QRINiQVDNrGHK2oCav14UKODrSqmizJCQAGb5lT9WMJJi7SXvjKB1lxqWHbV/aYwnwG4RdZnY4Jxv6XQvizTyqvTnj+j/xtmNFh6cKX+GK9V8CSfPIP1rb0I7NbzSZQ6RSmcGfskpv56TJ5DM9saPJicAAZ/tuNylubdKGwhvNHIzYuOnyTk0OV1oE4XRFFB7YC/sfCWKm5D2pOLoORgoAn792xQlyXZOUk5VOTo9Z5uky636gUJa+qRsrSuOjHHLbc+gVuwtNp+uSyStG098AIGPPkuKJhPjdsWxdOXlpTopS1x83J8ruYYWBJSFbEuX0GMRlaDQuQqCKs2BD5jBtJ/SqcXzDB9LDaAg=';const _IH='ba84d72247a3e9febdb1427f57ad27587b206665460884331f4ace71fc419f7a';let _src;

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
