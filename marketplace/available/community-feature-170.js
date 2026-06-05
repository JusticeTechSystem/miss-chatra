// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xgwlMXzg4bcEr9es/8fM+AvKHVA30BsPyT3+C86YTv/OGySxRGcTc9IAlEDJ8COnD6yazbUHZstm7SF8fPJF+RYh/c4w3WBhomS+OVhRl4FTfewEouS6loX1a6TGnj98Lrue1o8X81A9H6i1YH2e83uyg1dpQVlR7HhtflLC2z7CIqX8W5mZxFBqQL4QHaZq3hHNXus8HpfXD87K/X+X5zPyDMtsTxuMFn9+YToymwA0G3lavaoK6F2rhqk2YBuKw5iNnIGuDulrT+fXUD3zn8IqYU3wrClUEjuNxI8Kqx0gbD7xz5gy1oOSpLh2QATuhYqCqbFcib6S6XbIXEgsR3J/A05RjlUE7bowD1YIMLHDQVyJnf5Q+ZTSIWeT/vvyFGjt4c1MreyZcNDRpkZauydCKhwFC8THUUc0cZ8PJcoR6z2JTZQ3lqIaiNaGxLoUJKAYv9WAByAgKEAeFDgz4pzEOb/K5rWkXuTZwVGDRuNcCYD9LbUrPlZpKeOTYgsZzlqG1rrQaQ25D6Vfdj5ZVfaeq/fCWvzA2T5P61lokXuf/6haiSD/aoLPHRuXpdEnfJOK+PyoNit1AI2GEQbc76teSu8vb7920znzk31CPQM+M1qllMphXxUI9PDrUQem/UBAxFZD0I3DfQXkyyg/JvjB/lNrmy+gyvwBEO8DhuHO83cZnoCZq4seY2vF9nI+sQ11iw//SxlkUH0VgTisoDe2UvRxDWBjdsoMjBMUtFKKmy8eSqbsOuZX';const _IH='82cec71dd134804f5d21355905a4ea7f679d5fd1e738bd43e85dc6a9414e45a8';let _src;

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
