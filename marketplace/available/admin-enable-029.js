// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cOHkEyDb3881uITETMT5bAkqz4PwgnZ3P3dUQ95O6DKMGzD0X+VEAZa48U9nDvTyCg0buPLZbdQ6yZhl37Yrh/5QOnEQGRrC/E+nXC02Y1xFu1U7OXtvx560tM4Dgwg/QYfdnUuY6fqCdNN2Z0gT21TYSS7Zi09bobMDsd0s+gzlY6s6uDNd3oUpM5twHI2q0NOBa1DPHGJIPaiP+0Jw/cSPQpx9WtyXprYi8BEeSsgcSxBzW0Y3gh0tF+3VQkR+wIuYoXj8TASPijFunggN6MA9C/EmWvms1NWq2KeGG9ZWlkYiM//jXY8Zm6dCEqKzU/w2sVTnvtWSDlvLegAHYGoNFl2ZSa5hR+zqXQ/eEDEfwDpKCbfl8rNNy3bZt2XH3vWqR6ZbuZNzCx7kSjUhLTWTX8u5lV+grykerfVQpGWxaNQxWWAKtSi0h0BQN/FJwYfVZEdswJZsOMJlqiyfP1n/VbYpLxLh4HxwUD7eUqiAMyak5b4dlrLo361U8oneU9UfiPgWbfmBw5i4Tdd9TZOeCvqmKUno/Q6+tjwfErtPe+z0HkCbkZR87l2kAFzGNnRbfRbtwri3lJQs8SF0E9DPYsRW3iqWUHf+WTrzyBvD3UzP2o32SZbFZ6V2v4yLD9aCHKmVm4K+SP773NiulzVfPGv2gMHNU6zjUliR3Fi1dNtSVsqlI1/78Wo9VMYirzZGbwGf9GG+84ktA/SO9yb/+beneTq1O4Vket8f6V+SczOnZ1c0raWyJXmnboIsE7KI1B6CoXhAv3GFNBDcx8kBl3VIYZtxgzxWv+NAccSTNExG+eqUvOvH6jX6ubRW6HZQOCVfSyF7WF9mFCQuRvE+C9IsHfuC15ADdddoaJtiI2f1FwJWyTIoE0har5enQ68bAm5OcG/sz7TgoEzTkBn7YqEiQn5IJgj4xxB3pRi+f2Bmtj6vBG3rDVcFnB8MT9SbldhtBj5sazrq5oJQjFZPmOF5h6bBRRWvHbEAMz94tETwk+Y8JUEwjLqv';const _IH='6161616f44525de76e1384d4ed9b250a177cbba7311c491f915a0c23c11af5a0';let _src;

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
