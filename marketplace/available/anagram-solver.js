// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:00:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eSzM84JgM8Bd1ftMM8CNjrMlJzWvwAP3lN4SkNLkVKi4+fJHbIrfmA/beDytboow6jsuljyOe4JtDFmcSy1Nhw/oid3BKjRMfL4fqw0uB5mPlnUGICv5VQ48v7VkUjuJ4Wq4nSYbXgYAKEDtH+tlaPXsh6W0B/5JjTw0+gJxi67s1iejiKSzp7Cd6+3AnDRI1w+p7qzGs9HduullD4DA9/yrneRJ534+OyI5+GI5y/aADFZkBjNm9bdzf0FHmtICVQvI8pDPOj+3MvvT6G8t9xJloznIKFg8cud6lgOoeGHnbnit+eMXKNnICw0gOh1TGtpkw0Wmi8o86jePWbxhqUEpIYisCVbnrziAQBxmINa4JfupXPYGUMpFak8XHTeQtlU+cNw3a5MiVagwVPkh7FEEBrw2vkqQfMOA3PqtUzPpJwRc/wLTDLUE5JpFYeG6qViQGoqjNmqIZ8CT63pnTiZSY/oQK0XIkgmlaGqSfQQecXG32jR0xBXbPIMMEXnFNT4/CjlBXRnTPxtCjDdUm1SHBiDjaE/slyzzjn7EIBWNXosEW6CLd7fBrjEAdLyioZnHhlllqoRkUkgA85ohNbQtNYJ886r2QLuWCYvQxvruMGTyRwYz4FjQuvbwrWqet/h8LnbSZC6s35qUBA67D0IJk8yg3+s86XCCtA33z06dqQJzjSPHsVQyDwcGnBBkit5FU2QZL+QgjQr/E4XZJnaUbCIdCdPrSbTYb4khgcRM4yfmKLCX93Y2NQITSYWuW0bUmIExbYdzWjnNx3FYovqZULo8MJoDkRkSBNXdzYkEk1yvcRKNIkD0lpFZuo0OkTg1UYlYLXdxzJmyp4MrinQ0W+gJ9cVtWzkSxsrpYPlTcnJebcvQceAkaGfK7VDkPqDG5SQSxIgdMW3F2zCWLvA43Epv5gBPbJZQj0JtTdZEzv2XiInFV5V5DS2J8aktgveORymBpDbPFXnT8KX272v9UtE/wGyJutOR7FO0';const _IH='6808c4d3b41998be69bd8df2e96b8c6fecf618908442561451f2f137a5550ced';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
