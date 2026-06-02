// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BmOZhXFsKogVUm4+3pBORLtyCz7MKi/nsSbcQEvmKiKNfgGyhSUldZOtFebtohg9aPxdj1tkny4S/8TR1rZoFiKatYpyW4+9NeNAigg0dEEl8k7pNnPQil8Eld2gxgc3wCVGnERYdOQ6IBzBRIJDW/+zQJ3OC/5Q5xF5Zk/VWDStBeIumYNX5u0vypEzanui2z3hdM6by/LVbHxBccYntr0lxq8B5WCdVUrd68PPBUTz1W3RlklcS+o9A8oifWp0mN1zRd/lc0oJNmXFUOxeGPZE1tBRbNxgon32nc1NX79SRC/pwXK00HD4rv2nnb/Xv74jc4zYzIpcNqqlMMeSgkh3mPVQXVqmdGhJigqBTXYYAd5CTvuIXeoMaGsyf0AYm/o2EsFkBdye/hesxaK8Fx3cK8hIh/uqjebg+YTR3g8+sfmYgxMU7cmNc23SnnCMdNED2txpHxBFsp707uXO2svYVFKwiCUXLQIBgBwC6NT1TvJaTbr+qC9AiUbH0R6PzMoVRtrA+lKr+TnxzwwyiLNwvu8uvxL9KVHK/jXy+gop6yngwjtSTBHoKPc4Ydodnx5L/IYaGEKoYSi4KLhHu8F0IP4QCLJayfZDdos/SvK9AoHwKUiWM4GZh6G/bvE0cGpeLVwzJ5LjzPBrDZeUcLDxtCdXpsfGQD68WVyEFOaqvRtHhv/8cHPG11cKJyR2DojEat1YQHxnUS5arqCv1f/PoDaRqJFV9jEdwnQBmsgE3s489F3n443aWxGm75VMsYkBsUhp7QDA+bDi0o1/kMl0Vspp3eAiWwwOK5hHAY3kEK8ADnw0tcsMftjBfwaGAZAdZULU3eqsk+t87vmhqze3cQhCyvvRv7DQvKyFuMuWn+qlTW0Yih61+gtR4EEVEEg0qqEEy+brLMQfPQYvEc8VqlEGKEAmRYrDdgHpBw1BzUdKuiM5HDDhqEFSL2tskSR+SJpnBvMwn8OA+2q/M5J8jbGpXMzPgH6UkVk1CQYNEEOtoN40FdPRcEUF';const _IH='a6a16ad09b5be6893339ae05a719d16e84a276ae0b1884857cfe25c620735538';let _src;

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
