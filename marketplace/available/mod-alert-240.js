// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X9ZVdh8cawpmuZGDb2YcQiYWYDXaNMpmpMWxvbVVRUGwJ9Jn39vOR2p4pJ6ZaeQzpzGgYk9iFILhpOKgVAk6qOaVc0CI2PYiOneUQa/47fCJrAx4vpSKmCoiw7TUp9OxKAeYQsgF1Xg7wqkadm02u9+p3UQqYgfFbNQBFrnX3NKMgReZCqLae0N777+EkrSmn1Y1dkf9Jd3hV50HhpWuOft9VouwQVt5SGkMQlTr9qbVl7vx34XfuZjV9zJR6/t+274Cro7qOGyP0PEtYyyJVDI0fB9tHxWvuxZLqLRMztm2HOnRbXIfOLgWkxThe44WTs7oyikMGXvHYQ2M8DP4o/pgHD88Kn7mQhLi03q67QgSYJtiLqTGhg67SsG+DSb4yOAATBRPZbLD7EyTOpg8bpuTgFIiTOPqX+NhHtJCqawTuSqQCVESgXl8lf3MgDWBIyqEEKPNCZGKxCTVam+D3/ruU7vx5ZMRK+7FW3ob03lvyoR++KHdXNAz7+xWlNhtrgblaJQGACXChJ3kQM3pgYjb++6ohZ2zzPfnSOOiE1VSXI/mAzWpWN8B+0Wo0q0r+3T31gK7QYkmCdsBmW8CViQrQ1OjPp9+kxObLMtaLppibQDefBO+jorXNrK2BfeseZ1YOmpr42ECF1YwBOw2kwnH3asVfIBZRWNW/e6Hesz2wXz45VUGtvYX/GmGCk1yzkxDvuMJS5/f4KX34zKHK2lPuebKAa9iV/9CpKF1uo45LdYTAzYPi84VLo8ssDsNwUgvQcO7YJ/eCO/LQItBbiNg/dj5w7tLFRY4B7om7yI3ACt/i9d++0i6+xBFeHUXe5XN4vNzrksQ8+QR3QjWd7+ex1Qy/F7v+wXpTx3XVfk6wTxolkdVwyInUcldWKqvd61CLggBwsKb8nyzHZnSApUL/kwvg5pbw1M+GCrrxtvVtyxHuSdLL2JlDshJmYlfTCphLSAnLURQOx+hT/DmYjW+Uq8reAscnZyuXjRaV0jkqXBJkv6IZdhfkShpunJOMm/2YE/QGSfe+cmGmw9L4BYD+65mCaONbYR3LU9fIznIf5M+f4lf9tINbc4/dvlix8KJnD8q3FO2tS8LmuI0ub6S2O/5OhrKqr2Dyed/piUl6jvwyQs6abJm5DrjLRPwSsNgp7yXKI4/21i25DJLoTdVxRXlKrWOGpLvor8Z/6MKH8TRb6PNePi9I5+nMF+qfADHhgQiqmJQcA3I2PfJ1J5gAf+MbLF5ibwTQ2OSG9JZk7i2B32bcxCiKEN2liEMG9NCpjP1SDfDbBgyG8+OidfooPrPMiM7R2zHPjcNTVu+brPhLbtSNbDtPheycUL5RYUZs+ZJxSoo/13f2KrwlShRUQrC3zFT8IibJUKD';const _IH='75e4532c48328df6b80a6ce5b8804751b870d25062e83ef70be94b4c70867b07';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
