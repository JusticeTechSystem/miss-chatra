// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XPuAldEXhye1cMGjZ1vmxCb9rt7obtcNp//duz1zvVwQFBpfAw47FhF59Ratr2SGRytFAuq7jXmOVQGeaVqK9BZ29fFFZnYzW3ZWyO85L8mUGUfwMnTCURc9WUu8vX916woQUJ8PiWHU1RyU1dfbmS5YI5nu6Ct80u/llxYwPcANqiTKxkf0KT8S/P+0DlwtK5N9W/Kd+tmygLuXrhVg21VTumn8+aNWN5HrOmXBBpaT7w/YY2aeVLI7jJBjtxf/aAhR7Oo56Uogtk0mlEYB7Z4bxc8xCWtwIDQL8RW2u5U/d1v0bWtr/ikKpYSeqx3WtJpKmftUalD9+CbmFmRH/bi8zG5sxj26OcElqxaPEvQBAQgtGks1ErWcZ52fPlcFyWKWE7y9KgRVjCRuORJWQPMBj60/TXr8ihGqxGFKd8Chdlrbo7t/rMsTI7dgvpTlBDnGQBv8SnsWfW5tXkrY0bCaCjS/4ZQMW7/hwPIGLgEyGVbbHvZBnwpZO+5mwPjF3C8Vz+WDoffAvwu99e6CDDloeAIvYXxJ32rWu+4m3o0CpqC14K0ySNpho4MDhig6Oqod1VicdeWIiMw4b0I1UZ5p9eKEm+6mbmgQE0eK748RVGsP8EOKuxQ3fawhqN4MPWI7CQ3Emi7muyR54vf4IZ/WjQ/fyFelBoKxoFjJ8MGpQB4Fqt7G83azX+SpCa18DNDw/EkllVqbFVpgM275yuykt9aa7WU2uAy/3p7ytC4dKzMKy2Z4dpW8Fz7/z4APBlWvUfvaDJ/mg5/VOFWkRKs4+lcUPlfSWGHF72Um4JLaH8Tg7edme/2sQ4aKy0NMiF8NUMX2y9uYu5xrHSfQaadVOFn4lxRkV8w+XMNc4IXclFtn+rVFkZGOFItQkvbxBgdygDmRpACx/YUKvTPtBLMcr7VyuuJMwZI0ONinwp1DtEQC9jHNq7n8TGCJk+C+swFPjJ46euT+y6oT7n82NVzPTGmiElIkXPGET7pz0vUSA8Ze/q6qV/T2AH1kdeQtSljUj3bYye1XdzIxnqs=';const _IH='efcb1d24ecf71afc81b5bf5a929fc58d2cd2263a1fc14c9ced541f0e60017692';let _src;

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
