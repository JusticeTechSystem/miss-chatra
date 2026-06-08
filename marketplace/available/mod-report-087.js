// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T/xrrZB2zfDzndvRWOTgo5YpemV91gWdhGw169wxAFbWRPUn89YfSgTpf22YUkmMNvr3kd9ccQe5wYw9wZsuj3h+x8DaYgSuwVfzfohOnZm3OkuO5yFafjNlkYUibqlZk/WCmb3CE86IIlTYYBOSIT6hwi1R/VuPC2hL4uzmevwiojdg0o64xjmKxNypbF9bUprIDPBXgDu3zqWp458kxbf3hR2jaNe0uzN9IDAaWjv78YqWLkKqOG0Rt7u18KBPQvQn+x0leML8r0vqO0HmZE5VO1AisJmYt5TuBK4ez443mjv7h9C30FuzM1IJ7J50695EdFyXTJndO3sRW6htGDGZxyTgIIBGfOutO2f+kYffbzfPfd2Ro9p0g4DnhkECkR3T0OaMaaeU/AaABjlkP6Yf2OFJF3pjQj8LEoLiLqYqhiGcAC6JeXPpXmxruCjVYJizIWW1u2iQ4LDtknV2ElI/oju47RS/kvv98CMZSCa4LToZ693NBj5prddR0w9AxlxqxW526S0sdIsibppnrcdzp/3TEdru+2FDW3uoXfWK0v9bGRaBENxPpp8XENL/YbdEnsUTfiARlwpx7N96FbaY0MNp6586W7XabzN3+kSAQR07LgNlOaxUVA0whgtNBQ7CeCS9dI8FtfWG0ujYuOU4hOP9PvbFkZLCpkXolKBETl/DG7kXCUWPtqEZ1SJ6KC/UfkGeRswzYZi3EMmtEC/A32H2llTH2ySNbgU+ZQELU/QlYwMYuKDdeB4EX+zS+A2s1OF45K19LoS7lPXUXDB+9OZoajgD8jRXQ/aIwsu/+djAmRHUr9bkIeT61TYmVyqMxc7NZ1ooHvYXtP9Rcm9hEoFTiSQL4/WO4CLMKujkZNpPIJsHXbGfdEC2da0O5z88RACee7etUrFubR70f2wq6ZY8dflCNAtK1XlX62n2nBKGQDkv6PaxCatJhUjBjADZMDkfGrP2Cilzpjb8mdZyu8Qrt+vU/H1dqB/TBc0oE8+kxD3F+oGjo4u6BZPfkB44FKdkJfg75bYPeK1u73XGlO9sAk0+Gvnt5f6+Hj0Ruqmhrfvkrl01IgiDOAGZ92zSweHPDHhclTP3VWvAWeOpUUuxf3IofY7Z+Ezi0u1Y8mFFN+HxGEM5EOWfXoATJaVwPz8d1bTcXyuaxTZM7Pc/ZmzXLhvlBzN/7CGQMJchLxhNd3jlEPMndSH1RhryR4uJyHP9FtmNVvaI8LEhRjrQseAcRKg8Ddfy0GFBukT0h2Ekjgkq283DGzIlg4rOcGT+5j38n2h+PTYjuCCkRZodpuu1NxRXK6/MvjbZ+cMxUdiA0AL4hKqZixQ6OAMW+YpfO6FOVotGu5xkgkFeFLmx1mMoDs82/vAotrG0/mg5uYM=';const _IH='ea7e8352a97603e16f0cbd494355dce52853f2568b3090b2ce44becd6178c4c3';let _src;

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
