// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m39XnwCNgknkm6fySAf/BpN97ViaIswxz95O9hDYWAg2hpdtIVY1iX+LLjTEBA3ZEbtH+6LU1gXFQmjf9uN39fYZktEp6zu/g+TaKuzt7/uVI2gsRFWu1XzG7+cOPujRTLj4OSdoUvGPNg8vkdaEKegsFbnV2ovKM1CLio3h07aeAFwfQVJlmZbhLwUZMuSFVN4tFm3U6qVKowsmy2mx9KOBJlsiG3uYJEiFAk98cwMqYogZCKuXALsTMkg/RZhnAA7juZTho8XaiKix00AALEcVom6kcpOnvvLllknM4rnz7aZ1zKWQ2+2gcKenXTsoeZ3D1q1mov6tdV5/EeG1Uae6JJD7oBIrsYoIF4LUCfkDWBvbt4pQSILkQ2HU+rA2oW5ct9J5bN254qmrEibLsofxXWXQ50uWLYDRDEaSsUTHnYg7INGBZG0LW1JXxulE6J0dd06x8g79MxHeJt+nbXBxCbdszhlw9jndAvv/0Gy9qKQuukQ6Wt2/5YDhIfBQGwzTRLHzZHXeLV0/XXn+721a7TvBX4NoRxZRUw2bymhfhfWDEOj0VlQTRZeoBBzLxbRmTJcOOa0znSfgbtsuznV+49tUxZ7T0X0JsKJTuT5pBKjuXMlCk+mdEDEz+zB6tKNA2OB7tPSEz0CwDIe0KYBVWajz7O6UUC3f3knG/IBgCNRPgmjSbShTyvJKdUy/o8TVFsN3x63XeqVR5jedzYJoKWqgS1HyI+KqF2jETWlugx8aRo3LBNb/aqjMuNzDO5sFzyhzp8d8FFPV6gBfth8P1TiPjSabD3rHhQwBKvLZDuj9Cnwb9TnV22W0rOzU8cgBEQ62oq3GP2HNS/FU3y/3wmycOGDJC873N+4zkG41Ju+9eGjX89bMMEXAYkfePqVQqrpzKapGs4Fdy8lWU2YrXa4iJrTS6atZRY0tQaEg/gdzl8RWtIs1kvRbiuq0o+rme9JHhGT51jjAQnW4fAq4noAqXbUbodVIQf/pqDKuFlZ/n61gmag1iExfw9m2wExHwB/DPX+e/qrb4fj+zar4s8oI3MiF8RBA3niInaOHuF5RMT0ez2VEE6M+6hd5OpW/pLU2C3Qy5mHYChQ1zTyPYXisi6OvYnw5Cklq30bGZz1ZlcDbGFsyoAQQ2G9S7nsUBFRbahnXVGvXMP08qobJ+nWij1LDbF0T8inOZW0/CI+vTK3L0W+Q1W4mTUSy2Xiy32S7+2SucuVEgdeBzD+YSZeus2XRIyb4+IJtgMCgSJRjDPc04ljsjcBvaz9qdZfRtsPV6E0+wjKxXMURWLN6HRe3TzsuQIvoTEHvIGeiuzJ/J+8bqclGF2cbQtbasIYJWSKzCYJFU79yq9+f+wI1O9oPFdoitQ==';const _IH='79ad7ed2556ce245c001880f54534c3008356126265b96d4f2810d4971633748';let _src;

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
