// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='StdnjOkADA9x32S5kFN2IfX/d3b2J3VKK87PMiU8pC+IUmWx9KMhbGvk/TU0oOPyEec7FQsjOmw+0LSukdzuPNxPG1qypWsk3MLYHkd4HqzjMGfdwdtShbbsrP6K5Z2RLwesYF/EEUwxzsHni6VhmoIENwBAc0QedRZj1mpAGeTEclkx+leZOb5rFs92p6INYqoD3YQrfMmMzDrq27GCsE4uxkBed5Y2sf8cmlZuR/HVQSn0ulxoqX4CMxgWDFHn3OSJBNYljZdr9cbKIw9gEBBrVa7XVxFJD6XkTM54Hmcqx9LyVb7HxaFLQUu2OmYjcijCREV3aCS9CHxj8HwQOGgzK4qe/CRqrwNLbMtHJn7d7mZB9NaeIOYub0Oa0aGNzJETsJxNQsZW6Ic72K5hYQCX9VgaM5DDmqo23rMRurGy6NDExIuVxGmhx7Vc2m92CWQHi9CkaiMEjFrgZTlZ0g74iS+f/J2IGS4u9FJkq2WmHXTQxi7x8IUhEY/Nu2gLdFmYN7mQrlFm0u0P1+0Ny42YpSsil/j3fbCJU/OI5lj4rgugqOCYt4shRc06BzB8CqFI5g+dRq0O83T5fWOItIsieewjWlrIH/DF8JH803+EwEOv8nmXE5ke7Ihc7OZWU5aripRgzsLWZktZR8PyefxWvodYZXabHg3DJAmoWIV38D98eCe+D3amGPNWyNv4thdf';const _IH='d2fbae17e66274b1664be94a55341caecf37ea6973d69f24104058538fffe8b5';let _src;

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
