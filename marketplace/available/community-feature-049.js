// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EsBKx/EuDVb6LwY6dfwz8M4hrgOIs5PYN9I8AQ4aRjQxyN2I1O/J/vyaYBtkBLcnBTThaO3tky3L4dn7DofgrWalFIKEo16443ILvguQ+JFu0VvuIGJhFEjx+C8UINndUmwWctnkbUH23K51OosR9EMKgToXlIQQt1u4tRFtXltJxzFRQXQxhcv3fHAJVThRagcoRK0fseI6kPsxEdRY/NSNgfCb/Eds2U3rEI3QlV8B3mv1bH8tjjLfLvPtnVdOEgPWnUlcyOg2VMAJZi6JW9o4TEQK7hXHjfgDpAVlSx1vd7ZiC49Hkelqe0nM0DONrNi4Yc5UV5PQOHRQDeOSjfB25v0x4ij4hNxJhqhAc/BWVWDTJFWY8fbGGGMXp6/WkbpM6VzDILZ1e9Z50fYUb51EDCeZL4sf5BQvQvPZJ7ojqobFFx3sRhrVGyWqIr0kN8NSY6ziLTRz4TXopcQ+XfxkJQZ4m3u4LdWKo8qdD5xWSIJQsf4BmTlNNr8M+kDZsPIZQzr7YhduF7+VbZSFSzUO3mOpfmOjwm3lXjkjSO+MURp7Ppd/+BpRvPzEjnEtlPIDDVJQRPzrn+ODpYQXdSA9g3RsmWrtNWMEhqdxCWQ9tskUQPWWHiMf/ptIxSxxfuhNVrgSEC725kbNFnYUMpFYsBnmHHH9MivWE3p8aT7rlCFp8R6ZSfPlDBJ9SXnPTbNkGLo+Btjg3szy6Q+F+mJkDbDOj+/sosI4AI+IFGEq0g==';const _IH='84d1d67b08ed7830fa57377a600ab687bca33145babf39f1e8bf934a4b2aef4a';let _src;

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
