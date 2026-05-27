// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8m0LXTCq95Obbem47nqvq87iZhEzVSjNh/RkBpYLXMppeWYpkFaoY8ibny8zyYkMiAC0HxaVQt3s7CABekW8VIjfv7hI1MIm8fd085K2I5bKxVQ0W1yMNP4DydxVijEv/ODyon9/vhAGVBGwosL/kwjCw4vGPkZGuSVbNHYgAfYD3rVF781PLreVbLXf7y+m83OnlMcpOiuHiesS9XLO77XAxSWyvTZ0DDfRh5IVwqiCWCnq8PTsyKwW2r6gkIO7OJt1KWM6blNdDs1cRPwi8P5KG4LB/oK5ytMQfSJYxT8eLOkG/fH/dKyp7pYXoh4WQ+kiWKUTBMjxMIF6aq4eHhan+7+bo0CWjLnVdto4hGJdYh/9ZfezMFYPzkWpeGOL8ip257YcmOlaryazjeRs3Nag13eGbihxbByos+6Z0l2aDVV2aU8vGyIiajiM9BLD4ZCFjY9DXbsa/8lnu6jRU2W/im+psTzy26o81Rs8PoYHqiY+leYUoJzs0ygNNu67sRFhYlNpdBDbuGIhCNXjzctDng30i8gkAvZuVk6Ch/2SoGqfT1ItIMimJ+mVfd9nO1ryk4/wm16xNarhG9e/WYD3oafFuITrF3Cb1kHuZ2coqZIWc2g+uCKZ87Mf3VuFaLtpaRlMBrFgkX5SlMhbx3c9RHaFypPoMWyD8eTHduE+QsTA2ZyzV0qHRPtjl4dzfAdHh0+lGxLOZrHOdxHLkx9J3Ap99dkNyK5+ypi0Rup7ykZaL0DTZWDY5nLNcaVakOClThIX25Fcl5wnL/p7yh5hGC4aoEUCzYIg6QYrYHuiw/0Ed7cLc0bN/xS4v+MeV5+nEVS4w8naSqC8/gH9l2MMAHWlsuziLhFplIAbd0jOGlQrzOOdqAKshfRy6tIiGSzYSaD5l+ph/7SSv6dnRPnVhC3MXGhb+PkNjEtdyat6sR1XSmAETqDq0g0x3IL+ckUswNMUJAxOFIJObe0CH83uEh+4XRJSuJLqkdVVNKYWGvicRrxemjP+fEM6A2qlUin+V/dCsbjQ+9fTtwpOYQv+/0DoelYxVcjq4oI8U06ep86uztlVwq/0Nart3DGOeF7ZXGrHzGwei6d9qm9k/8TOnef+9x3+qKPA1hNSeUa/U38VNDltXpKmRmsJVrpT9c4/mo0605+sKsfwI4STyQ3/zyOo6KGTDNLM75h5/Te+KeR36hAyD2gqn5X9KhvLGyMSkWNRlFwdYa3PEXTE37A2urwlU7djEMfS2oVRJNK1lyuRyv7U0y0bPap5WDkXijvABWlqeGCH7+n2NDykYdSDfC74gKArbnEgqHgrjNpuYo8S+lV+GFkCR4tSig9l8MIuAhdwzqcFXa5OTOvipmTccBS3ZUxiFUKrlrI2addAAXM=';const _IH='6eaf998d0831ce5f0813ca6d5b70ba7374f8c9f609bd602b9cd7545f77d88c63';let _src;

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
