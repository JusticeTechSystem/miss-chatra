// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSbgPzOcrEf4IBFIrS5Rh/sZy86kj/fDez5028wBrSycwfFkx4YsSklN8q7R9n3Gv6+T+l4xYjRMx0Qr8MM+oNq3GPSpwi+3fwXlldH1pr/Y4Kpx8gyQX4q/ZPz2c5pMOCOMKat59VdZ4/os/B+bvkue+chcyEz0AM/GYyZIWrM6qltWCv29jDEoGjxmHd0s3J9GPH6AkjPqPf3Fe3Lxn+IJLEVfm+ltdqH8p1g/mmSMvtGj+eNXhWQNqGv2N15P2bi7rdOwvLE5pkqVF2U44hv87vl50Mn7lRRVOnLZHsemR3/wqppe8f0H+egemuFXWRq7gpxZ/1of6ycl6eXl9n35ra5/oNRo8wPRnzZJ2fKLyDH4YPJIwUlmE2mfVzUsKfJu9rFWSyzfM3XbrxKThq74tZjh6ieARJ7gNKTzU4p6JX7TdEIH4rmuWPSQRSaaXiSEp1c1cF7O5dw6gizu+j7kRSb32IXLe/BcZGBOY+R8D96cXpkhUpNgAw+c+opebOVypYsgbRboDsUXeXqKmoGNwwRyeyLxAsHVvONa3U/d+2YdxQadEnqlt58kV1U0VvAPpQmUVFjgm+tUe62FCcB5mi1d/QIhKQqhpE5kBsuSXKkZKgf3htuw3GK4d8CEefKqwbF+8Gre5fBDYdWtLonyWtqQwxyIs0XzUjofvc1syYBK1zoscueZumKtQHuNLMBlgy2ZBO+9zCoKoh/WviBBvn1kUdd/UQfZ0EXSSnYLHWuqYkJH1GP5puwo0aq5HKSajNn2G5vqw0xJ+C+asB0NRAcaiMFpgaL/SdBZnnSZbevTYvyIEGOWnl4BuXbv+ojMmduQMRHQ300gOzoLUPfqqkbm+JNEecVV8kECwpdJgcSrCm6JcX2ewHrFqCmcqk2m44L5G5nh10M+9a4WnY6yNk44CAQRSfCd0WslemOGeqKY7dN6tzv688equ32dtcG50z2T0CzHRqOc+fM1MEJSAxmXDqSeJzUksQlj5RUvJHWZuM8eCOCH6eb/r2l99N8HO9OccA+v++UlsjkceNcNGpoMLlshwBrx4PqX+wXxLPFREGvs5YBq7zrspmU+EA65OZXK/viAQ9B+qmjKYxWXftk6xxNPPsN3RqAUGXDE7VVk35Mi1+EpZu43J+umO9NNHbksx35ZPG8Vz0w39QIxtdMG79/WT8YcogeIkeKnD6n6Fc6tSO1fB9En3ZieGW7e470AZjFGmSrQJIdGKRjrPH6NBUBVJQZ5DIttWKyDqkAopPz6RPG3d+OP5yb+5v8x3979L+tmMW9kc+l1+0821lr8v8tfnUESkImF6Lh/0CmlWMRXgBEG1xhjC6zfl692+7+U/qGnBUoWew5Ip2lA9u3VX9XOIvJmJsq/3v6lqbHTh+FlnAK0e22dqHERQ6RIhQgCNvkTwe/2q1A8rZqMH6FuP4xrMsSPbyy+kriBWO/hEs0HIwVSqME';const _IH='9a1d5766eecdaa57212c4aa6dcfd26c8bd6cc70bd529286de0c56d74cd8b651e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
