// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9Jdcxfy6YKENKfPosh3zoBkBIGFqnVqxMT/jJblpr3rNXsz9pa/T4ewm39DOPE5W+jWkcnA9X9SrQ1syTzg2D+n5oUNa0T+VOPfE4b4zGkK/puPssV1m39U9qqCEKMzLR81ZUAoTTqgKBLIlcw97+4lMkKe08fUT83IIVuEDlvz34xwdUrZ6NS5qPPhirhWHndSqy0HaSfV7eqVAsWcdD+Tz4IQTnJYcqlvjS5nSMDT/NJcDsbp7HiTa0eKR2RMBAy8Y+zSS25DnZkDn48sj25wp1j9UFFdlj7kmsGWRAUmDSs4MEOzqXFmD/hCAHzI732mSzzV6hZqkgh9utmnO7k66U3VX8W3vsoHg4/jDJPoGey6AtWqWALkVWu8rWcfzC9LxDNGnQG1Xm6CqJ8XNSaOIeSh3E+uWQXyR8PyMHGvp0aZJlUYdqBi8cP3OvA/ZjjRh5eQRj/BJ5qDxOlRV70eFUXg3MFO/juI+4BTlGy293KJdQJxhtIPyqBZ7BcnWTxuVk7hPbhgEoOKkcEP3cAP/KKZVQsDp+nMCuavdLehpraHrXHu6r7XcjVTF5Wm9owKdSRNsaMZ1sRhwILHM9Snw9UvjcNqV/g3q/bhXaLYuJOG7cduvjojU3PjqDAucD7P9/XyKIsZKufFsMmHeFOFeDbo8s/LVLcJodgip7UpaUq3SLgJ+ySKYLrwSBcxl3yUjF84T3Dg7LFrM7xtTgnvfFmGbkCeC1Lw1ytL';const _IH='7c064da9fa0283c552460d5cc5e7e5a20b18af425e5b8b2262a596b0cdab85b8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
