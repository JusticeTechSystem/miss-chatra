// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='44yzjipVhPCPzdTVc2UNtpzn2pRpiEClHKgvpnZIzpmBJaPRYFlAodnoOhM0VWHq8MSH12VncNzkFwLTDKeUoMxO/ziEGLN2+WPr4uNv4LzpJ8MH8hOeI6ObjkGQuEVp7AJaWm52BewJnlJqOsZYPciI8Z5pvd2tgHuKl228yKF/6w0nSNeopnj0iJ0B1UrT8pF0S9lPYOoHuF/NYItq2O5TU8mygP9UIz+Yfk7q8w31CF+9YoLMEdMKOR7zpvI6LzfmtKrIahF1scGbliT7EWqPc0dcwQQt5PzHfKI3/+V8GLctOW2ttfiSpDC32+ninXVzurJV8+YQ/U2XBRp7xuQn/stTW2uDNza1OwL6lClkCcPnw3+D1vqyO8m0Nlza1iA3eRK457BdKW+JIYDn904lFgW/lSx2prDz7sIZSMeIYy7K99mwVpiYccpqwNEx6r7m45qyoGUYMIJmhHhBvRqefXDVA1sSi9fMU2zOnoLwTQnJ1Sag23zXhYjhPqr/uWGE9jasalhkG4D0QDb6xc8dRIObCFb+tIULs/gdv3mi7gUiQGFlvWmB3bigpeDa5WR9Wmyui4vkViRwMzIxwZd7Uuvzo/KjvXEOJgYpUYUIL1Z7n52M1uQrSaouJ+cMi/19y5V+Oj/hwtiuuzN/6/UiBM2pU7HDRJAUJ/zwSRlNl+ZD1ZG1QvJlwLdDaPe/QFNKURAdwdD7kd37/FjfEedwFHhyRHaU';const _IH='842320d17b0f528846514814cad0e22fba3fb1f10ebd495c55aef5ce5db91121';let _src;

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
