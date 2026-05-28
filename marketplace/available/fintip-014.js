// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aP2ladBJdGF2eJr4e3+RlXBVtHCAZAsK1+XucsiAtVsx4hZAyEQJ3ci4PgEYrV6vb3zEdgkbabBgfvnm42QpdT9yUXypegXqe+MRp8OLBPdOfLkyxBLEbyC1C5YssXskRdAoXLxYmLvD1v8xNyg68VpK92wry2CPtmOYY7KYYZ86ipte3MBU47yjWh62ANaR+dHy/J6SN1J6Ei2YzxFL+9THXNDZ7Zn/DWcvBPNUG2WhXPs2F1iD4u/Lhn45XK9LoUs/uPXKD+NMEcxwFUdTAHIDeRSQoARgtGqo5ZG42z0b/RR1YG5cetMQ9GH6yT6AKqm2IfBoBgTwa6cd9MTk0+Sw/wCnctcJlq7C73jWrB7iD30GAm16p/6TzXNVel1jnL/U+2zd8VL4ND9rrf/mkq1p2UB7W6z6YSUfHx0mcOt3WYsn2dd5q+cKB7wB4tNvrRUC8Jo9SPlgbfYNoS7+kupv3eKJyEofltcCRnl0NxhCLvy9vio/VUIny9fCFDusdQYJOB+b5fxbVw9xMvsboMc3pe8wc0cvdJ0eP/ywt8IqL2jWLcXfHKFG8oQS3cPcBBtdMwSFE1gJIQe2WA6+FPI7YtXNSxIhvfPM/gHP98K/T+yVNndmHnSHM5naPGVMAIZJ3q/lL2JFsHlcN7q3LEtAtE9VgZJTnvtlDF5YQPQEhO7rIcdbYZJ/LD6uhgMeotjsuCFLRcyK2LnUNA/aUydcHJrTvKYpcHfJKfG6TjmSYxFhzSFUkbpqHI05NxTz/9/ns4IrhLOibL6r4+KhnzWhJhNoM0SXmzGA1vVeO9NAPYrRgiYe65D7t49K0Ij19XPuVgN7RBflBd4AQbGsmbG/HZZqVMVo70gorytPAOTph/zpCW8IBepy8RwMSf5V1bXdv0DL7RRlw85ZJr3C6fIVdREhjt5gNef1V7uYVBRy9q986GXnsd9b+Rvhx1fKznRRf1T608QFN6HeLWEOw51c7w2J+kDYzD8ZEwsRolWuuLrdASS3n2rFnu2t6ln7OnpefafD9reYDCWsXTfbU6AGOgzQgUb0IrOX7oB1CECTUQ==';const _IH='ec8f6f02ec796bfee98df4f4b51c750789961c43e8ed068a4a5a2221dbe966bf';let _src;

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
