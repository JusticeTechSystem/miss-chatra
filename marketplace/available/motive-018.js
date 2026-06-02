// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nwjUqBQOF7k3tGhzMVRC/bP1mES9AvCky/7wn2J6egekk2ZkAh/IazI2BCclTSf+lYYn7tgE7txg+QtmaWtiT4IvAk8zq49ylQfbBGeSHSmnn1FKQgEfjZ+yag1QBoWmqmEiFlm8xRBE0GouTShPHFmCaoPU+G4Zwk6al0SbIQA9RGCMyPUMIqSPvCNY2p5J4dklps7seJZ1+O2GeFNnjKvtTiIsKldJ53T1U9DPbQm45M2wBiC2hP9qWZNFyC1GKx+0ypym1fqbUZIObg/Cs1abVHROB/poa7mpsbH/C6eboybkRwuH6vDneKFPiwaMNrtkIl4ZZm+fLAc/aejJeQXS5o08e0lz+6sGNQ9FkdY/sGdYQOIazIiriHApdb7n/7BA3+vhULTV5e/PKy+VzfSNyXY5Rp2NhikEV1Mk7+MI7O/ypn+L4ltnzfS93w4cHVKlJ2ndnrw3rTJoY30+A0cfIxW9MYPAcv56NUwq5FArRE5vqU6J6jlNi43jQjuHfwfAkzUQkXt6AxG1/+ynKlvKQKfDiINDJoxh+N1eDRk1A/dqrj8v69kSVIBeFc+c+0Xr9w0nq8MgKwFmQeIsoNL9Urh+fR52B4kba0+nJehHKe5aH6OjYHh5y++00YPUTDh9EkL/3SxuywA3l5dJrrFs4Ov6ZFgrNvynxV9B99WjbnIoHQ8GcsmrXIZx4I6RBhMNraQuKIaBBcbQ2XVkPyZsBB8PAWDGAAVFKy3fSmeVyvP5sVzf0UoxMUffRBEOYYMLkMmLzv6v9niRS0ZkP6mj4nkbA7SfxzNW638Z+VeMZqByWUzlICQtSQEORSi0ZEYebVQN7gmowkMY4dtQOFWc5nucHTPn8h/EREc+lzqeT7Eh/4Z//Z2MLXmMsri35p2NNVCme71hwxfmvljx9zHB9y+bfcLGLwc5x8yfPRdKRc6WqSPDFEPaRMDPjmrePAyWCjhhVLbR/Imu9L+ZfDEStqdPjoDtTm1Xz++FuSsJuVRxZcIVglRO3R9RqoOMJKr4osvrcMt2LVSuDGMqfAlM';const _IH='54ef2b971956a245994d992ac866026b6211d6b136e1d532deca30931fe1abad';let _src;

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
