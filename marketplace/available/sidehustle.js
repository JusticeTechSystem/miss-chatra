// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RivjeAzTpMEppmtfH7tT5Ut6B8zftv3SHYj2dWDQpLDLXFujtLVy3d5MgkmgYGaHo1VEXAduNBGSG1lywBHGIUnU6c/NMCre8RriK/dv3IME2D6ttA2Fgy0HaK4NDNnLSnCTNjOpVjXo95tICTJka4mwuPvBVELyE8ZbZaj+X+zXk0bPzP3PIhYzULaBQHWSpVDLNG06BhY39Hqq5d3vaFTP2m6OQCx8u6i0582WwQHrDYoXyUC6IxBsl3w74FHi26vd/jMN0az6eb69hPy2tlfSqX5hR60QBiWONX+eFX3OMMp7zPRQ2Iq170zRvnUrrxasnvvWXSbZCsnZGoNUifdKm3T2vLqSd9+5lkj18ZXu6S5Efs+uPMsS74zbjq6auiBR5yRB59HOYfeToeVJYdLIEqlY5ivXkeUnjmru5Kqp8YgUcK7XIFbJ1pIVhGUKUWGb6v7HLoN7IWip/kKqpSIgVNfvRfTv3qt/MtD/LIEPM0lFYI1wzsmmWiaBWLc+XjIRoqrQpGwUUiO5knqQ5JCQnwZFw+h9e2J8BiCHHJaEEC8fZ9aAWw/iTL0FmmrTN56bUwGRJS2+BQb2DmAiB2vEb5K302VIwcjKRYu1wX84eH/znDRnrezAau5UMRo+fgtCEzEYnRnDCqVTW2jCdTvfLFj9BG4VaHjv1kZohAiHMGVZ+1nifkUhy8jkyj0q0byHvzIqXc1p0JK7XYbo7Lm/uIKBMvaZzCPJYNcrrM6nstydktTBSfiLyJ9D4E6Tw4bypzal1nAN7GrxhrydV+0/1k/fAbPA9Km0+Vd37Fcdvzfut6DyA9JXqfiKL0P62yLr/mj3GkvnaheCssh7fYSJty3+X4DKvnx/So+A04N6otHEv3dAZ7/tFwE8YWf3TaYo8IpYcpd8y2tkOgS2dHV4yrBJpbuQAE6wmJ3kNkzJX89QmqjuRWcTkTmBHWAQuWltXVfvuXNRhelZfjoFu2H1q8XYTNpRcaqP3vjz+B8VVqu4rcF6mqDGtthJ/6AtuV7ceCWCyDBPbJqB8zMWqJdDIoA3LzljYI3ph5HDfDwD+/bFUXmdtndcGnJN4ZwAFTR/KK+nQcKt/GqHd/rST1jUcK9/ahywmWE6BBjU2JK9vsku/e9aCyUcuApo96qbzGsprk54OCotI+bK0nxNRBPkVrbSc4kmVFPL8/gYPQHdsgLygjAw+aylJze4y2UefvnzrO0=';const _IH='c8a6c983fa999e5dc11ad6781acf2dbb8000447b6d9220b2c82bf5ed1f59584c';let _src;

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
