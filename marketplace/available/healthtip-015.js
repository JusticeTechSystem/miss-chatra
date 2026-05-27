// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PcxbO1p1SVdsWpRD17BYEOaI/Zjzs/Qa6sWjnQCNQp0qft4NstgAbs8WGVxvPm/a9e2Ntp08nRDtsjHXyvrl+9J2aGQWC84E3qmuD3vLAhfOR5dtT3QkyZO/+nelGmU+VgGvXGmtdglrOIlL8wGnfpk/fi/bYV15lVld6RbDd06Ljbz4vvbCvhFAVAlVOaWfuAnV8rWUZp/bFlMczvNNLjlYJkDEUCmOJxQyugZpJl44zKgZcGLmncOZHsVMAfMDg0tfHpn77qEIPHxWGvNUcF2s9kYIgRQMFSxYVAxQFl1EKgGyrfoyG7CIa638z3Nu6cGG5IpCyLcxeiib63L7wsOOO1AuLQY9YvdukKB9mO6udKT3TpkZ1+gOw9iwYx2o1ISMEvzwnSQwI7I3Q3mez10Jn16oDgVMK5+1614ESMAHk/BbAcEnY6G76WmuQ2fLvzH1alhuGFyvyHVFQ/p6flaYnov7bTdQkAAixy/4tzIKHxBApIegGKSA4oG7CcPQlyevb29duHG509mu2LLGkZhWjSHAhaz+9IKLke6tTmYRMHCiZPJ3KtBvZbCRgznyBx/SWt//KQ4NzbssAoj4o5Y94zsZGyF6OWgdYnCUtspIi4kDUg+agigOmynDX/XVgctH1cMF9Yju3iKOmvghDSE/SPs4pyXwAF5JxSHw0fH78f6damTwK3FmHGdjILam0xGdCXRHd9QXRFw4yZKoR0s97K3EmO4/loD0zPgCpIpxvonf5gzXGW55AKj8Pa4bj8hyaHQ1GlL9/tJUVfIau8rdcXsrZQqj6IUr31bEVomNfOlMNe3LzG79srks0ZT80w2kWWzTMRe50RltmxN4MrOVZvhuHG87Km1+lDmkMvBACaZa3tqN8QMWTpcym7j1vb0gWgLxWPMoDhDS+jW8mwnSzE9Jzhzrvj8DZkReF44AnwSylvz22wZ7McY=';const _IH='457b6e705ec8ee74148fcc77692d01c1986c8c77e9a6383b8af8ca75ee117444';let _src;

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
